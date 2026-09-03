/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',       // 🌟 CRITICAL: Change 'standalone' to 'export' to create the 'out' folder
  trailingSlash: true,    // 🌟 CRITICAL: Prevents 404 errors on your sub-pages
};

module.exports = nextConfig;
