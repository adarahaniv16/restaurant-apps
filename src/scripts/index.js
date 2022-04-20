import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const hamburgerButtonElement = document.querySelector("#dropdown");
const drawerElement = document.querySelector("#nav-list");
const mainElement = document.querySelector("main");

hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
});

mainElement.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
})
