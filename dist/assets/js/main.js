(()=>{function w(e,r,n){function a(){let i=document.getElementById("header").clientHeight,u=document.getElementById(n),f=u.getBoundingClientRect().top+window.scrollY,m=u.getBoundingClientRect().top,c=document.getElementById(e),l=window.innerHeight*.35+i,o=f-l,v=f-i,d=document.getElementById(r);d.classList.add("fadeout"),window.matchMedia("(min-width:1024px)").matches?(window.scrollY>=o?(c.classList.remove("fadeOut"),c.classList.add("fadeIn")):(c.classList.add("fadeOut"),c.classList.remove("fadeIn")),window.scrollY===0?(d.classList.remove("fadeOut"),d.classList.add("fadeIn")):(d.classList.add("fadeOut"),d.classList.remove("fadeIn"))):(c.classList.remove("fadeIn"),c.style.top="")}window.addEventListener("scroll",a),window.addEventListener("resize",a),window.addEventListener("orientationchange",a)}var p=document.getElementById("button__header-sp"),h=document.getElementById("header__modal"),E=document.getElementById("button__header-labelsp");function b(){p.addEventListener("click",function(e){e.preventDefault(),p.classList.toggle("is-checked"),h.classList.toggle("is-checked"),E.classList.toggle("is-checked"),h.classList.contains("is-checked")?document.body.style.overflow="hidden":document.body.style.overflow=""}),document.querySelectorAll("#header__modal a").forEach(function(e){e.addEventListener("click",function(){p.classList.remove("is-checked"),h.classList.remove("is-checked"),E.classList.remove("is-checked"),document.body.style.overflow=""})}),window.addEventListener("resize",L)}function L(){window.innerWidth>1024&&(p.classList.remove("is-checked"),h.classList.remove("is-checked"),E.classList.remove("is-checked"),document.body.style.overflow="")}function x(){window.location.pathname==="/contact/thanks/"&&setTimeout(function(){window.location.href="/"},5*1e3)}function y(e,r=2e3){let n=Number(e.getAttribute("data-num"));if(!n)return;let a;function i(m){a||(a=m);let c=m-a,l=Math.min(c/r,1),o=Math.floor(l*n);Number.isInteger(n)?e.innerHTML=o:e.innerHTML=`${o}.${Math.floor(Math.random()*9)}`,o<n?requestAnimationFrame(i):e.innerHTML=n}let u={rootMargin:"0px 0px -200px 0px",threshold:.1},f=new IntersectionObserver(m=>{m.forEach(c=>{c.isIntersecting&&(requestAnimationFrame(i),f.disconnect())})},u);f.observe(e)}function k(e,r){let n=document.getElementById("contact-comment"),a=document.getElementById("js-currentLetters"),i=2e3;n&&n.addEventListener("input",function(){n.value.length>i&&(n.value=n.value.substring(0,i));let u=i-n.value.length;a.innerHTML=u})}function S(e,r){e.checked===!0?r.disabled=!1:r.disabled=!0}function A(){let e=document.getElementById("contact__agree"),r=document.getElementById("button__submit");e&&e.addEventListener("click",()=>{S(e,r)})}function q(e){let r="error",n="errorwrapper",a=e.querySelectorAll(".required"),i=e.querySelectorAll(".email"),u=e.querySelectorAll(".tel"),f=e.querySelectorAll(".maxlength"),m=e.querySelectorAll(".kana"),c=e.querySelectorAll(".nameJp"),l=(o,v)=>{let d=document.createElement("p");d.classList.add(r),d.setAttribute("aria-live","polite"),d.textContent=v,o.parentNode.appendChild(d),o.parentNode.tagName.toLowerCase()==="div"&&o.parentNode.classList.add(n)};e.addEventListener("submit",o=>{e.querySelectorAll("."+r).forEach(t=>{t.remove()}),e.querySelectorAll("."+n).forEach(t=>{t.classList.remove(n)}),a.forEach(t=>{t.value.trim().length===0&&(l(t,"\u5165\u529B\u306F\u5FC5\u9808\u3067\u3059"),o.preventDefault())}),i.forEach(t=>{let s=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;t.value!==""&&(s.test(t.value)||(l(t,"Email \u30A2\u30C9\u30EC\u30B9\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u306A\u3044\u3088\u3046\u3067\u3059\u3002"),o.preventDefault()))}),u.forEach(t=>{let s=/^[0-9]{10,11}$/;t.value!==""&&(s.test(t.value)||(l(t,"\u96FB\u8A71\u756A\u53F7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u306A\u3044\u3088\u3046\u3067\u3059\u3002"),o.preventDefault()))}),c.forEach(t=>{let s=/^[a-zA-Zａ-ｚＡ-Ｚぁ-んァ-ヶー一-龠々\s\u{F900}-\u{FAFF}]*$/u;t.value!==""&&(s.test(t.value)||(l(t,"\u7121\u52B9\u306A\u6587\u5B57\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059"),o.preventDefault()))}),m.forEach(t=>{let s=/^[ア-ンヴ゛゜ァ-ォャ-ョー]+$/u;t.value!==""&&(s.test(t.value)||(l(t,"\u5168\u89D2\u30AB\u30CA\u3067\u3054\u5165\u529B\u304F\u3060\u3055\u3044"),o.preventDefault()))}),f.forEach(t=>{let s=t.dataset.maxlength;t.value!==""&&t.value.length>s&&(l(t,s+"\u6587\u5B57\u4EE5\u5185\u3067\u3054\u5165\u529B\u304F\u3060\u3055\u3044"),o.preventDefault())}),maxlength.forEach(t=>{let s=t.dataset.maxlength;t.value!==""&&t.value.length>s&&(l(t,s+"\u6587\u5B57\u4EE5\u5185\u3067\u3054\u5165\u529B\u304F\u3060\u3055\u3044"),o.preventDefault())});let g=e.querySelector("."+r);if(g){let t=g.offsetTop;window.scrollTo({top:t-40,behavior:"smooth"})}})}function I(){document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".js-contactForm");e&&q(e)})}window.location.pathname==="/"&&w("fixLetters","js-homeScroll","js-aboutHight");b();L();x();var B=document.querySelectorAll(".number");B.forEach(e=>{y(e)});k();A();I();})();
