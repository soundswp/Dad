"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Advisory", "/advisory"],
  ["Research", "/research"],
  ["Contact", "/contact"],
] as const;

export function SiteNavigation() {
  const pathname = usePathname();
  const current = (href: string) => pathname === href;

  return <>
    <div className="nav-links">
      {navigation.slice(0, -1).map(([label, href]) => <Link href={href} aria-current={current(href) ? "page" : undefined} key={href}>{label}</Link>)}
      <Link className="nav-cta" href="/contact" aria-current={current("/contact") ? "page" : undefined}>Contact <span aria-hidden="true">↗</span></Link>
    </div>
    <details className="mobile-nav">
      <summary aria-label="Open navigation">Menu</summary>
      <div>{navigation.map(([label, href]) => <Link href={href} aria-current={current(href) ? "page" : undefined} key={href}>{label}</Link>)}</div>
    </details>
  </>;
}
