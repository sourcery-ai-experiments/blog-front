/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/app/loader.ts",
  },
};

export default nextConfig;
