/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  
  // 🌟 FIX: Forces Next.js to prepend your folder path to every JS, CSS, and media request
  basePath: '/test',
  assetPrefix: '/test/', 
};

module.exports = nextConfig;
