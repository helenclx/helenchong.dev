const headerToggle = document.querySelector('.header__toggle');
const headerLinks = document.querySelector(".header__links");
const headerLinkAll = document.querySelectorAll('.header__link');

headerToggle.addEventListener('click', () => {
    headerLinks.classList.toggle("header__links--show");
});

headerLinkAll.forEach((link) => {
    link.addEventListener('click', () => {
        headerLinks.classList.remove("header__links--show");
    });
});
