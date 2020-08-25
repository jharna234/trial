(this["webpackJsonpnews-portal"]=this["webpackJsonpnews-portal"]||[]).push([[6],{94:function(e,a,t){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(t.push(l.value),!a||t.length!==a);n=!0);}catch(m){r=!0,o=m}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return t}}(e,a)||function(e,a){if(e){if("string"===typeof e)return n(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(a,"a",(function(){return r}))},97:function(e,a,t){"use strict";t.r(a);var n=t(14),r=t(15),o=t(18),l=t(16),c=t(1),m=t.n(c),s=t(6),i=t(5),u=t(37),d=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:m.a.lazy((function(){return t.e(7).then(t.bind(null,96))}))},{path:"/news",name:"News",component:m.a.lazy((function(){return t.e(3).then(t.bind(null,98))}))},{path:"/polls",name:"Polls",component:m.a.lazy((function(){return t.e(4).then(t.bind(null,99))}))},{path:"/users",name:"Users",component:m.a.lazy((function(){return t.e(5).then(t.bind(null,100))}))},{path:"/feeds",name:"Feeds",component:u.a}],p=m.a.createElement("div",{className:"pt-3 text-center"},m.a.createElement("div",{className:"sk-spinner sk-spinner-pulse"})),b=m.a.memo((function(){return m.a.createElement("main",{className:"c-main"},m.a.createElement(i.l,{fluid:!0},m.a.createElement(c.Suspense,{fallback:p},m.a.createElement(s.d,null,d.map((function(e,a){return e.component&&m.a.createElement(s.b,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return m.a.createElement(i.s,null,m.a.createElement(e.component,a))}})})),m.a.createElement(s.a,{from:"/",to:"/dashboard"})))))})),f=m.a.memo((function(){return m.a.createElement(i.t,{fixed:!1},m.a.createElement("div",null,m.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},"News Portal Dashboard"),m.a.createElement("span",{className:"ml-1"},"\xa9 2020.")))})),h=t(36),E=function(e){var a=Object(h.b)(),t=Object(h.c)((function(e){return e.sidebarShow}));return m.a.createElement(i.w,{withSubheader:!0},m.a.createElement(i.eb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var e=!![!1,"responsive"].includes(t)||"responsive";a({type:"set",sidebarShow:e})}}),m.a.createElement(i.eb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var e=![!0,"responsive"].includes(t)&&"responsive";a({type:"set",sidebarShow:e})}}),m.a.createElement(i.x,{className:"d-md-down-none mr-auto"}),m.a.createElement(i.x,null,m.a.createElement(N,e)),m.a.createElement(i.Z,{className:"px-3 justify-content-between"},m.a.createElement(i.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:d})))},v=t(94),w=t(12),y=t(17),N=function(e){var a=Object(c.useState)(!1),t=Object(v.a)(a,2),n=t[0],r=t[1];return m.a.createElement(m.a.Fragment,null,m.a.createElement(i.I,{show:n,onClose:function(){return r(!n)},size:"lg"},m.a.createElement(i.L,{closeButton:!0},m.a.createElement(i.M,null,"Logout...")),m.a.createElement(i.J,null,"Are you sure want ot logout...?"),m.a.createElement(i.K,null,m.a.createElement(i.f,{color:"secondary",onClick:function(){return r(!n)}},"No"),m.a.createElement(i.f,{color:"primary",onClick:function(){console.log(e),(new y.a).remove("token",{path:"/"}),e.history.push("/login")}},"Yes")," ")),m.a.createElement(i.o,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down"},m.a.createElement(i.r,{className:"c-header-nav-link",caret:!1},m.a.createElement("div",{className:"c-avatar"},"Account")),m.a.createElement(i.q,{className:"pt-0",placement:"bottom-end"},m.a.createElement(i.p,{onClick:function(){return r(!n)}},m.a.createElement(w.a,{name:"cil-lock-locked",className:"mfe-2"}),"Logout"))))},g=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",badge:{color:"info"}},{_tag:"CSidebarNavItem",name:"Manage news",to:"/news",badge:{color:"info"}},{_tag:"CSidebarNavItem",name:"Manage polls",to:"/polls",badge:{color:"info"}},{_tag:"CSidebarNavItem",name:"Manage users",to:"/users",badge:{color:"info"}},{_tag:"CSidebarNavItem",name:"News feeds",to:"/feeds",badge:{color:"info"}}],S=m.a.memo((function(){var e=Object(h.b)(),a=Object(h.c)((function(e){return e.sidebarShow}));return m.a.createElement(i.R,{show:a,onShowChange:function(a){return e({type:"set",sidebarShow:a})}},m.a.createElement(i.S,{className:"d-md-down-none",to:"/"},m.a.createElement("h3",null,"News Portal Dashboard")),m.a.createElement(i.U,null,m.a.createElement(i.m,{items:g,components:{CSidebarNavDivider:i.V,CSidebarNavDropdown:i.W,CSidebarNavItem:i.X,CSidebarNavTitle:i.Y}})),m.a.createElement(i.T,{className:"c-d-md-down-none"}))})),C=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"c-app c-default-layout"},m.a.createElement(S,null),m.a.createElement("div",{className:"c-wrapper"},m.a.createElement(E,this.props),m.a.createElement("div",{className:"c-body"},m.a.createElement(b,null)),m.a.createElement(f,null)))}}]),t}(m.a.Component);a.default=C}}]);
//# sourceMappingURL=6.4093fde5.chunk.js.map