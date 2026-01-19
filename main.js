
const skillItems = document.querySelectorAll(".skill-item");
const skillsSection = document.querySelector(".skills");

function animateProgressBars() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                const percentage = item.getAttribute("data-percentage");
                const progressFill = item.querySelector(".progress-fill");

                item.classList.add("animate");
                progressFill.style.width = percentage + "%";
              }, index * 100);
            });
          }, 500);

          observer.unobserve(entry.target);
        }
      });
    },
    {threshold: 0.5,},
  );

  observer.observe(skillsSection);
}

document.addEventListener("DOMContentLoaded", animateProgressBars);
