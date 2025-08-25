const modal = document.getElementById("modal-projeto3");
const card = document.getElementById("projeto3-card");
const span = modal.querySelector(".close");

// Abre modal
card.addEventListener("click", () => {
  modal.classList.add("show");
});

// Fecha modal
span.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Fecha clicando fora
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
