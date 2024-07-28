// Installed Plugins
import pluginRss from "@11ty/eleventy-plugin-rss";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import metagen from 'eleventy-plugin-metagen';
import emojiReadTime from "@11tyrocks/eleventy-plugin-emoji-readtime";

// Custom configurations
import markdownItConfig from "./src/_config/markdown-it.js";
import copyConfig from "./src/_config/copy.js";
import collectionsConfig from "./src/_config/collections.js";
import filtersConfig from "./src/_config/filters.js";
import shortCodesConfig from "./src/_config/shortcodes.js";

export default function(eleventyConfig) {
    // Installed Plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(syntaxHighlight, { preAttributes: { tabindex: 0 } });
    eleventyConfig.addPlugin(metagen);
    eleventyConfig.addPlugin(emojiReadTime);

    // Custom configurations
    eleventyConfig.addPlugin(markdownItConfig);
    eleventyConfig.addPlugin(copyConfig);
    eleventyConfig.addPlugin(collectionsConfig);
    eleventyConfig.addPlugin(filtersConfig);
    eleventyConfig.addPlugin(shortCodesConfig);

    // Eleventy bundle plugin
    eleventyConfig.addBundle("css");
    eleventyConfig.addBundle("js", { toFileDirectory: "assets/js" });

    return {
        dir: {
            input: "src"
        }
    };
};