/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.artic.edu',
        port: '',
        pathname: '/iiif/2/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },

  
}
module.exports = nextConfig