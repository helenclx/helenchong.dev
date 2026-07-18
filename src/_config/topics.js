export default function (eleventyConfig) {
	// Add blog post topics to collections
	eleventyConfig.addCollection("topics", (collectionApi) => {
		const topics = new Set();
		const posts = collectionApi.getFilteredByTag("posts");
		posts.forEach((p) => {
			const tops = p.data.topics;
			if (tops) {
				tops.forEach((t) => {
					topics.add(t);
				});
			}
		});
		return Array.from(topics).sort();
	});

	// Filter: Filter blog posts by topic
	eleventyConfig.addFilter("filterByTopic", (posts, topic) => {
		topic = topic.toLowerCase();
		const result = posts.filter((p) => {
			const tops = p.data.topics.map((t) => t.toLowerCase());
			return tops ? tops.includes(topic) : false;
		});
		return result;
	});
}
