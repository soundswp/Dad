"use client";

import { useState } from "react";

export type ResearchItem = {
  id: string;
  year: string;
  type: string;
  title: string;
  context: string;
  area: string;
  category: "Presentations" | "Technical Reports";
};

const filters = ["All", "Presentations", "Technical Reports"] as const;
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
              <div><span>{item.year}</span><small>{item.type}</small></div>
              <h3>{item.title}</h3>
              <b aria-hidden="true">+</b>
            </summary>
            <div className="research-detail">
              <span>{item.category === "Technical Reports" ? "Scope" : "Venue"}</span><p>{item.context}</p>
              <span>Research area</span><p>{item.area}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
