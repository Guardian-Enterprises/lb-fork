import{u as f,r as C,s as r,p as T,q as g,j as s,m as _,S as M,a as t,L as e,aw as J,C as R,aV as Q,b as U,al as Z,am as ee,w as te,$ as ne,c4 as ae,aj as se,x as ie,P as y,E as re,_ as X,I as le,af as oe,A as ce,a7 as Ae,ab as W,d as O,cu as me,a4 as de,K as he,t as j,H as x}from"./index-ab956fb7.js";const b={username:"lb",channels:[{id:1,name:"guns",members:7,lastMessage:"i have a draco, 2k",sender:"kevin",timestamp:Date.now()-1e3*60*60*4},{id:2,name:"comics",members:134,lastMessage:"whats up, i found this really great comic the other day",sender:"anonymous943",timestamp:Date.now()-1e3*60*60*8},{id:3,name:"cars",members:23,lastMessage:"i have a 2019 mustang for sale",sender:"pirateking32",timestamp:Date.now()-1e3*60*60*12}],messages:{guns:[{content:"i have a draco, 2k",sender:"kevin",timestamp:Date.now()-1e3*60*60*4},{content:"yo, does anyone have any weapons for sale?",sender:"rya2n",timestamp:Date.now()-1e3*60*60*6},{content:"sup",sender:"lb",timestamp:Date.now()-1e3*60*60*17}],comics:[{content:"whats up, i found this really great comic the other day",sender:"anonymous943",timestamp:Date.now()-1e3*60*60*8},{content:"any good cominc recommendations?",sender:"yungblood",timestamp:Date.now()-1e3*60*60*10},{content:"just finished reading the new batman comic, its amazing",sender:"batmanfan123",timestamp:Date.now()-1e3*60*60*24}],cars:[{content:"i have a 2019 mustang for sale",sender:"pirateking32",timestamp:Date.now()-1e3*60*60*12},{content:"anyone know where i can get a good deal on a car?",sender:"anonymous",timestamp:Date.now()-1e3*60*60*14},{content:"i have a 2018 camaro for sale, 15k",sender:"camaroguy",timestamp:Date.now()-1e3*60*60*18},{content:"i have a 2017 mustang for sale, 10k",sender:"mustangguy",timestamp:Date.now()-1e3*60*60*20},{content:"looking for a quite new car in good condition for around 10k, anyone know where i can find one?",sender:"lb",timestamp:Date.now()-1e3*60*60*22}]}};function ue(){var L,k;const a=f(h),o=f(D),[u,i]=C.useState(""),[E,v]=C.useState(""),m=f(y.Settings),A=f(r.APPS.DARKCHAT.channels);C.useEffect(()=>{r.APPS.DARKCHAT.channels.value||T("DarkChat",{action:"getChannels"},b.channels).then(l=>{if(!l)return g("warning","Failed to fetch channels");r.APPS.DARKCHAT.channels.set(l)})},[o]);const S=()=>{T("AccountSwitcher",{action:"getAccounts",app:"DarkChat"},null).then(l=>{var w;if(!l)return g("info","No accounts found");let P=(w=l==null?void 0:l.filter(N=>N!==o))==null?void 0:w.map(N=>({title:N,cb:()=>{T("AccountSwitcher",{action:"switch",app:"DarkChat",account:N}).then(()=>{D.set(N),r.APPS.DARKCHAT.username.set(N),r.APPS.DARKCHAT.channels.reset(),h.set("channels")})}}));R.ContextMenu.set({buttons:[{title:o},...P,{title:e("APPS.DARKCHAT.CHANGE_ACCOUNT"),cb:()=>{h.set("signup"),D.reset(),r.APPS.DARKCHAT.username.reset(),r.APPS.DARKCHAT.channels.reset()}},{title:e("APPS.MAIL.SIGN_OUT_POPUP.TITLE"),color:"red",cb:()=>{R.PopUp.set({title:e("APPS.MAIL.SIGN_OUT_POPUP.TITLE"),description:e("APPS.MAIL.SIGN_OUT_POPUP.DESCRIPTION"),buttons:[{title:e("APPS.MAIL.SIGN_OUT_POPUP.CANCEL")},{title:e("APPS.MAIL.SIGN_OUT_POPUP.PROCEED"),color:"red",cb:()=>{T("DarkChat",{action:"logout"},!0).then(N=>{if(!N)return g("warning","Failed to logout, success returned false");D.reset(),r.APPS.DARKCHAT.username.reset(),r.APPS.DARKCHAT.channels.reset(),h.set("signin")})}}]})}}]})})};return s(_.div,{...M("left",a,.2),className:"animation-container",children:[s("div",{className:"darkchat-header",children:[s("div",{className:"top",children:[t("div",{className:"title",children:e("APPS.DARKCHAT.TITLE")}),s("div",{className:"buttons",children:[t(J,{onClick:()=>{o&&R.PopUp.set({title:e("APPS.DARKCHAT.NEW_ROOM"),description:e("APPS.DARKCHAT.NEW_ROOM_TEXT"),input:{placeholder:e("APPS.DARKCHAT.ROOM_CODE"),type:m!=null&&m.streamerMode?"password":"text",minCharacters:3,onChange:l=>v(l)},buttons:[{title:e("APPS.DARKCHAT.CANCEL")},{title:e("APPS.DARKCHAT.JOIN"),color:"blue",cb:()=>{v(l=>(T("DarkChat",{action:"joinChannel",channel:l},!b.channels.find(P=>P.name===l)&&{timestamp:Date.now(),name:l,members:Math.floor(Math.random()*100),lastMessage:"Welcome to the channel!",sender:"admin"}).then(P=>{if(!P)return g("warning","Failed to join channel");K.set(P),h.set("chat"),r.APPS.DARKCHAT.channels.set([P,...A])}),l))}}]})}}),t(Q,{className:"elipse",onClick:()=>{var l,P,w,N;R.ContextMenu.set({buttons:[{title:e("APPS.DARKCHAT.CHANGE_ACCOUNT"),cb:S},((P=(l=U)==null?void 0:l.value)==null?void 0:P.ChangePassword.DarkChat)&&{title:e("APPS.DARKCHAT.CHANGE_PASSWORD"),cb:()=>{setTimeout(()=>{Z("DarkChat",()=>{})},250)}},((N=(w=U)==null?void 0:w.value)==null?void 0:N.DeleteAccount.DarkChat)&&{title:e("APPS.DARKCHAT.DELETE_ACCOUNT"),color:"red",cb:()=>{setTimeout(()=>{ee("DarkChat",()=>{D.reset(),r.APPS.DARKCHAT.username.set(null),r.APPS.DARKCHAT.channels.set(null),h.set("signin")})},250)}}]})}})]})]}),t(te,{placeholder:e("APPS.DARKCHAT.SEARCH"),theme:"dark",onChange:l=>i(l.target.value)})]}),(A==null?void 0:A.length)===0&&s("div",{className:"no-channels",children:[t("div",{className:"title",children:e("APPS.DARKCHAT.NO_CHATS")}),t("div",{className:"description",children:e("APPS.DARKCHAT.NO_CHATS_TEXT")})]}),t("div",{className:"channels-body",children:(k=(L=A==null?void 0:A.sort((l,P)=>P.timestamp-l.timestamp))==null?void 0:L.filter(l=>l.name.toLowerCase().includes(u.toLowerCase())))==null?void 0:k.map((l,P)=>t(Pe,{channel:l},l.id))})]})}const Pe=({channel:a})=>{const o=f(D),u=f(y.Settings),i=v=>/<!SENT-LOCATION-X=(-?\d*\.?\d*)Y=(-?\d*\.?\d*)!>/.test(v),E=ne(v=>{R.ContextMenu.set({buttons:[{title:e("APPS.DARKCHAT.LEAVE_CHANNEL.TITLE"),color:"red",cb:()=>{R.PopUp.set({title:e("APPS.DARKCHAT.LEAVE_CHANNEL.TITLE"),description:e("APPS.DARKCHAT.LEAVE_CHANNEL.DESCRIPTION"),buttons:[{title:e("APPS.DARKCHAT.LEAVE_CHANNEL.CANCEL")},{title:e("APPS.DARKCHAT.LEAVE_CHANNEL.PROCEED"),cb:()=>{T("DarkChat",{action:"leaveChannel",channel:a.name},!0).then(m=>{if(!m)return g("warning","Failed to leave channel");h.set("channels"),K.set(null);let A=r.APPS.DARKCHAT.channels.value.filter(S=>S.name!==a.name);r.APPS.DARKCHAT.channels.set(A)})}}]})}}]})});return s("div",{...E,className:"channel",onClick:()=>{o&&(K.set(a),h.set("chat"))},children:[s("div",{className:"channel-info",children:[s("div",{className:"members",children:[t(ae,{}),t("span",{children:a.members})]}),s("div",{className:"channel-content",children:[t("div",{className:"channel-name",children:u.streamerMode?"*****":a.name}),a.lastMessage&&s("div",{className:"recent-message",children:[s("b",{children:[a.sender,":"]})," ",i(a.lastMessage)?e("APPS.MESSAGES.SENT_LOCATION_SHORT"):a.lastMessage]})]})]}),s("div",{className:"right",children:[t("div",{className:"timestamp",children:se(a.timestamp)}),t(ie,{})]})]})};function Ce(){const a=f(y.Settings),o=f(K),u=f(D),i=f(h),E=C.useRef(null),[v,m]=C.useState(""),[A,S]=C.useState([]),[L,k]=C.useState(0),[l,P]=C.useState(!1),[w,N]=C.useState(!1);C.useEffect(()=>{var n;re("DarkChat")&&T("DarkChat",{action:"getMessages",page:0,channel:o.name},(n=b.messages)==null?void 0:n[o.name]).then(c=>{c&&c.length>0?(S(c.reverse()),c.length<15&&P(!0)):P(!0)})},[]);const $=n=>{if(l||w)return;let c=document.querySelector("#last");if(!c)return;!he(c)&&(N(!0),T("DarkChat",{action:"getMessages",page:L+1,channel:o.name},null).then(p=>{p&&(p==null?void 0:p.length)>0?(S([...p.reverse(),...A]),N(!1)):P(!0)}),k(p=>p+1))};C.useEffect(()=>{let n=document.querySelector(".chat-wrapper");n.scrollTop=n.scrollHeight},[A]);const G=()=>{if(v.length>0){let n={sender:u,content:v,timestamp:new Date().getTime()};T("DarkChat",{action:"sendMessage",content:v,channel:o.name},!0).then(()=>{m(""),E.current.value="",S([...A,n]);let c=r.APPS.DARKCHAT.channels.value.map(d=>(d.name===o.name&&(d.lastMessage=n.content,d.sender=u,d.timestamp=new Date().getTime()),d));r.APPS.DARKCHAT.channels.set(c)})}},Y=()=>{R.PopUp.set({title:e("APPS.MESSAGES.SEND_LOCATION_POPUP.TITLE"),description:e("APPS.MESSAGES.SEND_LOCATION_POPUP.TEXT"),buttons:[{title:e("APPS.MESSAGES.SEND_LOCATION_POPUP.CANCEL")},{title:e("APPS.MESSAGES.SEND_LOCATION_POPUP.SEND"),cb:()=>{T("Maps",{action:"getCurrentLocation"},{x:"0",y:"0"}).then(n=>{if(!n)return;let c={content:`<!SENT-LOCATION-X=${j(n.x,2)}Y=${j(n.y,2)}!>`,sender:u,timestamp:new Date().getTime()};T("DarkChat",{action:"sendMessage",...c,channel:o.name},!0).then(d=>{if(d){S(H=>[...H,c]),m(""),E.current.value="";let p=r.APPS.DARKCHAT.channels.value.map(H=>(H.name===o.name&&(H.lastMessage=c.content,H.sender=u,H.timestamp=new Date().getTime()),H));r.APPS.DARKCHAT.channels.set(p)}else S(p=>[...p,{...c,delivered:!1}])})})}}]})};X("darkChat:newMessage",n=>{if(o.name!==n.channel)return;let c=r.APPS.DARKCHAT.channels.value.map(d=>(d.name===n.channel&&(d.lastMessage=n.content,d.sender=n.sender,d.timestamp=new Date().getTime()),d));r.APPS.DARKCHAT.channels.set(c),S([...A,{...n,timestamp:new Date().getTime()}])});const q=n=>{if(n)return/<!SENT-LOCATION-X=(-?\d*\.?\d*)Y=(-?\d*\.?\d*)!>/.test(n)};return s(_.div,{...M("right",i,.2),className:"animation-container",children:[t("div",{className:"darkchat-header chat",children:s("div",{className:"top",children:[t(le,{onClick:()=>{h.set("channels"),K.set(null)}}),s("div",{className:"content",children:[t("div",{className:"title",children:a.streamerMode?"*****":o.name}),s("div",{className:"members",children:[o.members," ",o.members===1?e("APPS.DARKCHAT.MEMBER"):e("APPS.DARKCHAT.MEMBERS")]})]}),t(oe,{onClick:()=>{R.PopUp.set({title:e("APPS.DARKCHAT.LEAVE_ROOM"),description:e("APPS.DARKCHAT.LEAVE_ROOM_TEXT"),buttons:[{title:e("APPS.DARKCHAT.CANCEL")},{title:e("APPS.DARKCHAT.LEAVE"),color:"red",cb:()=>{T("DarkChat",{action:"leaveChannel",channel:o.name},!0).then(n=>{if(!n)return g("warning","Failed to leave channel");h.set("channels"),K.set(null);let c=r.APPS.DARKCHAT.channels.value.filter(d=>d.name!==o.name);r.APPS.DARKCHAT.channels.set(c)})}}]})}})]})}),t("div",{className:"chat-wrapper",onScroll:$,children:t("div",{className:"chat-body",children:A.map((n,c)=>{var F;let d,p=null,H=c===0?"last":"",I=n.sender===u?"self":"other",V=((F=A[c+1])==null?void 0:F.sender)===u?"self":"other";if(A[c+1]?d=Math.abs(n.timestamp-A[c+1].timestamp)/36e5:V=void 0,q(n.content)){let B=n.content.match(/X=(-?\d*\.?\d*)Y/)[1],z=n.content.match(/Y=(-?\d*\.?\d*)!>/)[1];p={x:B,y:z}}return s("div",{className:`message ${I}`,id:H,children:[p?t("div",{className:"location",onClick:()=>{ce.patch({active:{name:"Maps",data:{location:[p.y,p.x],name:`${n.sender}'s location`}}})},children:t("div",{className:"img",style:{backgroundImage:'url("https://img.gta5-mods.com/q95/images/mirror-park-garden/2b72f9-20160428154103_1.jpg")'}})}):t("div",{className:"content",children:Ae(n.content)}),A[c+1]&&d>6?s("div",{className:"date",children:[I=="other"&&t("div",{className:"user",children:n.sender}),W(n.timestamp)]}):I!==V&&s("div",{className:"date",children:[I=="other"&&t("div",{className:"user",children:n.sender}),W(n.timestamp)]})]},c)})})}),t("div",{className:"chat-bottom",children:s("div",{className:"input",children:[t(O,{type:"text",placeholder:e("APPS.DARKCHAT.INPUT_PLACEHOLDER"),value:v,ref:E,onChange:n=>m(n.target.value),onKeyDown:n=>{if(n.key==="Enter")return G()}}),s("div",{className:"buttons",children:[t("div",{className:"location",children:t(me,{onClick:Y})}),v.length>0&&t("div",{className:"send",onClick:G,children:t(de,{})})]})]})})]})}function Se(){const[a,o]=C.useState({username:"",password:""}),u=()=>{T("DarkChat",{action:"login",username:a.username,password:a.password},{success:!0}).then(i=>{i&&i.success?(D.set(a.username),r.APPS.DARKCHAT.username.set(a.username),h.set("channels")):i&&i.reason&&(g("error",i.reason),R.PopUp.set({title:e("APPS.DARKCHAT.ERROR"),description:e(`APPS.DARKCHAT.${i.reason.toUpperCase()}`),buttons:[{title:e("APPS.DARKCHAT.OK")}]}))})};return t(_.div,{...M("right","signin",.2),className:"animation-container",children:s("div",{className:"form",children:[t("div",{className:"form-header",children:t("div",{className:"title",children:e("APPS.DARKCHAT.LOGIN")})}),s("div",{className:"form-content",children:[s("div",{className:"item",children:[t("div",{className:"title",children:e("APPS.DARKCHAT.USERNAME")}),t("div",{className:"input",children:t(O,{type:"text",placeholder:"anonymous",maxLength:50,onChange:i=>{o({...a,username:i.target.value.toLowerCase()})}})})]}),s("div",{className:"item",children:[t("div",{className:"title",children:e("APPS.DARKCHAT.PASSWORD")}),t("div",{className:"input",children:t(O,{type:"password",placeholder:"••••••••••",minLength:3,onChange:i=>{o({...a,password:i.target.value})}})})]}),t("div",{className:"button",onClick:()=>u(),children:e("APPS.DARKCHAT.LOGIN")})]}),s("div",{className:"footer",children:[e("APPS.DARKCHAT.NO_ACCOUNT")," ",t("span",{onClick:()=>h.set("signup"),children:e("APPS.DARKCHAT.SIGN_UP")})]})]})})}function pe(){f(U);const[a,o]=C.useState({username:"",password:""}),u=()=>{if(a.username===""||a.password==="")return g("warning","Username or password is empty");T("DarkChat",{action:"register",username:a.username,password:a.password},{success:!0}).then(i=>{if(!i)return g("warning","Darkchat response is null");if(i&&i.success)D.set(a.username),r.APPS.DARKCHAT.username.set(a.username),h.set("channels");else if(i&&i.reason){g("warning",i.reason),R.PopUp.set({title:e("APPS.DARKCHAT.ERROR"),description:e(`APPS.DARKCHAT.${i.reason.toUpperCase()}`),buttons:[{title:e("APPS.DARKCHAT.OK")}]});return}})};return t(_.div,{...M("left","signup",.2),className:"animation-container",children:s("div",{className:"form",children:[t("div",{className:"form-header",children:t("div",{className:"title",children:e("APPS.DARKCHAT.SIGN_UP")})}),s("div",{className:"form-content",children:[s("div",{className:"item",children:[t("div",{className:"title",children:e("APPS.DARKCHAT.USERNAME")}),t("div",{className:"input",children:t(O,{type:"text",placeholder:"anonymous",maxLength:50,onChange:i=>{o({...a,username:i.target.value.toLowerCase()})}})})]}),s("div",{className:"item",children:[t("div",{className:"title",children:e("APPS.DARKCHAT.PASSWORD")}),t("div",{className:"input",children:t(O,{type:"password",placeholder:"••••••••••",minLength:3,onChange:i=>{o({...a,password:i.target.value})}})})]}),t("div",{className:"button",onClick:()=>u(),children:e("APPS.DARKCHAT.SIGN_UP")})]}),s("div",{className:"footer",children:[e("APPS.DARKCHAT.ALREADY_HAVE")," ",t("span",{onClick:()=>h.set("signin"),children:e("APPS.DARKCHAT.LOGIN")})]})]})})}const Te=C.createContext(null),h=x("signup"),K=x(null),D=x(null);function ge(){const a=f(h),[o,u]=C.useState(""),[i,E]=C.useState(!0);return C.useEffect(()=>{if(r.APPS.DARKCHAT.username.value){D.set(r.APPS.DARKCHAT.username.value),E(!1);return}T("DarkChat",{action:"getUsername"},b.username).then(m=>{if(E(!1),!m||!(m!=null&&m.username))return g("warning","Darkchat response is null");D.set(m.username),r.APPS.DARKCHAT.username.set(m.username),m.password?h.set("channels"):R.PopUp.set({title:e("APPS.DARKCHAT.SET_PASSWORD_POPUP.TITLE"),description:e("APPS.DARKCHAT.SET_PASSWORD_POPUP.DESCRIPTION"),input:{type:"password",placeholder:e("APPS.DARKCHAT.SET_PASSWORD_POPUP.PLACEHOLDER"),minLength:3,maxLength:50,onChange:A=>u(A)},buttons:[{title:e("APPS.DARKCHAT.SET_PASSWORD_POPUP.TITLE"),cb:()=>{u(A=>(T("DarkChat",{action:"setPassword",password:A},{success:!0}).then(S=>{if(!S||S!=null&&S.reason)return g("error",S.reason);h.set("channels")}),""))}}]})})},[]),X("darkchat:logout",m=>{if(!m)return g("warning","No username provided to logout");if(!D.value)return g("warning","No username stored in cache to logout");if(m!==(D==null?void 0:D.value))return g("warning","Username provided does not match current logged in username, not logging out");D.set(null),h.set("signin"),r.APPS.DARKCHAT.username.set(null),r.APPS.DARKCHAT.channels.set(null)}),t("div",{className:"darkchat-container",children:!i&&{channels:t(ue,{}),chat:t(Ce,{}),signin:t(Se,{}),signup:t(pe,{})}[a]})}export{K as ActiveChannel,Te as DarkChatContext,D as Username,h as View,ge as default};
