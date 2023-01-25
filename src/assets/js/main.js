const Turbolinks = require('turbolinks');
const drawer = require('./drawer');

// Initialize Turbolinks
Turbolinks.start();

// Initialize mobile nav drawer
drawer();

// Handle Netlify Identity Login
if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', (user) => {
    if (!user) {
      window.netlifyIdentity.on('login', () => {
        document.location.href = '/admin/';
      });
    }
  });
}

// Card flip script

const cards = document.querySelectorAll(".project-card");

function transition() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
}

cards.forEach((card) => card.addEventListener("click", transition));
