/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // ✅ 外部画像ホストを許可
  },
};

module.exports = nextConfig
