import type { Metadata } from "next";
import { ContactForm } from "../contact-form";
import { createPageMetadata, seoPages } from "../seo";
import { LinkedInLink, PageIntro } from "../site-components";

export const metadata: Metadata = createPageMetadata(seoPages.contact);

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="Contact" index="05 / 05" title="Discuss a strategic or technical advisory need." copy="Based in Maryland, Dr. Jones works with organizations in Washington, DC, Virginia, the broader DMV, and nationwide. Use the form for consulting inquiries, partnerships, and speaking engagements." />
      <section className="contact-section contact-page"><div className="contact-intro"><p className="eyebrow"><span aria-hidden="true" /> Consulting inquiries</p><h2>Start with a brief description.</h2><p>Include the organization, the technical or program question, and the type of support you are considering.</p><div className="direct-contact"><span>DIRECT CONTACT</span><a href="mailto:contact@henryjonesadvisory.com">contact@henryjonesadvisory.com</a><LinkedInLink /></div></div><ContactForm /></section>
    </main>
  );
}
