/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["source.unsplash.com", "books.google.com", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
