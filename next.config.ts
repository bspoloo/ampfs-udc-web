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
    config.module.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }]
    })
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/',
      },
      {
        source: '/championships',
        destination: '/pages/championships',
      },
      {
        source: '/login',
        destination: '/pages/auth/login',
      },
      {
        source: '/register',
        destination: '/pages/auth/register',
      },
      {
        source: '/dashboard',
        destination: '/pages/dashboard',
      },
      {
        source: '/player',
        destination: '/pages/player',
      },
      {
        source: '/referee',
        destination: '/pages/referee',
      },
      {
        source: '/unauthorized',
        destination: '/pages/unauthorized',
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
