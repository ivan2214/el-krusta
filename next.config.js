/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'via.placeholder.com',
      'th.bing.com',
      'www.colourbox.com',
    ],
    unoptimized: true,
    
  },
}

module.exports = nextConfig
