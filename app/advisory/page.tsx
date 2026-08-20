import type { Metadata } from "next";
import { services } from "../page";
import { ContactCTA, PageIntro, SectionHeading } from "../site-components";

export const metadata: Metadata = {
  title: "Advisory Services | Dr. Henry Jones",
  description: "Strategic and technical advisory services in ocean and atmospheric science, operational meteorology, environmental risk, federal programs, and defense.",
};

const clientScenarios = [
  "Leadership needs an independent scientific perspective before making a major decision.",
  "An organization needs a technical review of an oceanographic, meteorological, or environmental program.",
  "A company needs guidance working with federal science or defense organizations.",
  "A team needs help understanding environmental or operational risk.",
  "An organization needs an experienced advisor to review a complex scientific or technical initiative.",
  "Leadership needs scientific information translated into practical options and recommendations.",
];

export default function AdvisoryPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="Advisory" index="06 / 06" title="Advisory services." copy="Strategic and technical advice for organizations working in ocean and atmospheric science, operational meteorology, environmental risk, government, and defense." />
      <section className="section services-section content-first">
        <div className="service-list">{services.map(([number,title,description]) => <article className="service-row" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><b aria-hidden="true">↗</b></article>)}</div>
      </section>
      <section className="section advisory-help">
        <SectionHeading eyebrow="When to get in touch" title="When Dr. Jones Can Help" copy="Organizations work with Dr. Jones when a decision or program would benefit from experienced scientific and federal perspective." />
        <div className="help-scenarios">{clientScenarios.map((scenario) => <article key={scenario}><span aria-hidden="true">◆</span><p>{scenario}</p></article>)}</div>
      </section>
      <ContactCTA />
    </main>
  );
}
