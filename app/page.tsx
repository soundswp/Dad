import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Henry Jones, PhD — Ocean & Atmospheric Science Advisor",
  description: "Retired U.S. Navy Commander and PhD physical oceanographer with senior experience in ocean and atmospheric science, operational meteorology, environmental risk, defense, and federal programs.",
};

export type TimelineEntry = {
  dates: string;
  role: string;
  organization: string;
  code: string;
  description: string;
  highlights: string[];
  keyResult?: string;
};

export const expertise = [
  { code: "OA", title: "Ocean & Atmospheric Operations", description: "Physical oceanography, operational meteorology, tropical cyclone forecasting, air-ocean science, and environmental support for maritime and aviation operations.", topics: ["Physical oceanography", "Operational meteorology", "Aviation operations support", "Tropical cyclone forecasting", "Ocean observing systems", "Underwater acoustics"] },
  { code: "ER", title: "Environmental Risk", description: "Hydrology and the assessment of tsunami, storm surge, seiche, flooding, and coastal hazards.", topics: ["Hydrology", "Tsunami hazards", "Storm surge & seiche", "Infrastructure safety"] },
  { code: "FP", title: "Federal & Defense Programs", description: "Scientific and technical program experience across the Navy, NRC, USGS, national laboratories, and research institutions.", topics: ["Program management", "Technical oversight", "Federal partnerships", "National security"] },
  { code: "ST", title: "Science & Technology", description: "Numerical modeling, satellite remote sensing, mapping and geodesy, information systems, and technical evaluation.", topics: ["Environmental modeling", "Remote sensing", "GPS & geodesy", "Systems management"] },
];

export const services = [
  ["01", "Strategic Advisory", "Helping organizations evaluate complex decisions, programs, and opportunities."],
  ["02", "Technical Advisory", "Providing scientific expertise and independent review of technical programs and approaches."],
  ["03", "Scientific Consulting", "Applying expertise in oceanography, meteorology, environmental systems, and related scientific fields."],
  ["04", "Government & Federal Partnerships", "Helping organizations understand and work with federal science and defense programs."],
  ["05", "Environmental Risk Review", "Review of coastal flooding, storm surge, tsunami, seiche, and infrastructure safety questions."],
  ["06", "Independent Technical Review", "Independent review of complex scientific programs, technical plans, and environmental analyses."],
  ["07", "Board & Advisory Roles", "Available to provide scientific and program-management perspective to boards and advisory groups."],
  ["08", "Speaking Engagements", "Available for talks and discussions on ocean and atmospheric science, public safety, federal programs, and operational leadership."],
];

