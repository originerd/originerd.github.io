(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(156);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(143),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(25);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(145),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var p=n(35);n.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},147:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(50),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Originerd"}}}}},149:function(e,t,n){},154:function(e,t,n){},156:function(e,t,n){"use strict";var a=n(148),r=n(144),i=n(146),o=n.n(i),u=(n(158),n(4)),c=n.n(u),l=n(0),s=n.n(l),d=n(157),p=n.n(d),m=(n(149),n(161),n(76),n(49),n(154),[{name:"about",path:"/about/"},{name:"posts",path:"/posts/"},{name:"résumé",path:"/resume/"}]),h=["emerald","yellow","cherryred"],f=function(e){var t,n=e.hide,a=e.siteTitle;return n?null:s.a.createElement("nav",{className:"header"},s.a.createElement(r.Link,{className:"nav-link",to:"/"},s.a.createElement("h1",{className:"nav-link__content"},a)),s.a.createElement("div",{className:"nav-link-group"},(t="undefined"!=typeof window&&window.location.pathname,m.map(function(e,n){var a=t===e.path,i=["nav-link","nav-link--"+h[n%h.length],a&&"nav-link--active"];return s.a.createElement(r.Link,{className:i.filter(Boolean).join(" "),key:e.name,to:e.path},s.a.createElement("h2",{className:"nav-link__content"},e.name))}))))};f.propTypes={hide:c.a.bool,siteTitle:c.a.string.isRequired};var v=f;o.a.locale("ko");var y=function(e){var t=e.children,n=e.hideHeader;return s.a.createElement(r.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title},s.a.createElement("html",{lang:"en"})),s.a.createElement(v,{hide:n,siteTitle:e.site.siteMetadata.title}),t)},data:a})};y.propTypes={children:c.a.node.isRequired,hideHeader:c.a.bool};t.a=y}}]);
//# sourceMappingURL=component---src-pages-404-js-f97f5932256d6e87f14d.js.map