import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = false; // disables source maps in dev
    }
    return config;
  },
};

export default nextConfig;