export const timeline: TimelineEntry[] = [
  {
    dates: "2016–2019",
    role: "Research Grade Evaluation Coordinator",
    organization: "U.S. Geological Survey · Reston, Virginia",
    code: "USGS",
    description: "Coordinated scientific evaluation, research-grade policy, and support for senior scientists across the agency.",
    highlights: [
      "Assembled, convened, and oversaw interdisciplinary scientific evaluation panels.",
      "Participated in policy, design, development, and implementation for the RGE and EDGE evaluation processes.",
      "Coordinated the USGS Scientist Emeritus Program and provided training and mentoring on RGE-EDGE processes.",
    ],
  },
  {
    dates: "2007–2016",
    role: "Senior Hydrologist",
    organization: "U.S. Nuclear Regulatory Commission · Washington, D.C.",
    code: "NRC",
    description: "Led hydrologic safety and environmental reviews for major new nuclear reactor applications.",
    highlights: [
      "Served as lead reviewer for storm surge, seiche, and tsunami hazards on all new reactor applications.",
      "Oversaw teams from NRC, Department of Energy national laboratories, USGS, USC, MIT/Woods Hole, and commercial contractors.",
      "Co-chaired the IAEA Working Group on Tsunami Hazards and served as a member of a Congressional Subcommittee on Hydrology.",
    ],
    keyResult: "Monitored $3 million in multi-year research contracts supporting hydrologic safety work.",
  },
  {
    dates: "2000–2007",
    role: "Assistant Professor / Permanent Military Professor",
    organization: "United States Naval Academy · Annapolis, Maryland",
    code: "USNA",
    description: "Taught oceanography, meteorology, acoustics, modeling, and ethics while supporting research and student development.",
    highlights: [
      "Courses included oceanic and atmospheric processes, waves and tides, tropical meteorology, underwater acoustics and sonar, and mathematical modeling.",
      "Served as senior academic advisor, research internship coordinator, and department representative to the Naval Academy Research Committee.",
      "Lectured for the American Meteorological Society’s Maury Project.",
    ],
  },
  {
    dates: "1996–2000",
    role: "Oceanography Lecturer & Research Program Support",
    organization: "Naval Postgraduate School · Monterey, California",
    code: "NPS",
    description: "Combined graduate teaching, coastal ocean-modeling research, research-ship coordination, and doctoral advising.",
    highlights: [
      "Member of the Littoral Ocean Modeling Group.",
      "Lectured in underwater acoustics, acoustic forecasting, air-ocean fluid dynamics, and mapping, charting, and geodesy.",
      "Served as Ocean Research Ship Resource Coordinator and as a physical oceanography doctoral committee member.",
    ],
  },
  {
    dates: "1994–1996",
    role: "Satellite Program Manager",
    organization: "Office of the Oceanographer of the Navy · Washington, D.C.",
    code: "OON",
    description: "Managed Navy research and development programs for operational ocean-observing satellite systems.",
    highlights: [
      "Represented Navy research and operational requirements for the National Polar-Orbiting Environmental Satellite System (NPOESS).",
      "Oversaw programs in synthetic aperture radar, ocean color, hyperspectral sensing, and passive ocean-wind sensors.",
    ],
    keyResult: "Directed a $4 million Navy satellite RDT&E program and secured $60 million for Geosat Follow-On with GFO II.",
  },
  {
    dates: "1992–1994",
    role: "Assistant Program Manager",
    organization: "Naval Research Laboratory Support Detachment / Ballistic Missile Defense Organization",
    code: "NRL",
    description: "Managed technical direction, risk reduction, and financial execution for an airborne laser defense program.",
    highlights: [
      "Used analysis, risk-reduction plans, COEA studies, and high-energy laser research to move the program from early research into advanced development.",
    ],
    keyResult: "Oversaw a $66 million program whose transition to advanced development saved millions in program costs.",
  },
  {
    dates: "1989–1992",
    role: "Oceanographer / Meteorologist",
    organization: "USS Missouri (BB-63) · Operation Desert Shield / Desert Storm",
    code: "BB63",
    description: "Provided environmental forecasting for Navy operations in the Central and Northern Arabian Gulf.",
    highlights: [
      "Coordinated forecasts supporting mine, antisubmarine, electronic, chemical, naval gunfire, and aviation operations.",
      "Served as acting Operations Officer and department head during wartime deployment workup for a crew of 1,500.",
      "Managed information systems for the Navy’s first fully computerized shipboard management and communications system.",
    ],
    keyResult: "Environmental forecasting supported multiple warfare areas during Operation Desert Shield and Desert Storm.",
  },
  {
    dates: "1987–1989",
    role: "Instructor",
    organization: "University of Maryland, Asian Division · Okinawa, Japan",
    code: "UMD",
    description: "Taught meteorology, earth science, and mathematics while serving in Okinawa.",
    highlights: ["Contributed to thirteen years of undergraduate and graduate teaching."],
  },
  {
    dates: "1986–1989",
    role: "Officer-in-Charge / Staff Oceanographer",
    organization: "Naval Oceanography Detachment Kadena / Commander Fleet Activities · Okinawa, Japan",
    code: "NODK",
    description: "Directed forecasting support for military commands and units operating from or transiting Okinawa.",
    highlights: [
      "Led operational forecasting services and served as designated Dive Master for Fleet Activities Okinawa.",
      "Proposed adding a high-speed network node to the Navy Oceanographic Data Distribution Expansion System.",
    ],
    keyResult: "The Navy adopted his network proposal, saving millions in Fleet communications costs.",
  },
  {
    dates: "1982–1984",
    role: "Meteorologist & Typhoon Forecaster",
    organization: "Naval Oceanography Command Center / Joint Typhoon Warning Center · Guam",
    code: "JTWC",
    description: "Forecast tropical cyclones for military operations across the Western Pacific and Indian Ocean.",
    highlights: [
      "Served as a certified tropical cyclone forecaster and coordinated U.S. Air Force reconnaissance missions.",
      "Led review of post-storm forecast reanalyses for the Joint Typhoon Warning Center annual report.",
    ],
  },
  {
    dates: "1980–1982",
    role: "Division Officer",
    organization: "USS Bradley (FF-1041) · San Diego, California",
    code: "FF1041",
    description: "Led shipboard electronic warfare, electronic materials, and deck operations early in his Navy career.",
    highlights: [
      "Served as Electronic Warfare Officer, Electronic Materials Officer, and First Lieutenant.",
      "Managed shipboard electronic systems and external hardware responsibilities.",
    ],
    keyResult: "Led divisions of 40 personnel and served as acting department head and Operations Officer for a crew of more than 200.",
  },
];

