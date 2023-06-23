/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-uploader-devchallenges.s3.sa-east-1.amazonaws.com',
        port: '',
      }
    ]
  }
}

module.exports = nextConfig
