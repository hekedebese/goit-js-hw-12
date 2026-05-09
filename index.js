import{a as v,S,i as n}from"./assets/vendor-BAQQTdrx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const q="https://pixabay.com/api/",P="55672071-de73ab20c9a46d751cd90c1a4",u=15;async function f(s,t=1){try{const{data:e}=await v.get(q,{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:u}});return console.log(e),e}catch(e){console.log(e.message)}}const h=document.querySelector(".gallery"),g=document.querySelector(".loader"),m=document.querySelector(".second-fetch"),B=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const t=s.map(e=>`
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
        `).join("");h.insertAdjacentHTML("beforeend",t),B.refresh()}function M(){h.innerHTML=""}function p(){g.classList.remove("hidden")}function b(){g.classList.add("hidden")}function L(){m.classList.remove("hidden")}function i(){m.classList.add("hidden")}const $=document.querySelector(".form"),d=document.querySelector(".second-fetch");let c=1,w="";$.addEventListener("submit",O);d.addEventListener("click",_);async function O(s){s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(c=1,!t){n.error({message:"Please enter a search query!"});return}M(),i(),p();try{const e=await f(t,c),a=Math.ceil(e.totalHits/u);if(e.hits.length===0){n.error({message:"Something went wrong. Please try again later!"});return}y(e.hits),c<a?L():(i(),n.error({message:"We're sorry, but you've reached the end of search results."}))}catch(e){console.log(e.message),n.error({message:"Something went wrong. Please try again later!"})}finally{s.target.reset(),b(),w=t}}async function _(s){c++,d.disabled=!0,p(),i();try{const t=await f(w,c),e=Math.ceil(t.totalHits/u),a=document.querySelector(".card").getBoundingClientRect().height;y(t.hits),window.scrollBy({left:0,top:a*2,behavior:"smooth"}),c<e?L():(i(),n.error({message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t.message),n.error({message:"Something went wrong. Please try again later!"})}finally{d.disabled=!1,b()}}
//# sourceMappingURL=index.js.map
