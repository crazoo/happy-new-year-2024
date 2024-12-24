// Countdown Timer
const countdown = () => {
  const newYear = new Date("January 1, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = newYear - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;
};

setInterval(countdown, 1000);

// Fireworks Animation
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(x, y) {
  const particleCount = 150;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: x,
      y: y,
      angle: (Math.PI * 2 * i) / particleCount,
      speed: Math.random() * 5 + 2,
      radius: Math.random() * 2 + 1,
      opacity: 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    });
  }
}

function updateParticles() {
  particles.forEach((particle, index) => {
    particle.x += Math.cos(particle.angle) * particle.speed;
    particle.y += Math.sin(particle.angle) * particle.speed;
    particle.opacity -= 0.02;

    if (particle.opacity <= 0) particles.splice(index, 1);
  });
}

function drawParticles() {
  particles.forEach((particle) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
    ctx.fill();
    ctx.closePath();
  });
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateParticles();
  drawParticles();
  requestAnimationFrame(loop);
}

canvas.addEventListener("click", (e) => createFirework(e.clientX, e.clientY));
canvas.addEventListener("mousemove", (e) => createFirework(e.clientX, e.clientY));

loop();

// Background Music
const music = new Audio("https://example.com/new-year-music.mp3"); // Replace with actual URL
document.getElementById("musicToggle").addEventListener("click", () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});