// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Menu Toggle
  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  
  function toggleMenu() {
    menuBtn.classList.toggle('open');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  }

  menuBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // Scroll Animations (IntersectionObserver)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in, .slide-up').forEach(el => observer.observe(el));

  // Submenu toggle (for any .has-submenu > .submenu-toggle)
  document.querySelectorAll('.has-submenu > .submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
      e.preventDefault();
      toggle.parentNode.classList.toggle('open');
    });
  });
});

// Riot Jacket price-tag animation
const riotJacket = document.getElementById('riotJacket');
const priceTag   = document.getElementById('priceTag');

riotJacket.addEventListener('mouseenter', () => {
  gsap.to(priceTag, {
    y: -25,
    duration: 0.4,
    scale: 1,
    ease: "back.out(1.7)",
  });
});
riotJacket.addEventListener('mouseleave', () => {
  gsap.to(priceTag, {
    duration: 0.3,
    scale: 0,
    ease: "back.in(1.7)",
  });
});

// Remember to save your products for detail page
localStorage.setItem('allProducts', JSON.stringify(products));

// Card hover pop-out (make sure you define `cards`!)
document.querySelectorAll('.season-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      scale: 1.05,
      boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
      duration: 0.01,
      ease: 'power1.out',
      zIndex: 10,
      overwrite: 'auto'
    });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      scale: 1,
      boxShadow: '0 0 0 rgba(0,0,0,0)',
      duration: 0.01,
      ease: 'power1.out',
      zIndex: 1,
      overwrite: 'auto'
    });
  });
});
