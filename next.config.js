/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "powweb.space",
          },
        ],
    }
}

module.exports = nextConfig
