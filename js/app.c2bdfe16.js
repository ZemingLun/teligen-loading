(function(t){function e(e){for(var a,l,s=e[0],r=e[1],c=e[2],u=0,f=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},i=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/teligen-loading/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"074f":function(t,e,n){var a={"./LoadingBall.vue":"77b6","./LoadingBlock.vue":"22f5","./LoadingButterfly.vue":"619c","./LoadingCat.vue":"9f09","./LoadingDefault.vue":"b739","./LoadingFootprints.vue":"1950","./LoadingHourglass.vue":"9f87","./LoadingLattice.vue":"ffc8","./LoadingMoon.vue":"2949","./LoadingOrbit.vue":"5ecd","./LoadingPacman.vue":"21ca","./LoadingSpiral.vue":"dbed","./LoadingSwing.vue":"c955","./LoadingUfo.vue":"316d","./LoadingWave.vue":"0c6d"};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=i,t.exports=o,o.id="074f"},"09ab":function(t,e,n){"use strict";var a=n("156f"),o=n.n(a);o.a},"0afd":function(t,e,n){},"0c6d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-wave"},[n("div",{staticClass:"water-ball",style:{background:t.background,boxShadow:"inset 0 0 0 3px "+t.waves[0].color+",inset 0 0 50px 5px "+t.waves[0].color}},t._l(t.waves,(function(e,a){return n("div",{key:a,staticClass:"wave-card",style:{animationDuration:e.duration+"s",animationDelay:e.delay+"s",animationDirection:e.reverse?"reverse":"normal"}},[t._l([1,2,3],(function(t,a){return n("div",{staticClass:"wave convex",style:{background:e.color,boxShadow:"81px 81px 0 80px "+e.color}})})),t._l([1,2,3],(function(t,a){return n("div",{staticClass:"wave concave",style:{boxShadow:"81px 81px 0 80px "+e.color}})}))],2)})),0),n("div",{staticClass:"loading-text",style:{color:t.waves[0].color},domProps:{textContent:t._s(t.loadingText)}})])},o=[],i={name:"LoadingWave",data(){return{loadingText:"Loading...",background:"aliceblue",waves:[{color:"midnightblue",duration:6,delay:-2,reverse:!1},{color:"mediumblue",duration:5,delay:-2,reverse:!0},{color:"dodgerblue",duration:4,delay:-3,reverse:!1},{color:"deepskyblue",duration:3,delay:-2.5,reverse:!1},{color:"darkblue",duration:2,delay:-2,reverse:!1}]}}},l=i,s=(n("2a97"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"47748c84",null);e["default"]=r.exports},"111c":function(t,e,n){},"156f":function(t,e,n){},1950:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-footprints"},[n("div",{staticClass:"footprints",class:[t.type],style:{lineHeight:t.lineHeight,transform:"rotate("+t.rotate+"deg)"}},t._l(["left","right"],(function(e){return n("div",{key:"foot-"+e,staticClass:"foot",class:["foot-"+e],style:{animationDuration:t.duration+"s",animationDelay:"left"===e?-t.duration/2+"s":"0s"}},t._l(t.prints,(function(e){return n("div",{staticClass:"print",style:{background:t.color,color:t.color}},[n("div",{staticClass:"model"})])})),0)})),0)])},o=[],i={name:"LoadingFootprints",data(){return{loadingText:"Loading...",color:"rgb(255,228,196)",type:"goose",printCount:10,lineHeight:1,rotate:-35,duration:1.5}},computed:{prints(){let t=[],e=0,n=this.printCount||3;while(e++<n)t.push(e);return t}}},l=i,s=(n("09ab"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"0b4be2c6",null);e["default"]=r.exports},"21ca":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-pacman"},[n("div",{staticClass:"pacman",style:{animationDuration:t.duration+"s"}},[n("div",{staticClass:"mouth",style:{background:"linear-gradient(0deg, "+(t.mouthColor||t.color)+" 50%, transparent 50%)"}},[n("div",{staticClass:"eye",style:{background:t.eyeColor||t.color}})]),n("div",{staticClass:"line"},t._l(t.beans,(function(e,a){return n("div",{key:a,staticClass:"bean",style:{background:t.beanColor||t.color}})})),0)])])},o=[],i={name:"LoadingPacman",data(){return{loadingText:"Loading...",color:"bisque",mouthColor:"bisque",eyeColor:"grey",beanColor:"bisque",beanCount:3,duration:1.2}},computed:{beans(){let t=[],e=0,n=this.beanCount||3;while(e++<n)t.push(e);return t}}},l=i,s=(n("e2df"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"026d7346",null);e["default"]=r.exports},"222f":function(t,e,n){},"22f5":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-block"},[n("div",{staticClass:"block-combination",style:{animationDuration:t.duration+"s"}},[n("div",{staticClass:"block block-0",style:{background:t.color}}),t._l(["left","right"],(function(e){return n("div",{key:"arm-"+e,staticClass:"arm",class:["arm-"+e]},t._l([1,2,3,4],(function(e){return n("div",{key:"block-"+e,staticClass:"block",class:["block-"+e],style:{background:t.color}})})),0)}))],2),n("div",{staticClass:"loading-text",style:{color:t.color},domProps:{textContent:t._s(t.loadingText)}})])},o=[],i={name:"LoadingBlock",data(){return{loadingText:"Loading...",color:"seashell",duration:2.5}}},l=i,s=(n("25ab"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"3a16167d",null);e["default"]=r.exports},"25ab":function(t,e,n){"use strict";var a=n("d25e"),o=n.n(a);o.a},"25d5":function(t,e,n){},2949:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-moon"},[n("div",{staticClass:"moon"})])}],i={name:"LoadingMoon"},l=i,s=(n("8740"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"92c11910",null);e["default"]=r.exports},"2a97":function(t,e,n){"use strict";var a=n("4363"),o=n.n(a);o.a},3071:function(t,e,n){},"316d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-ufo"},[n("div",{staticClass:"ufo",style:{animationDuration:t.duration+"s"}}),n("div",{staticClass:"loading-text",domProps:{textContent:t._s(t.loadingText)}})])},o=[],i={name:"LoadingUfo",data(){return{loadingText:"Loading...",duration:2}}},l=i,s=(n("eafb"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"703e4b33",null);e["default"]=r.exports},"3b54":function(t,e,n){"use strict";var a=n("a264"),o=n.n(a);o.a},4363:function(t,e,n){},"437f":function(t,e,n){"use strict";var a=n("6424"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"test-loading"}),n("div",{directives:[{name:"teligen-loading",rawName:"v-teligen-loading",value:t.option,expression:"option"}],staticClass:"test-loading2"}),n("ul",t._l(t.themes,(function(e,a){return n("li",{key:a,on:{click:function(n){return t.changeTheme(e)}}},[n("span",[t._v(" "+t._s(e))])])})),0)])},i=[];const l=n("074f");var s={name:"app",components:{},mounted(){let t=this.$teligenLoading({theme:"LoadingFootprints",target:".test-loading",themeOption:{duration:3}});setTimeout(()=>{t.close()},5e3)},data(){return{themes:l.keys(),option:{show:!0,theme:"LoadingFootprints",themeOption:{}}}},methods:{changeTheme(t){let e=t.split("/")[1].split(".")[0];this.option.theme=e}}},r=s,c=(n("8153"),n("2877")),d=Object(c["a"])(r,o,i,!1,null,"a0c0d678",null),u=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"loading-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"teligen-loading-mask",class:[t.customClass,{"is-fullscreen":t.fullscreen}],style:{backgroundColor:t.background||""}},[n("div",{staticClass:"teligen-loading-content"})])])},g=[],m={name:"teligenLoading",data(){return{show:!1,fullscreen:!0,background:null,customClass:""}},computed:{},methods:{}},h=m,v=(n("aabe"),Object(c["a"])(h,f,g,!1,null,"589c9a3f",null)),p=v.exports;const b=a["a"].prototype.$isServer,y=/([\:\-\_]+(.))/g,C=/^moz([A-Z])/,k=b?0:Number(document.documentMode),x=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},w=function(t){return t.replace(y,(function(t,e,n,a){return a?n.toUpperCase():n})).replace(C,"Moz$1")};(function(){!b&&document.addEventListener})(),function(){!b&&document.removeEventListener}();function _(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}function L(t,e){if(t){for(var n=t.className,a=(e||"").split(" "),o=0,i=a.length;o<i;o++){var l=a[o];l&&(t.classList?t.classList.add(l):_(t,l)||(n+=" "+l))}t.classList||(t.className=n)}}function O(t,e){if(t&&e){for(var n=e.split(" "),a=" "+t.className+" ",o=0,i=n.length;o<i;o++){var l=n[o];l&&(t.classList?t.classList.remove(l):_(t,l)&&(a=a.replace(" "+l+" "," ")))}t.classList||(t.className=x(a))}}const E=k<9?function(t,e){if(!b){if(!t||!e)return null;e=w(e),"float"===e&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(n){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!b){if(!t||!e)return null;e=w(e),"float"===e&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(a){return t.style[e]}}};n("111c");const $=a["a"].extend(p);let j={};const S=n("074f");S.keys().forEach(t=>{const e=t.split("/")[1].split(".")[0],n=S(t);j[e]=a["a"].extend(n.default)});const T={install:(t,e)=>{if(t.prototype.$isServer)return;let n={background:null,show:!1,customClass:"",theme:"LoadingDefault",themeOption:{}};Object.assign(n,e);const a=t=>t.theme&&Object.keys(j).includes(t.theme),o=(t,e)=>{return Object.entries(e).every(([e,n])=>t[e]===n)},i=(e,n)=>{console.log("toggleLoading toggleLoading");let o=s(n.value);if(e.option=o,o.show){if(a(o)||(o.theme="LoadingDefault"),e.themeName&&e.themeName===o.theme)Object.keys(o.themeOption).forEach(t=>{e.themeInstance[t]=o.themeOption[t]});else{e.themeInstance&&(e.mask.getElementsByClassName("teligen-loading-content")[0].removeChild(e.theme),e.themeInstance.$destroy());let t=Object.assign({},o.themeOption),n=new j[o.theme]({el:document.createElement("div"),data:t});e.themeInstance=n,e.themeName=o.theme,e.theme=n.$el}t.nextTick(()=>{n.modifiers.fullscreen?(e.originalPosition=E(document.body,"position"),l(document.body,e,n)):n.modifiers.body?(e.originalPosition=E(document.body,"position"),["top","left"].forEach(t=>{const n="top"===t?"scrollTop":"scrollLeft";e.maskStyle[t]=e.getBoundingClientRect()[t]+document.body[n]+document.documentElement[n]-parseInt(E(document.body,`margin-${t}`),10)+"px"}),["height","width"].forEach(t=>{e.maskStyle[t]=e.getBoundingClientRect()[t]+"px"}),l(document.body,e,n)):(e.originalPosition=E(e,"position"),l(e,e,n))})}else{const t=n.modifiers.fullscreen||n.modifiers.body?document.body:e;O(t,"teligen-loading-parent--relative"),O(t,"teligen-loading-parent--hidden"),e.instance.show=!1}},l=(t,e,n)=>{"none"!==E(e,"display")&&"hidden"!==E(e,"visibility")&&(Object.keys(e.maskStyle).forEach(t=>{e.mask.style[t]=e.maskStyle[t]}),"absolute"!==e.originalPosition&&"fixed"!==e.originalPosition&&L(t,"teligen-loading-parent--relative"),n.modifiers.fullscreen&&n.modifiers.lock&&L(t,"teligen-loading-parent--hidden"),e.mask.getElementsByClassName("teligen-loading-content")[0].appendChild(e.theme),t.appendChild(e.mask),e.instance.show=!0,e.domInserted=!0)},s=t=>{let e={};return t instanceof Object?Object.assign(e,n,t):t?Object.assign(e,n,{show:!0}):Object.assign(e,n,{show:!1}),e};t.directive("teligen-loading",{bind(t,e,n){console.log("bind bind");let a=s(e.value);const o=new $({el:document.createElement("div"),data:{background:a.background,customClass:a.customClass,show:a.show,fullscreen:!!e.modifiers.fullscreen}});t.option=a,t.instance=o,t.mask=o.$el,t.maskStyle={},a.show&&i(t,e)},update(t,e,n){console.log("update update");let a=s(e.value);o(a,t.option)||(a.show&&(t.instance.customClass=a.customClass,t.instance.background=a.background,t.instance.show=a.show),i(t,e))},unbind(t,e){t.domInserted&&(t.mask&&(t.mask.getElementsByClassName("teligen-loading-content")[0].removeChild(t.theme),t.mask.parentNode&&t.mask.parentNode.removeChild(t.mask)),i(t,{value:!1,modifiers:e.modifiers})),t.instance&&t.instance.$destroy(),t.themeInstance&&t.themeInstance.$destroy()}})}};var N=T;const D=a["a"].extend(p);let P={};const B=n("074f");B.keys().forEach(t=>{const e=t.split("/")[1].split(".")[0],n=B(t);P[e]=a["a"].extend(n.default)});const I={fullscreen:!0,background:null,body:!1,lock:!1,customClass:"",theme:"LoadingDefault",themeOption:{}};let F;D.prototype.originalPosition="",D.prototype.close=function(){this.fullscreen&&(F=void 0);const t=this.fullscreen||this.body?document.body:this.target;O(t,"teligen-loading-parent--relative"),O(t,"teligen-loading-parent--hidden"),this.$el&&(this.$el.getElementsByClassName("teligen-loading-content")[0].removeChild(this.theme),this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)),this.show=!1,this.themeInstance.$destroy(),this.$destroy()};const M=(t,e,n)=>{let a={};t.fullscreen?(n.originalPosition=E(document.body,"position"),n.originalOverflow=E(document.body,"overflow")):t.body?(n.originalPosition=E(document.body,"position"),["top","left"].forEach(e=>{let n="top"===e?"scrollTop":"scrollLeft";a[e]=t.target.getBoundingClientRect()[e]+document.body[n]+document.documentElement[n]+"px"}),["height","width"].forEach(e=>{a[e]=t.target.getBoundingClientRect()[e]+"px"})):n.originalPosition=E(e,"position"),Object.keys(a).forEach(t=>{n.$el.style[t]=a[t]})},R=t=>t.theme&&Object.keys(P).includes(t.theme),A=(t={})=>{if(a["a"].prototype.$isServer)return;if(t=Object.assign({},I,t),"string"===typeof t.target&&(t.target=document.querySelector(t.target)),t.target=t.target||document.body,t.target!==document.body?t.fullscreen=!1:t.body=!0,R(t)||(t.theme="LoadingDefault"),t.fullscreen&&F){if(t.theme!==F.themeName){let e=Object.assign({},t.themeOption),n=new P[t.theme]({el:document.createElement("div"),data:e});F.$el.getElementsByClassName("teligen-loading-content")[0].removeChild(F.theme),F.themeInstance.$destroy(),F.theme=n.$el,F.themeInstance=n,F.themeName=t.theme,F.$el.getElementsByClassName("teligen-loading-content")[0].appendChild(F.theme)}else Object.keys(t.themeOption).forEach(e=>{F.themeInstance[e]=t.themeOption[e]});return F.background=t.background,F.customClass=t.customClass,F}let e=t.body?document.body:t.target,n=new D({el:document.createElement("div"),data:t});M(t,e,n),"absolute"!==n.originalPosition&&"fixed"!==n.originalPosition&&L(e,"teligen-loading-parent--relative"),t.fullscreen&&t.lock&&L(e,"teligen-loading-parent--hidden");let o=Object.assign({},t.themeOption),i=new P[t.theme]({el:document.createElement("div"),data:o});return n.themeInstance=i,n.themeName=t.theme,n.theme=i.$el,n.$el.getElementsByClassName("teligen-loading-content")[0].appendChild(i.$el),e.appendChild(n.$el),a["a"].nextTick(()=>{n.show=!0}),t.fullscreen&&(F=n),n};var J=A,H={install(t,e){t.use(N,e),t.prototype.$teligenLoading=J},directive:N,service:J};a["a"].use(H),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(u)}}).$mount("#app")},"5ecd":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-orbit"},[n("div",{staticClass:"star"},[n("div",{staticClass:"planet",style:{animationDuration:t.duration+"s"}},[n("div",{staticClass:"satellite",style:{animationDuration:(t.duration2||t.duration)+"s"}})])]),n("div",{staticClass:"loading-text",domProps:{textContent:t._s(t.loadingText)}})])},o=[],i={name:"LoadingOrbit",data(){return{loadingText:"Loading...",duration:10,duration2:1}}},l=i,s=(n("f131"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"75a694bb",null);e["default"]=r.exports},"619c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-butterfly"},[n("div",{staticClass:"origin"},[n("div",{staticClass:"butterfly",style:{color:t.butterflyColor,textShadow:"0 0 5px "+t.whiteColor,animationDuration:t.duration+"s",animationDelay:-.42*t.duration+"s"}},[t._l(["left","right"],(function(e,a){return n("div",{key:"wing-"+e,staticClass:"wing",class:["wing-"+e],style:{background:t.butterflyColor,boxShadow:"-16px -16px 0 -2px "+t.butterflyColor}})})),t._l(t.loadingTextArr,(function(t,e){return n("div",{key:"char-"+e,staticClass:"char",style:{transform:"rotate("+(15*-e-20)+"deg)"},attrs:{"data-text":t}})}))],2),n("div",{staticClass:"cat",style:{background:t.color}},[t._l(["left","right"],(function(e,a){return n("div",{key:"ear-"+e,staticClass:"ear",class:["ear-"+e],style:{animationDuration:t.duration/2+"s",animationDelay:-.42*t.duration+"s"}})})),t._l(["left","right"],(function(e,a){return n("div",{key:"eye-"+e,staticClass:"eye",class:["eye-"+e],style:{background:t.whiteColor}},[n("div",{staticClass:"pupil",style:{background:t.butterflyColor,animationDuration:t.duration+"s"}})])}))],2)])])},o=[],i={name:"LoadingButterfly",data(){return{loadingText:"Loading...",color:"#101",eyeColor:"#101",whiteColor:"#f4b860",duration:3}},computed:{butterflyColor(){return this.eyeColor||this.color},loadingTextArr(){return this.loadingText.split("")}}},l=i,s=(n("3b54"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"53b16a8e",null);e["default"]=r.exports},6424:function(t,e,n){},"6f8d":function(t,e,n){},7452:function(t,e,n){},"745e":function(t,e,n){},"760e":function(t,e,n){},"77b6":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-ball"},[n("div",{staticClass:"ball",style:{background:t.color,color:t.invertColor,animationDuration:t.duration+"s"},attrs:{"data-text":t.loadingText}})])},o=[],i={name:"LoadingBall",data(){return{loadingText:"Loading...",color:"rgb(255,228,196)",duration:.9}},computed:{invertColor(){let t=this.color||"";if(/rgb/.test(t)){let e=t.split(/\(|,|\)/).filter(Boolean).map((t,e)=>{return e>0&&e<4?255-t:t});return e[0]+"("+e.slice(1).join(",")+")"}if(/#/.test(t)){let e,n=t.replace(/#/g,"").trim();return 3===n.length?e=n.split("").map(t=>{return t+t}):6===n.length&&(e=[n.slice(0,2),n.slice(2,4),n.slice(4,6)]),e?(e.forEach((t,n)=>{e[n]=(255-parseInt(t,16)).toString(16);while(e[n].length<2)e[n]="0"+e[n]}),"#"+e.join("")):t}return t}}},l=i,s=(n("cf1a"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"282b5104",null);e["default"]=r.exports},8153:function(t,e,n){"use strict";var a=n("25d5"),o=n.n(a);o.a},8740:function(t,e,n){"use strict";var a=n("6f8d"),o=n.n(a);o.a},"8c95":function(t,e,n){"use strict";var a=n("3071"),o=n.n(a);o.a},"8cce":function(t,e,n){"use strict";var a=n("b4db"),o=n.n(a);o.a},"98be":function(t,e,n){"use strict";var a=n("dd69"),o=n.n(a);o.a},"9e97":function(t,e,n){"use strict";var a=n("745e"),o=n.n(a);o.a},"9f09":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-cat"},[n("div",{staticClass:"cat-scene"},[n("div",{staticClass:"bed"}),n("div",{staticClass:"cat"},[n("div",{staticClass:"head"},[n("div",{staticClass:"nose"})]),n("div",{staticClass:"body"}),n("div",{staticClass:"tail"})])])])}],i={name:"LoadingCat",data(){return{loadingText:"Loading..."}}},l=i,s=(n("8cce"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"20b808da",null);e["default"]=r.exports},"9f87":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-hourglass"},[n("div",{staticClass:"hourglass",style:{animationDuration:t.duration+"s"}},t._l(["upper","lower"],(function(e,a){return n("div",{key:a,staticClass:"half",class:[e+"-half"],style:{boxShadow:"0 -10px 0 9px "+t.glassColor}},[n("div",{staticClass:"sand",style:{animationDelay:-t.duration/2+"s"}},[n("div",{staticClass:"flow-out",style:{background:t.sandColor}}),n("div",{staticClass:"flow-in",style:{borderTopColor:t.sandColor}})])])})),0),n("div",{staticClass:"loading-text",style:{color:t.glassColor},domProps:{textContent:t._s(t.loadingText)}})])},o=[],i={name:"LoadingHourglass",data(){return{loadingText:"Loading...",sandColor:"sandybrown",glassColor:"aliceblue",duration:3}}},l=i,s=(n("9e97"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"8cb90b46",null);e["default"]=r.exports},a264:function(t,e,n){},a7fc:function(t,e,n){"use strict";var a=n("7452"),o=n.n(a);o.a},aabe:function(t,e,n){"use strict";var a=n("760e"),o=n.n(a);o.a},b4db:function(t,e,n){},b698:function(t,e,n){},b739:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"LoadingDefault"},[n("div",{domProps:{textContent:t._s(t.loadingText)}})])},o=[],i={name:"LoadingDefault",data(){return{loadingText:null}}},l=i,s=(n("437f"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"6434b5c8",null);e["default"]=r.exports},c955:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-swing"},[n("div",{staticClass:"swing",style:{background:t.color}},t._l(["left","right"],(function(e,a){return n("div",{key:a,staticClass:"ring",class:["ring-"+e],style:{boxShadow:"-2px 0 0 2px "+(t.ropeColor||t.invertColor)}},[n("div",{staticClass:"rope",style:{background:t.ropeColor||t.invertColor,animationDuration:t.duration+"s"}},["left"===e?n("div",{staticClass:"seat",style:{background:t.color}},[n("div",{staticClass:"loading-text",style:{color:t.color},domProps:{textContent:t._s(t.loadingText)}})]):t._e()])])})),0)])},o=[],i={name:"LoadingSwing",data(){return{loadingText:"Loading...",color:"rgb(255,228,196)",ropeColor:"",duration:2}},computed:{invertColor(){let t=this.color||"";if(/rgb/.test(t)){let e=t.split(/\(|,|\)/).filter(Boolean).map((t,e)=>{return e>0&&e<4?255-t:t});return e[0]+"("+e.slice(1).join(",")+")"}if(/#/.test(t)){let e,n=t.replace(/#/g,"").trim();return 3===n.length?e=n.split("").map(t=>{return t+t}):6===n.length&&(e=[n.slice(0,2),n.slice(2,4),n.slice(4,6)]),e?(e.forEach((t,n)=>{e[n]=(255-parseInt(t,16)).toString(16);while(e[n].length<2)e[n]="0"+e[n]}),"#"+e.join("")):t}return t}}},l=i,s=(n("98be"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"51b58bfa",null);e["default"]=r.exports},cf1a:function(t,e,n){"use strict";var a=n("222f"),o=n.n(a);o.a},d25e:function(t,e,n){},dbed:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-spiral",style:t.reverseX?{transform:"scaleX(-1)"}:{}},[n("div",{staticClass:"spiral",style:{perspective:t.perspective+"px"}},[n("div",{staticClass:"stairs",style:{animationDuration:t.duration+"s",animationDirection:t.reverseY?"reverse":"normal"}},t._l(t.arr,(function(e,a){return n("div",{key:a,staticClass:"step",style:{background:t.color,transform:"translateZ("+(5e3-10*a)+"px) rotateZ("+20*a+"deg)"}},[n("div",{staticClass:"bottom",style:{background:t.bottomColor||t.invertColor}})])})),0)])])},o=[],i={name:"LoadingSpiral",data(){return{loadingText:"Loading...",perspective:240,color:"#f7f",bottomColor:"#101",duration:10,reverseX:!0,reverseY:!0}},computed:{arr(){let t=[],e=0,n=1e3;while(e++<n)t.push(e);return t},invertColor(){let t=this.color||"";if(/rgb/.test(t)){let e=t.split(/\(|,|\)/).filter(Boolean).map((t,e)=>{return e>0&&e<4?255-t:t});return e[0]+"("+e.slice(1).join(",")+")"}if(/#/.test(t)){let e,n=t.replace(/#/g,"").trim();return 3===n.length?e=n.split("").map(t=>{return t+t}):6===n.length&&(e=[n.slice(0,2),n.slice(2,4),n.slice(4,6)]),e?(e.forEach((t,n)=>{e[n]=(255-parseInt(t,16)).toString(16);while(e[n].length<2)e[n]="0"+e[n]}),"#"+e.join("")):t}return t}}},l=i,s=(n("8c95"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"d1ee76dc",null);e["default"]=r.exports},dd69:function(t,e,n){},e2df:function(t,e,n){"use strict";var a=n("b698"),o=n.n(a);o.a},eafb:function(t,e,n){"use strict";var a=n("fc4b"),o=n.n(a);o.a},f131:function(t,e,n){"use strict";var a=n("0afd"),o=n.n(a);o.a},fc4b:function(t,e,n){},ffc8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teligen-loading teligen-loading-lattice"},[n("div",{staticClass:"lattice",style:{borderColor:t.borderColor,background:t.background}},t._l(t.lattice,(function(e,a){return n("div",{key:a,staticClass:"lattice-row clearfix"},t._l(e,(function(e,a){return n("div",{key:a,staticClass:"lattice-col",style:{borderColor:t.borderColor,background:e.colored?t.color:"transparent"},on:{click:function(t){e.colored=!e.colored}}})})),0)})),0),n("div",{staticClass:"lattice-toolbar"},[n("div",{staticClass:"lattice-button",on:{click:function(e){return t.saveLattice()}}},[t._v("SAVE")]),n("div",{staticClass:"lattice-button",on:{click:function(e){return t.clearLattice()}}},[t._v("CLEAR")]),n("div",{staticClass:"lattice-button",on:{click:function(e){return t.revertLattice()}}},[t._v("REVERT")]),n("div",{staticClass:"lattice-button"},[n("span",[t._v("MOVE")]),n("div",{staticClass:"lattice-button top",on:{click:function(e){return t.moveLattice("up")}}},[t._v("↑")]),n("div",{staticClass:"lattice-button bottom",on:{click:function(e){return t.moveLattice("down")}}},[t._v("↓")]),n("div",{staticClass:"lattice-button left",on:{click:function(e){return t.moveLattice("left")}}},[t._v("←")]),n("div",{staticClass:"lattice-button right",on:{click:function(e){return t.moveLattice("right")}}},[t._v("→")])])])])},o=[],i={name:"LoadingLattice",data(){return{loadingText:"Loading...",lattice:[],before:"[]",ctrl:{w:40,h:20},background:"#fff",borderColor:"#ddd",color:"coral"}},watch:{ctrl:{immediate:!0,deep:!0,handler(t,e){console.warn("ctrl watcher");let n=0|t.w,a=0|t.h,o=[];for(let i=0;i<a;i++){let t=this.lattice[i]||[],e=[];for(let a=0;a<n;a++)e.push(t[a]||this.defaultCol());o.push(e)}this.lattice=o}},lattice:{deep:!0,handler(t,e){console.warn("lattice watcher"),this.before=JSON.stringify(this.lattice||[])}}},mounted(){this.getLattice()},methods:{defaultCol(){return{colored:!1}},defaultRow(){let t=[];for(let e=0,n=this.ctrl.w;e<n;e++)t.push(this.defaultCol());return t},clearLattice(){this.lattice.forEach(t=>{t.forEach(t=>{t.colored=!1})})},revertLattice(){this.lattice=JSON.parse(this.before)||[]},moveLattice(t){if(!(this.lattice instanceof Array))return;let e=this.ctrl.h-1,n=this.ctrl.w-1;switch(t){case"up":for(let t=0;t<=e;t++)this.$set(this.lattice,t,this.lattice[t+1]||this.defaultRow());break;case"down":for(let t=e;t>=0;t--)this.$set(this.lattice,t,this.lattice[t-1]||this.defaultRow());break;case"left":this.lattice.forEach(t=>{for(let e=0;e<=n;e++)this.$set(t,e,t[e+1]||this.defaultCol())});break;case"right":this.lattice.forEach(t=>{for(let e=n;e>=0;e--)this.$set(t,e,t[e-1]||this.defaultCol())});break}},saveLattice(){localStorage.setItem("my_lattice",JSON.stringify(this.lattice||[])),console.log(localStorage.getItem("my_lattice"))},getLattice(){let t=JSON.parse(localStorage.getItem("my_lattice")||"[]")||[];this.lattice.forEach((e,n)=>{let a=t[n]||[];e.forEach((t,n)=>{this.$set(e,n,a[n]||this.defaultCol())})})}}},l=i,s=(n("a7fc"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,"a2bd7c6a",null);e["default"]=r.exports}});
//# sourceMappingURL=app.c2bdfe16.js.map