export const education = [
  ["2003", "PhD, Physical Oceanography", "Naval Postgraduate School", "Dissertation: Sensitivity of a Navy Regional Ocean Model to High-Resolution Atmospheric and Scatterometer Wind Forcing."],
  ["2003", "MA, International Relations", "Salve Regina University", "Graduate study in international relations."],
  ["1995", "Diploma, Strategic Studies", "U.S. Naval War College, College of Command and Staff", "Professional military education in strategy and command."],
  ["1988", "MS, Systems Management (Information Systems)", "University of Southern California", "Graduate study in systems management and information systems."],
  ["1986", "MS, Physical Oceanography and Meteorology", "Naval Postgraduate School", "Thesis compared Western North Pacific tropical cyclone models using synoptic and storm-related parameters."],
  ["1979", "BS, Oceanography", "United States Naval Academy", "Undergraduate degree in oceanography."],
];

export const projects = [
  {
    dates: "2007–2016",
    name: "Nuclear Facility Flooding & Tsunami Safety",
    organization: "U.S. Nuclear Regulatory Commission / IAEA",
    problem: "New reactor applications required consistent safety and environmental review of tsunami, storm surge, seiche, and flooding hazards.",
    role: "Lead hydrologist and reactor reviewer; co-chair of the IAEA Working Group on Tsunami Hazards; technical monitor for related research.",
    approach: "Hydrologic safety and environmental reviews, hazard research, technical guidance, and oversight of interdisciplinary review teams and research contracts.",
    outcome: "Supported reactor licensing reviews, technical guidance, international coordination, and post-Fukushima hazard reevaluation work.",
  },
  {
    dates: "1994–1996",
    name: "Geosat Follow-On Satellite Program",
    organization: "Office of the Oceanographer of the Navy",
    problem: "The Navy required continued satellite altimetry and operational ocean-observing capability.",
    role: "Satellite Program Manager responsible for the Navy satellite RDT&E portfolio and operational requirements.",
    approach: "Program management, requirements representation, and oversight of satellite altimetry, synthetic aperture radar, ocean color, hyperspectral, and ocean-wind sensor work.",
    outcome: "Restored the program and secured $60 million in funding for GFO with GFO II.",
  },
  {
    dates: "1992–1994",
    name: "Airborne Laser Theater Missile Defense",
    organization: "Naval Research Laboratory Support Detachment / BMDO",
    problem: "A high-energy laser defense concept needed technical risk reduction and a path from research into advanced development.",
    role: "Assistant Program Manager overseeing technical direction and financial execution of the $66 million program.",
    approach: "Program analysis, risk-reduction planning, cost and operational effectiveness studies, and high-energy laser research oversight.",
    outcome: "Analysis, COEA studies, and risk-reduction planning supported transition to advanced development and saved millions in program costs.",
  },
  {
    dates: "1989–1992",
    name: "Desert Shield / Desert Storm Environmental Support",
    organization: "USS Missouri and deployed U.S. Navy units",
    problem: "Naval forces in the Arabian Gulf needed coordinated oceanographic and meteorological support across multiple warfare areas.",
    role: "Ship’s oceanographer and meteorologist, coordinating area forecasts for Navy units in the Central and Northern Gulf.",
    approach: "Operational oceanographic and meteorological analysis coordinated across mine, antisubmarine, electronic, chemical, naval gunfire, and aviation operations.",
    outcome: "Forecasting supported mine, antisubmarine, electronic, chemical, naval gunfire, and aviation operations during combat deployment.",
  },
  {
    dates: "1986–1989",
    name: "Oceanographic Data Distribution Expansion System",
    organization: "Naval Oceanography Detachment Kadena / Navy METOC Command",
    problem: "Meteorological and oceanographic products were expensive to distribute to the Fleet using existing communications.",
    role: "Proposed that Navy METOC become a node host on a high-speed communications line.",
    approach: "Reviewed the product-distribution problem and proposed a high-speed network node within the Navy Oceanographic Data Distribution Expansion System.",
    outcome: "The Navy adopted the recommendation and procured a node, saving millions in communications costs.",
  },
  {
    dates: "2002–2006",
    name: "Regional Ocean Model Wind-Forcing Research",
    organization: "Naval Postgraduate School / U.S. Naval Academy",
    problem: "Regional ocean-model performance depended on the resolution and source of atmospheric and scatterometer wind forcing.",
    role: "Doctoral researcher and author presenting model sensitivity results at AMS and AGU meetings.",
    approach: "Compared a Navy regional ocean model under high-resolution atmospheric and scatterometer wind forcing and presented the results through academic and professional forums.",
    outcome: "Produced a PhD dissertation and a series of oral, poster, and invited conference presentations from 2002 through 2006.",
  },
  {
    dates: "2016–2019",
    name: "Scientist Evaluation & Emeritus Programs",
    organization: "U.S. Geological Survey",
    problem: "The agency required consistent interdisciplinary evaluation, policy support, and mentoring for research scientists and equipment developers.",
    role: "RGE Coordinator responsible for panels, RGE-EDGE processes, training, mentoring, and the Scientist Emeritus Program.",
    approach: "Convened interdisciplinary evaluation panels and supported policy, implementation, training, mentoring, and emeritus-program coordination.",
    outcome: "Coordinated scientific evaluation panels, RGE-EDGE training and mentoring, and the Scientist Emeritus Program through 2019.",
  },
  {
    dates: "2000–2007",
    name: "Maury Project Ocean Science Education",
    organization: "American Meteorological Society / U.S. Naval Academy",
    problem: "Teachers needed stronger access to the physical foundations of oceanography.",
    role: "Lecturer and co-author on a 2006 AGU poster describing the education partnership.",
    approach: "Oceanography lectures, educational outreach, and presentation of the partnership through an AGU conference poster.",
    outcome: "Contributed to educational outreach on the physical foundations of oceanography.",
  },
];

