// Toggle mobile menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scroll for links with class scroll-link
document.querySelectorAll(".scroll-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });
});

// Fade-in animation on scroll for elements with class 'fade-in'
const fadeElems = document.querySelectorAll(".fade-in");

function checkFade() {
  const trigger = window.innerHeight * 0.85;
  fadeElems.forEach(elem => {
    const top = elem.getBoundingClientRect().top;
    if (top < trigger) {
      elem.classList.add("opacity-100");
    } else {
      elem.classList.remove("opacity-100");
    }
  });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);
// Initialize fade-in effect on page load
document.addEventListener("DOMContentLoaded", () => {
  fadeElems.forEach(elem => {
    elem.classList.add("transition-opacity", "duration-500", "opacity-0");
  });
  checkFade();
});
// Ensure fade-in effect is applied on initial load
