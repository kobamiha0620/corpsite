(()=>{var t=document.getElementById("button__header-sp"),c=document.getElementById("header__modal"),s=document.getElementById("button__header-labelsp");function o(){t.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("is-checked"),c.classList.toggle("is-checked"),s.classList.toggle("is-checked"),c.classList.contains("is-checked")?document.body.style.overflow="hidden":document.body.style.overflow=""}),document.querySelectorAll("#header__modal a").forEach(function(e){e.addEventListener("click",function(){t.classList.remove("is-checked"),c.classList.remove("is-checked"),s.classList.remove("is-checked"),document.body.style.overflow=""})})}o();})();
//# sourceMappingURL=index.js.map