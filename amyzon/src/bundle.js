!function(e){var t={};function i(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){i(1);const a=i(5),r=i(6),o=i(7),n=i(8),s=i(9),l=i(11);!function(){const e=document.querySelector(".contents"),{primeContainer:t,categoryCard:i,carousellContainer:c}=function(e){const t=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div");return t.classList.add("contents__primecaroushell-container"),i.classList.add("contents__primecaroushell-container__category-card"),a.classList.add("contents__primecaroushell-container__caroushell"),t.appendChild(i),e.appendChild(t),e.appendChild(a),{primeContainer:t,categoryCard:i,carousellContainer:a}}(e),{cardNames:d,cardDetails:m,cardImages:h}=function(e){const t=[];let i=0;for(let i in e)t.push(Object.keys(e[i])[0]);const a=e.map(e=>e[t[i++]]),r=e.map(e=>e.image);return{cardNames:t,cardDetails:a,cardImages:r}}(a),p=[d,h,m];!function(e,t,i){let a=1;const r=i.reduce((e,i)=>e+=t(i,a++),"");!function(e,t){e.innerHTML=t}(e,n(r))}(c,o,m.flat());const g=document.querySelector(".primecarousell__itemlist"),u=document.querySelector(".primecarousell__container");!function(e,t){let i=0;const a=t.map(e=>e.image);e.childNodes.forEach(e=>{e.style.backgroundImage=`url("${a[i++]}")`})}(g,m.flat()),primeCraousell=new s(u,g,!0),new l(i,r,p,primeCraousell).renderCardUi();const f=document.querySelector("#leftbtn");document.querySelector("#rightbtn").addEventListener("click",(function(){primeCraousell.moveNext()})),f.addEventListener("click",(function(){primeCraousell.movePrev()}))}()},function(e,t,i){var a=i(2);"string"==typeof a&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};i(4)(a,r);a.locals&&(e.exports=a.locals)},function(e,t,i){(e.exports=i(3)(!1)).push([e.i,".selected_card{background-size:1616px auto, 100% 100%;transform:scale(1.3);z-index:999}.contents__primecaroushell-container{display:flex;justify-content:center}.contents__primecaroushell-container .contents__primecaroushell-container__category-card{display:flex;width:50rem;height:12rem}.contents__primecaroushell-container .contents__primecaroushell-container__category-card .card-category{position:relative;width:20%;height:100%;border:1px dashed red}.contents__primecaroushell-container .contents__primecaroushell-container__category-card .card-category .card__pagination{display:none;justify-content:center;position:absolute;left:0;right:0;bottom:0.5rem}.contents__primecaroushell-container .contents__primecaroushell-container__category-card .card-category .card__pagination .pagination_button{width:.5rem;height:.5rem;border-radius:15px;margin:3px;color:white;background:white;opacity:0.5}#Ship-card{background:linear-gradient(30deg, #2c88ae 40%, #00a8e1 85%, #00a8e1 74px);margin:.2rem}#Ship-card .Ship-card__clickable{width:100%;height:80%;background-size:75rem auto,100% 100%;background-position:-5px 5px;background-repeat:no-repeat}#Ship-card .Ship-card__clickable .Ship-card__title{width:100%;height:auto;font-weight:300;padding:0;color:#fff;left:0;right:0;position:absolute;bottom:2rem;text-align:center}#Stream-card{position:relative;background:linear-gradient(30deg, #cc0c39 40%, #ff6138 85%, #ff6138 74px);margin:.2rem}#Stream-card .Stream-card__clickable{width:100%;height:80%;background-size:75rem auto,100% 100%;background-position:-5px 5px;background-repeat:no-repeat}#Stream-card .Stream-card__clickable .Stream-card__title{width:100%;height:auto;font-weight:300;padding:0;color:#fff;left:0;right:0;position:absolute;bottom:2rem;text-align:center}#Shop-card{position:relative;background:linear-gradient(30deg, #a90067 40%, #e31f64 85%, #e31f64 74px);margin:.2rem}#Shop-card .Shop-card__clickable{width:100%;height:80%;background-size:75rem auto,100% 100%;background-position:-5px 5px;background-repeat:no-repeat}#Shop-card .Shop-card__clickable .Shop-card__title{width:100%;height:auto;font-weight:300;padding:0;color:#fff;left:0;right:0;position:absolute;bottom:2rem;text-align:center}#Read-card{position:relative;background:linear-gradient(30deg, #008577 40%, #36c2b4 85%, #36c2b4 74px);margin:.2rem}#Read-card .Read-card__clickable{width:100%;height:80%;background-size:75rem auto,100% 100%;background-position:-5px 5px;background-repeat:no-repeat}#Read-card .Read-card__clickable .Read-card__title{width:100%;height:auto;font-weight:300;padding:0;color:#fff;left:0;right:0;position:absolute;bottom:2rem;text-align:center}#More-card{position:relative;background:linear-gradient(30deg, #ff6138 40%, #ffc400 85%, #ffc400 74px);margin:.2rem}#More-card .More-card__clickable{width:100%;height:80%;background-size:75rem auto,100% 100%;background-position:-5px 5px;background-repeat:no-repeat}#More-card .More-card__clickable .More-card__title{width:100%;height:auto;font-weight:300;padding:0;color:#fff;left:0;right:0;position:absolute;bottom:2rem;text-align:center}main{margin-top:150px}button{padding:0;margin:0;border:none;outline:none}p{margin:0;padding:0}ul,li{list-style:none;margin:0;padding:0}.contents__primecaroushell-container__caroushell{display:flex;margin-top:5rem}.contents__primecaroushell-container__caroushell .primecarousell__container{display:flex;overflow:hidden}.contents__primecaroushell-container__caroushell .primecarousell__container .primecarousell__itemlist{display:flex}.contents__primecaroushell-container__caroushell .primecarousell__container .primecarousell__itemlist .primecarousell__item{position:relative;width:70rem;height:25rem;background-position:-10rem;background-repeat:no-repeat;background-size:contain}.contents__primecaroushell-container__caroushell .primecarousell__container .primecarousell__itemlist .primecarousell__item .prime__section{position:absolute;left:30rem;white-space:normal}\n",""])},function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",a=e[3];if(!a)return i;if(t&&"function"==typeof btoa){var r=(n=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot).concat(e," */")}));return[i].concat(o).concat([r]).join("\n")}var n,s,l;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(i,"}"):i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(a[o]=!0)}for(var n=0;n<e.length;n++){var s=e[n];null!=s[0]&&a[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="(".concat(s[2],") and (").concat(i,")")),t.push(s))}},t}},function(e,t,i){"use strict";var a,r={},o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},n=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}();function s(e,t){for(var i=[],a={},r=0;r<e.length;r++){var o=e[r],n=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};a[n]?a[n].parts.push(s):i.push(a[n]={id:n,parts:[s]})}return i}function l(e,t){for(var i=0;i<e.length;i++){var a=e[i],o=r[a.id],n=0;if(o){for(o.refs++;n<o.parts.length;n++)o.parts[n](a.parts[n]);for(;n<a.parts.length;n++)o.parts.push(f(a.parts[n],t))}else{for(var s=[];n<a.parts.length;n++)s.push(f(a.parts[n],t));r[a.id]={id:a.id,refs:1,parts:s}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var a=i.nc;a&&(e.attributes.nonce=a)}if(Object.keys(e.attributes).forEach((function(i){t.setAttribute(i,e.attributes[i])})),"function"==typeof e.insert)e.insert(t);else{var r=n(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,m=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,i,a){var r=i?"":a.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var o=document.createTextNode(r),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(o,n[t]):e.appendChild(o)}}function p(e,t,i){var a=i.css,r=i.media,o=i.sourceMap;if(r&&e.setAttribute("media",r),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var g=null,u=0;function f(e,t){var i,a,r;if(t.singleton){var o=u++;i=g||(g=c(t)),a=h.bind(null,i,o,!1),r=h.bind(null,i,o,!0)}else i=c(t),a=p.bind(null,i,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var i=s(e,t);return l(i,t),function(e){for(var a=[],o=0;o<i.length;o++){var n=i[o],c=r[n.id];c&&(c.refs--,a.push(c))}e&&l(s(e,t),t);for(var d=0;d<a.length;d++){var m=a[d];if(0===m.refs){for(var h=0;h<m.parts.length;h++)m.parts[h]();delete r[m.id]}}}}},function(e,t){e.exports=[{Ship:[{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A01._CB514650866_.jpg",title:"FAST, FREE DELIVERY",head:"Fast, FREE delivery on over 100 million items",body:"Super-fast delivery, tens of millions of items, and flexible delivery options to fit your life. Plus, Prime members get FREE One-Day Delivery on tens of millions of items.",tail:"Explore Prime Delivery",link:"https://www.amazon.com/b?node=15247183011"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A02._CB514650866_.jpg",title:"SAME-DAY DELIVERY",head:"FREE Same-Day Delivery",body:"Prime members get FREE Same-Day Delivery on over three million items with qualifying orders.",tail:"Explore Same-Day Delivery",link:"https://www.amazon.com/b?node=8729023011"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A03._CB514650829_.jpg",title:"RELEASE DAY DELIVERY",head:"Skip the lines and get it on release day",body:"No more waiting in line! Choose Free Release-Date Delivery at checkout on qualified items, and your package will be delivered on the release day by 7pm.",tail:"Explore Release-Date Delivery",link:"https://www.amazon.com/b?node=16067347011"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A04._CB494909365_.jpg",title:"PRIME NOW",head:"Ultrafast delivery on thousands of items",body:"Prime Now offers household items and essentials you need everyday plus the best of Amazon, delivered to your doorstep. Choose 2-hour delivery or 1-hour delivery in select cities.",tail:"Explore Prime Now",link:"https://primenow.amazon.com/onboard?sourceUrl=%2F"}],image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_A._CB513333159_.png"},{Stream:[{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B01._CB457663232_.jpg",title:"PRIME VIDEO",head:"Watch movies, TV, live events, and more",body:"As a Prime member, you can watch exclusive Amazon Originals and thousands of popular movies and TV shows—all at no extra cost. Watch at home or on the go with practically any device.",tail:"Explore Prime Video",link:"https://www.amazon.com/b/ref=dvm_us_aq_np_dhb_be_optpvt1?node=2858778011"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B02._CB513839286_.jpg",title:"TWITCH PRIME",head:"Free Games & Loot with Twitch Prime",body:"Gamers can get free games, in-game items, a free Twitch channel subscription every month and more with Twitch Prime.",tail:"Explore Twitch Prime",link:"https://twitch.amazon.com/prime"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B03._CB513839286_.jpg",title:"PRIME MUSIC",head:"Millions of songs for every moment",body:"As a Prime member, you can stream over 2 million songs ad free, listen on any Echo device, and take your music anywhere with offline listening.",tail:"Explore Prime Music",link:"https://www.amazon.com/gp/dmusic/promotions/PrimeMusic?ref=hawkfire_prime_detail_page_benefit_desc"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2018/Other/AVD12272_PrimeContentUpdate/Card_B04_AVD12272_PrimeContentUpdate_1280x400_en_US._CB474157036_.jpg",title:"AMAZON ORIGINALS",head:"Enjoy Amazon Original series and more",body:"Watch award-winning Amazon Originals like The Marvelous Mrs. Maisel, as well as exclusive series available only with Prime, including Goliath, Sneaky Pete, and The Grand Tour.",tail:"Explore Amazon Originals",link:"https://www.amazon.com/gp/video/storefront/ref=dvm_us_aq_np_dhb_be_optorigt1?ie=UTF8&merchId=originals1"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B05._CB514650828_.jpg",title:"AUDIBLE CHANNELS",head:"Original audio programs for life on the go",body:"Audible Channels are free with your Prime membership. Enjoy original audio series and playlists handcrafted for every interest. Just download the Audible app and start listening.",tail:"Explore Audible Channels",link:"https://www.audible.com/mt/getchannels"}],image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_B._CB513285352_.png"},{Shop:[{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C06._CB495022579_.jpg",title:"PRIME AT WHOLE FOODS MARKET",head:"Our healthiest benefit yet",body:"Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)",tail:"Explore Prime at Whole Foods",link:"https://www.amazon.com/wholefoods"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C01_revised._CB502880131_.jpg",title:"ALEXA VOICE SHOPPING",head:"The simplest way to shop. Just ask Alexa.",body:"With Alexa, shopping for essentials and reordering your favorite items from Amazon has never been easier.",tail:"Learn more about Alexa and Prime",link:"https://www.amazon.com/alexa-voice-shopping/b?ie=UTF8&node=14552177011"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C03._CB511882458_.jpg",title:"JUST WITH PRIME",head:"Exclusive brands and deals available only to Prime members",body:"As a Prime member enjoy early access to deals, Prime exclusive brands, and savings.",tail:"Shop Prime Member Exclusives",link:"https://www.amazon.com/b?ie=UTF8&node=16205654011"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C04._CB514650828_.jpg",title:"AMAZON FAMILY",head:"Save on supplies for the family",body:"Prime members save 20% off both diapers and baby food when they have 5 or more subscriptions arriving",tail:"Explore Family Supplies",link:"https://www.amazon.com/gp/family/signup"}],image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_C._CB513285352_.png"},{Read:[{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_D01._CB514706473_.jpg",title:"PRIME READING",head:"Prime members read free",body:"As a Prime member, you can now read as much as you like from over a thousand top Kindle books, magazines, short works, books with Audible narration, comics, children's books and more—all at no additional cost.",tail:"Explore Prime Reading",link:"https://www.amazon.com/kindle-dbs/fd/prime-pr"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_D02._CB513839283_.jpg",title:"AMAZON FIRST READS",head:"Read next month's new releases today",body:"Each month, Prime members can download one editors' pick for free--before the official publication date. Downloaded titles are yours to keep.",tail:"Learn more about Amazon First Reads",link:"https://www.amazon.com/kindlefirst"}],image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_D._CB513285353_.png"},{More:[{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_E03._CB513839888_.jpg",title:"5% BACK",head:"Earn more with Prime Rewards",body:"Eligible Prime members can earn 5% back at Amazon.com using the Amazon Prime Rewards Visa Card or the Amazon Prime Store card. All Prime members earn 2% rewards with Amazon Prime Reload.",tail:"Learn more about Prime Rewards",link:"https://www.amazon.com/b?node=16914437011&ref=acqNPrewards"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_E01._CB513839282_.jpg",title:"AMAZON PHOTOS",head:"Unlimited, free photo storage",body:"Back up and share your photos with unlimited photo storage. Add your photos to the free app to see them on all your devices.",tail:"Explore Amazon Photos",link:"https://www.amazon.com/b?node=13234696011"}],image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_E._CB513285352_.png"}]},function(e,t){e.exports=(e,t)=>`<div class="card-category" id="${e}-card" role="tablist" data-card=${t}><div class="${e}-card__clickable"><div class="${e}-card__title"></div><div class="${e}-card__pagination card__pagination" ></div></div></div>`},function(e,t){e.exports=(e,t)=>`<li class="primecarousell__item" id="prime_item${t}">\n  <div class="prime__section">\n    <div class="prime__section__title">${e.title}</div>\n    <div class="prime__section__head">${e.head}</div>\n    <div class="prime__section__body">${e.body}</div>\n    <div class="prime__section__tail">${e.tail}</div>\n    <div class="prime__section__link">${e.link}</div>\n  </div>\n</li>`},function(e,t){e.exports=e=>`<button class="prime-button" id="leftbtn"><i class="fas fa-chevron-left"></i></button>\n  <div class="primecarousell__container">\n    <ul class="primecarousell__itemlist">${e}</ul>\n  </div>\n  <button class="prime-button" id="rightbtn"><i class="fas fa-chevron-right"></i></button>`},function(e,t,i){const a=i(10);e.exports=class extends a{constructor(e,t,i=!1,a=.3){super(e,t,i,a)}moveFowardTo(e){for(let t=0;t<e;++t)this.foward()}}},function(e,t){const i=0;e.exports=class{constructor(e,t,i=!1,a=.3){this.container=e,this.itemList=t,this.init(),this.config(i,a),this.intervalId=void 0,this.sleepCheckId=void 0}init(){this.container.style.width=this.itemList.childNodes[i].offsetWidth+"px",this.container.style.height=this.itemList.childNodes[i].offsetHeight+"px",this.itemListWidth=this.itemList.childNodes[i].offsetWidth,this.itemListHeight=this.itemList.childNodes[i].offsetHeight,this.itemLength=this.itemList.childNodes.length,this.location=1,this.offset=0,this.Istransition=!1,this.eventRegister()}eventRegister(){this.itemList.addEventListener("transitionend",function(){this.Istransition=!1}.bind(this)),this.container.addEventListener("click",this.stopSlide.bind(this))}config(e,t){if(this.duration=t,e){const e=this.itemList.childNodes[i],t=this.itemList.childNodes[this.itemLength-1];this.itemList.insertBefore(t.cloneNode(!0),this.itemList.firstChild),this.itemList.appendChild(e.cloneNode(!0)),this.offset-=this.itemListWidth,this.rotate(),this.isRotate=!0}else this.isRotate=!1}setConfig(e,t){this.isRotate=e,this.duration=t,this.config(e,t)}moveNext(){this.Istransition||this.foward()}foward(){this.offset-=this.itemListWidth,this.move(),this.location++,this.isRotate&&this.location==this.itemLength+1&&(this.offset+=this.itemLength*this.itemListWidth,setTimeout(()=>this.rotate(),1e3*this.duration),this.location=this.location-this.itemLength)}back(){this.offset+=this.itemListWidth,this.move(),this.location--,this.isRotate&&this.location==i&&(this.offset-=this.itemLength*this.itemListWidth,setTimeout(()=>this.rotate(),1e3*this.duration),this.location=this.location+this.itemLength)}movePrev(){this.Istransition||this.back()}rotate(){this.itemList.style.transition="none",this.itemList.style.transform=`translateX(${this.offset}px)`,this.Istransition=!1}move(){this.Istransition=!0,this.itemList.style.transition=`${this.duration}s`,this.itemList.style.transform=`translateX(${this.offset}px)`}autoSlide(){this.intervalId=setInterval(()=>{this.moveNext()},3e3)}stopSlide(){void 0!==this.sleepCheckId&&clearTimeout(this.sleepCheckId),void 0!==this.intervalId&&(clearInterval(this.intervalId),this.sleepCheckId=setTimeout(()=>{this.moveNext(),this.autoSlide()},1e4))}getLocation(){return this.location}getLength(){return this.itemLength}}},function(e,t){e.exports=class{constructor(e,t,i,a){this.cards=e,this.cardListView=t,this.cardNames=i[0],this.cardImages=i[1],this.cardDetails=i[2],this.carousell=a,this.currentCard=0}render(e,t){e.innerHTML=t}renderCardUi(){let e=1;const t=this.cardNames.reduce((t,i)=>t+=this.cardListView(i,e++),"");this.render(this.cards,t),this.cards=this.cards.childNodes,this.setCardImage(this.cards,this.cardImages),this.setCardName(this.cards,this.cardNames),this.setCardTab(this.cards,this.cardDetails),this.setCardClickEvent(this.cards),this.init(this.cards)}setCardImage(e,t){let i=0;if(e.length!==t.length)return!1;e.forEach(e=>{e.childNodes[0].style.backgroundImage=`url("${t[i++]}")`})}setCardName(e,t){let i=0;if(e.length!==t.length)return!1;e.forEach(e=>{e.childNodes[0].childNodes[0].innerHTML=`<p>${t[i++]}</p>`})}setCardTab(e,t){let i=0,a=1;if(e.length!==t.length)return!1;e.forEach(e=>{let r,o="";for(let n=0;n<t[i].length;++n)r=e.childNodes[0].childNodes[1],o+=`<button class="pagination_button" id="carousell-page${a}" data-page=${a++}></button>`;r.innerHTML=o,++i})}setCardClickEvent(e){e.forEach(t=>{t.addEventListener("click",i=>{this.showCard(t,e),this.currentCard=t.dataset.card;let a=t.childNodes[0].childNodes[1];this.selectTab(i.target,a.childNodes)})})}selectTab(e,t){"BUTTON"===e.tagName&&(t.forEach(e=>{e.style.opacity="0.5"}),e.style.opacity="1",this.currentTab=e)}showCard(e,t){if(this.currentCard==e.dataset.card)return;const i=e.childNodes[0].childNodes[1];t.forEach(e=>{e.childNodes[0].childNodes[1].style.display="none",e.classList.remove("selected_card")}),e.classList.add("selected_card"),i.style.display="flex";let a=i.childNodes[0];this.selectTab(a,i.childNodes,primeCraousell)}moveTab(){}init(e){let t=e[0];this.showCard(t,e)}getCurrentCard(){return this.currentCard}getCurrentTab(){return this.currentTab}}}]);