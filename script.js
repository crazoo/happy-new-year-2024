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

// Background Music
const music = document.getElementById("backgroundMusic");
document.getElementById("playMusic").addEventListener("click", () => {
  if (music.paused) {
    music.play();
    document.getElementById("playMusic").innerText = "Pause Music";
  } else {
    music.pause();
    document.getElementById("playMusic").innerText = "Play Music";
  }
});

// Quotes Carousel
const quotes = [
  "Cheers to a new year and another chance to get it right!",
  "Write it on your heart that every day is the best day in the year!",
  "Every moment is a fresh beginning.",
  "New year, new adventures, new memories!"
];

let quoteIndex = 0;
setInterval(() => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  document.getElementById("quote").innerText = quotes[quoteIndex];
}, 4000);

// Share Button
document.getElementById("share").addEventListener("click", () => {
  navigator.share({
    title: "Happy New Year 2025",
    text: "Celebrate with me! Check out this awesome New Year website!",
    url: window.location.href
  });
});

// Light/Dark Theme Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});