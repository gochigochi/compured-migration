/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's3-sa-east-1.amazonaws.com',
            port: '',
            pathname: '/saasargentina/**',
          },
          {
            protocol: 'https',
            hostname: 'drive.google.com',
          },
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
          }
        ],
      }
}

export default nextConfig
