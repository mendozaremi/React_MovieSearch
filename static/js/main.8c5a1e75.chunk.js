(this.webpackJsonptmbd_movie_app=this.webpackJsonptmbd_movie_app||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(5),a=c.n(r),i=(c(11),c(12),c(3)),l=c.n(i),o=c(6),j=c(4),d=c(0);function h(e){var t=e.movie;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(d.jsxs)("div",{clasName:"card--content",children:[Object(d.jsx)("h3",{className:"card--title",children:t.title}),Object(d.jsx)("p",{children:Object(d.jsxs)("small",{children:["RELEASE DATE: ",t.release_date]})}),Object(d.jsx)("p",{children:Object(d.jsxs)("small",{children:["RATING: ",t.vote_average]})}),Object(d.jsx)("p",{className:"card--desc",children:t.overview})]})]})}var b=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),a=Object(j.a)(r,2),i=a[0],b=a[1],u=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=74516cab96a2824bc7dc5e7dabde44f4&language=en-US&query=".concat(c,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(n);case 5:return s=e.sent,e.next=8,s.json();case 8:r=e.sent,console.log(r.results),b(r.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:"form",onSubmit:u,children:[Object(d.jsx)("label",{className:"label",htmlFor:"query",children:"Movie Name"}),Object(d.jsx)("input",{type:"text",name:"query",placeholder:"Search Movies",value:c,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(d.jsx)("div",{className:"card-list",children:i.filter((function(e){return e.poster_path})).map((function(e){return Object(d.jsx)(h,{movie:e},e.id)}))})]})},u=function(){return Object(d.jsx)("header",{children:Object(d.jsxs)("nav",{class:"container",children:[Object(d.jsx)("div",{class:"home",children:Object(d.jsx)("a",{href:"#",class:"nav--Links",children:"Home"})}),Object(d.jsx)("div",{class:"portfolio",children:Object(d.jsx)("a",{href:"https://mendozaremi.github.io/portfolio/",class:"nav--Links",children:"Portfolio"})}),Object(d.jsx)("div",{class:"linkedIn",children:Object(d.jsx)("a",{href:"https://www.linkedin.com/in/remi-mendoza/",class:"nav--Links",children:"LinkedIn"})})]})})},m=function(){return Object(d.jsx)("footer",{children:"Copyright \xa9 2020 - Remi Mendoza"})};var p=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"title",children:"The Shoppies \ud83c\udf7f"}),Object(d.jsx)(b,{})]}),Object(d.jsx)(m,{})]})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8c5a1e75.chunk.js.map