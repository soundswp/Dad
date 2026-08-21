import type { Metadata } from "next";
import { timeline } from "../page";
import { createPageMetadata, seoPages } from "../seo";
import { ContactCTA, ContextLinks, PageIntro, PageSubnav } from "../site-components";

export const metadata: Metadata = createPageMetadata(seoPages.experience);

function CareerHighlight({ children }: { children: string }) {
  return <p className="career-highlight"><span aria-hidden="true">◆</span><span><small>Key result</small><strong>{children}</strong></span></p>;
}

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="Experience" index="02 / 05" title="Career Timeline" copy="A career spanning U.S. Navy operations, ocean and atmospheric science, federal programs, nuclear safety, research, and higher education." />
      <PageSubnav links={[["Career timeline", "#career-timeline"], ["Selected projects", "/projects"], ["Advisory services", "/advisory"]]} />
      <section className="section experience-section content-first" id="career-timeline"><h2 className="visually-hidden">Professional roles</h2><div className="experience-list">{timeline.map((item) => <details className="experience-entry" key={item.dates+item.role}><summary><span className="org-code" aria-hidden="true">{item.code}</span><div><span className="date">{item.dates}</span><h3>{item.role}</h3><p>{item.organization}</p>{item.keyResult && <CareerHighlight>{item.keyResult}</CareerHighlight>}</div><span className="disclosure-control"><small>View details</small><b aria-hidden="true">+</b></span></summary><div className="experience-detail"><p>{item.description}</p><div className="experience-contributions"><h4>Responsibilities and contributions</h4><ul>{item.highlights.map(point => <li key={point}>{point}</li>)}</ul>{item.links && <nav className="entry-links" aria-label={`References and related projects for ${item.role}`}>{item.links.map(link => <a key={link.href} href={link.href} {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{link.label} <span aria-hidden="true">{link.external ? "↗" : "→"}</span></a>)}</nav>}</div></div></details>)}</div></section>
      <ContextLinks links={[["Applied ocean, weather, and federal science projects", "/projects"], ["Scientific consulting and advisory services", "/advisory"]]} />
      <ContactCTA />
    </main>
  );
}
