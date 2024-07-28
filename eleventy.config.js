// Installed Plugins
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginEleventyNavigation from "@11ty/eleventy-navigation";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginMetagen from "eleventy-plugin-metagen";
import pluginEmojiReadTime from "@11tyrocks/eleventy-plugin-emoji-readtime";

// Custom configurations
import markdownItConfig from "./src/_config/markdown-it.js";
import filesConfig from "./src/_config/files.js";
import collectionsConfig from "./src/_config/collections.js";
import filtersConfig from "./src/_config/filters.js";
import shortCodesConfig from "./src/_config/shortcodes.js";

export default function(eleventyConfig) {
    // Installed Plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginEleventyNavigation);
    eleventyConfig.addPlugin(pluginSyntaxHighlight, { preAttributes: { tabindex: 0 } });
    eleventyConfig.addPlugin(pluginMetagen);
    eleventyConfig.addPlugin(pluginEmojiReadTime);

    // Custom configurations
    eleventyConfig.addPlugin(markdownItConfig);
    eleventyConfig.addPlugin(filesConfig);
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