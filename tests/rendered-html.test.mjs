import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the advisory site and primary navigation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Henry Jones, PhD — Ocean &amp; Atmospheric Science Advisor<\/title>/i);
  assert.match(html, /Retired U\.S\. Navy Commander/);
  assert.match(html, /DR\. HENRY JONES, PhD/);
  assert.match(html, /Strategic Advisor in Ocean &amp; Atmospheric Science/);
  assert.match(html, /Helping organizations make informed decisions through decades of scientific expertise/);
  assert.match(html, /href="\/experience"/);
  assert.match(html, /href="\/projects"/);
  assert.match(html, /href="\/research"/);
  assert.match(html, /class="expertise-card glass-card"/);
  assert.match(html, /Selected Projects/);
  assert.doesNotMatch(html, /Examples of scientific, operational, and federal programs/);
  assert.doesNotMatch(html, /radar|hero-grid|signal-a|codex-preview/i);
});

test("renders expandable project, experience, and research entries", async () => {
  const [projects, experience, research] = await Promise.all([
    render("/projects").then((response) => response.text()),
    render("/experience").then((response) => response.text()),
    render("/research").then((response) => response.text()),
  ]);

  assert.match(projects, /class="case-study"/);
  assert.match(projects, /Selected Projects/);
  assert.doesNotMatch(projects, /Examples of scientific, operational, and federal programs/);
  assert.match(projects, /Technical approach/);
  assert.match(projects, /Nuclear Facility Flooding &amp; Tsunami Safety/);
  assert.match(experience, /class="experience-entry"/);
  assert.match(experience, /2016–2019/);
  assert.match(experience, /Key result/);
  assert.match(experience, /secured \$60 million/);
  assert.match(experience, /Career Timeline/);
  assert.match(experience, /A career spanning U\.S\. Navy operations, ocean and atmospheric science, federal programs, nuclear safety, research, and higher education\./);
  assert.doesNotMatch(experience, /Roles, responsibilities, and results\./);
  assert.match(research, /class="research-entry"/);
  assert.match(research, /RESEARCH LIBRARY/);
  assert.match(research, /Technical Reports/);
});

test("renders both video interviews on the About page", async () => {
  const about = await render("/about").then((response) => response.text());
  assert.match(about, /began his career in the U\.S\. Navy after graduating from the United States Naval Academy in 1979/);
  assert.match(about, /High Energy Laser Theater Missile Defense Program/);
  assert.match(about, /federal scientific leadership roles with the U\.S\. Nuclear Regulatory Commission and U\.S\. Geological Survey/);
  assert.match(about, /youtube\.com\/embed\/aGyzn2DQo00/);
  assert.match(about, /youtube\.com\/embed\/JjOxszX8vbE/);
  assert.match(about, /Dr\. Henry Jones in conversation/);
  assert.match(about, /linkedin\.com\/in\/henry-jones-5835101b/);
});

test("presents strategic and technical advisory as distinct services", async () => {
  const advisory = await render("/advisory").then((response) => response.text());
  assert.match(advisory, /Helping organizations evaluate complex decisions, programs, and opportunities/);
  assert.match(advisory, /Providing scientific expertise and independent review of technical programs and approaches/);
  assert.match(advisory, /Strategic Advisory/);
  assert.match(advisory, /Technical Advisory/);
  assert.match(advisory, /Primary Advisory Services/);
  assert.match(advisory, /Additional Engagements/);
  assert.match(advisory, /When Dr\. Jones Can Help/);
  assert.match(advisory, /Independent Technical Review/);
});

test("delivers contact form submissions through the configured email binding", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-contact-form`);
  const { default: worker } = await import(workerUrl.href);
  const deliveries = [];

  const response = await worker.fetch(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json", origin: "http://localhost" },
      body: JSON.stringify({
        name: "Jane Executive",
        organization: "Coastal Infrastructure Group",
        email: "jane@example.com",
        reason: "Advisory Opportunity",
        message: "We would like to discuss an environmental risk review.",
        website: "",
      }),
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
      CONTACT_EMAIL: { send: async (message) => { deliveries.push(message); return { messageId: "test-message" }; } },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 200);
  assert.equal(deliveries.length, 1);
  assert.equal(deliveries[0].to, "henryvj11@gmail.com");
  assert.equal(deliveries[0].replyTo, "jane@example.com");
  assert.match(deliveries[0].text, /Coastal Infrastructure Group/);
});

test("includes the luxury maritime visual system and reduced-motion support", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /Luxury maritime editorial system/);
  assert.match(css, /--seaglass:#9bbcaf/);
  assert.match(css, /@keyframes oceanLight/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /interpolate-size:allow-keywords/);
});
