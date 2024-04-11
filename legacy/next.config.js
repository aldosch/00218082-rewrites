/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/new",
          destination: `${process.env.NEW_APP_URL}/new`,
        },
        {
          source: "/new/:path*",
          destination: `${process.env.NEW_APP_URL}/new/:path*`,
        },
        {
          source: "/_next/static/:path*",
          destination: `${process.env.NEW_APP_URL}/_next/static/:path*`,
        },
        {
          source: "/static/:path*",
          destination: `${process.env.NEW_APP_URL}/static/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
