import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Compression and performance optimization */
  compress: true,
  
  /* Image optimization */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  /* Headers for SEO and performance */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
    ];
  },
  
  /* Redirects for SEO */
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/#experience',
        permanent: false,
      },
      {
        source: '/projects-showcase',
        destination: '/#projects',
        permanent: false,
      },
      {
        source: '/my-skills',
        destination: '/#skills',
        permanent: false,
      },
      {
        source: '/contact-me',
        destination: '/#contact',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
