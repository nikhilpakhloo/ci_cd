/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jsonplaceholder.typicode.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
