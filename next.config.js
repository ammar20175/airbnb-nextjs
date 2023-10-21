/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["links.papareact.com"],
	},
	env: {
		mapbox_key: "YOUR MAPBOX PUBLIC KEY",
	},
};

module.exports = nextConfig;
