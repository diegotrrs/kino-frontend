/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },  
  images: {
    domains: ['tailwindcss.com', 'res.cloudinary.com'],
  },
})

