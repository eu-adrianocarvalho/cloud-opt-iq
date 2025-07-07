/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/cloudoptiq" : "",
  basePath: process.env.NODE_ENV === "production" ? "/cloudoptiq" : "",
};

module.exports = nextConfig;
