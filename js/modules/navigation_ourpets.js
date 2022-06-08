import numberOfPages from "./numberOfPages.js";

function navigation() {
  let maxpages = numberOfPages();
  let pagenumber = 1;
  const page = document.querySelector(".page-number");
  const next = document.querySelector(".right");
  const prev = document.querySelector(".left");
  const end = document.querySelector(".toend");
  const start = document.querySelector(".tostart");

  page.textContent = pagenumber;

  function moveStartPage() {
    pagenumber = 1;
    page.textContent = 1;
    disabledLeft();
    activeRight();
  }

  function decrease() {
    if (pagenumber > 1) {
      pagenumber -= 1;
    }
    if (pagenumber < maxpages) {
      activeRight();
    }
    page.textContent = pagenumber;
    if (page.textContent === "1") {
      disabledLeft();
    }
  }

  function disabledLeft() {
    prev.classList.add("unactive");
    start.classList.add("unactive");
  }
  function activeLeft() {
    prev.classList.remove("unactive");
    start.classList.remove("unactive");
  }

  function increase() {
    if (pagenumber < maxpages) {
      pagenumber += 1;
    }
    if (pagenumber > 1) {
      activeLeft();
    }
    page.textContent = pagenumber;
    if (page.textContent == maxpages) {
      disabledRight();
    }
  }
  function disabledRight() {
    next.classList.add("unactive");
    end.classList.add("unactive");
  }
  function activeRight() {
    next.classList.remove("unactive");
    end.classList.remove("unactive");
  }

  function moveEndPage() {
    pagenumber = maxpages;
    page.textContent = maxpages;
    disabledRight();
    activeLeft();
  }

  next.addEventListener("click", increase);
  prev.addEventListener("click", decrease);
  start.addEventListener("click", moveStartPage);
  end.addEventListener("click", moveEndPage);
}

export default navigation;
