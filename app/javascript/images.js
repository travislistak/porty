document.addEventListener("turbo:load", () => {
  registerListeners();
})

function registerListeners() {
  let imageModal = document.getElementById("imageModal");
  let modalImage = document.getElementById("modalImage");
  let modalClose = document.getElementById("modalClose");

  if (imageModal == null || modalImage == null || modalClose == null) return;

  imageModal.addEventListener("click", () => {
    imageModal.style.display = "none";
  });

  modalClose.addEventListener("click", () => {
    imageModal.style.display = "none";
  });

  document.querySelectorAll(".click-enlarge").forEach((element) => {
    element.addEventListener("click", () => {
      modalImage.src = element.src;
      imageModal.style.display = "flex";
    });
  });
}