const dropdownClickElement = document.querySelector("#dropdown-click");
const navbarElement = document.querySelector("#navbar");
const mainElement = document.querySelector("main");

dropdownClickElement.addEventListener("click", event => {
    navbarElement.classList.toggle("open");
    event.stopPropagation();
});

mainElement.addEventListener("click", event => {
    navbarElement.classList.remove("open");
    event.stopPropagation();
})