(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{61:function(n,e,t){},62:function(n,e,t){"use strict";t.r(e);var i,c,r,a,o,s,d,l,A,p,m,x,g,j,b,h,f,u,O,w,v=t(1),k=t.n(v),B=t(28),y=t.n(B),S=t(16),C=t(24),D=t(9),z=t(6),Q=t(4),J=t(3),E=t(2),M="(min-width: 768px)",N="(min-width: 1024px)",P=E.c.nav(i||(i=Object(J.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n  font-size: ",";\n  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);\n\n  .logo {\n    height: 75px;\n  }\n\n  ul {\n    display: flex;\n    align-items: center;\n    list-style-type: none;\n  }\n\n  ul li {\n    color: black;\n\n    img {\n      height: 25px;\n    }\n  }\n\n  ul a {\n    padding: 10px;\n    text-decoration: none;\n  }\n\n  .cartContainer {\n    position: relative;\n  }\n\n  .itemNumber {\n    position: absolute;\n    color: red;\n    border: 1px solid;\n    width: 25px;\n    text-align: center;\n    border-radius: 50%;\n    padding: 2px;\n    bottom: -5px;\n    right: -18px;\n    font-size: ",";\n    color: white;\n    background-color: red;\n    font-weight: bold;\n  }\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.fontSizes.small})),I=E.c.div(c||(c=Object(J.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .cartInfo {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .cartTitle {\n    margin-top: 20px;\n  }\n\n  @media "," {\n    .cartInfo {\n      width: 100%;\n      max-width: 1500px;\n      display: flex;\n\n      * {\n        width: 100%;\n      }\n\n      .sideDiv {\n        max-width: 500px;\n        padding: 0 20px;\n      }\n    }\n  }\n"])),N),L=E.c.div(r||(r=Object(J.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(300px);\n  grid-gap: 10px;\n\n  @media "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),M),T=E.c.div(a||(a=Object(J.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  font-size: ",";\n  a {\n    text-decoration: none;\n    color: black;\n  }\n\n  img {\n    width: 100%;\n  }\n\n  h4 {\n    font-weight: normal;\n  }\n\n  .name {\n    font-size: ",";\n    font-weight: bold;\n  }\n\n  .price {\n    padding-top: 10px;\n  }\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.fontSizes.medium})),Y=E.c.div(o||(o=Object(J.a)(["\n  width: 100%;\n  font-size: ",";\n\n  img {\n    width: 100%;\n  }\n\n  div {\n    width: 90%;\n    margin: auto;\n  }\n\n  .brand {\n    font-weight: normal;\n    margin-top: 20px;\n  }\n\n  .name {\n  }\n\n  .price {\n    margin-top: 10px;\n    font-weight: normal;\n    font-size: ",";\n  }\n\n  button {\n    font-size: ",";\n    margin: 20px 0px;\n    width: 100%;\n    height: 40px;\n    color: white;\n    background-color: black;\n    border: none;\n    text-transform: uppercase;\n\n    &:hover {\n      color: black;\n      border: 1px solid black;\n      background-color: white;\n    }\n  }\n\n  .addedConfirmation {\n    color: green;\n    animation: fadeIn 1s;\n\n    i {\n      padding-right: 5px;\n    }\n  }\n\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  @media "," {\n    display: flex;\n\n    .imgDiv {\n      width: 500px;\n    }\n\n    .sideDiv {\n      align-self: flex-start;\n      max-width: 500px;\n      margin-top: 0px;\n      margin-left: 0px;\n    }\n\n    .price {\n      margin-top: 20px;\n      margin-bottom: 20px;\n    }\n\n    img {\n      width: 500px;\n    }\n  }\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.fontSizes.large}),(function(n){return n.theme.fontSizes.medium}),N),F=E.c.div(s||(s=Object(J.a)(["\n  border: 1px solid;\n  width: 100% !important;\n\n  div {\n    padding: 20px;\n    border-bottom: 1px solid;\n  }\n\n  .lastItem {\n    border-bottom: none;\n  }\n\n  div p i {\n    padding-right: 10px;\n  }\n\n  @media "," {\n    margin-top: 50px !important;\n  }\n"])),N),G=E.c.div(d||(d=Object(J.a)(["\n  display: flex;\n  padding: 20px;\n  font-size: ",";\n  border: 1px solid lightgrey;\n  margin-top: 5px;\n\n  .productImg {\n    width: auto;\n  }\n\n  img {\n    width: 100px;\n    margin-right: 10px;\n  }\n\n  .productInfo {\n    display: flex;\n    flex-direction: column;\n    padding-left: 20px;\n    position: relative;\n    flex-grow: 1;\n  }\n\n  .brand {\n    font-weight: normal;\n  }\n\n  .name {\n    font-weight: normal;\n    margin-bottom: 20px;\n  }\n\n  .price {\n    margin-top: 10px;\n    font-weight: normal;\n  }\n\n  .trash {\n    position: absolute;\n    width: 15px;\n    top: 0px;\n    right: 0px;\n    color: lightgrey;\n  }\n\n  @media "," {\n    height: 250px;\n    width: 100% !important;\n    img {\n      width: auto;\n      height: 100%;\n      width: auto !important;\n    }\n  }\n"])),(function(n){return n.theme.fontSizes.small}),N),H=E.c.div(l||(l=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),W=E.c.div(A||(A=Object(J.a)(["\n  border: 1px solid lightgrey;\n  padding: 10px;\n  margin-top: 20px;\n  max-width: 100%;\n\n  h2 {\n    font-size: ",";\n    margin-bottom: 10px;\n  }\n\n  div {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 2px;\n  }\n\n  .shipping {\n    border-bottom: 1px solid lightgrey;\n    margin-bottom: 2px;\n    padding-bottom: 4px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 5px;\n    width: 100%;\n    color: white;\n    font-weight: bold;\n    text-transform: uppercase;\n    background-color: black;\n\n    &:hover {\n      color: black;\n      background-color: white;\n    }\n  }\n\n  @media "," {\n    margin-top: 5px;\n\n    h2 {\n      font-size: ",";\n    }\n\n    h4 {\n      font-size: 18px;\n    }\n\n    button {\n      font-size: ",";\n    }\n  }\n"])),(function(n){return n.theme.fontSizes.big}),N,(function(n){return n.theme.fontSizes.large}),(function(n){return n.theme.fontSizes.medium})),U=E.c.div(p||(p=Object(J.a)(["\n  border: 1px solid lightgrey;\n  padding: 10px;\n  margin-top: 10px;\n  max-width: 500px;\n\n  .addCoupon {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  i {\n    width: 30px !important;\n    text-align: center;\n    transition: transform 1s linear;\n    transform: ",";\n  }\n  \n\n  .couponInput {\n    display: flex;\n    flex-direction: column;\n\n    input {\n      margin-top: 20px;\n      height: 30px;\n      margin-bottom: 5px;\n    }\n    button {\n      align-self: flex-end;\n      height: 30px;\n      width: 100px;\n      color: black;\n      font-weight: bold;\n      background-color: white;\n\n      &:hover {\n        color: white;\n        background-color: black;\n      }\n    }\n  }\n\n  @media "," {\n    font-size: 18px;\n  }\n\n"])),(function(n){return n.open?"rotateX(180deg)":""}),N),R=E.c.select(m||(m=Object(J.a)(["\n  border: 1px solid black;\n  background-color: white;\n  width: 60px;\n  max-width: 100px;\n  height: 30px;\n"]))),V=E.c.div(x||(x=Object(J.a)(["\n  width: 100%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n\n  .imgTitleContainer {\n    width: 100%;\n    position: relative;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n\n  .titleText {\n    color: white;\n    background: rgba(0, 0, 0, 0.4);\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    h2 {\n      margin-bottom: 25px;\n    }\n  }\n\n  @media "," {\n    .imgTitleContainer {\n      height: 800px;\n      overflow: hidden;\n    }\n\n    video {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translateX(-50%) translateY(-50%);\n      transform: translateX(-50%) translateY(-50%);\n      min-width: 100%;\n      min-height: 100%;\n      width: auto;\n      height: auto;\n      z-index: -1000;\n      overflow: hidden;\n    }\n  }\n"])),M),Z=E.c.button(g||(g=Object(J.a)(["\n  border: 1px solid;\n  width: 125px;\n  height: 40px;\n  cursor: pointer;\n  color: white;\n  font-size: ",";\n  background-color: transparent;\n"])),(function(n){return n.theme.fontSizes.small})),X=E.c.button(j||(j=Object(J.a)(["\n  width: stretch;\n  height: 50px;\n  border: 2px solid;\n  margin: 5px;\n  background-color: transparent;\n  font-size: ",";\n\n  color: ",";\n  border-color: ",";\n"])),(function(n){return n.theme.fontSizes.small}),(function(n){return n.activated?"black":"grey"}),(function(n){return n.activated?"black":"grey"})),q=E.c.div(b||(b=Object(J.a)(["\n  max-width: 1500px;\n  .filterBar {\n    width: 90%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n  }\n\n  .productsContainer {\n    margin-top: 20px;\n  }\n\n  .shopHeading {\n    text-align: center;\n    text-transform: uppercase;\n    margin-top: 50px;\n  }\n\n  @media "," {\n    margin: 0 auto;\n  }\n"])),M),K=E.c.div(h||(h=Object(J.a)(["\n  margin-top: 2px;\n  .goldSilver {\n    display: flex;\n\n    a {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 80%;\n      height: auto;\n      position: relative;\n      z-index: 2;\n      margin: 2px;\n\n      .imgText {\n        color: white;\n        font-size: ",";\n        position: absolute;\n      }\n\n      img {\n        max-width: 100%;\n        z-index: -1;\n        filter: brightness(70%);\n      }\n    }\n  }\n\n  .comingSoon {\n    width: 100%;\n    background-color: orchid;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 2px;\n\n    img {\n      height: 200px;\n      width: 100%;\n      object-fit: cover;\n      filter: brightness(70%);\n    }\n\n    .imgText {\n      color: white;\n      font-size: ",";\n      position: absolute;\n    }\n  }\n  \n  @media "," {\n    .comingSoon {\n      height: 400px;\n\n      img {\n        height: 400px;\n      }\n    }\n\n    .goldSilver {\n      height: 500px;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n    }\n  }\n"])),(function(n){return n.theme.fontSizes.large}),(function(n){return n.theme.fontSizes.large}),N),_=E.c.footer(f||(f=Object(J.a)(["\n  width: 100%;\n  height: 110px;\n  background-color: black;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  bottom: 0px;\n\n  .topFooter {\n    padding: 10px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n\n    div {\n      padding: 5px;\n    }\n\n    input {\n      background-color: grey;\n      width: 175px;\n\n      &:focus {\n        background-color: white;\n      }\n    }\n\n    span {\n      margin-top: 5px;\n      display: flex;\n      align-items: center;\n\n      i {\n        color: grey;\n        font-weight: bold;\n        text-align: center;\n        margin-left: 1px;\n        width: 20px;\n        font-size: 20px;\n        border: 1px solid;\n\n        &:hover {\n          color: white;\n        }\n      }\n    }\n\n    .sM {\n      font-size: 25px;\n      margin-right: 10px;\n      a {\n        color: white;\n      }\n\n      i {\n        padding: 5px;\n        padding-right: 10px;\n\n        &:hover {\n          color: lightgrey;\n        }\n      }\n    }\n  }\n\n  .botFooter {\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    padding: 5px;\n    width: 100%;\n    bottom: 0px;\n    font-size: ",";\n    color: grey;\n  }\n"])),(function(n){return n.theme.fontSizes.verySmall})),$=E.c.div(u||(u=Object(J.a)(["\n  width: 100%;\n  padding: 10px;\n  font-size: ",";\n  text-align: center;\n\n  a {\n    text-decoration: none;\n    color: black;\n  }\n\n  img {\n    height: 150px;\n  }\n\n  h4 {\n    font-weight: normal;\n  }\n\n  .name {\n    font-size: ",";\n    font-weight: bold;\n  }\n\n  .brand {\n    display: none;\n  }\n\n  .price {\n    padding-top: 0px;\n  }\n\n  @media "," {\n    img {\n      height: 300px;\n    }\n  }\n"])),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.fontSizes.small}),M),nn=E.c.div(O||(O=Object(J.a)(["\n  margin-top: 40px;\n\n  .like {\n    padding: 0px 0px 5px 20px;\n  }\n"]))),en=t(0),tn=function(n){var e=n.defaultValue,t=n.changeQuantity;return Object(en.jsxs)(R,{name:"Quantity",value:e,onChange:function(n){return function(n){t(n.target.value)}(n)},children:[Object(en.jsx)("option",{value:"1",children:"1"}),Object(en.jsx)("option",{value:"2",children:"2"}),Object(en.jsx)("option",{value:"3",children:"3"}),Object(en.jsx)("option",{value:"4",children:"4"}),Object(en.jsx)("option",{value:"5",children:"5"}),Object(en.jsx)("option",{value:"6",children:"6"})]})},cn=function(n){var e=n.prop,t=n.changeCart,i=n.remove,c=e.product;return Object(en.jsxs)(G,{children:[Object(en.jsx)("div",{className:"productImg",children:Object(en.jsx)("img",{src:c.imgs.primary,alt:c.name})}),Object(en.jsxs)("div",{className:"productInfo",children:[Object(en.jsx)("h4",{className:"brand",children:c.brand}),Object(en.jsx)("h4",{className:"name",children:c.name}),Object(en.jsx)(tn,{defaultValue:e.quantity,changeQuantity:function(n){t(c,n)}}),Object(en.jsxs)("h4",{className:"price",children:[function(){var n=Math.round(e.quantity*c.price*100)/100;return n.toString().includes(".")&&n.toFixed(2),n}()," \u20ac"]}),Object(en.jsx)("i",{onClick:function(){return i(e.id)},className:"far fa-trash-alt trash"})]})]})},rn=function(n){var e=n.cartItems,t=n.changeCart,i=n.remove,c=Object(v.useState)(),r=Object(D.a)(c,2),a=r[0],o=r[1],s=Object(v.useState)(!1),d=Object(D.a)(s,2),l=d[0],A=d[1];return Object(v.useEffect)((function(){var n=0;e.map((function(e){return n+=e.product.price*e.quantity})),o(n)}),[e]),Object(en.jsxs)(I,{children:[Object(en.jsx)("h2",{className:"cartTitle",children:"Your Cart"}),Object(en.jsxs)("div",{className:"cartInfo",children:[Object(en.jsx)(H,{children:e.map((function(n){return Object(en.jsx)(cn,{prop:n,changeCart:t,remove:i},n.id)}))}),Object(en.jsxs)("div",{className:"sideDiv",children:[Object(en.jsxs)(W,{children:[Object(en.jsx)("h2",{style:{marginBottom:"20px"},children:"Total"}),Object(en.jsxs)("div",{children:[Object(en.jsx)("h4",{style:{fontWeight:"normal"},children:"Products"}),Object(en.jsxs)("h4",{style:{fontWeight:"normal"},children:[a," \u20ac"]})]}),Object(en.jsxs)("div",{className:"shipping",children:[Object(en.jsx)("h4",{style:{fontWeight:"normal"},children:"Shipping"}),Object(en.jsx)("h4",{children:"Free"})]}),Object(en.jsxs)("div",{children:[Object(en.jsx)("h4",{children:"Total"}),Object(en.jsxs)("h4",{children:[a," \u20ac"]})]}),Object(en.jsx)("button",{children:"Buy"})]}),Object(en.jsxs)(U,{open:l,children:[Object(en.jsxs)("div",{className:"addCoupon",onClick:function(){A(!l)},children:[Object(en.jsx)("p",{children:"Add Coupon"})," ",Object(en.jsx)("i",{class:"fas fa-chevron-down"})]}),l&&Object(en.jsxs)("div",{className:"couponInput",children:[Object(en.jsx)("input",{type:"text",placeholder:"Coupon"}),Object(en.jsx)("button",{children:"Use Code"})]})]})]})]})]})},an=t.p+"static/media/titlePic.4c04c12a.jpg",on=t.p+"static/media/Gold.8bdd0406.png",sn=t.p+"static/media/Silver.6ea8cc5c.jpg",dn=t.p+"static/media/Rings.c6ae25dc.jpg",ln=t.p+"static/media/titleVideo.4fdb7de4.mp4",An=function(){var n=Object(v.useState)(!0),e=Object(D.a)(n,2),t=e[0],i=e[1];return Object(v.useEffect)((function(){function n(){window.innerWidth>768?i(!0):i(!1)}return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}})),Object(en.jsxs)("div",{children:[Object(en.jsx)(V,{children:Object(en.jsxs)("div",{className:"imgTitleContainer",children:[t?Object(en.jsx)("video",{width:"100%",height:"800px",autoPlay:!0,loop:!0,muted:!0,children:Object(en.jsx)("source",{src:ln,alt:"",type:"video/mp4"})}):Object(en.jsx)("img",{src:an,alt:""}),Object(en.jsxs)("div",{className:"titleText",children:[Object(en.jsx)("h1",{children:" Beautiful Jewelry"}),Object(en.jsx)("h2",{children:"for Him & Her"}),Object(en.jsx)(z.b,{to:"/shopping-cart/shop",children:Object(en.jsx)(Z,{to:"/Shop",renderAs:z.b,children:"Shop"})})]})]})}),Object(en.jsxs)(K,{children:[Object(en.jsxs)("div",{className:"goldSilver",children:[Object(en.jsxs)(z.b,{to:{pathname:"/shopping-cart/shop",state:{filter:"Gold"}},children:[Object(en.jsx)("img",{src:on,alt:"Gold"}),Object(en.jsx)("div",{className:"imgText",children:"Gold"})]}),Object(en.jsxs)(z.b,{to:{pathname:"/shopping-cart/shop",state:{filter:"Silver"}},children:[Object(en.jsx)("img",{src:sn,alt:"Silver"}),Object(en.jsx)("div",{className:"imgText",children:"Silver"})]})]}),Object(en.jsxs)("div",{className:"comingSoon",children:[Object(en.jsx)("img",{src:dn,alt:"Rings"}),Object(en.jsx)("div",{className:"imgText",children:"Coming Soon"})]})]})]})},pn=t.p+"static/media/logo.efbc6261.png",mn=function(n){var e=n.cartItems;return Object(en.jsxs)(P,{children:[Object(en.jsx)(z.b,{to:"/shopping-cart",children:Object(en.jsx)("img",{className:"logo",src:pn,alt:"Rezze"})}),Object(en.jsxs)("ul",{children:[Object(en.jsx)(z.b,{to:"/shopping-cart",children:Object(en.jsx)("li",{children:"Home"})}),Object(en.jsx)(z.b,{to:"/shopping-cart/shop",children:Object(en.jsx)("li",{children:"Shop"})}),Object(en.jsx)(z.b,{to:"/shopping-cart/cart",children:Object(en.jsxs)("li",{className:"cartContainer",children:[Object(en.jsx)("img",{src:"data:image/png;base64,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",alt:"Cart"}),Object(en.jsx)("p",{className:"itemNumber",children:function(){for(var n=0,t=0;t<e.length;t++)n+=Number(e[t].quantity);return n}()})]})})]})]})},xn=t.p+"static/media/Miami1.27bd940d.jpg",gn=t.p+"static/media/Miami2.cc3eec90.jpg",jn=t.p+"static/media/Cross1.ffd66789.jpg",bn=t.p+"static/media/Cross2.cc8370bd.jpg",hn=t.p+"static/media/CrossOval1.e8d289e6.jpg",fn=t.p+"static/media/CrossOval2.4a62b3a2.jpg",un=t.p+"static/media/Feather1.20224a55.jpg",On=t.p+"static/media/Feather2.93456a18.jpg",wn=t.p+"static/media/Kunai1.f74eb06f.jpg",vn=t.p+"static/media/Kunai2.246673c4.jpg",kn=t.p+"static/media/LongBasic1.ee031131.jpg",Bn=t.p+"static/media/LongBasic2.0ecf0ea6.jpg",yn=[{id:1,name:"Miami Unisex",brand:"Vitaly",material:"Stainless steel",color:"Gold",length:"65 cm",price:"79",imgs:{primary:xn,secondary:gn}},{id:2,name:"Maze Unisex",brand:"Vitaly",material:"Stainless steel",color:"Silver",length:"54 cm",price:"69",imgs:{primary:t.p+"static/media/Maze1.a7e43997.jpg",secondary:t.p+"static/media/Maze2.f8d7b313.jpg"}},{id:3,name:"Nert",brand:"s.Oliver",material:"Stainless steel",color:"Silver",length:"53 cm",price:"59",imgs:{primary:t.p+"static/media/Nert1.093ffb79.jpg",secondary:t.p+"static/media/Nert2.ae39de26.jpg"}},{id:4,name:"Cross Oval Cluter",brand:"Topman",material:"Polished",color:"Silver",length:"61 cm",price:"15.99",imgs:{primary:hn,secondary:fn}},{id:5,name:"Long Basic Necklace",brand:"Urban Classics",material:"Polished",color:"Silver",length:"65 cm",price:"14.99",imgs:{primary:kn,secondary:Bn}},{id:6,name:"Feather",brand:"Kuzzoi",material:"Sterlingsilver",color:"Silver",length:"55 cm",price:"39.90",imgs:{primary:un,secondary:On}},{id:7,name:"Kunai",brand:"Vitaly",material:"Stainless steel",color:"Black",length:"74 cm",price:"69.95",imgs:{primary:wn,secondary:vn}},{id:8,name:"Sentimental",brand:"Emporio Armani",material:"Stainless steel",color:"Gold",length:"65 cm",price:"109",imgs:{primary:t.p+"static/media/Sentimental.477c47c6.jpg",secondary:""}},{id:9,name:"Cross Necklace",brand:"Topman",material:"Steel",color:"Silver",length:"62 cm",price:"10.99",imgs:{primary:jn,secondary:bn}}],Sn=function(n){var e=n.product;return Object(en.jsxs)(z.b,{to:{pathname:"/shoppping-cart/shop/".concat(e.name),state:{product:e}},children:[Object(en.jsx)("img",{src:e.imgs.primary,alt:e.name}),Object(en.jsx)("h4",{className:"brand",children:e.brand}),Object(en.jsx)("h4",{className:"name",children:e.name}),Object(en.jsxs)("h4",{className:"price",children:[e.price," \u20ac"]})]})},Cn=function(n){var e=n.filter;return Object(en.jsx)(L,{children:yn.map((function(n){if(e.includes(n.color))return Object(en.jsx)(T,{children:Object(en.jsx)(Sn,{product:n},n.id)})}))})},Dn=function(n){var e=Object(v.useState)(void 0!==n.location.state?[n.location.state.filter]:["Gold","Silver","Black"]),t=Object(D.a)(e,2),i=t[0],c=t[1],r=function(n){return JSON.stringify(i)===JSON.stringify(n)};return Object(en.jsxs)(q,{children:[Object(en.jsx)("div",{children:Object(en.jsx)("h2",{className:"shopHeading",children:"Explore our Chains"})}),Object(en.jsxs)("div",{className:"filterBar",children:[Object(en.jsx)(X,{activated:r(["Gold","Silver","Black"]),onClick:function(){return c(["Gold","Silver","Black"])},children:"All"}),Object(en.jsx)(X,{activated:r(["Gold"]),onClick:function(){return c(["Gold"])},children:"Gold"}),Object(en.jsx)(X,{activated:r(["Silver"]),onClick:function(){return c(["Silver"])},children:"Silver"}),Object(en.jsx)(X,{activated:r(["Black"]),onClick:function(){return c(["Black"])},children:"Black"})]}),Object(en.jsx)("div",{className:"productsContainer",children:Object(en.jsx)(Cn,{filter:i})})]})},zn={fontSizes:{verySmall:"12px",small:"16px",medium:"22px",big:"32px",large:"48px"},color:{primary:"#59606d"}},Qn=function(n){var e=n.children;return Object(en.jsx)(E.a,{theme:zn,children:e})},Jn=t(32),En=t.n(Jn),Mn=(t(60),{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:8},desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:4},mobile:{breakpoint:{max:464,min:0},items:3}}),Nn=function(){return Object(en.jsx)(En.a,{responsive:Mn,children:yn.map((function(n){return Object(en.jsx)($,{children:Object(en.jsx)(Sn,{product:n})},n.id)}))})},Pn=function(n){var e=n.location.state.product,t=Object(v.useState)(1),i=Object(D.a)(t,2),c=i[0],r=i[1],a=Object(v.useState)(!1),o=Object(D.a)(a,2),s=o[0],d=o[1],l=Object(v.useRef)();return Object(v.useEffect)((function(){setTimeout((function(){d(!1)}),4e3)}),[]),Object(v.useEffect)((function(){window.scrollTo(0,0)})),console.log("render"),Object(en.jsxs)("div",{children:[Object(en.jsxs)(Y,{children:[Object(en.jsx)("div",{className:"imgDiv",children:Object(en.jsx)("img",{src:e.imgs.primary,alt:e.name})}),Object(en.jsxs)("div",{className:"sideDiv",children:[Object(en.jsx)("h4",{className:"brand",children:e.brand}),Object(en.jsx)("h4",{className:"name",children:e.name}),Object(en.jsxs)("h4",{className:"price",children:[e.price," \u20ac"]}),Object(en.jsx)(tn,{defaultValue:c,changeQuantity:function(n){r(n)}}),Object(en.jsx)("button",{onClick:function(){return n.changeCart(e,c),void d(!0)},children:"Add to Cart"}),s&&Object(en.jsxs)("p",{className:"addedConfirmation",ref:l,children:[Object(en.jsx)("i",{className:"fas fa-check"}),"Item Added to Cart"]}),Object(en.jsxs)(F,{children:[Object(en.jsx)("div",{children:Object(en.jsxs)("p",{children:[Object(en.jsx)("i",{className:"fas fa-shipping-fast"}),"1-2 days"]})}),Object(en.jsx)("div",{children:Object(en.jsxs)("p",{children:[Object(en.jsx)("i",{className:"fas fa-box"}),"Free shipping & returns"]})}),Object(en.jsx)("div",{className:"lastItem",children:Object(en.jsxs)("p",{children:[Object(en.jsx)("i",{className:"fas fa-undo-alt"}),"100 Days refund policy"]})})]})]})]}),Object(en.jsxs)(nn,{children:[Object(en.jsx)("h4",{className:"like",children:"You could also like ..."}),Object(en.jsx)(Nn,{})]})]})},In=t.p+"static/media/Helvetica.06113bf7.ttf",Ln=t.p+"static/media/HelveticaNeue.8b0e1de6.ttf",Tn=Object(E.b)(w||(w=Object(J.a)(['\n\n@font-face {\n    font-family: "Helvetica";\n    src: url(',') format ("ttf");\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: "HelveticaNeue";\n    src: url(',') format ("ttf");\n    font-weight: normal;\n    font-style: normal;\n}\n\nh1 {\n    font-size: ',';\n    font-family : "Helvetica";\n}\nh2 {\n    font-size: ',';\n    font-family : "Helvetica";\n}\n\nbody {\n    font-family: "HelveticaNeue";\n}\n'])),In,Ln,(function(n){return n.theme.fontSizes.large}),(function(n){return n.theme.fontSizes.big})),Yn=function(){return Object(en.jsxs)(_,{children:[Object(en.jsxs)("div",{className:"topFooter",children:[Object(en.jsxs)("div",{children:[Object(en.jsx)("p",{children:"Sign in for newsletter"}),Object(en.jsxs)("span",{children:[Object(en.jsx)("input",{placeholder:"adress@mail.com"}),Object(en.jsx)("i",{children:">"})]})]}),Object(en.jsxs)("div",{className:"sM",children:[Object(en.jsx)(z.b,{to:{pathname:"https://Instagram.com"},target:"_blank",children:Object(en.jsx)("i",{className:"fab fa-instagram"})}),Object(en.jsx)(z.b,{to:{pathname:"https://Pinterest.com"},target:"_blank",children:Object(en.jsx)("i",{className:"fab fa-pinterest"})})]})]}),Object(en.jsx)("div",{className:"botFooter",children:Object(en.jsx)("p",{className:"rights",children:"2016-2021 Rezze S.p.A. - All rights reserved"})})]})},Fn=function(){var n=Object(v.useState)([]),e=Object(D.a)(n,2),t=e[0],i=e[1],c=function(n,e){if(t.some((function(e){return e.id===n.id}))){var c=t.findIndex((function(e){return e.id===n.id})),r=Object(C.a)(t);r[c].quantity=e,i(r)}else{var a={id:n.id,product:n,quantity:e};i(t.concat(a))}},r=function(n){var e=Object(C.a)(t);e.splice(e.findIndex((function(e){return e.id===n})),1),i(e)};return console.log("renderApp"),Object(en.jsxs)(Qn,{children:[Object(en.jsx)(Tn,{}),Object(en.jsxs)(z.a,{children:[Object(en.jsx)(mn,{cartItems:t}),Object(en.jsxs)(Q.c,{children:[Object(en.jsx)(Q.a,{path:"/shopping-cart",exact:!0,component:An}),Object(en.jsx)(Q.a,{path:"/shopping-cart/shop",exact:!0,component:Dn}),Object(en.jsx)(Q.a,{path:"/shopping-cart/cart",render:function(n){return Object(en.jsx)(rn,Object(S.a)(Object(S.a)({},n),{},{cartItems:t,changeCart:c,remove:r}))}}),Object(en.jsx)(Q.a,{parth:"/shopping-cart/shop/:name",render:function(n){return Object(en.jsx)(Pn,Object(S.a)(Object(S.a)({},n),{},{changeCart:c}))}})]}),Object(en.jsx)(Yn,{})]})]})};t(61);y.a.render(Object(en.jsx)(k.a.StrictMode,{children:Object(en.jsx)(Fn,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.b5928277.chunk.js.map