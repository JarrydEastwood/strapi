(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(t,e,n){"use strict";var o=n(3),r=n(125),l=n.n(r),c=n(237),d=n.n(c);l.a.use(d.a),l.a.container="#__nuxt",o.a.prototype.$uikit=l.a},228:function(t,e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"navs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Item"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:88}};n.loc.source={body:"query {\n  navs{\n    data {\n      id\n      attributes {\n        Item\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(t,e){if("FragmentSpread"===t.kind)e.add(t.name.value);else if("VariableDefinition"===t.kind){var n=t.type;"NamedType"===n.kind&&e.add(n.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){o(t,e)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){o(t,e)})),t.definitions&&t.definitions.forEach((function(t){o(t,e)}))}var r={};n.definitions.forEach((function(t){if(t.name){var e=new Set;o(t,e),r[t.name.value]=e}})),t.exports=n},240:function(t,e,n){"use strict";var o=[function(){var t=this._self._c;return t("div",{staticClass:"uk-navbar-left uk-width-1-2"},[t("ul",{staticClass:"uk-navbar-nav uk-padding-small"},[t("li",[t("a",{staticClass:"uk-hidden@s",attrs:{href:"#modal-full","uk-toggle":""}},[t("span",{attrs:{"uk-icon":"icon: table"}})])]),this._v(" "),t("li",[t("a",{attrs:{href:"/"}},[t("img",{staticClass:"toplogo",attrs:{src:n(315),alt:"Choose Nourish Logo."}})])])])])}],r=n(228),l={data:function(){return{navs:{data:[]},api_url:"http://localhost:1337"}},apollo:{navs:{prefetch:!0,query:n.n(r).a,variables:function(){return{id:parseInt(this.$route.params.id)}}}}},c=n(55),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{},[e("nav",{staticClass:"uk-navbar-container headerbg",attrs:{"uk-navbar":""}},[t._m(0),t._v(" "),e("div",{staticClass:"uk-navbar-center uk-visible@s"},[e("ul",{staticClass:"uk-navbar-nav"},t._l(t.navs.data,(function(nav){return e("li",{key:nav.id},[e("NuxtLink",{attrs:{to:{name:"navs-id",params:{id:nav.id}}}},[t._v(t._s(nav.attributes.Item)+"\n          ")])],1)})),0)])]),t._v(" "),e("div",{staticClass:"uk-modal-full",attrs:{id:"modal-full","uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog"},[e("button",{staticClass:"uk-modal-close-full uk-close-large",attrs:{type:"button","uk-close":""}}),t._v(" "),e("div",{staticClass:"uk-grid-collapse uk-child-width-1-2@s uk-flex-middle",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-padding-large"},[e("h3",[t._v("The Collapsed Menu")]),t._v(" "),e("div",{staticClass:"uk-width-1-2@s"},[e("ul",{staticClass:"uk-nav-primary uk-nav-parent-icon",attrs:{"uk-nav":""}},t._l(t.navs.data,(function(nav){return e("li",{key:nav.id},[e("NuxtLink",{staticClass:"uk-modal-close",attrs:{to:{name:"navs-id",params:{id:nav.id}}}},[t._v(t._s(nav.attributes.Item)+"\n                ")])],1)})),0)]),t._v(" "),e("p",{staticClass:"uk-text-light"},[t._v("Bottom menu - default.vue - line 60")])])])])]),t._v(" "),e("Nuxt")],1)}),o,!1,null,null,null);e.a=component.exports},242:function(t,e,n){n(243),t.exports=n(244)},313:function(t,e,n){var content=n(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(97).default)("17bc9ac2",content,!0,{sourceMap:!1})},314:function(t,e,n){var o=n(96)((function(i){return i[1]}));o.push([t.i,"a{-webkit-text-decoration:none;text-decoration:none}h1{font-size:120px}#category,h1{font-family:Poppins}#category{font-weight:500}#title{font-size:22px;font-size:1.375rem;letter-spacing:.4px;line-height:1.13636}#banner{height:800px;margin:20px}#editor{font-size:16px;font-size:1rem;line-height:1.75}.uk-navbar-container{background:#031458!important;font-family:Poppins}.uk-navbar-container a{color:#fff!important}.uk-navbar-container a:hover{-webkit-text-decoration:underline!important;text-decoration:underline!important}img:hover{opacity:1;transition:opacity .25s cubic-bezier(.39,.575,.565,1)}.whitetext{color:#fff!important;letter-spacing:.3rem}.thintext{font-weight:100;letter-spacing:.1rem}.toplogo{max-height:5rem;max-width:20vw}.headerbg{background-color:#29539b;background-image:linear-gradient(315deg,#29539b,#1e3b70 74%)!important}",""]),o.locals={},t.exports=o},315:function(t,e,n){t.exports=n.p+"img/whitecnlogo.915bb19.png"},389:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=389}},[[242,9,1,10]]]);