// NAVBAR
let navbar = document.querySelector("#navbar");
let title = document.querySelector("#title");
let home = document.querySelector("#home");
let wedding = document.querySelector("#wedding");
let liveMusic = document.querySelector("#liveMusic");
let teaching = document.querySelector("#teaching");
let contatti = document.querySelector("#contatti");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("nav-scrolled");
    if (!home.classList.contains("active-custom")) {
      title.classList.remove("nav-section-custom");
    } else {
      title.classList.remove("hidden-visibility");
      title.classList.add("visible-visibility");
    }
  } else {
    navbar.classList.remove("nav-scrolled");
    if (!home.classList.contains("active-custom")) {
      title.classList.add("nav-section-custom");
    } else {
      title.classList.add("hidden-visibility");
      title.classList.remove("visible-visibility");
    }
  }
});
