import hamburger from "./modules/hamburger.js";
import navigation from "./modules/navigation_ourpets.js";
import pagination from "./modules/pagination.js";

window.addEventListener("DOMContentLoaded", function () {
  pagination();
  navigation();
  hamburger();
});
