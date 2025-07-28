// Toggle mobile navigation menu
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("show");
}

// Handle contact form submission
document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We'll reach out soon.");
  });

// Animate content-side and image-side
const fadeElements = document.querySelectorAll(".content-side, .image-side");
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.3,
  }
);

fadeElements.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.6s ease-out";
  fadeObserver.observe(el);
});

// Animate cards
const cards = document.querySelectorAll(".card");
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.2,
  }
);

cards.forEach((card) => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease-out";
  cardObserver.observe(card);
});
