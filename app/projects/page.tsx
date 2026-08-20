import type { Metadata } from "next";
import { projects } from "../page";
import { ContactCTA, PageIntro } from "../site-components";

export const metadata: Metadata = { title: "Projects | Dr. Henry Jones", description: "Projects in ocean and atmospheric science, operational meteorology, environmental safety, defense, and federal service." };

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="Projects" index="03 / 05" title="Selected Projects" />
      <section className="section projects-section content-first"><div className="case-study-list">{projects.map((project,index) => <details className="case-study" key={project.name}><summary><div className="project-number">0{index+1}</div><div><p className="project-org">{project.organization}</p><h2>{project.name}</h2><p className="case-summary">{project.problem}</p></div><div className="case-date">{project.dates}<b aria-hidden="true">+</b></div></summary><div className="case-detail"><dl><div><dt>Challenge</dt><dd>{project.problem}</dd></div><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Technical approach</dt><dd>{project.approach}</dd></div><div><dt>Collaboration</dt><dd>{project.organization}</dd></div><div><dt>Outcome</dt><dd>{project.outcome}</dd></div></dl></div></details>)}</div></section>
      <ContactCTA />
    </main>
  );
}
