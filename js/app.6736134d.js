(function(t){function e(e){for(var a,c,u=e[0],i=e[1],s=e[2],p=0,f=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,u=1;u<r.length;u++){var i=r[u];0!==n[i]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},o=[];function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/population-demo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("b0c0");var a=r("2b0e"),n=r("c3da"),o=r.n(n),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("main",[r("div",[r("h2",[t._v("都道府県")]),r("div",{staticClass:"prefectures-layout"},t._l(t.prefectures,(function(e){return r("span",{key:e.prefCode,staticClass:"prefectures-item",on:{change:function(r){return t.handleClick(r,e.prefCode,e.prefName)}}},[r("input",{attrs:{type:"checkbox",id:e.prefCode},domProps:{value:e.prefName}}),r("label",{attrs:{for:e.prefCode}},[t._v(t._s(e.prefName))])])})),0)]),r("div",{staticClass:"mt50"},[r("h2",[t._v("人口数")]),r("div",{staticClass:"chart-layout"},[r("ve-line",{attrs:{data:t.chartData}})],1)])])])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("h1",[t._v("都道府県別の総人口推移")])])}],i=(r("d3b7"),r("159b"),r("a434"),r("bc3a")),s=r.n(i),l={name:"App",data:function(){return{prefectures:[],chartData:{columns:["年度"],rows:[]},localList:[]}},mounted:function(){var t=this;s.a.get("api/v1/prefectures").then((function(e){t.prefectures=e.data.result}))},methods:{handleClick:function(t,e,r){var a=this;t.target.checked?s.a.get("api/v1/population/composition/perYear?cityCode=-&prefCode="+e).then((function(t){a.localList=t.data.result.data[0].data,0==a.chartData.rows.length&&a.localList.forEach((function(t){var e=new Object;e["年度"]=t.year+"",a.chartData.rows.push(e)})),a.addToChart(r,a.localList)})):this.deleteFromChart(r)},addToChart:function(t,e){var r=this;this.chartData.columns.push(t),e.forEach((function(e){r.chartData.rows.forEach((function(r){r["年度"]==e.year+""&&(r[t]=e.value+"")}))}))},deleteFromChart:function(t){var e=this.chartData.columns.indexOf(t);this.chartData.columns.splice(e,1)}}},p=l,f=(r("034f"),r("2877")),d=Object(f["a"])(p,c,u,!1,null,null,null),h=d.exports,v=r("130e");a["a"].component(o.a.name,o.a),a["a"].config.productionTip=!1,a["a"].use(v["a"],s.a),s.a.defaults.baseURL="https://opendata.resas-portal.go.jp",s.a.defaults.headers={"X-API-KEY":"YsMpIaaMich4VZKlleAq8PrG64h6M8BwVpVLGpkS"},new a["a"]({render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.6736134d.js.map