// script.js
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
