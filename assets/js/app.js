// scroll to top functionality
const scrollUpBtn = document.querySelector(".scroll-up");
const linePositionY = 300;

window.onscroll = () => {
    if (document.body.scrollTop > linePositionY || document.documentElement.scrollTop > linePositionY) {
        scrollUpBtn.classList.remove("hidden");
    } else {
        scrollUpBtn.classList.add("hidden");
    }
}

scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// Navigation hamburger selections

const burgerMenu = document.querySelector(".burger-menu");
const navList = document.querySelector(".nav__list");
const nav = document.querySelector("nav");

burgerMenu.addEventListener("click", () => {
    navList.classList.toggle("nav-show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        navList.classList.remove("nav-show");
    })
);
