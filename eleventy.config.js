const pluginRss = require("@11ty/eleventy-plugin-rss");

const pluginImages = require("./eleventy.config.images.js");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    // Installed Plug-ins
    eleventyConfig.addPlugin(pluginRss);

    // App plug-ins
    eleventyConfig.addPlugin(pluginImages);

    // Add short codes
    eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

    // Filter: Format dates
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const locale = new Intl.DateTimeFormat("en-GB", dateOptions);
    eleventyConfig.addFilter("niceDate", function(date) {
        return locale.format(date);
    });

    // Filter: Limit
    eleventyConfig.addFilter("limit", function(array, limit) {
        return array.slice(0, limit);
    });

    // Add blog post categories to collections
    eleventyConfig.addCollection("categories", function(collectionApi) {
        let categories = new Set();
        let posts = collectionApi.getFilteredByTag('posts');
        posts.forEach(p => {
            let cats = p.data.categories;
            cats.forEach(c => categories.add(c));
        });
        return Array.from(categories).sort();
    });

    // Filter blog posts by category
    eleventyConfig.addFilter("filterByCategory", function(posts, cat) {
        /*
        case matters, so let's lowercase the desired category, cat
        and we will lowercase our posts categories
        */
        cat = cat.toLowerCase();
        let result = posts.filter(p => {
            let cats = p.data.categories.map(s => s.toLowerCase());
            return cats.includes(cat);
        });
        return result;
    });

    return {
        dir: {
            input: "src"
        }
    };
};