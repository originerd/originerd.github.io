(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,n,a){"use strict";a.r(n);var t=a(144),r=a(0),i=a.n(r),l=a(156);a(177);n.default=function(){return i.a.createElement(l.a,{hideHeader:!0},i.a.createElement("main",{className:"container container--landing"},i.a.createElement("section",{className:"landing"},i.a.createElement("h1",{className:"landing__title"},"Originerd"),i.a.createElement("nav",{className:"landing-nav"},i.a.createElement("div",{className:"landing-nav__item"},i.a.createElement(t.Link,{className:"nav-link",to:"/about/"},i.a.createElement("h1",{className:"nav-link__content nav-link__content--large"},"about"))),i.a.createElement("div",{className:"landing-nav__item"},i.a.createElement(t.Link,{className:"nav-link nav-link--yellow",to:"/posts/"},i.a.createElement("h1",{className:"nav-link__content nav-link__content--large"},"posts"))),i.a.createElement("div",{className:"landing-nav__item"},i.a.createElement(t.Link,{className:"nav-link nav-link--cherryred",to:"/resume/"},i.a.createElement("h1",{className:"nav-link__content nav-link__content--large"},"résumé")))))))}},144:function(e,n,a){"use strict";a.r(n),a.d(n,"graphql",function(){return h}),a.d(n,"StaticQueryContext",function(){return p}),a.d(n,"StaticQuery",function(){return f});var t=a(0),r=a.n(t),i=a(4),l=a.n(i),c=a(143),o=a.n(c);a.d(n,"Link",function(){return o.a}),a.d(n,"withPrefix",function(){return c.withPrefix}),a.d(n,"navigate",function(){return c.navigate}),a.d(n,"push",function(){return c.push}),a.d(n,"replace",function(){return c.replace}),a.d(n,"navigateTo",function(){return c.navigateTo});var s=a(25);a.d(n,"waitForRouteChange",function(){return s.c});var u=a(145),d=a.n(u);a.d(n,"PageRenderer",function(){return d.a});var m=a(35);a.d(n,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},145:function(e,n,a){var t;e.exports=(t=a(148))&&t.default||t},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Originerd"}}}}},148:function(e,n,a){"use strict";a.r(n);a(36);var t=a(0),r=a.n(t),i=a(4),l=a.n(i),c=a(50),o=a(2),s=function(e){var n=e.location,a=o.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(c.a,Object.assign({location:n,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},n.default=s},149:function(e,n,a){},154:function(e,n,a){},156:function(e,n,a){"use strict";var t=a(147),r=a(144),i=a(146),l=a.n(i),c=(a(157),a(4)),o=a.n(c),s=a(0),u=a.n(s),d=a(158),m=a.n(d),p=(a(149),a(161),a(76),a(49),a(154),[{name:"about",path:"/about/"},{name:"posts",path:"/posts/"},{name:"résumé",path:"/resume/"}]),f=["yellow","orange","cherryred"],h=function(e){var n,a=e.hide,t=e.siteTitle;return a?null:u.a.createElement("nav",{className:"header"},u.a.createElement(r.Link,{className:"nav-link",to:"/"},u.a.createElement("h1",{className:"nav-link__content"},t)),u.a.createElement("div",null,(n=("undefined"!=typeof window&&window.location).pathname,p.filter(function(e){return n!=="/"+e+"/"}).map(function(e,n){return u.a.createElement(r.Link,{className:"nav-link nav-link--"+f[n%f.length],key:e.name,to:e.path},u.a.createElement("h2",{className:"nav-link__content"},e.name))}))))};h.propTypes={hide:o.a.boolean,siteTitle:o.a.string.isRequired};var v=h;l.a.locale("ko");var g=function(e){var n=e.children,a=e.hideHeader;return u.a.createElement(r.StaticQuery,{query:"755544856",render:function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{title:e.site.siteMetadata.title},u.a.createElement("html",{lang:"en"})),u.a.createElement(v,{hide:a,siteTitle:e.site.siteMetadata.title}),n)},data:t})};g.propTypes={children:o.a.node.isRequired,hideHeader:o.a.boolean};n.a=g},177:function(e,n,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-29bd50a99c5fc29f6521.js.map