function popup(listPets) {
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");

  const petCards = document.querySelectorAll(".pet-card");
  petCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      openPopup();
      createModal(e.target);
    });
  });
  const close = overlay.querySelector(".close");
  close.addEventListener("click", closePopup);

  function openPopup() {
    overlay.style.display = "block";
    body.classList.add("body_open");
  }

  function closePopup() {
    overlay.style.display = "none";
    body.classList.remove("body_open");
  }

  overlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay-black")) {
      closePopup();
    }
  });
  const modalImage = document.querySelector(".modal-image");
  const modalTitle = document.querySelector(".modal-title");
  const modalType = document.querySelector(".modal-type");
  const modalBreed = document.querySelector(".modal-breed");
  const modalText = document.querySelector(".modal-text");
  const modalAge = document.querySelector(".modal-age");
  const modalInoculation = document.querySelector(".modal-inoculation");
  const modalDeseases = document.querySelector(".modal-deseases");
  const modalParasites = document.querySelector(".modal-parasites");

  function getTitleCard(target) {
    let card = null;
    if (!target.classList.contains("pet-card")) {
      card = target.parentNode;
    } else {
      card = target;
    }
    return card.querySelector(".title").textContent;
  }

  function createModal(target) {
    let title = getTitleCard(target);
    let modalInfo = null;
    for (let i = 0; i < 8; i++) {
      if (listPets[i].name === title) {
        modalInfo = listPets[i];
      }
    }
    modalImage.style.background = `url("${modalInfo.img}")center center/cover no-repeat`;
    modalTitle.textContent = modalInfo.name;
    modalType.textContent = modalInfo.type;
    modalBreed.textContent = modalInfo.breed;
    modalText.textContent = modalInfo.description;
    modalAge.innerHTML = `<span><strong>Age:</strong> ${modalInfo.age}</span>`;
    modalInoculation.innerHTML = `<span><strong>Inoculation:</strong> ${modalInfo.inoculations}</span>`;
    modalDeseases.innerHTML = `<span><strong>Diseases:</strong> ${modalInfo.diseases}</span>`;
    modalParasites.innerHTML = `<span><strong>Parasites:</strong> ${modalInfo.parasites}</span>`;
  }
}

export default popup;
