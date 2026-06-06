/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/landmark-Website",
  images: {
    unoptimized: true,
  },
  experimental: {
    devtoolSegmentExplorer: false,
  },
};

export default nextConfig;