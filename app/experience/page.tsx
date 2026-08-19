import type { Metadata } from "next";
import { timeline } from "../page";
import { ContactCTA, PageIntro, SectionHeading } from "../site-components";

export const metadata: Metadata = { title: "Experience | Henry Jones, PhD", description: "Professional experience across the U.S. Navy, NRC, USGS, research, and higher education." };

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="Experience" index="02 / 05" title="Professional experience." copy="U.S. Navy, ocean and atmospheric operations, federal science, nuclear safety, research, and higher education." />
      <section className="section experience-section"><SectionHeading eyebrow="Career timeline" title="Roles and responsibilities." /><div className="experience-list">{timeline.map((item) => <details className="experience-entry" key={item.dates+item.role}><summary><span className="org-code" aria-hidden="true">{item.code}</span><div><span className="date">{item.dates}</span><h3>{item.role}</h3><p>{item.organization}</p></div><b aria-hidden="true">+</b></summary><div className="experience-detail"><p>{item.description}</p><h4>Responsibilities and contributions</h4><ul>{item.highlights.map(point => <li key={point}>{point}</li>)}</ul></div></details>)}</div></section>
      <ContactCTA />
    </main>
  );
}
