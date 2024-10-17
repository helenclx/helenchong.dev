const topButton = document.querySelector(".top-btn");
    const scrollOffset = 400;

    window.onscroll = () => {
        if (document.body.scrollTop > scrollOffset || document.documentElement.scrollTop > scrollOffset) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }
    };

    topButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, left: 0 });
    });