---
title: Responsive Disability Pride Flag CSS Background
desc: I coded the Disability Pride Flag in CSS to celebrate Disability Pride Month.
date: 2024-07-23
categories: ["css", "disability pride"]
---

{%- css %}
.disability-pride-flag {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='651.83' height='300' viewBox='-90.33 0 651.83 300'%3E%3Cpath fill='%233BB07D' stroke='%233BB07D' stroke-miterlimit='10' stroke-width='.351' d='M561.5 300 162.902.664h-50.634L510.867 300z'/%3E%3Cpath fill='%237BC2E0' stroke='%237BC2E0' stroke-miterlimit='10' stroke-width='.351' d='M510.711 300 112.113.664H61.478L460.078 300z'/%3E%3Cpath fill='%23E8E8E8' stroke='%23E8E8E8' stroke-miterlimit='10' stroke-width='.351' d='M460.077 300 61.478.664H8.094L406.693 300z'/%3E%3Cpath fill='%23EEDE77' stroke='%23EEDE77' stroke-miterlimit='10' stroke-width='.351' d='M406.692 300 8.095.664h-49.111L357.584 300z'/%3E%3Cpath fill='%23CF7280' stroke='%23CF7280' stroke-miterlimit='10' stroke-width='.351' d='M357.378 300-41.22.664h-49.11L308.27 300z'/%3E%3C/svg%3E");
    background-color: #595959;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
}

.disability-pride-flag.demo {
    width: 100%;
    height: 20rem;
}
{% endcss %}

<div class="disability-pride-flag demo" role="image"></div>

Happy [Disability Pride Month](https://www.weareincludability.co.uk/resources/what-is-disability-pride-month)! To celebrate the occasion, I did a small project: a responsive Disability Pride Flag CSS background! For those who do not know, this [Disability Pride Flag](https://www.womansday.com/life/a43964487/disability-pride-flag/) was created by [Ann Magill](https://capri0mni.dreamwidth.org/837596.html) and released in 2021.

Here is the CSS snippet for a responsive Disability Pride Flag background:

```css
.disability-pride-flag {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='651.83' height='300' viewBox='-90.33 0 651.83 300'%3E%3Cpath fill='%233BB07D' stroke='%233BB07D' stroke-miterlimit='10' stroke-width='.351' d='M561.5 300 162.902.664h-50.634L510.867 300z'/%3E%3Cpath fill='%237BC2E0' stroke='%237BC2E0' stroke-miterlimit='10' stroke-width='.351' d='M510.711 300 112.113.664H61.478L460.078 300z'/%3E%3Cpath fill='%23E8E8E8' stroke='%23E8E8E8' stroke-miterlimit='10' stroke-width='.351' d='M460.077 300 61.478.664H8.094L406.693 300z'/%3E%3Cpath fill='%23EEDE77' stroke='%23EEDE77' stroke-miterlimit='10' stroke-width='.351' d='M406.692 300 8.095.664h-49.111L357.584 300z'/%3E%3Cpath fill='%23CF7280' stroke='%23CF7280' stroke-miterlimit='10' stroke-width='.351' d='M357.378 300-41.22.664h-49.11L308.27 300z'/%3E%3C/svg%3E");
    background-color: #595959;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
}
```

After copying the above snippet in a CSS stylesheet or the HTML `<style>` tags, to apply the background to an HTML element, simply add the CSS class name `disability-pride-flag` (you can rename the class name if you want) to the HTML element's `class` attribute.

The Disability Pride Flag CSS background is done with a combination of CSS background properties and inline SVG URL, and designed to be responsive, so it can adapt to different screen sizes and devices.

To code the Disability Pride Flag in CSS and make it responsive, I first downloaded an [SVG file of the Disability Pride Flag](https://commons.wikimedia.org/wiki/File:Visually_Safe_Disability_Pride_Flag.svg) from Wikimedia Commons, then modified the stripes in Adobe Illustrator CS5 (the only version of Adobe Illustrator I actually own) to allow the entire stripes to be shown in wide backgrounds, instead of appearing to be cut off mid-way. After finishing the edit in Illustrator, I saved the SVG file, opened it in Visual Studio Code to obtain the SVG code, used Jake Archibald's [SVGOMG](https://jakearchibald.github.io/svgomg/) to optimise the SVG code, then encode it into CSS-ready code by using [Yoksel's URL-encoder for SVG](https://yoksel.github.io/url-encoder/).

Since Ann Magill released the Disability Pride Flag to the public domain under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/), I am doing the same to my responsive Disability Pride Flag CSS background. Therefore, you are free to use my code and do what you want with it without asking for permission or crediting me.