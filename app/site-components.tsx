import { linkedInUrl } from "./seo";
import { SiteNavigation } from "./site-navigation";

export function LinkedInLink({ className = "" }: { className?: string }) {
  return <a className={`linkedin-link ${className}`.trim()} href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="Dr. Henry Jones on LinkedIn"><span>LinkedIn</span><b aria-hidden="true">↗</b></a>;
}

export function SiteHeader() {
  return (
    <nav className="site-nav global-nav" aria-label="Primary navigation">
      <a className="wordmark" href="/" aria-label="Henry Jones home"><span className="mark" aria-hidden="true">HJ</span><span>HENRY JONES, PhD <small>STRATEGIC ADVISOR</small></span></a>
      <SiteNavigation />
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <a className="wordmark" href="/"><span className="mark" aria-hidden="true">HJ</span><span>HENRY JONES, PhD <small>STRATEGIC ADVISOR</small></span></a>
      <div className="footer-links"><a href="mailto:contact@henryjonesadvisory.com">Email</a><LinkedInLink /><a href="/about#awards">Awards</a></div>
      <p>© 2026 Dr. Henry Jones.</p>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, copy, index }: { eyebrow: string; title: string; copy?: string; index: string }) {
  return (
    <header className={`page-hero ${copy ? "" : "page-hero-compact"}`}>
      <div className="page-hero-content"><p className="eyebrow"><span aria-hidden="true" />{eyebrow}</p><h1>{title}</h1>{copy && <p>{copy}</p>}</div>
    </header>
  );
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <header className="section-heading"><div><p className="eyebrow"><span aria-hidden="true" />{eyebrow}</p><h2>{title}</h2></div>{copy && <p className="section-copy">{copy}</p>}</header>;
}

export function ContactCTA() {
  return <section className="home-contact"><div><p className="eyebrow"><span aria-hidden="true" /> Contact</p><h2>Discuss a strategic or technical advisory need.</h2><p>Get in touch about ocean and atmospheric science, operational meteorology, environmental risk, federal programs, technical reviews, or speaking engagements.</p></div><a className="button button-primary" href="/contact">Contact Dr. Jones <span aria-hidden="true">↗</span></a></section>;
}

export function ContextLinks({ links }: { links: [string, string][] }) {
  return <nav className="context-links" aria-label="Related pages">{links.map(([label, href]) => <a href={href} key={href}>{label} <span aria-hidden="true">→</span></a>)}</nav>;
}

export function PageSubnav({ links }: { links: [string, string][] }) {
  return <nav className="page-subnav" aria-label="Page sections"><span>Explore</span><div>{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div></nav>;
}
