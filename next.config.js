module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "data.powweb.space",
        },
        {
          protocol: "https",
          hostname: "powweb.space",
        },
        {
          protocol: "https",
          hostname: "i0.wp.com",
        },
        {
          protocol: "https",
          hostname: "i.postimg.cc",
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
          source: '/seo-2017/',
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
        {
          source: '/post/slug',
          destination: '/slug',
          permanent: true,
        },
        {
          source: '/optimizirane-na-wordpress-sait-s-w3-total-cache/',
          destination: '/optimizirane-na-wordpress',
          permanent: true,
        },
        {
          source: '/bezplaten-analiz/',
          destination: '/',
          permanent: true,
        }
          // {
        //   source: '/bezplaten-analiz/',
        //   destination: '/',
        //   permanent: true,
        // }
      ]
    }
  }
  return nextConfig
}