var typed = new Typed(".Intro", {
  strings: [" an App Developer", " a Frontend Developer", " an App Designer"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1000,
  startDelay: 100,
  smartBackspace: false,
  loop: true
});
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.toggle-button');
  const navbar = document.querySelector('.navbar');

  toggleButton.addEventListener('click', function() {
      navbar.classList.toggle('active');
      if (navbar.classList.contains('active')) {
          toggleButton.style.color = '#0f1c38'; 
      } else {
          toggleButton.style.color = '#0ef'; 
      }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.toggle-button');
  
  function toggleButtonVisibility() {
      if (window.innerWidth <= 768) { 
          toggleButton.style.display = 'block';
      } else {
          toggleButton.style.display = 'none';
      }
  }
  toggleButtonVisibility();
  window.addEventListener('resize', toggleButtonVisibility);
});
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        const mobileMenu = document.querySelector('.navbar');
        mobileMenu.classList.remove('open');
      }
    });
  });
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  if (contactForm && successMessage) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      successMessage.classList.remove('hidden');
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 3000);
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const aboutLink = document.querySelector('a[href="#about"]');
  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const portfolioLink = document.querySelector('a[href="#portfolio"]');
  portfolioLink.addEventListener('click', function (event) {
    event.preventDefault();
    const latestProjectsSection = document.getElementById('Project');
    latestProjectsSection.scrollIntoView({ behavior: 'smooth' });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const portfolioLink = document.querySelector('a[href="#contact"]');
  portfolioLink.addEventListener('click', function (event) {
    event.preventDefault();
    const latestProjectsSection = document.getElementById('contactForm');
    latestProjectsSection.scrollIntoView({ behavior: 'smooth' });
  });
});
const facebookIcon = document.querySelector('.bx.bxl-facebook');
const instagramIcon = document.querySelector('.bx.bxl-instagram');
const whatsappIcon = document.querySelector('.bx.bxl-whatsapp');
facebookIcon.addEventListener('click', () => {
  window.open('https://www.facebook.com/Aima Khan', '_blank');
});

instagramIcon.addEventListener('click', () => {
  window.open('https://www.instagram.com/aimak_20', '_blank');
});

whatsappIcon.addEventListener('click', () => {
  window.open('https://api.whatsapp.com/send?phone=03204018310', '_blank');
});



