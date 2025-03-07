import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['s3-alpha-sig.figma.com' , 'www.anchorins.com' , 'www.tisins.com'], // Add the domain here
  },
};

export default nextConfig;
