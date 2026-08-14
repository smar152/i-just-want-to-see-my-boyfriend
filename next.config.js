/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  basePath: "/smb-comic",
  images: {
    unoptimized: true,
    domains: ["placekitten.com", "localhost"],
  },
};

module.exports = nextConfig;
