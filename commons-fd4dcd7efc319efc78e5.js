"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,o=new RegExp("^"+l.source),s=new RegExp(l.source+r.source,"gu"),i=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,n,r)=>{let l=!1,o=!1,s=!1;for(let i=0;i<e.length;i++){const c=e[i];l&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),l=!1,s=o,o=!0,i++):o&&s&&a.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),s=o,o=!1,l=!0):(l=n(c)===c&&r(c)!==c,s=o,o=r(c)===c&&n(c)!==c)}return e})(e,l,c)),e=e.replace(o,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,l):l(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,i.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return M},L:function(){return g},M:function(){return x},P:function(){return k},S:function(){return q},_:function(){return s},a:function(){return o},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return i}});var n=a(7294),r=(a(3204),a(5697)),l=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(a=l[n])>=0||(r[a]=e[a]);return r}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,l,s,i){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),i&&(c.objectPosition=i);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],f=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=s(e,p);return n.createElement(n.Fragment,null,n.createElement(f,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:r,alt:l="",shouldLoad:i}=e,c=s(e,h);return n.createElement("img",o({},c,{decoding:"async",loading:r,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:l}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,l=s(e,y);const i=l.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,o({},l,t,{sizes:i,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return n.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:i})})),c):c};var v;b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},w.displayName="Picture",w.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const E=["fallback"],k=function(e){let{fallback:t}=e,a=s(e,E);return t?n.createElement(w,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};k.displayName="Placeholder",k.propTypes={fallback:r.string,sources:null==(v=w.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return n.createElement(n.Fragment,null,n.createElement(w,o({},e)),n.createElement("noscript",null,n.createElement(w,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=w.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},P={image:l().object.isRequired,alt:I},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],j=new Set;let O,D;const R=function(e){let{as:t="div",image:r,style:l,backgroundColor:c,className:d,class:m,onStartLoad:p,onLoad:f,onError:g}=e,h=s(e,L);const{width:y,height:b,layout:w}=r,v=u(y,b,w),{style:E,className:k}=v,x=s(v,T),N=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(d=m);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(w,y,b);return(0,n.useEffect)((()=>{O||(O=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return D=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(S);if(D&&j.has(S))return;let t,n;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;N.current&&(N.current.innerHTML=a(o({isLoading:!0,isLoaded:j.has(S),image:r},h)),j.has(S)||(t=requestAnimationFrame((()=>{N.current&&(n=s(N.current,S,j,l,p,f,g))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{j.has(S)&&D&&(N.current.innerHTML=D(o({isLoading:j.has(S),isLoaded:j.has(S),image:r},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[r]),(0,n.createElement)(t,o({},x,{style:o({},E,l,{backgroundColor:c}),className:k+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},M=(0,n.memo)((function(e){return e.image?(0,n.createElement)(R,e):null}));M.propTypes=P,M.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function F(e){return function(t){let{src:a,__imageData:r,__error:l}=t,i=s(t,A);return l&&console.warn(l),r?n.createElement(e,o({image:r},i)):(console.warn("Image not loaded",a),null)}}const H=F((function(e){let{as:t="div",className:a,class:r,style:l,image:i,loading:c="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,w=s(e,N);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),f=o({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:v,height:E,layout:I,images:P,placeholder:L,backgroundColor:T}=i,j=u(v,E,I),{style:O,className:D}=j,R=s(j,S),M={fallback:void 0,sources:[]};return P.fallback&&(M.fallback=o({},P.fallback,{srcSet:P.fallback.srcSet?C(P.fallback.srcSet):void 0})),P.sources&&(M.sources=P.sources.map((e=>o({},e,{srcSet:C(e.srcSet)})))),n.createElement(t,o({},R,{style:o({},O,l,{backgroundColor:h}),className:D+(a?" "+a:"")}),n.createElement(g,{layout:I,width:v,height:E},n.createElement(k,o({},m(L,!1,I,v,E,T,y,b))),n.createElement(x,o({"data-gatsby-image-ssr":"",className:p},w,d("eager"===c,!1,M,c,f)))))})),B=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),W={src:l().string.isRequired,alt:I,width:B,height:B,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};H.displayName="StaticImage",H.propTypes=W;const q=F(M);q.displayName="StaticImage",q.propTypes=W},4993:function(e,t,a){a.d(t,{Z:function(){return ae}});var n=a(7294),r=a(8032),l=a(1883),o=a(828);function s(e,t,...a){if(e in t){let n=t[e];return"function"==typeof n?n(...a):n}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,s),n}var i=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(i||{}),c=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(c||{});function u({ourProps:e,theirProps:t,slot:a,defaultTag:n,features:r,visible:l=!0,name:o}){let i=m(t,e);if(l)return d(i,a,n,o);let c=null!=r?r:0;if(2&c){let{static:e=!1,...t}=i;if(e)return d(t,a,n,o)}if(1&c){let{unmount:e=!0,...t}=i;return s(e?0:1,{0(){return null},1(){return d({...t,hidden:!0,style:{display:"none"}},a,n,o)}})}return d(i,a,n,o)}function d(e,t={},a,r){let{as:l=a,children:o,refName:s="ref",...i}=g(e,["unmount","static"]),c=void 0!==e.ref?{[s]:e.ref}:{},u="function"==typeof o?o(t):o;i.className&&"function"==typeof i.className&&(i.className=i.className(t));let d={};if(t){let e=!1,a=[];for(let[n,r]of Object.entries(t))"boolean"==typeof r&&(e=!0),!0===r&&a.push(n);e&&(d["data-headlessui-state"]=a.join(" "))}if(l===n.Fragment&&Object.keys(f(i)).length>0){if(!(0,n.isValidElement)(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,n.cloneElement)(u,Object.assign({},m(u.props,f(g(i,["ref"]))),d,c,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let a of e)null!=a&&("function"==typeof a?a(t):a.current=t)}}}(u.ref,c.ref)))}return(0,n.createElement)(l,Object.assign({},g(i,["ref"]),l!==n.Fragment&&c,l!==n.Fragment&&d),u)}function m(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},a={};for(let n of e)for(let e in n)e.startsWith("on")&&"function"==typeof n[e]?(null!=a[e]||(a[e]=[]),a[e].push(n[e])):t[e]=n[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(a).map((e=>[e,void 0]))));for(let n in a)Object.assign(t,{[n](e,...t){let r=a[n];for(let a of r){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;a(e,...t)}}});return t}function p(e){var t;return Object.assign((0,n.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function f(e){let t=Object.assign({},e);for(let a in t)void 0===t[a]&&delete t[a];return t}function g(e,t=[]){let a=Object.assign({},e);for(let n of t)n in a&&delete a[n];return a}const h="undefined"==typeof window||"undefined"==typeof document;let y=h?n.useEffect:n.useLayoutEffect;let b=function(e){let t=function(e){let t=(0,n.useRef)(e);return y((()=>{t.current=e}),[e]),t}(e);return n.useCallback(((...e)=>t.current(...e)),[t])},w=Symbol();function v(e,t=!0){return Object.assign(e,{[w]:t})}function E(...e){let t=(0,n.useRef)(e);(0,n.useEffect)((()=>{t.current=e}),[e]);let a=b((e=>{for(let a of t.current)null!=a&&("function"==typeof a?a(e):a.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[w])))?void 0:a}let k={serverHandoffComplete:!1};var x;let N=0;function S(){return++N}let C=null!=(x=n.useId)?x:function(){let e=function(){let[e,t]=(0,n.useState)(k.serverHandoffComplete);return(0,n.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,n.useEffect)((()=>{!1===k.serverHandoffComplete&&(k.serverHandoffComplete=!0)}),[]),e}(),[t,a]=n.useState(e?S:null);return y((()=>{null===t&&a(S())}),[t]),null!=t?""+t:void 0};var I=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(I||{});function P(e){let t=e.parentElement,a=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(a=t),t=t.parentElement;let n=""===(null==t?void 0:t.getAttribute("disabled"));return(!n||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(a))&&n}let L=(0,n.createContext)(null);L.displayName="OpenClosedContext";var T=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(T||{});function j(){return(0,n.useContext)(L)}function O({value:e,children:t}){return n.createElement(L.Provider,{value:e},t)}function D(e){var t;if(e.type)return e.type;let a=null!=(t=e.as)?t:"button";return"string"==typeof a&&"button"===a.toLowerCase()?"button":void 0}function R(e,t){let[a,r]=(0,n.useState)((()=>D(e)));return y((()=>{r(D(e))}),[e.type,e.as]),y((()=>{a||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")}),[a,t]),a}var M,A=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(A||{}),F=((M=F||{})[M.ToggleDisclosure=0]="ToggleDisclosure",M[M.CloseDisclosure=1]="CloseDisclosure",M[M.SetButtonId=2]="SetButtonId",M[M.SetPanelId=3]="SetPanelId",M[M.LinkPanel=4]="LinkPanel",M[M.UnlinkPanel=5]="UnlinkPanel",M);let H={0:e=>({...e,disclosureState:s(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4(e){return!0===e.linkedPanel?e:{...e,linkedPanel:!0}},5(e){return!1===e.linkedPanel?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},B=(0,n.createContext)(null);function _(e){let t=(0,n.useContext)(B);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,_),t}return t}B.displayName="DisclosureContext";let W=(0,n.createContext)(null);function q(e){let t=(0,n.useContext)(W);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return t}W.displayName="DisclosureAPIContext";let U=(0,n.createContext)(null);function z(e,t){return s(t.type,H,e,t)}U.displayName="DisclosurePanelContext";let $=n.Fragment,G=p((function(e,t){let{defaultOpen:a=!1,...r}=e,l=(0,n.useRef)(null),o=E(t,v((e=>{l.current=e}),void 0===e.as||e.as===n.Fragment)),i=(0,n.useRef)(null),c=(0,n.useRef)(null),d=(0,n.useReducer)(z,{disclosureState:a?0:1,linkedPanel:!1,buttonRef:c,panelRef:i,buttonId:null,panelId:null}),[{disclosureState:m,buttonId:p},f]=d,g=b((e=>{f({type:1});let t=function(e){return h?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}(l);if(!t||!p)return;let a=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(p):t.getElementById(p);null==a||a.focus()})),y=(0,n.useMemo)((()=>({close:g})),[g]),w=(0,n.useMemo)((()=>({open:0===m,close:g})),[m,g]),k={ref:o};return n.createElement(B.Provider,{value:d},n.createElement(W.Provider,{value:y},n.createElement(O,{value:s(m,{0:T.Open,1:T.Closed})},u({ourProps:k,theirProps:r,slot:w,defaultTag:$,name:"Disclosure"}))))})),K=p((function(e,t){let a=C(),{id:r=`headlessui-disclosure-button-${a}`,...l}=e,[o,s]=_("Disclosure.Button"),i=(0,n.useContext)(U),c=null!==i&&i===o.panelId,d=(0,n.useRef)(null),m=E(d,t,c?null:o.buttonRef);(0,n.useEffect)((()=>{if(!c)return s({type:2,buttonId:r}),()=>{s({type:2,buttonId:null})}}),[r,s,c]);let p=b((e=>{var t;if(c){if(1===o.disclosureState)return;switch(e.key){case I.Space:case I.Enter:e.preventDefault(),e.stopPropagation(),s({type:0}),null==(t=o.buttonRef.current)||t.focus()}}else switch(e.key){case I.Space:case I.Enter:e.preventDefault(),e.stopPropagation(),s({type:0})}})),f=b((e=>{if(e.key===I.Space)e.preventDefault()})),g=b((t=>{var a;P(t.currentTarget)||e.disabled||(c?(s({type:0}),null==(a=o.buttonRef.current)||a.focus()):s({type:0}))})),h=(0,n.useMemo)((()=>({open:0===o.disclosureState})),[o]),y=R(e,d);return u({ourProps:c?{ref:m,type:y,onKeyDown:p,onClick:g}:{ref:m,id:r,type:y,"aria-expanded":e.disabled?void 0:0===o.disclosureState,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:p,onKeyUp:f,onClick:g},theirProps:l,slot:h,defaultTag:"button",name:"Disclosure.Button"})})),V=i.RenderStrategy|i.Static,Z=p((function(e,t){let a=C(),{id:r=`headlessui-disclosure-panel-${a}`,...l}=e,[o,s]=_("Disclosure.Panel"),{close:i}=q("Disclosure.Panel"),c=E(t,o.panelRef,(e=>{s({type:e?4:5})}));(0,n.useEffect)((()=>(s({type:3,panelId:r}),()=>{s({type:3,panelId:null})})),[r,s]);let d=j(),m=null!==d?d===T.Open:0===o.disclosureState,p=(0,n.useMemo)((()=>({open:0===o.disclosureState,close:i})),[o,i]),f={ref:c,id:r};return n.createElement(U.Provider,{value:o.panelId},u({ourProps:f,theirProps:l,slot:p,defaultTag:"div",features:V,visible:m,name:"Disclosure.Panel"}))})),J=Object.assign(G,{Button:K,Panel:Z});var Y=n.forwardRef((function({title:e,titleId:t,...a},r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},a),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}));var Q=n.forwardRef((function({title:e,titleId:t,...a},r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},a),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}));const X=[{name:"What I Do",href:"#services"},{name:"Blog",href:o.D+"/blog"},{name:"Experience",href:"#experience"},{name:"Skills",href:"#skills"},{name:"FREE Guide",href:o.D+"/typescript-essentials-free-guide",className:"block px-3 py-2 rounded-md text-base bg-cyan-600 hover:bg-cyan-500 text-white font-bold"},{name:"About",href:"#about"}],ee=()=>n.createElement(J,{as:"nav",id:"navbar",className:"bg-gray-800"},(e=>{let{open:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},n.createElement("div",{className:"relative flex h-16 items-center justify-between"},n.createElement("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden"},n.createElement(J.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},n.createElement("span",{className:"sr-only"},"Open main menu"),t?n.createElement(Y,{className:"block h-6 w-6","aria-hidden":"true"}):n.createElement(Q,{className:"block h-6 w-6","aria-hidden":"true"}))),n.createElement("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-between"},n.createElement("div",{className:"flex flex-shrink-0 items-center"},n.createElement(l.Link,{to:"/"},n.createElement("div",{className:"flex flex-shrink-0 items-center"},n.createElement(r.S,{className:"bio-avatar logo-avatar",formats:["auto","webp","avif"],src:"../img/about/headshot-round.png",width:30,height:30,quality:95,alt:"Preston Wallace logo",__imageData:a(9144)}),n.createElement("span",{className:"logo-header text-cyan-400"},"Preston")))),n.createElement("div",{className:"hidden sm:ml-6 sm:block"},n.createElement("div",{className:"flex space-x-4"},X.map((e=>n.createElement("a",{key:e.name,href:e.href,className:e.className?e.className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold"},e.name)))))))),n.createElement(J.Panel,{className:"sm:hidden mobile-menu"},n.createElement("div",{className:"space-y-1 px-2 pt-2 pb-3"},X.map((e=>n.createElement(J.Button,{key:e.name,as:"a",href:e.href,className:e.className?e.className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"},e.name))))))})),te=()=>n.createElement("footer",{className:"footer-area section-padding"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-12"},n.createElement("div",{className:"footer-text text-center wow fadeInDown","data-wow-delay":"0.3s"},n.createElement("ul",{className:"social-icon wow fadeInUp","data-wow-delay":"0.8s"},n.createElement("li",null,n.createElement("a",{className:"linkedin",href:"https://www.linkedin.com/in/prestonwallace/"},n.createElement("i",{className:"icon-social-linkedin"}))),n.createElement("li",null,n.createElement("a",{className:"linkedin",href:"https://www.youtube.com/channel/UCoiCi3NyMZ98Rj5K3vZfExw"},n.createElement("i",{className:"icon-social-youtube"}))),n.createElement("li",null,n.createElement("a",{className:"linkedin",href:"https://github.com/wallacepreston"},n.createElement("i",{className:"icon-social-github"})))),"© ",(new Date).getFullYear(),", Built by Preston Wallace")))));var ae=e=>{let{location:t,title:a,children:r,prepended:l,addMargin:o=!0,hideTitle:s=!1}=e;const i="/prestonwallace/"===t.pathname,c=["global-wrapper"];return o&&c.push("global-margin"),l||c.push("global-not-prepended"),n.createElement(n.Fragment,null,l,n.createElement("div",{"data-is-root-path":i},n.createElement(ee,null),n.createElement("main",{className:c.join(" ")},r),n.createElement(te,null)))}},9357:function(e,t,a){var n=a(7294),r=a(1883);t.Z=e=>{var t,a,l;let{description:o,title:s,children:i}=e;const{site:c}=(0,r.useStaticQuery)("2841359383"),u=o||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,d?s+" | "+d:s),n.createElement("meta",{name:"description",content:u}),n.createElement("meta",{property:"og:title",content:s}),n.createElement("meta",{property:"og:description",content:u}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(l=a.social)||void 0===l?void 0:l.twitter)||""}),n.createElement("meta",{name:"twitter:title",content:s}),n.createElement("meta",{name:"twitter:description",content:u}),i)}},828:function(e,t,a){a.d(t,{D:function(){return n}});const n="https://devrocket.io"},9144:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/a92f3/headshot-round.png","srcSet":"/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/bf7af/headshot-round.png 8w,\\n/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/ccb69/headshot-round.png 15w,\\n/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/a92f3/headshot-round.png 30w,\\n/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/d6284/headshot-round.png 60w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/c42ee/headshot-round.avif 8w,\\n/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/559ff/headshot-round.avif 15w,\\n/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/7331c/headshot-round.avif 30w,\\n/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/fc876/headshot-round.avif 60w","type":"image/avif","sizes":"(min-width: 30px) 30px, 100vw"},{"srcSet":"/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/70f85/headshot-round.webp 8w,\\n/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/10ce9/headshot-round.webp 15w,\\n/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/9694d/headshot-round.webp 30w,\\n/prestonwallace/static/7c5ab2f33aac559e958faacecb2a4935/79de8/headshot-round.webp 60w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}')}}]);
//# sourceMappingURL=commons-fd4dcd7efc319efc78e5.js.map