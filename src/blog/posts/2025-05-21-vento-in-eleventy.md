---
title: "Vento: My Favourite Templating Language for Eleventy"
desc: I have switched to using Vento as the template engine in my websites built with Eleventy, and I love it.
date: 2025-05-21T20:24:41+0800
topics: ["eleventy", "vento", "nunjucks"]
toc: true
---
I have used the static site generator [Eleventy](https://www.11ty.dev/) to build my websites for a year since April 2024. A noteworthy feature of Eleventy is its support for multiple templating languages, though [Liquid](https://liquidjs.com/) and [Nunjucks](https://mozilla.github.io/nunjucks/) seem to be the most popular choices among Eleventy users, as both languages not only receive built-in support from Eleventy without a third-party plugin, but also are the most documented in Eleventy's official documentation.

## Nunjucks: My Original Go-To Templating Language in Eleventy

I have tried both Nunjucks and Liquid, but I settled for Nunjucks as the go-to templating language of my Eleventy websites, mainly because I was already somewhat familiar with Nunjucks' syntax since I had written [Jinja](https://jinja.palletsprojects.com/en/stable/), the templating engine Nunjucks is based on, as part of the [CS50's Introduction to Computer Science](/blog/topics/cs50x/) course. Another major reason I chose Nunjucks over Liquid was the [macro](https://mozilla.github.io/nunjucks/templating.html#macro) feature, which works similarly to functions in other programming languages, while Liquid lacks an equivalent feature.

## Drawbacks of Nunjucks

Nunjucks had served my purposes decently for months, but after using it for a while, I had a nagging feeling that it could be better, not helped by the fact that Nunjucks is not well-maintained. The latest release, v3.2.4, was in April 2023, while the previous release was in June 2022. There is a [Nunjucks 4](https://github.com/nunjucks/nunjucks4) project which aims to rewrite Nunjucks, but as of this writing, it is still in alpha and is not yet production ready.

There is also the fact that it is difficult to find code editor resources for Nunjucks. I installed the [Better Nunjucks](https://marketplace.visualstudio.com/items?itemName=ginfuru.better-nunjucks) extension when I used Visual Studio Code, but since April 2025, I have [switched to Neovim](2025-04-03-i-use-neovim-btw.md) as my main code editor, and there is a lack of Neovim plugin equivalent to Better Nunjucks. However, I do not want to go back to VS Code just for one extension.

## Discovering Vento

Later, I discovered [Vento](https://vento.js.org/), a new kid in the block in templating engine created by [Óscar Otero](https://oscarotero.com/), who also created [Lume](https://lume.land/), another static site generator, as well as [eleventy-plugin-vento](https://github.com/noelforte/eleventy-plugin-vento), an Eleventy plugin that adds support for Vento, created by [Noel Forte](https://forte.is/).

I was already intrigued by Vento, as I agree with Óscar about the drawbacks of both Nunjucks and Liquid — in addition to the shortcomings I mentioned above, I also find it inconvenient to have to add a `safe` filter everywhere when writing Nunjucks templates in a static site generator to ensure HTML and special characters are rendered properly.

(Other template engines that inspired Vento included EJS/Eta and Mustache, but I cannot comment on them since I never used them)

Then, I read [Christopher Kirk-Nielsen](https://chriskirknielsen.com/)'s post about Vento, ["Taking VentoJS for a spin in Elev­enty"](https://chriskirknielsen.com/blog/taking-vento-js-for-a-spin-in-eleventy/), in late April 2025, that was when I finally decided to use Vento in my Eleventy websites, by installing eleventy-plugin-vento and converting Nunjucks templates to Vento templates.

## Converting Nunjucks to Vento

As soon as I started dipping my toes in Vento, I quickly found myself liking it much more than Nunjucks and Liquid. As a result, I began the process of converting the Nunjucks templates in my Eleventy websites to Vento templates, starting with changing the template files' extension to `vto`.

Since I am using Neovim with the [LazyVim](https://www.lazyvim.org/) setup, which includes the [grug-far.nvim](https://github.com/MagicDuck/grug-far.nvim) plugin, I make use of the search and replace function to change Nunjucks syntax with Vento syntax, including {{ echo }}`{%` to `{{`, `%}` to `}}`{{ /echo }}, `endfor` to `/for`, `endif` to `/if`, removing the `safe` filter, and so on.

During the conversion, I learned that eleventy-plugin-vento needs to be loaded after any other plugins that provide or modify filters and shortcodes in Eleventy's configuration file (`eleventy.config.js` or `.eleventy.js`). Initially I had issue with rendering table of contents with [uncenter](https://uncenter.dev/)'s fork of [table of contents plugin for Eleventy](https://github.com/uncenter/eleventy-plugin-toc), but uncenter and Noel helped me realise the importance of plugin load orders when using eleventy-plugin-vento.

As my websites have become large enough, it was inevitable that I encountered errors during my attempts to convert Nunjucks to Vento. When I started the conversion, I was using the stable 3.0.0 version of Eleventy, which had a [known issue](https://github.com/noelforte/eleventy-plugin-vento/issues/219) of not showing internal errors from eleventy-plugin-vento. Fortunately, Eleventy version 3.1.0 solved the issue, so I upgraded Eleventy to version 3.1.0 when it was still in beta, and the error outputs were vastly more helpful in ensuring I fully replaced Nunjucks syntax with Vento syntax in my Vento template files.

Finally, I configure my Eleventy websites to support Vento in HTML and Markdown files in the `return` block of my `eleventy.config.js` file:

```js
return {
	markdownTemplateEngine: "vto",
    htmlTemplateEngine: "vto",
}
```

After spending hours and several days working on the process, I officially converted the template engine of my Eleventy websites from Nunjucks to Vento on May 5!

## Why Vento

In addition to addressing the shortcomings of Nunjucks and Liquid, Vento has other advantages over the other template engines that make it my current favourite to use in my Eleventy websites.

### Better Support for JavaScript Language

Vento supporting JavaScript language’s syntax and methods better than Nunjucks makes Vento more intuitive for me as a web developer who is already familiar with JavaScript, and using a static site generator that is written in JavaScript (Eleventy) to build their own websites. While Nunjucks was created for the JavaScript ecosystem, being inspired by Jinja, which was created for Python, means that some of Nunjucks’ syntax, such as the for loop, still uses Python's syntax of [`for...in`](https://wiki.python.org/moin/ForLoop) rather than JavaScript's [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of), which is what [Vento's for loop](https://vento.js.org/syntax/for/) uses. Furthermore, Vento supports directly writing [real JavaScript code in its templates](https://vento.js.org/syntax/javascript/).

### Better Support in Neovim

Unlike Nunjucks, Vento [offers Neovim integration](https://vento.js.org/editor-integrations/#neovim) through [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter), and Vento's logo is available in the [mini.icons](https://github.com/echasnovski/mini.icons) plugin, which I use as part of the [LazyVim](https://www.lazyvim.org/) setup. There is a [Jinja2 syntax highlighting plugin for Vim-based editors](https://github.com/Glench/Vim-Jinja2-Syntax) that also supports Nunjucks, but Nunjucks' logo is unavailable in mini.icons.

### Better Syntax (At Least to Me)

I like Vento's template syntax considerably better than Nunjucks as well. Even though I rarely had problems with mistyping Nunjucks `{%` and `%}` delimiters, I appreciate Vento for using double curly braces tags (`{{` and `}}`) for everything instead of just variables like in Nunjucks, as I find the double curly braces easier to type.

Furthermore, Vento using a slash (`/`) instead of Nunjucks' `end` keyword for closing tags reminds me of HTML, the backbone of web pages and what I use a static site generator like Eleventy to generate. Using slash instead of `end` also makes Vento's closing tags easier to read for me than Nunjucks', because in Nunjucks you have to write the words `end` with `for`, `if` or variables together without a space, like `endfor` and `endif`.

## Known Issue with Eleventy, i18n and Vento

I have been singing praises for Vento, and eleventy-plugin-vento helps to make it easier to start using Vento in an Eleventy project. That said, as Vento is not officially supported by Eleventy, at least not yet, I have discovered an issue with using Eleventy and Vento together when [Eleventy's official internalization (i18n) plugin](https://www.11ty.dev/docs/plugins/i18n/) is also enabled.

I have a personal blog, [Galaxy Garden](https://blog.helenchong.omg.lol/), which is available in English and Simplified Chinese, and built with Eleventy with the i18n enabled. Like with this developer blog of mine, I added links to the next and previous posts on individual blog pages, by using the built-in [`getPreviousCollectionItem` and `getNextCollectionItem` filters](https://www.11ty.dev/docs/filters/collection-items/). Eleventy's i18n plugin [modifies the behavior of these filters](https://www.11ty.dev/docs/plugins/i18n/#using-with-get-collection-item-filters) to prefer a collection item in the current page language’s without requiring any changes to your project.

Unfortunately, when I converted my personal blog's templating engine from Nunjucks to Vento, I realised that the filters to get my post collection items failed to render anything, despite the terminal not throwing any errors.

After failing to figure out the cause, I [created a GitHub issue](https://github.com/noelforte/eleventy-plugin-vento/issues/221) on eleventy-plugin-vento's repository to report it. Through my report, Noel discovered that the cause of the issue is [Eleventy itself not handling i18n with custom template engines very well](https://github.com/noelforte/eleventy-plugin-vento/issues/221#issuecomment-2837024798), and [created a pull request on Eleventy's repository](https://github.com/11ty/eleventy/pull/3785) as a potential solution. As of this writing, the pull request has yet to be reviewed, so I am keeping an eye on it.

## Wrapping Up

Vento has officially become my favourite templating language to use in Eleventy. Despite Vento being new — the [first commit](https://github.com/ventojs/vento/commit/c2f32af7c568beded5753cf444ffc8d747bc7345) of its Git repository was only created two years ago in February 2023 — and thus has fewer users, the improvements Vento has over Nunjucks and Liquid more than makes up for it.

Not to mention both Vento and eleventy-plugin-vento are well-maintained by their developers, so I would advise you to not letting the fact that Vento does not have as many users as Liquid and Nunjucks stop you from giving Vento a try.

In conclusion, I love Vento and I am happy that I made the switch from Nunjucks to Vento.

I am grateful of Óscar's work in creating and maintaining Vento, Noel's work in creating and maintaining eleventy-plugin-vento, and both uncenter and Noel for helping me solve my issue with using eleventy-plugin-vento with other Eleventy plugins that provide filters and shortcodes.