export const publications = [
  ["2011", "Presentation", "Tsunami Safety Criteria and Current Site Reviews in the United States", "IAEA International Workshop on Tsunami Hazards at Nuclear Power Plant Sites · Vienna, Austria"],
  ["2010", "Co-authored presentation", "Tsunami Safety Criteria and Current Site Reviews in the United States", "IAEA International Workshop on External Flooding Hazards · Kalpakkam, India"],
  ["2006", "AGU poster", "The Sensitivity of High-Resolution Atmospheric Model Wind Forcing on a Regional Ocean Model", "AGU Ocean Sciences Meeting · Honolulu, Hawaii"],
  ["2006", "Co-authored AGU poster", "The Maury Project: A Partnership to Promote Educational Outreach on the Physical Foundations of Oceanography", "AGU Ocean Sciences Meeting · Honolulu, Hawaii"],
  ["2004", "Invited plenary speaker", "Effects of High-Resolution Atmospheric Model and Scatterometer Wind Forcing on a Navy Regional Ocean Model", "National Society of Black Physicists and Black Physics Students · Washington, D.C."],
  ["2004", "AGU presentation", "Effects of High-Resolution Atmospheric Model and Scatterometer Wind Forcing on a Navy Regional Ocean Model", "AGU Ocean Sciences Meeting · Portland, Oregon"],
  ["2004", "Co-authored AGU poster", "Comparisons and Contrasts of the California and Northern Canary Current Systems Using Results from Terrain-Following Coastal Ocean Models", "AGU Ocean Sciences Meeting · Portland, Oregon"],
  ["2003", "AMS oral presentation", "Sensitivity of a Navy Regional Ocean Model to High-Resolution Atmospheric and Scatterometer Wind Forcing", "AMS Fifth Conference on Coastal Atmospheric and Oceanic Prediction and Processes · Seattle, Washington"],
  ["2002", "AGU poster", "Sensitivity of a Navy Regional Ocean Model to High-Resolution Atmospheric and Scatterometer Wind Forcing", "AGU Ocean Sciences Meeting · Honolulu, Hawaii"],
];

