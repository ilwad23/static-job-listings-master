(this["webpackJsonpstatic-job-listings-master-react"]=this["webpackJsonpstatic-job-listings-master-react"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),c=a(11),s=a.n(c),i=(a(16),a(5)),l=a(0),r=Object(o.createContext)(),d=function(e){var t=e.reducer,a=e.initialState,n=e.children;return Object(l.jsx)(r.Provider,{value:Object(o.useReducer)(t,a),children:n})},u=function(){return Object(o.useContext)(r)},g=(a(18),a(2));a(9),a(10);var j=function(e){var t=e.NEW,a=e.FEATURED,o=e.logo,n=e.company,c=e.position,s=e.postedAt,r=e.contract,d=e.location,j=e.role,p=e.level,m=e.languages,v=e.tools,f=u(),b=Object(i.a)(f,2),O=b[0].tags,h=b[1];function x(e){h({type:"SET_TAGS",tags:Object(g.a)(new Set(e))}),h({type:"FILTER_TAGS"})}return Object(l.jsxs)("div",{className:"wrapper tablet",children:[a&&Object(l.jsx)("div",{className:"rec"}),Object(l.jsx)("div",{className:"left",children:Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("img",{className:"logo",src:o}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("div",{className:"company",children:n}),t&&Object(l.jsx)("div",{className:"new status",children:"NEW!"}),a&&Object(l.jsx)("div",{className:"feature status",children:"feature"})]}),Object(l.jsx)("div",{className:"position",children:c}),Object(l.jsxs)("div",{className:"bottom",children:[Object(l.jsx)("p",{children:s+" "}),Object(l.jsx)("p",{children:"\u2022"}),Object(l.jsx)("p",{children:" "+r+" "}),Object(l.jsx)("p",{children:"\u2022"}),Object(l.jsx)("p",{children:" "+d})]})]})]})}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("div",{className:"tag",onClick:function(){return x([].concat(Object(g.a)(O),[j]))},children:j}),Object(l.jsx)("div",{className:"tag",onClick:function(){return x([].concat(Object(g.a)(O),[p]))},children:p}),m.map((function(e){return Object(l.jsx)("div",{className:"tag",onClick:function(){return x([].concat(Object(g.a)(O),[e]))},children:e})})),v.map((function(e){return Object(l.jsx)("div",{className:"tag",onClick:function(){return x([].concat(Object(g.a)(O),[e]))},children:e})}))]})]})};var p=function(){!function(){var e=Object(o.useState)(window.innerWidth),t=Object(i.a)(e,2),a=t[0],n=t[1];Object(o.useEffect)((function(){window.addEventListener("resize",(function(){n(window.innerWidth)}))}),[])}();var e=u(),t=Object(i.a)(e,2),a=t[0],n=a.tags,c=a.filteredData,s=t[1],r=c.map((function(e){return Object(l.jsx)(j,{NEW:e.new,FEATURED:e.featured,logo:e.logo,company:e.company,position:e.position,postedAt:e.postedAt,contract:e.contract,location:e.location,role:e.role,level:e.level,languages:e.languages,tools:e.tools},e.id)}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{className:"bg-header",src:"/images/bg-header-desktop.svg"}),n.length>0&&Object(l.jsxs)("div",{className:"filter ",children:[Object(l.jsx)("div",{className:"filterTags ",children:n.map((function(e){return Object(l.jsxs)("div",{className:"filterTagWrapper",children:[Object(l.jsx)("div",{className:"filterTag",children:e}),Object(l.jsx)("div",{className:"filterCancel",onClick:function(){return function(e){s({type:"CANCEL_TAG",tag:e}),s({type:"FILTER_TAGS"})}(e)},children:Object(l.jsx)("img",{src:"./images/icon-remove.svg"})})]})}))}),Object(l.jsx)("p",{className:"filterClear",onClick:function(){return s({type:"CLEAR_TAGS"})},children:"Clear"})]})]}),Object(l.jsx)("div",{className:"tablets",children:r})]})},m=a(3),v=a(7),f={tags:[],filteredData:v},b=function(e,t){switch(t.type){case"SET_TAGS":return Object(m.a)(Object(m.a)({},e),{},{tags:t.tags});case"FILTER_TAGS":var a=v.filter((function(t){var a=[t.role,t.level].concat(Object(g.a)(t.languages),Object(g.a)(t.tools));return 0===e.tags.length?t:e.tags.every((function(e){return a.includes(e)}))}));return Object(m.a)(Object(m.a)({},e),{},{filteredData:a});case"CANCEL_TAG":var o=e.tags.indexOf(t.tag),n=Object(g.a)(e.tags);return o>=0?n.splice(o,1):console.warn("Cant remove product (tag: ".concat(t.tag,") as its not in the tags")),Object(m.a)(Object(m.a)({},e),{},{tags:n});case"CLEAR_TAGS":return Object(m.a)(Object(m.a)({},e),{},{tags:[],filteredData:v});default:return e}};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(d,{initialState:f,reducer:b,children:Object(l.jsx)(p,{})})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.fa778e99.chunk.js.map