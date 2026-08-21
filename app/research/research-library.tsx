"use client";

import { useState } from "react";

export type ResearchItem = {
  id: string;
  year: string;
  type: string;
  title: string;
  context: string;
  area: string;
  category: "Conference Papers" | "Presentations" | "Technical Reports" | "Graduate Research";
  authors?: string[];
  note?: string;
  links?: { label: string; href: string }[];
};

const filters = ["All", "Conference Papers", "Presentations", "Technical Reports", "Graduate Research"] as const;
type Filter = (typeof filters)[number];

export function ResearchLibrary({ items }: { items: ResearchItem[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const visibleItems = activeFilter === "All" ? items : items.filter((item) => item.category === activeFilter);

  return (
    <div className="research-library">
      <div className="research-filters" aria-label="Filter research by content type">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? "active" : ""}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <p className="research-count" aria-live="polite">{visibleItems.length} {visibleItems.length === 1 ? "entry" : "entries"}</p>
      <div className="research-list research-filter-results" key={activeFilter}>
        {visibleItems.map((item) => (
          <details className="research-entry" key={item.id}>
            <summary>
              <div><time dateTime={item.year.slice(0, 4)}>{item.year}</time><small>{item.type}</small></div>
              <div className="research-title"><h3><cite>{item.title}</cite></h3><p>{item.area}</p></div>
              <span className="disclosure-control"><small>View record</small><b aria-hidden="true">+</b></span>
            </summary>
            <article className="research-detail">
              <span>{item.category === "Technical Reports" ? "Scope" : item.category === "Graduate Research" ? "Institution" : "Venue"}</span><p>{item.context}</p>
              {item.authors && <><span>Authors</span><p>{item.authors.join(" · ")}</p></>}
              <span>Research area</span><p>{item.area}</p>
              {item.note && <><span>Record note</span><p className="research-note">{item.note}</p></>}
              {item.links && <div className="research-links" aria-label={`Verified sources for ${item.title}`}>{item.links.map((link) => <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}</div>}
            </article>
          </details>
        ))}
      </div>
    </div>
  );
}
