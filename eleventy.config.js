// nstalled Plugins
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import pluginEleventyNavigation from "@11ty/eleventy-navigation";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginEmbedEverything from "eleventy-plugin-embed-everything";
import { VentoPlugin } from "eleventy-plugin-vento";
import pluginWordcount from "eleventy-plugin-wordcount-extended";

// Custom configurations
import feedsConfig from "./src/_config/feeds.js";
import filesConfig from "./src/_config/files.js";
import filtersConfig from "./src/_config/filters.js";
import markdownItConfig from "./src/_config/markdown-it.js";
import shortCodesConfig from "./src/_config/shortcodes.js";
import topicsConfig from "./src/_config/topics.js";

export default function (eleventyConfig) {
	// ----- Installed Plugins
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	eleventyConfig.addPlugin(pluginEleventyNavigation);
	eleventyConfig.addPlugin(pluginEmbedEverything, {
		youtube: {
			options: {
				lazy: true,
				recommendSelfOnly: true,
			},
		},
	});
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 },
	});
	eleventyConfig.addPlugin(pluginWordcount);

	// ----- Custom configurations
	eleventyConfig.addPlugin(markdownItConfig);
	eleventyConfig.addPlugin(feedsConfig);
	eleventyConfig.addPlugin(filesConfig);
	eleventyConfig.addPlugin(topicsConfig);
	eleventyConfig.addPlugin(filtersConfig);
	eleventyConfig.addPlugin(shortCodesConfig);

	// ----- Eleventy bundle plugin
	eleventyConfig.addBundle("css");
	eleventyConfig.addBundle("js", { toFileDirectory: "assets/js" });

	// ----- Vento plugin for Eleventy
	// Must be loaded after plugins that modify filters
	eleventyConfig.addPlugin(VentoPlugin, {
		autotrim: true,
	});

	return {
		markdownTemplateEngine: "vto",
		htmlTemplateEngine: "vto",
		dir: {
			input: "src",
		},
	};
}