export const federalAwards = [
  "2015 · NRC Special Act Group Award — Fermi 3 Combined License activities and mandatory hearing support",
  "2014 · NRC Special Act Group Award — seismic and flooding hazard reevaluations and walkdowns",
  "2012 · NRC Certificate of Recognition — Levy Nuclear Plant Final Environmental Impact Statement",
  "2012 · NRC Division of Site and Environmental Reviews Certificate of Recognition — Fukushima task force support and storm surge/tsunami presentation",
  "2012 · NRC Certificate of Appreciation — technical poster presentation at the 24th Annual Regulatory Information Conference",
  "2012 · NRC Certificate of Appreciation — Incident Response Program support following the Fukushima Dai-ichi accident",
  "2009, 2010, 2011, 2013, 2014 · NRC Performance Awards — Office of New Reactors",
];

export const militaryAwards = [
  "Meritorious Service Medal (3rd Award)", "Combat Action Ribbon", "Navy Commendation Medal", "Navy Achievement Medal",
  "Southwest Asia Service Medal (Two Stars)", "Saudi Arabia Liberation Medal", "Kuwait Liberation Medal",
  "Global War on Terrorism Service Medal", "National Defense Medal (2nd Award)", "Sea Service Ribbon (2nd Award)",
  "Overseas Service Ribbon (2nd Award)", "Navy Unit Commendation (3rd Award)", "Navy “E” Ribbon", "Navy Recruiting Gold Wreath",
];

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <header className="section-heading"><div><p className="eyebrow"><span aria-hidden="true" />{eyebrow}</p><h2>{title}</h2></div>{copy && <p className="section-copy">{copy}</p>}</header>;
}

