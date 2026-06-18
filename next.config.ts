import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  devIndicators: false,
  ...(isGithubPages
    ? {
        output: "export",
        images: { unoptimized: true },
        basePath: "/aaliby",
        assetPrefix: "/aaliby/",
      }
    : {}),
};

export default nextConfig;
