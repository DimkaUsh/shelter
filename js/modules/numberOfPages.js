function numberOfPages() {
  const container = document.querySelector(".container");
  let containerSize = +getComputedStyle(container).width.slice(0, -2);
  let numbersPage = 0;
  if (containerSize > 1279) {
    numbersPage = 6;
  }
  if (containerSize > 767 && containerSize < 1279) {
    numbersPage = 8;
  }

  if (containerSize < 767) {
    numbersPage = 16;
  }
  return numbersPage;
}

export default numberOfPages;