export function FullProfileArchive() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Henry Jones home"><span className="mark" aria-hidden="true">HJ</span><span>HENRY JONES, PhD <small>TECHNICAL ADVISOR</small></span></a>
        <div className="nav-links"><a href="#expertise">Expertise</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#research">Research</a><a className="nav-cta" href="#contact">Contact <span aria-hidden="true">↗</span></a></div>
        <details className="mobile-nav"><summary aria-label="Open navigation">Menu</summary><div><a href="#expertise">Expertise</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#research">Research</a><a href="#contact">Contact</a></div></details>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" /><div className="contours contours-a" aria-hidden="true" /><div className="contours contours-b" aria-hidden="true" />
        <div className="signal signal-a" aria-hidden="true" /><div className="signal signal-b" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span aria-hidden="true" /> Retired U.S. Navy Commander · PhD Physical Oceanographer</p>
          <h1>Ocean science. Federal programs. <em>Technical leadership.</em></h1>
          <p className="hero-copy">Henry Jones has 38 years of documented professional experience applying oceanography, meteorology, hydrology, environmental modeling, remote sensing, and systems management to real operational and public-safety problems.</p>
          <div className="hero-actions"><a className="button button-primary" href="#experience">View experience <span aria-hidden="true">↓</span></a><a className="button button-secondary" href="#contact">Contact <span aria-hidden="true">↗</span></a></div>
        </div>
        <aside className="hero-instrument" aria-label="Professional focus summary"><div className="instrument-head"><span>PROFESSIONAL PROFILE</span><span className="live-dot">ADVISORY</span></div><div className="radar" aria-hidden="true"><i /><i /><i /><b /></div><div className="coordinates"><span>OCEAN SCIENCE</span><span>FEDERAL PROGRAMS</span><span>DEFENSE</span></div></aside>
        <div className="hero-meta" aria-hidden="true"><span>SCIENCE</span><span>SERVICE</span><span>OPERATIONS / RESEARCH / LEADERSHIP</span></div>
      </section>

      <section className="section expertise-section" id="expertise">
        <SectionHeading eyebrow="Areas of expertise" title="Technical experience built through practice." copy="His work has combined scientific research, military operations, public safety, teaching, and federal program management." />
        <div className="expertise-grid">{expertise.map((item, index) => <article className="expertise-card glass-card" key={item.title}><div className="card-top"><span className="icon-orbit" aria-hidden="true">{item.code}</span><span className="card-index">0{index + 1}</span></div><h3>{item.title}</h3><p>{item.description}</p><ul>{item.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></article>)}</div>
        <div className="specialty-strip"><span>Additional specialties</span><p>Geology · GPS · mapping, charting & geodesy · satellite ocean sensors · tropical cyclone forecasting · air-ocean fluid dynamics · information systems · high-energy laser program management</p></div>
        <div className="agency-band"><span>Agencies & institutions</span><p>U.S. Geological Survey · U.S. Nuclear Regulatory Commission · U.S. Navy · Naval Research Laboratory · Ballistic Missile Defense Organization · Department of Energy national laboratories · International Atomic Energy Agency · U.S. Naval Academy · Naval Postgraduate School · University of Southern California · MIT/Woods Hole · University of Maryland</p></div>
      </section>

      <section className="section services-section" id="services">
        <SectionHeading eyebrow="Advisory services" title="How organizations can work with him." copy="Technical guidance based on direct experience leading programs, reviewing safety questions, managing research, and supporting military operations." />
        <div className="service-list">{services.map(([number, title, description]) => <article className="service-row" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><b aria-hidden="true">↗</b></article>)}</div>
      </section>

      <section className="section experience-section" id="experience">
        <SectionHeading eyebrow="Professional experience" title="Science, government, defense, and education." copy="A chronological record drawn from the provided resume and CV. Overlapping teaching and Navy assignments are shown separately." />
        <div className="timeline"><div className="timeline-line" aria-hidden="true" />{timeline.map((item, index) => <article className={`timeline-card detailed ${index % 2 ? "offset" : ""}`} key={item.dates + item.role}><span className="timeline-node" aria-hidden="true" /><div className="org-code" aria-hidden="true">{item.code}</div><div><span className="date">{item.dates}</span><h3>{item.role}</h3><h4>{item.organization}</h4><p>{item.description}</p><ul className="role-highlights">{item.highlights.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="impact section" aria-labelledby="impact-title">
        <p className="eyebrow"><span aria-hidden="true" /> Career highlights</p><h2 id="impact-title">A career focused on scientific work, government programs, and national security.</h2>
        <div className="metric-grid"><article><strong>38</strong><h3>Years</h3><p>Professional experience documented in the CV</p></article><article><strong>28</strong><h3>Years</h3><p>Department of Defense leadership and management</p></article><article><strong>13</strong><h3>Years</h3><p>Undergraduate and graduate teaching</p></article><article><strong>5</strong><h3>Degrees</h3><p>Oceanography, meteorology, systems, and international relations</p></article></div>
      </section>

      <section className="section education-section" id="education">
        <SectionHeading eyebrow="Education" title="Scientific, technical, and strategic training." copy="Five academic degrees plus professional military education at the U.S. Naval War College." />
        <div className="education-grid">{education.map(([year, degree, school, detail]) => <article key={degree}><span>{year}</span><h3>{degree}</h3><h4>{school}</h4><p>{detail}</p></article>)}</div>
        <div className="qualifications"><p className="eyebrow"><span aria-hidden="true" /> Qualifications & service</p><div><article><strong>U.S. Navy Commander</strong><p>Retired after a career that included shipboard leadership, operational oceanography, research program management, combat support, and teaching.</p></article><article><strong>Certified Tropical Cyclone Forecaster</strong><p>Forecast for the Western Pacific and Indian Ocean at the Joint Typhoon Warning Center and coordinated reconnaissance missions.</p></article><article><strong>Computer Technology Management</strong><p>Awarded the Navy subspecialty while serving aboard USS Missouri.</p></article><article><strong>Designated Dive Master</strong><p>Fleet Activities Okinawa, Japan.</p></article></div></div>
      </section>

      <section className="section projects-section" id="projects">
        <SectionHeading eyebrow="Projects" title="Selected Projects" />
        <div className="projects-grid">{projects.map((project, index) => <article className="project-card glass-card" key={project.name}><div className="project-number">0{index + 1}</div><p className="project-org">{project.organization}</p><h3>{project.name}</h3><dl><div><dt>Problem</dt><dd>{project.problem}</dd></div><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Outcome</dt><dd>{project.outcome}</dd></div></dl></article>)}</div>
      </section>

      <section className="section about-section" id="about">
        <div className="profile-monogram" role="img" aria-label="Henry Jones initials"><div className="monogram-ring"><span>HJ</span></div><p>COMMANDER · U.S. NAVY (RET.)</p><small>PHYSICAL OCEANOGRAPHER · PhD</small></div>
        <div className="about-copy"><p className="eyebrow"><span aria-hidden="true" /> Professional profile</p><h2>Scientist, military officer, educator, and <em>program leader.</em></h2><p className="lead">Henry Jones is a retired U.S. Navy Commander and PhD physical oceanographer whose work has covered operational forecasting, ocean modeling, satellite programs, hydrologic safety, research evaluation, and higher education.</p><p>He has led technical teams and programs in the Navy, Nuclear Regulatory Commission, and U.S. Geological Survey; taught at the U.S. Naval Academy and Naval Postgraduate School; and worked with national laboratories, federal agencies, universities, and international technical groups.</p><a className="text-link" href="#contact">Discuss a consulting need <span aria-hidden="true">↗</span></a></div>
        <aside className="credentials" aria-label="Professional affiliations and advisory roles"><p>AFFILIATIONS / ADVISORY</p>{[["01", "American Geophysical Union", "Professional affiliation"], ["02", "American Meteorological Society", "Professional affiliation"], ["03", "IAEA Working Group", "Co-Chair, Tsunami Hazards"], ["04", "National Geographic / Navy", "Senior military advisor, 1998 Marco Polo Project"], ["05", "Doctoral Committee", "Naval Postgraduate School"]].map(([n, a, b]) => <div key={n}><span>{n}</span><strong>{a}</strong><small>{b}</small></div>)}</aside>
      </section>

      <section className="section publications" id="research">
        <SectionHeading eyebrow="Publications & presentations" title="Research in ocean modeling, hazards, and education." copy="Conference papers, posters, invited talks, and international workshop presentations listed in the provided CV." />
        <div className="publication-list">{publications.map(([year, type, title, venue]) => <article key={year + type + title}><div><span>{year}</span><small>{type}</small></div><h3>{title}</h3><p>{venue}</p></article>)}</div>
      </section>

      <section className="section awards-section" id="awards">
        <SectionHeading eyebrow="Awards & recognition" title="Federal service and military awards." copy="Recognitions listed in the supplied resume and CV." />
        <div className="award-feature"><span>2010</span><div><p>BEYA STEM Conference</p><h3>Engineer of the Year — Government Career Service</h3></div></div>
        <div className="award-columns"><details open><summary>Federal service awards <b aria-hidden="true">+</b></summary><ul>{federalAwards.map((award) => <li key={award}>{award}</li>)}</ul></details><details><summary>Military service awards <b aria-hidden="true">+</b></summary><ul>{militaryAwards.map((award) => <li key={award}>{award}</li>)}</ul></details></div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-intro"><p className="eyebrow"><span aria-hidden="true" /> Contact</p><h2>Discuss a technical or advisory need.</h2><p>Get in touch about ocean science, environmental risk, government programs, technical reviews, or speaking engagements.</p><div className="contact-status"><i aria-hidden="true" /> Available for select engagements</div></div><ContactForm /></section>

      <footer><a className="wordmark" href="#top"><span className="mark" aria-hidden="true">HJ</span><span>HENRY JONES, PhD <small>TECHNICAL ADVISOR</small></span></a><div className="footer-links"><a href="mailto:contact@henryjonesadvisory.com">Email</a><a href="#awards">Awards</a><span>American Geophysical Union</span><span>American Meteorological Society</span></div><p>© 2026 Henry Jones. Career information sourced from the supplied resume and CV.</p></footer>
    </main>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero home-hero" id="top">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span aria-hidden="true" /> DR. HENRY JONES, PhD</p>
          <h1>Strategic Advisor in Ocean &amp; Atmospheric Science</h1>
          <p className="hero-copy">Helping organizations make informed decisions through decades of scientific expertise, operational leadership, and federal program experience.</p>
          <div className="hero-actions"><a className="button button-primary" href="/experience">Explore experience <span aria-hidden="true">→</span></a><a className="button button-secondary" href="/contact">Contact <span aria-hidden="true">↗</span></a></div>
        </div>
        <aside className="hero-credentials" aria-label="Professional credentials"><span>Commander</span><strong>U.S. Navy, Retired</strong><span>Doctor of Philosophy</span><strong>Physical Oceanography</strong><span>Federal Service</span><strong>NRC · USGS</strong></aside>
      </section>

      <section className="impact section home-section" aria-labelledby="highlights-title"><p className="eyebrow"><span aria-hidden="true" /> Career highlights</p><h2 id="highlights-title">Decades of scientific, military, and federal service.</h2><div className="metric-grid"><article><strong>38</strong><h3>Years</h3><p>Professional experience</p></article><article><strong>28</strong><h3>Years</h3><p>Department of Defense service</p></article><article><strong>13</strong><h3>Years</h3><p>Undergraduate and graduate teaching</p></article><article><strong>5</strong><h3>Degrees</h3><p>Scientific, technical, and policy education</p></article></div></section>

      <section className="section home-section"><SectionHeading eyebrow="Expertise" title="Areas of Expertise" /><div className="expertise-grid preview-grid">{expertise.map((item) => <details className="expertise-card glass-card" key={item.title}><summary><div className="card-top"><span className="icon-orbit" aria-hidden="true">{item.code}</span></div><h3>{item.title}</h3><p>{item.description}</p><span className="expand-label">View capabilities <b aria-hidden="true">+</b></span></summary><div className="expand-panel"><h4>Capabilities</h4><ul>{item.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul><a href="/projects">Related projects <span aria-hidden="true">→</span></a></div></details>)}</div></section>

      <section className="section home-section"><SectionHeading eyebrow="Projects" title="Selected Projects" /><div className="projects-grid preview-projects">{projects.slice(0,3).map((project) => <article className="project-card glass-card" key={project.name}><div className="project-number">{project.dates}</div><p className="project-org">{project.organization}</p><h3>{project.name}</h3><p>{project.outcome}</p></article>)}</div><a className="section-link" href="/projects">View all projects <span aria-hidden="true">→</span></a></section>

      <section className="home-contact"><div><p className="eyebrow"><span aria-hidden="true" /> Advisory work</p><h2>Need experienced strategic and technical judgment?</h2><p>Discuss strategic advisory, technical advisory, a government partnership, or a speaking engagement.</p></div><a className="button button-primary" href="/contact">Contact Dr. Jones <span aria-hidden="true">↗</span></a></section>
    </main>
  );
}
