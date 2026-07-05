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

const question1 = document.querySelector(".faqs-q1");
const q1add1 = document.querySelector(".faqs-q1-add1");
const q1add2 = document.querySelector(".faqs-q1-add2");
const answer1 = document.querySelector(".faqs-a1");

const question2 = document.querySelector(".faqs-q2");
const q2add1 = document.querySelector(".faqs-q2-add1");
const q2add2 = document.querySelector(".faqs-q2-add2")
const answer2 = document.querySelector(".faqs-a2");

const question3 = document.querySelector(".faqs-q3");
const q3add1 = document.querySelector(".faqs-q3-add1");
const q3add2 = document.querySelector(".faqs-q3-add2")
const answer3 = document.querySelector(".faqs-a3");

const question4 = document.querySelector(".faqs-q4");
const q4add1 = document.querySelector(".faqs-q4-add1");
const q4add2 = document.querySelector(".faqs-q4-add2")
const answer4 = document.querySelector(".faqs-a4");


question1.addEventListener("click", () => {
    if (answer1.style.display === "block") {
        answer1.style.display = "none";
    } else {
        answer1.style.display = "block";
    }
    if (q1add1.classList.contains('show')) {
        q1add1.classList.remove('show');
    } else {
        q1add1.classList.add('show');
    }
    if (q1add2.classList.contains('show')) {
        q1add2.classList.remove('show');
    } else {
        q1add2.classList.add('show');
    }
});

question2.addEventListener("click", () => {
    if (answer2.style.display === "block") {
        answer2.style.display = "none";
    } else {
        answer2.style.display = "block";
    }
    if (q2add1.classList.contains('show')) {
        q2add1.classList.remove('show');
    } else {
        q2add1.classList.add('show');
    }
    if (q2add2.classList.contains('show')) {
        q2add2.classList.remove('show');
    } else {
        q2add2.classList.add('show');
    }
});

question3.addEventListener("click", () => {
    if (answer3.style.display === "block") {
        answer3.style.display = "none";
    } else {
        answer3.style.display = "block";
    }
    if (q3add1.classList.contains('show')) {
        q3add1.classList.remove('show');
    } else {
        q3add1.classList.add('show');
    }
    if (q3add2.classList.contains('show')) {
        q3add2.classList.remove('show');
    } else {
        q3add2.classList.add('show');
    }
});

question4.addEventListener("click", () => {
    if (answer4.style.display === "block") {
        answer4.style.display = "none";
    } else {
        answer4.style.display = "block";
    }
    if (q4add1.classList.contains('show')) {
        q4add1.classList.remove('show');
    } else {
        q4add1.classList.add('show');
    }
    if (q4add2.classList.contains('show')) {
        q4add2.classList.remove('show');
    } else {
        q4add2.classList.add('show');
    }
});


