/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "powweb.space",
      },
    ],
  },
  async redirects() {
      return [
      {
        source: '/seo-optimizatsia',
        destination: '/seo',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig