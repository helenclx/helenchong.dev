---
title: Dipping My Toes in PHP for My Hobby Project
description: I started to learn to code in PHP for my hobby project.
date: 2024-07-08
categories: ["php", "bellabuffs"]
---

Hobbies are a great motivator to learn new things, and web development is no exception. I had dabbled in HTML and CSS since my teenage years, but it was not until December 2022 when I decided to take online web development courses, and then aspire to become a web developer.

Recently, I took a particular interest in fanlistings. For those who are unfamiliar with it, a fanlisting is an online listing of fans for a particular subject open for fans around the world to join. I find fanlistings a neat concept to gather and discover other people who share your interests. You can find fanlistings through [The Fanlistings Network](https://thefanlistings.org/) and [The Anime Fanlistings Network](https://thefanlistings.org/).

As an aspiring web developer, I became curious about how a fanlisting is built, and even wondering if I could do it myself. After some searching, I discovered the two most used fanlisting scripts are [Enthusiast](https://scripts.indisguise.org/enthusiast/) and [BellaBuffs](https://www.jemjabella.co.uk/scripts/bellabuffs/), both written in PHP. My focus has been on front end web development, so studying how fanlistings are built was my first foray in learning to code in PHP.

In order to learn to code web pages in PHP, I installed PHP in my computer, and registered an account on [InfinityFree](https://www.infinityfree.com/), one of the few hosting servers that provide PHP and MySQL support for free.

Initially, I tried out [Enthusiast](https://scripts.indisguise.org/enthusiast/), specifically [Erin's fork of Enthusiast](https://github.com/DudeThatsErin/enth), since InfinityFree uses version 8.2 of PHP Enthusiast also has extra features that BellaBuffs does not have, including allowing fanlisting members to set passwords and even managing the entire fanlisting collective.

Unfortunately, I encountered a critical issue with Enthusiast when I tried it: whenever I added a fanlisting to my joined fanlisting list in the admin panel, the home page of the fanlisting collective would go completely blank. I do not know the cause of the issue, and I was not familiar enough with PHP to be confident in attempting to investigate the entire fanlisting collective code just to identify the culprit, especially when it uses MySQL database to store data, adding another complexity in troubleshooting it.

Therefore, I later tried BellaBuffs, and deiced BellaBuffs to be my personal choice of building and managing a fanlisting.

There were a few setbacks I encountered when I was learning to build a fanlisting with BellaBuffs on InfinityFree — I learned that InfinityFree's free hosting plan [does not support PHP `mail()` function](https://forum.infinityfree.com/t/sending-email-from-your-website-php-mail/49242), which is used by BellaBuffs.

BellaBuffs includes the optional features to email new members after submitting the join form, email the fanlisting admin when a new member joins or email new members when their applications were approved. The original BellaBuffs script achieved this by using PHP's built-in `mail()` feature, which unfortunately the free hosting of InfinityFree does not support, so I had to figure out an alternative way send emails from a fanlisting powered by BellaBuffs.

Thankfully, InfinityFree suggested using PHPMailer, and even providing a [contact form powered by PHPMailer](https://github.com/InfinityFreeHosting/contactform) as a sample. As a result, I spent time in trying to incorporate PHPMailer into BellaBuffs based on the InfinityFree's PHPMailer contact form code, and voilà, I did it!

I am glad that despite my inexperience in PHP, I was able to apply the programming knowledge I learned from the coding courses, including CS50's Introduction to Computer Science, to solve an issue with a PHP script.

I decided to fork BellaBuffs and release my version of the fanlisting script with PHPMailer integration, in case there are others who want to use BellaBuffs to build fanlistings, but cannot or do not want to use the PHP `mail()` function.

You can download my BellaBuffs fork and learn about how to use it from [its GitHub repository](https://github.com/helenclx/BellaBuffs-PHPMailer).