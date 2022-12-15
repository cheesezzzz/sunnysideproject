const showMenu = document.getElementById("menu");
const menuBtn = document.querySelector(".hamburger-button");
const body = document.getElementById("body");

menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    showMenu.classList.toggle("opacity-0");
    showMenu.classList.toggle("invisible");
    body.classList.toggle("overflow-hidden");
});

