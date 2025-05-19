---
title: My Virtual Private Server Arc Has Officially Begun
desc: I have officially joined the "self-hosting on a VPS" club.
date: 2025-05-19T23:46:33+0800
topics: ["vps", "self-hosting"]
toc: true
---

It is official — not only I have a virtual private server (VPS), but also I have started self-hosting things on a VPS, including all my websites.

I had heard of the concept of self-hosting even before making my first website from scratch in 2022. When I became more aware of digital privacy, I had learned that people can host alternatives to mainstream tech services, but while I learned to switch to using more privacy-friendly software as much as possible, I did not have enough tech proficiently to self-host yet.

As I started to code my own website and learn web development, I have found myself enjoying being able to control my stuff and the tools I use more and more, so I finally started to take the step to learn self-hosting, and here I am, with my slice of a computer on the internet up and running.

## Before VPS: From Static Hosting to Shared Hosting

My journey of web hosting began with static web hosting services, with the ones I have used included [Neocities](https://neocities.org/), where I hosted the very first website that I coded from scratch with HTML and CSS, [GitHub Pages](https://pages.github.com/), where I hosted this developer portfolio website for the first time, and [Netlify](https://www.netlify.com/).

However, as I worked on my websites and learned more about web development< I started to feel the limitations of static web hosting. In particular, [learning PHP for some of my hobby projects](2024-07-08-dipping-my-toes-in-php-for-my-hobby-project.md) was the major push for me to look for alternative hosting options beyond static web hosting. My next step was shared hosting, and after comparing various shared hosting services, I settled for [Hostinger](https://www.hostinger.com/my), and migrated all my websites, [including this developer portfolio and blog](2024-07-31-migrating-to-hostinger.md), to it in July 2024.

For months, Hostinger has served my needs well: it checked all the boxes of my needs for hosting my websites, including creating multiple websites with custom domain support, PHP and MySQL support, and more, with an affordable price available in my country's currency. Shared hosting is a good middle ground between static web hosting and VPS hosting when I wanted more features and control over my websites than static web hosting, while not confident enough to use a VPS yet.

That said, I still hoped to use a VPS to host my websites and some web applications I intend to use regularly. I began by reading [RAISO](https://rai.so/)'s guide ["VPS101: Renting A Slice of A Computer on the Internet"](https://rai.so/vps101-renting-a-slice-of-a-computer-on-the-internet/).

## Renting My First VPS

My opportunity to dip my toes in a VPS finally came in November 2024, when I was introduced to [Chunkserve](https://chunkserve.com/) and their [LowEndTalk offer](https://lowendtalk.com/discussion/199333/best-deals-9-99-yr-vps-20-99-yr-4vcpu-8gb-ram-50gb-dedicated-servers-pre-black-friday/). I ordered the 20.99 Euro yearly package, which means the price is similar to the Premium Shared Hosting plan I ordered from Hostinger.

20.99 Euro per year is an amazing value for a VPS with 4 vCore E5-2695v4, 8 GB RAM, 50 GB SSD Enterprise Disk, and 20TB of traffic. While my Hostinger shared hosting plan offered more storage (100 GB SSD), the upside of a VPS giving you root access to the server more than makes up for it.

With my first VPS rented, I could finally start tinkering a server myself.

## Unlocking the Power of SSH Access

Confession: Prior to renting my first VPS, I never touched a Secure Shell (SSH) before. Fortunately, I already had a decent amount of experience with Linux, including having setting up Windows Subsystem for Linux (WSL) in my local machine, so I was already comfortable using command lines and the terminal.

I referred to [basement blog](https://blog.basementcommunity.com/)'s post ["everything i personally do when hosting a website on a new server"](https://blog.basementcommunity.com/everything-i-do-when-hosting-a-website/) to learn how to set up my VPS, including generating an SSH key to log in to the server.

Getting a taste of SSH allowed me with my first VPS made me fully realise that Hostinger's Premium shared hosting plan also supports SSH access. Before learning what SSH was, I transfer files between my local machine and some of my websites with FTP, with [WinSCP](https://www.winscp.net/) as my FTP client. Enabling SSH access to my websites hosted on Hostinger, on the other hand, allowed me to navigate my websites' files in the terminal, and since Hostinger's server already had [rsync](https://en.wikipedia.org/wiki/Rsync) installed, I can use rsync (via WSL) to transfer files from my local machine to the remote server via a terminal. With the power of SSH access unlocked, I switched from FTP to SSH to work with the servers I am using, and uninstalled WinSCP.

At the same time, I had also [switched from Visual Studio Code to Neovim](2025-04-03-i-use-neovim-btw.md) as my main code editor, as part of my effort to make my development workflow more focused on the terminal. Learning to access a VPS via SSH, and eventually self-host, certainly added more reasons for me to develop a terminal-based workflow.

## Looking into Self-Hosting Applications

As I was learning the ropes of VPS, I checked out the documentations of some applications I was interested in hosting myself one day, such as [FreshRSS](https://freshrss.org/) and [Gitea](https://gitea.com/).

Meanwhile, I came across [Yunohost](https://yunohost.org/) and [Coolify](https://coolify.io/), which are meant to make installing and managing applications on a server more simple. I briefly tried out both, and I appreciate their existence, though eventually I decided that I wanted to get my hands dirty to set up individual with the officially supported methods myself.

Learning self-hosting also made me learn to use [Docker](https://www.docker.com/). While I do not intend to install and set up everything in my VPS via Docker, it is a commonly supported method for self-hosting applications, so it would not hurt to learn to use it.

## Plans for Migrating My Websites to VPS

My process of planning to migrate my websites to my VPS involved choosing which web server to use. Hostinger uses [LiteSpeed](https://www.litespeedtech.com/products/litespeed-web-server), which is a drop-in replacement for [Apache](https://httpd.apache.org/), so it supports the `.htaccess` file, and [Nginx](https://nginx.org/) is another popular option, though recently I also discovered [Caddy](https://caddyserver.com/) and heard good things about it.

After trying out Caddy in my VPS, I was impressed, as Caddy not only all sites over [HTTPS](https://doesmysiteneedhttps.com/) by default, but also has a configuration syntax that is easy to read and write.

## Starting to Use My VPS for Real

After tinkering with my VPS for months, I finally had a good idea for how I want to use my VPS for real: Debian as the Linux distribution, with Caddy as the web server and reverse proxy. When I ordered my VPS, I chose Ubuntu as the operating system, but later switched to Debian on both my VPS and WSL because I wanted a more lightweight distro to save some disk storage.

After [completing 42 the computer science school's 26-day bootcamp](2025-05-04-42-piscine-completed.md), where I also learned more shell commands, while waiting for news about if I passed the bootcamp and was qualified for 42's core curriculum ([which did happen](2025-05-16-i-have-passed-42-piscine.md)), I worked on my VPS so I can start using it for my stuff for real.

I began with installing FreshRSS, specifically with [Docker](https://github.com/FreshRSS/FreshRSS/tree/edge/Docker), and succeed in setting up in a few minutes. Then, I [installed Gitea from binary](https://docs.gitea.com/installation/install-from-binary), [run it as a Linux service](https://docs.gitea.com/installation/linux-service), [install the Gitea Action runner with Docker](https://docs.gitea.com/usage/actions/act-runner#install-with-the-docker-image) and run the act runner's Docker container with the `--restart unless stopped` argument to keep the runner going in the background unless I stop its Docker container. I created subdomains to use with my own FreshRSS and Gitea instances, which are served through Caddy as a reverse proxy.

After migrating Git repositories of my websites to Gitea (with some of them mirrored to GitHub), it was time to migrate my websites from Hostinger to my first VPS. Creating file directories for each of my websites, configuring Caddy to serve my websites' files, converting individual website's configuration from Apache `.htaccess` to Caddy's `Caddyfile`, changing my domains' DNS, and voilà, the migration of my websites was officially completed on 14 May 2025!

On May 16, just hours before my results of the 42 bootcamp was announced, I also successfully set up my own instance of [The Lounge](https://thelounge.chat/), the web-based IRC client. Previously I used [IRCCloud](https://www.irccloud.com/), but I was interested in The Lounge and hosting my own instance of it after trying out its demo.

## Making Use of Shell Scripting

Another benefit of my journey of learning to self-host on a VPS was making good use of shell scripting, especially to use rsync and the [secure copy protocol (SCP)](https://en.wikipedia.org/wiki/Secure_copy_protocol) to transfer files between my local machine and my VPS. Attending 42's bootcamp made me learn and enjoy shell scripting more, and by creating my own shell scripts allows me to make the machines I am administrating work for me in ways I want.

## Wrapping Up

By self-hosting some applications and migrating my websites to a VPS, I can proclaim that my VPS arc has officially begun. Learning to work on a VPS and self-host has been an incredible learning experience that I am grateful to experience, and cannot recommend enough.
