const btnEl=document.querySelector(".btn-mobile-nav"),headerEl=document.querySelector(".header"),nav=document.querySelector(".main-nav");btnEl.addEventListener("click",(function(){headerEl.classList.toggle("nav-open")}));const allLinks=document.querySelectorAll("a");console.log(allLinks),allLinks.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href");if("#"===o&&window.scrollTo({top:0,behavior:"smooth"}),"#"!==o&&o.startsWith("#")){document.querySelector(o).scrollIntoView({behavior:"smooth"})}e.classList.contains("main-nav-link")&&headerEl.classList.toggle("nav-open")}))}));const sectionHero=document.querySelector(".section-hero"),obs=new IntersectionObserver((function(e){const t=e[0];!1===t.isIntersecting&&document.body.classList.add("sticky"),!0===t.isIntersecting&&document.body.classList.remove("sticky")}),{root:null,threshold:0,rootMargin:"-80px"});obs.observe(sectionHero);
//# sourceMappingURL=index.js.map