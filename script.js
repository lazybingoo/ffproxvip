// Set your launch date here
const launchDate = new Date("2026-12-31T00:00:00").getTime();

function updateCountdown() {
  const remaining = launchDate - Date.now();

  if (remaining <= 0) {
    document.querySelector(".countdown").textContent = "WE ARE LIVE!";
    return;
  }

  const values = {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining % 86400000) / 3600000),
    minutes: Math.floor((remaining % 3600000) / 60000),
    seconds: Math.floor((remaining % 60000) / 1000)
  };

  Object.entries(values).forEach(([id, value]) => {
    document.getElementById(id).textContent =
      String(value).padStart(2, "0");
  });
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Animated demo visitor number
const target = 12580;
let current = 0;

const visitorElement = document.getElementById("visitors");

const counter = setInterval(() => {
  current += Math.ceil(target / 80);
  if (current >= target) {
    current = target;
    clearInterval(counter);
  }
  visitorElement.textContent = current.toLocaleString();
}, 25);
