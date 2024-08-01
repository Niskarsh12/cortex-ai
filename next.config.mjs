/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wordpress-1307411-4764754.cloudwaysapps.com"
            }
        ]
    }
};

export default nextConfig;
