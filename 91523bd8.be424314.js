(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{186:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return r})),l.d(t,"rightToc",(function(){return i})),l.d(t,"default",(function(){return s}));var b=l(1),a=l(9),n=(l(0),l(227)),c={id:"kits",title:"Kits"},r={id:"modules/gear/kits",title:"Kits",description:"Kits are groups of items and effects that can be given to players in various ways.",source:"@site/docs/modules/gear/kits.mdx",permalink:"/docs/modules/gear/kits",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/gear/kits.mdx",sidebar:"Modules",previous:{title:"Potion Effects",permalink:"/docs/modules/gear/potions"},next:{title:"Classes",permalink:"/docs/modules/gear/classes"}},i=[{value:"Kit Attributes",id:"kit-attributes",children:[]},{value:"Item &amp; Armor Kits",id:"item--armor-kits",children:[]},{value:"Game-mode Kit",id:"game-mode-kit",children:[]},{value:"Health &amp; Hunger Kits",id:"health--hunger-kits",children:[]},{value:"Team Switch Kit",id:"team-switch-kit",children:[]},{value:"Dynamic Kits",id:"dynamic-kits",children:[]},{value:"Potion Effect Kits (removable)",id:"potion-effect-kits-removable",children:[]},{value:"Attribute Modifier Kits (removable)",id:"attribute-modifier-kits-removable",children:[]},{value:"Walk Speed Kit (removable)",id:"walk-speed-kit-removable",children:[]},{value:"Knockback Reduction Kit (removable)",id:"knockback-reduction-kit-removable",children:[]},{value:"Shield Kit (removable)",id:"shield-kit-removable",children:[]},{value:"Double Jump Kit (removable)",id:"double-jump-kit-removable",children:[]},{value:"Fly Kit (removable)",id:"fly-kit-removable",children:[]}],u={rightToc:i};function s(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Kits are groups of items and effects that can be given to players in various ways.\nhere are many types of kits, and they can be packaged together in any combination."),Object(n.b)("p",null,"Kits can be given an ",Object(n.b)("inlineCode",{parentName:"p"},"id")," attribute, which is used to refer to them in other places.\nKits can contain other kits directly, and can also inherit items from other kits through the ",Object(n.b)("inlineCode",{parentName:"p"},'parents=""')," attribute."),Object(n.b)("p",null,"Some types of kits are ",Object(n.b)("em",{parentName:"p"},"removable"),", meaning that the kit can be automatically\ntaken from the player as well as given. When used in certain contexts,\nthese kits will be automatically removed from the player at an appropriate time.\nThese can be used in ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"#dynamic-kits"}),"Dynamic Kits"),".\nRemovable kits will be noted in the documentation where applicable."),Object(n.b)("h4",{id:"kit-element"},"Kit Element"),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Element"),Object(n.b)("th",null,"Description"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<kit> </kit>")),Object(n.b)("td",null,"A kit node, containing specific kit types and/or other kit nodes."))))),Object(n.b)("h3",{id:"kit-attributes"},"Kit Attributes"),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Attribute"),Object(n.b)("th",null,"Description"),Object(n.b)("th",null,"Value"),Object(n.b)("th",null,"Default"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"id")),Object(n.b)("td",null,"Unique identifier used to reference this kit from other places in the XML."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"String")),Object(n.b)("td",null)),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"filter")),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter when this kit is used."),Object(n.b)("td",null,Object(n.b)("a",{href:"/docs/modules/mechanics/filters"},"Filter")),Object(n.b)("td",null)),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"parents")),Object(n.b)("td",null,"The kit's parent or a comma separated list of parent kits."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"String")),Object(n.b)("td",null)),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"force")),Object(n.b)("td",null,"Force apply the kit."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null)),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"repair-tools")),Object(n.b)("td",null,"Repairs tools in the player's inventory with those given in the kit."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null,"true")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"deduct-tools")),Object(n.b)("td",null,"Deducts the toolrepair given in the kit by the toolrepair in the player's inventory."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null,"true")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"deduct-items")),Object(n.b)("td",null,"Deducts the number of items given in the kit by the number of items the player already has."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null,"true")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"potion-particles")),Object(n.b)("td",null,"Enable or disable potion particles.",Object(n.b)("br",null),Object(n.b)("i",null,"Potion particles are disabled for all players by default.")),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null,"false")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"reset-ender-pearls")),Object(n.b)("td",null,"Reset any ender pearls the player might have thrown before the kit was applied."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null,"false"))))),Object(n.b)("p",null,"The effect of the ",Object(n.b)("inlineCode",{parentName:"p"},"force")," attribute depends on the type of kit it is used with:\nconflicting items or armor will be replaced instead of smartly merged & repaired,\nhealth & hunger will be set instead of only increased,\nand potion effects can be replaced with the same effect at a lower level or shorter duration."),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<kits>\n    <kit id="spawn" force="true">\n        <item slot="0" material="iron sword"/>\n        <item slot="8" amount="32" material="bread"/>\n        <effect duration="5" amplifier="1">instant_health</effect>\n    </kit>\n    <kit id="red" parents="spawn">\n        <helmet color="cd0000" material="leather helmet"/>\n    </kit>\n    <kit id="blue" parents="spawn">\n        <helmet color="0066cc" material="leather helmet"/>\n    </kit>\n</kits>\n')),Object(n.b)("p",null,"In the example above players from blue team will get a blue helmet,\nplayers from red team will get a red helmet; both teams will get the items from the spawn kit.\nThe spawn kit contains a 5 second healing potion to help prevent spawn killing."),Object(n.b)("h3",{id:"item--armor-kits"},"Item & Armor Kits"),Object(n.b)("p",null,"Kits can place items in specific slots of a player's inventory, and equip them with armor. See ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/modules/gear/items"}),"Items & Armor")," for details."),Object(n.b)("p",null,"Item kits will replace any items in the player's inventory in slots present in the kit, but they will not alter any other slots.\nIf you want to guarantee that a slot is empty, put an item called \"air\" in that slot. You can also clear the player's entire inventory\nbefore applying the kit by using the ",Object(n.b)("inlineCode",{parentName:"p"},"<clear/>")," element."),Object(n.b)("h5",{id:"inventory-clear-elements"},"Inventory Clear Elements"),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Element"),Object(n.b)("th",null,"Description"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<clear/>")),Object(n.b)("td",null,"Clears all of the player's inventory including armor slots."))))),Object(n.b)("h5",{id:"inventory-clear-attributes"},"Inventory Clear Attributes"),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Attribute"),Object(n.b)("th",null,"Description"),Object(n.b)("th",null,"Value"),Object(n.b)("th",null,"Default"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"items")),Object(n.b)("td",null,"Clears all of the player's inventory except armor slots."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null,"true")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"armor")),Object(n.b)("td",null,"Clear's all of the player's armor slots."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null,"true")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"effects")),Object(n.b)("td",null,"Clears all of the player's current potion effects."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null,"false"))))),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<kit id="ender" reset-ender-pearls="true">\n    <item slot="0" amount="1" material="ender pearl"/>\n    \x3c!-- clears items and armor slots by default --\x3e\n    <clear/>\n</kit>\n')),Object(n.b)("h3",{id:"game-mode-kit"},"Game-mode Kit"),Object(n.b)("p",null,"A player's gamemode can be changed when they spawn or enter a region, etc. by using this kit."),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Element"),Object(n.b)("th",null,"Description"),Object(n.b)("th",null,"Value"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<game-mode> </game-mode>")),Object(n.b)("td",null,"The gamemode to change the player to.",Object(n.b)("br",null)),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--secondary"},"Game Mode String")))))),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),"<game-mode>adventure</game-mode>\n")),Object(n.b)("h3",{id:"health--hunger-kits"},"Health & Hunger Kits"),Object(n.b)("p",null,"A player's health and hunger can be modified with kits, this can be useful on maps with the ",Object(n.b)("inlineCode",{parentName:"p"},"naturalRegeneration")," ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/modules/mechanics/gamerules"}),"gamerule")," set to false."),Object(n.b)("p",null,"By default health or hunger values are only increased, not decreased.\nFor example, a player with 5 hearts (10 points) will not get a 5 health point kit applied,\nhowever a 20 point kit will be applied. This can be overwritten with a kits ",Object(n.b)("inlineCode",{parentName:"p"},'force="true"')," attribute."),Object(n.b)("h5",{id:"health--hunger-elements"},"Health & Hunger Elements"),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Element"),Object(n.b)("th",null,"Description"),Object(n.b)("th",null,"Value"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<health> </health>")),Object(n.b)("td",null,"Health value in 1/2 heart increments."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"1 - 20"))),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<max-health> </max-health>")),Object(n.b)("td",null,"The maximum health a player can have."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"> 1"))),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<saturation> </saturation>")),Object(n.b)("td",null,"Food saturation, always equal to or less than the player's food level."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"Decimal"))),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<foodlevel> </foodlevel>")),Object(n.b)("td",null,"Food level in 1/2 drumstick increments."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"0 - 20")))))),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<kit id="health" force="true">\n    <health>10</health>\n</kit>\n\n<kit id="max-health-kit" force="true">\n     \x3c!-- Double health, default is 20 --\x3e\n     <max-health>40</max-health>\n</kit>\n\n<kit id="hunger">\n    <saturation>20</saturation>\n    <foodlevel>20</foodlevel>\n</kit>\n')),Object(n.b)("h3",{id:"team-switch-kit"},"Team Switch Kit"),Object(n.b)("p",null,"Allow for players who receive this kit to be forced onto a different team."),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Element"),Object(n.b)("th",null,"Description"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<team-switch/>")),Object(n.b)("td",null,"Switch the player's current team"))))),Object(n.b)("h5",{id:"team-switch-kit-attributes"},"Team Switch Kit Attributes"),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Attribute"),Object(n.b)("th",null,"Description"),Object(n.b)("th",null,"Value"),Object(n.b)("th",null,"Default"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"team")),Object(n.b)("td",null,"The team to switch the player to."),Object(n.b)("td",null,Object(n.b)("a",{href:"/docs/modules/format/teams"},"Team ID"))),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"show-title")),Object(n.b)("td",null,"Set if the player should recieve join message as a title."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null,"true"))))),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<kit id="team-switch">\n    <team-switch team="blue" show-title="false"/>\n</kit>\n')),Object(n.b)("h3",{id:"dynamic-kits"},"Dynamic Kits"),Object(n.b)("p",null,"Kits that are removable can be given and taken dynamically by using a Dynamic Filter."),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Element"),Object(n.b)("th",null,"Description"),Object(n.b)("th",null,"Value"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<give>")),Object(n.b)("td",null,"Gives a kit to a player when they match the filter."),Object(n.b)("td",null,Object(n.b)("a",{href:"/docs/modules/mechanics/filters#dynamic-filters"},"Dynamic Filter"))),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<take>")),Object(n.b)("td",null,"Removes a kit when they match the filter."),Object(n.b)("td",null,Object(n.b)("a",{href:"/docs/modules/mechanics/filters#dynamic-filters"},"Dynamic Filter"))),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<lend>")),Object(n.b)("td",null,"Loans a player a kit when the filter is ",Object(n.b)("label",null,"ALLOW"),", removes when they stop matching the filter."),Object(n.b)("td",null,Object(n.b)("a",{href:"/docs/modules/mechanics/filters#dynamic-filters"},"Dynamic Filter")))))),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<kits>\n    \x3c!-- Kit and Filter References --\x3e\n    <lend kit="jumper-kit" filter="carrying-gold" />\n    <give kit="regen-kit" filter="holding-redstone" />\n    \x3c!-- Player can no longer fly after carrying the flag --\x3e\n    <take>\n        <kit>\n            <fly/>\n        </kit>\n        <filter>\n            <flag-carried>flag</flag-carried>\n        </filter>\n    </take>\n</kits>\n')),Object(n.b)("h3",{id:"potion-effect-kits-removable"},"Potion Effect Kits (removable)"),Object(n.b)("p",null,"Potion effects can be applied and removed with a kit. See ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/modules/gear/potions"}),"Potion Effects")," for details about the ",Object(n.b)("inlineCode",{parentName:"p"},"<effect>")," element."),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<kit>\n    <effect duration="10" amplifier="4">resistance</effect>\n</kit>\n')),Object(n.b)("h3",{id:"attribute-modifier-kits-removable"},"Attribute Modifier Kits (removable)"),Object(n.b)("p",null,"Attribute modifiers can be applied directly to players through a kit. Modifying attributes in this way,\ninstead of through an item, is a simple way to ensure that the player cannot avoid the effect of\nthe modifier."),Object(n.b)("p",null,"The only way to remove an attribute modifier is by removing the kit that applied it. A kit cannot\naffect a modifier applied by a different kit."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Attribute Operations")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"add")," Add amount"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"base")," Multiply amount by base value and add it"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"multiply")," Multiply by amount")),Object(n.b)("h5",{id:"attribute-kit-elements"},"Attribute Kit Elements"),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Element"),Object(n.b)("th",null,"Description"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<attribute> </attribute>")),Object(n.b)("td",null,Object(n.b)("a",{href:"/docs/reference/items/attributes"},"Attribute name")))))),Object(n.b)("h5",{id:"attribute-kit-attributes"},"Attribute Kit Attributes"),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Attribute"),Object(n.b)("th",null,"Description"),Object(n.b)("th",null,"Value"),Object(n.b)("th",null,"Default"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"amount")),Object(n.b)("td",null,"Numeric parameter"),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"Decimal")),Object(n.b)("td",null)),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"operation")),Object(n.b)("td",null,"Modifier operation"),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"add / base / multiply")),Object(n.b)("td",null,Object(n.b)("label",null,"add")))))),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<kit>\n    <attribute operation="add" amount="0.5">generic.movementSpeed</attribute>\n</kit>\n')),Object(n.b)("h3",{id:"walk-speed-kit-removable"},"Walk Speed Kit (removable)"),Object(n.b)("p",null,"Increase or decrease a player's walking speed. The value is a multiplier of the normal walking speed."),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Element"),Object(n.b)("th",null,"Description"),Object(n.b)("th",null,"Value"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<walk-speed> </walk-speed>")),Object(n.b)("td",null,"Increase or decrease a player's walking speed."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"0 - 5.0")))))),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<kit id="rabbit">\n    \x3c!-- 1.8 times faster than a normal player --\x3e\n    <walk-speed>1.8</walk-speed>\n</kit>\n\n<kit id="tortoise">\n    \x3c!-- half as fast as a normal player --\x3e\n    <walk-speed>0.5</walk-speed>\n</kit>\n')),Object(n.b)("h3",{id:"knockback-reduction-kit-removable"},"Knockback Reduction Kit (removable)"),Object(n.b)("p",null,"Reduce (or increase) the knockback players receive when they have this kit applied.\nThe normal input range is ",Object(n.b)("inlineCode",{parentName:"p"},"0 - 1.0"),". If the value is greater than one the knockback will be increased,\nand anything lower than zero pushes the player to the attacker instead of away from them."),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Element"),Object(n.b)("th",null,"Description"),Object(n.b)("th",null,"Value"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<knockback-reduction> </knockback-reduction>")),Object(n.b)("td",null,"Knockback reduction amount"),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"Number")))))),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),"<kit>\n    <knockback-reduction>0.5</knockback-reduction>\n</kit>\n")),Object(n.b)("h3",{id:"shield-kit-removable"},"Shield Kit (removable)"),Object(n.b)("p",null,"The shield kit gives the player a shield consisting of absorption hearts that recharge after a set period of time.\nRecharging of the shield is based on when damage was taken last, every time a player is damaged it resets the recharge timer."),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Element"),Object(n.b)("th",null,"Description"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,'<shield health="4" delay="4s"/>')),Object(n.b)("td",null,"Give the player a recharging shield of absorption hearts."))))),Object(n.b)("h5",{id:"shield-kit-attributes"},"Shield Kit Attributes"),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Attribute"),Object(n.b)("th",null,"Description"),Object(n.b)("th",null,"Value"),Object(n.b)("th",null,"Default"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"health")),Object(n.b)("td",null,"Amount of extra absorption hearts to give to the player."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"Decimal")),Object(n.b)("td",null,"4")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"delay")),Object(n.b)("td",null,"Time to wait after a player is last damaged to recharge the shield."),Object(n.b)("td",null,Object(n.b)("a",{href:"/docs/reference/misc/time-periods"},"Time Period")),Object(n.b)("td",null,"4s"))))),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<kit>\n    <shield health="4" delay="8s"/>\n</kit>\n')),Object(n.b)("h3",{id:"double-jump-kit-removable"},"Double Jump Kit (removable)"),Object(n.b)("p",null,"Give players with this kit the ability to double-jump.\nThis element's enabled attribute can be used to disable double-jump inside regions, etc."),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Element"),Object(n.b)("th",null,"Description"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<double-jump/>")),Object(n.b)("td",null,"Give player the double-jump ability."))))),Object(n.b)("h5",{id:"double-jump-attributes"},"Double-Jump Attributes"),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",{className:"table table-striped table-condensed"},Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Attribute"),Object(n.b)("th",null,"Description"),Object(n.b)("th",null,"Value"),Object(n.b)("th",null,"Default"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"enabled")),Object(n.b)("td",null,"Enable or disable double-jump."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null,"true")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"power")),Object(n.b)("td",null,"Power of the double jump (a normal player jump is about 1)"),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"Number")),Object(n.b)("td",null,"3")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"recharge-time")),Object(n.b)("td",null,"Recharge time till the player can double jump again."),Object(n.b)("td",null,Object(n.b)("a",{href:"/docs/reference/misc/time-periods"},"Time Period")),Object(n.b)("td",null,"2.5s")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"recharge-before-landing")),Object(n.b)("td",null,"Player starts recharging before they land from their previous jump."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null,"false"))))),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<kit>\n    <double-jump recharge-before-landing="true"/>\n</kit>\n')),Object(n.b)("h3",{id:"fly-kit-removable"},"Fly Kit (removable)"),Object(n.b)("p",null,"The fly kit gives players which it is applied to the ability to fly.\nIt also allows modification of the speed at which they fly.\nIf no attributes are specified can-fly defaults to true."),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Element"),Object(n.b)("th",null,"Description"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"<fly/>")),Object(n.b)("td",null,"Control the player's flying ability"))))),Object(n.b)("h5",{id:"fly-kit-attributes"},"Fly Kit Attributes"),Object(n.b)("div",{className:"table-container"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"Attribute"),Object(n.b)("th",null,"Description"),Object(n.b)("th",null,"Value"),Object(n.b)("th",null,"Default"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"can-fly")),Object(n.b)("td",null,"Set if the player can fly."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null,"true")),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"flying")),Object(n.b)("td",null,"Set if the player is currently flying.",Object(n.b)("br",null),Object(n.b)("i",null,"To enable flying",Object(n.b)("label",null,"can-fly"),"can not be set to false.")),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"true/false")),Object(n.b)("td",null)),Object(n.b)("tr",null,Object(n.b)("td",null,Object(n.b)("label",null,"fly-speed")),Object(n.b)("td",null,"Set the fly speed multiplier."),Object(n.b)("td",null,Object(n.b)("span",{className:"badge badge--primary"},"0 - 10")),Object(n.b)("td",null,"1"))))),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<kit id="fly">\n    <fly/>                  \x3c!-- Allow player to fly --\x3e\n    <fly can-fly="false"/>  \x3c!-- Don\'t allow player to fly --\x3e\n    <fly flying="true"/>    \x3c!-- Make the player fly right away --\x3e\n    <fly flying="false"/>   \x3c!-- Make the player stop flying right away --\x3e\n</kit>\n')))}s.isMDXComponent=!0},227:function(e,t,l){"use strict";l.d(t,"a",(function(){return d})),l.d(t,"b",(function(){return O}));var b=l(0),a=l.n(b);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,b)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,b,a=function(e,t){if(null==e)return{};var l,b,a={},n=Object.keys(e);for(b=0;b<n.length;b++)l=n[b],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)l=n[b],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):r({},t,{},e)),l},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=Object(b.forwardRef)((function(e,t){var l=e.components,b=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(l),j=b,O=d["".concat(c,".").concat(j)]||d[j]||o[j]||n;return l?a.a.createElement(O,r({ref:t},u,{components:l})):a.a.createElement(O,r({ref:t},u))}));function O(e,t){var l=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var n=l.length,c=new Array(n);c[0]=j;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:b,c[1]=r;for(var u=2;u<n;u++)c[u]=l[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,l)}j.displayName="MDXCreateElement"}}]);