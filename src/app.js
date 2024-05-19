// Mobile Navbar Start
const menuButton = document.getElementsByClassName("menu-button")[0];
const navBarLinks = document.getElementsByClassName("nav-list")[0];
const cta = document.getElementsByClassName("cta-buttons")[0];

menuButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("toggled");
  cta.classList.toggle("toggled");
});
// Mobile Navbar End

// Accordion Logic Start
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// Accordion Logic End
