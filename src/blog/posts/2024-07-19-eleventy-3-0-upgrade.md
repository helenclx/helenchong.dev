---
title: Aboard the Eleventy 3.0 Train
desc: My developer portfolio and blog website has been officially upgraded to Eleventy 3.0.
date: 2024-07-19T15:31:00+0800
updated: 2024-09-27T11:41:53+0800
templateEngineOverride: md
categories: ["about this website", "eleventy", "javascript"]
toc: true
hasCodeBlock: true
---

On 9 April 2024, I [rebuilt this developer portfolio and blog website of mine](2024-04-11-rebuilding-my-developer-portfolio-with-eleventy.md) with Eleventy 2.0.1. Three months after using Eleventy and loving it, now I have upgraded Eleventy to 3.0! 🥳

Version 3.0 of Eleventy is still in alpha, but as I have been following Eleventy's development and community after starting to use it, and learning about other Eleventy users upgrading to version 3.0, I began to consider hopping on the Eleventy 3.0 train. Now that I have done it, I guess I am one of Eleventy's "courageous canary testers", [as the official Eleventy blog put it](https://www.11ty.dev/blog/canary-eleventy-v3/), haha. 😆

## Why Upgrading to 3.0

### ESM Support

The first major factor that made me consider upgrading Eleventy to 3.0 is 3.0's support for ECMAScript Modules (ESM).

Since I began to learn web development more seriously starting from December 2022, I have been using ESM in my JavaScript projects, including vanilla JavaScript and React, due to that being what is taught in Scrimba's JavaScript and React courses. As a consequence, Eleventy 2.0 was my first time using CommonJS, so I had to learn the syntax differences between the CommonJS and ESM. I learned about 3.0's ESM support soon after I began to use Eleventy, but I decided to stick to 2.0 for a bit because I wanted to familiarise myself with Eleventy first.

As I learned to use Eleventy more and becoming more satisfied with my decision to build my website with it, I felt more confident in my ability of trying out an alpha release of Eleventy.

### Built-In Bundle Plugin

Another major push for me to upgrade to Eleventy 3.0 was its [built-in bundle plugin](https://github.com/11ty/eleventy-plugin-bundle). I have been considering to use the plugin to bundle my CSS and JavaScript for specific components, including the header, footer, scroll-to-top button link, and so on, so the CSS and JavaScript code blocks I wrote in the components' templates would be bundled into the `<head>` element. Without bundling the CSS and JavaScript, the `<style>` and `<script>` tags would scatter across the `<body>` element in the HTML output, which is not a good practice, as the [W3C Markdown Validation Service](https://validator.w3.org/) would output errors when I checked the HTML output.

Previously, Eleventy's bundle plugin was a separate plugin that needed to be installed manually, as seen in the [Eleventy base blog](https://github.com/11ty/eleventy-base-blog) starter project, which uses Eleventy 2.0.1, though starting with Eleventy v3.0.0-alpha.10, the bundle plugin is now bundled with Eleventy.

Therefore, I finally made the jump, by keying in `bun install @11ty/eleventy@canary --save-exact` in my website's folder on the terminal, and voilà! Eleventy 3.0 here I come!

(Yes, I use [Bun](https://bun.sh/) as the JavaScript runtime for developing my Eleventy website and deploying it to GitHub Pages, and it works since Bun is meant to be a drop-in replacement for Node.js)

## Step 1: Changing My `package.json` Scripts

A change I had to made immediately after installing Eleventy 3.0 was to edit my `package.json` scripts for Eleventy, including "start" and "build" scripts, by replacing `@11ty/eleventy` to just `eleventy`, since otherwise the terminal will output an error saying "Script not found '@11ty/eleventy'".

This happens when I run the Eleventy commands with either `npm` or `bun`.

## Step 2: Bundling CSS and JavaScript

With problems with my `package.json` scripts solved, I could finally begin my process to transform my website to an Eleventy 3.0 site, by starting with bundling my component-specific CSS and JavaScript.

I followed the instructions from [Eleventy bundle plugin's GitHub repository](https://github.com/11ty/eleventy-plugin-bundle), by adding `addBundle("css")` and `addBundle("js")` to my Eleventy configuration file.

I want to write my bundled JavaScript into files with the `getBundleFileUrl` shortcode, so I can add the `defer` HTML attribute to the `<script>` tags that load the bundled file. For this purpose, I use the `toFileDirectory` to configure my JavaScript bundle to write the bundled JavaScript files into the output's assets folder and its JavaScript subfolder, so the setup to bundle my CSS and JavaScript in my Eleventy configuration file becomes this:

```js
eleventyConfig.addBundle("css");
eleventyConfig.addBundle("js", { toFileDirectory: "assets/js" });
```

Next, I opened the base layout template for my entire website, and added the `getBundle` shortcode for CSS and `getBundleFileUrl` shortcode for JavaScript in the `<head>` element, then I replaced the `<style>` and `<script>` tags in my component Nunjucks templates with `{% css %}` and `{% js %}` shortcodes.

Now my component-specific CSS and JavaScript are bundled in the output.

## Step 3: Converting CommonJS to ESM

It was finally time to go all way in using ESM in my projects that use JavaScript, including Eleventy, by converting all CommonJS syntax in my Eleventy configuration and data files to ESM.

The first step was to add `"type": "module"` to my `package.json`, to make my Eleventy project environment support ESM.

Fun fact: When you create a `package.json` file with Bun, ``"type": "module"`` will be added by default. This actually tripped me up when I created my Eleventy 2.0 website with Bun, and made me learn about the differences between CommonJS and ESM the hard way, so I had to remove `"type": "module"`. Therefore, it feels good to have `"type": "module"` back to my `package.json` file.

Fortunately, Visual Studio Code, my go-to code editor, can automatically convert the CommonJS syntax of the imports in my Eleventy configuration files and the exports of the Eleventy configuration functions to ESM. Visual Studio Code also converts the `module.exports` syntax in my website metadata file, by assigning `const` variables and adding the `export` declaration, which allows me to use the variables and their values in other variables in the same file, without using the `this` keyword. For example:

```js
export const siteDomain = "helenchong.dev";
export const siteUrl = "https://" + siteDomain || "http://localhost:8080";
export const siteAuthor = {
    name: "Helen Chong",
    email: "contact@helenchong.dev",
    url: siteUrl + "/about"
};
export const siteDescription = siteAuthor.name + "'s developer portfolio and blog website.";
```

However, I needed to manually change the `require()` functions inside the Eleventy configuration function, by using the `import` declaration at the top of the file, and assign them variables.

The process of converting CommonJS to ESM in my Eleventy website was smoother than I expected. It might be because my website is not that complex, and my methods of organising my website files were relatively compatible with ESM.

## Conclusion

My website's transition to an Eleventy 3.0 site is a success, and I could not be happier with my decision to make the upgrade. If you like Eleventy, I highly recommend giving 3.0 a try.

Hello, Eleventy 3.0! 👋

## Update, 27 September 2024: THE Eleventy Meetup Episode 19

I was invited to speak at [THE Eleventy Meetup Episode 19](https://11tymeetup.dev/events/ep-19-migrating-to-3-0-and-blogging-with-storyblok/) on 26 September 2024, by giving a talk based on this blog post! You can watch my talk at THE Eleventy Meetup's YouTube Channel.

https://www.youtube.com/watch?v=qgFNl_oAyQY