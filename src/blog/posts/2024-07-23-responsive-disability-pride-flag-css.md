---
title: Responsive Disability Pride Flag CSS Background
desc: I coded the Disability Pride Flag in CSS to celebrate Disability Pride Month.
date: 2024-07-23T20:35:00+0800
updated: 2024-12-15T18:43:47+0800
categories: ["css", "disability pride"]
hasCodeBlock: true
---

{{ set demoHeight = "23rem" }}

{{ set disabilityPrideCss }}.disability-pride-flag {
    background:
        linear-gradient(
            37deg,
            #595959 0 35%,
            #CF7280 30% 41%,
            #EEDE77 30% 47%,
            #E8E8E8 30% 53%,
            #7bc2e0 30% 59%,
            #3BB07D 30% 65%,
            #595959 0
        );
}{{ endset }}

{{ css }}
{{ disabilityPrideCss }}
.disability-pride-flag.demo { height: {{ demoHeight }}; }
{{ endcss }}

<div class="disability-pride-flag demo" role="img" aria-label="Demo of the Disability Pride flag coded in CSS"></div>

Happy [Disability Pride Month](https://en.wikipedia.org/wiki/Disability_Pride_Month)! To celebrate the occasion, I did a small project: a responsive Disability Pride flag CSS background! For those who do not know, this [Disability Pride flag](https://www.womansday.com/life/a43964487/disability-pride-flag/) was created by [Ann Magill](https://capri0mni.dreamwidth.org/837596.html) and released in 2021.

My Disability Pride flag CSS background is done with a combination of the CSS [`background` property](https://developer.mozilla.org/en-US/docs/Web/CSS/background) and [`linuear-gradient()` function](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient), and designed to be responsive, so it can adapt to different screen sizes and devices.

Here is the CSS snippet for a responsive Disability Pride Flag background:

```css
{{ disabilityPrideCss }}
```

After copying the above snippet in a CSS stylesheet or the HTML `<style>` tags, to apply the background to an HTML element, simply add the CSS class name `disability-pride-flag` (you can rename the class name if you want) to the HTML element's `class` attribute.

Note that you want to apply the Pride flag to an empty element, you also need to set the element's [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) or [`aspect-ratio`](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) property to make the Pride flag background visible. For example, the demo above sets the `height` property to {{ demoHeight }}.

I was inspired to code a Disbility Pride flag background in CSS by other people's CSS code snippets of LGBTQ+ pride flag backgrounds, such as [Alvaro Montoro's LGBTQ+ Flags Coded in CSS demo](https://codepen.io/alvaromontoro/full/NWyBrZJ).

Since Ann Magill released the Disability Pride flag to the public domain under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/), I am doing the same to my responsive Disability Pride Flag CSS background. Therefore, you are free to use my code and do what you want with it without asking for permission or crediting me.

You can also check out [my CodePen demo](https://codepen.io/helenclx/pen/VwJjBmB)  for my responsive Disability Pride flag CSS background and play with the code.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="VwJjBmB" data-pen-title="Disability Pride Flag CSS Background" data-editable="true" data-user="helenclx" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/helenclx/pen/VwJjBmB">
  Disability Pride Flag CSS Background</a> by Helen Chong (<a href="https://codepen.io/helenclx">@helenclx</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

**Update, 15 December 2024:** Previously, I coded the Disability Pride flag background in CSS by using an inline SVG, but I eventually figured out how to create the stripes by using the CSS `linuear-gradient()` function, making my code snippet much cleaner.
