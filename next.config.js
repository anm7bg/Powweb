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
    console.log("redirects")
      return [
      {
        source: '/seo-optimizatsia',
        destination: '/seo',
        permanent: true,
      },
      {
        source: '/author/anm7',
        destination: '/',
        permanent: true,
      },
      {
        source: '/seo-2017',
        destination: '/seo-2017-osnovni-komponenti-na-tarseneto',
        permanent: true,
      },
      {
        source: '/bezplaten-analiz/',
        destination: '/bezplaten-analiz',
        permanent: true,
      },
      {
        source: '/url-adresi-za-seo/',
        destination: '/ustoychivi-url-adresi-za-seo',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig