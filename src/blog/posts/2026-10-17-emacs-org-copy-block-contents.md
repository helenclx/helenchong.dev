---
title: Quickly Copy Code and Example Block Contents in Emacs Org Mode
desc: Write an Emacs Lisp interactive function to quickly copy the contents of a code or example block in Org Mode.
date: 2026-10-17T22:53:59+0800
topics: [emacs, org mode]
hasCodeBlock: true
toc: true
---

As I [switched to Emacs](2026-09-05-moving-away-neovim.md) (with [Doom Emacs](https://doomemacs.org/)) as my main code editor, I had also begun to explore [Org Mode](https://orgmode.org/), and later migrate most of my notes from [Obsidian](https://obsidian.md/) to Org mode, by using [Pandoc](https://pandoc.org/) and the [Obs2Org](https://codeberg.org/Release-Candidate/Obs2Org) Python package to convert my notes from Markdown format to Org format. This means Org Mode has become my primary note-taking tool.

As a coder and Linux user who likes to customise the tools they use, I have taken a lot of notes that contain code blocks, as well as text blocks to use in my configuration files. When Obsidian renders a code block in a Markdown note file, it automatically provides a button to allow you to copy the contents of a code block in one click. Org Mode includes [code blocks](https://orgmode.org/manual/Working-with-Source-Code.html) among its features, but it lacks a built-in feature to quickly copy the contents of a code block, so by default, you have to highlight the text, then copy the text.

I find it handy to be able to quickly copy the contents of a code block in a single action (which is also why I [added a copy button to code blocks on my website](2025-02-19-copy-code-button.md)), so I began to look into how to configure Emacs by writing an Emacs command to allow me to do so with Org Mode code blocks.

## Emacs Command: Copy Contents of Source Code Blocks

My research led me to discover the Emacs Stack Exchange question ["How to copy the content of the source block at point to the kill ring?"](https://emacs.stackexchange.com/questions/62924/how-to-copy-the-content-of-the-source-block-at-point-to-the-kill-ring/) Based on the answers to the question, I managed to write a custom Emacs command in Emacs Lisp to quickly copy the contents of a source code block:

```emacs-lisp
(defun +my/org-copy-src-code-block ()
  "Copy the current Org source code block to the kill ring."
  (interactive)
  (if (org-in-src-block-p)
      (kill-new (string-trim-right (org-element-property :value (org-element-at-point)))
		(message "Source code block copied to kill ring!"))
    (message "Error: Cursor is not inside an Org source code block.")))
```

What this Emacs Lisp function does: Check if the cursor is inside a source code block in Org Mode — that is, the contents between the `#+BEGIN_SRC` and the `#+BEGIN_SRC` markup, and if so, the contents of the source code gets copied to the kill ring (Emacs clipboard), with the trailing newline removed, and an Emacs message signalling success of the action. If the cursor is not inside an Org Mode code block, nothing will get copied, and Emacs will print an error message.

The `interactive` form turns the Emacs Lisp function into an Emacs command that you can call in Emacs itself by pressing `M-x`.

Note: Adding a `+` prefix to an Emacs Lisp function name is a Doom Emacs convention for user-defined functions, thus me adding a `+my/` prefix to my custom Emacs Lisp functions. You are free to change the name of the function above.

## Emacs Command: Copy Contents of Both Code and Example Blocks

In Obsidian, to enable syntax highlighting for code blocks, I typically mark a code block with a specific programming or configuration language. However, since I have [Flycheck](https://www.flycheck.org/en/latest/) enabled in my Doom Emacs setup, after converting my notes from Markdown to Org, I discovered that if a code block is marked with a language not [supported in Org Mode](https://orgmode.org/worg/org-contrib/babel/languages/), Flycheck will throw an "Unknown source block language" error. Changing the block type from source block to [example block](https://orgmode.org/manual/Literal-Examples.html) prevents the error, but it also means the above custom Emacs command to copy source block contents will no longer work since it does not support example blocks.

Therefore, I decided to expand my custom function so I can copy the contents of either source code blocks or example blocks with a single Emacs command. This led me further down the Emacs Lisp rabbit hole, and after another round of research, experimentation and trial and error, I finally managed to rewrite my custom function:

```emacs-lisp
(defun +my/org-copy-block-contents ()
  "Copy the current Org block contents to the kill ring."
  (interactive)
  (let ((element (org-element-at-point)))
    (if (member (org-element-type element) '(src-block example-block))
	(let ((value (org-element-property :value element)))
	  (kill-new (string-trim-right value))
	  (message "Block contents copied to the kill ring!"))
      (message "Error: Cursor is not inside an Org src or example block."))))
```

What this Emacs Lisp function does: Check if the [Org element](https://orgmode.org/worg/dev/org-element-api.html) type under the cursor is a code block or an example block, and if so, the contents of the code or example block gets copied to the kill ring, with the trailing newline removed, and an Emacs message signalling the success of the action. If the cursor is not inside an Org Mode code or example block, nothing will get copied, and Emacs will print an error message.

## Custom Key Binding for Emacs Command to Copy Org Block Contents

Optionally, you can configure a custom key binding for the function to copy the contents of an Org Mode block. Since I use Doom Emacs, I configure my custom key binding using Doom Emacs' patterns:

```emacs-lisp
(map! :after org
      :map org-mode-map
      :leader
      "m y" #'+my/org-copy-block-contents)
```

What this configuration block does is to set the key sequence of calling the Emacs command to copy Org block contents to Doom Emacs leader key (`SPC` by default) + m + y, and ensures that the key binding activates only after the Org Mode package is loaded, and applies only to Org Mode buffers. I choose the `y` key because it stands for "yanking", which is Vim's term for copying a text, and I use Vim key bindings in Emacs as well.
