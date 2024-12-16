// Gradual Number Animation for Metrics
function animateNumber(id, target) {
    let current = 0;
    const step = Math.ceil(target / 100);
    const duration = 2000; // 2 seconds
    const intervalTime = duration / (target / step);
  
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      document.getElementById(id).textContent = current + '+';
    }, intervalTime);
  }
  
  // Start Animations on Page Load
  document.addEventListener('DOMContentLoaded', () => {
    animateNumber('repos', 3);
    animateNumber('commits', 50);
  });
  