(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(15),r=a.n(o),l=(a(71),a(25)),s=(a(72),a(174)),c=a(30),d=a(172),m=a(63),g=a(145),u=a(176),h=a(171),p=a(168),f=a(169),b=a(170),v=a(175),w=a(41),x=a.n(w),E=a(42),y=a.n(E),k=a(55),I=a.n(k),M=a(56),C=a(57),S=a.n(C),B=Object(M.autoPlay)(I.a,{interval:12e3}),T=Object(s.a)(function(e){return{root:{flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:4*e.spacing.unit,backgroundColor:e.palette.background.default},img:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},buildingAvatar:{objectFit:"fill",objectPosition:"center",maxHeight:160,maxWidth:"100%",boxSizing:"content-box"},thinCardHeader:{paddingBottom:0}}});function j(e){var t=T(),a=Object(g.a)(),n=e.events,o=i.a.useState(0),r=Object(m.a)(o,2),l=r[0],s=r[1],d=n.length;return i.a.createElement("div",{className:t.root},i.a.createElement(p.a,null,i.a.createElement(f.a,{className:t.thinCardHeader,title:n[l].title,subheader:n[l].date&&i.a.createElement(c.a,{variant:"caption",style:{color:"grey"}},S()(n[l].date,"MMMM DD, YYYY"))}),i.a.createElement(B,{axis:"rtl"===a.direction?"x-reverse":"x",index:l,onChangeIndex:function(e){s(e)},interval:8e3,enableMouseEvents:!0},e.events.map(function(e,a){return i.a.createElement("div",{key:e.label},Math.abs(l-a)<=2?i.a.createElement(b.a,null,i.a.createElement(h.a,{container:!0,direction:"row",spacing:16},e.imagePath&&i.a.createElement(h.a,{item:!0,xs:4},i.a.createElement("img",{className:t.buildingAvatar,src:""+e.imagePath,alt:e.title})),i.a.createElement(h.a,{item:!0,xs:8},i.a.createElement(c.a,{variant:"body1"},e.text)))):null)})),i.a.createElement(u.a,{steps:d,position:"static",activeStep:l,className:t.mobileStepper,nextButton:i.a.createElement(v.a,{size:"small",onClick:function(){s(function(e){return e+1})},disabled:l===d-1},"Next","rtl"===a.direction?i.a.createElement(x.a,null):i.a.createElement(y.a,null)),backButton:i.a.createElement(v.a,{size:"small",onClick:function(){s(function(e){return e-1})},disabled:0===l},"rtl"===a.direction?i.a.createElement(y.a,null):i.a.createElement(x.a,null),"Back")})))}j.defaultProps={events:[]};var A=j,W=a(20),N=[{title:"BuildSci Analyst",text:"The BuildSci Analyst is a platform for facility mangers to \u201ctrain\u201d buildings to be better versions of themselves.\n\t\t\t This approach allows for the strategic investment of resources, financial and human, into targeted and sustained improvements of a building portfolio. \n\t\t\t Importantly, the platform also provides the intangible benefit of engaging stakeholders around common goals.",date:new Date,imagePath:"images/building_puzzle.png"},{title:"MII Award",text:"BuildSci team members were awarded a Phase I Maryland Innovation Initiative Fund award.\n\t\t\tThe focus of this award was on technoogy validation and market assessment.\n\t\t\tThe project demonstrated value of BuildSci Analyst in real world scenarios across the building portfolios of three partner institutions.",date:new Date(2018,5,29),imagePath:"images/events/mii_logo.png"},{title:"Data Management Award",text:"BuildSci Analyst was honored with an Innovation Award for Higher Ed Energy Data Management.\n\t\tThe award was presented to at the Smart Energy Decisions Innovation Summit in Houston, Texas.\n\t\tThe Innovation Awards program recognizes individual and collective efforts of large electric power users, \n\t\ttheir suppliers, and their utilities in support of the energy transformation currently taking place.",actions:[],date:new Date(2019,2,13),imagePath:"images/events/sed_awards_2019.png"}].map(function(e,t){return Object(W.a)({},e,{id:t})}),D=a(43),O=a(59),z=a.n(O);D.a.initialize("UA-138046178-1");var P=Object(s.a)(function(e){return{root:{flexGrow:1},content:{margin:2*e.spacing.unit,marginTop:0},top:{height:80,backgroundColor:e.palette.primary[400]},bar:Object(l.a)({backgroundColor:"rgba(255,255,255,0.8)"},e.breakpoints.up("md"),{paddingLeft:30*e.spacing.unit,paddingRight:30*e.spacing.unit}),pageImageContainer:{margin:"auto",width:"100%",height:"100%",maxWidth:780},pageImage:{width:"100%",height:"100%"},homeContent:{width:"100%"},homeCard:{width:"100%",minHeight:200,maxWidth:780},header:{width:"100%",display:"flex",justifyContent:"center"},thinCardHeader:{paddingBottom:0},headerImage:{height:50}}});var H=function(){var e=P();return Object(n.useEffect)(function(){D.a.pageview(window.location.pathname+window.location.search)},[window.location.pathname]),i.a.createElement("div",{className:e.root},i.a.createElement("main",{className:e.content},i.a.createElement("div",{className:e.pageImageContainer},i.a.createElement("img",{src:z.a,className:e.pageImage})),i.a.createElement("div",{className:e.pageImageContainer},i.a.createElement(d.a,{variant:"middle",style:{marginTop:8,marginBottom:8}}),i.a.createElement(c.a,{variant:"h4",gutterBottom:!0},"BuildSci Events"),i.a.createElement(A,{events:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(173),R=a(177),F=a(60),Y=a.n(F),_=a(61),G=a.n(_),J=a(62),U=a.n(J),V=Y()({typography:{fontFamily:"'Lato', sans-serif",useNextVariants:!0,h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},palette:{primary:G.a,secondary:U.a,background:{}},shape:{borderRadius:8}}),$=V=Object(W.a)({},V,{overrides:{MuiDrawer:{paper:{backgroundColor:V.palette.primary[200]}},MuiButton:{label:{textTransform:"initial"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{width:"100%",boxShadow:"0px 3px 15px rgba(34, 35, 58, 0.5)"},indicator:{height:"100%",backgroundColor:"rgba(255, 255, 255, .2)"}},MuiTab:{root:{textTransform:"initial",margin:"0 16px",minWidth:0,"@media (min-width:960px)":{minWidth:0}},label:{fontWeight:"normal",letterSpacing:.5,color:"#ffffff"},labelContainer:{paddingLeft:10,paddingRight:10}},MuiIconButton:{root:{padding:V.spacing.unit}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:V.palette.primary[400]}},MuiListItemText:{primary:{fontWeight:V.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}},props:{MuiTab:{disableRipple:!0}},mixins:Object(W.a)({},V.mixins,{toolbar:{minHeight:62}})});r.a.render(i.a.createElement(L.a,{theme:$},i.a.createElement(R.a,null),i.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,a){e.exports=a.p+"static/media/Flyer.11a1c6be.svg"},65:function(e,t,a){e.exports=a(143)},71:function(e,t,a){},72:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.1555c3ca.chunk.js.map