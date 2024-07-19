import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		extensions: "html",
		formats: ["avif", "jpeg"],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
	});
}