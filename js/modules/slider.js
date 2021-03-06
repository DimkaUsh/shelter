import cards from './cards.js';
import disableElements from './disableElement.js';

function slider() {
  const container = document.querySelector('.container');
  const slider = document.querySelector('.slider');
  const circleButton = document.querySelectorAll('.circle__button');

  let carousel = document.querySelector('.carousel');
  let containerSize = +getComputedStyle(container).width.slice(0, -2);
  const countCards = countOfcards();

  function rundomNumber() {
    function pushNumber(randomNumber) {
      listPets.push(randomNumber);
      numberVisiblePet.push(randomNumber);
    }

    for (let i = 0; i < countCards; i++) {
      const randomNumber = Math.floor(Math.random() * 8);

      if (numberVisiblePet.length) {
        let numberValid = true;
        // isNumberValid = true?
        numberVisiblePet.forEach((number) => {
          if (number === randomNumber) {
            numberValid = false;
          }
        });

        if (numberValid) {
          pushNumber(randomNumber);
        } else {
          i--;
          continue;
        }
      } else {
        pushNumber(randomNumber);
      }
    }
    return listPets;
  }

  let numberVisiblePet = [];
  let listPets = [];
  rundomNumber();
  createCards(`start`);

  function createCards(selector) {
    let classCards = `${selector}`;
    if (selector === 'start') {
      classCards = `cards old`;
    } else {
      classCards = `cards new ${selector}`;
    }
    const element = document.createElement('div');

    element.className = classCards;
    for (let i = 0; i < countCards; i++) {
      element.innerHTML += `
      <div class="card" data-card="main"></div>`;
    }
    let width = null;
    selector === 'new-right' ? (width = widthNewSlider()) : (width = '-' + widthNewSlider());
    element.style.left = width;

    carousel.append(element);

    cards(element.querySelectorAll('.card'), listPets);

    listPets = [];
  }

  function countOfcards() {
    let countCards = null;
    if (containerSize > 1279) {
      countCards = 3;
    }
    if (containerSize > 767 && containerSize < 1279) {
      countCards = 2;
    }

    if (containerSize < 767) {
      countCards = 1;
    }
    return countCards;
  }

  function widthNewSlider() {
    let width = null;
    if (containerSize > 1279) {
      width = '1080px';
    }
    if (containerSize > 767 && containerSize < 1279) {
      width = '610px';
    }

    if (containerSize < 767) {
      width = '300px';
    }
    return width;
  }

  function transitionCards(right) {
    if (right) {
      carousel.classList.add('transition-right');
      carousel.style.animationName = windowWidth('right');
    } else {
      carousel.classList.add('transition-left');
      carousel.style.animationName = windowWidth('left');
    }
  }

  function windowWidth(were) {
    let name = null;
    if (containerSize >= 1279) {
      name = `move-${were}-1080`;
    }
    if (containerSize > 767 && containerSize < 1279) {
      name = `move-${were}-610`;
    }

    if (containerSize <= 767) {
      name = `move-${were}-300`;
    }
    return name;
  }

  function deleteCards(newCards, oldCards) {
    oldCards.remove();
    newCards.className = 'cards old';
    carousel.classList.remove('transition-left');
    carousel.classList.remove('transition-right');
    carousel.style.animationName = null;
  }

  function onClick(e) {
    circleButton.forEach((button) => disableElements(button, 2000));
    const valueData = e.target.getAttribute('data-direction'),
      oldCards = document.querySelector('.old');

    rundomNumber();
    console.log(e.target);
    createCards(valueData === 'right' ? 'new-right' : 'new-left');
    const newCards = document.querySelector('.new');

    transitionCards(valueData === 'right' ? true : false);
    setTimeout(deleteCards, 1980, newCards, oldCards);
    numberVisiblePet = numberVisiblePet.slice(3);
  }

  //Listner
  circleButton.forEach((button) => {
    button.addEventListener('click', (e) => onClick(e));
  });
}

export default slider;
