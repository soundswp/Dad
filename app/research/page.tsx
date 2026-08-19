import type { Metadata } from "next";
import { publications } from "../page";
import { ContactCTA, PageIntro, SectionHeading } from "../site-components";

export const metadata: Metadata = { title: "Research | Henry Jones, PhD", description: "Research, presentations, and technical work in physical oceanography, atmospheric science, operational meteorology, hydrology, hazards, and environmental modeling." };

const topics = [
  ["Ocean modeling", "Regional ocean-model sensitivity to atmospheric and scatterometer wind forcing."],
  ["Coastal hazards", "Tsunami, storm surge, seiche, flooding, and nuclear-facility safety."],
  ["Operational meteorology", "Tropical cyclone analysis, forecasting, and military decision support."],
  ["Remote sensing", "Satellite altimetry, SAR, ocean color, hyperspectral, and ocean-wind sensors."],
  ["Underwater acoustics", "Acoustic forecasting, sonar, and the physical ocean environment."],
  ["Science education", "Oceanography teaching, research internships, academic advising, and the Maury Project."],
];

export default function ResearchPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="Research" index="04 / 05" title="Publications and technical work." />
      <section className="section publications content-first"><div className="content-label"><span>PUBLICATIONS & PRESENTATIONS</span></div><div className="research-list">{publications.map(([year,type,title,venue]) => <details className="research-entry" key={year+type+title}><summary><div><span>{year}</span><small>{type}</small></div><h3>{title}</h3><b aria-hidden="true">+</b></summary><div className="research-detail"><span>Venue</span><p>{venue}</p><span>Research area</span><p>{title.toLowerCase().includes("tsunami") ? "Coastal hazards and nuclear-facility safety" : title.toLowerCase().includes("maury") ? "Ocean science education" : title.toLowerCase().includes("canary") ? "Comparative coastal ocean modeling" : "Regional ocean modeling and wind forcing"}</p></div></details>)}</div></section>
      <section className="section technical-work"><SectionHeading eyebrow="Technical reports" title="Applied technical work." /><div className="research-accordion"><details open><summary><span>01</span><strong>NRC storm surge and tsunami research</strong><b aria-hidden="true">+</b></summary><p>Lead hydrologist for storm surge and tsunami research, associated technical reports, and regulatory guidance from 2007 to 2016.</p></details><details><summary><span>02</span><strong>Nuclear reactor safety and environmental reviews</strong><b aria-hidden="true">+</b></summary><p>Lead review work covering tsunami, seiche, storm surge, and other hydrologic hazards for major new reactor applications.</p></details><details><summary><span>03</span><strong>Joint Typhoon Warning Center annual report</strong><b aria-hidden="true">+</b></summary><p>Led review of post-tropical-cyclone forecast reanalyses for the center’s annual tropical cyclone report.</p></details><details><summary><span>04</span><strong>USGS RGE-EDGE policy and evaluation</strong><b aria-hidden="true">+</b></summary><p>Participated in policy design, development, implementation, training, and mentoring for scientific and equipment-development grade evaluation.</p></details></div></section>
      <section className="section topic-summary"><div><p className="eyebrow"><span aria-hidden="true" /> Research topics</p><h2>Technical areas</h2></div><div className="topic-list">{topics.map(([title,copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <ContactCTA />
    </main>
  );
}
