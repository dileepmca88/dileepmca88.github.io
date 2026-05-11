/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  generateBuildId: async () => {
    // This ensures unique build ID for cache busting
    return 'build-' + Date.now()
  },
}

export default nextConfig
