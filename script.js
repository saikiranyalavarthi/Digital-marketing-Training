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
