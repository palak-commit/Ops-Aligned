/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://opsaligned.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // exclude dynamic server sitemap if we add one later
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
