import slugify from "slugify";

export default function(eleventyConfig) {
    // Shortcode: Current year
    eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

    // Shortcode: <cite> tag
    eleventyConfig.addShortcode('cite', (str) => `<cite>${str}</cite>`);

    // Shortcode: Manual heading anchor
    eleventyConfig.addPairedShortcode('headingAnchor', (title, hLevel, id=slugify(title)) => {
        return `<div class="heading-wrapper h${hLevel}">
            <h${hLevel} id="${id}">${title}</h${hLevel}>
            <a class="heading-anchor" href="#${id}">
                <span class="visually-hidden">Permalink to '${title}'</span>
                <span aria-hidden="true">#</span>
            </a>
        </div>`;
    });

    /*
        Cloudinary responsive image shortcodes by Sia Karamalegos:
        https://sia.codes/posts/eleventy-and-cloudinary-images/
    */
    // Set constants for the Cloudinary URL and fallback widths for images when not supplied by the shorcode params
    const CLOUDNAME = "helenchong";
    const FOLDER = "v1742915994/";
    const BASE_URL = `https://res.cloudinary.com/${CLOUDNAME}/image/upload/`;
    const FALLBACK_WIDTHS = [ 300, 600, 680, 1360 ];
    const FALLBACK_WIDTH = 680;

    // Generate srcset attribute using the fallback widths or a supplied array of widths
    function getSrcset(file, widths) {
        const widthSet = widths ? widths : FALLBACK_WIDTHS;
        return widthSet.map(width => {
            return `${getSrc(file, width)} ${width}w`;
        }).join(", ");
    }

    // Generate the src attribute using the fallback width or a width supplied
    // by the shortcode params
    function getSrc(file, width) {
        return `${BASE_URL}q_auto,f_auto,w_${width ? width : FALLBACK_WIDTH}/${FOLDER}${file}`;
    }

    // Shortcode: Responsive image
    eleventyConfig.addShortcode('src', (file, width) => getSrc(file, width));
    eleventyConfig.addShortcode('srcset', (file, widths) => getSrcset(file, widths));
}
