(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return f});var n=t(7),r=t.n(n),i=t(155),l=t.n(i),s=t(4),o=t.n(s),c=t(151),u=t.n(c),d=(t(169),t(0)),m=t.n(d),p=t(154),h=function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var t=a.prototype;return t.renderDate=function(e){var a=u()(e).add(-9,"hours").format("lll");return m.a.createElement("p",{className:"date"},a)},t.renderTags=function(){var e=this.props.data.markdownRemark.frontmatter.tags;return e?m.a.createElement("p",null,e.join(", ")):null},t.render=function(){var e=this.props.data,a=e.markdownRemark,t=a.frontmatter,n=a.html,r=e.site.siteMetadata,i=t.date,s=t.title;return m.a.createElement(p.a,null,m.a.createElement(l.a,{title:s+" :: "+r.title},m.a.createElement("html",{lang:"en"})),m.a.createElement("article",{className:"container container--article"},m.a.createElement("h1",null,s),this.renderDate(i),this.renderTags(),m.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))},a}(m.a.Component);h.propTypes={data:o.a.shape({markdownRemark:o.a.shape({excerpt:o.a.string,frontmatter:o.a.shape({date:o.a.string,tags:o.a.array,title:o.a.string}),html:o.a.string}),site:o.a.shape({siteMetadata:o.a.shape({title:o.a.string.isRequired})})})};var f="3085709570";a.default=h},149:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),r=t.n(n),i=t(4),l=t.n(i),s=t(33),o=t.n(s);t.d(a,"a",function(){return o.a});t(150);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},150:function(e,a,t){var n;e.exports=(n=t(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Originerd"}}}}},153:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),i=t(4),l=t.n(i),s=t(55),o=t(2),c=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=c},154:function(e,a,t){"use strict";var n=t(152),r=t(149),i=t(151),l=t.n(i),s=(t(156),t(4)),o=t.n(s),c=t(0),u=t.n(c),d=t(155),m=t.n(d),p=(t(157),t(158),t(159),[{name:"about",path:"/about/"},{name:"posts",path:"/posts/"},{name:"résumé",path:"/resume/"}]),h=["emerald","yellow","cherryred"],f=function(e){var a,t=e.hide,n=e.siteTitle;return t?null:u.a.createElement("nav",{className:"header"},u.a.createElement(r.a,{className:"nav-link",to:"/"},u.a.createElement("h1",{className:"nav-link__content"},n)),u.a.createElement("div",{className:"nav-link-group"},(a="undefined"!=typeof window&&window.location.pathname,p.map(function(e,t){var n=a===e.path,i=["nav-link","nav-link--"+h[t%h.length],n&&"nav-link--active"];return u.a.createElement(r.a,{className:i.filter(Boolean).join(" "),key:e.name,to:e.path},u.a.createElement("h2",{className:"nav-link__content"},e.name))}))))};f.propTypes={hide:o.a.bool,siteTitle:o.a.string.isRequired};var v=f;l.a.locale("ko");var g=function(e){var a=e.children,t=e.hideHeader;return u.a.createElement(r.b,{query:"755544856",render:function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{title:e.site.siteMetadata.title},u.a.createElement("html",{lang:"en"})),u.a.createElement(v,{hide:t,siteTitle:e.site.siteMetadata.title}),a)},data:n})};g.propTypes={children:o.a.node.isRequired,hideHeader:o.a.bool};a.a=g}}]);
//# sourceMappingURL=component---src-templates-post-js-22da0b756774db59fb3a.js.map