// NAVBAR
let navbar = document.querySelector("#navbar");
let title = document.querySelector("#title");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});
