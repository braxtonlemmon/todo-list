!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r={projects:["default","grocery shop","clean house"],items:{0:[{title:"wash hair"},{title:"call john"}],1:[{title:"5 eggs"},{title:"500g potatoes"},{title:"400g crushed tomatoes"}],2:[{title:"sweep kitchen"},{title:"clean windows"},{title:"start laundry"}]}},o=(()=>{const e=document.querySelector(".main"),t=document.createElement("div");let n=0;const o=()=>{t.classList.add("projects-column"),e.appendChild(t)},l=()=>{r.projects.forEach(e=>c(e))},c=e=>{const r=document.createElement("div");r.textContent=e,r.classList.add("column-btn"),r.dataset.id=n++,t.appendChild(r)};return{render:()=>{o(),l(),t.firstElementChild.classList.add("column-btn-selected")}}})(),l=(()=>{const e=document.querySelector(".main"),t=document.createElement("div"),n=document.createElement("ul"),o=()=>{n.classList.add("list"),t.classList.add("list-box"),t.appendChild(n),e.appendChild(t)},l=e=>{r.items[e].forEach(e=>c(e))},c=e=>{const t=document.createElement("li");t.textContent=e.title,t.classList.add("list-item"),n.appendChild(t)},d=()=>{for(;n.childElementCount>0;)n.removeChild(n.lastElementChild)};return{render:e=>{d(),o(),l(e)}}})();(o.render(),l.render(0),{render:()=>{const e=document.querySelector(".new-button"),t=document.querySelectorAll(".column-btn");e.addEventListener("click",()=>{console.log("new")}),t.forEach(e=>{e.addEventListener("click",()=>{t.forEach(e=>e.classList.remove("column-btn-selected")),e.classList.add("column-btn-selected");const n=e.dataset.id;l.render(n)})})}}).render()}]);