import cards from "./cards.js";
import numberOfPages from "./numberOfPages.js";
import randomNumber from "./random.js";

function pagination() {
  let numbersPage = numberOfPages();
  let randomNumbers = randomNumber(numbersPage, 48);
  const start = document.querySelector(".tostart");
  const next = document.querySelector(".right");
  const prev = document.querySelector(".left");
  const end = document.querySelector(".toend");
  const cardsPets = document.querySelector(".cards_pets");
  const wrapper = document.querySelector(".cards-wrapper");
  const pageNumber = document.querySelector(".page-number");

  cards(cardsPets.querySelectorAll(".card"), randomNumbers);

  function moveNextPage() {
    if (!next.classList.contains("unactive")) {
      let pageWidth = wrapper.clientWidth;
      if (pageNumber.textContent === "1") {
        wrapper.style.left = `${0 - pageWidth - 40}px`;
      } else {
        let size = getComputedStyle(wrapper);
        wrapper.style.left = `${+size.left.slice(0, -2) - pageWidth - 40}px`;
      }
    }
  }

  function movePrevPage() {
    if (!prev.classList.contains("unactive")) {
      let pageWidth = wrapper.clientWidth;
      let size = getComputedStyle(wrapper);

      wrapper.style.left = `${+size.left.slice(0, -2) + pageWidth + 40}px`;
    }
  }

  function moveEnd() {
    if (!end.classList.contains("unactive")) {
      let pageWidth = wrapper.clientWidth;
      wrapper.style.left = `${
        -(pageWidth * numbersPage + 40 * numbersPage) + pageWidth + 40
      }px`;
    }
  }

  function moveStart() {
    if (!start.classList.contains("unactive")) {
      wrapper.style.left = `${0}px`;
    }
  }

  start.addEventListener("click", moveStart);
  next.addEventListener("click", moveNextPage);
  prev.addEventListener("click", movePrevPage);
  end.addEventListener("click", moveEnd);
}

export default pagination;
