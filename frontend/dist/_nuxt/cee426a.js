(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{395:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Nav"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nav"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Item"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:110}};t.loc.source={body:"query Nav($id: ID!) {\n  nav(id: $id) {\n    data {\n      id\n      attributes {\n        Item\n      }\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){d(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){d(e,n)})),e.definitions&&e.definitions.forEach((function(e){d(e,n)}))}var o={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;d(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.Nav=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=o[n]||new Set,l=new Set,c=new Set;for(d.forEach((function(e){c.add(e)}));c.size>0;){var v=c;c=new Set,v.forEach((function(e){l.has(e)||(l.add(e),(o[e]||new Set).forEach((function(e){c.add(e)})))}))}return l.forEach((function(n){var d=r(e,n);d&&t.definitions.push(d)})),t}(t,"Nav")},401:function(e,n,t){"use strict";t.r(n);var d=t(395),o={data:function(){return{nav:{data:[]},api_url:"http://localhost:1337"}},apollo:{nav:{prefetch:!0,query:t.n(d).a,variables:function(){return{id:parseInt(this.$route.params.id)}}}}},r=t(55),component=Object(r.a)(o,(function(){var e=this,n=e._self._c;return n("div",[n("client-only",[n("div",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container uk-container-large"},[n("p",{staticClass:"uk-text-large"},[e._v("This is where you will find a page for "+e._s(e.nav.data.attributes.Item)+" ")])])])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);