// Installed Plugins
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import pluginEleventyNavigation from "@11ty/eleventy-navigation";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginEmbedEverything from "eleventy-plugin-embed-everything";
import pluginWordcount from "eleventy-plugin-wordcount-extended";

// Custom configurations
import markdownItConfig from "./src/_config/markdown-it.js";
import feedsConfig from "./src/_config/feeds.js";
import filesConfig from "./src/_config/files.js";
import collectionsConfig from "./src/_config/collections.js";
import filtersConfig from "./src/_config/filters.js";
import shortCodesConfig from "./src/_config/shortcodes.js";

export default function(eleventyConfig) {
    // ----- Installed Plugins
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
    eleventyConfig.addPlugin(pluginEleventyNavigation);
    eleventyConfig.addPlugin(pluginEmbedEverything, {
        youtube: {
            options: {
                lazy: true,
                lite: true,
                recommendSelfOnly: true,
            }
        }
    });
    eleventyConfig.addPlugin(pluginSyntaxHighlight, { preAttributes: { tabindex: 0 } });
    eleventyConfig.addPlugin(pluginWordcount);

    // ----- Custom configurations
    eleventyConfig.addPlugin(markdownItConfig);
    eleventyConfig.addPlugin(feedsConfig);
    eleventyConfig.addPlugin(filesConfig);
    eleventyConfig.addPlugin(collectionsConfig);
    eleventyConfig.addPlugin(filtersConfig);
    eleventyConfig.addPlugin(shortCodesConfig);

    // ----- Eleventy bundle plugin
    eleventyConfig.addBundle("css");
    eleventyConfig.addBundle("js", { toFileDirectory: "assets/js" });

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src"
        }
    };
};
