(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){e.exports=a.p+"static/media/darts.9832dd2d.jpeg"},171:function(e,t,a){e.exports=a(399)},176:function(e,t,a){},194:function(e,t,a){},271:function(e,t,a){},274:function(e,t,a){},285:function(e,t,a){},294:function(e,t,a){},369:function(e,t,a){},371:function(e,t,a){},373:function(e,t,a){},378:function(e,t,a){},384:function(e,t,a){},386:function(e,t,a){},389:function(e,t,a){},391:function(e,t,a){},399:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(27),l=a.n(r),i=(a(176),a(96)),s=a.n(i),c=a(136),u=a(10),p=a(12),m=a(15),g=a(13),d=a(14),h=a(78),f=o.a.createContext(null),b=function(e){return function(t){return o.a.createElement(f.Consumer,null,function(a){return o.a.createElement(e,Object.assign({},t,{firebase:a}))})}},E=f,v=a(54),O=a.n(v),y=(a(187),a(189),{apiKey:"AIzaSyD-JApoTn3FGcYz4dBjO48jQ5nMOQHiRZc",authDomain:"goaler-8f0dc.firebaseapp.com",databaseURL:"https://goaler-8f0dc.firebaseio.com",projectId:"goaler-8f0dc",storageBucket:"goaler-8f0dc.appspot.com",messagingSenderId:"564932997783"}),j=function e(){var t=this;Object(u.a)(this,e),this.signIn=function(){var e=new v.auth.GoogleAuthProvider;return t.auth.signInWithRedirect(e).catch(function(e){return console.log(e)})},this.logout=function(){return t.auth.signOut()},this.redirect=function(){return t.auth.getRedirectResult()},this.initializeUser=function(e){t.goalsRef=t.db.collection("users/".concat(e,"/goals")),t.settingsRef=t.db.collection("users/".concat(e,"/settings"))},O.a.initializeApp(y),this.auth=O.a.auth(),this.db=O.a.firestore();this.db.settings({timestampsInSnapshots:!0})},S=a(401),C=a(403),k=a(402),w=a(166),M=a.n(w),D=a(48),T=a.n(D),A=a(139),N=a.n(A),P=a(24),G=a.n(P),I=a(34),x=a.n(I),R=a(137),F=a.n(R),H=(a(194),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.user&&this.props.history.push("/")}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(T.a,{className:"login-titleCard"},o.a.createElement(N.a,{component:"img",alt:"Inspirational Goal Image",image:F.a}),o.a.createElement("div",{className:"login-titleCard_container"},o.a.createElement(G.a,{variant:"h2",className:"login-titleCard_title",gutterBottom:!0},"Welcome to ",o.a.createElement("strong",null,"GOALER")),o.a.createElement(G.a,{variant:"h5",align:"right",className:"login-titleCard_subtitle",gutterBottom:!0},"Track your goals."),o.a.createElement(G.a,{variant:"h5",align:"right",className:"login-titleCard_subtitle",gutterBottom:!0},"Get more things done."),o.a.createElement(G.a,{variant:"h5",align:"right",className:"login-titleCard_actionCall",gutterBottom:!0},o.a.createElement(x.a,{variant:"contained",color:"secondary",onClick:this.props.login},"Sign in"),"\xa0with Google"))))}}]),t}(n.Component)),L=(a(271),a(140)),U=a.n(L),V=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.props.status?o.a.createElement("div",{className:"loading"},o.a.createElement(U.a,{color:"secondary",size:200})):this.props.children)}}]),t}(n.Component),B=a(400),W=a(141),z=a.n(W),Y=a(142),J=a.n(Y),q=a(30),K=a.n(q),Q=a(143),$=a.n(Q),X=a(144),Z=a.n(X),_=(a(274),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement(z.a,{position:"static",className:"header"},o.a.createElement(J.a,{className:"row"},o.a.createElement(B.a,{to:"/"},o.a.createElement(x.a,{color:"inherit","aria-label":"Logo"},o.a.createElement($.a,null),o.a.createElement(G.a,{variant:"h6",color:"inherit"},"Goaler"))),o.a.createElement("div",null,this.props.user?o.a.createElement(K.a,{color:"inherit",onClick:this.props.toggleDrawer},o.a.createElement(Z.a,null)):o.a.createElement(x.a,{color:"inherit",onClick:this.props.login},"Sign In")))))}}]),t}(n.Component)),ee=a(148),te=a.n(ee),ae=a(40),ne=a.n(ae),oe=a(32),re=a.n(oe),le=a(31),ie=a.n(le),se=a(149),ce=a.n(se),ue=a(147),pe=a.n(ue),me=a(146),ge=a.n(me),de=a(145),he=a.n(de),fe=a(25),be=a.n(fe),Ee=a(404),ve=(a(285),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).navigate=function(e){a.props.history.push(e),a.props.toggleDrawer()},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(ne.a,{className:"mainmenu"},o.a.createElement(re.a,{button:!0,onClick:function(){return e.navigate("/about")}},o.a.createElement(ie.a,null,o.a.createElement(he.a,null)),o.a.createElement(be.a,{primary:"About"})),o.a.createElement(re.a,{button:!0,onClick:function(){return e.navigate("/")}},o.a.createElement(ie.a,null,o.a.createElement(ge.a,null)),o.a.createElement(be.a,{primary:"Goals"})),o.a.createElement(re.a,{button:!0,onClick:function(){return e.navigate("/settings")}},o.a.createElement(ie.a,null,o.a.createElement(pe.a,null)),o.a.createElement(be.a,{primary:"Settings"})),o.a.createElement(te.a,null),o.a.createElement(re.a,{button:!0,onClick:this.props.logout},o.a.createElement(ie.a,null,o.a.createElement(ce.a,null)),o.a.createElement(be.a,{primary:"Sign Out"})))}}]),t}(n.Component)),Oe=Object(Ee.a)(ve),ye=a(52),je=a(165),Se=a.n(je),Ce=a(53),ke=a.n(Ce),we=a(97),Me=a(98),De=a(70),Te=a(35),Ae=a.n(Te),Ne=a(152),Pe=a.n(Ne),Ge=a(158),Ie=a.n(Ge),xe=a(71),Re=a.n(xe),Fe=a(151),He=a.n(Fe),Le=a(80),Ue=a.n(Le),Ve=a(155),Be=a.n(Ve),We=a(156),ze=a.n(We),Ye=a(157),Je=a.n(Ye),qe=a(154),Ke=a.n(qe),Qe=a(153),$e=a.n(Qe),Xe=a(29),Ze=(a(294),function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).toggleMultigoal=function(){a.setState({multigoal:!a.state.multigoal})},a.handleChange=function(e){return function(t){a.setState(Object(De.a)({},e,t.target.value))}},a.validate=function(){var e=!1,t="",n=!1,o="",r=!1,l="";a.state.name||(e=!0,t="Please set a goal"),a.state.date||(n=!0,o="Please set a date"),a.state.time||(r=!0,l="Please set a time");var i=new Date,s="".concat(a.state.date," ").concat(a.state.time).split(/[- :]/).map(function(e){return Number(e)});s[1]--;var c=Object(we.a)(Date,Object(Me.a)(s));return c.getTime()<i.getTime()&&(c.toDateString()!==i.toDateString()?(n=!0,o="Date must be in future"):(r=!0,l="Time must be in future")),a.setState({nameErr:e,nameHelper:t,dateErr:n,dateHelper:o,timeErr:r,timeHelper:l}),!!(r||n||e)},a.handleSubmit=function(){if(!a.validate()){var e="".concat(a.state.date," ").concat(a.state.time).split(/[- :]/).map(function(e){return Number(e)});e[1]--;var t=Object(we.a)(Date,Object(Me.a)(e)),n=(new Date).getTime();a.props.initialState&&a.props.initialState.goal?a.state.subgoal?a.props.firebase.goalsRef.doc(a.props.initialState.parentGoalId).collection("subgoals").doc(a.props.initialState.id).update({goal:a.state.name,date:t.getTime(),multigoal:a.state.multigoal,subgoal:a.state.subgoal,completed:!1,updatedAt:n}).then(function(){a.props.toggleModal()}):a.props.firebase.goalsRef.doc(a.props.initialState.id).update({goal:a.state.name,date:t.getTime(),multigoal:a.state.multigoal,subgoal:a.state.subgoal,completed:!1,updatedAt:n}).then(function(){a.props.toggleModal()}):a.state.subgoal?a.props.firebase.goalsRef.doc(a.props.initialState.parentGoalId).collection("subgoals").add({goal:a.state.name,date:t.getTime(),multigoal:a.state.multigoal,subgoal:a.state.subgoal,completed:!1,createdAt:n,updatedAt:n}).then(function(){a.props.toggleModal()}):a.props.firebase.goalsRef.add({goal:a.state.name,date:t.getTime(),multigoal:a.state.multigoal,subgoal:a.state.subgoal,completed:!1,createdAt:n,updatedAt:n}).then(function(){a.props.toggleModal()})}},a.now=new Date;var n,o=new Date(a.now.getTime()+864e5),r=function(e){return e<10?"0"+e:e},l="".concat(o.getFullYear(),"-").concat(r(o.getMonth()+1),"-").concat(r(o.getDate()));if(a.today="".concat(a.now.getFullYear(),"-").concat(r(a.now.getMonth()+1),"-").concat(r(a.now.getDate())),a.maxDate="".concat(a.now.getFullYear()+10,"-").concat(r(a.now.getMonth()+1),"-").concat(r(a.now.getDate())),a.currentTime="".concat(r(a.now.getHours()),":").concat(r(a.now.getMinutes())),a.props.initialState&&a.props.initialState.date){var i=a.props.initialState.date,s=l,c=a.currentTime;if(i>a.now.getTime()){var p=new Date(i);s="".concat(p.getFullYear(),"-").concat(r(p.getMonth()+1),"-").concat(r(p.getDate())),c="".concat(r(p.getHours()),":").concat(r(p.getMinutes()))}n={name:a.props.initialState.goal,nameErr:!1,nameHelper:"",date:s,dateErr:!1,dateHelper:"",time:c,timeErr:!1,timeHelper:"",multigoal:!!a.props.initialState.multigoal,subgoal:!!a.props.initialState.subgoal}}else n={name:"",nameErr:!1,nameHelper:"",date:l,dateErr:!1,dateHelper:"",time:a.currentTime,timeErr:!1,timeHelper:"",multigoal:!(!a.props.initialState||!a.props.initialState.multigoal),subgoal:!(!a.props.initialState||!a.props.initialState.subgoal)};return a.state=n,a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.name===this.state.name&&t.date===this.state.date&&t.time===this.state.time||this.validate()}},{key:"render",value:function(){return o.a.createElement(T.a,{className:"goalform"},o.a.createElement(He.a,{avatar:o.a.createElement(Pe.a,{style:{backgroundColor:this.props.theme.palette.secondary.main,color:this.props.theme.palette.text.primary}},o.a.createElement($e.a,null)),title:"Add a goal",action:o.a.createElement(K.a,{onClick:this.props.toggleModal,tabIndex:-1},o.a.createElement(Ke.a,null))}),o.a.createElement(Re.a,null,o.a.createElement(Ae.a,{container:!0,spacing:0},o.a.createElement(Ae.a,{item:!0,xs:12},o.a.createElement(Ue.a,{label:"Goal",placeholder:"Make it a good one!",error:this.state.nameErr,value:this.state.name,onChange:this.handleChange("name"),fullWidth:!0,margin:"normal",helperText:this.state.nameHelper})),o.a.createElement(Ae.a,{item:!0,xs:12,md:6},o.a.createElement(Ue.a,{label:"Due Date",error:this.state.dateErr,type:"date",value:this.state.date,onChange:this.handleChange("date"),margin:"normal",fullWidth:!0,InputLabelProps:{shrink:!0},helperText:this.state.dateHelper,InputProps:{inputProps:{min:this.today,max:this.maxDate}}})),o.a.createElement(Ae.a,{item:!0,xs:12,md:6},o.a.createElement(Ue.a,{label:"Due Time",error:this.state.timeErr,type:"time",value:this.state.time,onChange:this.handleChange("time"),margin:"normal",fullWidth:!0,helperText:this.state.timeHelper,InputLabelProps:{shrink:!0}})),!this.state.subgoal&&!this.props.initialState.subgoalsAdded&&o.a.createElement(Ae.a,{item:!0,xs:12,md:6},o.a.createElement(Be.a,{row:!0},o.a.createElement(ze.a,{control:o.a.createElement(Je.a,{checked:this.state.multigoal,onChange:this.toggleMultigoal,value:this.state.multigoal}),label:o.a.createElement(G.a,{color:this.state.multigoal?"textPrimary":"textSecondary"},"Multi-Step Goal")}))))),o.a.createElement(Ie.a,{className:"row right"},o.a.createElement(x.a,{onClick:this.handleSubmit},this.props.initialState&&this.props.initialState.goal?"Update ":"Add ","Goal"),o.a.createElement(x.a,{onClick:this.props.toggleModal},"Cancel")))}}]),t}(n.Component)),_e=Object(Xe.withTheme)()(b(Ze)),et=a(72),tt=a.n(et),at=a(74),nt=a.n(at),ot=a(41),rt=a.n(ot),lt=a(160),it=a.n(lt),st=a(159),ct=a.n(st),ut=a(73),pt=a.n(ut),mt=a(75),gt=a.n(mt),dt=a(76),ht=a.n(dt),ft=(a(369),function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).checkTime=function(){return a.props.date-(new Date).getTime()},a.updateTime=function(){if(!a.unMounting){var e,t=a.checkTime();e=!(t<0),t=Math.abs(t);var n=Math.floor(t/1e3)%60,o=Math.floor(t/1e3/60)%60,r=Math.floor(t/1e3/3600)%24,l=Math.floor(t/1e3/3600/24);l=l<10?"0"+l:l.toString(),r=r<10?"0"+r:r.toString(),o=o<10?"0"+o:o.toString(),n=n<10?"0"+n:n.toString(),a.setState({time:{days:l,hours:r,minutes:o,seconds:n},counting:e}),requestAnimationFrame(a.updateTime)}},a.unMounting=!1;var n=a.checkTime();return a.state={time:{},counting:n>0,classes:""},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.date!==this.props.date&&this.updateTime()}},{key:"componentDidMount",value:function(){this.props.date&&this.updateTime()}},{key:"componentWillUnmount",value:function(){this.unMounting=!0}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.counting?o.a.createElement("span",{className:this.state.classes},"Due in:"," ".concat(this.state.time.days,":")+"".concat(this.state.time.hours,":")+"".concat(this.state.time.minutes,":")+"".concat(this.state.time.seconds)):o.a.createElement("span",{className:"timer-strike"},"Past Due:"," ".concat(this.state.time.days,":")+"".concat(this.state.time.hours,":")+"".concat(this.state.time.minutes,":")+"".concat(this.state.time.seconds)))}}]),t}(o.a.Component)),bt=(a(371),function(e){var t=e.date,a=(new Date).getTime()-t,n=new Date(t);return o.a.createElement("span",{className:a>0?"timedue":""},"Due: ",n.toLocaleString())}),Et=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).updateTime=function(){var e=new Date(a.props.updated),t=new Date(a.props.created),n=new Date(a.props.completed);a.props.completed?a.setState({timeStatus:"completed",completed:"Completed: "+n.toLocaleString()}):a.props.updated===a.props.created?a.setState({timeStatus:"created",created:"Created: "+t.toLocaleString()}):a.setState({timeStatus:"updated",updated:"Updated: "+e.toLocaleString(),created:"Created: "+t.toLocaleString()})},a.renderSpans=function(){switch(a.state.timeStatus){case"completed":return o.a.createElement("span",null,a.state.completed);case"created":return o.a.createElement("span",null,a.state.created);case"updated":return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,a.state.updated));default:return}},a.state={created:"",updated:"",completed:"",timeStatus:""},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,t){e!==this.props&&this.updateTime()}},{key:"componentDidMount",value:function(){this.updateTime()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.renderSpans())}}]),t}(n.Component),vt=function(e){function t(e){var a;Object(u.a)(this,t),a=Object(m.a)(this,Object(g.a)(t).call(this,e));var n=e.completed-e.updated,o=Math.round(n/1e3)%60,r=Math.floor(n/1e3/60)%60,l=Math.floor(n/1e3/3600)%24,i=Math.floor(n/1e3/3600/24);return a.days=i<10?"0"+i:i.toString(),a.hours=l<10?"0"+l:l.toString(),a.minutes=r<10?"0"+r:r.toString(),a.seconds=o<10?"0"+o:o.toString(),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,"Completed in: ".concat(this.days,":").concat(this.hours,":").concat(this.minutes,":").concat(this.seconds)),o.a.createElement("br",null))}}]),t}(n.Component),Ot=(a(373),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).handleMenuClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.handleCompleteToggle=function(){var e=(new Date).getTime(),t=!a.props.goal.completed;a.goalRef.update({completed:t,completedAt:t?e:null});var n=a.props.firebase.settingsRef.doc("completedCount");n.get().then(function(e){var a,o=e.data();(a=t?o.count+1:o.count-1)<0&&(a=0),n.set({count:a})})},a.triggerModal=function(e){e?a.props.toggleModal({parentGoalName:a.props.parentGoal.goal,parentGoalDate:a.props.parentGoal.date,parentGoalId:a.props.parentGoal.id,goal:a.props.goal.goal,date:a.props.goal.date,id:a.props.goal.id,multigoal:!1,subgoal:!0}):a.props.toggleModal({goal:a.props.goal.goal,date:a.props.goal.date,id:a.props.goal.id,multigoal:a.props.goal.multigoal,subgoal:a.props.goal.subgoal}),a.handleClose()},a.handleDelete=function(){a.goalRef.delete(),a.handleClose()},a.toggleTimeView=function(){a.setState({timeView:!a.state.timeView})},a.state={anchorEl:null,timeView:!0},a.goalRef=e.goal.subgoal?e.firebase.goalsRef.doc("".concat(e.parentGoal.id,"/subgoals/").concat(e.goal.id)):e.firebase.goalsRef.doc(e.goal.id),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.deleteSelf&&this.goalRef.delete()}},{key:"componentDidUpdate",value:function(e,t){e.deleteSelf!==this.props.deleteSelf&&this.props.deleteSelf&&this.goalRef.delete()}},{key:"render",value:function(){var e=this,t=this.state.anchorEl,a=Boolean(t);return o.a.createElement(o.a.Fragment,null,o.a.createElement(re.a,{className:this.props.goal.subgoal?"goalItem-indent":"",button:!0,onClick:this.toggleTimeView},this.state.timeView?o.a.createElement(be.a,{primary:this.props.goal.goal,secondary:this.props.goal.completed?o.a.createElement(Et,{completed:this.props.goal.completedAt}):o.a.createElement(ft,{date:this.props.goal.date}),primaryTypographyProps:{style:{width:"80%"},className:this.props.goal.completed?"goalitem-strike":""},secondaryTypographyProps:{color:"error"}}):o.a.createElement(be.a,{primary:this.props.goal.goal,secondary:this.props.goal.completed?o.a.createElement(o.a.Fragment,null,o.a.createElement(vt,{completed:this.props.goal.completedAt,updated:this.props.goal.updatedAt})):o.a.createElement(o.a.Fragment,null,o.a.createElement(bt,{date:this.props.goal.date}),o.a.createElement("br",null)),primaryTypographyProps:{style:{width:"80%"},className:this.props.goal.completed?"goalitem-strike":""},secondaryTypographyProps:{color:"error"}}),o.a.createElement(tt.a,null,o.a.createElement(K.a,{onClick:this.handleCompleteToggle},this.props.goal.completed?o.a.createElement(ct.a,{color:"secondary"}):o.a.createElement(it.a,null)),o.a.createElement(K.a,{onClick:this.handleMenuClick},o.a.createElement(pt.a,null)),o.a.createElement(nt.a,{id:"long-menu",anchorEl:t,open:a,onClose:this.handleClose},!this.props.goal.completed&&o.a.createElement(rt.a,{onClick:function(){return e.triggerModal(e.props.goal.subgoal)}},o.a.createElement(ie.a,null,o.a.createElement(gt.a,{color:"inherit"})),o.a.createElement(be.a,{inset:!0,primary:"Edit"})),o.a.createElement(rt.a,{onClick:this.handleDelete},o.a.createElement(ie.a,null,o.a.createElement(ht.a,{nativeColor:this.props.theme.palette.warn[500]})),o.a.createElement(be.a,{inset:!0,primary:"Delete"}))))))}}]),t}(n.Component)),yt=Object(Xe.withTheme)()(b(Ot)),jt=a(164),St=a.n(jt),Ct=a(162),kt=a.n(Ct),wt=a(163),Mt=a.n(wt),Dt=a(161),Tt=a.n(Dt),At=b(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={subgoals:[]},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props.deleteInProgress&&0===this.state.subgoals.length&&this.props.deleteParent()}},{key:"componentDidMount",value:function(){var e=this;this.props.firebase.db.collection("users/".concat(this.props.user.uid,"/goals/").concat(this.props.parentGoal.id,"/subgoals")).onSnapshot(function(t){var a=[];t.forEach(function(e){return a.push(Object(ye.a)({id:e.id},e.data()))});var n=a.filter(function(e){return e.completed}),o=Math.round(n.length/a.length*100);e.props.updateProgress(o),e.setState({subgoals:a})})}},{key:"render",value:function(){var e=this;return o.a.createElement(Tt.a,{in:this.props.open,timeout:"auto",unmountOnExit:!0},o.a.createElement(ne.a,{component:"div",disablePadding:!0},this.state.subgoals.sort(function(e,t){var a=e.date-t.date;return e.completed===t.completed?a:e.completed?1:-1}).map(function(t){return o.a.createElement(yt,{key:t.id,goal:t,toggleModal:e.props.toggleModal,parentGoal:e.props.parentGoal,deleteSelf:e.props.deleteInProgress})})))}}]),t}(n.Component)),Nt=(a(378),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).handleMenuClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.handleCompleteToggle=function(){var e=(new Date).getTime(),t=!a.props.goal.completed;a.goalRef.update({completed:t,completedAt:t?e:null})},a.triggerModal=function(e){e?a.props.toggleModal({parentGoalName:a.props.goal.goal,parentGoalDate:a.props.goal.date,parentGoalId:a.props.goal.id,multigoal:!1,subgoal:!0,subgoalsAdded:a.state.subgoalsAdded}):a.props.toggleModal({goal:a.props.goal.goal,date:a.props.goal.date,id:a.props.goal.id,multigoal:a.props.goal.multigoal,subgoal:a.props.goal.subgoal,subgoalsAdded:a.state.subgoalsAdded}),a.handleClose()},a.startDelete=function(){a.setState({subgoalsOpen:!0,deleteInProgress:!0}),a.handleClose()},a.finishDelete=function(){a.goalRef.delete()},a.toggleTimeView=function(){a.setState({timeView:!a.state.timeView})},a.toggleSubgoals=function(){a.setState({subgoalsOpen:!a.state.subgoalsOpen})},a.updateProgress=function(e){a.setState({progress:e,subgoalsAdded:!isNaN(e),loading:!1}),100!==e||a.props.goal.completed?100!==e&&a.props.goal.completed&&setTimeout(function(){return a.handleCompleteToggle()},500):setTimeout(function(){return a.handleCompleteToggle()},500)},a.state={anchorEl:null,timeView:!0,subgoalsOpen:!e.goal.multigoal&&null,progress:0,subgoalsAdded:!1,loading:!0,deleteInProgress:!1},a.goalRef=e.goal.subgoal?e.firebase.goalsRef.doc("".concat(e.parentGoal.id,"/subgoals/").concat(e.goal.id)):e.firebase.goalsRef.doc(e.goal.id),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.anchorEl,a=Boolean(t);return o.a.createElement(o.a.Fragment,null,o.a.createElement(re.a,{className:this.props.goal.subgoal?"goalitem-indent":"",button:!0,onClick:this.toggleTimeView},this.state.timeView?o.a.createElement(be.a,{primary:this.props.goal.goal,secondary:this.props.goal.completed?o.a.createElement(Et,{completed:this.props.goal.completedAt}):o.a.createElement(ft,{date:this.props.goal.date}),primaryTypographyProps:{style:{width:"80%"},className:this.props.goal.completed?"goalitem-strike":""},secondaryTypographyProps:{color:"error"}}):o.a.createElement(be.a,{primary:this.props.goal.goal,secondary:this.props.goal.completed?o.a.createElement(o.a.Fragment,null,o.a.createElement(vt,{completed:this.props.goal.completedAt,updated:this.props.goal.updatedAt})):o.a.createElement(o.a.Fragment,null,o.a.createElement(bt,{date:this.props.goal.date}),o.a.createElement("br",null)),primaryTypographyProps:{style:{width:"80%"},className:this.props.goal.completed?"goalitem-strike":""},secondaryTypographyProps:{color:"error"}}),o.a.createElement(tt.a,null,this.state.subgoalsAdded?!this.state.loading&&o.a.createElement(K.a,{onClick:this.toggleSubgoals},this.state.subgoalsOpen?o.a.createElement(kt.a,null):o.a.createElement(Mt.a,null)):!this.state.loading&&o.a.createElement(K.a,{variant:"raised",onClick:function(){return e.triggerModal(!0)}},o.a.createElement(ke.a,null)),o.a.createElement(K.a,{onClick:this.handleMenuClick},o.a.createElement(pt.a,null)),o.a.createElement(nt.a,{id:"long-menu",anchorEl:t,open:a,onClose:this.handleClose},this.props.goal.multigoal&&o.a.createElement(rt.a,{onClick:function(){return e.triggerModal(!0)}},o.a.createElement(ie.a,null,o.a.createElement(ke.a,{color:"inherit"})),o.a.createElement(be.a,{inset:!0,primary:"Add Sub Goal"})),!this.props.goal.completed&&o.a.createElement(rt.a,{onClick:function(){return e.triggerModal(!1)}},o.a.createElement(ie.a,null,o.a.createElement(gt.a,{color:"inherit"})),o.a.createElement(be.a,{inset:!0,primary:"Edit"})),o.a.createElement(rt.a,{onClick:this.startDelete},o.a.createElement(ie.a,null,o.a.createElement(ht.a,{nativeColor:this.props.theme.palette.warn[500]})),o.a.createElement(be.a,{inset:!0,primary:"Delete"}))))),!this.state.loading&&this.state.subgoalsAdded&&o.a.createElement(St.a,{className:"goalItem-progress",color:"secondary",variant:"determinate",value:this.state.progress}),this.props.goal.multigoal&&o.a.createElement(At,{open:this.state.subgoalsOpen,parentGoal:this.props.goal,user:this.props.user,toggleModal:this.props.toggleModal,updateProgress:this.updateProgress,deleteParent:this.finishDelete,deleteInProgress:this.state.deleteInProgress}))}}]),t}(n.Component)),Pt=Object(Xe.withTheme)()(b(Nt)),Gt=a(77),It=a.n(Gt),xt=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).update=function(){if(!a.unmounting){var e=(new Date).toLocaleString("en-US",a.options);e!==a.state.time&&a.setState({time:e}),requestAnimationFrame(a.update)}},a.d=new Date,a.options={weekday:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},a.state={time:a.d.toLocaleString("en-US",a.options)},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.update()}},{key:"componentWillUnmount",value:function(){this.unmounting=!0}},{key:"render",value:function(){return o.a.createElement(It.a,{color:"secondary",label:this.state.time})}}]),t}(n.Component),Rt=b(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={completeCount:""},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.firebase.db.collection("users/".concat(this.props.uid,"/settings")).doc("completedCount");t.onSnapshot(function(a){if(a.exists){var n=a.data();e.setState({completeCount:n.count})}else t.set({count:0})})}},{key:"render",value:function(){return o.a.createElement(It.a,{color:"primary",label:"Completed Goals: ".concat(this.state.completeCount)})}}]),t}(n.Component)),Ft=a(67),Ht=a.n(Ft),Lt=(a(384),function(e){var t=e.children,a=Object(h.a)(e,["children"]);return o.a.createElement(Ht.a,Object.assign({},a,{className:"centeredModal"}),t)}),Ut=(a(386),b(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).componentDidMount=function(){a.props.firebase.db.collection("users/".concat(a.props.user.uid,"/goals")).onSnapshot(function(e){var t=[];e.forEach(function(e){return t.push(Object(ye.a)({id:e.id},e.data()))}),a.setState({goals:t})}),a.props.firebase.db.collection("users/".concat(a.props.user.uid,"/settings")).onSnapshot(function(e){var t={};e.forEach(function(e){return t[e.id]=Object(ye.a)({id:e.id},e.data())}),a.setState({settings:t})})},a.toggleModal=function(e){a.setState({goalModalOpen:!a.state.goalModalOpen,modalState:e||null})},a.state={goalModalOpen:!1,modalState:void 0,goals:[],settings:{}},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"dash"},o.a.createElement("div",{className:"dash-items"},o.a.createElement("div",{className:"dash-item"},o.a.createElement(xt,null)),o.a.createElement("div",{className:"dash-item"},o.a.createElement(Rt,{uid:this.props.user.uid}))),o.a.createElement(ne.a,null,this.state.goals.sort(function(e,t){var a=e.date-t.date;return e.completed===t.completed?a:e.completed?1:-1}).map(function(t){return t.multigoal?o.a.createElement(Pt,{key:t.id,goal:t,toggleModal:e.toggleModal,user:e.props.user}):o.a.createElement(yt,{key:t.id,goal:t,toggleModal:e.toggleModal})})),o.a.createElement(Lt,{open:this.state.goalModalOpen,onClose:this.toggleModal},o.a.createElement(_e,{toggleModal:this.toggleModal,initialState:this.state.modalState})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(Se.a,{color:"secondary",variant:"extended","aria-label":"Add",id:"dash-addBtn",onClick:this.toggleModal},o.a.createElement(ke.a,null)))}}]),t}(o.a.Component))),Vt=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"Settings Works!")}}]),t}(n.Component),Bt=(a(389),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"about"},o.a.createElement(Ae.a,{container:!0,justify:"center",alignItems:"center"},o.a.createElement(Ae.a,{item:!0,xs:12,lg:8},o.a.createElement(T.a,{className:"about-card"},o.a.createElement(Re.a,null,o.a.createElement(G.a,{variant:"h4",align:"center"},"Thanks for using Goaler!"),o.a.createElement("br",null),o.a.createElement(G.a,{variant:"h5",align:"center"},"Contact me ",o.a.createElement("a",{href:"mailto:leewarrick@gmail.com",rel:"noopener noreferrer",target:"_BLANK"},"here")),o.a.createElement("br",null),o.a.createElement(G.a,{variant:"h6",align:"center"},"\xa9 Lee Warrick 2019. All Rights Reserved."))))))}}]),t}(n.Component)),Wt=(a(391),function(e){var t=e.component,a=e.user,n=Object(h.a)(e,["component","user"]);return o.a.createElement(S.a,Object.assign({},n,{render:function(e){return a?o.a.createElement(t,Object.assign({},e,n,{user:a})):o.a.createElement(C.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),zt=b(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).componentDidMount=function(){a.props.firebase.auth.onAuthStateChanged(function(e){e?(a.setState({user:e,loading:!1}),a.props.firebase.initializeUser(e.uid)):a.setState({user:null,loading:!1})})},a.signIn=Object(c.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.firebase.signIn();case 2:t=e.sent,a.setState({user:t.user});case 4:case"end":return e.stop()}},e,this)})),a.signOut=function(){a.props.firebase.logout(),a.toggleDrawer()},a.toggleDrawer=function(){a.setState({drawer:!a.state.drawer})},a.state={user:null,loading:!0,from:null,drawer:!1},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(k.a,{basename:"/Goaler"},o.a.createElement(V,{status:this.state.loading},o.a.createElement("div",{className:"App"},o.a.createElement(_,{user:this.state.user,login:this.signIn,toggleDrawer:this.toggleDrawer}),o.a.createElement(M.a,{anchor:"right",open:this.state.drawer,onClose:this.toggleDrawer},o.a.createElement(Oe,{logout:this.signOut,toggleDrawer:this.toggleDrawer})),o.a.createElement(S.a,{path:"/login",render:function(t){return o.a.createElement(H,Object.assign({},t,{user:e.state.user,login:e.signIn}))}}),o.a.createElement(Wt,{user:this.state.user,exact:!0,path:"/about",component:Bt}),o.a.createElement(Wt,{user:this.state.user,exact:!0,path:"/",component:Ut}),o.a.createElement(Wt,{user:this.state.user,exact:!0,path:"/settings",component:Vt}))))}}]),t}(n.Component)),Yt=a(170),Jt=a.n(Yt),qt=a(167),Kt=a.n(qt),Qt=a(168),$t=a.n(Qt),Xt=a(169),Zt=a.n(Xt),_t=a(95),ea=a.n(_t),ta=Object(Xe.createMuiTheme)({palette:{type:"dark",primary:{main:Kt.a[900]},secondary:{main:$t.a[400]},error:Zt.a,warn:ea.a,contrastThreshold:3,tonalOffset:.5},typography:{useNextVariants:!0}});a(396),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(E.Provider,{value:new j},o.a.createElement(Xe.MuiThemeProvider,{theme:ta},o.a.createElement(Jt.a,null),o.a.createElement(zt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[171,2,1]]]);
//# sourceMappingURL=main.53020742.chunk.js.map