/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "hippokart-production.up.railway.app", // Corrected: only hostname
      },
    ],
  },
};

module.exports = nextConfig;
