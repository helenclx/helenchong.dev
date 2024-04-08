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

    return {
        dir: {
            input: "src"
        }
    };
};