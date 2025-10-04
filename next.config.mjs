/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  outputFileTracingRoot: __dirname, // Explicitly set the project root to silence lockfile warning
  reactStrictMode: false, // Reduces hydration warnings in development
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

