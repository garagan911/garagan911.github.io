"use strict";(self.webpackChunkmerchantstack=self.webpackChunkmerchantstack||[]).push([[97],{47097:function(n,e,i){i.r(e),i.d(e,{default:function(){return B}});var t=i(82937),a=i(42669),r=i(70885),o=i(47313),s=i(30168),l=i(63366),d=i(87462),c=i(83061),u=i(30686),h=i(21921);function m(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function p(n){return parseFloat(n)}var g=i(17551),v=i(64164),f=i(11236),x=i(32298);function b(n){return(0,x.Z)("MuiSkeleton",n)}(0,i(77430).Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var w,Z,j,k,C,y,S,P,R=i(46417),q=["animation","className","component","height","style","variant","width"],F=(0,u.F4)(C||(C=w||(w=(0,s.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),M=(0,u.F4)(y||(y=Z||(Z=(0,s.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),A=(0,v.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,e){var i=n.ownerState;return[e.root,e[i.variant],!1!==i.animation&&e[i.animation],i.hasChildren&&e.withChildren,i.hasChildren&&!i.width&&e.fitContent,i.hasChildren&&!i.height&&e.heightAuto]}})((function(n){var e=n.theme,i=n.ownerState,t=m(e.shape.borderRadius)||"px",a=p(e.shape.borderRadius);return(0,d.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,g.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===i.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(t,"/").concat(Math.round(a/.6*10)/10).concat(t),"&:empty:before":{content:'"\\00a0"'}},"circular"===i.variant&&{borderRadius:"50%"},"rounded"===i.variant&&{borderRadius:(e.vars||e).shape.borderRadius},i.hasChildren&&{"& > *":{visibility:"hidden"}},i.hasChildren&&!i.width&&{maxWidth:"fit-content"},i.hasChildren&&!i.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,u.iv)(S||(S=j||(j=(0,s.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),F)}),(function(n){var e=n.ownerState,i=n.theme;return"wave"===e.animation&&(0,u.iv)(P||(P=k||(k=(0,s.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),M,(i.vars||i).palette.action.hover)})),X=o.forwardRef((function(n,e){var i=(0,f.Z)({props:n,name:"MuiSkeleton"}),t=i.animation,a=void 0===t?"pulse":t,r=i.className,o=i.component,s=void 0===o?"span":o,u=i.height,m=i.style,p=i.variant,g=void 0===p?"text":p,v=i.width,x=(0,l.Z)(i,q),w=(0,d.Z)({},i,{animation:a,component:s,variant:g,hasChildren:Boolean(x.children)}),Z=function(n){var e=n.classes,i=n.variant,t=n.animation,a=n.hasChildren,r=n.width,o=n.height,s={root:["root",i,t,a&&"withChildren",a&&!r&&"fitContent",a&&!o&&"heightAuto"]};return(0,h.Z)(s,b,e)}(w);return(0,R.jsx)(A,(0,d.Z)({as:s,ref:e,className:(0,c.Z)(Z.root,r),ownerState:w},x,{style:(0,d.Z)({width:v,height:u},m)}))})),E=i(62463),N=i(93633),O=function(n){var e=n.children,i=(0,o.useState)(!0),a=(0,r.Z)(i,2),s=a[0],l=a[1];(0,o.useEffect)((function(){l(!1)}),[]);var d=(0,R.jsx)(N.Z,{title:(0,R.jsx)(X,{sx:{width:{xs:120,md:180}}}),secondary:(0,R.jsx)(X,{animation:"wave",variant:"circular",width:24,height:24}),children:(0,R.jsxs)(E.Z,{spacing:1,children:[(0,R.jsx)(X,{}),(0,R.jsx)(X,{sx:{height:64},animation:"wave",variant:"rectangular"}),(0,R.jsx)(X,{}),(0,R.jsx)(X,{})]})});return(0,R.jsxs)(R.Fragment,{children:[s&&(0,R.jsxs)(t.ZP,{container:!0,spacing:3,children:[(0,R.jsx)(t.ZP,{item:!0,xs:12,md:6,children:d}),(0,R.jsx)(t.ZP,{item:!0,xs:12,md:6,children:d}),(0,R.jsx)(t.ZP,{item:!0,xs:12,md:6,children:d}),(0,R.jsx)(t.ZP,{item:!0,xs:12,md:6,children:d})]}),!s&&e]})},B=function(){return(0,R.jsx)(O,{children:(0,R.jsxs)(t.ZP,{container:!0,spacing:3,children:[(0,R.jsx)(t.ZP,{item:!0,xs:12,lg:6,children:(0,R.jsx)(N.Z,{title:"Orders",children:(0,R.jsx)(a.Z,{variant:"body2",children:"Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours."})})}),(0,R.jsx)(t.ZP,{item:!0,xs:12,lg:6,children:(0,R.jsx)(N.Z,{title:"Orders",children:(0,R.jsx)(a.Z,{variant:"body2",children:"Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours."})})})]})})}}}]);