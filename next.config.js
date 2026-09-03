/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',       // Swapped from 'standalone' to optimize for static asset hosting
  trailingSlash: true,    // Fixes 404 asset errors when users refresh internal sub-pages
};

module.exports = nextConfig;
