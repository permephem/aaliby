import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/aaliby";

const nextConfig: NextConfig = {
  devIndicators: false,
  ...(isGithubPages
    ? {
        output: "export",
        images: { unoptimized: true },
        basePath: githubPagesBasePath,
        assetPrefix: `${githubPagesBasePath}/`,
        env: {
          NEXT_PUBLIC_BASE_PATH: githubPagesBasePath,
        },
      }
    : {}),
};

export default nextConfig;
