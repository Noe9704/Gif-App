(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=(n(15),n(2)),u=n(9),s=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)("Hola Mundo"),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(u.a)(t))})),o(""))},children:Object(s.jsx)("input",{type:"text",value:c,onChange:function(t){o(t.target.value)}})})},d=n(10),j=function(t){var e=t.id,n=t.title,a=t.url;return console.log({id:e,title:n,url:a}),Object(s.jsxs)("div",{className:"card animate__animated animate__rubberBand",children:[Object(s.jsx)("img",{src:a,alt:n}),Object(s.jsx)("p",{children:n})]})},l=n(6),b=n.n(l),p=n(8),m=function(){var t=Object(p.a)(b.a.mark((function t(e){var n,a,r,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=BvlkizSXNuBavmjktGGndtr9GGvM8all"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){m(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{className:"animate__animated animate__rubberBand",children:e}),c?Object(s.jsx)("p",{className:"animate__animated animate__rubberBand",children:"Loading"}):null,Object(s.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(s.jsx)(j,Object(d.a)({},t),t.id)}))})]})},O=function(){var t=Object(a.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(o,{setCategories:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(t){return Object(s.jsx)(f,{category:t},t)}))})]})};c.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.030642c6.chunk.js.map