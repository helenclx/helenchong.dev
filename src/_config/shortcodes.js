export default function(eleventyConfig) {
    // Current year
    eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);
}