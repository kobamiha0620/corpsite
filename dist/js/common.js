(() => {
  // src/js/module/topFv.js
  function addStickyScrollListener(targetId, fixedId, offset = 180) {
    window.addEventListener("scroll", () => {
      const targetElement = document.getElementById(targetId);
      const fixedElement = document.getElementById(fixedId);
      const targetElementRect = targetElement.getBoundingClientRect();
      const point = targetElementRect.top + offset;
      if (window.scrollY >= point) {
        fixedElement.classList.add("sticky");
      } else {
        fixedElement.classList.remove("sticky");
      }
    });
  }
  addStickyScrollListener("home__aboutus", "js-homefeature");

  // src/js/module/drawer.js
  var drawerIcon = document.getElementById("button__header-sp");
  var drawerContent = document.getElementById("header__modal");
  var btnlabel = document.getElementById("button__header-labelsp");
  function setupDrawer() {
    drawerIcon.addEventListener("click", function(e) {
      e.preventDefault();
      drawerIcon.classList.toggle("is-checked");
      drawerContent.classList.toggle("is-checked");
      btnlabel.classList.toggle("is-checked");
      if (drawerContent.classList.contains("is-checked")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
    document.querySelectorAll("#header__modal a").forEach(function(link) {
      link.addEventListener("click", function() {
        drawerIcon.classList.remove("is-checked");
        drawerContent.classList.remove("is-checked");
        btnlabel.classList.remove("is-checked");
        document.body.style.overflow = "";
      });
    });
  }

  // src/js/index.js
  addStickyScrollListener("home__aboutus", "js-homefeature");
  setupDrawer();
})();
//# sourceMappingURL=common.js.map
