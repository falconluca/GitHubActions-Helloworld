const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: "export",
  basePath: isProd ? "/GitHubActions-Helloworld" : "",
  assetPrefix: isProd ? "/GitHubActions-Helloworld/" : "",
};

export default nextConfig;
