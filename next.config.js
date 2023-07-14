/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    distDir: 'build',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
