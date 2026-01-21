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
        destination: '/news/accessra-partnership',
        permanent: true, // 301 redirect for SEO
      },
    ]
  },
};

export default nextConfig;
