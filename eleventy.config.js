// Installed Plugins
import pluginRss from "@11ty/eleventy-plugin-rss";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import metagen from 'eleventy-plugin-metagen';
import emojiReadTime from "@11tyrocks/eleventy-plugin-emoji-readtime";

// Custom plugins
import imagePlugin from "./eleventy.config.images.js";
import markdownPlugin from "./eleventy.config.md.js";

export default function(eleventyConfig) {
    // Copy files
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addPassthroughCopy("CNAME");

    // Custom plugins
    eleventyConfig.addPlugin(imagePlugin);
    eleventyConfig.addPlugin(markdownPlugin);

    // Installed Plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(syntaxHighlight, { preAttributes: { tabindex: 0 } });
    eleventyConfig.addPlugin(metagen);
    eleventyConfig.addPlugin(emojiReadTime);

    // Eleventy bundle plugin
    eleventyConfig.addBundle("css");
    eleventyConfig.addBundle("js");

    // Shortcode: Current year
    eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

    // Filter: Format dates
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const locale = new Intl.DateTimeFormat("en-GB", dateOptions);
    eleventyConfig.addFilter("niceDate", function(date) {
        return locale.format(date);
    });

    // Filter: Limit the number of items displayed
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