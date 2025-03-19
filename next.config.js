const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  distDir: "out", // Output directory for GitHub Pages
  basePath: "/my-portfolio", // Replace with your GitHub repository name
  assetPrefix: "/my-portfolio", // Required for correct asset loading

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    unoptimized: true, // Disables Image Optimization (GitHub Pages doesn't support it)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.dev.to",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media2.dev.to",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
