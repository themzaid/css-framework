// Modal
class Modal {
  constructor() {
    this.modal = document.querySelector(".modal");
  }
  open() {
    this.modal.style.display = "block";
  }
  close() {
    this.modal.style.display = "none";
  }
  changeContent(title, text) {
    if (title !== undefined) {
      this.modal.querySelector(".modal-title").innerText = title;
    }
    if (text !== undefined) {
      this.modal.querySelector(".modal-text").innerText = text;
    }
  }
}

const openModal = document.querySelector(".modal-btn-open");
const closeModal = document.querySelector(".modal-btn-close");
const modal = new Modal();

openModal.addEventListener("click", function (e) {
  modal.open();
});
closeModal.addEventListener("click", function (e) {
  modal.close();
});
modal.changeContent("New Title Alternate", "New Text Alternate");

// end Modal
