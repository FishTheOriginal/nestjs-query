/*! For license information please see 2.03a369b7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,p=d["".concat(i,".").concat(h)]||d[h]||f[h]||o;return n?a.a.createElement(p,c({ref:t},s,{components:n})):a.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},181:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},187:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(197),i=n(182),c=n(184),l=n(1),s=n(183),u=(n(12),n(181)),d=n.n(u),f=n(189);let h=!1;var p=e=>{const t=Object(r.useRef)(!1),o=Object(r.useRef)(null),{siteConfig:c={}}=Object(i.a)(),{themeConfig:{algolia:l}}=c,s=Object(f.b)(),u=()=>{t.current||(window.docsearch({appId:l.appId,apiKey:l.apiKey,indexName:l.indexName,inputSelector:"#search_input_react",algoliaOptions:l.algoliaOptions,handleSelected:(e,t,n)=>{const r=document.createElement("a");r.href=n.url;const a="#__docusaurus"===r.hash?`${r.pathname}`:`${r.pathname}${r.hash}`;s.push(a)}}),t.current=!0)},p=()=>{h?u():Promise.all([n.e(80).then(n.t.bind(null,270,7)),n.e(55).then(n.t.bind(null,271,7))]).then(([{default:e}])=>{h=!0,window.docsearch=e,u()})},m=Object(r.useCallback)(t=>{o.current.contains(t.target)||o.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return a.a.createElement("div",{className:"navbar__search",key:"search-box"},a.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:d()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),a.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:d()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:p,onMouseOver:p,onFocus:m,onBlur:m,ref:o}))},m=n(190),y=n.n(m),v=n(94),g=n.n(v);const b=()=>a.a.createElement("span",{className:d()(g.a.toggle,g.a.moon)}),k=()=>a.a.createElement("span",{className:d()(g.a.toggle,g.a.sun)});var E=function(e){const{isClient:t}=Object(i.a)();return a.a.createElement(y.a,Object(l.a)({disabled:!t,icons:{checked:a.a.createElement(b,null),unchecked:a.a.createElement(k,null)}},e))};var O=()=>{const[e,t]=r.useState("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):"");r.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]),r.useEffect(()=>{try{const e=localStorage.getItem("theme");null!==e&&t(e)}catch(e){console.error(e)}},[t]);const n=r.useCallback(e=>{try{localStorage.setItem("theme",e),t(e)}catch(n){console.error(n)}},[t]);return[e,n]};var w=e=>{const[t,n]=Object(r.useState)(!0),[a,o]=Object(r.useState)(0),[i,c]=Object(r.useState)(0),l=Object(r.useCallback)(e=>{null!==e&&c(e.getBoundingClientRect().height)},[]),s=()=>{const e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-i,r=window.innerHeight;e<i||(a&&e>a?n(!1):e+r<t&&n(!0),o(e))};return Object(r.useEffect)(()=>{if(e)return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[a,i]),{navbarRef:l,isNavbarVisible:t}},_=n(95),j=n.n(_);function x({to:e,href:t,label:n,position:r,...o}){const i=Object(c.a)(e);return a.a.createElement(s.a,Object(l.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:i},o),n)}var S=function(){const e=Object(i.a)(),{siteConfig:t={}}=e,{baseUrl:n,themeConfig:o={}}=t,{navbar:u={},disableDarkMode:f=!1}=o,{title:h,logo:m={},links:y=[],hideOnScroll:v=!1}=u,[g,b]=Object(r.useState)(!1),[k,_]=Object(r.useState)(!1),[S,T]=O(),{navbarRef:N,isNavbarVisible:C}=w(v),P=Object(r.useCallback)(()=>{document.body.style.overflow="hidden",b(!0)},[b]),A=Object(r.useCallback)(()=>{document.body.style.overflow="visible",b(!1)},[b]),L=Object(r.useCallback)(e=>T(e.target.checked?"dark":""),[T]),M=Object(c.a)(m.src);return a.a.createElement("nav",{ref:N,className:d()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":g,[j.a.navbarHideable]:v,[j.a.navbarHidden]:!C})},a.a.createElement("div",{className:"navbar__inner"},a.a.createElement("div",{className:"navbar__items"},a.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:P,onKeyDown:P},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},a.a.createElement("title",null,"Menu"),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),a.a.createElement(s.a,{className:"navbar__brand",to:n},null!=m&&a.a.createElement("img",{className:"navbar__logo",src:M,alt:m.alt}),null!=h&&a.a.createElement("strong",{className:k?j.a.hideLogoText:""},h)),y.filter(e=>"right"!==e.position).map((e,t)=>a.a.createElement(x,Object(l.a)({},e,{key:t})))),a.a.createElement("div",{className:"navbar__items navbar__items--right"},y.filter(e=>"right"===e.position).map((e,t)=>a.a.createElement(x,Object(l.a)({},e,{key:t}))),!f&&a.a.createElement(E,{className:j.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===S,onChange:L}),a.a.createElement(p,{handleSearchBarToggle:_,isSearchBarExpanded:k}))),a.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:A}),a.a.createElement("div",{className:"navbar-sidebar"},a.a.createElement("div",{className:"navbar-sidebar__brand"},a.a.createElement(s.a,{className:"navbar__brand",onClick:A,to:n},null!=m&&a.a.createElement("img",{className:"navbar__logo",src:M,alt:m.alt}),null!=h&&a.a.createElement("strong",null,h)),!f&&g&&a.a.createElement(E,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===S,onChange:L})),a.a.createElement("div",{className:"navbar-sidebar__items"},a.a.createElement("div",{className:"menu"},a.a.createElement("ul",{className:"menu__list"},y.map((e,t)=>a.a.createElement("li",{className:"menu__list-item",key:t},a.a.createElement(x,Object(l.a)({className:"menu__link"},e,{onClick:A})))))))))},T=n(96),N=n.n(T);function C({to:e,href:t,label:n,...r}){const o=Object(c.a)(e);return a.a.createElement(s.a,Object(l.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:o},r),n)}const P=({url:e,alt:t})=>a.a.createElement("img",{className:"footer__logo",alt:t,src:e});var A=function(){const e=Object(i.a)(),{siteConfig:t={}}=e,{themeConfig:n={}}=t,{footer:r}=n,{copyright:o,links:l=[],logo:s={}}=r||{},u=Object(c.a)(s.src);return r?a.a.createElement("footer",{className:d()("footer",{"footer--dark":"dark"===r.style})},a.a.createElement("div",{className:"container"},l&&l.length>0&&a.a.createElement("div",{className:"row footer__links"},l.map((e,t)=>a.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?a.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):a.a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.a.createElement(C,e)))):null))),(s||o)&&a.a.createElement("div",{className:"text--center"},s&&s.src&&a.a.createElement("div",{className:"margin-bottom--sm"},s.href?a.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:N.a.footerLogoLink},a.a.createElement(P,{alt:s.alt,url:u})):a.a.createElement(P,{alt:s.alt,url:u})),o))):null};n(97);t.a=function(e){const{siteConfig:t={}}=Object(i.a)(),{favicon:n,tagline:r,title:l,themeConfig:{image:s},url:u}=t,{children:d,title:f,noFooter:h,description:p,image:m,keywords:y,permalink:v,version:g}=e,b=f||`${l} \xb7 ${r}`,k=m||s,E=u+Object(c.a)(k),O=Object(c.a)(n);return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("html",{lang:"en"}),a.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),b&&a.a.createElement("title",null,b),b&&a.a.createElement("meta",{property:"og:title",content:b}),n&&a.a.createElement("link",{rel:"shortcut icon",href:O}),p&&a.a.createElement("meta",{name:"description",content:p}),p&&a.a.createElement("meta",{property:"og:description",content:p}),g&&a.a.createElement("meta",{name:"docsearch:version",content:g}),y&&y.length&&a.a.createElement("meta",{name:"keywords",content:y.join(",")}),k&&a.a.createElement("meta",{property:"og:image",content:E}),k&&a.a.createElement("meta",{property:"twitter:image",content:E}),k&&a.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${b}`}),v&&a.a.createElement("meta",{property:"og:url",content:u+v}),a.a.createElement("meta",{name:"twitter:card",content:"summary"})),a.a.createElement(S,null),a.a.createElement("div",{className:"main-wrapper"},d),!h&&a.a.createElement(A,null))}},189:function(e,t,n){"use strict";var r=n(18);n.d(t,"a",(function(){return r.c})),n.d(t,"b",(function(){return r.d}))},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=f(o),c=f(n(181)),l=f(n(8)),s=f(n(191)),u=f(n(192)),d=n(193);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=(t.icons,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","icons"])),o=(0,c.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return i.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",r({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:i.default.createElement(s.default,null),unchecked:i.default.createElement(u.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}},204:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(183),c=n(181),l=n.n(c),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(34).a,theme:s};function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=f({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=f({},n,{backgroundColor:null}),a};function v(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var g=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),d(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),d(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=f({},v(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?f({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),d(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(c))}})),d(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=f({},v(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?f({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,c=[],l=[c];i>-1;){for(;(o=r[i]++)<a[i];){var s=void 0,u=t[i],d=n[i][o];if("string"==typeof d?(u=i>0?u:["plain"],s=d):(u=m(u,d.type),d.alias&&(u=m(u,d.alias)),s=d.content),"string"==typeof s){var f=s.split(h),y=f.length;c.push({types:u,content:f[0]});for(var v=1;v<y;v++)p(c),l.push(c=[]),c.push({types:u,content:f[v]})}else i++,t.push(u),n.push(s),r.push(0),a.push(s.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return p(c),l}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),b=n(225),k=n.n(b),E=n(223),O=n.n(E),w=n(224),_=n.n(w),j=n(182),x=n(104),S=n.n(x);const T=/{([\d,-]+)}/;var N=({children:e,className:t,metastring:n})=>{const{siteConfig:{themeConfig:{prism:i={}}}}=Object(j.a)(),[c,s]=Object(a.useState)(!1),d=Object(a.useRef)(null),f=Object(a.useRef)(null);let h=[];if(n&&T.test(n)){const e=n.match(T)[1];h=_.a.parse(e).filter(e=>e>0)}Object(a.useEffect)(()=>{let e;return f.current&&(e=new O.a(f.current,{target:()=>d.current})),()=>{e&&e.destroy()}},[f.current,d.current]);let p=t&&t.replace(/language-/,"");!p&&i.defaultLanguage&&(p=i.defaultLanguage);const m=()=>{window.getSelection().empty(),s(!0),setTimeout(()=>s(!1),2e3)};return o.a.createElement(g,Object(r.a)({},u,{theme:i.theme||k.a,code:e.trim(),language:p}),({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:i})=>o.a.createElement("div",{className:S.a.codeBlockWrapper},o.a.createElement("pre",{ref:d,className:l()(e,S.a.codeBlock),style:t},n.map((e,t)=>{const n=a({line:e,key:t});return h.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(r.a)({key:t},n),e.map((e,t)=>o.a.createElement("span",Object(r.a)({key:t},i({token:e,key:t})))))})),o.a.createElement("button",{ref:f,type:"button","aria-label":"Copy code to clipboard",className:S.a.copyButton,onClick:m},c?"Copied":"Copy")))};n(105);var C=e=>({id:t,...n})=>t?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"anchor",id:t}),o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#"),n.children):o.a.createElement(e,n),P=n(106),A=n.n(P);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?o.a.createElement(N,e):t},a:e=>/\.[^./]+$/.test(e.href)?o.a.createElement("a",e):o.a.createElement(i.a,e),pre:e=>o.a.createElement("pre",Object(r.a)({className:A.a.mdxCodeBlock},e)),h1:C("h1"),h2:C("h2"),h3:C("h3"),h4:C("h4"),h5:C("h5"),h6:C("h6")}},223:function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),a=document.createRange();a.selectNodeContents(e),r.removeAllRanges(),r.addRange(a),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function a(){r.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,a=n.length;r<a;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],a=[];if(r&&t)for(var o=0,i=r.length;o<i;o++)r[o].fn!==t&&r[o].fn._!==t&&a.push(r[o]);return a.length?n[e]=a:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),a=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return a(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function a(e,t,n,r,a){var i=o.apply(this,arguments);return e.addEventListener(n,i,a),{destroy:function(){e.removeEventListener(n,i,a)}}}function o(e,t,n,a){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&a.call(e,n)}}e.exports=function(e,t,n,r,o){return"function"==typeof e.addEventListener?a.apply(null,arguments):"function"==typeof n?a.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return a(e,t,n,r,o)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=a()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=a()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),l=n(1),s=n.n(l),u=n(2),d=n.n(u),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),h(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===f(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=d()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return m("action",e)}},{key:"defaultTarget",value:function(e){var t=m("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return m("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(s.a);function m(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=p}]).default},e.exports=r()},224:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],a=t[3];if(n&&a){var o=[],i=(n=parseInt(n))<(a=parseInt(a))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(a+=i);for(var c=n;c!=a;c+=i)o.push(c);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},225:function(e,t){e.exports={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]}}}]);