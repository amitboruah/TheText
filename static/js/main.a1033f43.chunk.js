(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(16),s=a.n(r),o=(a(23),a(10)),l=(a(24),a(0));function i(e){return Object(l.jsxs)("div",{className:"container my-4 ",style:{color:"dark"===e.mode?"white":"black"},children:[Object(l.jsx)("h2",{children:"About Us"}),Object(l.jsx)("p",{className:"my-4 ",children:"TheText is a basic utility web app that can help you to manipulate text or we can say string"}),Object(l.jsx)("p",{children:" you can perform the different tasks with this."}),Object(l.jsx)("p",{children:"this web app is based on React js "}),Object(l.jsx)("p",{children:"hope you will like it..."}),Object(l.jsx)("p",{children:"thankyou"})]})}var b=a(7),d=a.n(b),j=a(9);function h(e){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(j.b,{className:"navbar-brand",to:"/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{className:"nav-link",to:"/about",children:e.about})})]}),Object(l.jsxs)("div",{class:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{onClick:e.toggleMode,class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{class:"form-check-label",for:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})})}h.prototype={title:d.a.string,about:d.a.string};var u=a(11);function m(e){var t,a=Object(c.useState)(""),n=Object(o.a)(a,2),r=n[0],s=n[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsxs)("div",(t={className:"mb-3 "},Object(u.a)(t,"className","container"),Object(u.a)(t,"style",{color:"dark"===e.mode?"white":"black"}),Object(u.a)(t,"children",[Object(l.jsx)("h2",{children:e.heading}),Object(l.jsx)("textarea",{className:"form-control ",value:r,onChange:function(e){s(e.target.value)},id:"box",rows:"10",style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"}}),Object(l.jsx)("button",{className:"btn btn-secondary",onClick:function(){s("")},children:"Clear"}),Object(l.jsx)("button",{className:"btn btn-secondary mx-2",onClick:function(){navigator.clipboard.writeText(r)},children:"Copy"}),Object(l.jsx)("button",{className:"btn btn-primary my-2 ",onClick:function(){var e=r.toUpperCase();s(e)},children:"Convert Upper Case"}),Object(l.jsx)("button",{className:"btn btn-primary my-2 mx-2 ",onClick:function(){var e=r.toLowerCase();s(e)},children:"Convert Lower Case"}),Object(l.jsx)("button",{className:"btn btn-primary my-2  ",onClick:function(){var e=r.split(/[  ]+/);s(e.join(" "))},children:"Remove Extra Space"})]),t))}),Object(l.jsxs)("div",{className:"container my-4",style:{color:"dark"===e.mode?"white":"black"},children:[Object(l.jsx)("h5",{children:"Word Count"}),Object(l.jsxs)("p",{children:[r.split(/\s+/).filter((function(e){return 0!==e.length})).length," Word and ",r.length," Character"]})]})]})}var x=a(2);var p=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{title:"TheText",about:"About us",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#404040"):(n("light"),document.body.style.backgroundColor="white")}}),Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{exact:!0,path:"/about",children:Object(l.jsx)(i,{mode:a})}),Object(l.jsx)(x.a,{exact:!0,path:"/",children:Object(l.jsx)(m,{heading:"Text Box",mode:a})})]})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),O()}},[[31,1,2]]]);
//# sourceMappingURL=main.a1033f43.chunk.js.map