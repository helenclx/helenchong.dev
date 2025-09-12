---
title: Ditching the Bun JavaScript Runtime
desc: I have stopped using Bun, the JavaScript runtime, including for all my websites.
date: 2025-09-12T19:18:40+0800
topics: ['bun', 'node.js', 'javascript', 'eleventy']
hasCodeBlock: true
---
Starting from today, I am no longer using Bun, the JavaScript runtime.

I had used Bun to build all my websites that are made with the static site generator [Eleventy](https://www.11ty.dev/). I enjoyed using Bun because it was indeed fast, and I found its name and logo adorable. I even openly praised Bun during [my first talk at THE Eleventy meetup in September 2024](2024-09-27-eleventy-meetup-19-first-talk.md).

I was a happy user of Bun for more than a year... until I found out the Bun team had been posting art for Bun that was clearly inspired by United States propaganda, through [David Bushnell's post](https://dbushell.com/notes/2025-09-10T12:08Z/). Fucking yikes.

Even though I am not American, I am aware of the U.S. politics enough that the fascist government holds nothing but contempt for people like me — queer, disabled and not white. Therefore, I am wary of anyone, especially Americans, who act like the American status quo is fine, and I do not believe tech and software can be totally divorced from politics, so I want to avoid software created or run by people who support such status quo.

To be honest, I felt bad for openly promoting Bun after finding this out. This was not the first time I enjoyed things made by people with terrible politics without realising it, but this strung a bit harder because it was something I openly sang praises for in front of others. Fortunately, there is still [Node.js](https://nodejs.org/en) as the long-standing option for a JavaScript runtime to fall back to, as Node.js still receives better support from major JavaScript projects, including Eleventy, than Bun does.

My migration from Bun to Node.js was smooth in the most part, thanks to Bun being designed as a drop-in replacement for Node.js. During the migration, I learned that you can [send command line arguments to your existing npm scripts](https://www.geeksforgeeks.org/node-js/sending-command-line-arguments-to-npm-script/) with `--`. For example, if I have created a `build` script in the `package.json` file of my Eleventy website project for the command `npx @11ty/eleventy`, and then I wanted create a `start` script for starting a local development server for running my Eleventy project, instead of `npx @11ty/eleventy --serve`, I can set the value of the script as `npm run build -- --serve`.

```json
"scripts": {
	"build": "npx @11ty/eleventy",
	"start": "npm run build -- --serve"
},
```

In conclusion, I am sticking to Node.js for all my JavaScript projects, including my websites, until maybe there is a better replacement for Node.js as a JavaScript runtime that is not created or run by people with very questionable politics.
