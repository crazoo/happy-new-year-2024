const countdown = () => {
  const newYear = new Date("January 1, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = newYear - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (gap > 0) {
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  } else {
    clearInterval(timer); // Stop the timer
    displayWishMessage();
  }
};

const displayWishMessage = () => {
  document.querySelector(".countdown-section").classList.add("hidden");
  const wishSection = document.getElementById("wishSection");
  wishSection.classList.remove("hidden");

  const messages = [
    "✨ Wishing you a magical and joyful 2025! ✨",
    "🎉 May this year bring happiness and success to your life. 🎉",
    "🌟 Start your year with love, laughter, and endless possibilities. 🌟",
  ];

  const typeEffect = (element, text, delay) => {
    let index = 0;
    const typing = setInterval(() => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
      } else {
        clearInterval(typing);
      }
    }, delay);
  };

  const messageElement = document.querySelector(".celebration-message");
  const textElement = document.querySelector(".celebration-text");
  typeEffect(messageElement, messages[0], 100);
  setTimeout(() => typeEffect(textElement, messages[1], 100), 2000);
};

const timer = setInterval(countdown, 1000);