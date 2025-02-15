import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['s3-alpha-sig.figma.com'], // Add the domain here
  },
};

export default nextConfig;
