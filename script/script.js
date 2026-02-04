const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalInfo = document.getElementById("modalInfo");

document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    modalTitle.innerHTML = btn.dataset.title;
    modalImg.src = btn.dataset.img;
    modalInfo.innerHTML = btn.dataset.info;

    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
