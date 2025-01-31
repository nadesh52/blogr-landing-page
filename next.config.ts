import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/blogr-landing-page', // Updated repo name
  assetPrefix: '/blogr-landing-page',
  images: {
    unoptimized: true, // Fix image issues on GitHub Pages
  },
};

export default nextConfig;
