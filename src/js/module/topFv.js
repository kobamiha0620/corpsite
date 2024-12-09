export function addStickyScrollListener(fixedId, scroll, toFixPoint) {

  window.addEventListener('scroll', () => {
    
    const headerH = document.getElementById('header').clientHeight;

    const toFixPointElement = document.getElementById(toFixPoint);
    const toFixPoiniMadeFix = toFixPointElement.getBoundingClientRect().top + window.scrollY;
    const toFixPoiniMade = toFixPointElement.getBoundingClientRect().top; //Aboutのテキストまでの位置
    // const targetElement = document.getElementById(targetId);
    const fixLettersElement = document.getElementById(fixedId); //固定するテキスト
    const featureNoIchi = (window.innerHeight * 0.35) + headerH; //

    const keisan = toFixPoiniMadeFix - featureNoIchi;
    const absolute = toFixPoiniMadeFix - headerH;
    //   const aboutH = targetElement.clientHeight;
    // const hightH = (aboutH - letterH) / 2;

    // const bakaH = letterH;
    // // home__aboutusまでの距離]
    // const targetElementRect = targetElement.getBoundingClientRect();
    // const distanceToTargeH = targetElementRect.top; // targetElementまでの距離を計算
    // const distanceToTargeHtop =  targetElementRect.top + window.scrollY;
    // const absoluteTop = distanceToTargeHtop + ((aboutH + bakaH) / 2);


    // const fixedElementHigh = fixedElement.clientHeight + hightH;
    // const offset = (( window.innerHeight - fixedElementHigh ) / 2 );
    // const point = targetElementRect.top + offset;
    const topPoint =(window.innerHeight * 0.35) + headerH;
    const scrollElement = document.getElementById(scroll);
    // const triggerHeight = window.innerHeight; // 1画面分の高さ
    // const test = document.getElementById('js-test');
    // const toTest = test.getBoundingClientRect().top + window.scrollY;
    // const toTest2 = test.getBoundingClientRect().top;
    // const distanceToTarget = window.innerHeight + (distanceToTargeH + (bakaH / 2)); // targetElementまでの距離を計算

    scrollElement.classList.add('fadeout');
    // console.log(toFixPoiniMade);
    // console.log('FVの位置 :' + featureNoIchi);
    // console.log('offset :' + offset);
    // console.log('stickyPoint :' + stickyPoint);
    // console.log('topPoint :' + topPoint);
    // console.log('スクロール量' + window.scrollY);
    // console.log('計算' + keisan);
    // console.log('fixedElementHigh ' + fixedElementHigh);
    // console.log('ウインドウの高さ ' + window.innerHeight);
    if (window.matchMedia('(min-width:1024px)').matches) {

    if (window.scrollY >= keisan) {
      fixLettersElement.classList.add('sticky');
      fixLettersElement.style.top = (absolute + 'px');
    } else {
      fixLettersElement.classList.remove('sticky');
      fixLettersElement.style.top = (topPoint + 'px');
    }

    if (window.scrollY === 0) {
      scrollElement.classList.remove('fadeOut');
      scrollElement.classList.add('fadeIn');
    }else{  
      scrollElement.classList.add('fadeOut');
      scrollElement.classList.remove('fadeIn');
    }
  } 
  });
} 



//  PCのみの処理
