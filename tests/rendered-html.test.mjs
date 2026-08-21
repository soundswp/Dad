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
  assert.match(html, /<title>Henry Jones Advisory \| Oceanography &amp; Meteorology Consulting<\/title>/i);
  assert.match(html, /Retired U\.S\. Navy Commander/);
  assert.match(html, /DR\. HENRY JONES, PhD/);
  assert.match(html, /Strategic Advisor in Ocean &amp; Atmospheric Science/);
  assert.match(html, /src="\/henry-jones-portrait\.webp"/);
  assert.match(html, /alt="Portrait of Dr\. Henry Jones, strategic advisor in ocean and atmospheric science"/);
  assert.match(html, /fetchPriority="high"|fetchpriority="high"/);
  assert.match(html, /Helping organizations make informed decisions through decades of scientific expertise/);
  assert.match(html, /Based in Maryland, Dr\. Henry Jones is a physical oceanographer, meteorologist, and hydrologist/);
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
  assert.match(projects, /South Texas Project Units 3 &amp; 4/);
  assert.match(projects, /PSEG Early Site Permit Review/);
  assert.match(projects, /Probabilistic Flood &amp; Tsunami Hazard Assessment/);
  assert.match(projects, /About the GFO Program/);
  assert.match(projects, /Mission Archive/);
  assert.match(projects, /View NRC Record/);
  assert.match(projects, /View Proceedings/);
  assert.match(projects, /View Technical Report/);
  assert.match(projects, /target="_blank" rel="noopener noreferrer"/);
  assert.match(experience, /Independent NPS Reference/);
  assert.match(experience, /https:\/\/calhoun\.nps\.edu\/handle\/10945\/23099/);
  assert.doesNotMatch(experience, /View USNA Archive|1991_APRIL_SHIPMATE/);
  assert.match(experience, /href="\/projects#south-texas-project"/);
  assert.match(experience, /href="\/projects#pseg-early-site-permit-review"/);
  assert.match(experience, /href="\/projects#probabilistic-flood-tsunami-hazard-assessment"/);
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
  assert.match(research, /Conference Papers/);
  assert.match(research, /Graduate Research/);
  assert.match(research, /Doctoral Dissertation/);
  assert.match(research, /Master&#x27;s Thesis/);
  assert.match(research, /View AMS Paper/);
  assert.match(research, /ams\.confex\.com\/ams\/pdfpapers\/64697\.pdf/);
  assert.match(research, /Conference Record/);
  assert.match(research, /Goutam Bagchi/);
  assert.match(research, /View Paper/);
  assert.match(research, /researchgate\.net\/publication\/290394379/);
  assert.doesNotMatch(research, /03sep%5FJones%5FHenry%5FPhD\.pdf/i);
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
  assert.match(about, /henry-jones-portrait\.webp/);
  assert.match(about, /alt="Dr\. Henry Jones, physical oceanographer and scientific advisor"/);
  assert.match(about, /loading="lazy"/);
});

test("presents strategic and technical advisory as distinct services", async () => {
  const advisory = await render("/advisory").then((response) => response.text());
  assert.match(advisory, /Independent strategic and scientific advice for organizations evaluating complex programs/);
  assert.match(advisory, /Independent review of ocean systems, ocean modeling, atmospheric and weather applications/);
  assert.match(advisory, /Strategic Advisory/);
  assert.match(advisory, /Technical Advisory/);
  assert.match(advisory, /Primary Advisory Services/);
  assert.match(advisory, /Additional Engagements/);
  assert.match(advisory, /When Dr\. Jones Can Help/);
  assert.match(advisory, /Independent Technical Review/);
  assert.match(advisory, /organizations in Maryland, Washington, DC, Virginia, and nationwide/);
});

