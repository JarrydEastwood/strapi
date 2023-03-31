(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{391:function(e,t,n){"use strict";n.r(t);n(38),n(56);var r={data:function(){return{api_url:"http://localhost:1337"}},props:{articles:Object},computed:{leftArticlesCount:function(){return Math.ceil(this.articles.data.length/5)},leftArticles:function(){return this.articles.data.slice(0,this.leftArticlesCount)},rightArticles:function(){return this.articles.data.slice(this.leftArticlesCount,this.articles.length)}}},d=n(55),component=Object(d.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"uk-child-width-1-2",attrs:{"uk-grid":""}},[t("div",e._l(e.leftArticles,(function(article){return t("NuxtLink",{key:article.id,staticClass:"uk-link-reset",attrs:{to:{name:"articles-id",params:{id:article.id}}}},[t("div",{staticClass:"uk-card uk-card-muted uk-card-hover"},[article.attributes.image.data?t("div",{staticClass:"uk-card-media-top"},[t("img",{attrs:{src:e.api_url+article.attributes.image.data.attributes.url,alt:"",height:"100"}})]):e._e(),e._v(" "),t("div",{staticClass:"uk-card-body"},[article.attributes.category.data?t("p",{staticClass:"uk-text-uppercase",attrs:{id:"category"}},[e._v("\n              "+e._s(article.attributes.category.data.attributes.name)+"\n            ")]):e._e(),e._v(" "),t("p",{staticClass:"uk-text-small",attrs:{id:"title"}},[e._v("\n              "+e._s(article.attributes.title)+"\n            ")])])])])})),1),e._v(" "),t("div",[t("div",{staticClass:"uk-child-width-1-2@m uk-grid-match",attrs:{"uk-grid":""}},e._l(e.rightArticles,(function(article){return t("NuxtLink",{key:article.id,staticClass:"uk-link-reset",attrs:{to:{name:"articles-id",params:{id:article.id}}}},[t("div",{staticClass:"uk-card uk-card-muted uk-card-hover"},[article.attributes.image.data?t("div",{staticClass:"uk-card-media-top"},[t("img",{attrs:{src:e.api_url+article.attributes.image.data.attributes.url,alt:"",height:"100"}})]):e._e(),e._v(" "),t("div",{staticClass:"uk-card-body"},[article.attributes.category.data?t("p",{staticClass:"uk-text-uppercase",attrs:{id:"category"}},[e._v("\n                "+e._s(article.attributes.category.data.attributes.name)+"\n              ")]):e._e(),e._v(" "),t("p",{staticClass:"uk-text-small",attrs:{id:"title"}},[e._v("\n                "+e._s(article.attributes.title)+"\n              ")])])])])})),1)])])])}),[],!1,null,null,null);t.default=component.exports},394:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Category"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"category"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ingredients"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"method"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attributes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}],loc:{start:0,end:620}};n.loc.source={body:"query Category($id: ID!){\n  category(id: $id) {\n    data {\n      attributes {\n        name\n        articles {\n          id\n          data {\n            attributes {\n              title\n              content\n              ingredients\n              method\n              image {\n                data {\n                  attributes {\n                  url\n                  }\n                }\n              }\n              category {\n                data {\n                  attributes {\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var d={};function l(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),d[e.name.value]=t}})),e.exports=n,e.exports.Category=function(e,t){var n={kind:e.kind,definitions:[l(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=d[t]||new Set,c=new Set,o=new Set;for(r.forEach((function(e){o.add(e)}));o.size>0;){var m=o;o=new Set,m.forEach((function(e){c.has(e)||(c.add(e),(d[e]||new Set).forEach((function(e){o.add(e)})))}))}return c.forEach((function(t){var r=l(e,t);r&&n.definitions.push(r)})),n}(n,"Category")},400:function(e,t,n){"use strict";n.r(t);n(38);var r=n(394),d=n.n(r),l={data:function(){return{category:{data:[]}}},components:{Articles:n(391).default},apollo:{category:{prefetch:!0,query:d.a,variables:function(){return{id:parseInt(this.$route.params.id)}}}}},c=n(55),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("client-only",[t("div",{staticClass:"uk-section"},[t("div",{staticClass:"uk-container uk-container-large"},[t("h1",[e._v(e._s(e.category.data.attributes.name))]),e._v(" "),t("Articles",{attrs:{articles:e.category.data.attributes.articles}})],1)])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Articles:n(391).default})}}]);