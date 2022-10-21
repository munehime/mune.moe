/**
 * @type {import("next").NextConfig}
 */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "a.ppy.sh", "assets.ppy.sh"
        ]
    }
};

module.exports = nextConfig;
