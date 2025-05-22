document.addEventListener('DOMContentLoaded', function() {
    // Select the overlay element
    const overlay = document.querySelector('.page-transition');
    // Create a paused GSAP timeline for the overlay transition
    const tl = gsap.timeline({ paused: true });
    
    // Animate the overlay to scaleX:1 (from left) to cover full screen
    tl.to(overlay, {
      duration: 0.6,
      scaleX: 1,
      transformOrigin: 'left center',
      ease: 'power2.inOut'
    });
  
    // Initialize Barba with the overlay transition
    barba.init({
      transitions: [{
        name: 'overlay-transition',
        // Play timeline on leave (cover screen)
        async leave(data) {
          await tl.play();
        },
        // Reverse timeline on enter (uncover new page)
        async enter(data) {
          await tl.reverse();
        },
        // On first load, play and reverse once
        async once(data) {
          await tl.play();
          await tl.reverse();
        }
      }]
    });
  });
  