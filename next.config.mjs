import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  outputFileTracingRoot: __dirname, // Explicitly set the project root to silence lockfile warning
  reactStrictMode: false, // Reduces hydration warnings in development
};

export default nextConfig;

