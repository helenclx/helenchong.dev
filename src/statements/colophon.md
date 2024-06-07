---
title: Colophon
keyword: colophon page
updated: 2024-06-07
---

Technical information about this website.

## Build
* Built with the static site generator [Eleventy](https://www.11ty.dev/)
* Templating languages: Nunjucks and Markdown
* Code written with Visual Studio Code
* JavaScript runtime: [Bun](https://bun.sh)
* Source code available on [GitHub](https://github.com/helenclx/helenclx.github.io)

## Host and Domain
* Deployed to GitHub Pages
* The domain name, `{{ sitemeta.siteDomain }}`, was purchased from, registered on, and is managed by [Porkbun](https://porkbun.com/)

### Eleventy Community Plugins
* [Emoji Read Time Eleventy Plugin](https://11ty.rocks/#plugin-emoji-read-time)
* [eleventy-plugin-metagen](https://www.npmjs.com/package/eleventy-plugin-metagen)
* [eleventy-plugin-embed-everything](https://www.npmjs.com/package/eleventy-plugin-embed-everything)

### markdown-it Plugins
* [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)
* [markdown-it-bracketed-spans](https://www.npmjs.com/package/markdown-it-bracketed-spans)

## Self-hosted Assets
* [Font Awesome](https://fontawesome.com/) (brand icons only)
* Technology and stack icons from [icons8](https://icons8.com/)

## Credits
* Gerard Hynes for providing inspiration with the tutorial: [Learn the Eleventy Static Site Generator by Building and Deploying a Portfolio Website](https://www.freecodecamp.org/news/learn-eleventy/)
* Raymond Camden for providing inspiration with the tutorial: [A Complete Guide to Building a Blog with Eleventy](https://cfjedimaster.github.io/eleventy-blog-guide/guide.html)
* Eleventy's official [blog starter project](https://github.com/11ty/eleventy-base-blog) for the inspiration

## JavaScript
Due to this website being built with a static site generator, JavaScript is used to create dynamic and interactive components of this site. Here is a list of how JavaScript is used on this site:

* When this site is viewed on mobile devices, the navigation bar utilises a button that uses JavaScript to toggle the display of the navigation links when the button is clicked.
* Every page has a button on the bottom right corner to allow you to quickly scroll to the top of the page. This scroll-to-top button uses JavaScript to show or hide the button based on scroll position.
    * A "Back to top" link that does not use JavaScript is available on each page's bottom footer, but the JavaScript version allows visitors to quickly scroll to the top page without needing to reach the bottom footer.
* [Website Carbon Badge](https://www.websitecarbon.com/badge/), which is placed on the home page, uses JavaScript to calculate the carbon footprint of this website.

You can still access most of the content of this site with JavaScript disabled, but the above components will not work as intended.
