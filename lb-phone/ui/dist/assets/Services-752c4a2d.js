import{u as f,r as C,p as v,q as g,a,F as T,j as i,L as n,m as O,c5 as se,au as X,k as $,bC as oe,C as b,c6 as ce,ay as re,b$ as le,ak as de,b as x,_ as Y,I as me,f as D,a0 as Se,d as Pe,bT as W,a4 as Ee,t as J,K as ue,a7 as K,a8 as pe,A as F,ab as B,P as V,w as he,e as z,g as Ce,h as ee,D as Q,H as q,E as ve,bB as ae,c7 as Ie,c8 as Z,N as te,aB as Ne,i as ge,S as ne,$ as fe,x as be,c9 as Ae}from"./index-9981ad0a.js";const w={companies:[{job:"police",name:"Police",icon:"https://cdn-icons-png.flaticon.com/512/7211/7211100.png",canCall:!0,canMessage:!0,bossRanks:["boss","lieutenant"],open:!0,location:{name:"Mission Row",coords:{x:428.9,y:-984.5}}},{job:"ambulance",name:"Ambulance",icon:"https://cdn-icons-png.flaticon.com/128/1032/1032989.png",canCall:!0,canMessage:!0,bossRanks:["boss","doctor"],open:!0,location:{name:"Pillbox",coords:{x:304.2,y:-587}}},{job:"mechanic",name:"Mechanic",icon:"https://cdn-icons-png.flaticon.com/128/10281/10281554.png",canCall:!0,canMessage:!0,bossRanks:["boss","worker"],open:!1,location:{name:"LS Customs",coords:{x:-336.6,y:-134.3}}},{job:"taxi",name:"Taxi",icon:"https://cdn-icons-png.flaticon.com/128/433/433449.png",canCall:!0,canMessage:!0,bossRanks:["boss","driver"],open:!1,location:{name:"Taxi HQ",coords:{x:984.2,y:-219}}}],company:{job:"police",duty:!0,receiveCalls:!0,isBoss:!0,balance:1e6,employees:[{id:1,name:"Breze",grade:1,gradeLabel:"Officer",canInteract:!0,online:!0},{id:2,name:"Loaf Scripts",grade:2,gradeLabel:"Sergeant",canInteract:!0,online:!0},{id:3,name:"Kash",grade:3,gradeLabel:"Lieutenant",canInteract:!0,online:!1}],grades:[{label:"Officer",grade:1},{label:"Sergeant",grade:2},{label:"Lieutenant",grade:3},{label:"Captain",grade:4}]},messageList:[{id:"1",lastMessage:"Is anyone available to help me?",sender:"Breze",number:"1234567890",company:{name:"Police",icon:"https://cdn-icons-png.flaticon.com/512/7211/7211100.png"},timestamp:Date.now()-1e3*60*60*2},{id:"2",lastMessage:"Hello, how can i help you?",sender:"Loaf Scripts",number:"4802940940",company:{name:"Police",icon:"https://cdn-icons-png.flaticon.com/512/7211/7211100.png"},timestamp:Date.now()-1e3*60*60*4},{id:"3",lastMessage:"Hey, i need backup at the bank",sender:"Sally",number:"2051440412",company:{name:"Police",icon:"https://cdn-icons-png.flaticon.com/512/7211/7211100.png"},timestamp:Date.now()-1e3*60*60*24*2}],messages:{1:[{id:"1",sender:"1234567890",content:"Is anyone available to help me?",timestamp:Date.now()-1e3*60*60*2},{id:"2",sender:"1234567323",content:"Hey, a unit is on its way to your location",timestamp:Date.now()-1e3*60*60*24*2},{id:"3",sender:"1234567890",content:"i'd like to report a crime, i'm at the pier",timestamp:Date.now()-1e3*60*60*24*2}],2:[{id:"1",sender:"4802940940",content:"Hey, can you help me?",timestamp:Date.now()-1e3*60*60*4},{id:"2",sender:"4802940940",content:"I need a unit to my location",timestamp:Date.now()-1e3*60*60*24*5},{id:"3",sender:"4802940940",content:"I need backup at the bank",timestamp:Date.now()-1e3*60*60*24*9}],3:[{id:"1",sender:"2051440412",content:"is there any way you have any job positions available?",timestamp:Date.now()-1e3*60*60*24*2},{id:"2",sender:"2051440412",content:"hello?",timestamp:Date.now()-1e3*60*60*24*4},{id:"3",sender:"2051440412",content:"hey, i have a question",timestamp:Date.now()-1e3*60*60*24*5}]},employees:[{firstname:"John",lastname:"Doe",grade:1,gradeLabel:"Officer",number:"1234567890",online:!0},{firstname:"Loaf",lastname:"Scripts",grade:2,gradeLabel:"Sergeant",number:"4802940940",online:!0},{firstname:"Kash",grade:3,gradeLabel:"Lieutenant",number:"2051440412",online:!1},{firstname:"Sally",grade:4,gradeLabel:"Captain",number:"1234567323",online:!0}]};function Oe(){var P,s,E,p,A,r,I,y,_,U,k,m,h;const e=f(x),[t,o]=C.useState(null),[u,l]=C.useState(null);C.useEffect(()=>{v("Services",{action:"getCompany"},w.company).then(c=>{if(!c)return g("warning","Failed to fetch company data");o(c)})},[]);const d=()=>{b.PopUp.set({title:n("APPS.SERVICES.DEPOSIT_POPUP.TITLE"),description:n("APPS.SERVICES.DEPOSIT_POPUP.DESCRIPTION"),input:{placeholder:n("APPS.SERVICES.DEPOSIT_POPUP.AMOUNT"),onChange:c=>{l(c)},type:"number"},buttons:[{title:n("APPS.SERVICES.DEPOSIT_POPUP.CANCEL")},{title:n("APPS.SERVICES.DEPOSIT_POPUP.PROCEED"),cb:()=>{l(c=>{/^\d+$/.test(c)&&v("Services",{action:"depositMoney",amount:parseInt(c)},parseInt(c)+t.balance).then(N=>{if(typeof N!="number")return g("warning","Balance is not a number, not updating");o({...t,balance:N})})})}}]})},S=()=>{b.PopUp.set({title:n("APPS.SERVICES.WITHDRAW_POPUP.TITLE"),description:n("APPS.SERVICES.WITHDRAW_POPUP.DESCRIPTION"),input:{placeholder:n("APPS.SERVICES.WITHDRAW_POPUP.AMOUNT"),onChange:c=>{l(c)},type:"number"},buttons:[{title:n("APPS.SERVICES.WITHDRAW_POPUP.CANCEL")},{title:n("APPS.SERVICES.WITHDRAW_POPUP.PROCEED"),cb:()=>{l(c=>{if(/^\d+$/.test(c)){if(t.balance-parseInt(c)<0){b.PopUp.set({title:n("APPS.SERVICES.WITHDRAW_POPUP.TITLE"),description:n("APPS.SERVICES.WITHDRAW_POPUP.NOT_ENOUGH_MONEY").format({amount:c}),buttons:[{title:n("APPS.SERVICES.WITHDRAW_POPUP.PROCEED")}]});return}v("Services",{action:"withdrawMoney",amount:parseInt(c)},t.balance-parseInt(c)).then(N=>{if(typeof N!="number")return g("warning","Balance is not a number, not updating");o({...t,balance:N})})}})}}]})};return a(T,{children:t!=null&&t.job?i("div",{className:"actions-container",children:[a("div",{className:"category-title",children:n("APPS.SERVICES.SETTINGS")}),a("section",{children:i(T,{children:[t.duty!==void 0&&((s=(P=e==null?void 0:e.Companies)==null?void 0:P.Management)==null?void 0:s.Duty)!==!1&&i(O.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"item",children:[i("div",{className:"item-data",children:[a(se,{className:"orange"}),i("div",{className:"item-info",children:[a("div",{className:"title",children:n("APPS.SERVICES.DUTY")}),a("div",{className:"description",children:n("APPS.SERVICES.DUTY_DESCRIPTION")})]})]}),a("div",{className:"item-value",children:a(X,{checked:t.duty,onChange:()=>{v("Services",{action:"toggleDuty",duty:!t.duty},!0).then(()=>o({...t,duty:!t.duty}))}})})]}),(t.duty===void 0||t.duty===!0)&&i(O.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"item",children:[i("div",{className:"item-data",children:[a($,{className:"green"}),i("div",{className:"item-info",children:[a("div",{className:"title",children:n("APPS.SERVICES.JOB_CALLS")}),i("div",{className:"description",children:[" ",n("APPS.SERVICES.JOB_CALLS_DESCRIPTION").format({toggle:t.receiveCalls?n("APPS.SERVICES.DISABLE"):n("APPS.SERVICES.ENABLE")})]})]})]}),a("div",{className:"item-value",children:a(X,{checked:t.receiveCalls,onChange:()=>{v("Services",{action:"toggleCalls"},!t.receiveCalls).then(c=>{o({...t,receiveCalls:c})})}})})]})]})}),t.isBoss&&i(T,{children:[a("div",{className:"category-title",children:n("APPS.SERVICES.ACTIONS")}),i("section",{children:[i(O.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"item",children:[i("div",{className:"item-data",children:[a(oe,{className:"green"}),i("div",{className:"item-info",children:[a("div",{className:"title",children:n("APPS.SERVICES.BALANCE")}),a("div",{className:"description",children:"Current balance of the company"})]})]}),a("div",{className:"item-value",children:e.CurrencyFormat.replace("%s",(E=t.balance)==null?void 0:E.toLocaleString())})]}),(((A=(p=e==null?void 0:e.Companies)==null?void 0:p.Management)==null?void 0:A.Deposit)!==!1||((I=(r=e==null?void 0:e.Companies)==null?void 0:r.Management)==null?void 0:I.Withdraw)!==!1)&&i("div",{className:"item",children:[((_=(y=e==null?void 0:e.Companies)==null?void 0:y.Management)==null?void 0:_.Deposit)!==!1&&a("div",{className:"button",onClick:d,children:n("APPS.SERVICES.DEPOSIT_POPUP.TITLE")}),((k=(U=e==null?void 0:e.Companies)==null?void 0:U.Management)==null?void 0:k.Withdraw)!==!1&&a("div",{className:"button",onClick:S,children:n("APPS.SERVICES.WITHDRAW_POPUP.TITLE")})]})]}),a("div",{className:"category-title",children:n("APPS.SERVICES.MANAGE_EMPLOYEES")}),i("section",{children:[((h=(m=e==null?void 0:e.Companies)==null?void 0:m.Management)==null?void 0:h.Hire)!==!1&&i(O.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"item",onClick:()=>{b.PopUp.set({title:n("APPS.SERVICES.HIRE_POPUP.TITLE"),description:n("APPS.SERVICES.HIRE_POPUP.DESCRIPTION"),input:{type:"number",placeholder:n("APPS.SERVICES.HIRE_POPUP.PLACEHOLDER"),onChange:c=>{l(c)}},buttons:[{title:n("APPS.SERVICES.HIRE_POPUP.CANCEL")},{title:n("APPS.SERVICES.HIRE_POPUP.PROCEED"),cb:()=>{l(c=>{if(/^\d+$/.test(c))return v("Services",{action:"hireEmployee",source:parseInt(c)},{id:c,name:"Joe Doe"}).then(N=>{N&&o({...t,employees:[...t.employees,{id:N.id,name:N.name,grade:0,gradeLabel:t.grades[0].label,canInteract:!0}]})}),""})}}]})},children:[i("div",{className:"item-data",children:[a(ce,{className:"blue"}),i("div",{className:"item-info",children:[a("div",{className:"title",children:n("APPS.SERVICES.HIRE")}),a("div",{className:"description",children:n("APPS.SERVICES.HIRE_POPUP.DESCRIPTION")})]})]}),a("div",{className:"item-value",children:a(re,{})})]}),t.employees.map((c,N)=>i(O.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"item",onClick:()=>{if(!c.canInteract||e.Companies.Management.Fire===!1&&e.Companies.Management.Promote===!1)return;const ie=[e.Companies.Management.Promote!==!1&&{title:n("APPS.SERVICES.SET_GRADE"),cb:()=>{setTimeout(()=>{b.ContextMenu.set({buttons:[...t.grades.map(R=>({title:R.label,cb:()=>{v("Services",{action:"setGrade",employee:c.id,grade:R.grade},!0).then(G=>{if(!G)return g("warning","Failed to set grade");o({...t,employees:t.employees.map(H=>(H.id===c.id&&(H.grade=R.grade,H.gradeLabel=R.label),H))})})}}))]})},300)}},e.Companies.Management.Fire!==!1&&{title:n("APPS.SERVICES.FIRE_POPUP.TITLE"),color:"red",cb:()=>{b.PopUp.set({title:n("APPS.SERVICES.FIRE_POPUP.TITLE"),description:n("APPS.SERVICES.FIRE_POPUP.DESCRIPTION").format({name:c.name}),buttons:[{title:n("APPS.SERVICES.FIRE_POPUP.CANCEL")},{title:n("APPS.SERVICES.FIRE_POPUP.PROCEED"),color:"red",cb:()=>{v("Services",{action:"fireEmployee",employee:c.id},!0).then(R=>{if(!R)return g("warning","Failed to fire employee");o({...t,employees:t.employees.filter(G=>G.id!==c.id)})})}}]})}}];b.ContextMenu.set({buttons:ie.filter(R=>R)})},children:[i("div",{className:"item-data",children:[a(le,{}),i("div",{className:"item-info",children:[a("div",{className:"title",children:c.name}),i("div",{className:"description",children:[" ",c.gradeLabel]})]})]}),i("div",{className:"item-value",children:[a("div",{className:"status","data-online":c.online}),a(de,{})]})]},N))]})]})]}):a("div",{className:"no-job",children:n("APPS.SERVICES.UNEMPLOYED")})})}function Re(){const e=f(V.Settings),t=f(V.PhoneNumber),o=f(L),[u,l]=C.useState(0),[d,S]=C.useState(!1),[P,s]=C.useState(!1),[E,p]=C.useState([]),A=C.useRef(null),[r,I]=C.useState({content:"",attachments:[]});C.useEffect(()=>{v("Services",{action:"getMessages",page:0,id:o.id,company:o.job},w.messages[o.id]).then(m=>{if(m&&m.length>0){p([...m.reverse()]);let h=document.querySelector(".chat-container");h.scrollTop=h.scrollHeight}else S(!0)})},[]);const y=()=>{if(r.content.length>0){let m={sender:t,id:o.id,company:o.job,content:r.content,timestamp:new Date};if(e.airplaneMode)return p(h=>[...h,{...m,delivered:!1}]);v("Services",{action:"sendMessage",...m},!0).then(h=>{h||g("error","Failed to send message"),p(c=>[...c,{...m,delivered:h}]),I({content:"",attachments:[]}),A.current.value=""})}},_=()=>{b.PopUp.set({title:n("APPS.MESSAGES.SEND_LOCATION_POPUP.TITLE"),description:n("APPS.MESSAGES.SEND_LOCATION_POPUP.TEXT"),buttons:[{title:n("APPS.MESSAGES.SEND_LOCATION_POPUP.CANCEL")},{title:n("APPS.MESSAGES.SEND_LOCATION_POPUP.SEND"),cb:()=>{v("Maps",{action:"getCurrentLocation"},{x:"0",y:"0"}).then(m=>{if(!m)return g("error","Failed to get location");let h={sender:t,content:`<!SENT-LOCATION-X=${J(m.x,2)}Y=${J(m.y,2)}!>`,attachments:[],id:o.id,company:o.job,timestamp:new Date};v("Services",{action:"sendMessage",...h},!0).then(c=>{p(c?N=>[...N,h]:N=>[...N,{...h,delivered:!1}])})})}}]})},U=()=>{if(d||P)return;let m=document.querySelector("#last");if(!m)return;!ue(m)&&(s(!0),v("Services",{action:"getMessages",page:u+1,id:o.id,company:o.job},null).then(c=>{c&&c.length>0?(p([...c.reverse(),...E]),s(!1),c.length<25&&S(!0)):S(!0)}),l(c=>c+1))};Y("services:newMessage",m=>{if(o.id!==m.channelId||m.sender===t||e.airplaneMode)return;p([...E,{...m,timestamp:new Date}]);let h=document.querySelector(".chat-container");h.scrollTop=h.scrollHeight});const k=m=>{if(m)return/<!SENT-LOCATION-X=(-?\d*\.?\d*)Y=(-?\d*\.?\d*)!>/.test(m)};return i(T,{children:[i("div",{className:"chat-header",children:[a("div",{className:"back",onClick:()=>{M.set("messages"),L.reset()},children:a(me,{})}),i("div",{className:"user",children:[a("img",{src:o.icon??`./assets/img/avatar-placeholder-${e.display.theme}.svg`,className:"avatar"}),a("div",{className:"name",children:o.company??D(o.number)})]}),a(Se,{className:"hidden"})]}),a("div",{className:"chat-container",onScroll:U,children:a("div",{className:"chat-body",children:E.map((m,h)=>a(Le,{index:h,messages:E,message:m,func:{isLocation:k}}))})}),a("div",{className:"chat-bottom",children:i("div",{className:"input",children:[a(Pe,{placeholder:n("APPS.MESSAGES.PLACEHOLDER"),ref:A,value:r.content,onChange:m=>{I({content:m.target.value,attachments:r.attachments})},onKeyDown:m=>{m.key=="Enter"&&y()}}),i("div",{className:"buttons",children:[a("div",{className:"location",children:a(W,{onClick:_})}),r.content.length>0&&a("div",{className:"send",onClick:y,children:a(Ee,{})})]})]})})]})}const Le=({messages:e,message:t,index:o,func:u})=>{var r;const l=f(V.PhoneNumber),d=f(L);let S,P,s,E=o===0?"last":"",p=t.sender===l?"self":"other",A=((r=e[o+1])==null?void 0:r.sender)===l?"self":"other";if(e[o+1]?P=Math.abs(t.timestamp-e[o+1].timestamp)/36e5:A=void 0,u.isLocation(t.content)){let I=t.content.match(/X=(-?\d*\.?\d*)Y/)[1],y=t.content.match(/Y=(-?\d*\.?\d*)!>/)[1];s={x:I,y}}return i("div",{className:`message ${p}`,id:E,"data-id":t.id,children:[S,t.delivered===!1?i("div",{className:"content-wrapper",children:[a("div",{className:"content",children:K(t.content)}),a(pe,{})]}):s?i("div",{className:"location",onClick:()=>{F.patch({active:{name:"Maps",data:{location:[s.y,s.x],name:`${D(t.sender)}'s location`,icon:d.icon}}})},children:[a("div",{className:"img",style:{backgroundImage:'url("https://img.gta5-mods.com/q95/images/mirror-park-garden/2b72f9-20160428154103_1.jpg")'}}),p==="other"&&i("div",{className:"sender",children:[D(t.sender)," ",n("APPS.MESSAGES.SENT_LOCATION")]})]}):t.content&&a("div",{className:"content",children:K(t.content)}),t.delivered===!1?a("div",{className:"status",children:n("APPS.MESSAGES.NOT_DELIVERED")}):e[o+1]&&P>6?a("div",{className:"date",children:B(t.timestamp)}):p!==A&&a("div",{className:"date",children:B(t.timestamp)})]},o)},j=q(null);function Te(){var S,P;const e=f(j),[t,o]=C.useState("all"),[u,l]=C.useState(""),d=s=>{if(!s)return g("error","No number provided");b.PopUp.set({title:n("APPS.SERVICES.CALL_POPUP.TITLE"),description:n("APPS.SERVICES.CALL_POPUP.DESCRIPTION").format({name:D(s)}),buttons:[{title:n("APPS.SERVICES.CALL_POPUP.CANCEL")},{title:n("APPS.SERVICES.CALL_POPUP.PROCEED"),cb:()=>{let E=Q(s);d({...E,number:s})}}]})};return i(O.div,{initial:{opacity:0,y:250},animate:{opacity:1,y:0},exit:{opacity:0,y:250},transition:{duration:.2,ease:"easeInOut"},className:"employee-list",children:[i("div",{className:"employee-list-header",children:[a("div",{className:"close",onClick:()=>j.set(null)}),a("div",{className:"selector",children:["all","available"].map((s,E)=>a("div",{className:"option","data-active":t===s,onClick:()=>o(s),children:n(`APPS.SERVICES.${s.toUpperCase()}`)},E))}),a(he,{placeholder:n("APPS.SERVICES.SEARCH_EMPLOYEES"),onChange:s=>l(s.target.value)})]}),a("div",{className:"employee-list-body",children:(P=(S=e==null?void 0:e.filter(s=>(t==="all"?!0:s.online)&&z(s.firstname,s.lastname).toLowerCase().includes(u.toLowerCase())))==null?void 0:S.sort((s,E)=>E.grade-s.grade))==null?void 0:P.map((s,E)=>i(O.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"employee-item",children:[i("div",{className:"user",children:[a("div",{className:"avatar",children:Ce(s.firstname,s.lastname)}),i("div",{className:"info",children:[z(s.firstname,s.lastname),a("span",{children:s.gradeLabel})]})]}),a("div",{className:"buttons",children:i(T,{children:[a($,{className:s.online&&s.number?"green":"red",onClick:()=>d(s.number)}),a(ee,{className:s.online&&s.number?"green":"red",onClick:()=>{if(!s.number)return g("error","No number provided");let p=Q(s.number);F.patch({active:{name:"Messages",data:{number:s.number,name:p==null?void 0:p.name,avatar:p==null?void 0:p.avatar,view:"messages"}}})}})]})})]},E))})]})}function ye(){var u;const[e,t]=C.useState([]),o=(u=f(F))==null?void 0:u.active;return C.useEffect(()=>{ve("Services")&&v("Services",{action:"getCompanies"},w.companies).then(l=>{if(!l)return g("warning","Failed to fetch companies");t(l)})},[o]),Y("services:updateOpen",l=>{if(!l)return;const{job:d,open:S}=l;t(P=>{const s=P.findIndex(E=>E.job===d);return s===-1?P:(P[s].open=S,[...P])})}),a(T,{children:a("div",{className:"companies-list",children:e.sort((l,d)=>l.open&&!d.open?-1:!l.open&&d.open?1:0).map(l=>a(De,{company:l},l.name))})})}const De=({company:e})=>{var s,E,p,A;const t=f(x),o=()=>{v("Services",{action:"getEmployees",company:e.job},w.employees).then(r=>{if(!r)return g("warning","You do not have permission to view employees.");j.set(r)})},[u,l]=C.useState(!1),d=r=>{var I;!((I=r==null?void 0:r.location)!=null&&I.coords)||!r.name||F.patch({active:{name:"Maps",data:{location:[r.location.coords.y,r.location.coords.x],name:r.name,icon:r.icon}}})},S=(r,I)=>{t.Companies.Enabled&&b.PopUp.set({title:n("APPS.SERVICES.CALL_POPUP.TITLE"),description:n("APPS.SERVICES.CALL_POPUP.DESCRIPTION").format({name:Ne(r)}),buttons:[{title:n("APPS.SERVICES.CALL_POPUP.CANCEL")},{title:n("APPS.SERVICES.CALL_POPUP.PROCEED"),cb:()=>{ge({company:r,companylabel:I})}}]})},P=r=>{v("Services",{action:"getChannelId",company:r.job},"1").then(I=>{if(!I)return g("error","Failed to get channel id");L.set({icon:r.icon,company:r.name,job:r.job,id:I}),M.set("chat")})};return i("div",{className:"item",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),"data-open":e.open,onClick:o,children:[i("div",{className:"info",children:[e.icon&&a("div",{className:"icon",children:a("img",{src:e.icon})}),i("div",{className:"company-details",children:[a("div",{className:"title",children:e.name}),i("div",{className:"location",children:[a(ae,{}),(s=e.location)==null?void 0:s.name]})]})]}),e.open?i("div",{className:"actions",children:[e.customIcon&&a("div",{className:"custom-icon",onClick:r=>{r.stopPropagation(),v("Services",{action:"customIconClick",company:e.job})},children:Ie[e.customIcon]()}),((E=e.location)==null?void 0:E.coords)&&a(W,{className:"orange",onClick:r=>{r.stopPropagation(),d(e)}}),((p=t.Companies)==null?void 0:p.Enabled)!==!1&&e.canCall!==!1&&a($,{className:"green",onClick:r=>{r.stopPropagation(),S(e.job,e.name)}}),e.canMessage!==!1&&a(Z,{className:"green",onClick:r=>{r.stopPropagation(),P(e)}})]}):i(T,{children:[i("div",{className:"actions",onMouseEnter:()=>l(!1),onMouseLeave:()=>l(!0),children:[((A=e.location)==null?void 0:A.coords)&&a(W,{className:"orange",onClick:r=>{r.stopPropagation(),d(e)}}),e.canMessage!==!1&&t.Companies.MessageOffline&&a(Z,{className:"green",onClick:r=>{r.stopPropagation(),P(e)}})]}),a(te,{children:u&&a(O.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeInOut"},className:"closed",children:n("APPS.SERVICES.CLOSED")})})]})]},e.name)};function Me(){const e=f(V.PhoneNumber),[t,o]=C.useState({personal:[],job:[]}),[u,l]=C.useState("personal");return C.useEffect(()=>{v("Services",{action:"getRecentMessages",page:0},w.messageList).then(d=>{if(!d)return g("warning","No recent messages found");o({personal:[...d.filter(S=>S.number===e)],job:[...d.filter(S=>S.number!==e)]})})},[]),Y("services:channelDeleted",d=>{if(!d)return g("error","No channel ID provided");o({personal:t.personal.filter(S=>S.id!==d),job:t.job.filter(S=>S.id!==d)})}),a(T,{children:i("div",{className:"company-messages-container",children:[a("div",{className:"company-messages-header",children:a("div",{className:"selector",children:["personal","job"].map((d,S)=>a("div",{className:"option","data-active":u===d,onClick:()=>l(d),children:n(`APPS.SERVICES.${d.toUpperCase()}`)},S))})}),a(O.section,{...ne(u==="personal"?"right":"left",u,.2),children:(t==null?void 0:t[u])&&(t==null?void 0:t[u].map((d,S)=>a(Ve,{channel:d,type:u},S)))})]})})}const Ve=({channel:e,type:t})=>{var d,S;const o=f(V.Settings),u=fe(()=>{var P;(P=x)!=null&&P.value.Companies.DeleteConversations&&t!=="personal"&&b.ContextMenu.set({buttons:[{title:n("APPS.MESSAGES.DELETE_CONVERSATION.TITLE"),color:"red",cb:()=>{setTimeout(()=>{b.PopUp.set({title:n("APPS.MESSAGES.DELETE_CONVERSATION.TITLE"),description:n("APPS.MESSAGES.DELETE_CONVERSATION.DESCRIPTION"),buttons:[{title:n("APPS.MESSAGES.DELETE_CONVERSATION.CANCEL")},{title:n("APPS.MESSAGES.DELETE_CONVERSATION.DELETE"),color:"red",cb:()=>{v("Services",{action:"deleteChannel",id:e.id},!0).then(s=>{if(!s)return g("error","Failed to delete channel, deleteChannel returned false")})}}]})},100)}}]})}),l=P=>{if(P)return/<!SENT-LOCATION-X=(-?\d*\.?\d*)Y=(-?\d*\.?\d*)!>/.test(P)};return i("div",{...u,className:"item",onClick:()=>{var P,s,E;L.set({...L==null?void 0:L.value,id:e.id,icon:t==="personal"&&((P=e==null?void 0:e.company)!=null&&P.icon)?e.company.icon:`./assets/img/avatar-placeholder-${o.display.theme}.svg`,company:t==="personal"&&((s=e==null?void 0:e.company)!=null&&s.name)?e.company.name:D(e.number),job:(E=e.company)==null?void 0:E.job,number:e.number}),M.set("chat")},children:[t==="personal"&&((d=e==null?void 0:e.company)!=null&&d.icon)?a("img",{src:e.company.icon}):a("img",{src:`./assets/img/avatar-placeholder-${o.display.theme}.svg`}),i("div",{className:"info",children:[i("div",{className:"info-header",children:[a("div",{className:"user",children:t==="personal"&&((S=e==null?void 0:e.company)!=null&&S.name)?e.company.name:D(e.number)}),i("div",{className:"right",children:[a("div",{className:"time",children:B(e.timestamp)}),a(be,{})]})]}),a("div",{className:"message",children:l(e.lastMessage)?n("APPS.MESSAGES.SENT_LOCATION_SHORT"):e.lastMessage})]})]})};function we(){const e=f(x),t=f(M),[o,u]=C.useState([{icon:a(ae,{}),title:n("APPS.SERVICES.COMPANIES"),value:"companies"},{icon:a(ee,{}),title:n("APPS.SERVICES.MESSAGES"),value:"messages"}]);return C.useEffect(()=>{var l,d;((d=(l=e==null?void 0:e.Companies)==null?void 0:l.Management)==null?void 0:d.Enabled)!==!1&&u([...o,{icon:a(Ae,{}),title:n("APPS.SERVICES.ACTIONS"),value:"actions"}])},[]),a("div",{className:"companies-footer",children:o.map((l,d)=>i("div",{className:"item","data-active":t===l.value,onClick:()=>M.set(l.value),children:[l.icon,l.title]},d))})}const M=q("companies"),L=q(null);function Ue(){const e=f(M),t=f(j),o={companies:a(ye,{}),actions:a(Oe,{}),messages:a(Me,{}),chat:a(Re,{})};let u={actions:n("APPS.SERVICES.ACTIONS"),messages:n("APPS.SERVICES.MESSAGES"),companies:n("APPS.SERVICES.COMPANIES")};return i("div",{className:"companies-container","data-view":e,children:[a(te,{children:t&&a(Te,{})}),i(O.div,{...ne(e==="chat"?"left":"right",e,.2),className:"companies-wrapper",children:[e!=="chat"&&a("div",{className:"companies-header",children:a("div",{className:"title",children:u[e]})}),a("div",{className:"companies-body",children:o[e]})]}),e!=="chat"&&a(we,{})]})}export{L as Data,M as View,Ue as default};
