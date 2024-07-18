import eleventyImage, { generateHTML } from "@11ty/eleventy-img";

async function imageShortcode(src, alt, sizes) {
    let metadata = await eleventyImage(`./src${src}`, {
        widths: [300, 800, null],
        formats: ["avif", "jpeg"],
        urlPath: "/assets/images/",
        outputDir: "./_site/assets/images/"
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async"
    };

    return generateHTML(metadata, imageAttributes);
}

export default function(eleventyConfig) {
    eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);
}