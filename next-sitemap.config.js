/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.vedantara.com',
    generateRobotsTxt: true, // Optional: generates /robots.txt
    sitemapSize: 7000, // Optional: split sitemap if too many URLs
    changefreq: 'daily',
    priority: 0.7,
    trailingSlash: false,
};
