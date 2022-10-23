(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var l=n(1),r=n(9),b=(n(0),n(231)),a={id:"enderchests",title:"Ender Chests"},c={id:"modules/blocks/enderchests",title:"Ender Chests",description:"This module allow mapmakers to have better control over vanilla Ender chest behaviors in a map.",source:"@site/docs/modules/blocks/enderchests.mdx",permalink:"/docs/modules/blocks/enderchests",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/blocks/enderchests.mdx",sidebar:"Modules",previous:{title:"Block Drops",permalink:"/docs/modules/blocks/blockdrops"},next:{title:"Falling Blocks",permalink:"/docs/modules/blocks/falling-blocks"}},o=[{value:"Dropoff Attributes",id:"dropoff-attributes",children:[]},{value:"Dropoff Sub-elements",id:"dropoff-sub-elements",children:[]}],i={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This module allow mapmakers to have better control over vanilla Ender chest behaviors in a map."),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"<enderchest>")," tag can contain any number of ",Object(b.b)("inlineCode",{parentName:"p"},"<dropoff>")," tags. Each ",Object(b.b)("inlineCode",{parentName:"p"},"<dropoff>")," can use a region and a filter to\ndetermine where and when items should be dropped from the Ender chest."),Object(b.b)("p",null,"Dropoffs handle taking a player's Ender chest inventory and dropping it on the ground at a defined region or it can completely erase it.\nThis can be triggered with a filter or once the player switches team or leaves the server."),Object(b.b)("div",{className:"alert alert--warning",style:{marginBottom:"30px"}},"Ensure that any maps with Ender chests are loaded on a server using the latest version of PGM available. Pre-existing Ender chests in previous versions of PGM are not supported and will allow players to transfer items across matches. Additionally, players cannot place Ender chests under any circumstances."),Object(b.b)("h4",{id:"enderchest-element"},"Enderchest Element"),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Element"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null,"Value/Children"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<enderchest> </enderchest>")),Object(b.b)("td",null,"Node containing this map's Ender chest properties."),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("th",null,"Sub-elements"),Object(b.b)("th",null),Object(b.b)("th",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<dropoff>")),Object(b.b)("td",null,"An individual Ender chest drop-off rule."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--secondary"},"Enderchest Sub-elements")))))),Object(b.b)("h3",{id:"dropoff-attributes"},"Dropoff Attributes"),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",{style:{minWidth:"130px"}},"Attribute"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null,"Value"),Object(b.b)("th",null,"Default"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"region")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),Object(b.b)("span",{className:"badge badge--danger"},"Required"),"Region in which a player's Ender chest content will be dropped off."),Object(b.b)("td",null,Object(b.b)("a",{href:"/docs/modules/mechanics/regions"},"Region")),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"filter")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),Object(b.b)("span",{className:"badge badge--danger"},"Required"),"Filter which determine when the content should be dropped."),Object(b.b)("td",null,Object(b.b)("a",{href:"/docs/modules/mechanics/filters"},"Filter")),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"fallback")),Object(b.b)("td",null,"Specify a fallback location option for when no drop-off locations are defined.",Object(b.b)("br",null),Object(b.b)("em",null,"Cannot be combined with ",Object(b.b)("label",null,"region"),".")),Object(b.b)("td",null,Object(b.b)("label",null,"AUTO"),", ",Object(b.b)("label",null,"KEEP"),", ",Object(b.b)("label",null,"DELETE")),Object(b.b)("td",null,Object(b.b)("label",null,"AUTO")))))),Object(b.b)("h3",{id:"dropoff-sub-elements"},"Dropoff Sub-elements"),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Element"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null,"Value/Children"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<region>")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"The region the drop-off applies to."),Object(b.b)("td",null,Object(b.b)("a",{href:"/docs/modules/mechanics/regions"},"Bounded Regions"))),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<filter>")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"Filter which blocks are renewed."),Object(b.b)("td",null,Object(b.b)("a",{href:"/docs/modules/mechanics/filters"},"Filters")))))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Examples")),Object(b.b)("h4",{id:"drop-off-locations"},"Drop-off Locations"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Add drop-off locations for when player switches teams or leave the match --\x3e\n<enderchest>\n    <dropoff region="red-spawn" filter="red-only"/>\n    <dropoff region="blue-spawn" filter="blue-only"/>\n</enderchest>\n')),Object(b.b)("h4",{id:"fallback"},"Fallback"),Object(b.b)("p",null,"If you want Ender chest contents to not drop upon a certain event, you can specify what PGM will do with the inventory.\nThis will also be used when a drop-off is not possible.\nBy default, PGM will use ",Object(b.b)("inlineCode",{parentName:"p"},"AUTO")," if neither regions nor a fallback preference are specified."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Specify a fallback option for when no drop-off locations are defined --\x3e\n<enderchest fallback="KEEP"/>\n')))}s.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var l=n(0),r=n.n(l);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(l.forwardRef)((function(e,t){var n=e.components,l=e.mdxType,b=e.originalType,a=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=s(n),p=l,O=d["".concat(a,".").concat(p)]||d[p]||u[p]||b;return n?r.a.createElement(O,c({ref:t},i,{components:n})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=n.length,a=new Array(b);a[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var i=2;i<b;i++)a[i]=n[i];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);