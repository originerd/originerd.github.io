(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,a,n){"use strict";n.r(a);var t=n(149),r=n(0),l=n.n(r),i=n(154);n(170);a.default=function(){return l.a.createElement(i.a,{hideHeader:!0},l.a.createElement("main",{className:"container container--landing"},l.a.createElement("section",{className:"landing"},l.a.createElement("h1",{className:"landing__title"},"Originerd"),l.a.createElement("nav",{className:"landing-nav"},l.a.createElement("div",{className:"landing-nav__item"},l.a.createElement(t.a,{className:"nav-link nav-link--emerald",to:"/about/"},l.a.createElement("h1",{className:"nav-link__content nav-link__content--large"},"about"))),l.a.createElement("div",{className:"landing-nav__item"},l.a.createElement(t.a,{className:"nav-link nav-link--yellow",to:"/posts/"},l.a.createElement("h1",{className:"nav-link__content nav-link__content--large"},"posts"))),l.a.createElement("div",{className:"landing-nav__item"},l.a.createElement(t.a,{className:"nav-link nav-link--cherryred",to:"/resume/"},l.a.createElement("h1",{className:"nav-link__content nav-link__content--large"},"résumé")))))))}},149:function(e,a,n){"use strict";n.d(a,"b",function(){return m});var t=n(0),r=n.n(t),l=n(4),i=n.n(l),c=n(33),s=n.n(c);n.d(a,"a",function(){return s.a});n(150);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,a,n){var t;e.exports=(t=n(153))&&t.default||t},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Originerd"}}}}},153:function(e,a,n){"use strict";n.r(a);n(34);var t=n(0),r=n.n(t),l=n(4),i=n.n(l),c=n(55),s=n(2),o=function(e){var a=e.location,n=s.default.getResourcesForPathnameSync(a.pathname);return n?r.a.createElement(c.a,Object.assign({location:a,pageResources:n},n.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},154:function(e,a,n){"use strict";var t=n(152),r=n(149),l=n(151),i=n.n(l),c=(n(156),n(4)),s=n.n(c),o=n(0),m=n.n(o),d=n(155),u=n.n(d),v=(n(157),n(158),n(159),[{name:"about",path:"/about/"},{name:"posts",path:"/posts/"},{name:"résumé",path:"/resume/"}]),p=["emerald","yellow","cherryred"],h=function(e){var a,n=e.hide,t=e.siteTitle;return n?null:m.a.createElement("nav",{className:"header"},m.a.createElement(r.a,{className:"nav-link",to:"/"},m.a.createElement("h1",{className:"nav-link__content"},t)),m.a.createElement("div",{className:"nav-link-group"},(a="undefined"!=typeof window&&window.location.pathname,v.map(function(e,n){var t=a===e.path,l=["nav-link","nav-link--"+p[n%p.length],t&&"nav-link--active"];return m.a.createElement(r.a,{className:l.filter(Boolean).join(" "),key:e.name,to:e.path},m.a.createElement("h2",{className:"nav-link__content"},e.name))}))))};h.propTypes={hide:s.a.bool,siteTitle:s.a.string.isRequired};var E=h;i.a.locale("ko");var f=function(e){var a=e.children,n=e.hideHeader;return m.a.createElement(r.b,{query:"755544856",render:function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,{title:e.site.siteMetadata.title},m.a.createElement("html",{lang:"en"})),m.a.createElement(E,{hide:n,siteTitle:e.site.siteMetadata.title}),a)},data:t})};f.propTypes={children:s.a.node.isRequired,hideHeader:s.a.bool};a.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-aa214e336a3418f18a50.js.map