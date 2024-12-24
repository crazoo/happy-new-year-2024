// Resize Canvas for Mobile
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // Initial call

// Fireworks on Touch
canvas.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  createFirework(touch.clientX, touch.clientY);
});

// Adjust Particle Count for Mobile
const isMobile = window.innerWidth < 768;
const particleCount = isMobile ? 100 : 200; // Fewer particles for mobile

function createFirework(x, y) {
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: x,
      y: y,
      angle: (Math.PI * 2 * i) / particleCount,
      speed: Math.random() * 3 + 1.5, // Adjust speed for smoother animation
      radius: Math.random() * 1.5 + 1, // Smaller particles on mobile
      opacity: 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    });
  }
  document.getElementById("fireworksSound").play();
}