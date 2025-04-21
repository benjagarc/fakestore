import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    forceSwcTransforms: true,
  },
  trailingSlash: true,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      new URL("https://fakestoreapi.com/img/**"),
      new URL("https://cdn.arihantbooks.com/assets/ProductImage/**"),
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
