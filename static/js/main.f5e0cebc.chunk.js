(this.webpackJsonpfinsta=this.webpackJsonpfinsta||[]).push([[0],{25:function(e,t,A){},26:function(e,t,A){},41:function(e,t,A){},42:function(e,t,A){},43:function(e,t,A){},51:function(e,t,A){},52:function(e,t,A){"use strict";A.r(t);var a=A(1),n=A(2),s=A.n(n),c=A(27),r=A.n(c),i=A(8),o=A(17),l=A(5),u=A(7),j=A.n(u),d=A(14),p=A(18);A(36),A(38),A(53);p.a.initializeApp({apiKey:"AIzaSyB6ytJ2V5CqADWwu0Y9jtEzrY924PfxVcw",authDomain:"finsta-8e8a4.firebaseapp.com",databaseURL:"https://finsta-8e8a4.firebaseio.com",projectId:"finsta-8e8a4",storageBucket:"finsta-8e8a4.appspot.com",messagingSenderId:"604707364277",appId:"1:604707364277:web:04aa3f34d6dbab3bfd8dfc"});var f=p.a,b=p.a.firestore(),m=p.a.auth(),x=p.a.storage(),h=(A(25),A(26),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),A=t[0],s=t[1],c=Object(n.useState)(""),r=Object(i.a)(c,2),o=r[0],l=r[1],u=Object(n.useState)(!0),p=Object(i.a)(u,2),f=p[0],b=p[1],x=Object(n.useState)(""),h=Object(i.a)(x,2),O=h[0],g=h[1],v=function(e){var t=e.target,A=t.name,a=t.value;"email"===A?s(a):"password"===A&&l(a)},N=function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=8;break}return e.next=5,m.createUserWithEmailAndPassword(A,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,m.signInWithEmailAndPassword(A,o);case 10:a=e.sent;case 11:console.log(a),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),g(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{onSubmit:N,children:[Object(a.jsx)("input",{className:"authInput",name:"email",type:"text",placeholder:"Email",required:!0,value:A,onChange:v}),Object(a.jsx)("input",{className:"authInput",name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:v}),Object(a.jsx)("input",{className:"signInWithGoogleButton",type:"submit",value:f?"Sign up":"Log in "})]}),O&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{className:"errorText",children:O}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]}),Object(a.jsx)("span",{onClick:function(){return b((function(e){return!e}))},children:f?"Have an account? Log in":"Don't have an account? Sign up"})]})}),O=A.p+"static/media/Instagram-Logo.d9be23dd.png",g=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var A;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t.target.name&&(A=new f.auth.GoogleAuthProvider),e.next=4,m.signInWithPopup(A);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"authContainer",children:[Object(a.jsx)("img",{src:O,alt:"Instagram Logo",className:"logoLarge",width:"180"}),Object(a.jsx)("span",{className:"greyLargeText",children:"Sign up to see photos from your friends."}),Object(a.jsx)("button",{name:"google",className:"signInWithGoogleButton",onClick:e,children:"Log in with Google"}),Object(a.jsx)("span",{className:"greyLargeText",children:"OR"}),Object(a.jsx)(h,{}),Object(a.jsx)("span",{className:"greySmallText",children:"By signing up, you agree to our Terms, Data Policy and Cookies Policy"})]})},v=A(29),N=(A(41),function(e){var t,A,n=e.postObj,s=e.userUid,c=e.isOwner,r=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this post?")){e.next=6;break}return e.next=4,b.doc("posts/".concat(n.id)).delete();case 4:return e.next=6,x.refFromURL(n.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(d.a)(j.a.mark((function e(){var t,A;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n.likedUsers).includes(s)){e.next=8;break}return A=t.indexOf(s),t.splice(A,1),e.next=6,b.doc("posts/".concat(n.id)).update({likedUsers:t});case 6:e.next=11;break;case 8:return t.push(s),e.next=11,b.doc("posts/".concat(n.id)).update({likedUsers:t});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"postContainer",children:[Object(a.jsxs)("div",{className:"topInfo",children:[Object(a.jsx)("span",{className:"creatorName",children:n.creatorDisplayName}),c?Object(a.jsx)("div",{className:"deletePostButton",children:Object(a.jsx)("img",{onClick:r,src:"data:image/png;base64,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",alt:"Edit Post",width:"18px"})}):Object(a.jsx)("div",{})]}),Object(a.jsx)("span",{className:"location",children:n.location}),n.attachmentUrl&&Object(a.jsx)("img",{alt:"post",src:n.attachmentUrl,width:"360px",height:"360px"}),Object(a.jsxs)("div",{className:"middleInfo",children:[Object(a.jsx)("div",{className:"postIcons",children:(A=n.likedUsers,A.includes(s)?Object(a.jsx)("svg",{onClick:i,"aria-label":"Unlike",className:"_8-yf5 ",fill:"#ed4956",height:"24",viewBox:"0 0 48 48",width:"24",children:Object(a.jsx)("path",{d:"M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):Object(a.jsx)("svg",{onClick:i,"aria-label":"Like",className:"icon",fill:"#262626",height:"24",viewBox:"0 0 48 48",width:"24",children:Object(a.jsx)("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}))}),(t=n.likedUsers.length,1==t?Object(a.jsxs)("span",{className:"numLikes",children:[" ",t," like "]}):Object(a.jsxs)("span",{className:"numLikes",children:[" ",t," likes "]}))]}),Object(a.jsx)("span",{className:"caption",children:n.caption}),Object(a.jsx)("span",{className:"location"})]})}),P=A(55),y=(A(42),function(e){var t=e.userObj,A=Object(n.useState)(""),s=Object(i.a)(A,2),c=s[0],r=s[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],p=l[1],f=Object(n.useState)(""),m=Object(i.a)(f,2),h=m[0],O=m[1],g=function(){var e=Object(d.a)(j.a.mark((function e(A){var a,n,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.preventDefault(),a="",""===h){e.next=10;break}return n=x.ref().child("".concat(t.uid,"/").concat(Object(P.a)())),e.next=6,n.putString(h,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:a=e.sent;case 10:if(i={caption:c,location:u,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a,creatorDisplayName:t.displayName,likedUsers:[]},!a||!c){e.next=19;break}return e.next=14,b.collection("posts").add(i);case 14:r(""),p(""),O(""),e.next=20;break;case 19:console.log("error",i);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("form",{onSubmit:g,className:"postFactoryContainer",children:[Object(a.jsx)("span",{className:"postFactoryTitle",children:"Create post"}),Object(a.jsx)("span",{className:"postFactoryText",children:"Caption*"}),Object(a.jsx)("input",{className:"postFactoryInput",value:c,onChange:function(e){var t=e.target.value;r(t)},type:"text",placeholder:"e.g. my favorite cookie is...",maxLength:160}),Object(a.jsx)("span",{className:"postFactoryText",children:"Location"}),Object(a.jsx)("input",{className:"postFactoryInput",value:u,onChange:function(e){var t=e.target.value;p(t)},type:"text",placeholder:"e.g. Berlin",maxLength:20}),Object(a.jsxs)("div",{className:"buttonContainer",children:[Object(a.jsx)("input",{className:"fileinput",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],A=new FileReader;A.onloadend=function(e){var t=e.target.result;O(t)},A.readAsDataURL(t)}}),Object(a.jsx)("input",{className:"postButton",type:"submit",value:"post"})]})]})}),w=function(e){var t=e.userObj,A=Object(n.useState)([]),s=Object(i.a)(A,2),c=s[0],r=s[1];return Object(n.useEffect)((function(){b.collection("posts").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(v.a)({id:e.id},e.data())}));r(t)}))}),[]),Object(a.jsxs)("div",{className:"homeContainer",children:[Object(a.jsx)(y,{userObj:t}),Object(a.jsx)("div",{children:c.map((function(e){return Object(a.jsx)(N,{postObj:e,userUid:t.uid,isOwner:e.creatorId===t.uid})}))})]})},k=(A(43),function(e){var t=e.userObj,A=e.refreshUser,s=Object(l.g)(),c=Object(n.useState)(t.displayName),r=Object(i.a)(c,2),o=r[0],u=r[1];Object(n.useEffect)((function(){t.displayName||(t.updateProfile({displayName:t.email}),A())}));var p=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===o){e.next=5;break}return e.next=4,t.updateProfile({displayName:o});case 4:A();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"profileContainer",children:[Object(a.jsx)("span",{className:"title",children:"Edit profile "}),Object(a.jsxs)("form",{onSubmit:p,children:[Object(a.jsx)("span",{className:"logOutSpan",children:"Change username"}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"inputContainer",children:[Object(a.jsx)("input",{onChange:function(e){var t=e.target.value;u(t)},className:"nameInput",type:"text",placeholder:"Display name",value:o}),Object(a.jsx)("input",{className:"profileButton",type:"submit",value:"Submit"})]})]}),Object(a.jsx)("span",{className:"logOutSpan",onClick:function(){m.signOut(),s.push("/")},children:"Log Out"})]})}),D=(A(51),function(e){e.userObj;return Object(a.jsxs)("div",{className:"navigationBar",children:[Object(a.jsx)("div",{className:"contentsLeft",children:Object(a.jsx)("img",{src:O,alt:"logo small",className:"LogoSmall",width:"100"})}),Object(a.jsx)("div",{className:"contentsRight",children:Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{className:"li",children:Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("svg",{"aria-label":"Home",className:"icons",fill:"#262626",viewBox:"0 0 48 48",children:Object(a.jsx)("path",{d:"M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"})})})}),Object(a.jsx)("li",{className:"li",children:Object(a.jsx)(o.b,{to:"/profile",children:Object(a.jsx)("svg",{"aria-label":"Profile",className:"icons",fill:"#262626",viewBox:"0 0 32 32",children:Object(a.jsx)("path",{d:"M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"})})})})]})})})]})}),C=function(e){var t=e.refreshUser,A=e.isLoggedIn,n=e.userObj;return Object(a.jsxs)(o.a,{children:[A&&Object(a.jsx)(D,{userObj:n}),Object(a.jsx)(l.d,{children:A?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.b,{exact:!0,path:"/",children:Object(a.jsx)(w,{userObj:n})}),Object(a.jsx)(l.b,{exact:!0,path:"/profile",children:Object(a.jsx)(k,{userObj:n,refreshUser:t})}),Object(a.jsx)(l.a,{from:"*",to:"/"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.b,{exact:!0,path:"/",children:Object(a.jsx)(g,{})}),Object(a.jsx)(l.a,{from:"*",to:"/"})]})})]})};var S=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),A=t[0],s=t[1],c=Object(n.useState)(null),r=Object(i.a)(c,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){e?(l({email:e.email,displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),e.displayName||l({email:e.email,displayName:e.email.split("@")[0],uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):l(null),s(!0)}))}),[]),Object(a.jsx)("div",{className:"app",children:A?Object(a.jsx)(C,{refreshUser:function(){var e=m.currentUser;l({email:e.email,displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Loading..."})};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.f5e0cebc.chunk.js.map