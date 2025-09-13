import type { NextConfig } from "next";

const nextConfig: NextConfig = {
output: 'export',
  basePath: '/mytheatre',  // replace <repo-name> with your repo
  assetPrefix: '/mytheatre/',
};

export default nextConfig;
