import { getResource } from "../services/services.js";
import popup from "./popup.js";

function cards(parents, listNumbers) {
  class PetCard {
    constructor(name, img, type, parent) {
      this.name = name;
      this.img = img;
      this.type = type;
      this.parent = parent;
    }

    render() {
      const card = document.createElement("div");

      card.innerHTML = `
              <div class="pet-card">
                <img class="pet-card__image" src=${this.img} alt=${this.type}>
                <h4 class="title title_card title_center">${this.name}</h4>
                <button class="button button_small-white">Learn more</button>
              </div>`;
      this.parent.append(card);
    }
  }

  function createCard(listPets) {
    listNumbers.forEach((number, index) => {
      const { name, img, type } = listPets[number];

      new PetCard(name, img, type, parents[index]).render();
    });
  }

  getResource(
    "https://rolling-scopes-school.github.io/dimkaush-JSFE2022Q1/Shelter/data.json"
  ).then((listPets) => {
    createCard(listPets);
    popup(listPets);
  });
}

export default cards;
