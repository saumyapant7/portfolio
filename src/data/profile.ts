/* PROFILE — everything about Saumya that isn't a project. Edit freely. */

export const profile = {
  name: "Saumya Pant",
  first: "Saumya",
  location: "Bengaluru, India",
  email: "saumya.pant7@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/saumyapant", // TODO: confirm handle
    youtube: "https://www.youtube.com/@aiadinsider",
    instagram: "https://www.instagram.com/aiadinsider",
    channel: "https://aiadinsider.com",
    github: "https://github.com/saumyapant7",
    credly: "https://www.credly.com/badges/75f7d365-83b7-4b8e-b742-ca47d960b915",
    resume: "/Saumya-Pant-Resume.pdf",
  },
  formspree: "https://formspree.io/f/YOUR_FORM_ID", // TODO: create a Formspree form

  /* Honest numbers only — each traces to the résumé. */
  stats: [
    { value: 2, prefix: "$", suffix: "M", label: "incremental revenue in 4 quarters at Google" },
    { value: 112, suffix: "%", label: "of target, 15% growth year on year" },
    { value: 3, suffix: "×", label: "GMV growth in 10 months at Udaan" },
    { value: 9, suffix: " yrs", label: "across Oracle, Reckitt, Udaan and Google" },
  ],

  services: [
    {
      n: "01",
      title: "Paid search",
      body: "Account structure, PMax, Shopping and bidding that lowers CPA without losing volume.",
      href: "#work",
    },
    {
      n: "02",
      title: "Paid social",
      body: "Creative testing systems and full-funnel retargeting on Meta, YouTube and Demand Gen.",
      href: "#work",
    },
    {
      n: "03",
      title: "Measurement",
      body: "GA4, conversion tracking and Looker Studio dashboards that answer real questions.",
      href: "#work",
    },
    {
      n: "04",
      title: "AI for marketing teams",
      body: "Agents that audit, report, write and optimise, so a small team runs like a large one.",
      href: "#lab",
    },
  ],

  about:
    "Nine years across Oracle, Reckitt, Udaan and Google, moving from engineering to sales to product solutions, and now to the AI layer that sits over all of it. At Google I sold Ads to businesses expanding from India to the US, Middle East and Australia, then moved to the Display and Demand Gen product team, where I built the AI tooling that cut support cases and agent hours. I care about the same thing in both jobs: a marketing budget should be able to explain itself.",

  timeline: [
    { when: "2025 — 2026", role: "Product Solutions Consultant, Display / Demand Gen", org: "Google" },
    { when: "2022 — 2025", role: "Senior Sales Specialist, AGT", org: "Google" },
    { when: "2021 — 2022", role: "City Manager", org: "Udaan" },
    { when: "2019 — 2020", role: "Area Sales Manager", org: "Reckitt Benckiser" },
    { when: "2015 — 2017", role: "Associate Applications Engineer", org: "Oracle" },
  ],

  education: [
    { what: "PGDM, Marketing & Finance", where: "XLRI Jamshedpur", year: "2019" },
    { what: "B.Tech, Computer Science", where: "VIT University", year: "2015" },
  ],

  certification: {
    title: "Generative AI Leader Certification",
    meta: "Google Cloud · 2026 · verified on Credly",
  },

  tools: [
    "Google Ads",
    "GA4",
    "Looker Studio",
    "Power BI",
    "SQL",
    "Gemini & AI Studio",
    "Claude",
    "n8n",
    "HeyGen",
    "ElevenLabs",
  ],

  posts: [
    { accent: "cyan", eyebrow: "This week in ads", title: "First post lands with the channel launch" },
    { accent: "pear", eyebrow: "I tried it", title: "One AI tool, tested on a real marketing task" },
    { accent: "coral", eyebrow: "Inside Google", title: "What Quality Score actually rewards" },
    { accent: "mint", eyebrow: "YouTube deep dive", title: "Monthly 20-minute episode" },
  ] as { accent: "cyan" | "pear" | "coral" | "mint"; eyebrow: string; title: string }[],
};
