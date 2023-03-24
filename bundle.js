(()=>{"use strict";const e="afterbegin",t="beforeend",i="rz0r-save",n="rz0r-results",a=(i,n,a="beforeend")=>{const s=i instanceof w?i.element:i,r=n instanceof w?n.element:n;switch(a){case"beforebegin":s.before(r);break;case e:s.prepend(r);break;case t:s.append(r);break;case"afterend":s.after(r)}},s=(e,t)=>{if(null===e||null===t)throw new Error("Can't replace unexisting elements");const i=e instanceof w?e.element:e,n=t instanceof w?t.element:t,a=n.parentElement;if(null===a)throw new Error("Parent element doesn't exist");a.replaceChild(i,n)},r=e=>{const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},l=e=>{if(null!==e){if(!(e instanceof w))throw new Error("Can remove only components");e.element.remove(),e.removeElement()}};function o(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,u(e,t,"set"),i),i}function h(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,u(e,t,"get"))}function u(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var c=new WeakMap;class p{constructor(){var e,t;if(function(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}(this,c,{writable:!0,value:null}),t={},(e="_callback")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t,new.target===p)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return h(this,c)||o(this,c,r(this.template)),h(this,c)}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){o(this,c,null)}}const w=p;function v(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const d=class extends w{constructor(...e){super(...e),v(this,"getHeaderTopElement",(()=>this.element.querySelector(".header__top"))),v(this,"getHeaderBottomElement",(()=>this.element.querySelector(".header__bottom")))}get template(){return'<header class="header">\n\t\t<div class="header__top"></div>\n\t\t<div class="header__bottom"></div>\n\t</header>'}};var f=new WeakMap;const b=class extends w{constructor(...e){var t,i;super(...e),i=e=>{var t,i;this._callback.btnClick=e,this.element.addEventListener("click",(i=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(t=this,f),function(e,t){return t.get?t.get.call(e):t.value}(t,i)))},(t="setNewGameBtnClickHandler")in this?Object.defineProperty(this,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[t]=i,function(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}(this,f,{writable:!0,value:e=>{this._callback.btnClick(e)}})}get template(){return'<button class="header__new-game-btn btn">New Game</button>'}};function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var g=new WeakMap;const y=class extends w{constructor(e){var t,i,n;super(),m(this,"setSelectorValue",(e=>{this.element.value=e})),m(this,"setSelectorChangeHandler",(e=>{var t,i;this._callback.selectorChange=e,this.element.addEventListener("change",(i=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(t=this,g),function(e,t){return t.get?t.get.call(e):t.value}(t,i)))})),n={writable:!0,value:e=>{const t=e.currentTarget.value;this._callback.selectorChange(t)}},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t=this,i=g),i.set(t,n),this.setSelectorValue(e)}get template(){return'<select class="header__size size">\n\t\t<option value="3">3x3</option>\n\t\t<option value="4">4x4</option>\n\t\t<option value="5">5x5</option>\n\t\t<option value="6">6x6</option>\n\t\t<option value="7">7x7</option>\n\t\t<option value="8">8x8</option>\n\t</select>'}};var k=new WeakMap;const M=class extends w{constructor(...e){var t,i;super(...e),i=e=>{var t,i;this._callback.btnClick=e,this.element.addEventListener("click",(i=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(t=this,k),function(e,t){return t.get?t.get.call(e):t.value}(t,i)))},(t="setSaveBtnClickHandler")in this?Object.defineProperty(this,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[t]=i,function(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}(this,k,{writable:!0,value:e=>{this._callback.btnClick(e)}})}get template(){return'<button class="header__save-btn btn">Save</button>'}};var W=new WeakMap;const E=class extends w{constructor(...e){var t,i;super(...e),i=e=>{var t,i;this._callback.btnClick=e,this.element.addEventListener("click",(i=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(t=this,W),function(e,t){return t.get?t.get.call(e):t.value}(t,i)))},(t="setLoadBtnClickHandler")in this?Object.defineProperty(this,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[t]=i,function(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}(this,W,{writable:!0,value:e=>{this._callback.btnClick(e)}})}get template(){return'<button class="header__load-btn btn">Load</button>'}};var T=new WeakMap;const _=class extends w{constructor(...e){var t,i;super(...e),i=e=>{var t,i;this._callback.btnClick=e,this.element.addEventListener("click",(i=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(t=this,T),function(e,t){return t.get?t.get.call(e):t.value}(t,i)))},(t="setResultBtnClickHandler")in this?Object.defineProperty(this,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[t]=i,function(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}(this,T,{writable:!0,value:e=>{this._callback.btnClick(e)}})}get template(){return'<button class="header__result-btn btn">Results</button>'}};function C(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}function x(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,z(e,t,"get"))}function z(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var S=new WeakMap,j=new WeakMap;const P=class extends w{constructor(e){var t,i;super(),C(this,S,{writable:!0,value:!1}),i=e=>{this._callback.btnClick=e,this.element.addEventListener("click",x(this,j))},(t="setSoundClickHandler")in this?Object.defineProperty(this,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[t]=i,C(this,j,{writable:!0,value:e=>{this._callback.btnClick(e)}}),function(e,t,i){(function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}})(e,z(e,t,"set"),i)}(this,S,e)}get template(){return`<button class="header__sound-btn btn">\n\t\t${x(this,S)?'<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">\n\t\t<defs>\n\t\t\t<clipPath>\n\t\t\t\t<path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>\n\t\t\t\t<path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>\n\t\t\t\t<path d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z" transform="translate(0, 0)"></path>\n\t\t\t</clipPath>\n\t\t\t<clipPath>\n\t\t\t\t<path d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z" transform="translate(0, 0)"></path>\n\t\t\t</clipPath>\n\t\t</defs>\n\t\t<path\n\t\t\td="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z">\n\t\t</path>\n\t</svg>':'<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">\n\t\t<path\n\t\t\td="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z">\n\t\t</path>\n\t</svg>'}\n\t</button>`}};function O(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var H=new WeakMap;const L=class extends w{constructor(e){super(),function(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}(this,H,{writable:!0,value:0}),function(e,t,i){(function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}})(e,O(e,t,"set"),i)}(this,H,e)}get template(){return`<div class="header__moves moves">\n    <div class="moves__title">Moves:</div>\n    <div class="moves__count">${function(e,t){return t.get?t.get.call(e):t.value}(this,O(this,H,"get"))}</div>\n  </div>`}},$=e=>`${Math.floor(e/60%60).toString().padStart(2,0)}:${Math.floor(e%60).toString().padStart(2,0)}`;function B(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var N=new WeakMap;const J=class extends w{constructor(e){super(),function(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}(this,N,{writable:!0,value:0}),function(e,t,i){(function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}})(e,B(e,t,"set"),i)}(this,N,e)}get template(){return e=function(e,t){return t.get?t.get.call(e):t.value}(this,B(this,N,"get")),`<div class="header__time time">\n\t\t<div class="time__title">Time:</div>\n\t\t<div class="time__value">${$(e)}</div>\n\t</div>`;var e}};function D(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}function q(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,I(e,t,"get"))}function V(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,I(e,t,"set"),i),i}function I(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var R=new WeakMap,G=new WeakMap,Z=new WeakMap,A=new WeakMap,Y=new WeakMap,F=new WeakMap,K=new WeakMap,Q=new WeakMap,U=new WeakMap,X=new WeakMap,ee=new WeakMap,te=new WeakMap,ie=new WeakMap,ne=new WeakMap,ae=new WeakMap,se=new WeakMap,re=new WeakMap,le=new WeakMap,oe=new WeakMap,he=new WeakMap,ue=new WeakMap,ce=new WeakMap,pe=new WeakMap,we=new WeakMap,ve=new WeakMap,de=new WeakMap,fe=new WeakMap,be=new WeakMap,me=new WeakMap,ge=new WeakMap,ye=new WeakMap,ke=new WeakMap;function Me(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function We(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}function Ee(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,_e(e,t,"set"),i),i}function Te(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,_e(e,t,"get"))}function _e(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var Ce=new WeakMap,xe=new WeakMap,ze=new WeakMap,Se=new WeakMap,je=new WeakMap,Pe=new WeakMap;const Oe=class extends w{constructor(){super(),We(this,Ce,{writable:!0,value:!1}),Me(this,"getContentContainer",(()=>this.element.querySelector(".popup__wrapper"))),Me(this,"showPopup",(()=>{document.documentElement.classList.add("popup-active"),Ee(this,Ce,!0)})),We(this,xe,{writable:!0,value:()=>{this.element.addEventListener("click",Te(this,Se))}}),We(this,ze,{writable:!0,value:()=>{this.element.addEventListener("transitionend",Te(this,je))}}),We(this,Se,{writable:!0,value:e=>{(e.target.closest(".popup__overlay")||e.target.closest(".popup__close-btn"))&&Te(this,Pe).call(this)}}),We(this,je,{writable:!0,value:e=>{Te(this,Ce)||e.target.classList.contains("popup__overlay")&&this.getContentContainer().firstElementChild&&this.getContentContainer().firstElementChild.remove()}}),We(this,Pe,{writable:!0,value:()=>{document.documentElement.classList.remove("popup-active"),Ee(this,Ce,!1)}}),Te(this,xe).call(this),Te(this,ze).call(this)}get template(){return'<div class="popup">\n\t\t\t<div class="popup__overlay"></div>\n\t\t\t<div class="popup__content">\n\t\t\t\t<div class="popup__wrapper"></div>\n\t\t\t\t<button class="popup__close-btn"></button>\n\t\t\t</div>\n\t\t</div>'}};function He(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var Le=new WeakMap;const $e=class extends w{constructor(e,t){var i,n,a;super(),a={writable:!0,value:null},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(i=this,n=Le),n.set(i,a),function(e,t,i){(function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}})(e,He(e,t,"set"),i)}(this,Le,((e,t)=>`Hooray! You solved the puzzle in ${$(t)} and ${e}&nbsp;moves!`)(e,t))}get template(){return`<div class="win-message">${function(e,t){return t.get?t.get.call(e):t.value}(this,He(this,Le,"get"))}</div>`}};function Be(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}function Ne(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,De(e,t,"get"))}function Je(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,De(e,t,"set"),i),i}function De(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var qe=new WeakMap,Ve=new WeakMap;const Ie=class extends w{constructor(e,t){super(),Be(this,qe,{writable:!0,value:null}),Be(this,Ve,{writable:!0,value:null}),Je(this,qe,e),Je(this,Ve,t)}get template(){return((e,t)=>{const i=t.map((({time:e,moves:t},i)=>((e,t,i)=>`<div class="table-results__row">\n\t\t<div class="table-results__number">${e}</div>\n\t\t<div class="table-results__time">Time: <span>${$(t)}</span></div>\n\t\t<div class="table-results__moves">Moves: <span>${i}</span></div>\n\t</div>`)(i+1,e,t))).join("");let n="";return n=0===t.length?`There are no results for the ${e}x${e} field yet`:`Best results for the ${e}x${e} field`,`<div class="results">\n      <h2 class="results__title">Results</h2>\n      <h3 class="results__subtitle">${n}</h3>\n      <div class="results__table table-results">${i}</div>\n    </div>`})(Ne(this,qe),Ne(this,Ve))}};function Re(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Ge(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}function Ze(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Ye(e,t,"get"))}function Ae(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,Ye(e,t,"set"),i),i}function Ye(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var Fe=new WeakMap,Ke=new WeakMap,Qe=new WeakMap,Ue=new WeakMap;function Xe(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}function et(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,it(e,t,"get"))}function tt(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,it(e,t,"set"),i),i}function it(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var nt=new WeakMap,at=new WeakMap,st=new WeakMap,rt=new WeakMap,lt=new WeakMap,ot=new WeakMap,ht=new WeakMap;const ut=class extends w{constructor(e=3){super(),Xe(this,nt,{writable:!0,value:3}),Xe(this,at,{writable:!0,value:20}),Xe(this,st,{writable:!0,value:7.5}),Xe(this,rt,{writable:!0,value:2}),Xe(this,lt,{writable:!0,value:()=>{tt(this,at,76/et(this,nt)),this.element.style.setProperty("--cell-size",`${et(this,at)}vmin`)}}),Xe(this,ot,{writable:!0,value:()=>{tt(this,st,22.5/et(this,nt)),this.element.style.setProperty("--font-size",`${et(this,st)}vmin`)}}),Xe(this,ht,{writable:!0,value:()=>{tt(this,rt,6/et(this,nt)),this.element.style.setProperty("--cell-gap",`${et(this,rt)}vmin`)}}),tt(this,nt,e),this.size=et(this,nt)}get template(){return'<div class="board">\n\t</div>'}set size(e){tt(this,nt,e),this.element.style.setProperty("--grid-size",e),et(this,lt).call(this),et(this,ot).call(this),et(this,ht).call(this)}};function ct(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}function pt(e,t){var i=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,i)}var wt=new WeakMap,vt=new WeakMap,dt=new WeakMap;const ft=class extends w{constructor(){var e,t;super(),ct(this,wt,{writable:!0,value:()=>{this.element.addEventListener("dragover",pt(this,vt))}}),ct(this,vt,{writable:!0,value:e=>{e.preventDefault()}}),t=e=>{this._callback.cellDrop=e,this.element.addEventListener("drop",pt(this,dt))},(e="setCellDropHandler")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t,ct(this,dt,{writable:!0,value:e=>{if(!e.dataTransfer.getData("tile"))return;const t=JSON.parse(e.dataTransfer.getData("tile"));this._callback.cellDrop(t)}}),pt(this,wt).call(this)}get template(){return'<div class="board__cell"></div>'}};function bt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function mt(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}function gt(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,kt(e,t,"get"))}function yt(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,kt(e,t,"set"),i),i}function kt(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var Mt=new WeakMap,Wt=new WeakMap,Et=new WeakMap,Tt=new WeakMap,_t=new WeakMap,Ct=new WeakMap;const xt=class extends w{constructor(e,t,i){super(),mt(this,Mt,{writable:!0,value:void 0}),mt(this,Wt,{writable:!0,value:void 0}),mt(this,Et,{writable:!0,value:void 0}),bt(this,"changePosition",(({x:e,y:t})=>{this.x=e,this.y=t})),bt(this,"setTileClickHandler",(e=>{this._callback.tileClick=e,this.element.addEventListener("click",gt(this,Tt))})),mt(this,Tt,{writable:!0,value:e=>{this._callback.tileClick({number:gt(this,Mt),x:gt(this,Wt),y:gt(this,Et)})}}),mt(this,_t,{writable:!0,value:()=>{this.element.addEventListener("dragstart",gt(this,Ct))}}),mt(this,Ct,{writable:!0,value:e=>{const t=JSON.stringify({number:gt(this,Mt),x:gt(this,Wt),y:gt(this,Et)});e.dataTransfer.setData("tile",t)}}),yt(this,Mt,e),this.x=t,this.y=i,gt(this,_t).call(this)}get template(){return`<div class="board__tile" draggable="true">\n    ${gt(this,Mt)}\n\t</div>`}get number(){return gt(this,Mt)}set x(e){yt(this,Wt,e),this.element.style.setProperty("--x",e)}set y(e){yt(this,Et,e),this.element.style.setProperty("--y",e)}};function zt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function St(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}function jt(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Ot(e,t,"get"))}function Pt(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,Ot(e,t,"set"),i),i}function Ot(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var Ht=new WeakMap,Lt=new WeakMap;const $t=class extends w{constructor(){super(),St(this,Ht,{writable:!0,value:null}),St(this,Lt,{writable:!0,value:null}),zt(this,"playMoveSound",(()=>{jt(this,Ht).currentTime=0,jt(this,Ht).play()})),zt(this,"playVictorySound",(()=>{jt(this,Lt).currentTime=0,jt(this,Lt).play()})),Pt(this,Ht,this.element.querySelector("audio[data-move-sound]")),Pt(this,Lt,this.element.querySelector("audio[data-victory-sound]")),jt(this,Lt).volume=.3}get template(){return'<div>\n\t\t<audio data-move-sound src="./assets//sound/move-tile.mp3"></audio>\n\t\t<audio data-victory-sound src="./assets//sound/victory.mp3"></audio>\n\t</div>'}},Bt=e=>{const t=[];let i=0;for(let n=0;n<e;n++)for(let a=0;a<e;a++)i++,t.push({number:i,x:a,y:n});return t[t.length-1].number=0,t},Nt=(e,t)=>{const i=Math.abs(e.x-t.x),n=Math.abs(e.y-t.y);return!(1!==i&&1!==n||e.x!==t.x&&e.y!==t.y)},Jt=e=>e.find((({number:e})=>0===e)),Dt=e=>{const t=Jt(e),i=Math.sqrt(e.length),n={x:t.x,y:t.y},a=((e,t)=>{const i=[];for(let n=0;n<t;n++)for(let a=0;a<t;a++)Nt({x:a,y:n},e)&&i.push({x:a,y:n});return i})(n,i),s=Math.floor(Math.random()*a.length);qt(a[s],n,e)},qt=(e,t,i)=>{const n=i.find((t=>t.x===e.x&&t.y===e.y)),a=i.find((e=>e.x===t.x&&e.y===t.y)),s={x:n.x,y:n.y};n.x=a.x,n.y=a.y,a.x=s.x,a.y=s.y},Vt=(e,t)=>t[e]||[],It=()=>JSON.parse(localStorage.getItem(n)||"{}");function Rt(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}function Gt(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,At(e,t,"get"))}function Zt(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,At(e,t,"set"),i),i}function At(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var Yt=new WeakMap,Ft=new WeakMap,Kt=new WeakMap,Qt=new WeakMap,Ut=new WeakMap,Xt=new WeakMap,ei=new WeakMap,ti=new WeakMap,ii=new WeakMap,ni=new WeakMap,ai=new WeakMap,si=new WeakMap,ri=new WeakMap,li=new WeakMap,oi=new WeakMap,hi=new WeakMap,ui=new WeakMap,ci=new WeakMap,pi=new WeakMap,wi=new WeakMap,vi=new WeakMap,di=new WeakMap,fi=new WeakMap,bi=new WeakMap,mi=new WeakMap,gi=new WeakMap,yi=new WeakMap,ki=new WeakMap,Mi=new WeakMap,Wi=new WeakMap;function Ei(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Ti(e,t){var i=function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,i)}var _i=new WeakMap;const Ci=class{constructor(){var e,t,i;e=this,t=_i,i={writable:!0,value:new Set},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i),Ei(this,"addObserver",(e=>{Ti(this,_i).add(e)})),Ei(this,"removeObserver",(e=>{Ti(this,_i).delete(e)})),Ei(this,"_notify",(e=>{Ti(this,_i).forEach((t=>{t(e)}))}))}};function xi(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,zi(e,t,"get"))}function zi(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var Si=new WeakMap;function ji(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var Pi=new WeakMap;function Oi(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Hi(e,t,i){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,i)}function Li(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,Bi(e,t,"set"),i),i}function $i(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Bi(e,t,"get"))}function Bi(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var Ni=new WeakMap,Ji=new WeakMap;function Di(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var qi=new WeakMap;const Vi=document.querySelector("body"),Ii=r((()=>'<div id="root"></div>'));a(Vi,Ii),new class{constructor(t,r,o,h,u){var c,p;Rt(this,Yt,{writable:!0,value:null}),Rt(this,Ft,{writable:!0,value:null}),Rt(this,Kt,{writable:!0,value:null}),Rt(this,Qt,{writable:!0,value:null}),Rt(this,Ut,{writable:!0,value:null}),Rt(this,Xt,{writable:!0,value:[]}),Rt(this,ei,{writable:!0,value:[]}),Rt(this,ti,{writable:!0,value:!1}),Rt(this,ii,{writable:!0,value:null}),Rt(this,ni,{writable:!0,value:null}),Rt(this,ai,{writable:!0,value:null}),Rt(this,si,{writable:!0,value:null}),Rt(this,ri,{writable:!0,value:null}),Rt(this,li,{writable:!0,value:0}),Rt(this,oi,{writable:!0,value:!0}),Rt(this,hi,{writable:!0,value:null}),p=()=>{Zt(this,li,Gt(this,si).moves),Gt(this,pi).call(this),Gt(this,ui).call(this),Gt(this,wi).call(this),Gt(this,di).call(this),Gt(this,bi).call(this),Zt(this,hi,new class{constructor(e){Ge(this,Fe,{writable:!0,value:null}),Ge(this,Ke,{writable:!0,value:null}),Ge(this,Qe,{writable:!0,value:null}),Ge(this,Ue,{writable:!0,value:null}),Re(this,"showWinMessage",((e,t)=>{this.renderPopup(),Ae(this,Qe,new $e(e,t)),a(Ze(this,Ke).getContentContainer(),Ze(this,Qe)),Ze(this,Ke).showPopup()})),Re(this,"showResults",((e,t)=>{this.renderPopup(),Ae(this,Ue,new Ie(e,t)),a(Ze(this,Ke).getContentContainer(),Ze(this,Ue)),Ze(this,Ke).showPopup()})),Ae(this,Fe,e)}renderPopup(){Ze(this,Ke)||(Ae(this,Ke,new Oe),a(Ze(this,Fe),Ze(this,Ke)))}}(Gt(this,Yt))),Gt(this,Qt).addObserver(Gt(this,Wi))},(c="init")in this?Object.defineProperty(this,c,{value:p,enumerable:!0,configurable:!0,writable:!0}):this.init=p,Rt(this,ui,{writable:!0,value:()=>{let e=Bt(Gt(this,Qt).size);Zt(this,ai,e),e=(e=>{const t=JSON.parse(JSON.stringify(e));for(let i=0;i<e.length**3;i++)Dt(t);return t})(e),Zt(this,Ut,e)}}),Rt(this,ci,{writable:!0,value:()=>{Gt(this,si).moves=0,Zt(this,li,0),Gt(this,ri).resetTimer(),Gt(this,vi).call(this),Gt(this,fi).call(this),Gt(this,wi).call(this),Gt(this,ui).call(this),Gt(this,di).call(this)}}),Rt(this,pi,{writable:!0,value:()=>{Zt(this,Ft,new class{constructor(t,i,n,r,o,h,u,c,p){var w,v;D(this,R,{writable:!0,value:null}),D(this,G,{writable:!0,value:null}),D(this,Z,{writable:!0,value:null}),D(this,A,{writable:!0,value:null}),D(this,Y,{writable:!0,value:null}),D(this,F,{writable:!0,value:null}),D(this,K,{writable:!0,value:null}),D(this,Q,{writable:!0,value:null}),D(this,U,{writable:!0,value:null}),D(this,X,{writable:!0,value:null}),D(this,ee,{writable:!0,value:null}),D(this,te,{writable:!0,value:null}),D(this,ie,{writable:!0,value:null}),D(this,ne,{writable:!0,value:null}),D(this,ae,{writable:!0,value:null}),D(this,se,{writable:!0,value:null}),D(this,re,{writable:!0,value:null}),D(this,le,{writable:!0,value:null}),v=()=>{q(this,oe).call(this),q(this,Z).addObserver(q(this,be)),q(this,A).addObserver(q(this,me)),q(this,Y).addObserver(q(this,ge)),q(this,G).addObserver(q(this,ke))},(w="init")in this?Object.defineProperty(this,w,{value:v,enumerable:!0,configurable:!0,writable:!0}):this.init=v,D(this,oe,{writable:!0,value:()=>{V(this,F,new d),a(q(this,R),q(this,F)),q(this,de).call(this),q(this,fe).call(this),q(this,he).call(this),q(this,ue).call(this),q(this,ce).call(this),q(this,pe).call(this),q(this,we).call(this),q(this,ve).call(this)}}),D(this,he,{writable:!0,value:()=>{V(this,K,new b),q(this,K).setNewGameBtnClickHandler(q(this,ae)),a(q(this,F).getHeaderTopElement(),q(this,K),e)}}),D(this,ue,{writable:!0,value:()=>{V(this,Q,new y(q(this,G).size)),q(this,Q).setSelectorChangeHandler((e=>q(this,G).size=e)),a(q(this,F).getHeaderTopElement(),q(this,Q))}}),D(this,ce,{writable:!0,value:()=>{V(this,U,new M),q(this,U).setSaveBtnClickHandler(q(this,se)),a(q(this,F).getHeaderTopElement(),q(this,U))}}),D(this,pe,{writable:!0,value:()=>{V(this,X,new E),q(this,X).setLoadBtnClickHandler(q(this,re)),a(q(this,F).getHeaderTopElement(),q(this,X))}}),D(this,we,{writable:!0,value:()=>{V(this,ee,new _),q(this,ee).setResultBtnClickHandler(q(this,le)),a(q(this,F).getHeaderTopElement(),q(this,ee))}}),D(this,ve,{writable:!0,value:()=>{const e=q(this,te);V(this,te,new P(q(this,Y).isSoundEnabled)),q(this,te).setSoundClickHandler(q(this,ye)),e?(s(q(this,te),e),l(e)):a(q(this,F).getHeaderTopElement(),q(this,te))}}),D(this,de,{writable:!0,value:()=>{const t=q(this,ie);V(this,ie,new L(q(this,Z).moves)),t?(s(q(this,ie),t),l(t)):a(q(this,F).getHeaderBottomElement(),q(this,ie),e)}}),D(this,fe,{writable:!0,value:()=>{const e=q(this,ne);V(this,ne,new J(q(this,A).time)),e?(s(q(this,ne),e),l(e)):a(q(this,F).getHeaderBottomElement(),q(this,ne))}}),D(this,be,{writable:!0,value:()=>{q(this,de).call(this)}}),D(this,me,{writable:!0,value:()=>{q(this,fe).call(this)}}),D(this,ge,{writable:!0,value:()=>{q(this,ve).call(this)}}),D(this,ye,{writable:!0,value:()=>{q(this,Y).isSoundEnabled=!q(this,Y).isSoundEnabled}}),D(this,ke,{writable:!0,value:e=>{q(this,Q).setSelectorValue(e)}}),V(this,R,t),V(this,G,i),V(this,Z,n),V(this,A,r),V(this,Y,o),V(this,ae,h),V(this,se,u),V(this,re,c),V(this,le,p)}}(Gt(this,Yt),Gt(this,Qt),Gt(this,si),Gt(this,ri),Gt(this,ii),Gt(this,ci),Gt(this,yi),Gt(this,ki),Gt(this,Mi))),Gt(this,Ft).init()}}),Rt(this,wi,{writable:!0,value:()=>{Zt(this,Kt,new ut(Gt(this,Qt).size)),a(Gt(this,Yt),Gt(this,Kt));for(let e=0;e<Gt(this,Qt).size**2;e++){const e=new ft;e.setCellDropHandler(Gt(this,mi)),Gt(this,ei).push(e),a(Gt(this,Kt),e)}Gt(this,ri).startTimer()}}),Rt(this,vi,{writable:!0,value:()=>{l(Gt(this,Kt)),Zt(this,Kt,null),Zt(this,ei,[])}}),Rt(this,di,{writable:!0,value:()=>{for(const e of Gt(this,Ut)){const{number:t,x:i,y:n}=e;if(0===t)continue;const s=new xt(t,i,n);s.setTileClickHandler(Gt(this,mi)),a(Gt(this,Kt),s),Gt(this,Xt).push(s)}Zt(this,oi,!1)}}),Rt(this,fi,{writable:!0,value:()=>{for(const e of Gt(this,Xt))l(e);Zt(this,Xt,[])}}),Rt(this,bi,{writable:!0,value:()=>{Zt(this,ni,new $t),a(Gt(this,Yt),Gt(this,ni))}}),Rt(this,mi,{writable:!0,value:e=>{var t;if(Gt(this,oi))return;let i=Jt(Gt(this,Ut));const a={x:e.x,y:e.y},s={x:i.x,y:i.y};Nt(a,s)&&(Gt(this,Xt).find((t=>t.number===e.number)).changePosition(s),qt(a,s,Gt(this,Ut)),Zt(this,li,(t=Gt(this,li),++t)),Gt(this,si).moves=Gt(this,li),Gt(this,ii).isSoundEnabled&&Gt(this,ni).playMoveSound(),Gt(this,gi).call(this)&&(Gt(this,ri).stopTimer(),Zt(this,oi,!0),Gt(this,ii).isSoundEnabled&&Gt(this,ni).playVictorySound(),Gt(this,hi).showWinMessage(Gt(this,li),Gt(this,ri).time),((e,t,i)=>{let a=It(),s=Vt(e,a);s.push({time:t,moves:i}),s=(e=>e.sort(((e,t)=>e.time===t.time?e.moves-t.moves:e.time-t.time)).slice(0,10))(s),a[e]=s,localStorage.setItem(n,JSON.stringify(a))})(Gt(this,Qt).size,Gt(this,ri).time,Gt(this,li))))}}),Rt(this,gi,{writable:!0,value:()=>JSON.stringify(Gt(this,Ut))===JSON.stringify(Gt(this,ai))}),Rt(this,yi,{writable:!0,value:()=>{Gt(this,oi)||((e,t,n,a)=>{const s={gameState:e,boardSize:t,time:n,moves:a};localStorage.setItem(i,JSON.stringify(s))})(Gt(this,Ut),Gt(this,Qt).size,Gt(this,ri).time,Gt(this,li))}}),Rt(this,ki,{writable:!0,value:()=>{const e=JSON.parse(localStorage.getItem(i)||"null");if(null===e)return;Zt(this,ti,!0);const{gameState:t,boardSize:n,time:a,moves:s}=e;Zt(this,Ut,t),Gt(this,si).moves=s,Zt(this,li,s),Gt(this,Qt).size=n,Gt(this,ri).stopTimer(),Gt(this,ri).time=a,Gt(this,vi).call(this),Gt(this,fi).call(this),Gt(this,wi).call(this),Gt(this,di).call(this),Zt(this,ai,Bt(Gt(this,Qt).size)),Zt(this,ti,!1)}}),Rt(this,Mi,{writable:!0,value:()=>{let e=It();e=Vt(Gt(this,Qt).size,e),Gt(this,hi).showResults(Gt(this,Qt).size,e)}}),Rt(this,Wi,{writable:!0,value:()=>{Gt(this,ti)||Gt(this,ci).call(this)}}),Zt(this,Yt,t),Zt(this,Qt,r),Zt(this,si,o),Zt(this,ri,h),Zt(this,ii,u)}}(Ii,new class extends Ci{constructor(...e){var t,i,n;super(...e),n={writable:!0,value:4},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t=this,i=Si),i.set(t,n)}get size(){return xi(this,Si)}set size(e){(function(e,t,i){(function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}})(e,zi(e,t,"set"),i)})(this,Si,Number(e)),this._notify(xi(this,Si))}},new class extends Ci{constructor(...e){var t,i,n;super(...e),n={writable:!0,value:0},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t=this,i=Pi),i.set(t,n)}get moves(){return function(e,t){return t.get?t.get.call(e):t.value}(this,ji(this,Pi,"get"))}set moves(e){(function(e,t,i){(function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}})(e,ji(e,t,"set"),i)})(this,Pi,e),this._notify(e)}},new class extends Ci{constructor(...e){super(...e),Hi(this,Ni,{writable:!0,value:0}),Hi(this,Ji,{writable:!0,value:null}),Oi(this,"startTimer",(()=>{Li(this,Ji,setInterval((()=>{this.time=$i(this,Ni)+1}),1e3))})),Oi(this,"stopTimer",(()=>{clearInterval($i(this,Ji)),Li(this,Ji,null)})),Oi(this,"resetTimer",(()=>{this.stopTimer(),this.time=0}))}get time(){return $i(this,Ni)}set time(e){Li(this,Ni,e),this._notify(e)}},new class extends Ci{constructor(...e){var t,i,n;super(...e),n={writable:!0,value:!0},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t=this,i=qi),i.set(t,n)}get isSoundEnabled(){return function(e,t){return t.get?t.get.call(e):t.value}(this,Di(this,qi,"get"))}set isSoundEnabled(e){(function(e,t,i){(function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}})(e,Di(e,t,"set"),i)})(this,qi,e),this._notify(e)}}).init()})();
//# sourceMappingURL=bundle.js.map