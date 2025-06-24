---
title: Developed My First WordPress Plugin
desc: I successfully developed a WordPress plugin during my first web developer job.
date: 2025-01-03T16:30:08+0800
topics: ["wordpress", "php"]
---

3 January 2025 was the final day of [my first web developer job](2024-08-16-got-my-first-developer-job.md).

The best thing that came out from my first web developer job was my accomplishment of learning and successfully developing a WordPress plugin for the first time. Specifically, my plugin is an add-on to [Long Watch Studio](https://plugins.longwatchstudio.com/)'s [WooRewards](https://plugins.longwatchstudio.com/product/woorewards/), which is a plugin for WooCommerce.

What my plugin does is to add one-time redeemable vouchers as a reward option in a WooCommerce website's points and rewards system powered by WooRewards for customers to unlock, with the vouchers being issued by using the [QR Planet API](https://qrplanet.com/qr-code-api). When a customer unlocks a one-time redeemable voucher reward, the plugin will automatically send the customer an email containing a link to redeem the voucher with instructions. Like with other types of rewards in WooRewards, the WordPress or WooCommerce website's administrator can enter how many points are required to unlock the voucher in the settings. The website administrator also needs a QR Planet account and API secret key to take full advantage of the API.

As soon as my first web developer job started, I was tasked by my employer to figure out how to incorporate [QR Planet's one-time redeemable coupon feature](https://qrplanet.com/help/article/one-time-redeemable-qr-code-coupons) into my former company's WooCommerce website that used WooRewards to power their customer points and rewards system, since QR Planet does not provide any official WordPress plugin (at least at the moment). After researching both WooRewards and QR Planet, I suggested to my employer that the best solution was to develop our own WordPress plugin as an add-on to WooRewards.

Before getting my first developer job, I had some basic PHP knowledge and skills, notably by [creating my own fork of a PHP website script as a hobby project](2024-07-08-dipping-my-toes-in-php-for-my-hobby-project.md), so I developed my first WordPress plugin by applying my knowledge and skills of how to study the source code of an existing project to learn how to add extra features to it.

The PHP features I learned the most from developing my one-time redeemable voucher plugin were [classes and objects](https://www.php.net/manual/en/language.oop5.php), since WooRewards' functions are mostly powered by classes and objects, so my first objective in developing the plugin was to write my own classes and objects for calling the QR Planet API, generating a voucher and a link to redeem the voucher, setting up an email template for my plugin, and setting up my plugin to work with WooRewards. I learned how to write the PHP code to execute the things I want my plugin to do, by doing a lot of research on the web about classes and objects. I wrote and test my plugin one step at a time to gradually ensure my plugin does the things I want it to do.

After I completed and tested my plugin, I proudly showed it to my employer and manager. I still remember the "wow" my employer exclaimed when I told him I succeed in completing the task he assigned to me by developing a WordPress plugin.

My success in developing my first WordPress plugin was a huge milestone in my web developer journey, by showcasing not only my technical and programming knowledge and skills, but also my learning and problem-solving skills.

You can view the source code of my one-time redeemable voucher add-on WooRewards by checking out [its GitHub repository](https://github.com/helenclx/woorewards-addon-one-time-voucher).
