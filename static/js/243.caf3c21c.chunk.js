"use strict";(self.webpackChunkmerchantstack=self.webpackChunkmerchantstack||[]).push([[243],{88983:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(61142),i=r(46417);function s(e){var n=e.children;e.type;return(0,i.jsx)(t.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:n})}s.defaultProps={type:"scale"}},44503:function(e,n,r){r.d(n,{Z:function(){return f}});var t=r(16157),i=r(82937),s=r(1413),a=r(45987),c=r(93633),o=r(46417),l=["children"],d=function(e){var n=e.children,r=(0,a.Z)(e,l);return(0,o.jsx)(c.Z,(0,s.Z)((0,s.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},r),{},{border:!1,boxShadow:!0,shadow:function(e){return e.customShadows.z1},children:(0,o.jsx)(t.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})}))},u=r(16406),h=r(79359),x=r(10679),m=r(62463),p=r(42669),Z=r(77449),j=function(){var e=(0,h.Z)((function(e){return e.breakpoints.down("sm")}));return(0,o.jsx)(x.Z,{maxWidth:"xl",children:(0,o.jsx)(m.Z,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit",children:(0,o.jsxs)(m.Z,{direction:e?"column":"row",spacing:e?1:3,textAlign:e?"center":"inherit",children:[(0,o.jsx)(p.Z,{variant:"subtitle2",color:"secondary",component:Z.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Privacy Policy"}),(0,o.jsx)(p.Z,{variant:"subtitle2",color:"secondary",component:Z.Z,href:"https://codedthemes.support-hub.io/",target:"_blank",underline:"hover",children:"Support"})]})})})},f=function(e){var n=e.children;return(0,o.jsx)(t.Z,{sx:{minHeight:"100vh"},children:(0,o.jsxs)(i.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,o.jsx)(i.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(i.ZP,{item:!0,xs:12,children:(0,o.jsx)(i.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,o.jsx)(i.ZP,{item:!0,children:(0,o.jsx)(d,{children:n})})})}),(0,o.jsx)(i.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,o.jsx)(j,{})})]})})}},75243:function(e,n,r){r.r(n),r.d(n,{default:function(){return E}});var t=r(2135),i=r(82937),s=r(62463),a=r(42669),c=r(74165),o=r(15861),l=r(70885),d=r(47313),u=r(29266),h=r(35553),x=r(48569),m=r(59017),p=r(18104),Z=r(64558),j=r(89275),f=r(77449),g=r(73477),v=r(34940),w=r(28089),b=r(7410),y=r(58412),k=r(88983),P=r(31741),C=r(44874),S=r(46417),W=function(){var e=d.useState(!1),n=(0,l.Z)(e,2),r=n[0],W=n[1],B=d.useState(!1),E=(0,l.Z)(B,2),I=E[0],F=E[1],q=function(){F(!I)},z=function(e){e.preventDefault()};return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(b.J9,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:w.Ry().shape({email:w.Z_().email("Must be a valid email").max(255).required("Email is required"),password:w.Z_().max(255).required("Password is required")}),onSubmit:function(){var e=(0,o.Z)((0,c.Z)().mark((function e(n,r){var t,i,s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.setErrors,i=r.setStatus,s=r.setSubmitting;try{i({success:!1}),s(!1)}catch(n){i({success:!1}),t({submit:n.message}),s(!1)}case 2:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,c=e.handleBlur,o=e.handleChange,l=e.handleSubmit,d=e.isSubmitting,w=e.touched,b=e.values;return(0,S.jsx)("form",{noValidate:!0,onSubmit:l,children:(0,S.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,S.jsx)(i.ZP,{item:!0,xs:12,children:(0,S.jsxs)(s.Z,{spacing:1,children:[(0,S.jsx)(u.Z,{htmlFor:"email-login",children:"Email Address"}),(0,S.jsx)(h.Z,{id:"email-login",type:"email",value:b.email,name:"email",onBlur:c,onChange:o,placeholder:"Enter email address",fullWidth:!0,error:Boolean(w.email&&n.email)}),w.email&&n.email&&(0,S.jsx)(x.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]})}),(0,S.jsx)(i.ZP,{item:!0,xs:12,children:(0,S.jsxs)(s.Z,{spacing:1,children:[(0,S.jsx)(u.Z,{htmlFor:"password-login",children:"Password"}),(0,S.jsx)(h.Z,{fullWidth:!0,error:Boolean(w.password&&n.password),id:"-password-login",type:I?"text":"password",value:b.password,name:"password",onBlur:c,onChange:o,endAdornment:(0,S.jsx)(m.Z,{position:"end",children:(0,S.jsx)(p.Z,{"aria-label":"toggle password visibility",onClick:q,onMouseDown:z,edge:"end",size:"large",children:I?(0,S.jsx)(P.Z,{}):(0,S.jsx)(C.Z,{})})}),placeholder:"Enter password"}),w.password&&n.password&&(0,S.jsx)(x.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:n.password})]})}),(0,S.jsx)(i.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,S.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,S.jsx)(Z.Z,{control:(0,S.jsx)(j.Z,{checked:r,onChange:function(e){return W(e.target.checked)},name:"checked",color:"primary",size:"small"}),label:(0,S.jsx)(a.Z,{variant:"h6",children:"Keep me sign in"})}),(0,S.jsx)(f.Z,{variant:"h6",component:t.rU,to:"",color:"text.primary",children:"Forgot Password?"})]})}),n.submit&&(0,S.jsx)(i.ZP,{item:!0,xs:12,children:(0,S.jsx)(x.Z,{error:!0,children:n.submit})}),(0,S.jsx)(i.ZP,{item:!0,xs:12,children:(0,S.jsx)(k.Z,{children:(0,S.jsx)(g.Z,{disableElevation:!0,disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})}),(0,S.jsx)(i.ZP,{item:!0,xs:12,children:(0,S.jsx)(v.Z,{children:(0,S.jsx)(a.Z,{variant:"caption",children:" Login with"})})}),(0,S.jsx)(i.ZP,{item:!0,xs:12,children:(0,S.jsx)(y.Z,{})})]})})}})})},B=r(44503),E=function(){return(0,S.jsx)(B.Z,{children:(0,S.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,S.jsx)(i.ZP,{item:!0,xs:12,children:(0,S.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,S.jsx)(a.Z,{variant:"h3",children:"Login"}),(0,S.jsx)(a.Z,{component:t.rU,to:"/register",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Don't have an account?"})]})}),(0,S.jsx)(i.ZP,{item:!0,xs:12,children:(0,S.jsx)(W,{})})]})})}},58412:function(e,n,r){r.d(n,{Z:function(){return x}});var t=r(74165),i=r(15861),s=r(62111),a=r(79359),c=r(62463),o=r(73477);r(47313);var l=r.p+"static/media/google.b7da2ce748745374ee27eb11dd475b9c.svg";var d=r.p+"static/media/twitter.5b9c9738bc8e86846c91f27886cebacf.svg";var u=r.p+"static/media/facebook.5b823a6232805871728da1033d817609.svg",h=r(46417),x=function(){var e=(0,s.Z)(),n=(0,a.Z)(e.breakpoints.down("sm")),r=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)(c.Z,{direction:"row",spacing:n?1:2,justifyContent:n?"space-around":"space-between",sx:{"& .MuiButton-startIcon":{mr:n?0:1,ml:n?0:-.5}},children:[(0,h.jsx)(o.Z,{variant:"outlined",color:"secondary",fullWidth:!n,startIcon:(0,h.jsx)("img",{src:l,alt:"Google"}),onClick:r,children:!n&&"Google"}),(0,h.jsx)(o.Z,{variant:"outlined",color:"secondary",fullWidth:!n,startIcon:(0,h.jsx)("img",{src:d,alt:"Twitter"}),onClick:x,children:!n&&"Twitter"}),(0,h.jsx)(o.Z,{variant:"outlined",color:"secondary",fullWidth:!n,startIcon:(0,h.jsx)("img",{src:u,alt:"Facebook"}),onClick:m,children:!n&&"Facebook"})]})}}}]);