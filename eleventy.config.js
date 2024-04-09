const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
    let metadata = await Image(`./src${src}`, {
        widths: [300, 800, null],
        formats: ["avif", "jpeg"],
        urlPath: "/images/",
        outputDir: "./_site/images/"
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async"
    };

    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);

    eleventyConfig.addShortcode("current_year", () => `${new Date().getFullYear()}`);

    // Format dates
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

    // Limit filter
    eleventyConfig.addFilter("limit", function(array, limit) {
        return array.slice(0, limit);
    });

    return {
        dir: {
            input: "src"
        }
    };
};