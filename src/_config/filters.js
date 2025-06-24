import { DateTime } from "luxon";

export default function(eleventyConfig) {
    // Filter: Format dates
    eleventyConfig.addFilter("formatDate", (date) => {
        const dateFormat = "d LLLL yyyy";
        if (typeof date === "object") {
            return DateTime.fromJSDate(date).toFormat(dateFormat);
        }
        return DateTime.fromISO(date, { setZone: true }).toFormat(dateFormat);
    });

    // Filter: Limit the number of collection items displayed
    eleventyConfig.addFilter("itemLimit", (array, maximum) => {
        return array.slice(0, maximum);
    });

    // Filter: Collection item count
    eleventyConfig.addFilter("itemCount", (array) => array.length );

    // Filter: Thousands separator
    eleventyConfig.addFilter("thousands", (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
}
