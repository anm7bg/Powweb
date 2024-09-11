module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
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
        {
          source: '/post/slug',
          destination: '/slug',
          permanent: true,
        },
        {
          source: '/post/wordpress-reshavane-na-problema-s-blokirashite-izobrazyavaneto-javascript-i-css/',
          destination: '/blokirashtite-izobrazyavaneto-javascript-i-css-wordpress',
          permanent: true,
        },
        {
          source: '/post/seo-2017-osnovni-pravila-za-dominirane-v-rezultatite-ot-trseneto-s-google/',
          destination: '/seo-2017-osnovni-pravila',
          permanent: true,
        },
        {
          source: '/post/seo-2017-osnovni-komponenti-na-trseneto',
          destination: '/ustoychivi-url-adresi-za-seo',
          permanent: true,
        }
        // {
        //   source: '/url-adresi-za-seo/',
        //   destination: '/ustoychivi-url-adresi-za-seo',
        //   permanent: true,
        // },
      ]
    }
  }
  return nextConfig
}