import type { Metadata } from "next";
import { timeline } from "../page";
import { ContactCTA, PageIntro } from "../site-components";

export const metadata: Metadata = { title: "Experience | Henry Jones, PhD", description: "Professional experience across the U.S. Navy, NRC, USGS, research, and higher education." };

function CareerHighlight({ children }: { children: string }) {
  return <p className="career-highlight"><span aria-hidden="true">◆</span><span><small>Key result</small><strong>{children}</strong></span></p>;
}

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="Experience" index="02 / 05" title="Career Timeline" copy="A career spanning U.S. Navy operations, ocean and atmospheric science, federal programs, nuclear safety, research, and higher education." />
      <section className="section experience-section content-first"><div className="experience-list">{timeline.map((item) => <details className="experience-entry" key={item.dates+item.role}><summary><span className="org-code" aria-hidden="true">{item.code}</span><div><span className="date">{item.dates}</span><h3>{item.role}</h3><p>{item.organization}</p>{item.keyResult && <CareerHighlight>{item.keyResult}</CareerHighlight>}</div><b aria-hidden="true">+</b></summary><div className="experience-detail"><p>{item.description}</p><div className="experience-contributions"><h4>Responsibilities and contributions</h4><ul>{item.highlights.map(point => <li key={point}>{point}</li>)}</ul></div></div></details>)}</div></section>
      <ContactCTA />
    </main>
  );
}
