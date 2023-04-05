"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),o=new RegExp(l.source+r.source,"gu"),i=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,a,r)=>{let l=!1,s=!1,o=!1;for(let i=0;i<e.length;i++){const c=e[i];l&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),l=!1,o=s,s=!0,i++):s&&o&&n.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),o=s,s=!1,l=!0):(l=a(c)===c&&r(c)!==c,o=s,s=r(c)===c&&a(c)!==c)}return e})(e,l,c)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,l):l(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,i.lastIndex=0,e.replace(o,((e,n)=>t(n))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,n){n.d(t,{G:function(){return M},L:function(){return g},M:function(){return x},P:function(){return k},S:function(){return q},_:function(){return o},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return i}});var a=n(7294),r=(n(3204),n(5697)),l=n.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t.indexOf(n=l[a])>=0||(r[n]=e[n]);return r}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,n){const a={};let r="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:a}}function d(e,t,n,a,r){return void 0===r&&(r={}),s({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function m(e,t,n,a,r,l,o,i){const c={};l&&(c.backgroundColor=l,"fixed"===n?(c.width=a,c.height=r,c.backgroundColor=l,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),i&&(c.objectPosition=i);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],f=function(e){let{layout:t,width:n,height:r}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=o(e,p);return a.createElement(a.Fragment,null,a.createElement(f,s({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:r,alt:l="",shouldLoad:i}=e,c=o(e,h);return a.createElement("img",s({},c,{decoding:"async",loading:r,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?n:void 0,"data-srcset":i?void 0:n,alt:l}))},w=function(e){let{fallback:t,sources:n=[],shouldLoad:r=!0}=e,l=o(e,b);const i=l.sizes||(null==t?void 0:t.sizes),c=a.createElement(y,s({},l,t,{sizes:i,shouldLoad:r}));return n.length?a.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:l}=e;return a.createElement("source",{key:t+"-"+l+"-"+n,type:l,media:t,srcSet:r?n:void 0,"data-srcset":r?void 0:n,sizes:i})})),c):c};var v;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},w.displayName="Picture",w.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const E=["fallback"],k=function(e){let{fallback:t}=e,n=o(e,E);return t?a.createElement(w,s({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},n))};k.displayName="Placeholder",k.propTypes={fallback:r.string,sources:null==(v=w.propTypes)?void 0:v.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const x=function(e){return a.createElement(a.Fragment,null,a.createElement(w,s({},e)),a.createElement("noscript",null,a.createElement(w,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=w.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),I=function(e,t,n){for(var a=arguments.length,r=new Array(a>3?a-3:0),s=3;s<a;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,n].concat(r)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},P={image:l().object.isRequired,alt:I},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],T=new Set;let O,D;const R=function(e){let{as:t="div",image:r,style:l,backgroundColor:c,className:d,class:m,onStartLoad:p,onLoad:f,onError:g}=e,h=o(e,L);const{width:b,height:y,layout:w}=r,v=u(b,y,w),{style:E,className:k}=v,x=o(v,j),N=(0,a.useRef)(),S=(0,a.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(d=m);const C=function(e,t,n){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(w,b,y);return(0,a.useEffect)((()=>{O||(O=Promise.all([n.e(774),n.e(731)]).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return D=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(S);if(D&&T.has(S))return;let t,a;return O.then((e=>{let{renderImageToString:n,swapPlaceholderImage:o}=e;N.current&&(N.current.innerHTML=n(s({isLoading:!0,isLoaded:T.has(S),image:r},h)),T.has(S)||(t=requestAnimationFrame((()=>{N.current&&(a=o(N.current,S,T,l,p,f,g))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[r]),(0,a.useLayoutEffect)((()=>{T.has(S)&&D&&(N.current.innerHTML=D(s({isLoading:T.has(S),isLoaded:T.has(S),image:r},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[r]),(0,a.createElement)(t,s({},x,{style:s({},E,l,{backgroundColor:c}),className:k+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},M=(0,a.memo)((function(e){return e.image?(0,a.createElement)(R,e):null}));M.propTypes=P,M.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function F(e){return function(t){let{src:n,__imageData:r,__error:l}=t,i=o(t,A);return l&&console.warn(l),r?a.createElement(e,s({image:r},i)):(console.warn("Image not loaded",n),null)}}const H=F((function(e){let{as:t="div",className:n,class:r,style:l,image:i,loading:c="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:b,objectPosition:y}=e,w=o(e,N);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(n=r),f=s({objectFit:b,objectPosition:y,backgroundColor:h},f);const{width:v,height:E,layout:I,images:P,placeholder:L,backgroundColor:j}=i,T=u(v,E,I),{style:O,className:D}=T,R=o(T,S),M={fallback:void 0,sources:[]};return P.fallback&&(M.fallback=s({},P.fallback,{srcSet:P.fallback.srcSet?C(P.fallback.srcSet):void 0})),P.sources&&(M.sources=P.sources.map((e=>s({},e,{srcSet:C(e.srcSet)})))),a.createElement(t,s({},R,{style:s({},O,l,{backgroundColor:h}),className:D+(n?" "+n:"")}),a.createElement(g,{layout:I,width:v,height:E},a.createElement(k,s({},m(L,!1,I,v,E,j,b,y))),a.createElement(x,s({"data-gatsby-image-ssr":"",className:p},w,d("eager"===c,!1,M,c,f)))))})),B=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),W={src:l().string.isRequired,alt:I,width:B,height:B,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};H.displayName="StaticImage",H.propTypes=W;const q=F(M);q.displayName="StaticImage",q.propTypes=W},4993:function(e,t,n){n.d(t,{Z:function(){return te}});var a=n(7294),r=n(8032),l=n(1883);function s(e,t,...n){if(e in t){let a=t[e];return"function"==typeof a?a(...n):a}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,s),a}var o=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(o||{}),i=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(i||{});function c({ourProps:e,theirProps:t,slot:n,defaultTag:a,features:r,visible:l=!0,name:o}){let i=d(t,e);if(l)return u(i,n,a,o);let c=null!=r?r:0;if(2&c){let{static:e=!1,...t}=i;if(e)return u(t,n,a,o)}if(1&c){let{unmount:e=!0,...t}=i;return s(e?0:1,{0(){return null},1(){return u({...t,hidden:!0,style:{display:"none"}},n,a,o)}})}return u(i,n,a,o)}function u(e,t={},n,r){let{as:l=n,children:s,refName:o="ref",...i}=f(e,["unmount","static"]),c=void 0!==e.ref?{[o]:e.ref}:{},u="function"==typeof s?s(t):s;i.className&&"function"==typeof i.className&&(i.className=i.className(t));let m={};if(t){let e=!1,n=[];for(let[a,r]of Object.entries(t))"boolean"==typeof r&&(e=!0),!0===r&&n.push(a);e&&(m["data-headlessui-state"]=n.join(" "))}if(l===a.Fragment&&Object.keys(p(i)).length>0){if(!(0,a.isValidElement)(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,a.cloneElement)(u,Object.assign({},d(u.props,p(f(i,["ref"]))),m,c,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(u.ref,c.ref)))}return(0,a.createElement)(l,Object.assign({},f(i,["ref"]),l!==a.Fragment&&c,l!==a.Fragment&&m),u)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let a of e)for(let e in a)e.startsWith("on")&&"function"==typeof a[e]?(null!=n[e]||(n[e]=[]),n[e].push(a[e])):t[e]=a[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let a in n)Object.assign(t,{[a](e,...t){let r=n[a];for(let n of r){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function m(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function f(e,t=[]){let n=Object.assign({},e);for(let a of t)a in n&&delete n[a];return n}const g="undefined"==typeof window||"undefined"==typeof document;let h=g?a.useEffect:a.useLayoutEffect;let b=function(e){let t=function(e){let t=(0,a.useRef)(e);return h((()=>{t.current=e}),[e]),t}(e);return a.useCallback(((...e)=>t.current(...e)),[t])},y=Symbol();function w(e,t=!0){return Object.assign(e,{[y]:t})}function v(...e){let t=(0,a.useRef)(e);(0,a.useEffect)((()=>{t.current=e}),[e]);let n=b((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[y])))?void 0:n}let E={serverHandoffComplete:!1};var k;let x=0;function N(){return++x}let S=null!=(k=a.useId)?k:function(){let e=function(){let[e,t]=(0,a.useState)(E.serverHandoffComplete);return(0,a.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,a.useEffect)((()=>{!1===E.serverHandoffComplete&&(E.serverHandoffComplete=!0)}),[]),e}(),[t,n]=a.useState(e?N:null);return h((()=>{null===t&&n(N())}),[t]),null!=t?""+t:void 0};var C=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(C||{});function I(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let a=""===(null==t?void 0:t.getAttribute("disabled"));return(!a||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&a}let P=(0,a.createContext)(null);P.displayName="OpenClosedContext";var L=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(L||{});function j(){return(0,a.useContext)(P)}function T({value:e,children:t}){return a.createElement(P.Provider,{value:e},t)}function O(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function D(e,t){let[n,r]=(0,a.useState)((()=>O(e)));return h((()=>{r(O(e))}),[e.type,e.as]),h((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")}),[n,t]),n}var R,M=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(M||{}),A=((R=A||{})[R.ToggleDisclosure=0]="ToggleDisclosure",R[R.CloseDisclosure=1]="CloseDisclosure",R[R.SetButtonId=2]="SetButtonId",R[R.SetPanelId=3]="SetPanelId",R[R.LinkPanel=4]="LinkPanel",R[R.UnlinkPanel=5]="UnlinkPanel",R);let F={0:e=>({...e,disclosureState:s(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4(e){return!0===e.linkedPanel?e:{...e,linkedPanel:!0}},5(e){return!1===e.linkedPanel?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},H=(0,a.createContext)(null);function B(e){let t=(0,a.useContext)(H);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,B),t}return t}H.displayName="DisclosureContext";let _=(0,a.createContext)(null);function W(e){let t=(0,a.useContext)(_);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,W),t}return t}_.displayName="DisclosureAPIContext";let q=(0,a.createContext)(null);function U(e,t){return s(t.type,F,e,t)}q.displayName="DisclosurePanelContext";let z=a.Fragment,$=m((function(e,t){let{defaultOpen:n=!1,...r}=e,l=(0,a.useRef)(null),o=v(t,w((e=>{l.current=e}),void 0===e.as||e.as===a.Fragment)),i=(0,a.useRef)(null),u=(0,a.useRef)(null),d=(0,a.useReducer)(U,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:u,panelRef:i,buttonId:null,panelId:null}),[{disclosureState:m,buttonId:p},f]=d,h=b((e=>{f({type:1});let t=function(e){return g?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}(l);if(!t||!p)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(p):t.getElementById(p);null==n||n.focus()})),y=(0,a.useMemo)((()=>({close:h})),[h]),E=(0,a.useMemo)((()=>({open:0===m,close:h})),[m,h]),k={ref:o};return a.createElement(H.Provider,{value:d},a.createElement(_.Provider,{value:y},a.createElement(T,{value:s(m,{0:L.Open,1:L.Closed})},c({ourProps:k,theirProps:r,slot:E,defaultTag:z,name:"Disclosure"}))))})),G=m((function(e,t){let n=S(),{id:r=`headlessui-disclosure-button-${n}`,...l}=e,[s,o]=B("Disclosure.Button"),i=(0,a.useContext)(q),u=null!==i&&i===s.panelId,d=(0,a.useRef)(null),m=v(d,t,u?null:s.buttonRef);(0,a.useEffect)((()=>{if(!u)return o({type:2,buttonId:r}),()=>{o({type:2,buttonId:null})}}),[r,o,u]);let p=b((e=>{var t;if(u){if(1===s.disclosureState)return;switch(e.key){case C.Space:case C.Enter:e.preventDefault(),e.stopPropagation(),o({type:0}),null==(t=s.buttonRef.current)||t.focus()}}else switch(e.key){case C.Space:case C.Enter:e.preventDefault(),e.stopPropagation(),o({type:0})}})),f=b((e=>{if(e.key===C.Space)e.preventDefault()})),g=b((t=>{var n;I(t.currentTarget)||e.disabled||(u?(o({type:0}),null==(n=s.buttonRef.current)||n.focus()):o({type:0}))})),h=(0,a.useMemo)((()=>({open:0===s.disclosureState})),[s]),y=D(e,d);return c({ourProps:u?{ref:m,type:y,onKeyDown:p,onClick:g}:{ref:m,id:r,type:y,"aria-expanded":e.disabled?void 0:0===s.disclosureState,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:p,onKeyUp:f,onClick:g},theirProps:l,slot:h,defaultTag:"button",name:"Disclosure.Button"})})),K=o.RenderStrategy|o.Static,V=m((function(e,t){let n=S(),{id:r=`headlessui-disclosure-panel-${n}`,...l}=e,[s,o]=B("Disclosure.Panel"),{close:i}=W("Disclosure.Panel"),u=v(t,s.panelRef,(e=>{o({type:e?4:5})}));(0,a.useEffect)((()=>(o({type:3,panelId:r}),()=>{o({type:3,panelId:null})})),[r,o]);let d=j(),m=null!==d?d===L.Open:0===s.disclosureState,p=(0,a.useMemo)((()=>({open:0===s.disclosureState,close:i})),[s,i]),f={ref:u,id:r};return a.createElement(q.Provider,{value:s.panelId},c({ourProps:f,theirProps:l,slot:p,defaultTag:"div",features:K,visible:m,name:"Disclosure.Panel"}))})),Z=Object.assign($,{Button:G,Panel:V});var J=a.forwardRef((function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}));var Y=a.forwardRef((function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}));const Q=[{name:"What I Do",href:"/"},{name:"Blog",href:"/blog"},{name:"Experience",href:"/about/#experience"},{name:"FREE Guide",href:"/typescript-essentials-free-guide",className:"block px-3 py-2 rounded-md text-base bg-cyan-600 hover:bg-cyan-500 text-white font-bold"},{name:"About",href:"/about"}],X=()=>a.createElement(Z,{as:"nav",id:"navbar",className:"bg-gray-800"},(e=>{let{open:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},a.createElement("div",{className:"relative flex h-16 items-center justify-between"},a.createElement("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden"},a.createElement(Z.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},a.createElement("span",{className:"sr-only"},"Open main menu"),t?a.createElement(J,{className:"block h-6 w-6","aria-hidden":"true"}):a.createElement(Y,{className:"block h-6 w-6","aria-hidden":"true"}))),a.createElement("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-between"},a.createElement("div",{className:"flex flex-shrink-0 items-center"},a.createElement(l.Link,{to:"/"},a.createElement("div",{className:"flex flex-shrink-0 items-center"},a.createElement(r.S,{className:"bio-avatar logo-avatar",formats:["auto","webp","avif"],src:"../img/about/headshot.jpg",width:30,height:30,quality:95,alt:"Preston Wallace logo",__imageData:n(433)}),a.createElement("span",{className:"logo-header text-cyan-400"},"Preston")))),a.createElement("div",{className:"hidden sm:ml-6 sm:block"},a.createElement("div",{className:"flex space-x-4"},Q.map((e=>a.createElement("a",{key:e.name,href:e.href,className:e.className?e.className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold"},e.name)))))))),a.createElement(Z.Panel,{className:"sm:hidden mobile-menu"},a.createElement("div",{className:"space-y-1 px-2 pt-2 pb-3"},Q.map((e=>a.createElement(Z.Button,{key:e.name,as:"a",href:e.href,className:e.className?e.className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"},e.name))))))})),ee=()=>a.createElement("footer",{className:"footer-area section-padding"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-md-12"},a.createElement("div",{className:"footer-text text-center wow fadeInDown","data-wow-delay":"0.3s"},a.createElement("ul",{className:"social-icon wow fadeInUp","data-wow-delay":"0.8s"},a.createElement("li",null,a.createElement("a",{className:"linkedin",href:"https://www.linkedin.com/in/prestonwallace/"},a.createElement("i",{className:"icon-social-linkedin"}))),a.createElement("li",null,a.createElement("a",{className:"linkedin",href:"https://www.youtube.com/channel/UCoiCi3NyMZ98Rj5K3vZfExw"},a.createElement("i",{className:"icon-social-youtube"}))),a.createElement("li",null,a.createElement("a",{className:"linkedin",href:"https://github.com/wallacepreston"},a.createElement("i",{className:"icon-social-github"})))),"© ",(new Date).getFullYear(),", Built by Preston Wallace")))));var te=e=>{let{location:t,title:n,children:r,prepended:l,addMargin:s=!0,hideTitle:o=!1}=e;const i="/"===t.pathname,c=["global-wrapper"];return s&&c.push("global-margin"),l||c.push("global-not-prepended"),a.createElement(a.Fragment,null,l,a.createElement("div",{"data-is-root-path":i},a.createElement(X,null),a.createElement("main",{className:c.join(" ")},r),a.createElement(ee,null)))}},9357:function(e,t,n){var a=n(7294),r=n(1883);t.Z=e=>{var t,n,l;let{description:s,title:o,children:i}=e;const{site:c}=(0,r.useStaticQuery)("2841359383"),u=s||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?o+" | "+d:o),a.createElement("meta",{name:"description",content:u}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:u}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n||null===(l=n.social)||void 0===l?void 0:l.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:u}),i)}},433:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8b8","images":{"fallback":{"src":"/static/90ac9f531867ebae789b50b21129bc63/bff39/headshot.jpg","srcSet":"/static/90ac9f531867ebae789b50b21129bc63/69990/headshot.jpg 8w,\\n/static/90ac9f531867ebae789b50b21129bc63/3deaf/headshot.jpg 15w,\\n/static/90ac9f531867ebae789b50b21129bc63/bff39/headshot.jpg 30w,\\n/static/90ac9f531867ebae789b50b21129bc63/22a5a/headshot.jpg 60w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/static/90ac9f531867ebae789b50b21129bc63/c42ee/headshot.avif 8w,\\n/static/90ac9f531867ebae789b50b21129bc63/559ff/headshot.avif 15w,\\n/static/90ac9f531867ebae789b50b21129bc63/7331c/headshot.avif 30w,\\n/static/90ac9f531867ebae789b50b21129bc63/fc876/headshot.avif 60w","type":"image/avif","sizes":"(min-width: 30px) 30px, 100vw"},{"srcSet":"/static/90ac9f531867ebae789b50b21129bc63/70f85/headshot.webp 8w,\\n/static/90ac9f531867ebae789b50b21129bc63/10ce9/headshot.webp 15w,\\n/static/90ac9f531867ebae789b50b21129bc63/9694d/headshot.webp 30w,\\n/static/90ac9f531867ebae789b50b21129bc63/79de8/headshot.webp 60w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}')}}]);
//# sourceMappingURL=commons-f14573485a920e4474c7.js.map