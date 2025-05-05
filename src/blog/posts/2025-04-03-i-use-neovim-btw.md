---
title: I Use (Neo)Vim BTW
desc: I have officially joined the Vim ecosystem and switched to Neovim as my main code editor.
date: 2025-04-03T20:22:21+0800
categories: ["vim", "neovim", "42 the school", "vs code"]
toc: true
---

## Introduction

It is official: I have switched from [Visual Studio Code](https://code.visualstudio.com/) to [Neovim](https://neovim.io/) as my main code editor.

Since I started to teach myself web development, Visual Studio Code had been my integrated development environment (IDE) of choice for two years. I started out with VS Code because an IDE with a graphic user interface (GUI) were easier for a newbie web developer to get used to, especially given the fact that I came from a graphic design background, GUI ticked my graphic brain. It helped that VS Code's vast theme and extension ecosystems allowed me to customise my VS Code workspace to suit my needs.

For two years, I was content with VS Code and my workspace in it. Occasionally, I discovered other code editors and IDEs, and I even briefly considered using [VSCodium](https://vscodium.com/), a community-driven binary releases of VS Code without Microsoft's branding, but I ended up still preferring VS Code for being easier to install extensions. I knew the existence of [Vim](https://www.vim.org/), but with the first thing I learned about them was jokes and memes about how to exit Vim, it was not exactly the best first impression. 😅 The idea of using a terminal-based code editor had not crossed my mind either.

That changed when I attended [42 the computer science school's 5-day bite-sized coding bootcamp](2025-03-06-attended-42-discovery-piscine.md), called Discovery Piscine, in late February this year.

## The Seed of Using Vim

The computers of my local campus of 42 use Linux, specifically the Ubuntu distribution. Discovery Piscine's curriculum focused on Python, but the assignments also included using shell commands, specifically the Bash shell, thus encouraged students to use the terminal to do the assignments.

When I was attending the Discovery Piscine, the only terminal-based text editor I had used was GNU nano, which I had used to edit some configuration files, so GNU nano was what I used for the Discovery Piscine assignments. This also marked my first time coding in GNU nano.

However, as I made progressed in the assignments, I quickly realised GNU nano's simplicity would make it inefficient to do more advanced coding work on it. Meanwhile, evaluating my peers' assignments allowed me to discover that some of my peers were using Vim. I did not have the time to learn to use Vim when I attended Discovery Piscine, but it planted the seed of the idea of using Vim in my mind.

The computers in my 42 campus allow us to install Visual Studio Code or VSCodium — in fact, I used VS Code briefly during the Discovery Piscine to check my assignment files The curriculum also does not impose restriction on which text or code editor we should use for our coding assignments. That said, I figured that with their shell command assignments, and the fact that I already interact with the terminal in my own computer a lot due to building my websites with a static site generator, it would be a good idea to incorporate the terminal in my coding workflow more, by familiarising myself with a powerful terminal-based code editor like Vim, especially as I was planning on attending 42's full Piscine trial bootcamp in April.

In late March, as the April Piscine was approaching, and I wanted to get prepared for the Piscine as much as possible, I decided to finally learn to use Vim for real.

## Side Note: GNU Emacs

As a side note, it is worth pointing out that the computers in my 42 campus also had [GNU Emacs](https://www.gnu.org/s/emacs/) pre-installed. I was already aware of the jokes and memes about the Vim vs. Emacs [editor war](https://en.wikipedia.org/wiki/Editor_war), and I did consider trying out GNU Emacs, but I eventually chose to learn to use Vim first, because I appreciate Vim for being lightweight and ubiquitous as it is pre-isntalled in most Linux distributions, which means even if I use a different Linux machine, I can still count on being able to use a powerful editor for coding. In fact, Vim came pre-installed in my Windows Subsystem for Linux (WSL) with Ubuntu as well.

That said, I am still not completely ruling out the possibility of me using GNU Emacs one day, just not anytime soon.

## Started to Learn to Use Vim

I started learning the keyboard shortcuts and commands in Vim by typing the `vimtutor` tutorial in the terminal of my Windows Subsystem for Linux (WSL) with Ubuntu. I had realised that learning by doing is the best way for me to learn programming, so I appreciate tutorials like vimtutor that allows me to learn and practice by doing.

Even when just trying out Vim's keyboard shortcuts and commands in the tutorial, I already had a much with Vim. Finally trying out Vim myself has certainly made me appreciate it a lot, and see why would developers choose Vim as their code editor of choice. Doing all the coding in keyboard reduces the context switch that would come with using a mouse, combined with Vim's minimal interface, it allows for a coding environment with fewer distractions.

Even after completing vimtutor, sometimes I still revisit the tutorial to refresh my memory of certain Vim shortcuts and commands.

After completing vimtutor, I downloaded and installed gVim in my Windows system. One of the first things I did after installing gVim was adding [Reuben L. Lillie](https://reubenlillie.com/)'s [a11y dark theme](https://github.com/ericwbailey/a11y-syntax-highlighting/blob/home/dist/vim/a11y-dark.vim), which was based on [Eric Bailey](https://ericwbailey.website/)'s [a11y syntax highlighting](https://github.com/ericwbailey/a11y-syntax-highlighting), as my default theme in Vim.

## Hello, Neovim and LazyVim

As I explored the Vim ecosystem further, I discovered Neovim, a fork of Vim. Vim itself has a vast plugin ecosystem, but one particular Neovim setup that attracted my attention was [LazyVim](https://www.lazyvim.org/), as it not only turns Neovim into a full-fledged IDE, but also makes it easy to customise and extend your Neovim configuration.

The plugin ecosystem of the Vim family made me consider making Vim and Neovim replace VS Code as my main code editor. LazyVim provided what I was looking for as a great replacement for VS Code: it includes plugins that replicates the various features I use VS Code for, mainly file tree, searching files by file name or file content and code snippets. The more I explored LazyVim's features, the happier I am with my decision to switch from VS Code to Neovim as my code editor of choice, and LazyVim certainly helped with the transition.

With LazyVim turning Neovim into an IDE that serves my needs, I decided to keep Vim as my backup text editor in the terminal, so I keep my Vim setup simple, with no plugins other than themes and syntax highlighting.

## From VS Code to the Vim Ecosystem

As part of my efforts to transition to the Vim ecosystem as my main code editor, I'm building the habit of navigating the directories containing my code files with the terminal, and open the code files with Vim or Neovim in the terminal.

Finally, as I settled in Vim and Neovim, I uninstalled most extensions in Visual Studio Code, officially marking my switch from VS Code to Neovim as my main code editor.

Hello, Vim and Neovim!
