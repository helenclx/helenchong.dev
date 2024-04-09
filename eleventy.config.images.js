const eleventyImage = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
    let metadata = await eleventyImage(`./src${src}`, {
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

    return eleventyImage.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);
}