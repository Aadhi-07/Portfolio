// Typing effect for subtitle
const subtitleText = "AI Developer | Software engineer";
let typingIndex = 0;

function typeEffect() {
  const subtitle = document.getElementById("subtitle");
  if (typingIndex < subtitleText.length) {
    subtitle.innerHTML += subtitleText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = () => {
  typeEffect();
  revealSectionsOnScroll();
  updateCarousel(); // ✅ run carousel on load too
  updateActiveLink();
};

// Section fade-in on scroll
function revealSectionsOnScroll() {
  const sections = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - 50) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSectionsOnScroll);

// Form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  alert("Message sent successfully!");
  return false;
}

// Toggle menu
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Bottom nav active link highlight
const bottomNavLinks = document.querySelectorAll(".bottom-nav a");
const sections = document.querySelectorAll("section");

function updateActiveLink() {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      bottomNavLinks.forEach(link => {
        link.classList.remove("active");
        if (link.dataset.target === sectionId) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// Carousel functionality
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');
const prevBtn = document.querySelector('.carousel-arrow.left');
const nextBtn = document.querySelector('.carousel-arrow.right');

let carouselIndex = 0;

function updateCarousel() {
  if (!track || !cards.length) return;
  const cardWidth = cards[0].offsetWidth + 16;
  track.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;
}

nextBtn?.addEventListener('click', () => {
  if (carouselIndex < cards.length - 1) {
    carouselIndex++;
    updateCarousel();
  }
});

prevBtn?.addEventListener('click', () => {
  if (carouselIndex > 0) {
    carouselIndex--;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": { "value": "#ffffff" },
      "shape": {
        "type": "triangle",
        "stroke": { "width": 0, "color": "#000000" }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": { "enable": false }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": { "enable": false }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
      },
      "modes": {
        "grab": { "distance": 300, "line_linked": { "opacity": 1 } },
        "push": { "particles_nb": 5 }
      }
    },
    "retina_detect": true
  });

function toggleProfileModal() {
    const modal = document.getElementById("profile-modal");
    modal.classList.toggle("show");
  }