(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{244:function(e,a,t){"use strict";var n=t(1),r=t(9),l=t(0),c=t.n(l),i=t(227),s=t.n(i),o=t(231),m=t(226),u=t(228),b=t(135),d=t.n(b);function v(e){var a=e.to,t=e.href,l=e.label,i=Object(r.a)(e,["to","href","label"]),s=Object(u.a)(a);return c.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:s},i),l)}var h=function(e){var a=e.url,t=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(m.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},r=n.copyright,l=n.links,i=void 0===l?[]:l,o=n.logo,b=void 0===o?{}:o,_=Object(u.a)(b.src);return t?c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container"},i&&i.length>0&&c.a.createElement("div",{className:"row footer__links"},i.map((function(e,a){return c.a.createElement("div",{key:a,className:s()("col footer__col",d.a.footerCol)},null!=e.title?c.a.createElement("h4",{className:s()("footer__title",d.a.footerTitle)},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?c.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(v,e))}))):null)}))),(b||r)&&c.a.createElement("div",{className:"text--center"},b&&b.src&&c.a.createElement("div",{className:"margin-bottom--sm"},b.href?c.a.createElement("a",{href:b.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},c.a.createElement(h,{alt:b.alt,url:_})):c.a.createElement(h,{alt:b.alt,url:_})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},247:function(e,a,t){"use strict";var n=t(1),r=(t(234),t(52),t(9)),l=t(0),c=t.n(l),i=t(227),s=t.n(i),o=t(231),m=t(226),u=t(228),b=(t(54),t(25),t(20),t(19),t(79),t(232)),d=(t(132),function(e){var a=Object(l.useState)(!1),n=a[0],r=a[1],i=Object(l.useRef)(null),o=Object(m.a)().siteConfig,u=(void 0===o?{}:o).themeConfig.algolia,d=Object(b.b)();var v=function(e){void 0===e&&(e=!0),n||Promise.all([t.e(83).then(t.t.bind(null,356,7)),t.e(56).then(t.t.bind(null,357,7))]).then((function(a){var t=a[0].default;r(!0),window.docsearch=t,function(e){window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,handleSelected:function(e,a,t){var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;d.push(r)}}),e&&i.current.focus()}(e)}))},h=Object(l.useCallback)((function(){v(),n&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),_=Object(l.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),f=Object(l.useCallback)((function(e){var a="mouseover"!==e.type;v(a)}));return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:f,onFocus:f,onBlur:_,ref:i,style:{borderRadius:"4px"}}))}),v=t(239),h=t(229),_=t(246),f=t(236),g=t(237),p=t(134),E=t.n(p);function N(e){var a=e.activeBasePath,t=e.to,l=e.href,i=e.label,s=e.activeClassName,m=void 0===s?"navbar__link--active":s,b=Object(r.a)(e,["activeBasePath","to","href","label","activeClassName"]),d=Object(u.a)(t),v=Object(u.a)(a);return c.a.createElement(o.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:l}:Object.assign({isNavLink:!0,activeClassName:m,to:d},a?{isActive:function(e,a){return a.pathname.startsWith(v)}}:null),b),i)}function k(e){var a=e.items,t=e.position,l=e.className,i=Object(r.a)(e,["items","position","className"]),o=function(e,a){return void 0===a&&(a=!1),s()({"navbar__item navbar__link":!a,dropdown__link:a},e)};return a?c.a.createElement("div",{className:s()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},c.a.createElement(N,Object(n.a)({className:o(l)},i,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),i.label),c.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){var t=e.className,l=Object(r.a)(e,["className"]);return c.a.createElement("li",{key:a},c.a.createElement(N,Object(n.a)({activeClassName:"dropdown__link--active",className:o(t,!0)},l)))})))):c.a.createElement(N,Object(n.a)({className:o(l)},i))}function O(e){var a=e.items,t=e.className,l=Object(r.a)(e,["items","className"]),i=function(e,a){return void 0===a&&(a=!1),s()("menu__link",{"menu__link--sublist":a},e)};return a?c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(N,Object(n.a)({className:i(t,!0)},l),l.label),c.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){var t=e.className,s=Object(r.a)(e,["className"]);return c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(N,Object(n.a)({activeClassName:"menu__link--active",className:i(t)},s,{onClick:l.onClick})))})))):c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(N,Object(n.a)({className:i(t)},l)))}a.a=function(){var e,a,t=Object(m.a)(),r=t.siteConfig.themeConfig,i=r.navbar,u=(i=void 0===i?{}:i).title,b=i.links,p=void 0===b?[]:b,N=i.hideOnScroll,j=void 0!==N&&N,w=r.disableDarkMode,C=void 0!==w&&w,y=t.isClient,x=Object(l.useState)(!1),S=x[0],B=x[1],L=Object(l.useState)(!1),T=L[0],D=L[1],M=Object(h.a)(),I=M.isDarkTheme,K=M.setLightTheme,A=M.setDarkTheme,H=Object(_.a)(j),P=H.navbarRef,R=H.isNavbarVisible,J=Object(g.a)(),V=J.logoLink,W=J.logoLinkProps,F=J.logoImageUrl,U=J.logoAlt;Object(f.a)(S);var q=Object(l.useCallback)((function(){B(!0)}),[B]),z=Object(l.useCallback)((function(){B(!1)}),[B]),G=Object(l.useCallback)((function(e){return e.target.checked?A():K()}),[K,A]);return c.a.createElement("nav",{ref:P,className:s()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":S},e[E.a.navbarHideable]=j,e[E.a.navbarHidden]=!R,e[E.a.orange]=E.a.orange,e))},c.a.createElement("div",{className:"navbar__inner container"},c.a.createElement("div",{className:"navbar__items"},null!=p&&0!==p.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:q,onKeyDown:q},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(o.a,Object(n.a)({className:"navbar__brand",to:V},W),null!=F&&c.a.createElement("img",{key:y,className:"navbar__logo",src:F,alt:U}),null!=u&&c.a.createElement("strong",{className:s()("navbar__title",(a={},a[E.a.hideLogoText]=T,a))},u)),p.filter((function(e){return"left"===e.position})).map((function(e,a){return c.a.createElement(k,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},c.a.createElement(d,{handleSearchBarToggle:D,isSearchBarExpanded:T}),p.filter((function(e){return"right"===e.position})).map((function(e,a){return c.a.createElement(k,Object(n.a)({},e,{key:a}))})),!C&&c.a.createElement(v.a,{className:E.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:I,onChange:G}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:z}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(o.a,Object(n.a)({className:"navbar__brand",onClick:z,to:V},W),null!=F&&c.a.createElement("img",{key:y,className:"navbar__logo",src:F,alt:U}),null!=u&&c.a.createElement("strong",{className:"navbar__title"},u)),!C&&S&&c.a.createElement(v.a,{"aria-label":"Dark mode toggle in sidebar",checked:I,onChange:G})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},p.map((function(e,a){return c.a.createElement(O,Object(n.a)({},e,{onClick:z,key:a}))})))))))}}}]);