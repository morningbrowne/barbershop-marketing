// script.js - Barbershop Marketing
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function () {
    setTimeout(() => {
      alert("Thanks for reaching out! We'll be in touch soon.");
    }, 100);
  });
});
