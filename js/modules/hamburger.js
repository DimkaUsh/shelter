function hamburger() {
  const body = document.querySelector("body");
  const hamburger = document.querySelector(".hamburger-header");
  const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const title = hamburgerWrapper.querySelector(".title");
  const subTitle = hamburgerWrapper.querySelector(".header__subtitle");
  const headerPets = document.querySelector(".header_pets");

  function openBurger() {
    body.classList.add("body_open");
    hamburgerWrapper.classList.add("hamburger-wrapper_open");
    hamburgerMenu.classList.add("hamburger-menu_open");
    hamburger.classList.add("hamburger_active");
    title.classList.add("visible");
    subTitle.classList.add("visible");
    hamburger.removeEventListener("click", openBurger);
    hamburger.addEventListener("click", closeBurger);
    headerPets.classList.add("statik");
  }

  function closeBurger() {
    body.classList.toggle("body_open");
    hamburgerMenu.classList.toggle("hamburger-menu_open");
    hamburger.classList.remove("hamburger_active");
    title.classList.toggle("visible");
    subTitle.classList.toggle("visible");

    setTimeout(
      hamburgerWrapper.classList.toggle("hamburger-wrapper_open"),
      500
    );
    hamburger.addEventListener("click", openBurger);
    hamburger.removeEventListener("click", closeBurger);
    setTimeout(headerPets.classList.toggle("statik"), 1000);
  }

  hamburger.addEventListener("click", openBurger);

  hamburgerWrapper.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("hamburger-wrapper") ||
      e.target.classList.contains("menu-link") ||
      e.target.parentNode.classList.contains("header__logo")
    ) {
      closeBurger();
    }
  });
}

export default hamburger;
