import type { Metadata } from "next";
import { publications } from "../page";
import { createPageMetadata, seoPages } from "../seo";
import { ContactCTA, ContextLinks, PageIntro, PageSubnav } from "../site-components";
import { ResearchLibrary, type ResearchItem } from "./research-library";

export const metadata: Metadata = createPageMetadata(seoPages.research);

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

const presentationItems: ResearchItem[] = publications.map(([year, type, title, venue]) => {
  const isAmsPaper = year === "2003" && title === "Sensitivity of a Navy Regional Ocean Model to High-Resolution Atmospheric and Scatterometer Wind Forcing";
  const isTsunamiPaper = year === "2010" && title === "Tsunami Safety Criteria and Current Site Reviews in the United States";

  if (isAmsPaper) {
    return {
      id: "2003-ams-regional-ocean-model-paper",
      year,
      type: "Conference Paper",
      title: "Sensitivity of a Navy Regional Ocean Model to High-Resolution Atmospheric Model and Scatterometer Wind Forcing",
      context: "American Meteorological Society · Fifth Conference on Coastal Atmospheric and Oceanic Prediction and Processes",
      area: researchArea(title),
      category: "Conference Papers",
      links: [
        { label: "View AMS Paper", href: "https://ams.confex.com/ams/pdfpapers/64697.pdf" },
        { label: "Conference Record", href: "https://ams.confex.com/ams/32BC31R5C/techprogram/programexpanded_173.htm" },
      ],
    };
  }

  if (isTsunamiPaper) {
    return {
      id: "2010-iaea-tsunami-safety-paper",
      year,
      type: "Conference Paper",
      title,
      context: "IAEA International Workshop on External Flooding Hazards at Nuclear Power Plant Sites · Kalpakkam, India",
      area: researchArea(title),
      category: "Conference Papers",
      authors: ["Goutam Bagchi", "Hosung Ahn", "Henry Jones", "Annie Kammerer", "Richard Raione", "Nilesh Chokshi"],
      links: [
        { label: "View Paper", href: "https://www.researchgate.net/publication/290394379_Tsunami_Safety_Criteria_and_Current_Site_Reviews_in_the_United_States/download" },
      ],
    };
  }

  return {
    id: `${year}-${type}-${title}`,
    year,
    type,
    title,
    context: venue,
    area: researchArea(title),
    category: "Presentations",
  };
});

const graduateResearchItems: ResearchItem[] = [
  {
    id: "2003-nps-doctoral-dissertation",
    year: "2003",
    type: "Doctoral Dissertation",
    title: "Sensitivity of a Navy Regional Ocean Model to High-Resolution Atmospheric and Scatterometer Wind Forcing",
    context: "Naval Postgraduate School · Ph.D. in Physical Oceanography",
    area: "Regional ocean modeling and atmospheric wind forcing",
    category: "Graduate Research",
    note: "Original Naval Postgraduate School dissertation record; current repository link unavailable.",
  },
  {
    id: "1986-nps-masters-thesis",
    year: "1986",
    type: "Master's Thesis",
    title: "Comparison of Western North Pacific Tropical Cyclone Models Using Synoptic and Storm-Related Parameters",
    context: "Naval Postgraduate School · M.S. Physical Oceanography and Meteorology",
    area: "Tropical cyclone modeling and operational meteorology",
    category: "Graduate Research",
  },
];

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

const researchItems = [...presentationItems, ...graduateResearchItems, ...technicalReportItems];

export default function ResearchPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="Research" index="04 / 05" title="Research & Publications." />
      <PageSubnav links={[["Research library", "#research-library"], ["Technical areas", "#research-topics"], ["Advisory services", "/advisory"]]} />
      <section className="section publications content-first" id="research-library">
        <h2 className="visually-hidden">Research library</h2>
        <div className="content-label"><span>RESEARCH LIBRARY</span></div>
        <ResearchLibrary items={researchItems} />
      </section>
      <section className="section topic-summary" id="research-topics"><div><p className="eyebrow"><span aria-hidden="true" /> Research topics</p><h2>Technical areas</h2></div><div className="topic-list">{topics.map(([title,copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <ContextLinks links={[["Ocean and atmospheric science experience", "/experience"], ["Scientific consulting and advisory services", "/advisory"]]} />
      <ContactCTA />
    </main>
  );
}
