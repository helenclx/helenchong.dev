// scroll to top functionality
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

// Navigation hamburger selections

const burgerMenu = document.querySelector(".burger-menu");
const navbarList = document.querySelector(".navbar__list");
const navbar = document.querySelector(".navbar");

burgerMenu.addEventListener("click", () => {
    navbarList.classList.toggle("navbar-list-show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        navbarList.classList.remove("navbar-list-show");
    })
);
