import type { Metadata } from "next";
import { services } from "../page";
import { createPageMetadata, seoPages } from "../seo";
import { ContactCTA, ContextLinks, PageIntro, PageSubnav, SectionHeading } from "../site-components";

export const metadata: Metadata = createPageMetadata(seoPages.advisory);

const clientScenarios = [
  "Leadership needs an independent scientific perspective before making a major decision.",
  "An organization needs a technical review of an oceanographic, meteorological, or environmental program.",
  "A company needs guidance working with federal science or defense organizations.",
  "A team needs help understanding environmental or operational risk.",
  "An organization needs an experienced advisor to review a complex scientific or technical initiative.",
  "Leadership needs scientific information translated into practical options and recommendations.",
];

const primaryServices = services.slice(0, 4);
const additionalEngagements = services.slice(4);

function ServiceList({ items, className = "" }: { items: string[][]; className?: string }) {
  return <div className={`service-list ${className}`.trim()}>{items.map(([number,title,description]) => <article className="service-row" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><b aria-hidden="true">↗</b></article>)}</div>;
}

export default function AdvisoryPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="Advisory" index="06 / 06" title="Advisory services." copy="Independent oceanography, meteorology, hydrology, environmental risk, and federal science consulting for organizations in Maryland, Washington, DC, Virginia, and nationwide." />
      <PageSubnav links={[["Primary services", "#primary-services"], ["Additional engagements", "#additional-engagements"], ["When to engage", "#when-to-engage"]]} />
      <section className="section services-section content-first">
        <div className="service-group primary-service-group" id="primary-services">
          <h2 className="service-group-title">Primary Advisory Services</h2>
          <ServiceList items={primaryServices} className="primary-service-list" />
        </div>
        <div className="service-group additional-service-group" id="additional-engagements">
          <h2 className="service-group-title">Additional Engagements</h2>
          <ServiceList items={additionalEngagements} className="additional-service-list" />
        </div>
      </section>
      <section className="section advisory-help" id="when-to-engage">
        <SectionHeading eyebrow="When to get in touch" title="When Dr. Jones Can Help" copy="Organizations work with Dr. Jones when a decision or program would benefit from experienced scientific and federal perspective." />
        <div className="help-scenarios">{clientScenarios.map((scenario) => <article key={scenario}><span aria-hidden="true">◆</span><p>{scenario}</p></article>)}</div>
      </section>
      <ContextLinks links={[["Applied ocean, weather, and federal science projects", "/projects"], ["Dr. Jones's federal and scientific experience", "/experience"]]} />
      <ContactCTA />
    </main>
  );
}
