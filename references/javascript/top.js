const navi = document.querySelector(".navi");
const arrow0 = document.querySelector(".arrow0");
const arrow1 = document.querySelector(".arrow1");
const icons = document.querySelector(".search");
const logo10 = document.querySelector(".logo10");
const logo11 = document.querySelector(".logo11");

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 650;

    [navi, arrow0, arrow1, icons, logo10, logo11].forEach(element => {
        if (element) {
            element.classList.toggle("scrolled", scrolled);
        }
    });
});
