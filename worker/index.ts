/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  CONTACT_EMAIL?: {
    send(message: {
      to: string;
      from: string | { email: string; name?: string };
      subject: string;
      text: string;
      replyTo?: string;
    }): Promise<{ messageId: string }>;
  };
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

const CONTACT_RECIPIENT = "henryvj11@gmail.com";
const CONTACT_SENDER = "website@henryjonesadvisory.com";
const CONTACT_REASONS = new Set([
  "Advisory Opportunity",
  "Consulting Inquiry",
  "Partnership",
  "Speaking Engagement",
]);

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { "cache-control": "no-store" },
  });
}

async function readContactForm(request: Request): Promise<Record<string, string>> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = await request.json() as Record<string, unknown>;
    return Object.fromEntries(Object.entries(body).map(([key, value]) => [key, typeof value === "string" ? value.trim() : ""]));
  }

  const body = await request.formData();
  return Object.fromEntries([...body.entries()].map(([key, value]) => [key, typeof value === "string" ? value.trim() : ""]));
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) return jsonResponse({ error: "Request is too large." }, 413);

  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return jsonResponse({ error: "Invalid request origin." }, 403);
  }

  let form: Record<string, string>;
  try {
    form = await readContactForm(request);
  } catch {
    return jsonResponse({ error: "Invalid form submission." }, 400);
  }

  if (form.website) return jsonResponse({ ok: true });

  const { name = "", organization = "", email = "", reason = "", message = "" } = form;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const valid = name.length >= 2 && name.length <= 100
    && organization.length <= 150
    && validEmail && email.length <= 254
    && CONTACT_REASONS.has(reason)
    && message.length >= 10 && message.length <= 5000;

  if (!valid) return jsonResponse({ error: "Please review the form fields and try again." }, 400);
  if (!env.CONTACT_EMAIL) return jsonResponse({ error: "Email delivery is not configured." }, 503);

  try {
    await env.CONTACT_EMAIL.send({
      to: CONTACT_RECIPIENT,
      from: { email: CONTACT_SENDER, name: "Henry Jones Advisory Website" },
      replyTo: email,
      subject: `Website inquiry: ${reason} — ${name}`,
      text: [
        "New inquiry from henryjonesadvisory.com",
        "",
        `Name: ${name}`,
        `Organization: ${organization || "Not provided"}`,
        `Email: ${email}`,
        `Reason: ${reason}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
    return jsonResponse({ ok: true });
  } catch {
    return jsonResponse({ error: "Email delivery failed." }, 502);
  }
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405, headers: { allow: "POST" } });
      }
      return handleContact(request, env);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
