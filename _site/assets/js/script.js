// Scroll to top button functionality
const scrollUpBtn = document.querySelector(".scroll-up");
const linePositionY = 500;

window.onscroll = () => {
    if (document.body.scrollTop > linePositionY || document.documentElement.scrollTop > linePositionY) {
        scrollUpBtn.classList.add("scroll-up-show");
    } else {
        scrollUpBtn.classList.remove("scroll-up-show");
    }
}

scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
