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
    showNewYearMessage();
  }
};

// Show New Year Message
const showNewYearMessage = () => {
  document.querySelector(".countdown-section").style.display = "none";
  const newYearMessage = document.getElementById("newYearMessage");
  newYearMessage.style.display = "block";

  const message = "Wishing you and your loved ones a wonderful New Year filled with happiness, health, and success!";
  typeMessage(message, document.getElementById("typingEffect"));
};

// Typing Effect
const typeMessage = (message, element) => {
  let index = 0;
  const speed = 100; // Typing speed

  const typingInterval = setInterval(() => {
    if (index < message.length) {
      element.textContent += message[index];
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);
};

// Start the countdown
const timer = setInterval(countdown, 1000);