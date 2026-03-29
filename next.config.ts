import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.852featin.com",
        pathname: "/new/wp-content/uploads/**",
      },
    ],
  },
}

export default nextConfig
