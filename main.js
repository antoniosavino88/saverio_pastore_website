// NAVBAR
let navbar = document.querySelector("#navbar");
let title = document.querySelector("#title");
let home = document.querySelector("#home");
let wedding = document.querySelector("#wedding");
let liveMusic = document.querySelector("#liveMusic");
let teaching = document.querySelector("#teaching");
let contatti = document.querySelector("#contatti");
let hamburger = document.querySelector("#hamburger");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("nav-scrolled");
    if (!home.classList.contains("active-custom")) {
      title.classList.remove("nav-section-custom");
      home.classList.remove("nav-section-custom");
      wedding.classList.remove("nav-section-custom");
      liveMusic.classList.remove("nav-section-custom");
      teaching.classList.remove("nav-section-custom");
      contatti.classList.remove("nav-section-custom");
      home.classList.add("nav-section-custom-2");
      wedding.classList.add("nav-section-custom-2");
      liveMusic.classList.add("nav-section-custom-2");
      teaching.classList.add("nav-section-custom-2");
      contatti.classList.add("nav-section-custom-2");
    } else {
      title.classList.remove("hidden-visibility");
      title.classList.add("visible-visibility");
    }
  } else {
    navbar.classList.remove("nav-scrolled");
    if (!home.classList.contains("active-custom")) {
      title.classList.add("nav-section-custom");
      home.classList.add("nav-section-custom");
      wedding.classList.add("nav-section-custom");
      liveMusic.classList.add("nav-section-custom");
      teaching.classList.add("nav-section-custom");
      contatti.classList.add("nav-section-custom");
      home.classList.remove("nav-section-custom-2");
      wedding.classList.remove("nav-section-custom-2");
      liveMusic.classList.remove("nav-section-custom-2");
      teaching.classList.remove("nav-section-custom-2");
      contatti.classList.remove("nav-section-custom-2");
    } else {
      title.classList.add("hidden-visibility");
      title.classList.remove("visible-visibility");
    }
  }
});

// hamburger.addEventListener("click", () => {
//   navbar.classList.add("nav-scrolled");
// });
