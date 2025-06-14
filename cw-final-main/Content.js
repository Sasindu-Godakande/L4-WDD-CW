document.addEventListener("DOMContentLoaded", function() {
  // Hamburger Menu Logic (your existing code)
  const hamburger = document.querySelector('.hamburger-button');
  const navLinks = document.querySelector('.nav-links');
  const searchBox = document.querySelector('.search-box');

  if (hamburger && navLinks && searchBox) {
      hamburger.addEventListener("click", function() {
          hamburger.classList.toggle("active");
          navLinks.classList.toggle("active");
          searchBox.classList.toggle("active");
      });
  }

  document.addEventListener('click', function(event) {
      if (hamburger && navLinks && searchBox && !hamburger.contains(event.target) &&
          !navLinks.contains(event.target) &&
          !searchBox.contains(event.target)) {
          hamburger.classList.remove("active");
          navLinks.classList.remove("active");
          searchBox.classList.remove("active");
      }
  });

  // Intersection Observer Logic (New Code)
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active");
          } else {
              entry.target.classList.remove("active");
          }
      });
  }, {
      threshold: 0.1
  });

  elements.forEach(element => {
      observer.observe(element);
  });
});