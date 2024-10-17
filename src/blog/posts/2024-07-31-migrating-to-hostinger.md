---
title: Migrating My Website to Hostinger
desc: I have migrated my developer portfolio and blog website to Hostinger.
date: 2024-07-31T09:31:00+0800
categories: ["about this website", "hostinger"]
toc: true
---

Starting from 30 July 2024, helenchong.dev, my developer portfolio and blog website, has migrated from GitHub Pages to Hostinger as its web host.

This website was hosted on GitHub Pages since its creation, and has come a long way since its launch in February 2023, from [adding a blog](2023-08-21-Welcome-to-Helen-Codes.md), [being rebuilt with Eleventy](2024-04-11-rebuilding-my-developer-portfolio-with-eleventy.md) to [getting its own domain name](2024-05-29-custom-domain-name-helenchong-dev.md). This website started out as a standard developer portfolio, but as I grew as an aspiring web developer, so did my website.

Therefore, I decided that it was time to take my website to another level to allow both my website and myself as a developer more room to grow, starting with migrating from GitHub Pages.

## Why Moving Hosts

GitHub Pages is decent for hosting static sites. You can host a static site on GitHub Pages by directly deploying a Git repository. It certainly helps that you can do so for free, and if you already have a custom domain name, you can use it on your GitHub Pages website without additional costs. I still think GitHub Pages is a good platform if you are just starting out building your website or blog, especially if you are unsure if you are going to commit to it.

However, as I grew as a web developer and began to explore more advance topics about web development, I started to desire for more control over my own website. A notable disadvantage of GitHub Pages compared to web hosting services that support dynamic websites is the lack of `.htaccess` support. Learning about the things `.htaccess` can do has tempted me to consider migrating away form GitHub Pages.

Furthermore, in addition to this developer portfolio and blog website, I have also built various hobby websites, so it would be nice if I could consolidate the management of my websites into one platform.

Last but not least, I am invested in web development and building my own website  enough to be willing to spend money on them, as evident in my purchase and registration of a custom domain name helenchong.dev for this website. That said, I do need to consider carefully about how much money I am going to spend, which factors in why I eventually chose Hostinger to host my websites.

Eventually, on 25 July 2024, I registered an account on [Hostinger](https://www.hostinger.my/), and purchased their 48-month Premium Shared Hosting plan, then I migrated my websites starting from my hobby websites on the same day. Later, on 30 July 2024, I completed the migration of helenchong.dev from GitHub Pages to Hostinger, and renamed the [website's GitHub repository](https://github.com/helenclx/helenchong.dev) from `helenclx.github.io` to helenchong.dev.

## Why Hostinger

### Affordable Price with Regional Pricing

The biggest draw about Hostinger is its pricing — it is not only cheap, but also offering regional pricing. This is a huge deal for people who live in countries with weaker currencies than US Dollars and Euro, as the pricing scales to the level we are more comfortable spending, without worrying about currency conversion rates.

For reference, as of this writing, 1 USD equals approximately 4.6 Malaysian Ringgit (MYR), while the minimum wage in Malaysia is 1,500 MYR, which approximately equals to 325.7 USD, per month. Therefore, if a Malaysian like me is going to spend money, every USD counts.

Compare the pricing of the 48-month Premium Shared Hosting plan of [Hostinger.my](https://www.hostinger.my/) to [Hostinger.com](https://www.hostinger.com/): At the time of my purchase, the plan cost 7.99 per month in MYR (approximately 1.71 USD), while 2.99 per month in USD (approximately 13.97 MYR). This means I ended up saving almost 6 MYR per month by purchasing the plan on the Malaysian branch of Hostinger. This is just comparing Hostinger's own hosting plan with different currencies, let alone comparing Hostinger's hosting plan to its competitors.

As a bonus, being able to purchase Hostinger's hosting plans in Malaysian Ringgit means I can pay by directly transferring money from a Malaysian bank account.

Being cheap is not even the only reason I chose Hostinger; what is better than being cheap is to provide many, many features at the same time.

### Many, Many Features at a Cheap Price

The cheap price of the Premium Shared Hosting Plan of Hostinger is jam-packed with many features, including but not limited to:
- Ability to create up to 100 websites (which is significantly more than enough for average users)
- 100 GB SSD storage
- Unlimited bandwidth
- Unlimited MySQL databases
- Email accounts included for free
- Built-in Git support, which allows me to continue deploying my website from its Git repository
- And more!

On the subject of email accounts, it is worth pointing out that Hostinger's Premium Shared Hosting plan allows you to create an email account for each website you made, and you can have up to 100 addresses and forwarders for each email account.

Hostinger's Git support allows you to even deploy multiple repositories to the same website, which was what I ended up doing to deploy [my résumé](/resume) into my website's directory, despite it having a [separate Git repository](https://github.com/helenclx/resume) from my website.

## Excellent Customer Support

I am pleased to report that my experience with Hostinger's support team has been excellent.

After migrating this website to Hostinger, I was trying to deploy my résumé to this website's directory. At first, I had an issue with my résumé not being deployed to this website as I intended, so I sought for help by contacting Hostinger's support team via live chat. The support team answered to my message quickly. The specialist who handled my case were not only kind and polite, but also willing to walk me through the process of figuring out possible causes of my issue.

Turned out, I accidentally deployed my résumé to a different website of mine, so I double-checked and reconfigured my set-up to deploy both my website and résumé from their GitHub repositories to the correct directories, and my problem was finally solved.

## Domain Name Remaining at Porkbun

While Hostinger provides domain registration and transfer service, I chose to have the helenchong.dev domain name stay with [Porkbun](https://porkbun.com/), because I already spent money on the domain name, so Hostinger's hosting plan providing domain name registration for free for the first year does not benefit me.

In addition, Porkbun's renewal rate for domain names is cheaper than Hostinger. For example, Porkbun renews the `.com` domain extension at 10.37 USD per year, while Hostinger renews at 15.99 USD per year. Even the Malaysian Ringgit pricing of Hostinger's domain renewal rate for `.com`, 55.99 MYR per year, is still more expansive than Porkbun's approximately 47.76 MYR per year rate.

## What will Happen to My GitHub Pages Subdomain

Now that my website has migrated to Hostinger, what happens to `helenclx.github.io`, my GitHub Pages subdomain now?

At the moment, I am still deploying projects to GitHub Pages, so the `helenclx.github.io` subdomain is still being used by my projects on GitHub, but if you just visit `helenclx.github.io` on its own, you will now get a 404 error page, indicating there is no longer a GitHub Pages site at this address.

## Wrapping Up

I am glad to have made the decision to move hosts for this website. By migrating my developer portfolio and blog website to Hostinger, I felt like opening up new opportunities for my website to grow, and for myself to keep learning as a web developer.

As of this writing, I had created a `.htaccess` for my website to set a custom 404 page, configure the cache policy of this website's static assets, and remove `.html` file extension from website addresses. I am looking forward to exploring this new web hosting experience more.