function randomNumber() {
  let numberVisiblePet = [];
  let listPets = [];
  function pushNumber(randomNumber) {
    listPets.push(randomNumber);
    numberVisiblePet.push(randomNumber);
  }

  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < 8; i++) {
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
    numberVisiblePet = [];
  }

  return listPets;
}

export default randomNumber;
