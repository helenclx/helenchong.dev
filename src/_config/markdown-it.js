/* CONFIGURATION FOR MARKDOWN TEMPLATES */
// Installed plugins
import pluginTOC from '@uncenter/eleventy-plugin-toc';
import embedEverything from "eleventy-plugin-embed-everything";

// Configure slug filter
import slugify from "slugify";

// markdown-it plugins
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import markdownItBracketedSpans from "markdown-it-bracketed-spans";

export default function(eleventyConfig) {
    // Installed plugins
    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2', 'h3', 'h4', 'h5', 'h6'],
        wrapper: (toc) => {
            return `<nav class="toc" aria-labelledby="toc-heading">${toc}</nav>`;
        },
    });
    eleventyConfig.addPlugin(embedEverything, { add: ['soundcloud'] });

    // Configure markdown-it-anchor plugins
    eleventyConfig.setLibrary('md', markdownIt().use(markdownItAnchor))
    const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
        class: "heading-anchor",
        symbol: "<span hidden>#</span>",
        style: "aria-labelledby",
    });
    const markdownItAnchorOptions = {
        level: [2, 3, 4, 5],
        slugify: (str) =>
            slugify(str, {
                lower: true,
                strict: true,
                remove: /["]/g,
            }),
        tabIndex: false,
        permalink(slug, opts, state, idx) {
            state.tokens.splice(idx, 0,
                Object.assign(new state.Token("div_open", "div", 1), {
                    // Add class "header-wrapper [h1 or h2 or h3]"
                    attrs: [["class", `heading-wrapper ${state.tokens[idx].tag}`]],
                    block: true,
                })
            );

            state.tokens.splice(idx + 4, 0,
                Object.assign(new state.Token("div_close", "div", -1), {
                    block: true,
                })
            );

            linkAfterHeader(slug, opts, state, idx + 1);
        },
    };

    /* Markdown Overrides */
    let markdownLibrary = markdownIt({
        html: true,
        linkify: true,
    })
        .use(markdownItAnchor, markdownItAnchorOptions)
        .use(markdownItAttrs)
        .use(markdownItBracketedSpans)

    // Configure linkify
    markdownLibrary.linkify.set({ fuzzyLink: false });

    /* This is the part that tells 11ty to swap to our custom config */
    eleventyConfig.setLibrary("md", markdownLibrary);
}