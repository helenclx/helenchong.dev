// Passthrough File Copy
export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy({
        "node_modules/@zachleat/details-utils/details-utils.js": "assets/js/details-utils.js",
    });
}