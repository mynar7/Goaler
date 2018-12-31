(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){e.exports=a(358)},155:function(e,t,a){},173:function(e,t,a){},233:function(e,t,a){},259:function(e,t,a){},335:function(e,t,a){},337:function(e,t,a){},339:function(e,t,a){},347:function(e,t,a){},349:function(e,t,a){},352:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),i=a.n(o),l=(a(155),a(78)),c=a.n(l),s=a(122),u=a(17),m=a(19),p=a(22),h=a(20),d=a(21),g=a(56),f=r.a.createContext(null),E=function(e){return function(t){return r.a.createElement(f.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},b=f,O=a(42),v=a.n(O),y=(a(166),a(168),{apiKey:"AIzaSyD-JApoTn3FGcYz4dBjO48jQ5nMOQHiRZc",authDomain:"goaler-8f0dc.firebaseapp.com",databaseURL:"https://goaler-8f0dc.firebaseio.com",projectId:"goaler-8f0dc",storageBucket:"goaler-8f0dc.appspot.com",messagingSenderId:"564932997783"}),j=function e(){var t=this;Object(u.a)(this,e),this.signIn=function(){var e=new O.auth.GoogleAuthProvider;return t.auth.signInWithRedirect(e).catch(function(e){return console.log(e)})},this.logout=function(){return t.auth.signOut()},this.redirect=function(){return t.auth.getRedirectResult()},this.initializeUser=function(e){t.goalsRef=t.db.collection("users/".concat(e,"/goals"))},v.a.initializeApp(y),this.auth=v.a.auth(),this.db=v.a.firestore();this.db.settings({timestampsInSnapshots:!0}),this.goalsRef=null},w=a(363),k=a(362),C=a(361),M=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.user&&this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("h2",null,"Login works!")}}]),t}(n.Component),T=(a(173),a(123)),S=a.n(T),D=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.status?r.a.createElement("div",{className:"loading"},r.a.createElement(S.a,{color:"secondary",size:200})):this.props.children)}}]),t}(n.Component),x=a(360),N=a(125),H=a.n(N),I=a(126),P=a.n(I),R=a(40),A=a.n(R),F=a(29),U=a.n(F),V=a(127),W=a.n(V),z=(a(233),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement(H.a,{position:"static"},r.a.createElement(P.a,{className:"row"},r.a.createElement(x.a,{to:"/"},r.a.createElement(U.a,{color:"inherit","aria-label":"Menu"},r.a.createElement(W.a,null),r.a.createElement(A.a,{variant:"h6",color:"inherit"},"Goaler"))),r.a.createElement("div",null,this.props.user?r.a.createElement(U.a,{color:"inherit",onClick:this.props.logout},"Sign Out"):r.a.createElement(U.a,{color:"inherit",onClick:this.props.login},"Sign In")))))}}]),t}(n.Component)),B=a(128),G=a(143),L=a.n(G),Y=a(144),J=a.n(Y),Q=a(52),q=a.n(Q),K=a(79),$=a(82),X=a(54),Z=a(43),_=a.n(Z),ee=a(131),te=a.n(ee),ae=a(129),ne=a.n(ae),re=a(135),oe=a.n(re),ie=a(134),le=a.n(ie),ce=a(130),se=a.n(ce),ue=a(41),me=a.n(ue),pe=a(133),he=a.n(pe),de=a(132),ge=a.n(de),fe=a(57),Ee=a.n(fe),be=a(26),Oe=(a(259),function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(X.a)({},e,t.target.value))}},a.validate=function(){var e=!1,t="",n=!1,r="",o=!1,i="";a.state.name||(e=!0,t="Please set a goal"),a.state.date||(n=!0,r="Please set a date"),a.state.time||(o=!0,i="Please set a time");var l=new Date,c="".concat(a.state.date," ").concat(a.state.time).split(/[- :]/).map(function(e){return Number(e)});c[1]--;var s=Object(K.a)(Date,Object($.a)(c));return s.getTime()<l.getTime()&&(s.toDateString()!==l.toDateString()?(n=!0,r="Date must be in future"):(o=!0,i="Time must be in future")),a.setState({nameErr:e,nameHelper:t,dateErr:n,dateHelper:r,timeErr:o,timeHelper:i}),!!(o||n||e)},a.handleSubmit=function(){if(!a.validate()){var e="".concat(a.state.date," ").concat(a.state.time).split(/[- :]/).map(function(e){return Number(e)});e[1]--;var t=Object(K.a)(Date,Object($.a)(e));a.props.initialState?a.props.firebase.goalsRef.doc(a.props.initialState.id).update({goal:a.state.name,date:t.getTime(),completed:!1}).then(function(){a.props.toggleModal()}):a.props.firebase.goalsRef.add({goal:a.state.name,date:t.getTime(),completed:!1}).then(function(){a.props.toggleModal()})}},a.now=new Date;var n,r=new Date(a.now.getTime()+6e4),o=function(e){return e<10?"0"+e:e};if(a.today="".concat(a.now.getFullYear(),"-").concat(o(a.now.getMonth()+1),"-").concat(o(a.now.getDate())),a.maxDate="".concat(a.now.getFullYear()+10,"-").concat(o(a.now.getMonth()+1),"-").concat(o(a.now.getDate())),a.currentTime="".concat(o(r.getHours()),":").concat(o(r.getMinutes())),a.props.initialState){var i=a.props.initialState.date,l=a.today,c=a.currentTime;if(i>a.now.getTime()){var s=new Date(i);l="".concat(s.getFullYear(),"-").concat(o(s.getMonth()+1),"-").concat(o(s.getDate())),c="".concat(o(s.getHours()),":").concat(o(s.getMinutes()))}n={name:a.props.initialState.goal,nameErr:!1,nameHelper:"",date:l,dateErr:!1,dateHelper:"",time:c,timeErr:!1,timeHelper:""}}else n={name:"",nameErr:!1,nameHelper:"",date:a.today,dateErr:!1,dateHelper:"",time:a.currentTime,timeErr:!1,timeHelper:""};return a.state=n,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.name===this.state.name&&t.date===this.state.date&&t.time===this.state.time||this.validate()}},{key:"render",value:function(){return r.a.createElement(ne.a,{className:"goalform"},r.a.createElement(se.a,{avatar:r.a.createElement(te.a,{style:{backgroundColor:this.props.theme.palette.secondary.main,color:this.props.theme.palette.text.primary}},r.a.createElement(ge.a,null)),title:"Add a goal",action:r.a.createElement(me.a,{onClick:this.props.toggleModal,tabIndex:-1},r.a.createElement(he.a,null))}),r.a.createElement(le.a,null,r.a.createElement(_.a,{container:!0,spacing:0},r.a.createElement(_.a,{item:!0,xs:12},r.a.createElement(Ee.a,{label:"Goal",placeholder:"Make it a good one!",error:this.state.nameErr,value:this.state.name,onChange:this.handleChange("name"),fullWidth:!0,margin:"normal",helperText:this.state.nameHelper})),r.a.createElement(_.a,{item:!0,xs:12,md:6},r.a.createElement(Ee.a,{label:"Due Date",error:this.state.dateErr,type:"date",value:this.state.date,onChange:this.handleChange("date"),margin:"normal",fullWidth:!0,InputLabelProps:{shrink:!0},helperText:this.state.dateHelper,InputProps:{inputProps:{min:this.today,max:this.maxDate}}})),r.a.createElement(_.a,{item:!0,xs:12,md:6},r.a.createElement(Ee.a,{label:"Due Time",error:this.state.timeErr,type:"time",value:this.state.time,onChange:this.handleChange("time"),margin:"normal",fullWidth:!0,helperText:this.state.timeHelper,InputLabelProps:{shrink:!0}})))),r.a.createElement(oe.a,{className:"row right"},r.a.createElement(U.a,{onClick:this.handleSubmit},this.props.initialState?"Update":"Add"," Goal"),r.a.createElement(U.a,{onClick:this.props.toggleModal},"Cancel")))}}]),t}(n.Component)),ve=Object(be.withTheme)()(E(Oe)),ye=a(77),je=a.n(ye),we=a(81),ke=a.n(we),Ce=a(136),Me=a.n(Ce),Te=a(44),Se=a.n(Te),De=a(140),xe=a.n(De),Ne=a(80),He=a.n(Ne),Ie=a(138),Pe=a.n(Ie),Re=a(137),Ae=a.n(Re),Fe=a(139),Ue=a.n(Fe),Ve=a(141),We=a.n(Ve),ze=a(142),Be=a.n(ze),Ge=(a(335),function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).checkTime=function(){return a.props.date-(new Date).getTime()},a.updateTime=function(){if(!a.unMounting){var e=a.checkTime();if(e<1e3)return a.setState({time:{days:"00",hours:"00",minutes:"00",seconds:"00"},counting:!1});var t=Math.floor(e/1e3)%60,n=Math.floor(e/1e3/60)%60,r=Math.floor(e/1e3/3600)%24,o=Math.floor(e/1e3/3600/24);o=o<10?"0"+o:o.toString(),r=r<10?"0"+r:r.toString(),n=n<10?"0"+n:n.toString(),t=t<10?"0"+t:t.toString(),a.setState({time:{days:o,hours:r,minutes:n,seconds:t},counting:!0}),requestAnimationFrame(a.updateTime)}},a.unMounting=!1;var n=a.checkTime();return a.state={time:{},counting:n>0,classes:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.date!==this.props.date&&this.updateTime()}},{key:"componentDidMount",value:function(){this.props.date&&this.state.counting&&this.updateTime()}},{key:"componentWillUnmount",value:function(){this.unMounting=!0}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.counting?r.a.createElement("span",{className:this.state.classes},"".concat(this.state.time.days,":")+"".concat(this.state.time.hours,":")+"".concat(this.state.time.minutes,":")+"".concat(this.state.time.seconds)):r.a.createElement("span",{className:"timer-strike"},"00:00:00:00"))}}]),t}(r.a.Component)),Le=(a(337),function(e){var t=e.date,a=(new Date).getTime()-t,n=new Date(t);return r.a.createElement("span",{className:a>0?"timedue":""},"Due: ",n.toLocaleString())}),Ye=(a(339),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleMenuClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.handleCompleteToggle=function(){a.props.firebase.goalsRef.doc(a.props.goal.id).update({completed:!a.props.goal.completed})},a.triggerModal=function(){a.props.toggleModal({goal:a.props.goal.goal,date:a.props.goal.date,id:a.props.goal.id}),a.handleClose()},a.handleDelete=function(){a.props.firebase.goalsRef.doc(a.props.goal.id).delete(),a.handleClose()},a.toggleTimeView=function(){a.setState({timeView:!a.state.timeView})},a.state={anchorEl:null,timeView:!0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.anchorEl,t=Boolean(e);return r.a.createElement(je.a,{button:!0,onClick:this.toggleTimeView},this.state.timeView?r.a.createElement(Se.a,{className:this.props.goal.completed?"goalitem-strike":"",primary:"".concat(this.props.goal.goal),secondary:!this.props.goal.completed&&r.a.createElement(Ge,{date:this.props.goal.date}),primaryTypographyProps:{style:{width:"80%"}},secondaryTypographyProps:{color:"error"}}):r.a.createElement(Se.a,{className:this.props.goal.completed?"goalitem-strike":"",primary:"".concat(this.props.goal.goal),secondary:!this.props.goal.completed&&r.a.createElement(Le,{date:this.props.goal.date}),primaryTypographyProps:{style:{width:"80%"}},secondaryTypographyProps:{color:"error"}}),r.a.createElement(Me.a,null,r.a.createElement(me.a,{onClick:this.handleCompleteToggle},this.props.goal.completed?r.a.createElement(Ae.a,{color:"secondary"}):r.a.createElement(Pe.a,null)),r.a.createElement(me.a,{onClick:this.handleMenuClick},r.a.createElement(Ue.a,null)),r.a.createElement(xe.a,{id:"long-menu",anchorEl:e,open:t,onClose:this.handleClose},r.a.createElement(He.a,{onClick:this.triggerModal},r.a.createElement(ke.a,null,r.a.createElement(We.a,{color:"inherit"})),r.a.createElement(Se.a,{inset:!0,primary:"Edit"})),r.a.createElement(He.a,{onClick:this.handleDelete},r.a.createElement(ke.a,null,r.a.createElement(Be.a,{nativeColor:this.props.theme.palette.warn[500]})),r.a.createElement(Se.a,{inset:!0,primary:"Delete"})))))}}]),t}(n.Component)),Je=Object(be.withTheme)()(E(Ye)),Qe=a(76),qe=a.n(Qe),Ke=(a(347),function(e){var t=e.children,a=Object(g.a)(e,["children"]);return r.a.createElement(qe.a,Object.assign({},a,{className:"centeredModal"}),t)}),$e=(a(349),E(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){a.props.firebase.db.collection("users/".concat(a.props.user.uid,"/goals")).onSnapshot(function(e){var t=[];e.forEach(function(e){return t.push(Object(B.a)({id:e.id},e.data()))}),a.setState({goals:t})})},a.toggleModal=function(e){a.setState({goalModalOpen:!a.state.goalModalOpen,modalState:e&&e.id?e:null})},a.state={goalModalOpen:!1,modalState:void 0,goals:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dash"},r.a.createElement(q.a,null,this.state.goals.sort(function(e,t){var a=e.date-t.date;return e.completed===t.completed?a:e.completed?1:-1}).map(function(t,a){return r.a.createElement(Je,{key:a,goal:t,toggleModal:e.toggleModal})})),r.a.createElement(Ke,{open:this.state.goalModalOpen,onClose:this.toggleModal},r.a.createElement(ve,{toggleModal:this.toggleModal,initialState:this.state.modalState})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(L.a,{color:"secondary",variant:"extended","aria-label":"Add",id:"dash-addBtn",onClick:this.toggleModal},r.a.createElement(J.a,null)))}}]),t}(r.a.Component))),Xe=(a(352),function(e){var t=e.component,a=e.user,n=Object(g.a)(e,["component","user"]);return r.a.createElement(w.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,Object.assign({},e,n,{user:a})):r.a.createElement(k.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),Ze=E(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){a.props.firebase.auth.onAuthStateChanged(function(e){e?(a.setState({user:e,loading:!1}),a.props.firebase.initializeUser(e.uid)):a.setState({user:null,loading:!1})})},a.signIn=Object(s.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.firebase.signIn();case 2:t=e.sent,a.setState({user:t.user});case 4:case"end":return e.stop()}},e,this)})),a.signOut=function(){a.props.firebase.logout()},a.state={user:null,loading:!0,from:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(C.a,{basename:"/Goaler"},r.a.createElement(D,{status:this.state.loading},r.a.createElement("div",{className:"App"},r.a.createElement(z,{user:this.state.user,login:this.signIn,logout:this.signOut}),r.a.createElement(w.a,{path:"/login",render:function(t){return r.a.createElement(M,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(Xe,{user:this.state.user,exact:!0,path:"/",component:$e}))))}}]),t}(n.Component)),_e=a(148),et=a.n(_e),tt=a(145),at=a.n(tt),nt=a(146),rt=a.n(nt),ot=a(147),it=a.n(ot),lt=a(75),ct=a.n(lt),st=Object(be.createMuiTheme)({palette:{type:"dark",primary:{main:at.a[900]},secondary:{main:rt.a[400]},error:it.a,warn:ct.a,contrastThreshold:3,tonalOffset:.5},typography:{useNextVariants:!0}});a(355),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b.Provider,{value:new j},r.a.createElement(be.MuiThemeProvider,{theme:st},r.a.createElement(et.a,null),r.a.createElement(Ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[150,2,1]]]);
//# sourceMappingURL=main.87270491.chunk.js.map