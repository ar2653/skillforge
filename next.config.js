/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Only enable this in production to avoid issues in development
  output: 'export',
  // If deploying to GitHub Pages, set the correct base path
  basePath: isProd ? '/skillforge' : '',
  assetPrefix: isProd ? '/skillforge/' : '',
};
