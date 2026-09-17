// ====== Mobile Menu Toggle ======
document.addEventListener("DOMContentLoaded", function() {
  var toggle = document.querySelector(".menu-toggle");
  var navMenu = document.querySelector(".nav-menu");
  if (toggle && navMenu) {
    toggle.addEventListener("click", function() {
      navMenu.classList.toggle("open");
      toggle.textContent = navMenu.classList.contains("open") ? "\u2715" : "\u2630";
    });
    navMenu.querySelectorAll("a").forEach(function(link) {
      link.addEventListener("click", function() {
        navMenu.classList.remove("open");
        toggle.textContent = "\u2630";
      });
    });
  }
});

// ====== Back to Top ======
document.addEventListener("DOMContentLoaded", function() {
  var btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", function() {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });
  btn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// ====== Sticky Header (Sport Pages) ======
window.addEventListener("scroll", function() {
  var header = document.querySelector(".main-header");
  if (header && window.scrollY > 60) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
  } else if (header) {
    header.style.boxShadow = "none";
  }
});
