import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { siteLang, feedPath, siteAuthor, siteUrl, siteBlog } from "../_data/sitemeta.js";

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
			title: siteBlog.title,
			subtitle: siteBlog.desc,
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
