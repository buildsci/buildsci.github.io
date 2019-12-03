(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){e.exports=a.p+"static/media/Flyer_Orange.1fcda512.svg"},145:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),o=a.n(r),l=(a(72),a(13)),s=(a(73),a(173)),c=a(168),d=a(170),m=a(62),g=a(147),h=a(176),p=a(30),u=a(171),f=a(169),b=a(174),w=a(41),v=a.n(w),x=a(42),E=a.n(x),y=a(55),I=a.n(y),M=a(56),C=a(57),j=a.n(C),k=Object(M.autoPlay)(I.a,{interval:8e3}),B=Object(s.a)(function(e){return{root:{flexGrow:1},header:{display:"flex",alignItems:"center",marginTop:e.spacing(2),marginBottom:e.spacing(0),marginLeft:e.spacing(2),marginRight:e.spacing(2)},img:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},buildingAvatar:{objectFit:"fill",objectPosition:"center",maxHeight:160,maxWidth:"100%",boxSizing:"content-box"},thinCardHeader:{paddingBottom:0}}});function S(e){var t=B(),a=Object(g.a)(),n=e.events,r=e.title,o=i.a.useState(0),l=Object(m.a)(o,2),s=l[0],w=l[1],x=n.length;return i.a.createElement("div",{className:t.root},i.a.createElement(c.a,null,i.a.createElement(p.a,{variant:"h4",gutterBottom:!0,className:t.header},r),i.a.createElement(f.a,{className:t.thinCardHeader,title:n[s].title,subheader:n[s].date&&i.a.createElement(p.a,{variant:"caption",style:{color:"grey"}},j()(n[s].date,"MMMM DD, YYYY"))}),i.a.createElement(k,{axis:"rtl"===a.direction?"x-reverse":"x",index:s,onChangeIndex:function(e){w(e)},interval:8e3,enableMouseEvents:!0},e.events.map(function(e,a){return i.a.createElement("div",{key:e.label},Math.abs(s-a)<=2?i.a.createElement(d.a,null,i.a.createElement(u.a,{container:!0,direction:"row",spacing:2},e.imagePath&&i.a.createElement(u.a,{item:!0,xs:4},i.a.createElement("img",{className:t.buildingAvatar,src:""+e.imagePath,alt:e.title})),i.a.createElement(u.a,{item:!0,xs:8},i.a.createElement(p.a,{variant:"body1"},e.text)))):null)})),i.a.createElement(h.a,{steps:x,position:"static",activeStep:s,className:t.mobileStepper,nextButton:i.a.createElement(b.a,{size:"small",onClick:function(){w(function(e){return e+1})},disabled:s===x-1},"Next","rtl"===a.direction?i.a.createElement(v.a,null):i.a.createElement(E.a,null)),backButton:i.a.createElement(b.a,{size:"small",onClick:function(){w(function(e){return e-1})},disabled:0===s},"rtl"===a.direction?i.a.createElement(E.a,null):i.a.createElement(v.a,null),"Back")})))}S.defaultProps={events:[]};var N=S,T=a(21),O=[{title:"BuildSci Analyst",text:"The BuildSci Analyst is a platform for facility mangers to \u201ctrain\u201d buildings to be better versions of themselves.\n\t\t\t This approach allows for the strategic investment of resources, financial and human, into targeted and sustained improvements of a building portfolio. \n\t\t\t Importantly, the platform also provides the intangible benefit of engaging stakeholders around common goals.",date:new Date,imagePath:"images/building_puzzle.png"},{title:"MII Award",text:"BuildSci team members were awarded a Phase I Maryland Innovation Initiative Fund award.\n\t\t\tThe focus of this award was on technoogy validation and market assessment.\n\t\t\tThe project demonstrated value of BuildSci Analyst in real world scenarios across the building portfolios of three partner institutions.",date:new Date(2018,5,29),imagePath:"images/events/mii_logo.png"},{title:"Data Management Award",text:"BuildSci Analyst was honored with an Innovation Award for Higher Ed Energy Data Management.\n\t\tThe award was presented to at the Smart Energy Decisions Innovation Summit in Houston, Texas.\n\t\tThe Innovation Awards program recognizes individual and collective efforts of large electric power users, \n\t\ttheir suppliers, and their utilities in support of the energy transformation currently taking place.",actions:[],date:new Date(2019,2,13),imagePath:"images/events/sed_awards_2019.png"}].map(function(e,t){return Object(T.a)({},e,{id:t})}),W=a(43);a(129);W.a.initialize("UA-138046178-1");var A=Object(s.a)(function(e){var t;return t={root:{flexGrow:1},content:{margin:e.spacing(2),marginTop:0},top:{height:80,backgroundColor:e.palette.primary[400]},bar:Object(l.a)({backgroundColor:"rgba(255,255,255,0.8)"},e.breakpoints.up("md"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),header:{margin:"auto",width:"100%",height:"100%",maxWidth:780},footer:{margin:"auto",width:"100%",height:"100%",maxWidth:780},pageContainer:{margin:"auto",width:"100%",height:"100%",maxWidth:780,marginBottom:e.spacing(1)},pageImage:{width:"100%",height:"100%"},bodyImage:{width:"100%",height:"100%",borderRadius:e.shape.borderRadius},homeContent:{width:"100%"},homeCard:{width:"100%",minHeight:200,maxWidth:780,padding:e.spacing(1),"&:last-child":{paddingBottom:e.spacing(1)}}},Object(l.a)(t,"header",{width:"100%",display:"flex",justifyContent:"center"}),Object(l.a)(t,"thinCardHeader",{paddingBottom:0}),Object(l.a)(t,"headerImage",{height:50}),t});var D=function(){var e=A();return Object(n.useEffect)(function(){W.a.pageview(window.location.pathname+window.location.search)},[window.location.pathname]),i.a.createElement("div",{className:e.root},i.a.createElement("main",{className:e.content},i.a.createElement("div",{className:e.pageContainer},i.a.createElement("img",{src:"/images/header.jpg",className:e.pageImage})),i.a.createElement("div",{className:e.pageContainer},i.a.createElement(N,{events:O,title:"BuildSci Events"})),i.a.createElement("div",{className:e.pageContainer},i.a.createElement(c.a,null,i.a.createElement(d.a,{className:e.homeCard},i.a.createElement("img",{src:"/images/body.jpg",className:e.bodyImage})))),i.a.createElement("div",{className:e.pageContainer},i.a.createElement("img",{src:"/images/footer.jpg",className:e.pageImage}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(172),P=a(175),R=a(59),H=a.n(R),L=a(60),_=a.n(L),F=a(61),Y=a.n(F),G=H()({typography:{fontFamily:"'Lato', sans-serif",useNextVariants:!0,h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},palette:{primary:_.a,secondary:Y.a,background:{}},shape:{borderRadius:8}}),J=G=Object(T.a)({},G,{overrides:{MuiDrawer:{paper:{backgroundColor:G.palette.primary[200]}},MuiButton:{label:{textTransform:"initial"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{width:"100%",boxShadow:"0px 3px 15px rgba(34, 35, 58, 0.5)"},indicator:{height:"100%",backgroundColor:"rgba(255, 255, 255, .2)"}},MuiTab:{root:{textTransform:"initial",margin:"0 16px",minWidth:0,"@media (min-width:960px)":{minWidth:0}},label:{fontWeight:"normal",letterSpacing:.5,color:"#ffffff"},labelContainer:{paddingLeft:10,paddingRight:10}},MuiIconButton:{root:{padding:G.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:G.palette.primary[400]}},MuiListItemText:{primary:{fontWeight:G.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}},props:{MuiTab:{disableRipple:!0}},mixins:Object(T.a)({},G.mixins,{toolbar:{minHeight:62}})});o.a.render(i.a.createElement(z.a,{theme:J},i.a.createElement(P.a,null),i.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports=a(145)},72:function(e,t,a){},73:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.df32ac8c.chunk.js.map