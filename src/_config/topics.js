export default function(eleventyConfig) {
	// Add blog post topics to collections
	eleventyConfig.addCollection("topics", (collectionApi) => {
		let topics = new Set();
		let posts = collectionApi.getFilteredByTag("posts");
		posts.forEach(p => {
			let tops = p.data.topics;
			if (tops) {
				tops.forEach(t => topics.add(t));
			}
		});
		return Array.from(topics).sort();
	});

	// Filter: Filter blog posts by topic
	eleventyConfig.addFilter("filterByTopic", (posts, topic) => {
		topic = topic.toLowerCase();
		let result = posts.filter(p => {
			let tops = p.data.topics.map(t => t.toLowerCase());
			if (tops) {
				return tops.includes(topic);
			}
		});
		return result;
	});
}
