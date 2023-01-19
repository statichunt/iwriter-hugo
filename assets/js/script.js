// main script
(function () {
  "use strict";

  // Preloader
  window.addEventListener("load", function () {
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function () {
      document.querySelector(".preloader").style.display = "none";
    }, 350);
  });
})();
