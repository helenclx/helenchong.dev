import { DateTime } from "luxon";

export default function(eleventyConfig) {
    // Format dates
    eleventyConfig.addFilter("niceDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("d LLLL yyyy");
    });

    // Limit the number of items displayed
    eleventyConfig.addFilter("limit", function(array, limit) {
        return array.slice(0, limit);
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
}