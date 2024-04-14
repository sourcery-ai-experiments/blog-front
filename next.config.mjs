/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/app/loader.ts",
  },
  rewrites: async () => {
    return {
      fallback: [
        {
          source: "/api/v1/:path*",
          destination: `${process.env.BASE_API_URL}/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
