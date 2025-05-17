// TRANSITIONS CONFIG
const hideShowTransition = {
    name: 'default',
    leave(data) {
        return gsap.to(data.current.container, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            ease: "power2.inOut"
        });
    },
    enter(data) {
        return gsap.from(data.next.container, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: "power2.out"
        });
    }
};


// animations for biography.html
gsap.timeline({ scrollTrigger: {
  trigger: ".bio-portrait",
  start: "top 80%"
}})
.from(".bio-portrait::before", {
  scaleY: 1,
  duration: 1.2,
  ease: "power4.out"
})
.from(".bio-portrait img", {
  scale: 1.2,
  duration: 1.5,
  ease: "power2.out",
  delay: -1
}, 0)
.from(".caption", {
  opacity: 0,
  y: 20,
  duration: 0.8
}, 0.5);







// BARBA INIT
barba.init({
    transitions: [hideShowTransition],
    views: [{
        namespace: 'home',
        beforeEnter({ next }) {
            handlePageTransition(next);
        }
    }, {
        namespace: 'biography',
        beforeEnter({ next }) {
            handlePageTransition(next);
        }
    }, {
        namespace: 'gallery',
        beforeEnter({ next }) {
            handlePageTransition(next);
        }
    },
    // Add other pages similarly
    {
        namespace: 'shop',
        beforeEnter({ next }) {
            handlePageTransition(next);
        }
    }]
});

// Shared transition handler
function handlePageTransition(next) {
    // Close menu
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    const overlay = document.querySelector('.overlay');
    
    if (sidebar) sidebar.classList.remove('active');
    if (menuBtn) menuBtn.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
    
    // Reinit GSAP
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    
    // Reinit menu functionality
    if (menuBtn && sidebar && overlay) {
        const toggleMenu = () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            menuBtn.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        };

        menuBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    }
}