/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "books.google.com", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
