import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode:true,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images : {
    remotePatterns : [
      {
        protocol : 'https',
        hostname : '*'
      }
    ]
  },
  experimental: {
    after: true,
  },
};

export default nextConfig;
