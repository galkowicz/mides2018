(window["webpackJsonpmides-2018"]=window["webpackJsonpmides-2018"]||[]).push([[0],{213:function(e,t,a){e.exports=a(378)},226:function(e,t,a){},345:function(e){e.exports=JSON.parse('{"menu":["\u05ea\u05e4\u05e8\u05d9\u05d8","menu"],"home":["\u05d1\u05d9\u05ea","home"],"about":["\u05d0\u05d5\u05d3\u05d5\u05ea","our place"],"call":["\u05d4\u05ea\u05e7\u05e9\u05e8","call us"],"gallery":["\u05d2\u05dc\u05e8\u05d9\u05d4","gallery"],"restaurant":["\u05d4\u05de\u05e1\u05e2\u05d3\u05d4","the restaurant"],"startersTitle":["\u05de\u05e0\u05d5\u05ea \u05e8\u05d0\u05e9\u05d5\u05e0\u05d5\u05ea \u05d5\u05e1\u05dc\u05d8\u05d9\u05dd","appetizers and salads"],"brazilianTitle":["\u05d1\u05e9\u05e8\u05d9\u05dd \u05d5\u05d1\u05e8\u05d6\u05d9\u05dc\u05d0\u05d9","meat and brazilian"],"mainCourses":["\u05de\u05e0\u05d5\u05ea \u05e2\u05d9\u05e7\u05e8\u05d9\u05d5\u05ea","main courses"],"fishAndPasta":["\u05d3\u05d2\u05d9\u05dd, \u05e4\u05d9\u05e8\u05d5\u05ea \u05d9\u05dd \u05d5\u05e4\u05e1\u05d8\u05d5\u05ea","fish and pasta"],"desserts":["\u05de\u05ea\u05d5\u05e7\u05d9\u05dd","desserts"],"brazilianDrinks":["\u05de\u05e9\u05e7\u05d0\u05d5\u05ea \u05d1\u05e8\u05d6\u05d9\u05dc\u05d0\u05d9\u05dd","brazilian drinks"],"beers":["\u05d1\u05d9\u05e8\u05d5\u05ea","beers"],"softDrinks":["\u05e9\u05ea\u05d9\u05d9\u05d4 \u05e7\u05dc\u05d4","soft drinks"],"hotDrinks":["\u05e9\u05ea\u05d9\u05d9\u05d4 \u05d7\u05de\u05d4","hot drinks"],"drinks":["\u05e9\u05ea\u05d9\u05d9\u05d4","drinks"]}')},374:function(e,t,a){},378:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),c=a.n(i),s=a(34),l=a(42),o=a(8),m=a(22),u=576,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setTranslation":return Object.assign({},e,t.payload);default:return e}},b=function(e){return{type:"setTranslation",payload:e}},h=function(){return Object(m.c)({localize:o.f,translations:d})},g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d;a(226);var E=a(44),f=a(45),p=a(47),v=a(46),N=a(48),_=a(50),y=a(181),k=a.n(y),O=a(98),j=a(80),w=a(386),I=a(27),z=a(202),D=a(390),A=a(142),M=a(78),x=a(68);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var L=Object(_.k)(function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)(!0),l=Object(j.a)(s,2),m=l[0],d=l[1],b=Object(n.useState)(-1),h=Object(j.a)(b,2),g=h[0],E=h[1],f=Object(n.useState)(_()?4:10),p=Object(j.a)(f,2),v=p[0],N=p[1];function _(){return document.documentElement.clientWidth<u}Object(n.useEffect)(function(){var t=e.location.hash.match(/\d/);t&&!_()&&(c(!0),E(+t[0]))},[e.location.hash]);var y={transition:"opacity ".concat(400,"ms ease-in-out"),opacity:0},k={entering:{opacity:0},entered:{opacity:1}},O=e.images,T=v>=O.length;return r.a.createElement("div",{id:"gallery",className:"gallery"},r.a.createElement(D.a,{as:"h1",textAlign:"center",className:"gallery__header"},r.a.createElement(o.b,{id:"mainItems.gallery"})),r.a.createElement("div",{className:"gallery__images"},function(){for(var t=[],a=function(a){t.push(r.a.createElement("div",{onClick:function(){return t=a,void(_()||(E(t),c(!0),d(!0),e.history.push("#gallery/".concat(t))));var t},key:a,className:"gallery__images__img"},r.a.createElement(z.a,{src:O[a]})))},n=0;n<Math.min(v,O.length);n++)a(n);return t}()),!T&&r.a.createElement("div",{className:"gallery__plus",onClick:function(){return N(v+10)}},r.a.createElement(A.a,{name:"plus",size:"big"})),r.a.createElement("div",{className:"gallery__fullscreen "+(i?"show":"")},r.a.createElement("div",{className:"gallery__fullscreen__header"},r.a.createElement("div",{className:"close",onClick:function(){E(-1),c(!1),e.history.push("#gallery")}},r.a.createElement(A.a,{name:"close",size:"big"}))),r.a.createElement("div",{className:"gallery__fullscreen__body"},r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"arrow nav-left "+(0===g?"hidden":""),onClick:function(){E(g-1),e.history.push("#gallery/".concat(g-1))}},r.a.createElement(x.a,{icon:M.a})),r.a.createElement("div",{className:"arrow nav-right "+(g===e.images.length-1?"hidden":""),onClick:function(){E(g+1),e.history.push("#gallery/".concat(g+1))}},r.a.createElement(x.a,{icon:M.b}))),r.a.createElement(w.a,{mode:"in-out"},r.a.createElement(I.d,{in:m,timeout:{appear:0,enter:0,exit:400},key:g},function(e){return r.a.createElement("div",{style:C({},y,{},k[e])},r.a.createElement("div",{className:"img"},r.a.createElement(z.a,{src:O[g]})))})))))}),S=a(188),P=a.n(S),R=(a(328),P.a.initializeApp({apiKey:"AIzaSyDSwAaqGZXBUEBmobisEfPNNVaKzdSXzZE",authDomain:"mides-cms.firebaseapp.com",databaseURL:"https://mides-cms.firebaseio.com",projectId:"mides-cms",storageBucket:"mides-cms.appspot.com",messagingSenderId:"653825994282",appId:"1:653825994282:web:8c37ac4c39db636c"})),U=a(189),W=(a(331),a(338),a(340),a(379),Object(U.a)({firebaseApp:R,env:"production",locale:"en-US",dbType:"cf"}));function Y(e){return W.content.get({schemaKey:e})}var q={mainItems:a(345)};function B(e){return e.dishes.reduce(function(e,t){var a=t.price,n=t.hebrew,r=void 0===n?{}:n,i=t.english,c=void 0===i?{}:i,s=t.cmsName,l=void 0===s?null:s,o=t.alternativePrice,m=void 0===o?"":o;return Object.assign(e,Object(O.a)({},l,{name:[r.name,c.name],description:[r.description,c.description],alternative:[r.alternative,c.alternative],price:a,alternativePrice:m}))},{})}var H=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"home__header"},r.a.createElement(o.b,{id:"mainItems.restaurant"})),r.a.createElement("div",{className:"about__items"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item__number"},"01"),r.a.createElement("h1",{className:"item__title extra-bold"},r.a.createElement(o.b,{id:"about.firstAbout.title"})),r.a.createElement("h3",{className:"item__subtitle"},r.a.createElement(o.b,{id:"about.firstAbout.subtitle"}))),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item__number"},"02"),r.a.createElement("h1",{className:"item__title extra-bold"},r.a.createElement(o.b,{id:"about.secondAbout.title"})),r.a.createElement("h3",{className:"item__subtitle"},r.a.createElement(o.b,{id:"about.secondAbout.subtitle"}))),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item__number"},"03"),r.a.createElement("h1",{className:"item__title extra-bold"},r.a.createElement(o.b,{id:"about.thirdAbout.title"})),r.a.createElement("h3",{className:"item__subtitle"},r.a.createElement(o.b,{id:"about.thirdAbout.subtitle"})))))},K=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).state={images:[]},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;W.content.get({schemaKey:"galleryImages",populate:!0}).then(function(t){t&&e.setState({images:e.getImagesUrl(t.imageDeck)})}),Y("about").then(function(t){var a=function(e){var t=e.firstAbout,a=e.secondAbout,n=e.thirdAbout;return{about:{firstAbout:{title:[t.hebrew.title,t.english.title],subtitle:[t.hebrew.subtitle,t.english.subtitle]},secondAbout:{title:[a.hebrew.title,a.english.title],subtitle:[a.hebrew.subtitle,a.english.subtitle]},thirdAbout:{title:[n.hebrew.title,n.english.title],subtitle:[n.hebrew.subtitle,n.english.subtitle]}}}}(t);Object.assign(q,a),e.props.addTranslation(q)})}},{key:"getImagesUrl",value:function(e){return e.map(function(e){return e.image[0].url})}},{key:"render",value:function(){var e=this.state.images;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"header-overlay"},r.a.createElement("div",{className:"header__logo"},r.a.createElement("div",{className:"mides-logo"},r.a.createElement("span",null,"\u05de\u05d9\u05d3\u05e1")),r.a.createElement("div",{className:"mides-sublogo"},r.a.createElement("span",null,"\u05de\u05e1\u05e2\u05d3\u05d4 \u05d1\u05e8\u05d6\u05d9\u05dc\u05d0\u05d9\u05ea"))))),r.a.createElement("div",{className:"home",id:"about"},r.a.createElement(H,null)),r.a.createElement(L,{images:e}))}}]),t}(r.a.Component),X=Object(s.b)(function(e){return{currentLanguage:Object(o.c)(e.localize),languages:Object(o.d)(e.localize)}},function(e){return Object(m.b)({setActiveLanguage:o.g,setTranslation:b},e)})(Object(o.h)(K)),Q=function(e){var t=e.name,a=e.description,n=e.price,i=e.alternativePrice,c=e.alternative,s=!c.includes("Missing")&&""!==c;return r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"title"},r.a.createElement("h3",{className:"title__text"},t)),r.a.createElement("div",{className:"price"},n,"\u20aa"),r.a.createElement("div",{className:"titledescription"},r.a.createElement("h3",{className:"titledescription__text"},a)),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},r.a.createElement("h3",{className:"title__text"},c)),r.a.createElement("div",{className:"price"},i,"\u20aa")))},F=function(e){function t(){return Object(E.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"createMenuItems",value:function(e,t){var a=this.props.translate;return Object.entries(e).map(function(e,n){var i="".concat(t,".").concat(e[0],".name"),c="".concat(t,".").concat(e[0],".description"),s="".concat(t,".").concat(e[0],".alternative");return r.a.createElement(Q,{name:a(i),description:a(c),price:e[1].price,alternative:a(s),alternativePrice:e[1].alternativePrice,key:n})})}},{key:"render",value:function(){var e=this.props.translations,t=e.brazilian&&this.createMenuItems(e.brazilian,"brazilian"),a=e.starters&&this.createMenuItems(e.starters,"starters"),n=e.main&&this.createMenuItems(e.main,"main"),i=e.fish&&this.createMenuItems(e.fish,"fish"),c=e.desserts&&this.createMenuItems(e.desserts,"desserts"),s=e.brazilianDrinks&&this.createMenuItems(e.brazilianDrinks,"brazilianDrinks"),l=e.coldDrinks&&this.createMenuItems(e.coldDrinks,"coldDrinks"),m=e.hotDrinks&&this.createMenuItems(e.hotDrinks,"hotDrinks"),u=e.beers&&this.createMenuItems(e.beers,"beers");return r.a.createElement("div",{className:"food-menu"},r.a.createElement("div",{className:"title-main"},r.a.createElement(o.b,{id:"mainItems.menu"})),r.a.createElement("div",{className:"title-description"},r.a.createElement("h2",{className:"text"},r.a.createElement(o.b,{id:"mainItems.startersTitle"}))),r.a.createElement("div",{className:"subcategory"},a&&a.map(function(e){return e})),r.a.createElement("div",{className:"title-description"},r.a.createElement("h2",{className:"text"},r.a.createElement(o.b,{id:"mainItems.brazilianTitle"}))),r.a.createElement("div",{className:"subcategory"},t&&t.map(function(e){return e})),r.a.createElement("div",{className:"title-description"},r.a.createElement("h2",{className:"text"},r.a.createElement(o.b,{id:"mainItems.mainCourses"}))),r.a.createElement("div",{className:"subcategory"},n&&n.map(function(e){return e})),r.a.createElement("div",{className:"title-description"},r.a.createElement("h2",{className:"text"},r.a.createElement(o.b,{id:"mainItems.fishAndPasta"}))),r.a.createElement("div",{className:"subcategory"},i&&i.map(function(e){return e})),r.a.createElement("div",{className:"title-description"},r.a.createElement("h2",{className:"text"},r.a.createElement(o.b,{id:"mainItems.desserts"}))),r.a.createElement("div",{className:"subcategory"},c&&c.map(function(e){return e})),r.a.createElement("div",{className:"title-description"},r.a.createElement("h2",{className:"text"},r.a.createElement(o.b,{id:"mainItems.drinks"}))),r.a.createElement("div",{className:"subcategory drinks"},r.a.createElement("div",{className:"subcategory__category"},r.a.createElement(o.b,{id:"mainItems.brazilianDrinks"})),s&&s.map(function(e){return e}),r.a.createElement("div",{className:"subcategory__category"},r.a.createElement(o.b,{id:"mainItems.softDrinks"})),l&&l.map(function(e){return e}),r.a.createElement("div",{className:"subcategory__category"},r.a.createElement(o.b,{id:"mainItems.beers"})),u&&u.map(function(e){return e}),r.a.createElement("div",{className:"subcategory__category"},r.a.createElement(o.b,{id:"mainItems.hotDrinks"})),m&&m.map(function(e){return e})))}}]),t}(r.a.PureComponent),G=Object(s.b)(function(e){return{translations:e.translations}})(F),J=a(66),V=a(389),Z=a(387),$=a(388),ee=a(190),te=a(392),ae=a(79),ne=a(72),re=function(e){var t=e.children;return Object(ne.useMediaQuery)({maxWidth:767})?t:null},ie=function(e){var t=e.children;return Object(ne.useMediaQuery)({minWidth:768})?t:null},ce=a(191),se=Object(_.k)(function(e){var t=e.history,a=Object(ee.a)(e,["history"]).translate,n=r.a.createElement("div",null,r.a.createElement(A.a,{name:"close",size:"big"}),r.a.createElement(A.a,{name:"bars",size:"big"})),i=function(e){e.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})},c=function(){window.scrollTo({top:0,behavior:"smooth"})};return r.a.createElement(V.a.Menu,null,r.a.createElement(ie,null,r.a.createElement(te.a.Group,null,r.a.createElement(te.a,null,r.a.createElement(l.Link,{to:"/",onClick:c},a("mainItems.home"))),r.a.createElement(te.a,null,r.a.createElement(ae.HashLink,{smooth:!0,scroll:i,to:"/#about"},a("mainItems.about"))),r.a.createElement(te.a,null,r.a.createElement(l.Link,{to:"/menu"},a("mainItems.menu"))),r.a.createElement(te.a,null,r.a.createElement(ae.HashLink,{smooth:!0,scroll:i,to:"/#gallery"},a("mainItems.gallery"))))),r.a.createElement(re,null,r.a.createElement($.a,{item:!0,trigger:n,icon:null},r.a.createElement($.a.Menu,{button:"true",item:"true"},r.a.createElement($.a.Item,{className:"menu__item",onClick:function(){t.push("/"),c()}}," ",a("mainItems.home")," "),r.a.createElement($.a.Item,{className:"menu__item zero-padding"},r.a.createElement(ae.HashLink,{smooth:!0,scroll:i,to:"/#about"},a("mainItems.about"))),r.a.createElement($.a.Item,{className:"menu__item",onClick:function(){return t.push("/menu")}}," ",a("mainItems.menu")," "),r.a.createElement($.a.Item,{className:"menu__item zero-padding"}," ",r.a.createElement(ae.HashLink,{smooth:!0,scroll:i,to:"/#gallery"},a("mainItems.gallery"))),r.a.createElement($.a.Item,{className:"menu__item zero-padding"},r.a.createElement("a",{href:"https://waze.com/ul/hsv8es2dhq",target:"_blank",rel:"noopener noreferrer",className:"waze-link"},"WAZE"),r.a.createElement(x.a,{className:"social-banner__icon",icon:ce.a})),r.a.createElement($.a.Item,{className:"menu__item zero-padding"},r.a.createElement("a",{href:"tel:086803441",target:"_blank",rel:"noopener noreferrer",className:"phone-link"},a("mainItems.call")),r.a.createElement(x.a,{className:"social-banner__icon",icon:M.c}))))))}),le=r.a.memo(se),oe=function(e){var t=e.links,a=void 0===t?[]:t;return r.a.createElement("div",{className:"social-banner"},r.a.createElement(V.a.Item,{rel:"noopener noreferrer",href:a[0]&&a[0].url,target:"_blank",className:"social-banner__link"},r.a.createElement(A.a,{name:"instagram",size:"big",className:"social-banner__icon"})),r.a.createElement(V.a.Item,{rel:"noopener noreferrer",href:a[1]&&a[1].url,target:"_blank",className:"social-banner__link"},r.a.createElement(A.a,{name:"facebook",size:"big",className:"social-banner__icon"})))},me=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).onDropdownChange=a.onDropdownChange.bind(Object(J.a)(a)),a.state={socialLinks:{facebook:"",instagram:""}},a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;Y("links").then(function(t){var a=t.dKfnWERkO0Co3cUeLkqQ.field_1562768609251;e.setState({socialLinks:a})})}},{key:"setLanguage",value:function(e){Object(o.g)(e),document.getElementsByTagName("html")[0].setAttribute("lang",e),this.props.setActiveLanguage(e)}},{key:"onDropdownChange",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"en"!==t.value&&"he"!==t.value||this.setLanguage(t.value)}},{key:"render",value:function(){var e=this.props.translate,t=this.state.socialLinks;return r.a.createElement(V.a,{fixed:"top",className:"fixed-menu",secondary:!0},r.a.createElement(Z.a,{className:"header"},r.a.createElement(V.a.Item,{className:"header__language"},r.a.createElement($.a,{className:"icon",floating:!0,icon:null,onChange:this.onDropdownChange,options:[{key:"hebrew",text:"\u05e2\u05d1\u05e8\u05d9\u05ea",value:"he"},{key:"english",text:"English",value:"en"}],trigger:r.a.createElement(A.a,{name:"globe",size:"large",className:"language-icon"})})),r.a.createElement(V.a.Item,{className:"header__social"},r.a.createElement(oe,{links:t})),r.a.createElement(V.a.Item,{className:"header__menu"},r.a.createElement(le,{translate:e}))))}}]),t}(r.a.Component),ue=Object(s.b)(function(e){return{translate:Object(o.e)(e.localize),currentLanguage:Object(o.c)(e.localize),languages:Object(o.d)(e.localize)}},function(e){return Object(m.b)({setActiveLanguage:o.g},e)})(Object(o.h)(me)),de=(a(374),a(141)),be=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).props.initialize({languages:[{name:"\u05e2\u05d1\u05e8\u05d9\u05ea",code:"he"},{name:"English",code:"en"}],translations:q,options:{renderToStaticMarkup:k.a.renderToStaticMarkup,onMissingTranslation:function(){return""}}}),a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;Y("menuStarters").then(function(t){var a=B(t.jExPSa422YpbgUwbbgEf),n=B(t["4YiTxdGUbobjRADejEAY"]),r=B(t.yYUCe5NlffhhSHOl3710),i=B(t.cjCkFN2aTDRAxRi42At0),c=B(t.LeqQfTn075pkIqRTNNAf),s=B(t.ghEumv7OoVWKGllEEz4f),l=B(t.RpaQkJfMSjA5SRC3xnyM),o=B(t.DkLYYsyu5ogP3T5XawTD),m={starters:a,brazilian:n,main:r,fish:i,desserts:c,coldDrinks:s,hotDrinks:B(t["5MIcmLHYs5XwRUp9cmMM"]),brazilianDrinks:l,beers:o};Object.assign(q,m),e.props.setTranslation(m),e.props.addTranslation(q)}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this.props.translate;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{key:"header"}),r.a.createElement(_.g,null,r.a.createElement(_.d,{exact:!0,path:"/",component:X}),r.a.createElement(_.d,{path:"/menu",render:function(){return r.a.createElement(G,{translate:e})}})))}}]),t}(n.Component),he=Object(s.b)(function(e){return{translate:Object(de.getTranslate)(e.localize),languages:Object(de.getLanguages)(e.localize),router:e.router}},function(e){return Object(m.b)({setTranslation:b},e)})(Object(o.h)(be)),ge=(a(377),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Ee(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var fe,pe=Object(m.e)(h(),fe,g(Object(m.a)())),ve=document.querySelector("#root");c.a.render(r.a.createElement(s.a,{store:pe},r.a.createElement(o.a,{store:pe},r.a.createElement(l.BrowserRouter,null,r.a.createElement(he,null)))),ve),function(){if("serviceWorker"in navigator){if(new URL("/mides",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/mides","/service-worker.js");ge?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ee(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):Ee(e)})}}()}},[[213,1,2]]]);
//# sourceMappingURL=main.56e0e0ed.chunk.js.map