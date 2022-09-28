(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return r})),l.d(t,"rightToc",(function(){return i})),l.d(t,"default",(function(){return s}));var n=l(1),b=l(9),a=(l(0),l(227)),c={id:"scoring",title:"Scoring"},r={id:"modules/objectives/scoring",title:"Scoring",description:"The score module can be used to give matches a score limit and modify how many points are added to the score for each kill or death. It can also be used to create score boxes that give a player or team a certain amount of points when they enter it.",source:"@site/docs/modules/objectives/scoring.mdx",permalink:"/docs/modules/objectives/scoring",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/objectives/scoring.mdx",sidebar:"Modules",previous:{title:"Blitz",permalink:"/docs/modules/objectives/blitz"},next:{title:"Other Gamemodes",permalink:"/docs/modules/objectives/other"}},i=[{value:"Score Boxes",id:"score-boxes",children:[]},{value:"Redeemables",id:"redeemables",children:[]},{value:"Time Limit",id:"time-limit",children:[]},{value:"Overtime",id:"overtime",children:[]}],o={rightToc:i};function s(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The score module can be used to give matches a score limit and modify how many points are added to the score for each kill or death. It can also be used to create score boxes that give a player or team a certain amount of points when they enter it."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Score Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<score> </score>")),Object(a.b)("td",{colspan:"3"},"Node containing the score settings and score boxes.")),Object(a.b)("tr",null,Object(a.b)("th",null,"Sub-elements"),Object(a.b)("th",null),Object(a.b)("th",null),Object(a.b)("th",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<limit>")),Object(a.b)("td",null,"Max score that can be reached before the match ends."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null,"No limit")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<mercy>")),Object(a.b)("td",null,"Points that a team will need to lead by to win. This will increase the score limit until a ","<limit>"," is reached."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"No mercy")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<kills>")),Object(a.b)("td",null,"Points to ",Object(a.b)("strong",null,"give")," to a team for killing an enemy player"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"0")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<deaths>")),Object(a.b)("td",null,"Points to ",Object(a.b)("strong",null,"deduct")," from a team for the"," ",Object(a.b)("strong",null,"accidental")," death of a team member"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"0")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<box>")),Object(a.b)("td",null,"A single score box."),Object(a.b)("td",null,Object(a.b)("a",{href:"#score_box"},"Score Box")),Object(a.b)("td",null))))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Examples")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<score>\n    \x3c!-- First team to reach 100 points wins the match --\x3e\n    <limit>100</limit>\n\n    <kills>3</kills> \x3c!-- +3 points for every kill --\x3e\n    <deaths>2</deaths> \x3c!-- -2 points for accidentally dying --\x3e\n</score>\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<score>\n    \x3c!-- The winner is the first team to get a mercy lead of 5 or reach the limit of 10. Initially a score limit of 5 will be shown --\x3e\n    <mercy>5</mercy>\n    <limit>10</limit>\n</score>\n")),Object(a.b)("h3",{id:"score-boxes"},"Score Boxes"),Object(a.b)("p",null,"A score box will give points to a players team when they enter or bring a redeemable item to the score box region. ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/mechanics/portals"}),"Portals")," should be setup to remove the player from the immediate vicinity of the score box to prevent multiple scores."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Score Box Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<box>")),Object(a.b)("td",null,"A single score box."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"Score Box Sub-elements")))))),Object(a.b)("h5",{id:"score-box-attributes"},"Score Box Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Type"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"points")),Object(a.b)("td",null,"Points awarded for entering the box."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"0")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"silent")),Object(a.b)("td",null,"Don't notify players when points are scored in this box."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"region")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The location and size of the score box."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/regions"},"Region")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"filter")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter who can score in this box."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/filters"},"Filter")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"No Filter"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"trigger")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Dynamic conditions under which this score box is applied."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/filters"},"Dynamic Filter")),Object(a.b)("td",null))))),Object(a.b)("h5",{id:"score-box-sub-elements"},"Score Box Sub-elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<redeemables>")),Object(a.b)("td",null,"Items that can be redeemed at this score box for points."),Object(a.b)("td",null,Object(a.b)("label",null,'<item points="1">'))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<region>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The region where this score box is located."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/regions"},"Regions"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<filter>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"Filter who can score in this box."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/regions"},"Filters")))))),Object(a.b)("p",null,"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<score>\n    \x3c!-- Only allow red team to use this score box, and give them two points --\x3e\n    <box points="2" filter="only-red">\n        <region><cylinder base="21,8,63" radius="1" height="2"/></region>\n    </box>\n</score>\n\n<score>\n    <box points="8" filter="cyan" region="cyan-scorebox"/>\n</score>\n')),Object(a.b)("h3",{id:"redeemables"},"Redeemables"),Object(a.b)("p",null,"A score box can also award points in exchange for particular items carried by the player when they\nenter the box. These items are defined inside a ",Object(a.b)("inlineCode",{parentName:"p"},"<redeemables>")," score box sub-element as ",Object(a.b)("inlineCode",{parentName:"p"},"<item>")," tags.\nEach item contains a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/items/inventory#material_finder"}),"material name"),"\nand an optional ",Object(a.b)("inlineCode",{parentName:"p"},'points="..."')," attribute specifying the number of points awarded for each item."),Object(a.b)("p",null,"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<score>\n    <box filter="only-red" region="red-depot">\n        <redeemables>\n            <item points="5">diamond</item>\n            <item points="3">emerald</item>\n            <item points="1">gold nugget</item>\n        </redeemables>\n    </box>\n</score>\n')),Object(a.b)("h3",{id:"time-limit"},"Time Limit"),Object(a.b)("p",null,'Give the match a time limit, the result attribute determines how the winning team or player is calculated when the time runs out.\nResult can be the name of a team, or one of the special values; "tie" for no winner, or "objectives" for the team that has the most objectives completed. The time limit can be specified in minutes, etc., by formatting it as a ',Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/misc/time-periods"}),"time period"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"NOTE!")," This tag is ",Object(a.b)("strong",{parentName:"p"},"not")," placed inside the score module, instead it is located in the root ",Object(a.b)("inlineCode",{parentName:"p"},"<map>")," element."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<time result="objectives">5m</time>\n')),Object(a.b)("h5",{id:"time-attributes"},"Time Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Type"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"result")),Object(a.b)("td",null,"Change how the winning team or player is calculated.",Object(a.b)("br",null),"Accepts ",Object(a.b)("label",null,"default"),", ",Object(a.b)("label",null,"tie"),","," ",Object(a.b)("label",null,"objectives"),", ",Object(a.b)("label",null,"score")," or a Team ID."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Victory Condition"),"|",Object(a.b)("span",{className:"badge badge--primary"},"Team ID")),Object(a.b)("td",null,"default")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show")),Object(a.b)("td",null,"Show the remaining time in the chat and boss bar."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"overtime")),Object(a.b)("td",null,"Specify the length of the overtime once the tie is broken."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/reference/misc/time-periods"},"Time Period"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"max-overtime")),Object(a.b)("td",null,"Specify a maximum duration that the overtime should last."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/reference/misc/time-periods"},"Time Period")))))),Object(a.b)("h3",{id:"overtime"},"Overtime"),Object(a.b)("p",null,"Overtime can be used in order to force a single winner in a match. By using the optional ",Object(a.b)("inlineCode",{parentName:"p"},'overtime="..."')," attribute in the time element, you can specify a ",Object(a.b)("a",{href:"/docs/reference/misc/time-periods"},"time period"),". If the score is tied once regulation time ends, the match will extend into overtime. The time will begin to tick down as soon as the tie is broken. It will reset back to the specified time if a tie is reached again or a change in the lead occurs before the time expires."),Object(a.b)("p",null,"To limit how long overtime lasts, you can include the ",Object(a.b)("inlineCode",{parentName:"p"},'max-overtime="..."')," attribute as well. It, too, accepts a ",Object(a.b)("a",{href:"/docs/reference/misc/time-periods"},"time period")," as a value. This will count down in the background and force the overtime to count down once surpassing the ",Object(a.b)("inlineCode",{parentName:"p"},'overtime="..."')," attribute's value."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Tip:")," Set the ",Object(a.b)("inlineCode",{parentName:"p"},'overtime="..."')," attribute to ",Object(a.b)("inlineCode",{parentName:"p"},"1s")," for sudden death overtime."),Object(a.b)("p",null,"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Match will last 12 minutes.\n     If score is tied when time reaches zero, a one-minute overtime starts. If the tie is broken\n     and no team makes a comeback within one minute, the leading team will win.\n     The overtime will last a maximum of 15 minutes --\x3e\n<time overtime="1m" max-overtime="15m">12m</time>\n')))}s.isMDXComponent=!0},227:function(e,t,l){"use strict";l.d(t,"a",(function(){return u})),l.d(t,"b",(function(){return O}));var n=l(0),b=l.n(n);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,b=function(e,t){if(null==e)return{};var l,n,b={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(b[l]=e[l]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(b[l]=e[l])}return b}var o=b.a.createContext({}),s=function(e){var t=b.a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):r({},t,{},e)),l},u=function(e){var t=s(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=s(l),m=n,O=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return l?b.a.createElement(O,r({ref:t},o,{components:l})):b.a.createElement(O,r({ref:t},o))}));function O(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,c=new Array(a);c[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var o=2;o<a;o++)c[o]=l[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,l)}m.displayName="MDXCreateElement"}}]);