var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequiree1c8;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequiree1c8=a);var i=a("4ukh0"),o=a("edlQ8");const r=document.getElementById("watched-movies--btn"),s=document.getElementById("queue-movies--btn"),l=document.getElementById("movies-container"),c=document.querySelector(".pagination__page");let d=1,p=1;r.addEventListener("click",(function(){r.classList.add("current--btn"),s.classList.remove("current--btn");const e=JSON.parse(localStorage.getItem("watchedList"));const t=e.map((e=>fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${i.API_KEY}&language=en`).then((e=>e.json()))));function n(n){let a="";Promise.all(t).then((t=>{const i=e.length;p=(e=>e>=20?Math.ceil(e/20):1)(i);const r=(0,o.generatePages)(n,p);c.innerHTML=r;const s=1===n?0:20*(n-1),d=Math.min(20*n,t.length);for(let e=s;e<d;e++){const n=t[e];""===n.release_date&&(n.release_date="Sin año registrado");const i=`${"https://image.tmdb.org/t/p/"}w500${n.poster_path}`,o=n.genres.map((e=>e.name)).join(" | "),r=`\n            <div class="photo-card">\n              <div class="info">\n                <a onclick="openModal('${n.id}')" class="info__poster">\n                  <img class="info__poster--img" src="${i}" alt="${n.title}" loading="lazy" width="100px" height="100px" id="info__poster--img" />\n                </a>\n                <h3 class="info__title">\n                  <strong class="title">${n.title}</strong>\n                </h3>\n                <p class="info__genre">\n                  ${o} | ${new Date(n.release_date).getFullYear()}\n                </p>\n                <p class="info-item"></p>\n              </div>\n            </div>\n          `;a+=r}l.innerHTML=a})).catch((e=>console.error(e)))}function a(){document.getElementById("current-page").innerText=d}n(1),c.addEventListener("click",(function(e){if("LI"===e.target.tagName){const t=e.target.innerText,a=parseInt(t);"..."===t||(d=a,e.stopPropagation(),n(d))}})),document.getElementById("library__prev-page").addEventListener("click",(async()=>{d>1&&(d--,await n(parseInt(d)),a())})),document.getElementById("library__next-page").addEventListener("click",(async()=>{d<p&&(d++,await n(parseInt(d)),a(parseInt(d)))}))}));
//# sourceMappingURL=myLibrary.54a4105b.js.map
