/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75],
  },
  experimental: {
    optimizePackageImports: ['react-icons'],
    inlineCss: true,
  },
};

export default nextConfig;