test("provides unique metadata, canonical URLs, and one H1 for every public page", async () => {
  const pages = [
    ["/", "Henry Jones Advisory | Oceanography &amp; Meteorology Consulting", "Dr. Henry Jones provides independent consulting"],
    ["/about", "Dr. Henry Jones | Oceanographer, Meteorologist &amp; Scientific Advisor", "Learn about Dr. Henry Jones"],
    ["/experience", "Dr. Henry Jones Experience | Ocean, Weather &amp; Federal Science", "Review Dr. Henry Jones&#x27;s career"],
    ["/projects", "Ocean, Weather &amp; Federal Science Projects | Dr. Henry Jones", "Explore Dr. Henry Jones&#x27;s applied work"],
    ["/research", "Oceanography &amp; Atmospheric Science Research | Dr. Henry Jones", "Research by Dr. Henry Jones"],
    ["/advisory", "Oceanography, Meteorology &amp; Scientific Consulting | Henry Jones Advisory", "Independent oceanography, meteorology, hydrology"],
    ["/contact", "Contact Dr. Henry Jones | Scientific Consulting", "Contact Dr. Henry Jones about scientific consulting"],
  ];

  for (const [path, title, descriptionStart] of pages) {
    const html = await render(path).then((response) => response.text());
    assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}<\\/title>`));
    assert.match(html, new RegExp(`<meta name="description" content="${descriptionStart.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}`));
    assert.match(html, new RegExp(`<link rel="canonical" href="https://henryjonesadvisory\\.com${path === "/" ? "" : path}"`));
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${path} should contain exactly one H1`);
    assert.doesNotMatch(html, /noindex/);
  }
});

test("renders Person, Organization, and WebSite structured data", async () => {
  const html = await render().then((response) => response.text());
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, "JSON-LD script should be present");
  const data = JSON.parse(match[1]);
  const types = data["@graph"].map((entry) => entry["@type"]);
  assert.deepEqual(types, ["Person", "Organization", "WebSite"]);
  assert.equal(data["@graph"][0].sameAs[0], "https://www.linkedin.com/in/henry-jones-5835101b");
  assert.equal(data["@graph"][1].email, "contact@henryjonesadvisory.com");
  assert.match(JSON.stringify(data), /Maryland/);
  assert.doesNotMatch(JSON.stringify(data), /rating|reviewCount|streetAddress/i);
});

test("publishes crawlable sitemap, robots directives, and a useful 404 page", async () => {
  const [sitemapResponse, robotsResponse, missingResponse] = await Promise.all([
    render("/sitemap.xml"),
    render("/robots.txt"),
    render("/not-a-real-page"),
  ]);
  const sitemap = await sitemapResponse.text();
  const robots = await robotsResponse.text();
  const missing = await missingResponse.text();

  assert.equal(sitemapResponse.status, 200);
  for (const path of ["/", "/about", "/experience", "/projects", "/research", "/advisory", "/contact"]) {
    assert.match(sitemap, new RegExp(`<loc>https://henryjonesadvisory\\.com${path === "/" ? "/" : path}<\\/loc>`));
  }
  assert.doesNotMatch(sitemap, /api\/contact|not-a-real-page/);
  assert.equal(robotsResponse.status, 200);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Disallow: \/api\//);
  assert.match(robots, /Sitemap: https:\/\/henryjonesadvisory\.com\/sitemap\.xml/);
  assert.equal(missingResponse.status, 404);
  assert.match(missing, /Page not found/);
  assert.match(missing, /Return home/);
});

test("keeps every internal page link reachable", async () => {
  const pages = ["/", "/about", "/experience", "/projects", "/research", "/advisory", "/contact"];
  const internalLinks = new Set(pages);

  for (const path of pages) {
    const html = await render(path).then((response) => response.text());
    for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
      const pathname = match[1].split(/[?#]/, 1)[0] || "/";
      if (!pathname.startsWith("/_") && !/\.[a-z0-9]+$/i.test(pathname)) internalLinks.add(pathname);
    }
  }

  for (const pathname of internalLinks) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should resolve successfully`);
  }
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
