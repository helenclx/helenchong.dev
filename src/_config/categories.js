export default function(eleventyConfig) {
    // Add blog post categories to collections
    eleventyConfig.addCollection("categories", (collectionApi) => {
        let categories = new Set();
        let posts = collectionApi.getFilteredByTag('posts');
        posts.forEach(p => {
            let cats = p.data.categories;
            if (cats) {
                cats.forEach(c => categories.add(c));
            }
        });
        return Array.from(categories).sort();
    });

    // Filter: Filter blog posts by category
    eleventyConfig.addFilter("filterByCategory", (posts, cat) => {
        cat = cat.toLowerCase();
        let result = posts.filter(p => {
            let cats = p.data.categories.map(s => s.toLowerCase());
            if (cats) {
                return cats.includes(cat);
            }
        });
        return result;
    });
}
