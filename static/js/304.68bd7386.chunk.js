"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{2758:function(n,t,e){e.d(t,{Bt:function(){return u},Tg:function(){return i},Y5:function(){return c},on:function(){return f},y:function(){return a}});var r="https://api.themoviedb.org/3",o="481cbb6dba5121edc01136f73aa6b3c6";function i(){var n=new URLSearchParams({api_key:o,page:1}),t="".concat(r,"/trending/all/day?").concat(n);return fetch(t).then((function(n){return n.ok?n.json():Promise.reject(new Error("Can\xb4t find tranding films"))}))}function c(n){var t="".concat(r,"/movie/").concat(n,"?api_key=").concat(o);return fetch(t).then((function(n){return n.ok?n.json():Promise.reject(new Error("Can\xb4t find tranding films"))}))}function a(n){var t="".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(o);return fetch(t).then((function(n){return n.ok?n.json():Promise.reject(new Error("Can\xb4t find tranding films"))}))}function u(n){var t="".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(o);return fetch(t).then((function(n){return n.ok?n.json():Promise.reject(new Error("Can\xb4t find tranding films"))}))}function f(n){var t="".concat(r,"/search/movie?api_key=").concat(o,"&query=").concat(n);return fetch(t).then((function(n){return n.ok?n.json():Promise.reject(new Error("Can\xb4t find tranding films"))}))}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,o,i,c,a=e(9439),u=e(2791),f=e(2758),s=e(7689),d=e(1087),h=e(168),m=e(6444),l=m.ZP.div(r||(r=(0,h.Z)(["\n  margin: 20px 0px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid black;\n"]))),p=m.ZP.div(o||(o=(0,h.Z)(["\n  padding-bottom: 20px;\n  font-size: 24px;\n  font-weight: 800;\n"]))),v=m.ZP.ul(i||(i=(0,h.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n"]))),g=(m.ZP.div(c||(c=(0,h.Z)(["\n  padding-bottom: 20px;\n"]))),e(184)),j=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],o=(0,s.TH)();return(0,u.useEffect)((function(){(0,f.Tg)().then((function(n){r(n.results)})).catch((function(n){return console.log(n.message)}))}),[]),(0,g.jsxs)(l,{children:[(0,g.jsx)(p,{children:"Trending today"}),(0,g.jsx)(v,{children:null===e||void 0===e?void 0:e.map((function(n){var t=n.id,e=n.title,r=n.name;return(0,g.jsx)("li",{children:(0,g.jsx)(d.rU,{to:"/movies/".concat(t),state:{from:o},children:e||r})},t)}))})]})}}}]);
//# sourceMappingURL=304.68bd7386.chunk.js.map