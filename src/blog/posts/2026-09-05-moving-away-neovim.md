---
title: Moving Away from Neovim
desc: After daily driving Neovim as my main code editor for more than a year, I have switched to Emacs, after learning about Neovim leadership's fascist sympathies.
date: 2026-09-05T20:01:18+0800
topics: [neovim, emacs, helix editor]
toc: true
---

In April 2025, I wrote a blog post about [switching from Visual Studio Code to Neovim](2025-04-03-i-use-neovim-btw.md) as my main editor. The post has a [section](2025-04-03-i-use-neovim-btw.md/#side-note-gnu-emacs) about [GNU Emacs](https://www.gnu.org/software/emacs/), with me mentioning not completely ruling out the possibility of me using Emacs one day.

A year later, the day has come: I am officially an Emacs user.

## Why I am Moving Away from Neovim

Unfortunately, the circumstances that compelled me to move away from Neovim were an ugly one.

For more than a year, Neovim with the [LazyVim](https://www.lazyvim.org/) setup had successfully replaced Visual Studio Code for me, and thus I was a happy user of Neovim throughout the past year. I used Neovim every day, and it has been indispensable in my web and software development workflow that revolves around the terminal.

Then, on 28 August 2026, I woke up to upsetting news that Neovim is run by fascist sympathisers. Someone [opened an issue](https://circumstances.run/@mawhrin/117167738907856218) on the GitHub repository of Neovim's website to raise concern about Neovim's website including an endorsement quote from David Heinemeier Hansson, also known as DHH, due to DHH being a [white supremacist](https://jakelazaroff.com/words/dhh-is-way-worse-than-i-thought/), under the "Impressions" section on the Neovim website's sidebar (see a [Wayback Machine snapshot](https://web.archive.org/web/20260828083743/http://neovim.io/) for when the Neovim website included that DHH quote), The core developer Justin M. Keyes' responded by throwing fits. Later, someone else created a [pull request](https://github.com/neovim/neovim.github.io/pull/504) to remove the DHH quote from Neovim's website. While Keyes merged the pull request, he then commented on the GitHub issue again by [insulting](https://circumstances.run/@mawhrin/117174402729539005) the people who voiced concerns and objections in the first place.

You can check out the [entire thread of the GitHub issue in question](https://github.com/neovim/neovim.github.io/issues/501) for yourself.

The revelation that a piece of software I use on a daily basis is run by a fascist sympathiser is devastating. As core developer, Keyes' reaction throughout this whole debacle was a damning indictment of his character. He could have reacted to concerns about platforming a known white supremacist like DHH by immediately removing the DHH quote and acknowledged his mistake, but instead he accused people who raised those concerns a "drive-by mob" who mostly are not even Neovim users. I cannot in good conscience endorse a software project run by fascists and fascist sympathisers, so I decided to look for alternative code editors to switch from Neovim. Keyes might not have _explicitly_ said he agreed with DHH or not during this entire fiasco, but neutrality in the face of fascist rhetoric is a position that helps fascists because it is still allowing fascists to have platforms.

There is much more to be said about the worrying trend of fascists and fascist sympathisers in free and open-source software (FOSS). I highly recommend reading Abhiram Kuchibhotla's blog post ["The Chudification of Open Source"](https://foss.life/notes/2026/the-chudification-of-open-source/) on the subject, with the Neovim debacle cited as the one of such incidents, and possible ways to solve it.

## Looking for Alternatives to Neovim (and LazyVim)

I started to search for other editors to replace Neovim with. I had come to prefer doing web and software development work in the terminal, so I wanted my Neovim replacement to be an editor that can be run in the terminal. LazyVim succeed in turning Neovim into an integrated development environment (IDE), in large part thanks to Neovim's vast plugin ecosystem. Therefore, my ideal replacement for Neovim and LazyVim included the ability to customise and configure to become an IDE.

I learned to use Vim and familiarised myself with Vim key bindings before starting to use Neovim. While Vim itself also has a large plugin ecosystem, I prefer to keep Vim as simple as possible because I use Vim for light editing.

Having an interest in exploring Emacs for a long time, and knowing Emacs' reputation of being so customisable to the degree of often being jokingly described as an operating system itself, when I started considering switching from Neovim after finding out Neovim's debacle surrounding DHH's quote, my first thought was that this might be an opportunity for me to finally learn to use Emacs. Hence, my Emacs journey began.

## Hello, Doom Emacs

As I learned to use Emacs and researching for Emacs' package ecosystem, I got reminded of the existence of [Doom Emacs](https://github.com/doomemacs), a configuration framework for Emacs that has been recommended for having good default configuration and helping Vim users transition to Emacs due to enabling Vim key bindings by default. After installing and exploring Doom Emacs as someone who is already familiar with Vim, I can attest that the recommendations are justified.

Doom Emacs is basically the Emacs equivalent to LazyVim, and not just because it enables Vim key bindings by default. Like LazyVim, Doom Emacs comes with a set of add-ons, or packages in the terminology of the Emacs ecosystem, pre-installed and configured with the goal of providing reasonable defaults, while still allowing users to extend the configuration through enabling more set of add-ons (Lazy Extras in LazyVim and modules in Doom Emacs) and adding their own configuration.

To reproduce my Neovim and LazyVim setup for my workflow as much as possible, I enabled more modules in Doom Emacs, and configured [Eglot](https://joaotavora.github.io/eglot/), Emacs' built-in client for the Language Server Protocol (LSP), to integrate the code linters and language servers I use in Emacs. The more I explored Emacs and Doom Emacs, the more I understand the appeal of Emacs. After spending days in figuring out how to customise Emacs and Doom Emacs to my liking, I uninstalled Neovim and made my switch to Emacs as my go-to code editor official.

## Keeping My Code Editor Options Open

Even though I have settled in Emacs with Doom Emacs as my main code editor for the time being, including for working on my websites, I am still keeping my code editor options open.

As I started to learn how to use Emacs, I also set up the [Helix](https://helix-editor.com/) editor, another terminal-based modal editor like Vim, but with some different key bindings. Helix has built-in support for the Language Server Protocol, so it has the capability of being used as an IDE. Helix had been on my radar for a while even when I was still using Neovim, but Helix's lack of a plugin system as of this writing prevents me from fully switching to Helix as my main code editor, as there were plugins pre-installed in LazyVim that I relied on for my development workflow that does not exist as a feature in Helix. That said, when I began to consider alternatives to Neovim, I figured it would not hurt to have Helix as a backup option.

As a response to the Neovim debacle surrounding its platforming of a known white supremacist, at least one Neovim fork with anti-bigotry in mind has since existed: [Viq](https://codeberg.org/vim-queer/viq). Viq does not have a stable release yet, but I am keeping an eye on it because I want to support software made by people who care and openly opposes fascism and bigotry.
