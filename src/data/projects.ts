/* PROJECTS — the only file you edit to add or update a project.
 * Home cards, the Work filter and /work/[slug] pages all build from this list. */

export type Accent = "pear" | "cyan" | "coral" | "mint" | "lavender";
export type Status = "live" | "in-progress" | "coming-soon";

export type Project = {
  slug: string;
  type: "work" | "lab";
  status: Status;
  featured: boolean;
  accent: Accent;
  title: string;
  summary: string;
  tags: string[];
  stack?: string;
  meta?: { role?: string; platforms?: string; timeline?: string; data?: string };
  heroNumber?: { value: string; label: string };
  video?: string;
  sections?: { heading: string; body: string[]; caption?: string }[];
  downloads?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "three-brands-thirty-ads",
    type: "work",
    status: "in-progress",
    featured: true,
    accent: "coral",
    title: "Three brands, thirty ads: what their media buyers are getting wrong",
    summary:
      "Public ads from the Google Ads Transparency Center and the Meta Ad Library, scored on four criteria and rebuilt.",
    tags: ["Meta + Google", "Teardown"],
    meta: {
      role: "Research, scoring, creative rebuild",
      platforms: "Google Ads, Meta, YouTube",
      timeline: "October 2026 · 2 weeks",
      data: "Public ads only, no client data",
    },
    heroNumber: {
      value: "30",
      label: "ads scored on message match, angle, offer clarity and landing-page fit",
    },
    sections: [
      {
        heading: "The question",
        body: [
          "When well-funded brands run ads that underperform, is the problem the media buying or the message? Thirty ads across three brands, judged against the four things that separate winning advertisers from the rest.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "Pulled ten live ads per brand from the Transparency Center and Ad Library.",
          "Scored each on message match, creative angle, offer clarity and landing-page fit, with the rubric published.",
          "Clicked through to every landing page and noted the mismatch.",
          "Rebuilt one ad per brand: hook, body, creative and a landing-page brief.",
        ],
        caption: "Annotated screenshot grid of the 30 ads lands here.",
      },
      {
        heading: "What I found",
        body: ["Findings and numbers from the scorecard will be added when the teardown is complete."],
      },
      {
        heading: "What I'd do with a real budget",
        body: ["The first three tests, and what each would be measured by."],
      },
    ],
    downloads: [
      { label: "The 4-criteria scoring rubric (Sheets)", href: "#" },
      { label: "Landing-page message-match checklist", href: "#" },
    ],
  },
  {
    slug: "eight-weeks-five-thousand",
    type: "work",
    status: "coming-soon",
    featured: true,
    accent: "pear",
    title: "Eight weeks, ₹5,000, every number published",
    summary:
      "A small real campaign for my own free-audit offer, documented week by week: what I changed and what happened.",
    tags: ["Google Ads", "Live campaign"],
    meta: {
      role: "Everything",
      platforms: "Google Ads, GA4",
      timeline: "November 2026 · 8 weeks",
      data: "My own account, fully public",
    },
    sections: [
      {
        heading: "The question",
        body: [
          "What can ₹5,000 and a clean setup do for a one-person offer, and what does an honest weekly log of a small account look like?",
        ],
      },
    ],
  },
  {
    slug: "ga4-five-questions",
    type: "work",
    status: "coming-soon",
    featured: true,
    accent: "cyan",
    title: "Five business questions, one Looker Studio dashboard",
    summary:
      "Built on the GA4 demo property (Google Merchandise Store). Each panel answers one question a marketing lead actually asks.",
    tags: ["GA4", "Dashboard"],
    meta: {
      role: "Measurement design, dashboard build",
      platforms: "GA4, BigQuery, Looker Studio",
      timeline: "October 2026",
      data: "Google's public demo property",
    },
  },
  {
    slug: "google-ads-account-auditor",
    type: "lab",
    status: "in-progress",
    featured: true,
    accent: "mint",
    title: "Google Ads Account Auditor",
    summary: "Upload an export, get a 25-point scored audit with a ranked fix list in 60 seconds.",
    tags: ["Agent"],
    stack: "Google Ads API · Claude",
    meta: {
      role: "Design and build",
      platforms: "Google Ads API, Claude API, Streamlit",
      timeline: "October 2026",
      data: "Demo account",
    },
    heroNumber: { value: "25", label: "checks, each with an estimated rupee impact" },
    sections: [
      {
        heading: "The problem",
        body: [
          "Most audits take a consultant a day and arrive as a slide deck. The account has moved on by then.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "An account export (or the Google Ads API) goes in. Claude runs 25 checks: wasted spend, search-term hygiene, conversion setup, PMax asset gaps, bid-strategy fit. Out comes a ranked list of fixes with an estimated impact for each.",
        ],
      },
    ],
  },
  {
    slug: "marketing-data-copilot",
    type: "lab",
    status: "coming-soon",
    featured: true,
    accent: "cyan",
    title: "Marketing Data Copilot",
    summary:
      "Ask questions of GA4, Google Ads and Meta data in plain English; get an answer with a chart.",
    tags: ["Agent"],
    stack: "GA4 · BigQuery · Claude",
    meta: {
      role: "Design and build",
      platforms: "GA4 export, BigQuery, Meta Marketing API, Claude",
      timeline: "November 2026",
      data: "Demo dataset",
    },
  },
  {
    slug: "weekly-brief-agent",
    type: "lab",
    status: "coming-soon",
    featured: true,
    accent: "lavender",
    title: "Weekly Brief Agent",
    summary:
      "Every Monday: numbers pulled, brief written, charts built, delivered as a 90-second avatar video.",
    tags: ["Automation"],
    stack: "n8n · HeyGen · ElevenLabs",
    meta: {
      role: "Design and build",
      platforms: "n8n, Claude, HeyGen, ElevenLabs",
      timeline: "December 2026",
      data: "Sample client",
    },
  },
];

export const statusLabel: Record<Status, string> = {
  live: "Live",
  "in-progress": "In progress",
  "coming-soon": "Coming soon",
};
