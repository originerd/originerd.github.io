(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return p});t(49);var n=t(157),r=t.n(n),i=t(144),l=t(0),o=t.n(l),s=t(4),u=t.n(s),c=t(156),d=function(e){var a=e.data,t=a.allMarkdownRemark.edges,n=a.site.siteMetadata.title;return o.a.createElement(c.a,null,o.a.createElement(r.a,{title:"Posts :: "+n},o.a.createElement("html",{lang:"en"})),o.a.createElement("main",{className:"container container--article"},t.map(function(e){return e.node}).map(function(e){var a=e.excerpt,t=e.fields,n=e.frontmatter,r=e.id;return o.a.createElement("article",{className:"card",key:r},o.a.createElement(i.Link,{to:t.slug},o.a.createElement("h2",null,n.title)),o.a.createElement("p",null,a))})))};d.propTypes={data:u.a.shape({allMarkdownRemark:u.a.shape({edges:u.a.arrayOf(u.a.shape({node:u.a.shape({excerpt:u.a.string,fields:u.a.shape({slug:u.a.string}),frontmatter:u.a.shape({date:u.a.string,tags:u.a.array,title:u.a.string}),id:u.a.string})}))}),site:u.a.shape({siteMetadata:u.a.shape({title:u.a.string.isRequired})})})};var p="230746200";a.default=d},144:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return h}),t.d(a,"StaticQueryContext",function(){return m}),t.d(a,"StaticQuery",function(){return f});var n=t(0),r=t.n(n),i=t(4),l=t.n(i),o=t(143),s=t.n(o);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var u=t(25);t.d(a,"waitForRouteChange",function(){return u.c});var c=t(145),d=t.n(c);t.d(a,"PageRenderer",function(){return d.a});var p=t(35);t.d(a,"parsePath",function(){return p.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},145:function(e,a,t){var n;e.exports=(n=t(148))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Originerd"}}}}},148:function(e,a,t){"use strict";t.r(a);t(36);var n=t(0),r=t.n(n),i=t(4),l=t.n(i),o=t(50),s=t(2),u=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=u},149:function(e,a,t){},154:function(e,a,t){},156:function(e,a,t){"use strict";var n=t(147),r=t(144),i=t(146),l=t.n(i),o=(t(158),t(4)),s=t.n(o),u=t(0),c=t.n(u),d=t(157),p=t.n(d),m=(t(149),t(161),t(76),t(49),t(154),[{name:"about",path:"/about/"},{name:"posts",path:"/posts/"},{name:"résumé",path:"/resume/"}]),f=["yellow","orange","cherryred"],h=function(e){var a,t=e.hide,n=e.siteTitle;return t?null:c.a.createElement("nav",{className:"header"},c.a.createElement(r.Link,{className:"nav-link",to:"/"},c.a.createElement("h1",{className:"nav-link__content"},n)),c.a.createElement("div",null,(a="undefined"!=typeof window&&window.location.pathname,m.map(function(e,t){var n=a===e.path,i=["nav-link","nav-link--"+f[t%f.length],n&&"nav-link--active"];return c.a.createElement(r.Link,{className:i.filter(Boolean).join(" "),key:e.name,to:e.path},c.a.createElement("h2",{className:"nav-link__content"},e.name))}))))};h.propTypes={hide:s.a.bool,siteTitle:s.a.string.isRequired};var g=h;l.a.locale("ko");var v=function(e){var a=e.children,t=e.hideHeader;return c.a.createElement(r.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:e.site.siteMetadata.title},c.a.createElement("html",{lang:"en"})),c.a.createElement(g,{hide:t,siteTitle:e.site.siteMetadata.title}),a)},data:n})};v.propTypes={children:s.a.node.isRequired,hideHeader:s.a.bool};a.a=v}}]);
//# sourceMappingURL=component---src-pages-posts-js-847d4bc359aec308f89c.js.map