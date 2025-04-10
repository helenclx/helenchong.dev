const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
const websiteCarbonBadge = document.getElementById("wcb");

if (window.matchMedia && darkModePreference.matches) {
    websiteCarbonBadge.classList.add("wcb-d");
}

darkModePreference.addEventListener("change", (event) => {
    if (event.matches) {
        websiteCarbonBadge.classList.add("wcb-d");
    } else {
        websiteCarbonBadge.classList.remove("wcb-d");
    }
});
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