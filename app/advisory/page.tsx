import type { Metadata } from "next";
import { services } from "../page";
import { ContactCTA, PageIntro } from "../site-components";

export const metadata: Metadata = {
  title: "Advisory Services | Dr. Henry Jones",
  description: "Strategic and technical advisory services in ocean and atmospheric science, operational meteorology, environmental risk, federal programs, and defense.",
};

export default function AdvisoryPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="Advisory" index="06 / 06" title="Advisory services." copy="Strategic and technical advice for organizations working in ocean and atmospheric science, operational meteorology, environmental risk, government, and defense." />
      <section className="section services-section content-first">
        <div className="service-list">{services.map(([number,title,description]) => <article className="service-row" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><b aria-hidden="true">↗</b></article>)}</div>
      </section>
      <ContactCTA />
    </main>
  );
}
