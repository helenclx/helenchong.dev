/*
    Based on ttntm's code to add a button to copy code snippets:
    https://ttntm.me/blog/adding-a-copy-button-to-code-blocks/
*/

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