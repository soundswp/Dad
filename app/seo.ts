import type { Metadata } from "next";

export const siteUrl = "https://henryjonesadvisory.com";
export const siteName = "Henry Jones Advisory";
export const linkedInUrl = "https://www.linkedin.com/in/henry-jones-5835101b";

export const seoPages = {
  home: {
    path: "/",
    title: "Henry Jones Advisory | Oceanography & Meteorology Consulting",
    description: "Dr. Henry Jones provides independent consulting in physical oceanography, meteorology, hydrology, environmental risk, federal science, and technical review from Maryland.",
    changeFrequency: "monthly" as const,
    priority: 1,
  },
  about: {
    path: "/about",
    title: "Dr. Henry Jones | Oceanographer, Meteorologist & Scientific Advisor",
    description: "Learn about Dr. Henry Jones, a Maryland-based physical oceanographer, meteorologist, hydrologist, retired Navy Commander, educator, and federal scientist.",
    changeFrequency: "yearly" as const,
    priority: 0.8,
  },
  experience: {
    path: "/experience",
    title: "Dr. Henry Jones Experience | Ocean, Weather & Federal Science",
    description: "Review Dr. Henry Jones's career across Navy oceanography and meteorology, tropical cyclone forecasting, federal science, nuclear hydrology, research, and education.",
    changeFrequency: "yearly" as const,
    priority: 0.8,
  },
  projects: {
    path: "/projects",
    title: "Ocean, Weather & Federal Science Projects | Dr. Henry Jones",
    description: "Explore Dr. Henry Jones's applied work in ocean observing systems, operational meteorology, coastal hazards, nuclear safety, defense technology, and federal science.",
    changeFrequency: "yearly" as const,
    priority: 0.8,
  },
  research: {
    path: "/research",
    title: "Oceanography & Atmospheric Science Research | Dr. Henry Jones",
    description: "Research by Dr. Henry Jones in physical oceanography, atmospheric forcing, tropical cyclones, ocean modeling, hydrology, tsunami hazards, and nuclear safety.",
    changeFrequency: "yearly" as const,
    priority: 0.8,
  },
  advisory: {
    path: "/advisory",
    title: "Oceanography, Meteorology & Scientific Consulting | Henry Jones Advisory",
    description: "Independent oceanography, meteorology, hydrology, coastal-hazard, environmental-risk, federal-science, and technical advisory services from Maryland.",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  contact: {
    path: "/contact",
    title: "Contact Dr. Henry Jones | Scientific Consulting",
    description: "Contact Dr. Henry Jones about scientific consulting and advisory work in Maryland, Washington, DC, Virginia, the broader DMV, or nationwide.",
    changeFrequency: "yearly" as const,
    priority: 0.7,
  },
};

type PageSeo = (typeof seoPages)[keyof typeof seoPages];

export function createPageMetadata(page: PageSeo): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName,
      locale: "en_US",
      type: "website",
      images: [{
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Dr. Henry Jones, ocean and atmospheric science advisor",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/og.png"],
    },
  };
}

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Dr. Henry Jones",
      honorificPrefix: "Dr.",
      jobTitle: "Strategic Advisor and Physical Oceanographer",
      description: "Retired U.S. Navy Commander and PhD physical oceanographer with experience in meteorology, hydrology, environmental risk, federal science, defense programs, research, and education.",
      url: `${siteUrl}/about`,
      image: `${siteUrl}/henry-jones-portrait.webp`,
      sameAs: [linkedInUrl],
      worksFor: { "@id": `${siteUrl}/#organization` },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "United States Naval Academy" },
        { "@type": "CollegeOrUniversity", name: "Naval Postgraduate School" },
        { "@type": "CollegeOrUniversity", name: "Salve Regina University" },
        { "@type": "CollegeOrUniversity", name: "University of Southern California" },
      ],
      knowsAbout: [
        "Physical Oceanography",
        "Meteorology",
        "Atmospheric Science",
        "Hydrology",
        "Ocean Modeling",
        "Tropical Meteorology",
        "Tropical Cyclone Forecasting",
        "Ocean Observing Systems",
        "Satellite Remote Sensing",
        "Coastal Hazards",
        "Storm Surge",
        "Tsunami Hazards",
        "Environmental Risk",
        "Nuclear Safety",
        "Federal Science Programs",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/favicon.svg`,
      email: "contact@henryjonesadvisory.com",
      description: "Independent scientific and technical advisory practice in oceanography, meteorology, hydrology, environmental risk, and federal science.",
      founder: { "@id": `${siteUrl}/#person` },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Maryland" },
        { "@type": "City", name: "Washington, DC" },
        { "@type": "AdministrativeArea", name: "Virginia" },
        { "@type": "Country", name: "United States" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: `${siteUrl}/`,
      inLanguage: "en-US",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};
