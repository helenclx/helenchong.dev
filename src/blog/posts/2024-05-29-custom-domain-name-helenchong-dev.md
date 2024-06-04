---
title: Custom Domain Name for My Developer Website
description: My developer website now has a custom domain name.
date: 2024-05-29
categories: ["about this website"]
---

This website — my developer portfolio and blog website — now has a custom domain: [helenchong.dev](https://helenchong.dev/)!

As an aspiring developer, I have been putting effort in building, updating and maintaining my portfolio website, and later starting a blog on this site as well to write about coding and tech. The only thing missing for my website is a custom domain name to give the site and myself a unique identity on the web, so I have been considering buying a custom domain name for this website.

After doing research and comparing various domain name registrars, I settled for Porkbun for their very competitive prices for domain names, and registered an account there. Through searching for available domain names by using my own name, I found out that `helenchong.com` has been taken, so I ended up purchasing `helenchong.dev` as my domain name, since the `.dev` top-level domain (TLD) name is intended for developers, and its renewal price on Porkbun is close to the `.com` TLD.

helenchong.dev is also the very first domain name I ever owned, so configuring DNS to point a domain name to my website was also a new experience. Fortunately, my developer website is hosted on GitHub Pages, thus I could refer to GitHub's documentation on [configuring a custom domain name for a GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for how to do it.

There was a setback, however: Soon after I succeeded in verifying helenchong.dev and pointing to my website on GitHub, I realised that my domain name got reset after pushing new commits to GitHub. While GitHub's documentation mentioned that manually creating a `CNAME` file in the repository may be needed for websites that are built with static site generators, I did not understand the exact actions to perform for my Eleventy website, until I searched the web for how to do it with an Eleventy site and discovered Justus Grunow's guide ["How To Deploy an Eleventy Site to Github Pages with a Custom Domain"](https://www.justus.ws/tech/deploying-eleventy-to-github-pages/). Manually creating a `CNAME` file and configure Eleventy to copy the file into the output folder every time it builds my website saves myself the trouble of having to reconfigure my domain name on GitHub again and again when I make changes to my website.

Since Porkbun offers free email forwarding, I also take advantage of the feature by creating an email address with my domain name — contact@helenchong.dev, and pointing it to my Outlook email address. This means now you can contact me by sending an email to contact@helenchong.dev.

Another benefit of using a custom domain name for my GitHub user site is that all my other projects that are hosted on GitHub pages also share the same custom domain. For example, the live site of my [React Tenzies Game](https://github.com/helenclx/Tenzies-Game) can now be viewed at https://helenchong.dev/Tenzies-Game/.

Welcome to helenchong.dev! 🥳
