const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
 
// add your private routes here
const exclude = [
  '/dashboard*',
  '/settings*',
  '/onboarding*',
  '/blog/tags*',
  '/auth*',
  '/private',
  '/grid',
  '/?wordfence*',
  '/about*',
  '/docs*',
  '/pricing*',
  '/author*',
  '/kontakti',
  '/promocii'
];
 
// Save crawling budget by not fetching SSG meta files
const NEXT_SSG_FILES = [
  '/*.json$',
  '/*_buildManifest.js$',
  '/*_middlewareManifest.js$',
  '/*_ssgManifest.js$',
  '/*.js$',
];
 
/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl,
  generateRobotsTxt: true,
  exclude,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
};
 
module.exports = config;