// Passthrough File Copy
export default function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/assets/");
	eleventyConfig.addWatchTarget("./src/assets/");
	eleventyConfig.addPassthroughCopy({
		"./src/assets/favicon/favicon.ico": "/favicon.ico",
		"./src/assets/favicon/apple-touch-icon.png": "/apple-touch-icon.png",
		"node_modules/@zachleat/details-utils/details-utils.js": "assets/js/details-utils.js",
	});
}
