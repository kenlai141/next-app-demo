/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  basePath: '/next-app-demo',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
