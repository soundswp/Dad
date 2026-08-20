import Link from "next/link";

const navigation = [
  ["Home", "/"], ["About", "/about"], ["Experience", "/experience"],
  ["Projects", "/projects"], ["Research", "/research"], ["Advisory", "/advisory"], ["Contact", "/contact"],
];

const linkedInUrl = "https://www.linkedin.com/in/henry-jones-5835101b";

export function LinkedInLink({ className = "" }: { className?: string }) {
  return <a className={`linkedin-link ${className}`.trim()} href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="Dr. Henry Jones on LinkedIn"><span>LinkedIn</span><b aria-hidden="true">↗</b></a>;
}

export function SiteHeader() {
  return (
    <nav className="site-nav global-nav" aria-label="Primary navigation">
      <a className="wordmark" href="/" aria-label="Henry Jones home"><span className="mark" aria-hidden="true">HJ</span><span>HENRY JONES, PhD <small>STRATEGIC ADVISOR</small></span></a>
      <div className="nav-links">{navigation.slice(0, -1).map(([label, href]) => <a href={href} key={href}>{label}</a>)}<a className="nav-cta" href="/contact">Contact <span aria-hidden="true">↗</span></a></div>
      <details className="mobile-nav"><summary aria-label="Open navigation">Menu</summary><div>{navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div></details>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="wordmark" href="/"><span className="mark" aria-hidden="true">HJ</span><span>HENRY JONES, PhD <small>STRATEGIC ADVISOR</small></span></Link>
      <div className="footer-links"><a href="mailto:contact@henryjonesadvisory.com">Email</a><LinkedInLink /><Link href="/about#awards">Awards</Link></div>
      <p>© 2026 Dr. Henry Jones.</p>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, copy, index }: { eyebrow: string; title: string; copy?: string; index: string }) {
  return (
    <section className={`page-hero ${copy ? "" : "page-hero-compact"}`}>
      <div className="page-hero-content"><p className="eyebrow"><span aria-hidden="true" />{eyebrow}</p><h1>{title}</h1>{copy && <p>{copy}</p>}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <header className="section-heading"><div><p className="eyebrow"><span aria-hidden="true" />{eyebrow}</p><h2>{title}</h2></div>{copy && <p className="section-copy">{copy}</p>}</header>;
}

export function ContactCTA() {
  return <section className="home-contact"><div><p className="eyebrow"><span aria-hidden="true" /> Contact</p><h2>Discuss a strategic or technical advisory need.</h2><p>Get in touch about ocean and atmospheric science, operational meteorology, environmental risk, federal programs, technical reviews, or speaking engagements.</p></div><Link className="button button-primary" href="/contact">Contact Dr. Jones <span aria-hidden="true">↗</span></Link></section>;
}
