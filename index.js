import{S as u,a as m,i as c}from"./assets/vendor-BHIBSaoF.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function p(){document.querySelectorAll(".gallery-item").forEach((o,i)=>{o.querySelector("img").addEventListener("load",()=>{setTimeout(()=>{o.classList.add("visible")},i*100)})})}let n=new u(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionPosition:"bottom",captionDelay:250});function f(a){const o=a.map(e=>`<div class="gallery-item">
                  <a class="gallery-link" href="${e.largeImageURL}">
                    <img class="gallery-image" src="${e.webformatURL}" data-source="${e.largeImageURL}" alt="${e.tags}" />
                    <div class="gallery-textBox">
                        <div>
                            <p>Likes</p>
                            <p>${e.likes}</p>
                        </div>
                        <div>
                            <p>Views</p>
                            <p>${e.views}</p>
                        </div>
                        <div>
                            <p>Comments</p>
                            <p>${e.comments}</p>
                        </div>
                        <div>
                            <p>Downloads</p>
                            <p>${e.downloads}</p>
                        </div>
                    </div>
                  </a>
                </div>`).join(""),i=document.getElementById("gallery");i&&i.insertAdjacentHTML("beforeend",o),p(),n?n.refresh():n=new u(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionPosition:"bottom",captionDelay:250})}function g(){gallery.innerHTML=""}function y(){document.getElementById("loader").classList.remove("hidden")}function l(){document.getElementById("loader").classList.add("hidden")}let h="18618260-23b6d79f5c2a85fb2d6c9be6b";function v(a){let o=`https://pixabay.com/api/?key=${h}&q=${encodeURIComponent(a)}&lang=ru&image_type=photo&orientation=horizontal&safesearch=true`;m.get(o).then(i=>{const e=i.data;if(e.hits.length===0){c.error({icon:"fa-solid fa-xmark",iconColor:"white",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"white",position:"center",timeout:5e3,progressBar:!0,backgroundColor:"red"}),l();return}f(e.hits),l()}).catch(i=>{c.error({title:"Attention",icon:"fa-solid fa-xmark",iconColor:"white",message:i.message,messageColor:"white",position:"center",timeout:5e3,progressBar:!0,backgroundColor:"red"}),l()})}c.success({title:"Внимание!",message:"Мы готовы к работе !",position:"topRight"});const d=document.querySelector(".form");d.addEventListener("submit",async a=>{a.preventDefault(),y();const o=d.elements["search-text"].value.trim();g(),o&&v(o)});
//# sourceMappingURL=index.js.map
