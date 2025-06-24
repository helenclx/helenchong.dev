---
title: Adding a Button to Copy Code Snippets
desc: How I added a button to copy code snippets to my website with JavaScript.
date: 2025-02-19T11:05:03+0800
topics: ["javascript", "accessibility"]
hasCodeBlock: true
---

Recently, I discovered [Salma Alam-Naylor](https://whitep4nth3r.com/)'s article [“How to build a copy code snippet button and why it matters”](https://whitep4nth3r.com/blog/how-to-build-a-copy-code-snippet-button/) through [Frontend Dogma](https://frontenddogma.com/).

This being a developer website and blog, adding a button to copy code snippets was something I had considered before, as I had thought it would be convenient for readers to copy a code snippet with one click, but I did not consider how such a button could improve a website's accessibility too, until I read Salma's post. As she wrote:

> It is impossible to highlight and copy code blocks when you are unable to use your hands.
>
> […] it is absolutely imperative that you include a way for people with limited use of their hands to copy that code in a single action

Therefore, I began to research how to add a button to copy code snippets to my website. Like Salma, I also use Eleventy to build my website, and use [Eleventy's official syntax highlighting plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/), but I was unable to figure out how to make use of Salma's code to add such button to my website. Therefore, I visited [The 11ty Bundle](https://11tybundle.dev/), and searched if there were other guides for adding a button to copy code snippets to an Eleventy website. Eventually, I found [ttntm](https://ttntm.me/)'s article ["Adding a Copy Button to Code Blocks"](https://ttntm.me/blog/adding-a-copy-button-to-code-blocks/).

When I tried ttntm's code by adding it to a JavaScript file to be linked to my website, I was pleased to found that it worked. Since it worked on my website, I decided to modify ttntm's code to suit my preferences.

Firstly, instead of just an icon with a HTML `title` attribute as a tooltip, I added text to the button, namely "Copy Code" and then "Copied!" when the button is clicked, so both sighted readers and screen reader users can better understand the purpose of the button.

Secondly, I chose to place the button after my code blocks, rather than before them. This approach was inspired by [David Bushell](https://dbushell.com/)'s article ["Copy Code Button"](https://dbushell.com/2025/02/14/copy-code-button/). I would like readers to look at a code snippet first before deciding if they want to copy that snippet. To achieve this, I change the `insertAdjacentHTML()` method's position parameter from `"beforebegin"` to `"afterend"`.

I have configured Eleventy's official syntax highlighting plugin to make my code blocks focusable, so readers who use keyboard to navigate my website can easily skip through the code snippets and go to my "Copy Code" button by pressing the Tab button.

Thirdly, I decided to make the button to copy code appear on mobile as well. While coding is not typically done on mobile devices, it still would not hurt to give mobile device users a convenient way to copy code snippet, so they can save the snippet somewhere else for future references, such as saving in a note app to reference it later when they return to a desktop computer. As instructed by ttntm, I removed the `if` statement (`if (notAPhone.matches) {...}`) to achieve that.

Here is my final JavaScript code for adding a button to copy code snippets:

```js
function createCopyBtn(blockIndex) {
    return `<div class="cc-wrapper d-none d-sm-block">
        <button class="cc-btn btn-muted shadow" data-target="${blockIndex}">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon"><path stroke="none"d="M0 0h24v24H0z"fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/></svg>
            Copy Code
        </button>
    </div>`;
}

async function copyCode(block) {
    const code = document.querySelector(`[data-block-id="${block}"]`);
    const doCopy = async() => await navigator.clipboard.writeText(code?.innerText ?? '');

    if (!navigator.userAgent.includes('Firefox')) {
        const result = await navigator.permissions.query({ name: 'clipboard-write' });

        if (result.state === 'granted' || result.state === 'prompt') {
            doCopy();
        }
    } else {
        doCopy();
    }
}

async function handleCopyBtnClick(event) {
    const btn = event?.target;
    const btnTarget = btn?.getAttribute('data-target');

    if (btn && btnTarget) {
        const originalText = btn.innerHTML;

        await copyCode(btnTarget);

        btn.innerHTML = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 14l2 2l4 -4" /></svg> Copied!';

        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 1500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const allCodeBlocks = Array.from(document.querySelectorAll('pre[class^="language-"]'));

    allCodeBlocks.forEach((b, i) => {
        const code = b.childNodes[0];
        const codeBlockIndex = `cb-${i}`;

        b.insertAdjacentHTML('afterend', createCopyBtn(codeBlockIndex));
        code.setAttribute('data-block-id', codeBlockIndex);
    })

    const allCopyBtns = Array.from(document.querySelectorAll('.cc-btn'));

    allCopyBtns.forEach((btn) => {
        btn.addEventListener('click', handleCopyBtnClick);
    })
})
```

Finally, after styling the button a bit with CSS, I was satisfied with how my button to copy code snippets turn out, so as long as your browser has JavaScript enabled, you should be able to see a "Copy Code" button below the code snippet blocks on this website, including my JavaScript code for the button above.
