/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['user-images.githubusercontent.com', 'cdn.discordapp.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.scdn.co',
      },
      {
        protocol: 'https',
        hostname: '**.spotifycdn.com',
      },
    ],
  },
  fontLoaders: [
    {
      loader: '@next/font/google',
      options: {
        subsets: ['latin'],
        weight: ['400', '500', '600', '700', '800'],
      },
    },
  ],
};

module.exports = nextConfig;
