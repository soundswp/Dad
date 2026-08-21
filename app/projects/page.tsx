import type { Metadata } from "next";
import { projects } from "../page";
import { createPageMetadata, seoPages } from "../seo";
import { ContactCTA, ContextLinks, PageIntro, PageSubnav } from "../site-components";

export const metadata: Metadata = createPageMetadata(seoPages.projects);

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="Projects" index="03 / 05" title="Selected Projects" />
      <PageSubnav links={[["Project case studies", "#project-list"], ["Professional experience", "/experience"], ["Research library", "/research"]]} />
      <section className="section projects-section content-first" id="project-list"><div className="case-study-list">{projects.map((project,index) => <details className="case-study" id={project.id} key={project.name}><summary><div className="project-number">{String(index+1).padStart(2,"0")}</div><div><p className="project-org">{project.organization}</p><h2>{project.name}</h2><p className="case-summary">{project.problem}</p><p className="case-role"><span>Role</span>{project.role}</p></div><div className="case-date"><span>{project.dates}</span><span className="disclosure-control"><small>View case study</small><b aria-hidden="true">+</b></span></div></summary><div className="case-detail"><dl><div><dt>Challenge</dt><dd>{project.problem}</dd></div><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Technical approach</dt><dd>{project.approach}</dd></div><div><dt>Collaboration</dt><dd>{project.organization}</dd></div><div><dt>Outcome</dt><dd>{project.outcome}</dd></div></dl>{project.links && <nav className="entry-links" aria-label={`External references for ${project.name}`}>{project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</nav>}</div></details>)}</div></section>
      <ContextLinks links={[["Oceanography and atmospheric science research", "/research"], ["Dr. Jones's professional experience", "/experience"]]} />
      <ContactCTA />
    </main>
  );
}
