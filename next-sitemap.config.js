// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://www.careershiftng.onrender.com",
    generateRobotsTxt: true, // (optional)
    // ...other options
  };