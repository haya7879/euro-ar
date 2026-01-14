import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-ar.euroqst.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ar.euroqst.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};


export default nextConfig;
