let imageModal = document.getElementById("imageModal");
let modalImage = document.getElementById("modalImage");
let modalClose = document.getElementById("modalClose");

modalClose.addEventListener("click", () => {
  imageModal.style.display = "none";
});
document.querySelectorAll(".click-enlarge").forEach((element) => {
  element.addEventListener("click", () => {
    modalImage.src = element.src;
    imageModal.style.display = "block";
  });
});
