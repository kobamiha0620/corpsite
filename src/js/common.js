// スクロールイベントを監視
window.addEventListener('scroll', () => {
  const targetElement = document.getElementById('home__aboutus');
  const fixedElement = document.getElementById('js-homefeature');
  // const fixedElementRect = fixedElement.getBoundingClientRect();
  const targetElementRect = targetElement.getBoundingClientRect();
  const point = targetElementRect.top + 180;


  if (window.scrollY >= point) { // 修正: スクロール位置を基準に
    fixedElement.classList.add('sticky');
  } else {
    fixedElement.classList.remove('sticky');
  }
});


// ドロワーアイコンのクリックイベントを設定
const drawerIcon = document.getElementById("button__header-sp");
const drawerContent = document.getElementById("header__modal");
const btnlabel = document.getElementById("button__header-labelsp");


drawerIcon.addEventListener("click", function (e) {
  e.preventDefault();
  drawerIcon.classList.toggle("is-checked");
  drawerContent.classList.toggle("is-checked");
  btnlabel.classList.toggle("is-checked");

  if (drawerContent.classList.contains("is-checked")) {
    // メニューが開いている間はスクロールを無効にする
    document.body.style.overflow = "hidden";

  } else {
    // メニューが閉じたらスクロールを有効にする
    document.body.style.overflow = "";

  }
});

document.querySelectorAll("#header__modal a").forEach(function (link) {
  link.addEventListener("click", function () {
    drawerIcon.classList.remove("is-checked");
    drawerContent.classList.remove("is-checked");
    btnlabel.classList.remove("is-checked");

    document.body.style.overflow = "";

  });
});

