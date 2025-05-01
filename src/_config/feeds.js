import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { siteLang, feedPath, siteAuthor, siteUrl } from "../_data/sitemeta.js";

export default function(eleventyConfig) {
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
		},
        templateData: {
			eleventyNavigation: {
				key: "RSS Feed",
                parent: "Blog",
				order: 4
			}
		},
	});
}
