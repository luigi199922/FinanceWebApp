(this["webpackJsonpfinance-api"]=this["webpackJsonpfinance-api"]||[]).push([[2],{10:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return f}));var a=n(31),r=n(0),o=n.n(r),c=n(39),i=function(e,t){return Object(a.a)({},e,{},t)},l=function(e,t){var n={headers:{"Content-Type":"application/json"},data:Object(a.a)({},t)};return e&&(n.headers.Authorization="Bearer ".concat(e)),n},u=function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n)},s=function(e,t){return d(e).map((function(e){return o.a.createElement(c.a,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,invalid:!e.config.valid,shouldValidate:e.config.validation,value:e.config.value,touched:e.config.touched,label:e.config.label,changed:function(n){return t(n,e.id)}})}))},d=function(e){var t=[];for(var n in e)t.push({id:n,config:e[n]});return t},m={contractName:"Contract Name",contractSize:"Contract Size",currency:"false",type:"Type",inTheMoney:"In the Money",lastTradeDateTime:"Last Traded Date Time",expirationDate:"Expiration Date",strike:"Strike",lastPrice:"Last Price",bid:"Bid",ask:"ask",change:"Change",changePercent:"% Change",volume:"Volume",openInterest:"Open Interest",impliedVolatility:"Implied Volatility",porfolio:"Porfolio Analysis",delta:!1,gamma:!1,theta:!1,vega:!1,rho:!1,theoretical:!1,intrinsicValue:!1,timeValue:!1,updatedAt:!1,daysBeforeExpiration:!1},f={contractName:!0,lastTradeDateTime:!0,strike:!0,lastPrice:!0,bid:!0,ask:!0,change:!0,changePercent:!0,volume:!0,openInterest:!0,impliedVolatility:!0}},19:function(e,t,n){"use strict";var a=n(40),r=n.n(a).a.create({baseURL:"http://127.0.0.1:8000/users/"});t.a=r},22:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},27:function(e,t,n){e.exports={Footer:"Footer_Footer__238hM",Icons:"Footer_Icons__3PTSJ",IconContainer:"Footer_IconContainer__2erq5"}},28:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},29:function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},3:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"k",(function(){return p})),n.d(t,"j",(function(){return b})),n.d(t,"p",(function(){return g})),n.d(t,"o",(function(){return E})),n.d(t,"n",(function(){return v}));var a="AUTH_START",r="AUTH_SUCCESS",o="AUTH_FAILED",c="AUTH_LOGOUT",i="AUTH_LOGIN",l="AUTH_CHECK_STATE",u="AUTH_USER_LOGOUT",s="AUTH_USER_SIGNUP",d="AUTH_CHECK_TIMEOUT",m="AUTH_GET_USER_CREDENTIALS",f="AUTH_SET_REDIRECT_PATH",p="AUTH_UPDATE_USER",b="AUTH_UPDATE_SUCCESS",g="SET_USER_INFORMATION",E="GLOBAL_SET_MESSAGE",v="GLOBAL_REMOVE_MESSAGE"},34:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},36:function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq",Info:"Button_Info__sfM4H"}},37:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(36),c=n.n(o);t.a=function(e){var t=e.disabled,n=e.clicked,a=e.style,o=e.btnType,i=e.children;return r.a.createElement("button",{disabled:t,className:[c.a.Button,c.a[o]].join(" "),onClick:n,style:a},i)}},39:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(29),c=n.n(o);t.a=function(e){var t=e.invalid,n=e.shouldValidate,a=e.touched,o=e.elementConfig,i=e.value,l=e.changed,u=e.elementType,s=e.label,d=null,m=[c.a.InputElement];switch(t&&n&&a&&m.push(c.a.Invalid),u){case"input":d=r.a.createElement("input",Object.assign({className:m.join(" ")},o,{value:i,onChange:l}));break;case"textarea":d=r.a.createElement("textarea",Object.assign({},o,{value:i,onChange:l}));break;case"select":d=r.a.createElement("select",Object.assign({className:m.join(" ")},o,{value:i,onChange:l}),o.options.map((function(e,t){return r.a.createElement("option",{key:e.value+t,value:e.value},e.displayValue)})));break;default:d=r.a.createElement("input",Object.assign({className:m.join(" ")},o,{value:i}))}return r.a.createElement("div",{className:m.join(" ")},r.a.createElement("label",{className:c.a.Label},s),d)}},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="&token=boqata7rh5rfjhndqf1g",r="boqata7rh5rfjhndqf1g"},54:function(e,t){e.exports="data:image/png;base64,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"},55:function(e,t,n){e.exports={MainContainer:"MainContainer_MainContainer__3Tplm"}},57:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},58:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},60:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},64:function(e,t,n){e.exports=n(93)},69:function(e,t,n){},7:function(e,t,n){"use strict";var a=n(3),r=function(){return{type:a.h}},o=function(e,t,n){return{type:a.i,token:e,userData:t,message:n}},c=function(e){return{type:a.b,expirationTime:e}},i=function(e){return{type:a.c,error:e}},l=function(e){return{type:a.f,data:e}},u=function(e){return{type:a.l,token:e}},s=function(e){return{type:a.m,userData:e}},d=function(e,t){return{type:a.e,email:e,password:t}},m=function(e){return{type:a.g,path:e}},f=function(e){return{type:a.d,token:e}},p=function(){return{type:a.a}},b=function(e){return{type:a.j,message:e}},g=function(){return{type:a.n}};n.d(t,"g",(function(){return d})),n.d(t,"k",(function(){return m})),n.d(t,"h",(function(){return u})),n.d(t,"l",(function(){return s})),n.d(t,"a",(function(){return p})),n.d(t,"i",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"f",(function(){return f})),n.d(t,"m",(function(){return b})),n.d(t,"j",(function(){return g}))},75:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),i=(n(69),n(20)),l=n(23),u=n(27),s=n.n(u),d=n(54),m=n.n(d),f=function(){return r.a.createElement("footer",{className:s.a.Footer},r.a.createElement("div",{className:"container-fluid text-center text-md-left"},r.a.createElement("div",{className:"row"},r.a.createElement("hr",{className:"clearfix w-100 d-md-none pb-3"}),r.a.createElement("div",{className:s.a.IconContainer},r.a.createElement("ul",{className:s.a.Icons},r.a.createElement("li",{className:"link d-inline-block"},r.a.createElement("a",{href:"https://github.com/luisalfonsopreciado/FinanceWebApp",rel:"noopener noreferrer",className:"LinkU",target:"_blank"},r.a.createElement("img",{src:m.a,width:40,alt:"github",style:{pointer:"hover"}}))))))))},p=n(55),b=n.n(p),g=function(e){return r.a.createElement("div",{className:b.a.MainContainer},e.children)},E=n(16),v=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,287))})),A=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(14)]).then(n.bind(null,302))})),h=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(15),n.e(9)]).then(n.bind(null,301))})),x=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(13),n.e(12)]).then(n.bind(null,304))})),k=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,294))})),O=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,295))})),j=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,296))})),w=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,303))})),D=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(16)]).then(n.bind(null,297))})),S=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))}},y=function(){return r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/FinanceWebApp",render:S(A)}),r.a.createElement(E.b,{path:"/options/",render:S(h)}),r.a.createElement(E.b,{exact:!0,path:"/stock",render:S(x)}),r.a.createElement(E.b,{exact:!0,path:"/stock-analysis",render:S(v)}),r.a.createElement(E.b,{exact:!0,path:"/forex",render:S(x)}),r.a.createElement(E.b,{exact:!0,path:"/crypto",render:S(x)}),r.a.createElement(E.b,{exact:!0,path:"/login",render:S(k)}),r.a.createElement(E.b,{exact:!0,path:"/signup",render:S(O)}),r.a.createElement(E.b,{exact:!0,path:"/logout",render:S(j)}),r.a.createElement(E.b,{exact:!0,path:"/profile",render:S(w)}),r.a.createElement(E.b,{exact:!0,path:"/demo",render:S(D)}))},I=n(28),U=n.n(I),T=n(57),C=n.n(T),N=n(34),L=n.n(N),Q=function(e){var t=e.link,n=e.children;return r.a.createElement("li",{className:L.a.NavigationItem},r.a.createElement(i.b,{to:t,exact:!0,activeClassName:L.a.active},n))},F=function(e){var t=e.isAuth;return r.a.createElement("ul",{className:C.a.NavigationItems},r.a.createElement(Q,{link:"/FinanceWebApp"},"FINALYTICS"),r.a.createElement(Q,{link:"/options"},"Options"),r.a.createElement(Q,{link:"/stock"},"Stocks"),r.a.createElement(Q,{link:"/forex"},"Forex"),r.a.createElement(Q,{link:"/crypto"},"Crypto"),t?r.a.createElement(a.Fragment,null,r.a.createElement(Q,{link:"/profile"},"Profile"),r.a.createElement(Q,{link:"/logout"},"Logout")):r.a.createElement(Q,{link:"/login"},"Login"))},P=n(41),V=function(){var e=new WebSocket("wss://ws.finnhub.io?token="+P.b),t=Object(a.useState)({}),n=Object(l.a)(t,2),o=n[0],c=n[1];e.addEventListener("open",(function(t){e.send(JSON.stringify({type:"subscribe",symbol:"AAPL"}))}));e.addEventListener("message",(function(e){return function(e){var t=JSON.parse(e.data);void 0!==t.data&&c(t.data[0])}(e)}));var i=null;return void 0!==o.p&&(i=r.a.createElement(Q,{link:"/"+o.s},o.s+" "+o.p.toFixed(2))),r.a.createElement("ul",null,i)},q=n(58),M=n.n(q),B=function(e){return r.a.createElement("div",{onClick:e.clicked,className:M.a.DrawerToggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},G=n(18),z=Object(G.b)((function(e){return{isAuth:null!==e.auth.token,email:e.auth.userData.email}}))((function(e){return r.a.createElement("header",{className:U.a.Toolbar},r.a.createElement(B,{clicked:e.drawerToggleClicked}),r.a.createElement("nav",{className:U.a.DesktopOnly},r.a.createElement(F,{userId:e.email,isAuth:e.isAuth})),r.a.createElement("div",{className:U.a.DesktopOnly},r.a.createElement(V,null)))})),W=n(22),K=n.n(W),Z=n(60),R=n.n(Z),X=function(e){return e.show?r.a.createElement("div",{className:R.a.Backdrop,onClick:e.clicked}):null},H=function(e){var t=[K.a.SideDrawer,K.a.Close];return e.open&&(t=[K.a.SideDrawer,K.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" "),onClick:e.closed},r.a.createElement("nav",null,r.a.createElement(F,null))))},Y=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{drawerToggleClicked:function(){o((function(e){return{showSideDrawer:!e.showSideDrawer}}))}}),r.a.createElement(H,{open:n,closed:function(){o(!1)}}),r.a.createElement(g,null,r.a.createElement(y,null)),r.a.createElement(f,null))},_=n(7),J=n(37),$=(n(75),function(e){var t=["Modal",e.show?"ModalOpen":"ModalClosed"];return r.a.createElement("div",{className:t.join(" ")},r.a.createElement("h1",null,e.message),r.a.createElement(J.a,{btnType:"Danger",clicked:e.closed},"Dismiss"))}),ee=Object(G.b)((function(e){return{isAuthenticated:null!==e.auth.token,message:e.global.modalMessage}}),(function(e){return{onTryAutoSignup:function(){return e(_.a())},onRemoveModal:function(){return e(_.j())}}}))((function(e){var t=e.onTryAutoSignup,n=e.message,o=e.onRemoveModal;console.log("[App]"),Object(a.useEffect)((function(){t()}),[t]);var c=n.length>0;return r.a.createElement(i.a,null,c>0&&r.a.createElement($,{closed:o,show:c,message:n}),r.a.createElement(Y,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=n(15),ne=n(3),ae=n(10),re={token:null,error:null,loading:!1,authRedirectPath:"/profile",userData:{}},oe=function(e,t){return Object(ae.f)(e,{error:null,loading:!0})},ce=function(e,t){return Object(ae.f)(e,{token:t.token,userData:t.userData,error:null,loading:!1})},ie=function(e,t){return Object(ae.f)(e,{error:t.error,loading:!1})},le=function(e,t){return Object(ae.f)(e,{token:null,userId:null,userData:{}})},ue=function(e,t){return Object(ae.f)(e,{authRedirectPath:t.path})},se=function(e,t){return Object(ae.f)(e,{userData:t.userData})},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne.h:return oe(e);case ne.i:return ce(e,t);case ne.c:return ie(e,t);case ne.f:return le(e);case ne.g:return ue(e,t);case ne.p:return se(e,t);default:return e}},me={modalMessage:""},fe=function(e,t){return Object(ae.f)(e,{modalMessage:t.message})},pe=function(e,t){return Object(ae.f)(e,{modalMessage:""})},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne.o:return fe(e,t);case ne.n:return pe(e);default:return e}},ge=n(61),Ee=n(62),ve=n(8),Ae=n.n(ve),he=n(6),xe=n(19),ke=Ae.a.mark(Ie),Oe=Ae.a.mark(Ue),je=Ae.a.mark(Te),we=Ae.a.mark(Ce),De=Ae.a.mark(Ne),Se=Ae.a.mark(Le),ye=Ae.a.mark(Qe);function Ie(e){return Ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(he.a)(1e3*e.expirationTime);case 2:return t.next=4,Object(he.b)(_.i());case 4:case"end":return t.stop()}}),ke)}function Ue(e){var t;return Ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),e.token){n.next=6;break}return n.next=6,Object(he.b)(_.b({}));case 6:return t=Object(ae.c)(e.token),"logout",n.prev=8,n.next=11,xe.a.post("logout",{},t);case 11:return n.next=13,Object(he.b)(_.i());case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(8),console.log("Unable to Log Out");case 18:case"end":return n.stop()}}),Oe,null,[[8,15]])}function Te(){var e,t;return Ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=localStorage.getItem("token")){n.next=5;break}Object(he.b)(_.h()),n.next=16;break;case 5:return n.next=7,new Date(localStorage.getItem("expirationDate"));case 7:if(!((t=n.sent)<=new Date)){n.next=12;break}Object(he.b)(_.h()),n.next=16;break;case 12:return n.next=14,Object(he.b)(_.f(e));case 14:return n.next=16,Object(he.b)(_.e((t.getTime()-(new Date).getTime())/1e3));case 16:case"end":return n.stop()}}),je)}function Ce(e){var t,n,a;return Ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(he.b)(_.c());case 2:return t={email:e.email,password:e.password},"login",r.prev=4,r.next=7,xe.a.post("login",t);case 7:return n=r.sent,a=new Date((new Date).getTime()+36e5),localStorage.setItem("token",n.data.token),localStorage.setItem("expirationDate",a),localStorage.setItem("userId",n.data.user._id),r.next=14,Object(he.b)(_.f(n.data.token));case 14:return r.next=16,Object(he.b)(_.e(3600));case 16:r.next=22;break;case 18:return r.prev=18,r.t0=r.catch(4),r.next=22,Object(he.b)(_.b(r.t0.response.data));case 22:case"end":return r.stop()}}),we,null,[[4,18]])}function Ne(e){var t,n;return Ae.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(he.b)(_.c());case 2:return"create",a.prev=3,a.next=6,xe.a.post("create",e.userData);case 6:return t=a.sent,n=new Date((new Date).getTime()+36e5),localStorage.setItem("token",t.data.token),localStorage.setItem("expirationDate",n),localStorage.setItem("userId",t.data.user._id),a.next=13,Object(he.b)(_.f(t.data.token));case 13:return a.next=15,Object(he.b)(_.e(3600));case 15:a.next=21;break;case 17:return a.prev=17,a.t0=a.catch(3),a.next=21,Object(he.b)(_.b(a.t0.response.data));case 21:case"end":return a.stop()}}),De,null,[[3,17]])}function Le(e){var t,n,a;return Ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.token){r.next=3;break}return r.next=3,Object(he.b)(_.b({}));case 3:return t=Object(ae.c)(e.token),r.prev=4,r.next=7,xe.a.get("me",t);case 7:return n=r.sent,a={id:n.data._id,email:n.data.email,createdAt:n.data.createdAt,name:n.data.name,username:n.data.username},r.next=11,Object(he.b)(_.d(e.token,a));case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(4),r.next=17,Object(he.b)(_.b(r.t0));case 17:case"end":return r.stop()}}),Se,null,[[4,13]])}function Qe(e){var t,n,a;return Ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=Object(ae.c)(e.token),r.next=4,xe.a.patch("me",e.userData,t);case 4:return n=r.sent,console.log(n),a={pk:n.data_id,name:n.data.name,username:n.data.username,email:n.data.email,first_name:n.data.first_name,last_name:n.data.last_name},r.next=9,Object(he.b)(_.m("User Updated"));case 9:return r.next=11,Object(he.b)(_.d(e.token,a));case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),console.log(r.t0);case 16:case"end":return r.stop()}}),ye,null,[[0,13]])}var Fe=Ae.a.mark(Pe);function Pe(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.c)(ne.b,Ie);case 2:return e.next=4,Object(he.c)(ne.l,Ue);case 4:return e.next=6,Object(he.c)(ne.e,Ce);case 6:return e.next=8,Object(he.c)(ne.a,Te);case 8:return e.next=10,Object(he.c)(ne.m,Ne);case 10:return e.next=12,Object(he.c)(ne.d,Le);case 12:return e.next=14,Object(he.c)(ne.k,Qe);case 14:case"end":return e.stop()}}),Fe)}var Ve=te.d,qe=Object(te.c)({auth:de,global:be}),Me=Object(Ee.a)(),Be=Object(te.e)(qe,Ve(Object(te.a)(ge.a,Me)));Me.run(Pe);var Ge=r.a.createElement(G.a,{store:Be},r.a.createElement(ee,null));c.a.render(Ge,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[64,3,5]]]);
//# sourceMappingURL=main.6dd16abd.chunk.js.map