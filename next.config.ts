import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fm01-blogr-landing-page", // Use your repo name
  assetPrefix: "/fm01-blogr-landing-page/",
  images: {
    unoptimized: true, // Required since Next.js optimized images need a server
  },
};

export default nextConfig;
