(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a(379)},167:function(e,t,a){},185:function(e,t,a){},245:function(e,t,a){},272:function(e,t,a){},281:function(e,t,a){},353:function(e,t,a){},355:function(e,t,a){},357:function(e,t,a){},364:function(e,t,a){},366:function(e,t,a){},369:function(e,t,a){},371:function(e,t,a){},379:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),l=a.n(o),c=(a(167),a(87)),i=a.n(c),s=a(128),u=a(11),m=a(12),p=a(15),h=a(13),d=a(14),g=a(68),f=r.a.createContext(null),E=function(e){return function(t){return r.a.createElement(f.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},b=f,O=a(48),v=a.n(O),j=(a(178),a(180),{apiKey:"AIzaSyD-JApoTn3FGcYz4dBjO48jQ5nMOQHiRZc",authDomain:"goaler-8f0dc.firebaseapp.com",databaseURL:"https://goaler-8f0dc.firebaseio.com",projectId:"goaler-8f0dc",storageBucket:"goaler-8f0dc.appspot.com",messagingSenderId:"564932997783"}),y=function e(){var t=this;Object(u.a)(this,e),this.signIn=function(){var e=new O.auth.GoogleAuthProvider;return t.auth.signInWithRedirect(e).catch(function(e){return console.log(e)})},this.logout=function(){return t.auth.signOut()},this.redirect=function(){return t.auth.getRedirectResult()},this.initializeUser=function(e){t.goalsRef=t.db.collection("users/".concat(e,"/goals"))},v.a.initializeApp(j),this.auth=v.a.auth(),this.db=v.a.firestore();this.db.settings({timestampsInSnapshots:!0})},w=a(381),k=a(383),S=a(382),C=a(157),D=a.n(C),M=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.user&&this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("h2",null,"Login works!")}}]),t}(n.Component),T=(a(185),a(129)),x=a.n(T),A=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.status?r.a.createElement("div",{className:"loading"},r.a.createElement(x.a,{color:"secondary",size:200})):this.props.children)}}]),t}(n.Component),N=a(380),I=a(131),H=a.n(I),P=a(132),L=a.n(P),F=a(31),R=a.n(F),U=a(37),W=a.n(U),G=a(38),B=a.n(G),V=a(133),z=a.n(V),Y=a(134),J=a.n(Y),q=(a(245),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(H.a,{position:"static",className:"header"},r.a.createElement(L.a,{className:"row"},r.a.createElement(N.a,{to:"/"},r.a.createElement(W.a,{color:"inherit","aria-label":"Logo"},r.a.createElement(z.a,null),r.a.createElement(R.a,{variant:"h6",color:"inherit"},"Goaler"))),r.a.createElement("div",null,this.props.user?r.a.createElement(B.a,{color:"inherit",onClick:this.props.toggleDrawer},r.a.createElement(J.a,null)):r.a.createElement(W.a,{color:"inherit",onClick:this.props.login},"Sign In")))))}}]),t}(n.Component)),K=a(138),Q=a.n(K),$=a(47),X=a.n($),Z=a(32),_=a.n(Z),ee=a(34),te=a.n(ee),ae=a(139),ne=a.n(ae),re=a(137),oe=a.n(re),le=a(136),ce=a.n(le),ie=a(135),se=a.n(ie),ue=a(28),me=a.n(ue),pe=a(384),he=(a(272),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).navigate=function(e){a.props.history.push(e),a.props.toggleDrawer()},console.log(e),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(X.a,{className:"mainmenu"},r.a.createElement(_.a,{button:!0,onClick:function(){return e.navigate("/about")}},r.a.createElement(te.a,null,r.a.createElement(se.a,null)),r.a.createElement(me.a,{primary:"About"})),r.a.createElement(_.a,{button:!0,onClick:function(){return e.navigate("/")}},r.a.createElement(te.a,null,r.a.createElement(ce.a,null)),r.a.createElement(me.a,{primary:"Goals"})),r.a.createElement(_.a,{button:!0,onClick:function(){return e.navigate("/settings")}},r.a.createElement(te.a,null,r.a.createElement(oe.a,null)),r.a.createElement(me.a,{primary:"Settings"})),r.a.createElement(Q.a,null),r.a.createElement(_.a,{button:!0,onClick:this.props.logout},r.a.createElement(te.a,null,r.a.createElement(ne.a,null)),r.a.createElement(me.a,{primary:"Sign Out"})))}}]),t}(n.Component)),de=Object(pe.a)(he),ge=a(141),fe=a(155),Ee=a.n(fe),be=a(156),Oe=a.n(be),ve=a(88),je=a(90),ye=a(65),we=a(35),ke=a.n(we),Se=a(143),Ce=a.n(Se),De=a(66),Me=a.n(De),Te=a(146),xe=a.n(Te),Ae=a(67),Ne=a.n(Ae),Ie=a(142),He=a.n(Ie),Pe=a(145),Le=a.n(Pe),Fe=a(144),Re=a.n(Fe),Ue=a(70),We=a.n(Ue),Ge=a(27),Be=(a(281),function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(ye.a)({},e,t.target.value))}},a.validate=function(){var e=!1,t="",n=!1,r="",o=!1,l="";a.state.name||(e=!0,t="Please set a goal"),a.state.date||(n=!0,r="Please set a date"),a.state.time||(o=!0,l="Please set a time");var c=new Date,i="".concat(a.state.date," ").concat(a.state.time).split(/[- :]/).map(function(e){return Number(e)});i[1]--;var s=Object(ve.a)(Date,Object(je.a)(i));return s.getTime()<c.getTime()&&(s.toDateString()!==c.toDateString()?(n=!0,r="Date must be in future"):(o=!0,l="Time must be in future")),a.setState({nameErr:e,nameHelper:t,dateErr:n,dateHelper:r,timeErr:o,timeHelper:l}),!!(o||n||e)},a.handleSubmit=function(){if(!a.validate()){var e="".concat(a.state.date," ").concat(a.state.time).split(/[- :]/).map(function(e){return Number(e)});e[1]--;var t=Object(ve.a)(Date,Object(je.a)(e)),n=(new Date).getTime();a.props.initialState?a.props.firebase.goalsRef.doc(a.props.initialState.id).update({goal:a.state.name,date:t.getTime(),completed:!1,updatedAt:n}).then(function(){a.props.toggleModal()}):a.props.firebase.goalsRef.add({goal:a.state.name,date:t.getTime(),completed:!1,createdAt:n,updatedAt:n}).then(function(){a.props.toggleModal()})}},a.now=new Date;var n,r=new Date(a.now.getTime()+6e4),o=function(e){return e<10?"0"+e:e};if(a.today="".concat(a.now.getFullYear(),"-").concat(o(a.now.getMonth()+1),"-").concat(o(a.now.getDate())),a.maxDate="".concat(a.now.getFullYear()+10,"-").concat(o(a.now.getMonth()+1),"-").concat(o(a.now.getDate())),a.currentTime="".concat(o(r.getHours()),":").concat(o(r.getMinutes())),a.props.initialState){var l=a.props.initialState.date,c=a.today,i=a.currentTime;if(l>a.now.getTime()){var s=new Date(l);c="".concat(s.getFullYear(),"-").concat(o(s.getMonth()+1),"-").concat(o(s.getDate())),i="".concat(o(s.getHours()),":").concat(o(s.getMinutes()))}n={name:a.props.initialState.goal,nameErr:!1,nameHelper:"",date:c,dateErr:!1,dateHelper:"",time:i,timeErr:!1,timeHelper:""}}else n={name:"",nameErr:!1,nameHelper:"",date:a.today,dateErr:!1,dateHelper:"",time:a.currentTime,timeErr:!1,timeHelper:""};return a.state=n,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.name===this.state.name&&t.date===this.state.date&&t.time===this.state.time||this.validate()}},{key:"render",value:function(){return r.a.createElement(Me.a,{className:"goalform"},r.a.createElement(He.a,{avatar:r.a.createElement(Ce.a,{style:{backgroundColor:this.props.theme.palette.secondary.main,color:this.props.theme.palette.text.primary}},r.a.createElement(Re.a,null)),title:"Add a goal",action:r.a.createElement(B.a,{onClick:this.props.toggleModal,tabIndex:-1},r.a.createElement(Le.a,null))}),r.a.createElement(Ne.a,null,r.a.createElement(ke.a,{container:!0,spacing:0},r.a.createElement(ke.a,{item:!0,xs:12},r.a.createElement(We.a,{label:"Goal",placeholder:"Make it a good one!",error:this.state.nameErr,value:this.state.name,onChange:this.handleChange("name"),fullWidth:!0,margin:"normal",helperText:this.state.nameHelper})),r.a.createElement(ke.a,{item:!0,xs:12,md:6},r.a.createElement(We.a,{label:"Due Date",error:this.state.dateErr,type:"date",value:this.state.date,onChange:this.handleChange("date"),margin:"normal",fullWidth:!0,InputLabelProps:{shrink:!0},helperText:this.state.dateHelper,InputProps:{inputProps:{min:this.today,max:this.maxDate}}})),r.a.createElement(ke.a,{item:!0,xs:12,md:6},r.a.createElement(We.a,{label:"Due Time",error:this.state.timeErr,type:"time",value:this.state.time,onChange:this.handleChange("time"),margin:"normal",fullWidth:!0,helperText:this.state.timeHelper,InputLabelProps:{shrink:!0}})))),r.a.createElement(xe.a,{className:"row right"},r.a.createElement(W.a,{onClick:this.handleSubmit},this.props.initialState?"Update":"Add"," Goal"),r.a.createElement(W.a,{onClick:this.props.toggleModal},"Cancel")))}}]),t}(n.Component)),Ve=Object(Ge.withTheme)()(E(Be)),ze=a(147),Ye=a.n(ze),Je=a(151),qe=a.n(Je),Ke=a(89),Qe=a.n(Ke),$e=a(149),Xe=a.n($e),Ze=a(148),_e=a.n(Ze),et=a(150),tt=a.n(et),at=a(152),nt=a.n(at),rt=a(153),ot=a.n(rt),lt=(a(353),function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).checkTime=function(){return a.props.date-(new Date).getTime()},a.updateTime=function(){if(!a.unMounting){var e,t=a.checkTime();e=!(t<0),t=Math.abs(t);var n=Math.floor(t/1e3)%60,r=Math.floor(t/1e3/60)%60,o=Math.floor(t/1e3/3600)%24,l=Math.floor(t/1e3/3600/24);l=l<10?"0"+l:l.toString(),o=o<10?"0"+o:o.toString(),r=r<10?"0"+r:r.toString(),n=n<10?"0"+n:n.toString(),a.setState({time:{days:l,hours:o,minutes:r,seconds:n},counting:e}),requestAnimationFrame(a.updateTime)}},a.unMounting=!1;var n=a.checkTime();return a.state={time:{},counting:n>0,classes:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.date!==this.props.date&&this.updateTime()}},{key:"componentDidMount",value:function(){this.props.date&&this.updateTime()}},{key:"componentWillUnmount",value:function(){this.unMounting=!0}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.counting?r.a.createElement("span",{className:this.state.classes},"Due in:"," ".concat(this.state.time.days,":")+"".concat(this.state.time.hours,":")+"".concat(this.state.time.minutes,":")+"".concat(this.state.time.seconds)):r.a.createElement("span",{className:"timer-strike"},"Past Due:"," ".concat(this.state.time.days,":")+"".concat(this.state.time.hours,":")+"".concat(this.state.time.minutes,":")+"".concat(this.state.time.seconds)))}}]),t}(r.a.Component)),ct=(a(355),function(e){var t=e.date,a=(new Date).getTime()-t,n=new Date(t);return r.a.createElement("span",{className:a>0?"timedue":""},"Due: ",n.toLocaleString())}),it=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).updateTime=function(){var e=new Date(a.props.updated),t=new Date(a.props.created),n=new Date(a.props.completed);a.props.completed?a.setState({timeStatus:"completed",completed:"Completed: "+n.toLocaleString()}):a.props.updated===a.props.created?a.setState({timeStatus:"created",created:"Created: "+t.toLocaleString()}):a.setState({timeStatus:"updated",updated:"Updated: "+e.toLocaleString(),created:"Created: "+t.toLocaleString()})},a.renderSpans=function(){switch(a.state.timeStatus){case"completed":return r.a.createElement("span",null,a.state.completed);case"created":return r.a.createElement("span",null,a.state.created);case"updated":return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,a.state.updated))}},a.state={created:"",updated:"",completed:"",timeStatus:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){e!==this.props&&this.updateTime()}},{key:"componentDidMount",value:function(){this.updateTime()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderSpans())}}]),t}(n.Component),st=function(e){function t(e){var a;Object(u.a)(this,t),a=Object(p.a)(this,Object(h.a)(t).call(this,e));var n=e.completed-e.updated,r=Math.round(n/1e3)%60,o=Math.floor(n/1e3/60)%60,l=Math.floor(n/1e3/3600)%24,c=Math.floor(n/1e3/3600/24);return a.days=c<10?"0"+c:c.toString(),a.hours=l<10?"0"+l:l.toString(),a.minutes=o<10?"0"+o:o.toString(),a.seconds=r<10?"0"+r:r.toString(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Completed in: ".concat(this.days,":").concat(this.hours,":").concat(this.minutes,":").concat(this.seconds)),r.a.createElement("br",null))}}]),t}(n.Component),ut=(a(357),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleMenuClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.handleCompleteToggle=function(){var e=(new Date).getTime();a.props.firebase.goalsRef.doc(a.props.goal.id).update({completed:!a.props.goal.completed,completedAt:a.props.goal.completed?null:e})},a.triggerModal=function(){a.props.toggleModal({goal:a.props.goal.goal,date:a.props.goal.date,id:a.props.goal.id}),a.handleClose()},a.handleDelete=function(){a.props.firebase.goalsRef.doc(a.props.goal.id).delete(),a.handleClose()},a.toggleTimeView=function(){a.setState({timeView:!a.state.timeView})},a.state={anchorEl:null,timeView:!0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.anchorEl,t=Boolean(e);return r.a.createElement(_.a,{button:!0,onClick:this.toggleTimeView},this.state.timeView?r.a.createElement(me.a,{primary:this.props.goal.goal,secondary:this.props.goal.completed?r.a.createElement(it,{completed:this.props.goal.completedAt}):r.a.createElement(lt,{date:this.props.goal.date}),primaryTypographyProps:{style:{width:"80%"},className:this.props.goal.completed?"goalitem-strike":""},secondaryTypographyProps:{color:"error"}}):r.a.createElement(me.a,{primary:this.props.goal.goal,secondary:this.props.goal.completed?r.a.createElement(r.a.Fragment,null,r.a.createElement(st,{completed:this.props.goal.completedAt,updated:this.props.goal.updatedAt})):r.a.createElement(r.a.Fragment,null,r.a.createElement(ct,{date:this.props.goal.date}),r.a.createElement("br",null)),primaryTypographyProps:{style:{width:"80%"},className:this.props.goal.completed?"goalitem-strike":""},secondaryTypographyProps:{color:"error"}}),r.a.createElement(Ye.a,null,r.a.createElement(B.a,{onClick:this.handleCompleteToggle},this.props.goal.completed?r.a.createElement(_e.a,{color:"secondary"}):r.a.createElement(Xe.a,null)),r.a.createElement(B.a,{onClick:this.handleMenuClick},r.a.createElement(tt.a,null)),r.a.createElement(qe.a,{id:"long-menu",anchorEl:e,open:t,onClose:this.handleClose},!this.props.goal.completed&&r.a.createElement(Qe.a,{onClick:this.triggerModal},r.a.createElement(te.a,null,r.a.createElement(nt.a,{color:"inherit"})),r.a.createElement(me.a,{inset:!0,primary:"Edit"})),r.a.createElement(Qe.a,{onClick:this.handleDelete},r.a.createElement(te.a,null,r.a.createElement(ot.a,{nativeColor:this.props.theme.palette.warn[500]})),r.a.createElement(me.a,{inset:!0,primary:"Delete"})))))}}]),t}(n.Component)),mt=Object(Ge.withTheme)()(E(ut)),pt=a(154),ht=a.n(pt),dt=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).update=function(){if(!a.unmounting){var e=(new Date).toLocaleString("en-US",a.options);e!==a.state.time&&a.setState({time:e}),requestAnimationFrame(a.update)}},a.d=new Date,a.options={weekday:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},a.state={time:a.d.toLocaleString("en-US",a.options)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.update()}},{key:"componentWillUnmount",value:function(){this.unmounting=!0}},{key:"render",value:function(){return r.a.createElement(ht.a,{color:"secondary",label:this.state.time})}}]),t}(n.Component),gt=a(62),ft=a.n(gt),Et=(a(364),function(e){var t=e.children,a=Object(g.a)(e,["children"]);return r.a.createElement(ft.a,Object.assign({},a,{className:"centeredModal"}),t)}),bt=(a(366),E(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){a.props.firebase.db.collection("users/".concat(a.props.user.uid,"/goals")).onSnapshot(function(e){var t=[];e.forEach(function(e){return t.push(Object(ge.a)({id:e.id},e.data()))}),a.setState({goals:t})})},a.toggleModal=function(e){a.setState({goalModalOpen:!a.state.goalModalOpen,modalState:e&&e.id?e:null})},a.state={goalModalOpen:!1,modalState:void 0,goals:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dash"},r.a.createElement("div",{className:"dash-clock"},r.a.createElement(dt,null)),r.a.createElement(X.a,null,this.state.goals.sort(function(e,t){var a=e.date-t.date;return e.completed===t.completed?a:e.completed?1:-1}).map(function(t){return r.a.createElement(mt,{key:t.id,goal:t,toggleModal:e.toggleModal})})),r.a.createElement(Et,{open:this.state.goalModalOpen,onClose:this.toggleModal},r.a.createElement(Ve,{toggleModal:this.toggleModal,initialState:this.state.modalState})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Ee.a,{color:"secondary",variant:"extended","aria-label":"Add",id:"dash-addBtn",onClick:this.toggleModal},r.a.createElement(Oe.a,null)))}}]),t}(r.a.Component))),Ot=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Settings Works!")}}]),t}(n.Component),vt=(a(369),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement(ke.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(ke.a,{item:!0,xs:12,lg:8},r.a.createElement(Me.a,{className:"about-card"},r.a.createElement(Ne.a,null,r.a.createElement(R.a,{variant:"h4",align:"center"},"Thanks for using Goaler!"),r.a.createElement("br",null),r.a.createElement(R.a,{variant:"h5",align:"center"},"Contact me ",r.a.createElement("a",{href:"mailto:leewarrick@gmail.com",rel:"noopener noreferrer",target:"_BLANK"},"here")),r.a.createElement("br",null),r.a.createElement(R.a,{variant:"h6",align:"center"},"\xa9 Lee Warrick 2019. All Rights Reserved."))))))}}]),t}(n.Component)),jt=(a(371),function(e){var t=e.component,a=e.user,n=Object(g.a)(e,["component","user"]);return r.a.createElement(w.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,Object.assign({},e,n,{user:a})):r.a.createElement(k.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),yt=E(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){a.props.firebase.auth.onAuthStateChanged(function(e){e?(a.setState({user:e,loading:!1}),a.props.firebase.initializeUser(e.uid)):a.setState({user:null,loading:!1})})},a.signIn=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.firebase.signIn();case 2:t=e.sent,a.setState({user:t.user});case 4:case"end":return e.stop()}},e,this)})),a.signOut=function(){a.props.firebase.logout(),a.toggleDrawer()},a.toggleDrawer=function(){a.setState({drawer:!a.state.drawer})},a.state={user:null,loading:!0,from:null,drawer:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(S.a,{basename:"/Goaler"},r.a.createElement(A,{status:this.state.loading},r.a.createElement("div",{className:"App"},r.a.createElement(q,{user:this.state.user,login:this.signIn,toggleDrawer:this.toggleDrawer}),r.a.createElement(D.a,{anchor:"right",open:this.state.drawer,onClose:this.toggleDrawer},r.a.createElement(de,{logout:this.signOut,toggleDrawer:this.toggleDrawer})),r.a.createElement(w.a,{path:"/login",render:function(t){return r.a.createElement(M,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(jt,{user:this.state.user,exact:!0,path:"/about",component:vt}),r.a.createElement(jt,{user:this.state.user,exact:!0,path:"/",component:bt}),r.a.createElement(jt,{user:this.state.user,exact:!0,path:"/settings",component:Ot}))))}}]),t}(n.Component)),wt=a(161),kt=a.n(wt),St=a(158),Ct=a.n(St),Dt=a(159),Mt=a.n(Dt),Tt=a(160),xt=a.n(Tt),At=a(86),Nt=a.n(At),It=Object(Ge.createMuiTheme)({palette:{type:"dark",primary:{main:Ct.a[900]},secondary:{main:Mt.a[400]},error:xt.a,warn:Nt.a,contrastThreshold:3,tonalOffset:.5},typography:{useNextVariants:!0}});a(376),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b.Provider,{value:new y},r.a.createElement(Ge.MuiThemeProvider,{theme:It},r.a.createElement(kt.a,null),r.a.createElement(yt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,2,1]]]);
//# sourceMappingURL=main.79dce7a1.chunk.js.map