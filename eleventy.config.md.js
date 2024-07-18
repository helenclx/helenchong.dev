/* CONFIGURATION FOR MARKDOWN TEMPLATES */

// Installed plugins
import embedEverything from "eleventy-plugin-embed-everything";

// markdown-it plugins
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import markdownItBracketedSpans from "markdown-it-bracketed-spans";

export default function(eleventyConfig) {
    // Installed plugins
    eleventyConfig.addPlugin(embedEverything, { add: ['soundcloud'] });

    /* Markdown Overrides */
    let markdownLibrary = markdownIt({
        html: true,
        linkify: true,
    })
        .use(markdownItAttrs)
        .use(markdownItBracketedSpans)

    // Paired shortcode: custom container
    eleventyConfig.addPairedShortcode('container', (children, el, className) => {
        const classMarkup = className ? ` class="${className}"` : "";
        const content = markdownLibrary.render(children);
        return `<${el}${classMarkup}>${content}</${el}>`;
    });

    /* This is the part that tells 11ty to swap to our custom config */
    eleventyConfig.setLibrary("md", markdownLibrary);

}
