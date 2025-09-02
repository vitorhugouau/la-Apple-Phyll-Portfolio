const cards = document.querySelectorAll(".card-projeto.principal");
const modals = document.querySelectorAll(".modal");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.id.replace("-card", ""); 
    const modal = document.getElementById(`modal-${projectId}`);
    if (modal) modal.classList.add("show");
  });
});

modals.forEach((modal) => {
  const span = modal.querySelector(".close");
  if (span) {
    span.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  }
});

window.addEventListener("click", (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});
