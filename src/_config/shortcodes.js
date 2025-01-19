import slugify from "slugify";

export default function(eleventyConfig) {
    // Current year
    eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

    // <cite> tag
    eleventyConfig.addShortcode('cite', (str) => `<cite>${str}</cite>`);

    // Manual heading anchor
    eleventyConfig.addPairedShortcode('headingAnchor', (title, hLevel, id=slugify(title)) => {
        return `<div class="heading-wrapper h${hLevel}">
            <h${hLevel} id="${id}">${title}</h${hLevel}>
            <a class="heading-anchor" href="#${id}" aria-labelledby="${id}"><span hidden="">#</span></a>
        </div>`;
    });
}