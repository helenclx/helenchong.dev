---
title: Building a Multilingual Blog with Eleventy
desc: My experience with making my English-Simplified Chinese bilingual personal blog with Eleventy and its official internalisation plugin.
date: 2025-09-05T21:10:05+0800
updated: 2025-10-17T11:58:34+0800
topics: ['eleventy', 'internalisation']
toc: true
hasCodeBlock: true
templateEngineOverride: md
---
## Introduction

Aside from this developer blog, I have a personal blog, [Galaxy Garden](https://blog.helenchong.omg.lol/), where I blog about non-tech stuff. Another notable feature that sets Galaxy Garden apart from my developer blog is that the former is available in more than one language, specifically English and Simplified Chinese.

Naturally, having been a dedicated user of the static site generator [Eleventy](https://www.11ty.dev/) since April 2024, I use Eleventy to build Galaxy Garden, especially since Eleventy also provides tools to help with building a multilingual website.

It has been almost a year since Galaxy Garden was [launched on 8 October 2024](https://blog.helenchong.omg.lol/en/posts/2024-10-08-welcome-to-galaxy-garden/), so I would like to share my experience with building a multilingual blog with Eleventy.

## Return to Personal Blogging

Galaxy Garden started after I joined [omg.lol](https://home.omg.lol/) with a lifetime membership in September 2024. omg.lol had [become one of my favourite online communities](2024-10-19-omg-lol-membership-one-month-anniversary.md). The bloggers in the omg.lol community ended up inspiring me to start a personal blog again, which led to the launch of Galaxy Garden.

My history with blogging went as far back as the 2000s when I was a teenager. Back then, I blogged in Mandarin Chinese, which is my native language, and there used to be a community of Malaysian Chinese bloggers. However, I gradually abandoned my teenage blog due to various major changes both on the web and in my life, such as the rise of social media and me attending university. That said, blogging was my first foray into expressing myself on the World Wide Web.

Therefore, when I got inspired by other bloggers in the omg.lol community and other parts of the independent web to return to my personal blogging roots, I decided that I wanted to blog in both English and Mandarin Chinese, written in Simplified Chinese as that is what is taught in Chinese schools and classes in Malaysia. In addition, blogging in Mandarin Chinese would give me more opportunities to continue practising writing in the language.

## Research to Build a Multilingual Website with Eleventy

By the time I joined omg.lol, I had been a happy user of Eleventy for months, so I wanted my new personal blog to be built with Eleventy as well. I was aware that Eleventy has an [official Internationalisation (i18n) plugin](https://www.11ty.dev/docs/plugins/i18n/), but since I had never built a multilingual website before, I also searched the web for guides to build a multilingual website with Eleventy and its i18n plugin.

My search led me to Lene Saile's ["Internationalization with Eleventy 2.0 and Netlify"](https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/), which became my primary reference for building Galaxy Garden. Lene's guide was aimed at version 2.0 of Eleventy, which only supported the CommonJS syntax, though since I had [used version 3.0 of Eleventy](2024-07-19-eleventy-3-0-upgrade) with the ESM syntax for a couple of months at that point, I chose to build Eleventy with ESM. Regardless if you use CommonJS or ESM though, Lene's guide provides a good starting point for building a multilingual website with Eleventy.

Lene had also created an [eleventy-i18n](https://github.com/madrilene/eleventy-i18n) starter project to build an Eleventy website with localised content, though I did not use it as I wanted to challenge myself to code and design my own multilingual Eleventy blog from the ground up. That said, it is worth noting that the eleventy-i18n starter project have been upgraded to Eleventy 3.0 and use ESM syntax.

In addition to its official i18n plugin, Eleventy has official documentation for [Internationalisation (I18n)](https://www.11ty.dev/docs/i18n/) which serves as a companion page to the plugin's documentation page for recommendations for how to organise the files and set the URL style of an internationalised Eleventy project.

I learned the basics of internalisation and how to build an internationalised Eleventy website from Eleventy's official documentation and Lene's guide, from creating subfolders for English and Chinese versions, creating global data for localised strings to be used in blog layouts and partials to making use of Eleventy's i18n plugin to manage links to localised content. It ended up taking me five days from starting to build Galaxy Garden from scratch to launching the blog with its first post.

As I familiarised myself with how building a multilingual website with Eleventy worked, I also adapted parts of Lene's guide and explored alternative ways to implement some features to suit my needs.

## Redirect Visitors to Their Preferred Language Version of the Blog

A common feature in multilingual websites is redirecting visitors to a specific language version of the website by detecting the visitor's language preferences in their browser settings. I set English as the default language of Galaxy Garden, but I want to redirect visitors who set Chinese as their preferred language to the Chinese version of my blog.

Lene's guide covers how to implement it in [Netlify](https://www.netlify.com/), but when I started to build Galaxy Garden, I had switched to [Hostinger](https://www.hostinger.com/)'s shared hosting service, which uses the [Litespeed web server](https://www.litespeedtech.com/products/litespeed-web-server), to host my Eleventy websites. Nowadays, I host my websites on a [virtual private server (VPS)](2025-05-19-my-vps-arc-began.md) with [Caddy](https://caddyserver.com/) as the web server. This means I needed to find ways to configure the web servers to redirect visitors to my blog to their preferred language version of my blog.

### With Apache or LiteSpeed Web Server

Since the LiteSpeed web server is a drop-in replacement for the [Apache HTTP server](https://httpd.apache.org/), I searched the web for how to configure the `.htaccess` file to redirect website visitors to their preferred language. Eventually, I discovered [Mark Howells-Mead's GitHub Gist](https://gist.github.com/markhowellsmead/0c414cea619727a3618b) for detecting browser language and redirect to appropriate language version of the website, and adapted it to my blog's languages:

```apacheconf
# Redirect visitors to the Chinese version if their preferred language is Chinese (zh)
RewriteCond %{HTTP:Accept-Language} ^zh [NC]
RewriteRule ^$ /zh/ [L,R=302]

# else redirect to the English version
RewriteRule ^$ /en/ [L,R=302]
```

### With Caddy Web Server

Unfortunately, when I switched to hosting my websites, including Galaxy Garden, on a VPS with Caddy as the web server, I could not find a guide for redirecting website visitors to their preferred language in Caddy with its configuration file called Caddyfile. Therefore, I needed to figure the solution out myself, by reading Caddy's documentations and discover which Caddyfile features I can use for that purpose.

Eventually, I found a way — by using Caddyfile's [`header_regexp` marcher](https://caddyserver.com/docs/caddyfile/matchers#header-regexp) as well as [`handle`](https://caddyserver.com/docs/caddyfile/directives/handle) and [`redir` directives](https://caddyserver.com/docs/caddyfile/directives/redir):

```Caddyfile
# Redirect visitors to the Chinese version if their preferred language is Chinese (zh)
@zh header_regexp Accept-Language ^zh
handle @zh {
	redir / /zh
}

# else redirect to the English version
handle {
	redir / /en
}
```

### Generate Web Server Configurations in Eleventy

One of Eleventy's many amazing features is its [permalink feature](https://www.11ty.dev/docs/permalinks/). Since it allows you to customise the location of your Eleventy website templates and pages, you can actually use the permalink feature to generate any sort of text files in Eleventy, including web server configuration files like `.htaccess` or `Caddyfile`.

To achieve this, you can create a template with your template language of choice (be it Nunjucks, Liquid, [Vento](2025-05-21-vento-in-eleventy.md), or others) with the same file name as the web server configuration file. For example, if you use Nunjucks as your template language and Apache your web server, you can create a `.htaccess.njk` template file in the root your Eleventy project folder.

Then, in the template file's frontmatter, set the `permalink` of the template file to `{{ page.filePathStem }}`. Eleventy's `filePathSteam` variable will ensure Eleventy will generate the output of your file template with the same file name without the template's file extension, so if you create a `.htaccess.njk` template file, the output will simply be `.htaccess`.

You may not want your web server configuration file to be part of your Eleventy website's [content collections](https://www.11ty.dev/docs/collections/), so you may set `eleventyExcludeFromCollections: true` in the frontmatter of the file template as well.

When you try to build your Eleventy website, Eleventy will throw an error when you try to write to a file without a file extension, such as `Caddyfile`. To [allow missing file extensions](https://www.11ty.dev/docs/permalinks/#allow-missing-file-extensions-using-data-cascade) for your web server configuration file, set `eleventyAllowMissingExtension: true` in the frontmatter of your web server configuration file template. If you use `.htaccess` however, you do not need to include this frontmatter property, because Eleventy [explicitly allows generating `.htaccess` without a file extension](https://github.com/11ty/eleventy/blob/0c89371802c45dcdc635c797192ccd2ad96693c9/src/TemplateMap.js#L20).

Here is the frontmatter code based on my recommendations for your web server configuration file template:
```yml
---
permalink: "{{ page.filePathStem }}"
eleventyExcludeFromCollections: true
eleventyAllowMissingExtension: true  # not necessary if you use .htaccess
---
```

## Language Switcher Links

Language switcher is an essential feature in multilingual websites. I ended up implementing my blog's language switcher links in similar ways as the World Wide Web Consortium (W3C)'s website on [w3c.org](https://www.w3.org/): a primary language switcher on my blog's header for visiting the English or Chinese version of my blog's home page, and individual language switcher on blog posts or pages with both English and Chinese version.

This way, visitors can still visit the alternate language version of my blog even when they are viewing a page that only has one language available. An example of how this is implemented on w3c.org is their [Web Standards page](https://www.w3.org/standards/) ([archived](https://web.archive.org/web/20250904061741/https://www.w3.org/standards/)). Eleventy's official i18n plugin provides the [`locale_url`](https://www.11ty.dev/docs/plugins/i18n/#locale-url-filter) and [`locale_links`](https://www.11ty.dev/docs/plugins/i18n/#locale-links-filter) filters, which are helpful for generating localised page links.

To generate language switcher for my blog's home page, first I configured the link label to my home page in both English and Chinese, in my blog's global data:

```js
export const siteLang = {
    en: {
		    home: 'English homepage'
    },
    zh: {
		    home: '简体中文首页'
    }
};
```

Then use the `locale_url` filter in my header partial:

```django
{% for lang, values in sitemeta.siteLang %}
    {% if lang !== page.lang %}
    <a href="{{ "/" | locale_url(lang) }}" lang="{{ lang }}" hreflang="{{ lang }}">
        <span lang="{{ sitemeta.siteLang[lang].code }}">{{ sitemeta.siteLang[lang].home }}</span>
    </a>
    {% endif %}
{% endfor %}
```

As a result, visitors who are browsing the English version of my blog will see a language switcher link on the header to the Chinese version of my blog's home page, and vice versa.

For language switchers on individual posts and pages, Eleventy's documentation for its i18n plugin provides a ["This page is also available in:" example](https://www.11ty.dev/docs/plugins/i18n/#this-page-also-available-in-example), but if a page does not have an alternate language version, no link will be generated, leaving only a "This page is also available in:" text. To fix this, you may want to use an `if` statement in your template language of choice.

First, you want to initiate a variable and assign it with the value of `page.url | locale_links` to get the array of the other languages available for the current page. If the current page is available in other languages, the array length will be longer than 0, so your if statement will be checking if the array length is more than 0.

Here is how to implement it in Nunjucks:

```django
{% set altLangs = page.url | locale_links %}
{% if altLangs.length > 0 %}
This page is also available in:
{% for link in page.url | locale_links %}
{%- if not loop.first %},{% endif %}
<a href="{{link.url}}" lang="{{link.lang}}" hreflang="{{link.lang}}">{{link.label}}</a>
{% endfor %}
{% endif %}
```

## Multilingual Blogging Workflow

As for my workflow for blogging in multiple languages, I typically start with drafting a post in one language first, then translate it to the other language. Sometimes I use online translators like [DeepL](https://www.deepl.com/en/translator) to help me with picking the best words and phrases in the other language, but I do my best to translate my own posts by writing whole sentences myself to maintain my own voice in my writing.

## Wrapping Up

Making a multilingual blog has been a learning experience, both content- and technical-wise. However, I am happy to have made my own, as I am proud to be multilingual, thanks to my upbringing as a Malaysian Chinese person. I had written about my experience with the World Wide Web, which English is the _lingua franca_ of, from the [perspective of a multilingual person](https://blog.helenchong.omg.lol/en/posts/2024-10-25-indieweb-carnival-multilingualism/) on my personal blog.

You can check out my English-Simplified Chinese bilingual personal blog on [blog.helenchong.omg.lol](http://blog.helenchong.omg.lol/), and its source code on [my self-hosted Gitea instance](https://git.helenchong.dev/helenchong/helenchong-blog).

## Update, 17 October 2025: THE Eleventy Meetup Episode 27

I was invited to speak at [THE Eleventy Meetup Episode 27](https://11tymeetup.dev/events/ep-27-11ty-at-the-museum-and-multilingual-blogs/) on 15 October 2025, by giving a talk based on this blog post! You can watch my talk at THE Eleventy Meetup's YouTube Channel.

https://www.youtube.com/watch?v=9VmjX0muGkk
