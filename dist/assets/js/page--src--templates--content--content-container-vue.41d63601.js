(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(t,n,e){},190:function(t,n,e){},194:function(t,n,e){"use strict";var a=e(1),i=e(44).findIndex,o=e(142),c=e(31),r=!0,l=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){r=!1})),a({target:"Array",proto:!0,forced:r||!l},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},195:function(t,n,e){"use strict";var a=e(189);e.n(a).a},196:function(t,n,e){},197:function(t,n,e){"use strict";var a=e(190);e.n(a).a},198:function(t,n){},200:function(t,n,e){"use strict";e(194);var a={props:{next:Object,prev:Object},methods:{handleClick:function(){var t=document.querySelector("#main-content");t&&t.scrollTo(0,0)}}},i=(e(195),e(5)),o=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination"},[e("g-link",{staticClass:"pagination-prev",attrs:{disabled:null===t.prev,to:t.prev&&t.prev.path}},[e("div",{on:{click:t.handleClick}},[e("i",{staticClass:"eva eva-arrow-ios-back-outline"}),e("span",[t._v("Prev Page")])])]),e("g-link",{staticClass:"pagination-next",attrs:{disabled:null===t.next,to:t.next&&t.next.path},on:{click:t.handleClick}},[e("div",{on:{click:t.handleClick}},[e("span",[t._v("Next Page")]),e("i",{staticClass:"eva eva-arrow-ios-forward-outline"})])])],1)}),[],!1,null,"24aed040",null).exports,c=e(90),r={components:{Pagination:o},props:{allContent:Object,content:Object},computed:{pageInfo:function(){var t=this,n=Object(c.a)(this.allContent.edges),e=n.findIndex((function(n){return n.title===t.content.title&&n.path===t.content.path})),a=0!==e,i=e-1,o=function(t){var e=n[t];return{path:e.path,title:e.title}};return{nextLink:e!==n.length-1?o(e+1):null,prevLink:a?o(i):null}}}},l=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("Pagination",{attrs:{prev:this.pageInfo.prevLink,next:this.pageInfo.nextLink}})}),[],!1,null,null,null);n.a=l.exports},201:function(t,n,e){"use strict";e(46),e(47),e(196);var a={props:{content:{type:Object,required:!0}},mounted:function(){this.$refs.content.querySelectorAll("table").forEach((function(t){var n=document.createElement("div");n.className="table-wrapper";t.parentNode.insertBefore(n,t);n.appendChild(t)}))}},i=(e(197),e(5)),o=Object(i.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("Fragment",[n("h1",{staticClass:"content-title"},[this._v(this._s(this.content.title))]),n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],ref:"content",staticClass:"content",domProps:{innerHTML:this._s(this.content.content)}})])}),[],!1,null,null,null);n.a=o.exports},205:function(t,n,e){"use strict";var a=e(198),i=e.n(a);n.default=i.a},210:function(t,n,e){"use strict";e.r(n);e(30);var a=e(200),i=e(201),o=(e(90),{components:{Content:i.a,PaginationContainer:a.a},metaInfo:function(t){var n=t.$page.content,e=t.$page.metadata;return{title:"".concat(n.title," | ").concat(e.bookTitle),meta:[{name:"robots",content:"index, follow"},{name:"og:type",content:"website"},{name:"og:title",content:e.siteName},{name:"og:url",content:"http://bosnaufal.github.io/css-itu-mudah/"},{name:"twitter:creator",content:"@BosNaufal"},{name:"twitter:site",content:"@BosNaufal"},{name:"twitter:title",content:e.siteName}]}}}),c=e(5),r=e(205),l=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Layout",{scopedSlots:t._u([{key:"default",fn:function(){return[e("Content",{attrs:{content:t.$page.content}})]},proxy:!0},{key:"footer",fn:function(){return[e("PaginationContainer",{attrs:{content:t.$page.content,allContent:t.$page.allContent}})]},proxy:!0}])})}),[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(l);n.default=l.exports}}]);