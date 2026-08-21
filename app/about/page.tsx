import type { Metadata } from "next";
import { education, federalAwards, militaryAwards } from "../page";
import { createPageMetadata, seoPages } from "../seo";
import { ContactCTA, ContextLinks, LinkedInLink, PageIntro, PageSubnav, SectionHeading } from "../site-components";

export const metadata: Metadata = createPageMetadata(seoPages.about);

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageIntro eyebrow="About" index="01 / 05" title="Dr. Henry Jones." copy="Retired U.S. Navy Commander, physical oceanographer, meteorologist, educator, and strategic advisor." />
      <PageSubnav links={[["Profile", "#profile"], ["Interviews", "#interviews"], ["Education", "#education"], ["Awards", "#awards"]]} />

      <section className="section about-section profile-page" id="profile">
        <figure className="profile-portrait"><img src="/henry-jones-portrait.webp" alt="Dr. Henry Jones, physical oceanographer and scientific advisor" width="1000" height="1000" loading="lazy" decoding="async" /></figure>
        <div className="about-copy"><p className="eyebrow"><span aria-hidden="true" /> Biography</p><h2>Scientist, military officer, educator, and <em>strategic advisor.</em></h2><div className="biography-narrative"><p>Dr. Henry Jones began his career in the U.S. Navy after graduating from the United States Naval Academy in 1979 with a degree in Oceanography. His early Navy career combined oceanography and meteorology with military operations, including tropical cyclone forecasting in the Western Pacific and environmental forecasting support aboard USS Missouri during Operation Desert Storm/Desert Shield.</p><p>Over the course of his Navy career, Dr. Jones applied his scientific background to defense programs, satellite systems, and ocean research. He supported the Ballistic Missile Defense Organization’s High Energy Laser Theater Missile Defense Program and later managed Navy satellite programs, including work related to ocean-observing systems and the Geosat Follow-On program.</p><p>Dr. Jones later earned his Ph.D. in Physical Oceanography from the Naval Postgraduate School and continued combining research, teaching, and federal service throughout his career. He served as a professor at the U.S. Naval Academy before moving into federal scientific leadership roles with the U.S. Nuclear Regulatory Commission and U.S. Geological Survey. Based in Maryland, he now provides independent scientific and technical advisory services.</p></div><LinkedInLink className="profile-link" /></div>
        <aside className="credentials profile-credentials" aria-label="Credentials summary"><p>CREDENTIALS</p>{[["PhD", "Physical Oceanography"], ["Commander", "U.S. Navy, Retired"], ["38 years", "Professional experience"], ["13 years", "Undergraduate and graduate teaching"], ["Federal service", "NRC and USGS"]].map(([title,detail]) => <div key={title}><strong>{title}</strong><small>{detail}</small></div>)}</aside>
      </section>
      <ContextLinks links={[["Career timeline", "/experience"], ["Oceanography and atmospheric science research", "/research"]]} />

      <section className="section interviews-section" id="interviews">
        <SectionHeading eyebrow="Interviews" title="Dr. Henry Jones in conversation." />
        <div className="video-grid">
          <div className="video-frame"><iframe src="https://www.youtube.com/embed/aGyzn2DQo00?si=bbLxo0g6VH3dFDlX" title="Interview featuring Dr. Henry Jones" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
          <div className="video-frame"><iframe src="https://www.youtube.com/embed/JjOxszX8vbE?si=X2xaQhd01ejx7LU_" title="Second interview featuring Dr. Henry Jones" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
        </div>
      </section>

      <section className="section education-section" id="education"><SectionHeading eyebrow="Education" title="Scientific, technical, and strategic training." copy="Five academic degrees plus professional military education at the U.S. Naval War College." /><div className="education-grid">{education.map(([year, degree, school, detail]) => <article key={degree}><span>{year}</span><h3>{degree}</h3><h4>{school}</h4><p>{detail}</p></article>)}</div><div className="qualifications"><p className="eyebrow"><span aria-hidden="true" /> Qualifications & service</p><div><article><strong>U.S. Navy Commander</strong><p>Retired after assignments in shipboard command, operational oceanography, technical program management, combat support, and teaching.</p></article><article><strong>Certified Tropical Cyclone Forecaster</strong><p>Forecast for the Western Pacific and Indian Ocean at the Joint Typhoon Warning Center.</p></article><article><strong>Computer Technology Management</strong><p>Awarded the Navy subspecialty while serving aboard USS Missouri.</p></article><article><strong>Designated Dive Master</strong><p>Fleet Activities Okinawa, Japan.</p></article></div></div></section>

      <section className="section awards-section" id="awards"><SectionHeading eyebrow="Awards & recognition" title="Federal service and military awards." /><div className="award-feature"><span>2010</span><div><p>BEYA STEM Conference</p><h3>Engineer of the Year — Government Career Service</h3></div></div><div className="award-columns"><details open><summary>Federal service awards <b aria-hidden="true">+</b></summary><ul>{federalAwards.map((award) => <li key={award}>{award}</li>)}</ul></details><details><summary>Military service awards <b aria-hidden="true">+</b></summary><ul>{militaryAwards.map((award) => <li key={award}>{award}</li>)}</ul></details></div></section>
      <ContactCTA />
    </main>
  );
}
