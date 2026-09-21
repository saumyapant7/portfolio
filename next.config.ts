import type { NextConfig } from "next";

// GITHUB_PAGES=true (set by the deploy workflow) builds a static export served
// from https://saumyapant7.github.io/portfolio/. Local dev stays at the root.
const pages = process.env.GITHUB_PAGES === "true";
const basePath = pages ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
