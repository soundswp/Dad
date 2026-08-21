import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Henry Jones Advisory",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="page-shell">
      <header className="page-hero page-hero-compact">
        <div className="page-hero-content">
          <p className="eyebrow"><span aria-hidden="true" /> 404</p>
          <h1>Page not found.</h1>
          <p>The requested page is unavailable. Continue to Dr. Jones&apos;s advisory services, experience, or research.</p>
          <nav className="not-found-links" aria-label="Helpful pages">
            <Link className="button button-primary" href="/">Return home <span aria-hidden="true">→</span></Link>
            <Link className="button button-secondary" href="/advisory">Advisory services <span aria-hidden="true">→</span></Link>
          </nav>
        </div>
      </header>
    </main>
  );
}
