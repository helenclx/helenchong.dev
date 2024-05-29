/* CONFIGURATION FOR MARKDOWN TEMPLATES */

// Installed plugins
const embedEverything = require("eleventy-plugin-embed-everything");

// Configure markdown-it plugins
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
    // Installed plugins
    eleventyConfig.addPlugin(embedEverything, { add: ['soundcloud'] });

    /* Markdown Overrides */
    let markdownLibrary = markdownIt({
        html: true,
        linkify: true,
    })
        .use(require("markdown-it-attrs"))
        .use(require("markdown-it-bracketed-spans"))

    // Paired shortcode: custom container
    eleventyConfig.addPairedShortcode('container', (children, el, className) => {
        const classMarkup = className ? ` class="${className}"` : "";
        const content = markdownLibrary.render(children);
        return `<${el}${classMarkup}>${content}</${el}>`;
    });

    /* This is the part that tells 11ty to swap to our custom config */
    eleventyConfig.setLibrary("md", markdownLibrary);

}
