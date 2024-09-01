import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/grid/', '/?wordfence*'],
      // disallow: '/grid/',
    },
    sitemap: 'https://powweb.bg/sitemap.xml',
  }
}