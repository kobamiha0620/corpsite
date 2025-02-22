export function addStickyScrollListener(fixedId, scroll, toFixPoint) {

    function calculatePositions() {
      const headerH = document.getElementById('header').clientHeight;
      const toFixPointElement = document.getElementById(toFixPoint);
      const toFixPoiniMadeFix = toFixPointElement.getBoundingClientRect().top + window.scrollY;
      const toFixPoiniMade = toFixPointElement.getBoundingClientRect().top; //Aboutのテキストまでの位置
      const fixLettersElement = document.getElementById(fixedId); //固定するテキスト
      const topPoint = (window.innerHeight * 0.35) + headerH; //

      const keisan = toFixPoiniMadeFix - topPoint;
      const absolute = toFixPoiniMadeFix - headerH;
      const scrollElement = document.getElementById(scroll);
      scrollElement.classList.add('fadeout');


      if (window.matchMedia('(min-width:1024px)').matches) {
        if (window.scrollY >= keisan) {
          fixLettersElement.classList.remove('fadeOut');
          fixLettersElement.classList.add('fadeIn');
        } else {
          fixLettersElement.classList.add('fadeOut');
          fixLettersElement.classList.remove('fadeIn');
        }

        if (window.scrollY === 0) {
          scrollElement.classList.remove('fadeOut');
          scrollElement.classList.add('fadeIn');
        } else {
          scrollElement.classList.add('fadeOut');
          scrollElement.classList.remove('fadeIn');
        }
      } else {
        fixLettersElement.classList.remove('fadeIn');
        fixLettersElement.style.top = '';
      }


    }
  
  window.addEventListener('scroll', calculatePositions);
  window.addEventListener('resize', calculatePositions);
  window.addEventListener('orientationchange', calculatePositions);

}