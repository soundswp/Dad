import type { Metadata } from "next";
import { publications } from "../page";
import { ContactCTA, PageIntro } from "../site-components";
import { ResearchLibrary, type ResearchItem } from "./research-library";

export const metadata: Metadata = { title: "Research & Publications | Henry Jones, PhD", description: "Research, presentations, and technical work in physical oceanography, atmospheric science, operational meteorology, hydrology, hazards, and environmental modeling." };

const topics = [
  ["Ocean modeling", "Regional ocean-model sensitivity to atmospheric and scatterometer wind forcing."],
  ["Coastal hazards", "Tsunami, storm surge, seiche, flooding, and nuclear-facility safety."],
  ["Operational meteorology", "Tropical cyclone analysis, forecasting, and military decision support."],
  ["Remote sensing", "Satellite altimetry, SAR, ocean color, hyperspectral, and ocean-wind sensors."],
  ["Underwater acoustics", "Acoustic forecasting, sonar, and the physical ocean environment."],
  ["Science education", "Oceanography teaching, research internships, academic advising, and the Maury Project."],
];

function researchArea(title: string) {
  const normalized = title.toLowerCase();
  if (normalized.includes("tsunami")) return "Coastal hazards and nuclear-facility safety";
  if (normalized.includes("maury")) return "Ocean science education";
  if (normalized.includes("canary")) return "Comparative coastal ocean modeling";
  return "Regional ocean modeling and atmospheric wind forcing";
}

const presentationItems: ResearchItem[] = publications.map(([year, type, title, venue]) => ({
  id: `${year}-${type}-${title}`,
  year,
  type,
  title,
  context: venue,
  area: researchArea(title),
  category: "Presentations",
}));

const technicalReportItems: ResearchItem[] = [
  {
    id: "nrc-storm-surge-tsunami-research",
    year: "2007–2016",
    type: "Technical reports & guidance",
    title: "NRC storm surge and tsunami research",
    context: "Lead hydrologist for storm surge and tsunami research, associated technical reports, and regulatory guidance.",
    area: "Coastal hazards and nuclear-facility safety",
    category: "Technical Reports",
  },
  {
    id: "nuclear-reactor-safety-reviews",
    year: "2007–2016",
    type: "Technical review",
    title: "Nuclear reactor safety and environmental reviews",
    context: "Lead review work covering tsunami, seiche, storm surge, and other hydrologic hazards for major new reactor applications.",
    area: "Hydrology, environmental safety, and infrastructure risk",
    category: "Technical Reports",
  },
  {
    id: "jtwc-annual-report",
    year: "1982–1984",
    type: "Annual report review",
    title: "Joint Typhoon Warning Center annual report",
    context: "Led review of post-tropical-cyclone forecast reanalyses for the center’s annual tropical cyclone report.",
    area: "Operational meteorology and tropical cyclone forecasting",
    category: "Technical Reports",
  },
  {
    id: "usgs-rge-edge-policy",
    year: "2016–2019",
    type: "Policy & evaluation",
    title: "USGS RGE-EDGE policy and evaluation",
    context: "Participated in policy design, development, implementation, training, and mentoring for scientific and equipment-development grade evaluation.",
    area: "Federal scientific evaluation and research policy",
    category: "Technical Reports",
  },
];

const researchItems = [...presentationItems, ...technicalReportItems];

export default function ResearchPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="Research" index="04 / 05" title="Research & Publications." />
      <section className="section publications content-first">
        <div className="content-label"><span>RESEARCH LIBRARY</span></div>
        <ResearchLibrary items={researchItems} />
      </section>
      <section className="section topic-summary"><div><p className="eyebrow"><span aria-hidden="true" /> Research topics</p><h2>Technical areas</h2></div><div className="topic-list">{topics.map(([title,copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <ContactCTA />
    </main>
  );
}
