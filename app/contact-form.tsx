"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) throw new Error("Delivery failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const note = status === "sending"
    ? "Sending your inquiry…"
    : status === "sent"
      ? "Thank you. Your inquiry has been sent to Dr. Jones."
      : status === "error"
        ? "Your inquiry could not be sent. Please email contact@henryjonesadvisory.com directly."
        : "Your information will be used only to respond to this inquiry.";

  return (
    <form className="contact-form" method="post" action="/api/contact" onSubmit={submit}>
      <div className="field-pair">
        <label>Name<input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label>
        <label>Organization<input name="organization" autoComplete="organization" maxLength={150} placeholder="Company or organization" /></label>
      </div>
      <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="name@organization.com" /></label>
      <label>Reason for contact<select name="reason" defaultValue="" required><option value="" disabled>Select an option</option><option>Advisory Opportunity</option><option>Consulting Inquiry</option><option>Partnership</option><option>Speaking Engagement</option></select></label>
      <label>Message<textarea name="message" required rows={4} minLength={10} maxLength={5000} placeholder="Briefly describe the opportunity or challenge." /></label>
      <label className="form-trap" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send inquiry"} <span aria-hidden="true">↗</span></button>
      <p className={`form-note ${status === "error" ? "form-error" : ""}`} role="status" aria-live="polite">{note}</p>
    </form>
  );
}
