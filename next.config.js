/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["v0.blob.com"], // Allow images from v0.blob.com
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: ["raw-loader", "glslify-loader"],
      })
      return config
    },
    // Enable SWC minification
    swcMinify: true,
    // Optionally, add custom headers
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "X-Frame-Options",
              value: "DENY",
            },
            {
              key: "X-Content-Type-Options",
              value: "nosniff",
            },
            {
              key: "Referrer-Policy",
              value: "strict-origin-when-cross-origin",
            },
          ],
        },
      ]
    },
  }
  
  module.exports = nextConfig
  
  