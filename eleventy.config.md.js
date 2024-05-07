/* CONFIGURATION FOR MARKDOWN TEMPLATES */

// Installed plugins
const embedEverything = require("eleventy-plugin-embed-everything");

// Configure markdown-it plugins
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
    // Installed plugins
    eleventyConfig.addPlugin(embedEverything, { add: ['soundcloud'] });
}
