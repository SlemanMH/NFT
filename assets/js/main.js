
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".animation");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
});


const countdownTarget = new Date().getTime() + (59 * 60 * 60 * 1000) + (59 * 60 * 1000) + (59 * 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownTarget - now;

  if (distance >= 0) {
    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".hour").textContent = hours;
    document.querySelector(".minute").textContent = minutes;
    document.querySelector(".second").textContent = seconds;
  } else {
    document.querySelector(".hour").textContent = "0";
    document.querySelector(".minute").textContent = "0";
    document.querySelector(".second").textContent = "0";
    clearInterval(timerInterval);
  }
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();