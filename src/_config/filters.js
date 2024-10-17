import { DateTime } from "luxon";

export default function(eleventyConfig) {
    // Format dates
    eleventyConfig.addFilter("formatDate", (date) => {
        const dateFormat = "d LLLL yyyy";
        if (typeof date === "object") {
            return DateTime.fromJSDate(date).toFormat(dateFormat);
        }
        return DateTime.fromISO(date, { setZone: true }).toFormat(dateFormat);
    });

    // Limit the number of items displayed
    eleventyConfig.addFilter("itemLimit", (array, limit) => {
        return array.slice(0, limit);
    });

    // Thousands separator
    eleventyConfig.addFilter("thousands", (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });

    // Filter blog posts by category
    eleventyConfig.addFilter("filterByCategory", (posts, cat) => {
        cat = cat.toLowerCase();
        let result = posts.filter(p => {
            let cats = p.data.categories.map(s => s.toLowerCase());
            return cats.includes(cat);
        });
        return result;
    });
}