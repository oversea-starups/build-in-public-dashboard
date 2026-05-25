import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/build-in-public-dashboard',
  images: { unoptimized: true },
}

export default nextConfig
