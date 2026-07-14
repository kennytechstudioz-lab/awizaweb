import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'schooling-bucket1.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
