import{a as S,S as v,i as c}from"./assets/vendor-BAQQTdrx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const q="https://pixabay.com/api/",P="55672071-de73ab20c9a46d751cd90c1a4",u=15;async function f(s,t=1){try{const{data:e}=await S.get(q,{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:u}});return console.log(e),e}catch(e){console.log(e.message)}}const h=document.querySelector(".gallery"),g=document.querySelector(".loader"),m=document.querySelector(".second-fetch"),B=new v(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const t=s.map(e=>`
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
        `).join("");h.insertAdjacentHTML("beforeend",t),B.refresh()}function M(){h.innerHTML=""}function y(){g.classList.remove("hidden")}function b(){g.classList.add("hidden")}function L(){m.classList.remove("hidden")}function i(){m.classList.add("hidden")}const $=document.querySelector(".form"),d=document.querySelector(".second-fetch");let a=1,w="";$.addEventListener("submit",O);d.addEventListener("click",_);async function O(s){s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(a=1,!t){c.error({message:"Please enter a search query!"});return}M(),i(),y();try{const e=await f(t,a),n=Math.ceil(e.totalHits/u);if(e.hits.length===0){c.error({message:"Something went wrong. Please try again later!"});return}p(e.hits),a<n?L():i()}catch(e){console.log(e.message),c.error({message:"Something went wrong. Please try again later!"})}finally{s.target.reset(),b(),w=t}}async function _(s){a++,d.disabled=!0,y(),i();try{const t=await f(w,a),e=Math.ceil(t.totalHits/u),n=document.querySelector(".card").getBoundingClientRect().height;p(t.hits),window.scrollBy({left:0,top:n*2,behavior:"smooth"}),a<e?L():(i(),c.error({message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t.message),c.error({message:"Something went wrong. Please try again later!"})}finally{d.disabled=!1,b()}}
//# sourceMappingURL=index.js.map
