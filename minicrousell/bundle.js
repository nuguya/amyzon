!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){i(1);const n=i(5),s=i(6),o=i(7),{Data:r,Text:a}=i(8);!function(){const t=document.querySelector(".carousell__container"),e=document.querySelector(".carousell__list"),i=document.querySelector("#leftbtn"),l=document.querySelector("#rightbtn"),c=document.querySelector(".carousell__textarea");!function(t){let e="";r.forEach(t=>{let i=t.img,s=t.text;e+=n(i,s)}),t.innerHTML=e}(e),function(t){const e=a;let i="";i+=s(e.title,e.section,e.navigation),t.innerHTML=i}(c),window.addEventListener("load",(function(){carousell=new o(t,e,!0),carousell.autoSlide()})),l.addEventListener("click",(function(){carousell.stopSlide(),carousell.moveNext()})),i.addEventListener("click",(function(t){carousell.stopSlide(),carousell.movePrev()}))}()},function(t,e,i){var n=i(2);"string"==typeof n&&(n=[[t.i,n,""]]);var s={insert:"head",singleton:!1};i(4)(n,s);n.locals&&(t.exports=n.locals)},function(t,e,i){(t.exports=i(3)(!1)).push([t.i,"ul,li{list-style:none;margin:0;padding:0}button{padding:0;border:none;background:none;outline:none}.carousell{display:flex;border:1px dotted green}.carousell__container{position:relative;margin:1em;overflow:hidden;width:15rem;height:15rem;box-shadow:2px 2px 3px 2px}.carousell__list{display:flex}.carousell__item img{max-width:15rem;max-height:15rem;height:100%}.carousell__textarea{max-width:25rem}#leftbtn,.carousell__textarea{margin-left:5rem}\n",""])},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var s=(r=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")}));return[i].concat(o).concat([s]).join("\n")}var r,a,l;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(i,"}"):i})).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},s=0;s<this.length;s++){var o=this[s][0];null!=o&&(n[o]=!0)}for(var r=0;r<t.length;r++){var a=t[r];null!=a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="(".concat(a[2],") and (").concat(i,")")),e.push(a))}},e}},function(t,e,i){"use strict";var n,s={},o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}();function a(t,e){for(var i=[],n={},s=0;s<t.length;s++){var o=t[s],r=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[r]?n[r].parts.push(a):i.push(n[r]={id:r,parts:[a]})}return i}function l(t,e){for(var i=0;i<t.length;i++){var n=t[i],o=s[n.id],r=0;if(o){for(o.refs++;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(v(n.parts[r],e))}else{for(var a=[];r<n.parts.length;r++)a.push(v(n.parts[r],e));s[n.id]={id:n.id,refs:1,parts:a}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=i.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach((function(i){e.setAttribute(i,t.attributes[i])})),"function"==typeof t.insert)t.insert(e);else{var s=r(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var h,u=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function d(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,s);else{var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function f(t,e,i){var n=i.css,s=i.media,o=i.sourceMap;if(s&&t.setAttribute("media",s),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var m=null,p=0;function v(t,e){var i,n,s;if(e.singleton){var o=p++;i=m||(m=c(e)),n=d.bind(null,i,o,!1),s=d.bind(null,i,o,!0)}else i=c(e),n=f.bind(null,i,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var i=a(t,e);return l(i,e),function(t){for(var n=[],o=0;o<i.length;o++){var r=i[o],c=s[r.id];c&&(c.refs--,n.push(c))}t&&l(a(t,e),e);for(var h=0;h<n.length;h++){var u=n[h];if(0===u.refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete s[u.id]}}}}},function(t,e){t.exports=(t,e)=>`<li class="carousell__item">\n      <img src=${t}.jpg class="previewImage">\n  </li>`},function(t,e){t.exports=(t,e,i)=>`<div class="carousell__title"><h2>${t}</h2></div>\n          <div class="carousell__section"><p>${e}</p></div>\n          <div class="carousell__navigation"><p>${i}</p></div> `},function(t,e){const i=0;t.exports=class{constructor(t,e,i=!1,n=.3){this.container=t,this.itemList=e,this.init(),this.config(i,1),this.intervalId=void 0,this.sleepCheckId=void 0}init(){this.container.style.width=this.itemList.childNodes[i].offsetWidth+"px",this.container.style.height=this.itemList.childNodes[i].offsetHeight+"px",this.itemListWidth=this.itemList.childNodes[i].offsetWidth,this.itemListHeight=this.itemList.childNodes[i].offsetHeight,this.itemLength=this.itemList.childNodes.length,this.location=1,this.offset=0,this.Istransition=!1,this.eventRegister()}eventRegister(){this.itemList.addEventListener("transitionend",function(){this.Istransition=!1}.bind(this)),this.container.addEventListener("click",this.stopSlide.bind(this))}config(t,e){if(this.duration=e,t){const t=this.itemList.childNodes[i],e=this.itemList.childNodes[this.itemLength-1];this.itemList.insertBefore(e.cloneNode(!0),this.itemList.firstChild),this.itemList.appendChild(t.cloneNode(!0)),this.offset-=this.itemListWidth,this.rotate(),this.isRotate=!0}else this.isRotate=!1}setConfig(t,e){this.isRotate=t,this.duration=e,this.config(t,e)}moveNext(){this.Istransition||(this.offset-=this.itemListWidth,this.move(),this.location++,this.isRotate&&this.location==this.itemLength+1&&(this.offset+=this.itemLength*this.itemListWidth,setTimeout(()=>this.rotate(),1e3*this.duration),this.location=this.location-this.itemLength))}movePrev(){this.Istransition||(this.offset+=this.itemListWidth,this.move(),this.location--,this.isRotate&&this.location==i&&(this.offset-=this.itemLength*this.itemListWidth,setTimeout(()=>this.rotate(),1e3*this.duration),this.location=this.location+this.itemLength))}rotate(){this.itemList.style.transition="none",this.itemList.style.transform=`translateX(${this.offset}px)`,this.Istransition=!1}move(){this.Istransition=!0,this.itemList.style.transition=`${this.duration}s`,this.itemList.style.transform=`translateX(${this.offset}px)`}autoSlide(){this.intervalId=setInterval(()=>{this.moveNext()},3e3)}stopSlide(){void 0!==this.sleepCheckId&&clearTimeout(this.sleepCheckId),void 0!==this.intervalId&&(clearInterval(this.intervalId),this.sleepCheckId=setTimeout(()=>{this.moveNext(),this.autoSlide()},1e4))}}},function(t,e){item1={img:"./images/minions1",text:"안녕하세요"},item2={img:"./images/minions2",text:"반갑습니다"},item3={img:"./images/minions3",text:"잘가세요"},item4={img:"./images/minions4",text:"다시만나요"};const i=[item1,item2,item3,item4],n={title:"Amazon Originals, exclusively on Prime Video",section:'Prime Video is the only place where you can watch Amazon Original series like "The Marvelous Mrs. Maisel", "Tom Clancy\'s Jack Ryan", "Homecoming", and "The Man in the High Castle".',navigation:"Explore Prime Video"};t.exports={Data:i,Text:n}}]);