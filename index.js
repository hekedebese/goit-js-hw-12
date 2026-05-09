import{a as b,S as L,i}from"./assets/vendor-BAQQTdrx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const w="https://pixabay.com/api/",v="55672071-de73ab20c9a46d751cd90c1a4",u=15;async function f(s,t=1){try{const{data:e}=await b.get(w,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:u}});return console.log(e),e}catch(e){console.log(e.message)}}const h=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".second-fetch"),S=new L(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const t=s.map(e=>`
        <li class="card">
        <a href='${e.largeImageURL}'>
        <img src='${e.webformatURL}' 
        alt='${e.tags}'
        />
        </a>

        <div class="gallery-info">
            <p><b>Likes</b><br>${e.likes}</p>
            <p><b>Views</b><br>${e.views}</p>
            <p><b>Comments</b><br>${e.comments}</p>
            <p><b>Downloads</b><br>${e.downloads}</p>
          </div>
        </li>
        `).join("");h.insertAdjacentHTML("beforeend",t),S.refresh()}function q(){h.innerHTML=""}function B(){p.classList.remove("hidden")}function M(){p.classList.add("hidden")}function $(){m.classList.remove("hidden")}function l(){m.classList.add("hidden")}const P=document.querySelector(".form"),d=document.querySelector(".second-fetch");let a=1,g="";P.addEventListener("submit",O);d.addEventListener("click",_);async function O(s){s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(a=1,!t){i.error({message:"Please enter a search query!"});return}q(),l(),B();try{const e=await f(t,a),n=Math.ceil(e.totalHits/u);if(e.hits.length===0){i.error({message:"Something went wrong. Please try again later!"});return}y(e.hits),a<n?$():l()}catch(e){console.log(e.message)}finally{s.target.reset(),M(),g=t}}async function _(s){a++,d.disabled=!0;try{const t=await f(g,a),e=Math.ceil(t.totalHits/u),n=document.querySelector(".card").getBoundingClientRect().height;y(t.hits),window.scrollBy({left:0,top:n,behavior:"smooth"}),a>=e&&(l(),i.error({message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t.message)}finally{d.disabled=!1}}
//# sourceMappingURL=index.js.map
