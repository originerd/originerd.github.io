(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return m});var n=t(155),r=t.n(n),i=t(149),l=t(0),s=t.n(l),c=t(4),o=t.n(c),u=t(154),d=function(e){var a=e.data,t=a.allMarkdownRemark.edges,n=a.site.siteMetadata.title;return s.a.createElement(u.a,null,s.a.createElement(r.a,{title:"Posts :: "+n},s.a.createElement("html",{lang:"en"})),s.a.createElement("main",{className:"container container--article"},t.map(function(e){return e.node}).map(function(e){var a=e.excerpt,t=e.fields,n=e.frontmatter,r=e.id;return s.a.createElement("article",{className:"card",key:r},s.a.createElement(i.a,{to:t.slug},s.a.createElement("h2",null,n.title)),s.a.createElement("p",null,a))})))};d.propTypes={data:o.a.shape({allMarkdownRemark:o.a.shape({edges:o.a.arrayOf(o.a.shape({node:o.a.shape({excerpt:o.a.string,fields:o.a.shape({slug:o.a.string}),frontmatter:o.a.shape({date:o.a.string,tags:o.a.array,title:o.a.string}),id:o.a.string})}))}),site:o.a.shape({siteMetadata:o.a.shape({title:o.a.string.isRequired})})})};var m="230746200";a.default=d},149:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),r=t.n(n),i=t(4),l=t.n(i),s=t(33),c=t.n(s);t.d(a,"a",function(){return c.a});t(150);var o=r.a.createContext({}),u=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},150:function(e,a,t){var n;e.exports=(n=t(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Originerd"}}}}},153:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),i=t(4),l=t.n(i),s=t(55),c=t(2),o=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=o},154:function(e,a,t){"use strict";var n=t(152),r=t(149),i=t(151),l=t.n(i),s=(t(156),t(4)),c=t.n(s),o=t(0),u=t.n(o),d=t(155),m=t.n(d),p=(t(157),t(158),t(159),[{name:"about",path:"/about/"},{name:"posts",path:"/posts/"},{name:"résumé",path:"/resume/"}]),h=["emerald","yellow","cherryred"],f=function(e){var a,t=e.hide,n=e.siteTitle;return t?null:u.a.createElement("nav",{className:"header"},u.a.createElement(r.a,{className:"nav-link",to:"/"},u.a.createElement("h1",{className:"nav-link__content"},n)),u.a.createElement("div",{className:"nav-link-group"},(a="undefined"!=typeof window&&window.location.pathname,p.map(function(e,t){var n=a===e.path,i=["nav-link","nav-link--"+h[t%h.length],n&&"nav-link--active"];return u.a.createElement(r.a,{className:i.filter(Boolean).join(" "),key:e.name,to:e.path},u.a.createElement("h2",{className:"nav-link__content"},e.name))}))))};f.propTypes={hide:c.a.bool,siteTitle:c.a.string.isRequired};var v=f;l.a.locale("ko");var g=function(e){var a=e.children,t=e.hideHeader;return u.a.createElement(r.b,{query:"755544856",render:function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{title:e.site.siteMetadata.title},u.a.createElement("html",{lang:"en"})),u.a.createElement(v,{hide:t,siteTitle:e.site.siteMetadata.title}),a)},data:n})};g.propTypes={children:c.a.node.isRequired,hideHeader:c.a.bool};a.a=g}}]);
//# sourceMappingURL=component---src-pages-posts-js-7bcfe397a1f4a93465e1.js.map