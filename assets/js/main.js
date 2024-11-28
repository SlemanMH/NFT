
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
  
  