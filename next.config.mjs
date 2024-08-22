/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Disabling React Strict Mode
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "wordpress-1307411-4764754.cloudwaysapps.com",
        },
        {
          protocol: "https",
          hostname: "ucarecdn.com",
        },
      ],
    },
  };
  
  export default nextConfig;
  