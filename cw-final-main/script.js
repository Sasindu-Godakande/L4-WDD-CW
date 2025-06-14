document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger-button');
    const navLinks = document.querySelector('.nav-links');
    const searchBox = document.querySelector('.search-box');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
            searchBox.classList.toggle("active");
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && 
            !navLinks.contains(event.target) && 
            !searchBox.contains(event.target)) {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
            searchBox.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
  
    function checkScroll() {
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (elementTop < windowHeight * 0.75) { // Adjust 0.75 as needed
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check on load
  });

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active"); // Optionally remove the class when the card goes out of view
            }
        });
    }, {
        threshold: 0.1 // The card is considered visible when 10% is in view
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});
