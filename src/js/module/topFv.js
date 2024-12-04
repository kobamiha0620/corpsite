export function addStickyScrollListener(targetId, fixedId) {
  window.addEventListener('scroll', () => {
    const headerH = document.getElementById('header').clientHeight;
    const targetElement = document.getElementById(targetId);
    const fixedElement = document.getElementById(fixedId);
    const fixedElementHigh = fixedElement.clientHeight;
    const offset0 = ( window.innerHeight -fixedElementHigh) / 2 ;
    const offset = (( window.innerHeight -fixedElementHigh) / 2 ) + headerH;
    const targetElementRect = targetElement.getBoundingClientRect();
    const point = targetElementRect.top + offset;


    if (window.scrollY >= point) {
      fixedElement.classList.add('sticky');
    } else {
      fixedElement.classList.remove('sticky');
    }
  });
}

