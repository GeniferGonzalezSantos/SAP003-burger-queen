(this["webpackJsonpburguer-queen"]=this["webpackJsonpburguer-queen"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/logo.da36972b.png"},34:function(e,t,a){e.exports=a(55)},50:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(29),l=a.n(r),i=a(25),o=a(13),u=a(8),s=a(22),m=a.n(s),d=(m.a.initializeApp({apiKey:"AIzaSyCZ3TKwbopvoC84_7X6CQSyXhS6529Lo6g",authDomain:"burguer-queen-8ec3a.firebaseapp.com",databaseURL:"https://burguer-queen-8ec3a.firebaseio.com",projectId:"burguer-queen-8ec3a",storageBucket:"burguer-queen-8ec3a.appspot.com",messagingSenderId:"914676994781",appId:"1:914676994781:web:3aa341b1f3f95c368b4134"}),m.a.firestore()),b=a(3),p=b.a.create({card:{margin:"2%",padding:"7%",height:"15%",width:"20%",border:"solid",borderRadius:"5px",borderColor:"#00B383",display:"flex",alignItems:"center",justifyContent:"space-around",fontFamily:"Ubuntu, sans-serif",fontSize:"1em"}}),f=function(e){return c.a.createElement("section",{onClick:e.onClick,className:Object(b.b)(p.card)},e.children)},E=b.a.create({btn:{margin:"1% 1% 1% 7%",padding:"5px",border:"1px solid",borderRadius:"5px",borderColor:"#00B383",display:"flex",alignItems:"center",justifyContent:"space-around",fontSize:"1em",backgroundColor:"#00B383",color:"#c5350d"}}),g=function(e){return c.a.createElement("button",{onClick:e.onClick,className:Object(b.b)(E.btn,e.name),id:e.id},e.children)},h=b.a.create({input:{margin:"2%",padding:"5px",border:"none",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center"}}),v=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:e.type,onClick:e.onClick,className:Object(b.b)(h.input),name:e.name,placeholder:e.placeholder,title:e.title,onChange:e.onChange}))};a(50);var j=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),s=Object(u.a)(l,2),m=s[0],b=s[1],p=Object(n.useState)(""),E=Object(u.a)(p,2),h=E[0],j=E[1],O=Object(n.useState)(""),C=Object(u.a)(O,2),y=C[0],x=C[1],k=Object(n.useState)([]),N=Object(u.a)(k,2),w=N[0],S=N[1],I=Object(n.useState)(0),B=Object(u.a)(I,2),R=B[0],z=B[1],q=Object(n.useState)({status:!1}),D=Object(u.a)(q,2),F=D[0],L=D[1],M=Object(n.useState)(""),T=Object(u.a)(M,2),K=T[0],P=T[1],U=Object(n.useState)(""),$=Object(u.a)(U,2),W=$[0],X=$[1];Object(n.useEffect)((function(){d.collection("Menu").get().then((function(e){var t=e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())}));r(t)}))}),[0]);var A=function(e){var t="breakfast"===e.target.id,n=a.filter((function(e){return e.breakfast===t}));return b(n)},J=function(e){w.includes(e)?(e.count++,z(+(R+e.price*e.count))):(e.count=1,S([].concat(Object(i.a)(w),[e]))),z(+(R+e.price))};return console.log(h),c.a.createElement(c.a.Fragment,null,c.a.createElement("main",null,c.a.createElement("div",{key:"itensMenu",className:"btn"},c.a.createElement(g,{id:"breakfast",onClick:A,children:"Manh\xe3"}),c.a.createElement(g,{id:"btn",onClick:A,children:"Tarde"}))),c.a.createElement("article",{className:"article"},c.a.createElement("div",{key:a.id,className:"card-container"},m.map((function(e){return c.a.createElement(f,{key:e.id,onClick:function(){return function(e){e.options?L({status:!0,item:e}):J(e)}(e)}},c.a.createElement("div",{className:"card"},e.name),c.a.createElement("div",{className:"card"},"R$",e.price))}))),!!F.status&&c.a.createElement("section",{className:"s-options"},c.a.createElement("div",null,c.a.createElement("h3",null,"Op\xe7\xf5es"),F.item.options.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement(v,{type:"radio",name:"options",value:e,onClick:function(){return P(e)}}),c.a.createElement("label",null,e))}))),c.a.createElement("div",null,c.a.createElement("h3",null,"Extras"),F.item.extras.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement(v,{type:"radio",name:"extras",value:e,onClick:function(){return X(e)}}),c.a.createElement("label",null,e))})),c.a.createElement(g,{onClick:function(){return function(){if(""!==W){var e=Object(o.a)({},F.item,{price:F.item.price+1,name:"".concat(F.item.name," ").concat(K)});J(e),L({status:!1})}else{var t=Object(o.a)({},F.item,{name:"".concat(F.item.name," ").concat(K)});J(t),L({status:!1})}}()}},"Selecionar")))),c.a.createElement("aside",{className:"aside"},c.a.createElement("form",{className:"container-aside"},c.a.createElement("div",{className:"input"},c.a.createElement(v,{placeholder:"Cliente",onChange:function(e){return x(e.target.value)}}),c.a.createElement(v,{placeholder:"Mesa",onChange:function(e){return j(e.target.value)}})),c.a.createElement("div",{className:"map"},w.map((function(e){return c.a.createElement("p",{key:e.id},e.count," x ",e.name,"R$ ",e.price,c.a.createElement("button",{className:"btn-map",onClick:function(t){return t.preventDefault(),function(e){if(1===e.count){var t=R-e.price,a=w.indexOf(e);w.splice(a,1),S(Object(i.a)(w)),z(t)}else{e.count--;var n=R-e.price;z(n)}}(e)},children:"X"}))}))),c.a.createElement("div",{className:"div-enviar"},c.a.createElement("p",null," Total: R$  ",R,"  "),c.a.createElement(g,{type:"button",children:"Enviar",onClick:function(e){return e.preventDefault(),d.collection("Pedidos").add({clientName:y,table:h,order:w,status:"Pendente",time:(new Date).toLocaleString("pt-BR")}).then((function(){S([]),j([""]),x([""]),z(0)})),void console.log("Enviado")}})))))},O=b.a.create({cardKitchen:{"@media (min-width: 1024px)":{margin:"5%",padding:"1%",width:"18vw",height:"18vh",border:"solid",borderRadius:"5px",borderColor:"#00B383",display:"flex",alignItems:"center",justifyContent:"space-around",overflow:"scroll"}},p:{fontFamily:"Ubuntu, sans-serif",fontSize:".8em",justifyContent:"space-around"}}),C=function(e){return c.a.createElement("section",{onClick:e.onClick,className:Object(b.b)(O.cardKitchen,O.p)},e.children)};var y=b.a.create({main:{"@media (min-width: 1024px)":{height:"30%",display:"flex",flexFlow:"row wrap",flexGrow:"1",alignContent:"flex-start",overflowY:"scroll"}}}),x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){d.collection("Pedidos").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())}));r(t)}))})),c.a.createElement("main",{className:Object(b.b)(y.main)},a.map((function(e){return c.a.createElement(C,{key:e.id},c.a.createElement("div",null,c.a.createElement("p",null,"Nome: ",e.clientName),c.a.createElement("p",null,"Mesa: ",e.table),c.a.createElement("h3",null,"Pedidos:"),e.order.map((function(e){return c.a.createElement("p",null,e.name)})),c.a.createElement("p",null,c.a.createElement("b",null,"Status:")," ",e.status),c.a.createElement("p",null,c.a.createElement("b",null,"Tempo:")," ",e.time)))})))},k=a(31),N=a.n(k),w=a(18),S=a(11);var I=b.a.create({nav:{width:"100%",backgroundColor:"#c5350d",height:"8vw",display:"flex",justifyContent:"flex-end"},ul:{marginLeft:"15%",display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"flex-end",fontFamily:"Ubuntu, sans-serif"},li:{listStyleType:"none",margin:"0"},a:{color:"#00B383",textDecoration:"none",fontSize:"2em",fontWeight:"bold",marginInlineEnd:"20px"},logo:{display:"flex",alignItems:"center",justifyContent:"center",width:"100px",height:"100px",borderRadius:"50%",margin:"1%"}}),B=function(){return c.a.createElement(w.a,null,c.a.createElement("nav",{className:Object(b.b)(I.nav)},c.a.createElement("img",{src:N.a,alt:"Logo Burguer Queen",className:Object(b.b)(I.logo)}),c.a.createElement("ul",{className:Object(b.b)(I.ul)},c.a.createElement("li",{className:Object(b.b)(I.li)},c.a.createElement(w.b,{to:"/",className:Object(b.b)(I.a)},"Cliente")),c.a.createElement("li",{className:Object(b.b)(I.li)},c.a.createElement(w.b,{to:"/cozinha",className:Object(b.b)(I.a)},"Cozinha")))),c.a.createElement(S.c,null,c.a.createElement(S.a,{path:"/cozinha"},c.a.createElement(x,null)),c.a.createElement(S.a,{path:"/"},c.a.createElement(j,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.2c3139ad.chunk.js.map