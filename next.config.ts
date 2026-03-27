import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'standalone',
  env: {
    BACKEND_API_URL: process.env.BACKEND_API_URL
  }, 
  turbopack: {},
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }]
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/',
      },
      {
        source: '/ampfs-udc/championships',
        destination: '/pages/championships',
      },


      //always add in the final
      {
        source: '/:path*',
        destination: '/'
      }
    ]
  }
};

export default nextConfig;
