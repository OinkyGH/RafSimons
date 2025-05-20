import barba from '@barba/core';
import gsap from 'gsap';

// Create a full-screen overlay for transitions
const overlay = document.createElement('div');
overlay.id = 'page-overlay';
overlay.style.position = 'fixed';
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = '#111';
overlay.style.zIndex = 9999;
overlay.style.pointerEvents = 'none';
overlay.style.transformOrigin = 'left center';
overlay.style.transform = 'scaleX(0)';
overlay.style.transition = 'transform 0.8s ease';
document.body.appendChild(overlay);

// Optional back button animation
const backBtn = document.getElementById('backBtn');
if (backBtn) {
  gsap.to(backBtn, { duration: 1, opacity: 1, y: 0, ease: 'bounce.out', delay: 0.5 });
  backBtn.addEventListener('click', e => {
    e.preventDefault();
    history.back();
  });
}

// Barba/GSAP page transitions
barba.init({
  sync: true,
  transitions: [{
    async leave(data) {
      // Animate overlay in
      overlay.style.transform = 'scaleX(1)';
      await gsap.to(overlay, { duration: 0.8, transformOrigin: 'left center', ease: 'power4.inOut' });
      data.current.container.remove();
    },
    async enter(data) {
      // Hide scroll, reset overlay origin to right
      window.scrollTo(0, 0);
      overlay.style.transformOrigin = 'right center';
      // Animate overlay out
      await gsap.to(overlay, { duration: 0.8, transform: 'scaleX(0)', ease: 'power4.inOut' });
      // Animate content pop
      gsap.from(data.next.container, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)'
      });
    }
  }]
});