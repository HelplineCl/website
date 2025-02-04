/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: 'https://helplinecl.github.io/website/',
  exportTrailingSlash: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '' : undefined,
  images: {
    unoptimized: true,
  },
  experimental: {
    exportTrailingSlash: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
