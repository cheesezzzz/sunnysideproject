const showMenu = document.getElementById("menu");
const menuBtn = document.querySelector(".hamburger-button");
const body = document.getElementById("body");

menuBtn.addEventListener("click", function () {
    if (showMenu.classList.contains("opacity-0")) {
        showMenu.classList.remove("opacity-0")
        showMenu.classList.add("opacity-100")
        showMenu.classList.remove("invisible")
        body.classList.add('overflow-hidden')
    } else if(showMenu.classList.contains("opacity-100")) {
        showMenu.classList.remove("opacity-100")
        showMenu.classList.add("opacity-0")
        showMenu.classList.remove("visible")
        body.classList.remove('overflow-hidden')
    }
});

