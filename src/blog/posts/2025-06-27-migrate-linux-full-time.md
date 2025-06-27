---
title: I am Officially a Full-Time Linux User
desc: I have migrated to using Linux, not only on my virtual private servers, but also my personal computer desktop.
date: 2025-06-27T21:39:00+0800
topics: ['linux']
toc: true
---
It is official — I am a full-time Linux user now, since I have switched from Windows to Fedora Linux as my personal computer's operating system, with KDE Plasma as the desktop environment.

This was not my first attempt to use Linux on desktop, but for the first time since my first time getting my hands on Linux in 2020, I decided to make Linux fully replace Windows for my daily PC use.

## My History with Linux

My first attempt at using Linux desktop was in 2020, after I became more aware about the concepts of free and open-source software and data privacy. When I researched into Linux at the time, I was pleasantly surprised to find out that I could use both Windows and Linux on the same computer via dual booting, and that there were Linux distributions created to be friendly to beginners who switched from Windows or macOS. Therefore, I set up my PC, which is a gaming laptop that I am still using at this moment, to dual boot Windows and Linux, and chose Linux Mint as my very first Linux distro for the similarities its interface design was to Windows to make my first foray into Linux easier.

I enjoyed Linux Mint, and later I tried out Manjaro Linux, but I was hesitant to fully migrate to Linux, mainly due to me being a PC gamer, and at the time I was working as a graphic designer. There were already good progress made for gaming on Linux in 2020, and I was aware of the existence of [Wine](https://www.winehq.org/), which allows us to run Windows software on Linux, but I was still worried about not being able to run Adobe software, especially the latest Creative Cloud versions, and some of my favourite or most-played video games on Linux, by looking at the reports of running those pieces of software on WineHQ. Furthermore, after dual booting Windows and Linux for around a year, I gradually found dual booting tedious, so I uninstall Linux and went back to Windows.

When I tried to dual boot Windows and Linux in 2020, [Windows Subsystem for Linux](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux) (WSL) did not exist yet, so that was the only way to be able to use both Windows and Linux on the same machine. When WSL was released, I was excited because there's finally an alternate way to use both Windows and Linux to dual boot, so I enabled it and set it up. WSL had served my needs well, but the desire to use Linux desktop on a daily basis never went away, especially after starting to learn software development and computer science in the early 2020s, and realised the advantages Linux has over Windows to developers.

Eventually, my second chance of using Linux desktop came when I attended my local campus of [42 the computer science school](/topics/42-the-school/), starting with their [bite-sized bootcamp](2025-03-06-attended-42-discovery-piscine.md) in February 2025. The campus computers use Linux, specifically Ubuntu as the distro and GNOME as the desktop environment. Later during 42's official 26-day bootcamp, their curriculum started with shell, and that was when I got interested in shell scripting too.

Meanwhile, I was also learning how to use a virtual private server (VPS), with Debian being the Linux distro installed in my server. Later, I [succeed in setting up my VPS](2025-05-19-my-vps-arc-began.md) for self-hosting, including my own websites. Working on my VPS gave me a lot of practice in using command lines and navigating a Linux system. As I became more comfortable using Linux even just with command lines, and how that made me become a better developer, I started to consider switching to Linux desktop full-time.

## Preparing for Migrating to Linux Desktop

Preparing myself to migrate to Linux desktop full-time mostly involved researching about Linux gaming, ways to run programs that lack native Linux support, and Linux alternatives to such programs.

I briefly set up dual boot again to properly test a Linux distro. Initially I tried Debian with GNOME, since Debian is my distro of choice for servers. Unfortunately, the stable version of Debian did not support gaming particularly well in my experience, as even with Proton enabled on Steam, games like [{{ cite "Spirit City: Lofi Sessions" }}](https://store.steampowered.com/app/2113850/Spirit_City_Lofi_Sessions/) could not even launch, and instead popping up error messages.

Therefore, I decided to try out Fedora, a Linux distribution that I had been curious about for a while since it is also a well-known Linux distro, and it is [recommended by Privacy Guides](https://www.privacyguides.org/en/desktop/#fedora-linux). My attempt of running {{ cite "Spirit City" }} was much more successful on Fedora than on Debian.

Meanwhile, I was pleased to found out that there have also been guides for running Affinity Suite on Linux, such as [AffinityOnLinux](https://github.com/Twig6943/AffinityOnLinux), and there was a screen recording software that performs even better than OBS Studio on my Linux system — [GPU Screen Recorder](https://git.dec05eba.com/gpu-screen-recorder/about/). Learning that it is possible to run Affinity Suite on Linux despite its lack of native support for Linux, and discovering the best setup for me to play video games on Linux, was the final major step to my official transition to Linux desktop full-time. Resources like [ProtonDB](https://www.protondb.com/) certainly helped to encourage me to be a Linux gamer too.

## Setting Up My Linux Desktop

On 22 June 2025, I finally took the leap to install Fedora Linux with KDE Plasma as the desktop environment on my 7-year-old gaming laptop, by fully wiping Windows 11 from my system drive. I chose KDE Plasma for my desktop environment because I like how customisable it is, as I like to tinker with and customise the tools I use, including my own computer, to my liking.

At last, I officially became a full-time Linux user.

Even after planning how I wanted to set up my Linux desktop before switching to Linux, there were still some configurations I needed to do to make my Fedora KDE Plasma desktop meet my needs, such as using Fcitx instead of the default iBus for Chinese input options, since I discovered that iBus did not work well on Obsidian, and installing a Python package named [EnvyControl](https://github.com/bayasdev/envycontrol) for a much easier way to set the GPU mode of my gaming laptop that includes both Intel and NVIDIA graphic cards. However, I am glad to have made the decision to switch to Linux.

Since I am a PC gamer, switching to Linux means I am also a Linux gamer now. Becoming a Linux gamer makes me appreciate the fact that {[{ cite "Cassette Beasts" }}](https://www.cassettebeasts.com/), my favourite video game ever, officially supports Linux out of the box. With the help of Wine and Proton, I can play video games that do not officially support Linux as well.

## Inspiring Another Family Member to Switch to Linux

A pleasant surprise that came from me switching to Linux is inspiring my own father to do the same.

After telling my parents about my transition to Linux during lunch one day, my father got inspired to switch from Windows and Linux as well. My father is tech-savvy, though he is not familiar with Linux, especially for desktop, so he asked me questions about Linux. Since he uses his computer mainly for browsing the web, I assured him that switching to Linux would not make that much difference for him, especially since there are Linux distros that are aimed at beginners who migrated from Windows or macOS. I told my father that I have virtual private servers that run on Linux too.

My father also did his own research, and discovered Linux Mint. He was pleased that switching to Linux is not as intimidating as he expected, which is certainly helped by how Linux Mint being designed for Linux beginners who migrated from Windows. After testing Linux Mint on an ancient laptop that my brother used to use, my father installed Linux Mint on his own laptop by replacing Windows.

In other words, within a week, my family added two new full-time Linux users. It is nice that Linux became another thing my father and I can talk to each other about.

## Wrapping Up

As I am writing this, it has been almost a week since I switched to using Linux full-time, and I am satisfied with my decision to do so, as well as my setup for my Fedora Linux KDE Plasma desktop environment.

I spent around two weeks in this June to prepare for and set up my migration to Linux desktop, but the effort is worth it.
