(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{210:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return a})),l.d(t,"metadata",(function(){return c})),l.d(t,"rightToc",(function(){return i})),l.d(t,"default",(function(){return s}));var n=l(1),b=l(9),r=(l(0),l(227)),a={id:"renewables",title:"Renewables"},c={id:"modules/blocks/renewables",title:"Renewables",description:"This module can create regions in which destroyed or altered blocks will gradually be restored to their original state.",source:"@site/docs/modules/blocks/renewables.mdx",permalink:"/docs/modules/blocks/renewables",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/blocks/renewables.mdx",sidebar:"Modules",previous:{title:"Falling Blocks",permalink:"/docs/modules/blocks/falling-blocks"}},i=[{value:"Renewable Attributes",id:"renewable-attributes",children:[]},{value:"Renewable Sub-elements",id:"renewable-sub-elements",children:[]}],o={rightToc:i};function s(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This module can create regions in which destroyed or altered blocks will gradually be restored to their original state."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<renewables>")," tag can contain any number of ",Object(r.b)("inlineCode",{parentName:"p"},"<renewable>")," tags. Each ",Object(r.b)("inlineCode",{parentName:"p"},"<renewable>")," can use a region and a filter to\nspecify blocks to renew. If neither are specified, the renewable affects all blocks in the world."),Object(r.b)("h4",{id:"renewables-element"},"Renewables Element"),Object(r.b)("div",{className:"table-container"},Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Element"),Object(r.b)("th",null,"Description"),Object(r.b)("th",null,"Value/Children"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<renewables> </renewables>")),Object(r.b)("td",null,"Node containing this map's renewable block rules."),Object(r.b)("td",null)),Object(r.b)("tr",null,Object(r.b)("th",null,"Sub-elements"),Object(r.b)("th",null),Object(r.b)("th",null)),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<renewable>")),Object(r.b)("td",null,"An individual renewable block rule."),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--secondary"},"Renewable Sub-elements")))))),Object(r.b)("h3",{id:"renewable-attributes"},"Renewable Attributes"),Object(r.b)("div",{className:"table-container"},Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",{style:{minWidth:"130px"}},"Attribute"),Object(r.b)("th",null,"Description"),Object(r.b)("th",null,"Value"),Object(r.b)("th",null,"Default"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null," region")),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Region in which blocks will be renewed."),Object(r.b)("td",null,Object(r.b)("a",{href:"/docs/modules/mechanics/regions"},"Region")),Object(r.b)("td",null,"Everywhere")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null," renew-filter")),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter which blocks are renewed."),Object(r.b)("td",null,Object(r.b)("a",{href:"/docs/modules/mechanics/filters"},"Filter")),Object(r.b)("td",null,"Everything")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null," replace-filter")),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter which blocks can be replaced by renewing blocks."),Object(r.b)("td",null,Object(r.b)("a",{href:"/docs/modules/mechanics/filters"},"Filter")),Object(r.b)("td",null,"Everything")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null," shuffle-filter")),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter which renewable blocks are shuffled."),Object(r.b)("td",null,Object(r.b)("a",{href:"/docs/modules/mechanics/filters"},"Filter")),Object(r.b)("td",null,"Nothing")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null," rate")),Object(r.b)("td",null,"Approximate number of blocks that will be restored per second. This rate applies to the renewable as a whole, which means the time required for any single block to renew will depend on how many other blocks are waiting to be renewed by the same renewable.",Object(r.b)("br",null),Object(r.b)("i",null,"This parameter cannot be combined with")," ",Object(r.b)("label",null," interval")),Object(r.b)("td",null,"Blocks/second"),Object(r.b)("td",null,"1")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null," interval")),Object(r.b)("td",null,"Average time required for a block to renew. Unlike `rate`, this applies to each block individually, and blocks do not affect each other's renewal time. A renewable with an `interval` can behave very differently from a renewable with a `rate`, particularly if it is large.",Object(r.b)("br",null),Object(r.b)("i",null,"This parameter cannot be combined with"),Object(r.b)("label",null," rate")),Object(r.b)("td",null,Object(r.b)("a",{href:"/docs/reference/misc/time-periods"},"Time Period")),Object(r.b)("td",null)),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null," grow")),Object(r.b)("td",null,"Only allow blocks to be restored adjacent to other blocks that are already renewed, or not renewable. If set to false, blocks will be restored at completely random locations, even in mid-air."),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--primary"},"true/false")),Object(r.b)("td",null,"true")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null," particles")),Object(r.b)("td",null,"Show block restore particle effects."),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--primary"},"true/false")),Object(r.b)("td",null,"true")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null," sound")),Object(r.b)("td",null,"Play block restore sound effects."),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--primary"},"true/false")),Object(r.b)("td",null,"true")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null," avoid-players")),Object(r.b)("td",null,"Prevent blocks from being restored within this distance of any player."),Object(r.b)("td",null,"meters"),Object(r.b)("td",null,"2"))))),Object(r.b)("h3",{id:"renewable-sub-elements"},"Renewable Sub-elements"),Object(r.b)("div",{className:"table-container"},Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Element"),Object(r.b)("th",null,"Description"),Object(r.b)("th",null,"Value/Children"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<region>")),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"The region the renewable applies to."),Object(r.b)("td",null,Object(r.b)("a",{href:"/docs/modules/mechanics/regions"},"Bounded Regions"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<renew-filter>")),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"Filter which blocks are renewed."),Object(r.b)("td",null,Object(r.b)("a",{href:"/docs/modules/mechanics/filters"},"Filters"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<replace-filter>")),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"Filter which blocks are replaced."),Object(r.b)("td",null,Object(r.b)("a",{href:"/docs/modules/mechanics/filters"},"Filters"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<shuffle-filter>")),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"Filter which blocks are shuffled."),Object(r.b)("td",null,Object(r.b)("a",{href:"/docs/modules/mechanics/filters"},"Filters")))))),Object(r.b)("p",null,"By default, all blocks in the region are renewable. The ",Object(r.b)("inlineCode",{parentName:"p"},"<renew-filter>")," sub-element can be used inside the ",Object(r.b)("inlineCode",{parentName:"p"},"<renewable>")," to specify only particular blocks to renew."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<replace-filter>")," element specifies which block types are allowed to be replaced by renewing blocks. Any other type of block in the renewable region will obstruct the renewal process. By default, any block can be replaced."),Object(r.b)("p",null,"Normally, blocks will be restored to their exact state when the map was loaded. If some block types are specified in\n",Object(r.b)("inlineCode",{parentName:"p"},"<shuffle-filter>")," element, blocks of those types in the original region will be restored to a block type chosen at random from\nthe shuffleable types. The approximate proportions of block types from the original region will be preserved."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<renewables>\n    <renewable rate="2.5" grow="true" particles="true" sound="true" avoid-players="4">\n        <region>\n            <cylinder base="0,117,0" radius="6" height="13"/>\n        </region>\n        \x3c!-- These are the blocks that will renew --\x3e\n        <renew-filter>\n            <any>\n                <material>iron ore</material>\n                <material>glowstone</material>\n                <material>stone</material>\n            </any>\n        </renew-filter>\n        \x3c!-- These blocks can be replaced by renewing blocks --\x3e\n        <replace-filter>\n            <any>\n                <material>air</material>\n                <material>lava</material>\n                <material>stationary lava</material>\n            </any>\n        </replace-filter>\n        \x3c!-- These blocks will switch with each other when they renew --\x3e\n        <shuffle-filter>\n            <any>\n                <material>stone</material>\n                <material>iron ore</material>\n            </any>\n        </shuffle-filter>\n    </renewable>\n</renewables>\n')))}s.isMDXComponent=!0},227:function(e,t,l){"use strict";l.d(t,"a",(function(){return u})),l.d(t,"b",(function(){return j}));var n=l(0),b=l.n(n);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,b=function(e,t){if(null==e)return{};var l,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(b[l]=e[l]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(b[l]=e[l])}return b}var o=b.a.createContext({}),s=function(e){var t=b.a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):c({},t,{},e)),l},u=function(e){var t=s(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=s(l),O=n,j=u["".concat(a,".").concat(O)]||u[O]||d[O]||r;return l?b.a.createElement(j,c({ref:t},o,{components:l})):b.a.createElement(j,c({ref:t},o))}));function j(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,a=new Array(r);a[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var o=2;o<r;o++)a[o]=l[o];return b.a.createElement.apply(null,a)}return b.a.createElement.apply(null,l)}O.displayName="MDXCreateElement"}}]);