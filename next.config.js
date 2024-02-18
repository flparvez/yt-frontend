module.exports = {
  images: {
        domains: ['res.cloudinary.com']
    },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://yt-backned.vercel.app/:path*'
      }
    ]
  }
}









