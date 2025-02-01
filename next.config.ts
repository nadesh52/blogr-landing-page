import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";


const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/blogr-landing-page" : "",  // Apply basePath only in production
  // assetPrefix: isProd ? "/blogr-landing-page" : "",  // Apply assetPrefix only in production
  images: {
    unoptimized: true,  // Fix image issues on GitHub Pages
  },
};

export default nextConfig;
