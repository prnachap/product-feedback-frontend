/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  webpack(nextConfig) {
    nextConfig.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return nextConfig;
  },
};
