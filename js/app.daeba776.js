(function(e){function t(t){for(var r,s,c=t[0],u=t[1],i=t[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2395:function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("2395"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5f5b"),o=n("b1e0"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Subjects")])],1),n("router-view")],1)},c=[],u=(n("7c55"),n("2877")),i={},l=Object(u["a"])(i,s,c,!1,null,null,null),d=l.exports,f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},e._l(e.subjects,(function(t){return n("b-card",{key:t.code,attrs:{title:t.name,"sub-title":t.code}},e._l(t.links,(function(t){return n("b-button",{key:t.address,attrs:{pill:"",target:"_blank",href:t.address,variant:e.linkType(t.name)}},[e._v(e._s(t.name))])})),1)})),1)},m=[],h=r["default"].extend({methods:{linkType:function(e){switch(e){case"Moodle":return"primary";case"Courseware":return"success";case"Teams":return"info";default:return"secondary"}}},data:function(){return{subjects:[{name:"Combinatorial Optimization",code:"B4M35KO",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/ko/start"}]},{name:"Theory of Algorithms",code:"B4M01TAL",links:[{name:"Math FELD",address:"http://math.feld.cvut.cz/demlova/teaching/tal_vyuka.html"},{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4542"}]},{name:"Software Architectures",code:"B4M36SWA",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4982"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3a465c54787d7e4b9b8740e58eeb9a5a55%40thread.tacv2/conversations?groupId=02e6b8d0-78a5-4e49-8367-9b952bc4cfac&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Effective Software",code:"B4M36ESW",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/b4m36esw/start"}]},{name:"Planning for Artificial Intelligence",code:"B4M36PUI/BE4M36PUI",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/b192/courses/be4m36pui/start"}]},{name:"Symbolic Machine Learning",code:"B4M46SMU/BE4M46SMU",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/smu/start"}]},{name:"Visualization",code:"B4M39VIZ",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/enrol/index.php?id=4809"}]},{name:"Spatial Design",code:"B4M39PTV",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/enrol/index.php?id=4809"}]}]}}}),v=h,b=Object(u["a"])(v,p,m,!1,null,null,null),w=b.exports;r["default"].use(f["a"]);var y=[{path:"/",name:"Home",component:w}],k=new f["a"]({routes:y}),M=k,g=n("2f62");r["default"].use(g["a"]);var _=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(a["a"]),r["default"].use(o["a"]),new r["default"]({router:M,store:_,render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.daeba776.js.map