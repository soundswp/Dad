"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-pair">
        <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
        <label>Organization<input name="organization" autoComplete="organization" placeholder="Company or organization" /></label>
      </div>
      <label>Email<input name="email" type="email" autoComplete="email" required placeholder="name@organization.com" /></label>
      <label>Reason for contact<select name="reason" defaultValue=""><option value="" disabled>Select an option</option><option>Advisory Opportunity</option><option>Consulting Inquiry</option><option>Partnership</option><option>Speaking Engagement</option></select></label>
      <label>Message<textarea name="message" required rows={4} placeholder="Briefly describe the opportunity or challenge." /></label>
      <button type="submit">Send inquiry <span aria-hidden="true">↗</span></button>
      <p className="form-note" role="status">{sent ? "Thank you. This is a design-stage form; delivery will be connected in the next phase." : "Your information will be used only to respond to this inquiry."}</p>
    </form>
  );
}
