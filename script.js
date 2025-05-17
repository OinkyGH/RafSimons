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

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .slide-up').forEach(el => observer.observe(el));
});


const riotJacket = document.getElementById('riotJacket');
const priceTag = document.getElementById('priceTag');

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

//hover ani pop out on season-card


  


  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      scale: 1,
      boxShadow: '0 0 0 rgba(0,0,0,0)',
      duration: 0.01,         // shorter duration
      ease: 'power1.out',
      zIndex: 1,
      overwrite: 'auto'
    });
  });





