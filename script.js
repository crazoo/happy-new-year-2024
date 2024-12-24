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

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
};

setInterval(countdown, 1000);

// Music Control
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

// Share Functionality
document.getElementById("share").addEventListener("click", async () => {
  const url = "https://example.com"; // Replace with your website link
  const text = "Happy New Year 2025! Celebrate with us 🎉✨";

  if (navigator.share) {
    try {
      await navigator.share({ title: "Happy New Year 2025", text, url });
      alert("Thank you for sharing!");
    } catch (err) {
      alert("Failed to share: " + err.message);
    }
  } else {
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard! Share it with your friends.");
    });
  }
});