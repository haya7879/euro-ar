import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-ar.euroqst.com',
        port: '',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'euroqst.com',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    turbotrace: false,
    optimizeCss: true,
    optimizePackageImports: ['react', 'next', 'lucide-react'],
  },

  output: 'standalone',
};


export default nextConfig;
