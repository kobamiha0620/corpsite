(()=>{var o=document.getElementById("button__header-sp"),s=document.getElementById("header__modal"),r=document.getElementById("button__header-labelsp");function d(){o.addEventListener("click",function(e){e.preventDefault(),o.classList.toggle("is-checked"),s.classList.toggle("is-checked"),r.classList.toggle("is-checked"),s.classList.contains("is-checked")?document.body.style.overflow="hidden":document.body.style.overflow=""}),document.querySelectorAll("#header__modal a").forEach(function(e){e.addEventListener("click",function(){o.classList.remove("is-checked"),s.classList.remove("is-checked"),r.classList.remove("is-checked"),document.body.style.overflow=""})})}function l(e,t){let n=document.getElementById("contact-comment"),u=document.getElementById("js-currentLetters"),c=2e3;n.addEventListener("input",function(){n.value.length>c&&(n.value=n.value.substring(0,c));let a=c-n.value.length;u.innerHTML=a})}function m(e,t){e.checked===!0?t.disabled=!1:t.disabled=!0}function i(){let e=document.getElementById("contact__agree"),t=document.getElementById("button__submit");e.addEventListener("click",()=>{m(e,t)})}d();l();i();})();
//# sourceMappingURL=contact.js.map