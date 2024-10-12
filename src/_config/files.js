// Passthrough File Copy
export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addPassthroughCopy({
        "./src/assets/icons/favicon/favicon.ico": "/favicon.ico",
        "node_modules/@zachleat/details-utils/details-utils.js": "assets/js/details-utils.js",
    });
}