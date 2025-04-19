import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [new URL("https://fakestoreapi.com/img/**"),new URL("https://cdn.arihantbooks.com/assets/ProductImage/**")],
  },
};

export default nextConfig;
