(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,a,n){"use strict";n.r(a);var t=n(144),r=n(0),i=n.n(r),l=n(156);n(177);a.default=function(){return i.a.createElement(l.a,{hideHeader:!0},i.a.createElement("main",{className:"container container--landing"},i.a.createElement("section",{className:"landing"},i.a.createElement("h1",{className:"landing__title"},"Originerd"),i.a.createElement("nav",{className:"landing-nav"},i.a.createElement("div",{className:"landing-nav__item"},i.a.createElement(t.Link,{className:"nav-link",to:"/about/"},i.a.createElement("h1",{className:"nav-link__content nav-link__content--large"},"about"))),i.a.createElement("div",{className:"landing-nav__item"},i.a.createElement(t.Link,{className:"nav-link nav-link--yellow",to:"/posts/"},i.a.createElement("h1",{className:"nav-link__content nav-link__content--large"},"posts"))),i.a.createElement("div",{className:"landing-nav__item"},i.a.createElement(t.Link,{className:"nav-link nav-link--cherryred",to:"/resume/"},i.a.createElement("h1",{className:"nav-link__content nav-link__content--large"},"résumé")))))))}},144:function(e,a,n){"use strict";n.r(a),n.d(a,"graphql",function(){return h}),n.d(a,"StaticQueryContext",function(){return p}),n.d(a,"StaticQuery",function(){return v});var t=n(0),r=n.n(t),i=n(4),l=n.n(i),c=n(143),o=n.n(c);n.d(a,"Link",function(){return o.a}),n.d(a,"withPrefix",function(){return c.withPrefix}),n.d(a,"navigate",function(){return c.navigate}),n.d(a,"push",function(){return c.push}),n.d(a,"replace",function(){return c.replace}),n.d(a,"navigateTo",function(){return c.navigateTo});var s=n(25);n.d(a,"waitForRouteChange",function(){return s.c});var u=n(145),d=n.n(u);n.d(a,"PageRenderer",function(){return d.a});var m=n(35);n.d(a,"parsePath",function(){return m.a});var p=r.a.createContext({}),v=function(e){return r.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}v.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},145:function(e,a,n){var t;e.exports=(t=n(148))&&t.default||t},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Originerd"}}}}},148:function(e,a,n){"use strict";n.r(a);n(36);var t=n(0),r=n.n(t),i=n(4),l=n.n(i),c=n(50),o=n(2),s=function(e){var a=e.location,n=o.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(c.a,Object.assign({location:a,pageResources:n},n.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=s},149:function(e,a,n){},154:function(e,a,n){},156:function(e,a,n){"use strict";var t=n(147),r=n(144),i=n(146),l=n.n(i),c=(n(158),n(4)),o=n.n(c),s=n(0),u=n.n(s),d=n(157),m=n.n(d),p=(n(149),n(161),n(76),n(49),n(154),[{name:"about",path:"/about/"},{name:"posts",path:"/posts/"},{name:"résumé",path:"/resume/"}]),v=["yellow","orange","cherryred"],h=function(e){var a,n=e.hide,t=e.siteTitle;return n?null:u.a.createElement("nav",{className:"header"},u.a.createElement(r.Link,{className:"nav-link",to:"/"},u.a.createElement("h1",{className:"nav-link__content"},t)),u.a.createElement("div",{className:"nav-link-group"},(a="undefined"!=typeof window&&window.location.pathname,p.map(function(e,n){var t=a===e.path,i=["nav-link","nav-link--"+v[n%v.length],t&&"nav-link--active"];return u.a.createElement(r.Link,{className:i.filter(Boolean).join(" "),key:e.name,to:e.path},u.a.createElement("h2",{className:"nav-link__content"},e.name))}))))};h.propTypes={hide:o.a.bool,siteTitle:o.a.string.isRequired};var f=h;l.a.locale("ko");var g=function(e){var a=e.children,n=e.hideHeader;return u.a.createElement(r.StaticQuery,{query:"755544856",render:function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{title:e.site.siteMetadata.title},u.a.createElement("html",{lang:"en"})),u.a.createElement(f,{hide:n,siteTitle:e.site.siteMetadata.title}),a)},data:t})};g.propTypes={children:o.a.node.isRequired,hideHeader:o.a.bool};a.a=g},177:function(e,a,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-5a280fe82ba1e31402c4.js.map