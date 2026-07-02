// MOBILE MENU TOGGLE
function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

// SMOOTH SCROLL BUTTON
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
