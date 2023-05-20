/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["static.bunnycdn.ru", "image.tmdb.org", "joadre.com"],
  },
};

module.exports = nextConfig;
