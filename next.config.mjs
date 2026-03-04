/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com", // Google profile images
      "avatars.githubusercontent.com", // GitHub profile images
    ],
  },
  async redirects() {
    return [
      {
        source: '/accessra-partnership',
        destination: '/news/past-collaborations',
        permanent: true,
      },
      {
        source: '/news/accessra-partnership',
        destination: '/news/past-collaborations',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
