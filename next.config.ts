import type { NextConfig } from "next";

const repoName = "new-sample";
const basePath = `/${repoName}`;

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;