(()=>{function l(e,m,u){window.addEventListener("scroll",()=>{let s=document.getElementById("header").clientHeight,i=document.getElementById(u),d=i.getBoundingClientRect().top+window.scrollY,L=i.getBoundingClientRect().top,o=document.getElementById(e),f=window.innerHeight*.35+s,h=d-f,w=d-s,g=window.innerHeight*.35+s,t=document.getElementById(m);t.classList.add("fadeout"),window.matchMedia("(min-width:1024px)").matches&&(window.scrollY>=h?(o.classList.add("sticky"),o.style.top=w+"px"):(o.classList.remove("sticky"),o.style.top=g+"px"),window.scrollY===0?(t.classList.remove("fadeOut"),t.classList.add("fadeIn")):(t.classList.add("fadeOut"),t.classList.remove("fadeIn")))})}var n=document.getElementById("button__header-sp"),c=document.getElementById("header__modal"),a=document.getElementById("button__header-labelsp");function r(){n.addEventListener("click",function(e){e.preventDefault(),n.classList.toggle("is-checked"),c.classList.toggle("is-checked"),a.classList.toggle("is-checked"),c.classList.contains("is-checked")?document.body.style.overflow="hidden":document.body.style.overflow=""}),document.querySelectorAll("#header__modal a").forEach(function(e){e.addEventListener("click",function(){n.classList.remove("is-checked"),c.classList.remove("is-checked"),a.classList.remove("is-checked"),document.body.style.overflow=""})})}l("fixLetters","js-homeScroll","js-aboutHight");r();})();
//# sourceMappingURL=home.js.map
