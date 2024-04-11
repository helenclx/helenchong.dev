---
title: Rebuilding My Developer Portfolio with Eleventy
description: I recreated my developer portfolio and blog from scratch with Eleventy.
date: 2024-04-11
categories: ["eleventy", "about this website", "about this blog"]
---

I have been taking courses to learn to code, starting from HTML, CSS and JavaScript, since December 2022. As I honed my front-end web development skills further by building projects, I quickly realised that I needed a portfolio website to showcase myself and my projects. Eventually, I launched my first developer portfolio website in February 2023, based on Kolade Chris tutorial ["How to Build Your Own Developer Portfolio Website with HTML, CSS, and JavaScript"](https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/) on freeCodeCamp, and deployed it to GitHub Pages.

![First version of Helen Chong's developer portfolio](/assets/images/posts/rebuilding-my-developer-portfolio-with-eleventy/Helen-Chong-portfolio-old.png)

When I [shared the first version of my developer portfolio website on Twitter](https://twitter.com/helen_clx/status/1621696817795854336), my tweet was liked and replied to by both [Quincy Larson](https://twitter.com/ossia/status/1621729431009071104), the founder of freeCodeCamp, and [Kolade Chris](https://twitter.com/Ksound22/status/1621739428057079808) themselves, despite me not even tagging freeCodeCamp nor Kolade.

![Quincy Larson and Kolade Chris' replies to my tweet](/assets/images/posts/rebuilding-my-developer-portfolio-with-eleventy/Quincy-Larson-Kolade-Chris-tweet-replies.png)

As my front-end web development skills grew, I made my own improvements to the code of my portfolio website, most notably revamping the CSS to a mobile-first approach. In August 2023, I also [launched my tech and coding blog](./2023-08-21-Welcome-to-Helen-Codes) to document my coding learnings and talk about various tech topics. At first, I tried to build my blog with a Jekyll template in a separate repository, but switched to [Zonelets](https://zonelets.net/), so I can write and manage my blog in HTML, CSS and JavaScript, languages I was already familiar with, and moved my blog to my portfolio website's own repository.

However, as my portfolio website grew, I began to realise that writing all the code by hand makes a website tedious to maintain and update, especially if the website also includes a blog, since making new blog posts would require copy and pasting the same HTML heading over and over.

I started to research for ways to dynamically build a website, and as a result, I discovered more about static site generators (SSGs). I first heard of static site generators through GitHub and Jekyll, but I abandoned Jekyll after my brief attempt in building my blog with it, because Ruby is not a language I am familiar with, not to mention inconvenient to set up on Windows. Fortunately, I eventually discovered the ultimate solution to my problem: [Eleventy](https://www.11ty.dev/).

Eleventy, often abbreviated as 11ty, stands out among other SSGs in its flexibility. It not only supports many template languages including HTML, Markdown, JavaScript, Nunjucks, Liquid, and even having its own web component template called [WebC](https://www.11ty.dev/docs/languages/webc/), but also allows users to mix and match different template languages to build their own static websites. I like to be able to have control over how I build my own projects, which makes Eleventy an attractive option.

Thus, my Eleventy journey began. After reading the official Eleventy documentation and community Eleventy tutorials, as well as following along the tutorials, I created a new branch on my portfolio website repository to recreate my website and blog from scratch, based on Gerard Hynes' tutorial ["Learn the Eleventy Static Site Generator by Building and Deploying a Portfolio Website"](https://www.freecodecamp.org/news/learn-eleventy/) on freeCodeCamp and Raymond Camden's ["A Complete Guide to Building a Blog with Eleventy"](https://cfjedimaster.github.io/eleventy-blog-guide/guide.html), then migrating my website's content and blog posts to Eleventy. I also look at Eleventy's [official blog starter project](https://github.com/11ty/eleventy-base-blog) for inspiration.

Finally, on 9 April 2024, I succeed in rebuilding my developer portfolio website in Eleventy!

![Helen Chong's new developer portfolio](/assets/images/posts/rebuilding-my-developer-portfolio-with-eleventy/Helen-Chong-portfolio-eleventy.png)

Using a static site generator to build my own websites has been a great learning experience, from creating layouts, templates, installing plug-ins, to setting up GitHub Actions. I am glad that I have learned a great tool to build and maintain my static website projects in a dynamic, flexible and efficient manner.

Welcome to Helen Chong's brand new Eleventy portfolio website!🎉