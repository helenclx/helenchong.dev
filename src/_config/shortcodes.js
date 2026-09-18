import slugify from "slugify";

export default function (eleventyConfig) {
	// Shortcode: Current year
	eleventyConfig.addShortcode(
		"currentYear",
		() => `${new Date().getFullYear()}`,
	);

	// Shortcode: <cite> tag
	eleventyConfig.addShortcode("cite", (str) => `<cite>${str}</cite>`);

	// Shortcode: Manual heading anchor
	eleventyConfig.addPairedShortcode(
		"headingAnchor",
		(title, hLevel, id = slugify(title)) => {
			return `<div class="heading-wrapper h${hLevel}">
			<h${hLevel} id="${id}">${title}</h${hLevel}>
			<a class="heading-anchor" href="#${id}">
				<span class="visually-hidden">Permalink to '${title}'</span>
				<span aria-hidden="true">#</span>
			</a>
		</div>`;
		},
	);

	/*
		Cloudinary responsive image shortcodes by Sia Karamalegos:
		https://sia.codes/posts/eleventy-and-cloudinary-images/
	*/
	// Set constants for the Cloudinary URL and fallback widths for images when not supplied by the shorcode params
	const CLOUDNAME = "helenchong";
	const FOLDER = "v1742915994/";
	const BASE_URL = `https://res.cloudinary.com/${CLOUDNAME}/image/upload/`;
	const FALLBACK_WIDTHS = [300, 600, 680, 1360];
	const FALLBACK_WIDTH = 680;

	// Generate srcset attribute using the fallback widths or a supplied array of widths
	function getSrcset(file, widths) {
		const widthSet = widths ? widths : FALLBACK_WIDTHS;
		return widthSet
			.map((width) => {
				return `${getSrc(file, width)} ${width}w`;
			})
			.join(", ");
	}

	// Generate the src attribute using the fallback width or a width supplied
	// by the shortcode params
	function getSrc(file, width) {
		return `${BASE_URL}q_auto,f_auto,w_${width ? width : FALLBACK_WIDTH}/${FOLDER}${file}`;
	}

	// Shortcode: Responsive image
	eleventyConfig.addShortcode("src", (file, width) => getSrc(file, width));
	eleventyConfig.addShortcode("srcset", (file, widths) =>
		getSrcset(file, widths),
	);

	// Shortcode: YouTube video embed
	// Source: https://www.jamesleighton.com/2026/09/easily-embed-youtube-videos-into-11ty/
	eleventyConfig.addShortcode("youtube", (url, title) => {
		const input = String(url).trim();
		const bareId = input.match(/^[a-zA-Z0-9_-]{11}$/);
		const match =
			bareId ||
			input.match(
				/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/,
			);
		if (!match) {
			throw new Error(
				`youtube shortcode: couldn't extract a video ID from "${url}"`,
			);
		}
		const id = bareId ? bareId[0] : match[1];
		const safeTitle = String(title || "")
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;");

		return `<div style="position: relative; width: 100%; padding-top: 56.25%; margin-bottom: 1em;">
	<iframe
		src="https://www.youtube-nocookie.com/embed/${id}"
		title="${safeTitle}"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
		style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>`;
	});
}
