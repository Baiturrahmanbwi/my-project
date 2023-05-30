/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: "mongodb+srv://fulladmin:fulladmin@baiturrahmanbanyuwangi.9yfxjlq.mongodb.net/Masjid-Baiturrahman",
    NEXTAUTH_SECRET: 'createdbyjhody'
  }
}

module.exports = nextConfig
