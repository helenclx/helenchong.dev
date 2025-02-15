---
title: I Have Joined the light-dark() Side
desc: I am applying the CSS light-dark() function to add light and dark modes to my websites.
date: 2025-02-15T11:18:07+0800
categories: ["css"]
---

After building and working on this developer portfolio and blog website of mine for a while, I began to learn to apply light and dark modes to my website. Initially, I used the [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) CSS `@media` feature to achieve that. Specifically, I used a `prefers-color-scheme: dark` media query to set the values of my website layout in dark mode.

That was, until I learned about CSS' [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) colour function through [Sara Joy](https://sarajoy.dev/)'s article on CSS-Tricks, ["Come to the light-dark() Side"](https://css-tricks.com/come-to-the-light-dark-side/). As soon as I tried the `light-dark()` function out myself, I fell in love with it. In other words, I have indeed joined the `light-dark()` side, LOL.

`light-dark()` is a game-changer, because compared to the `prefers-color-scheme` `@media` query, it saves me the trouble of duplicating lines of CSS properties, both native and custom, just to change the colour value. Additionally, I got to learn about using the `color-scheme` CSS property as another method to set a web page's light and dark mode.

Therefore, I decided to apply `color-scheme` and `light-dark()` to my websites.

helenchong.dev is also a member of the [Darktheme Club](https://darktheme.club/), a directory of websites with dark modes. Part of the process to join the directory is to specify how you add dark mode to your website, with multiple options include dark mode by default, `@media` query or JavaScript, but no option for the `color-scheme` CSS property.

Therefore, I made a suggestion to add `color-scheme` CSS property as a possible method to set dark mode by [creating a GitHub issue](https://github.com/garritfra/darktheme.club/issues/194). [Garrit Franke](https://garrit.xyz/), the creator of Darktheme Club, replied by asking if I could create a pull request for it, so [I happily did](https://github.com/garritfra/darktheme.club/pull/196). I also changed my website's dark mode method from "media query" to "color-scheme". My pull request eventually got merged! I am happy to be able to make good use of my new CSS knowledge.