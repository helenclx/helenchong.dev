// Installed Plugins
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginEleventyNavigation from "@11ty/eleventy-navigation";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginWordcount from "eleventy-plugin-wordcount-extended";

// Custom configurations
import markdownItConfig from "./src/_config/markdown-it.js";
import filesConfig from "./src/_config/files.js";
import collectionsConfig from "./src/_config/collections.js";
import filtersConfig from "./src/_config/filters.js";
import shortCodesConfig from "./src/_config/shortcodes.js";

// Sitemeta
import { siteLang, feedPath, siteAuthor, siteUrl } from "./src/_data/sitemeta.js";

export default function(eleventyConfig) {
    // Installed Plugins
    eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: feedPath,
		collection: {
			name: "posts",
			limit: 10,
		},
		metadata: {
			language: siteLang,
			title: siteAuthor.name + "'s Developer Blog",
			subtitle: siteAuthor.name + " talks about tech, coding and development.",
			base: siteUrl + "/blog/",
			author: {
				name: siteAuthor.name,
				email: siteAuthor.email,
			}
		}
	});
    eleventyConfig.addPlugin(pluginEleventyNavigation);
    eleventyConfig.addPlugin(pluginSyntaxHighlight, { preAttributes: { tabindex: 0 } });
    eleventyConfig.addPlugin(pluginWordcount);

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
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src"
        }
    };
};