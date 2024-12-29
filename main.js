document.addEventListener("DOMContentLoaded", () => {
    const frameworkCards = document.querySelectorAll(".shadow-lg.p-5.rounded-md");
  
    frameworkCards.forEach((card) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(100px) scale(0.8) rotateY(30deg)";
    });
  
    function animateFrameworks() {
      frameworkCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const screenPosition = window.innerHeight / 1.2;
  
        if (rect.top < screenPosition && rect.bottom > 0) {
          card.style.transition = `all 0.8s ease-out ${index * 0.2}s`;
          card.style.opacity = 1;
          card.style.transform = "translateY(0) scale(1) rotateY(0)";
          card.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
        } else {
          card.style.transition = "all 0.6s ease-out";
          card.style.opacity = 0;
          card.style.transform = "translateY(100px) scale(0.8) rotateY(30deg)";
          card.style.boxShadow = "none";
        }
      });
    }
  
    window.addEventListener("scroll", animateFrameworks);
    animateFrameworks();
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href^='#']");
  
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const targetPosition = targetElement.offsetTop;
          const startPosition = window.scrollY;
          const distance = targetPosition - startPosition;
          const duration = 1000; // Adjust this value to control the speed (in milliseconds)
          let startTime = null;
  
          function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          }
  
          function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
          }
  
          requestAnimationFrame(animation);
        }
      });
    });
  });
  