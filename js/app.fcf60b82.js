(function(e){function t(t){for(var a,o,c=t[0],u=t[1],d=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);i&&i(t);while(f.length)f.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,c=1;c<r.length;c++){var u=r[c];0!==n[u]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var i=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},2395:function(e,t,r){},"7c55":function(e,t,r){"use strict";var a=r("2395"),n=r.n(a);n.a},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=r("5f5b"),s=r("b1e0"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Subjects")])],1),r("router-view")],1)},c=[],u=(r("7c55"),r("2877")),d={},i=Object(u["a"])(d,o,c,!1,null,null,null),l=i.exports,f=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},e._l(e.subjects,(function(t){return r("b-card",{key:t.code,attrs:{title:t.name,"sub-title":t.code}},[r("b-button-group",e._l(t.links,(function(t){return r("b-button",{key:t.address,attrs:{target:"_blank",href:t.address,variant:e.linkType(t.name)}},[e._v(e._s(t.name))])})),1)],1)})),1)},m=[],b=a["default"].extend({methods:{linkType:function(e){switch(e){case"Moodle":return"primary";case"Courseware":return"success";case"Teams":return"info";case"Office 365":return"danger";case"Brute":return"dark";default:return"secondary"}}},data:function(){return{subjects:[{name:"Useful Links",code:"",links:[{name:"Office 365",address:"https://office365.cvut.cz"},{name:"Lectures/Labs recordings",address:"https://web.microsoftstream.com/"},{name:"Moodle",address:"https://moodle.fel.cvut.cz/"},{name:"Brute",address:"https://cw.felk.cvut.cz/brute/student/"}]},{name:"Combinatorial Optimization",code:"B4M35KO",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/ko/start"},{name:"Stream",address:"https://youtu.be/apQFijP8xr8"}]},{name:"Theory of Algorithms",code:"B4M01TAL",links:[{name:"Math FELD",address:"http://math.feld.cvut.cz/demlova/teaching/tal_vyuka.html"},{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4542"}]},{name:"Software Architectures",code:"B4M36SWA",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/course/view.php?id=4982"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3a465c54787d7e4b9b8740e58eeb9a5a55%40thread.tacv2/conversations?groupId=02e6b8d0-78a5-4e49-8367-9b952bc4cfac&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Effective Software",code:"B4M36ESW",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/b4m36esw/start"},{name:"Teams",address:"https://teams.microsoft.com/l/team/19%3a5aad055a96f94e8abba8ad6fdffc0584%40thread.tacv2/conversations?groupId=5df990ab-0cb2-4268-acf9-53d5d14b4a78&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"}]},{name:"Planning for Artificial Intelligence",code:"B4M36PUI/BE4M36PUI",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/b192/courses/be4m36pui/start"}]},{name:"Symbolic Machine Learning",code:"B4M46SMU/BE4M46SMU",links:[{name:"Courseware",address:"https://cw.fel.cvut.cz/wiki/courses/smu/start"}]},{name:"Visualization",code:"B4M39VIZ",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/enrol/index.php?id=4809"}]},{name:"Spatial Design",code:"B4M39PTV",links:[{name:"Moodle",address:"https://moodle.fel.cvut.cz/enrol/index.php?id=4809"}]}]}}}),h=b,v=Object(u["a"])(h,p,m,!1,null,null,null),w=v.exports;a["default"].use(f["a"]);var k=[{path:"/",name:"Home",component:w}],y=new f["a"]({routes:k}),g=y,M=r("2f62");a["default"].use(M["a"]);var O=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}});r("f9e3"),r("2dd8");a["default"].config.productionTip=!1,a["default"].use(n["a"]),a["default"].use(s["a"]),new a["default"]({router:g,store:O,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.fcf60b82.js.map