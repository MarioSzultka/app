(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=(a(31),a(18)),i=a(6),u=a(7),m=a(9),s=a(8),p=a(10),d=a(2),h=a(11),E=function(e){var t=e.location.location.pathname,a="";return e.data.map(function(n){if(n.path===t){var c=e.data.indexOf(n);return a=r.a.createElement("header",null,r.a.createElement("img",{src:e.data[c].image,alt:"fotka"}))}return a=r.a.createElement("header",null,r.a.createElement("img",{src:e.data[0].image,alt:"fotka"}))}),a},f=function(e){var t=e.data;return r.a.createElement(h.c,{render:function(e){return r.a.createElement(E,{data:t,location:e})}})},g=function(e){var t=e.data.map(function(e){return r.a.createElement("li",{key:e.id,style:{listStyle:"none"}},r.a.createElement(d.c,{to:e.path},e.name))});return r.a.createElement("nav",{style:{border:"2px solid black"}},r.a.createElement("ul",null,t))},b=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Dzie\u0144 dobry - Strona G\u0142\xf3wna"),r.a.createElement("h3",null," Tytu\u0142 1"),r.a.createElement("span",null,"Autor tekstu"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quod quis reiciendis totam odit quae iusto error pariatur. Maxime molestias nemo veniam accusamus nihil facilis adipisci assumenda cum quod nam."))},y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Zobacz Nasze Produkty"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"products/car"},"Samochody")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"products/bike"},"Rowery")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"products/boat"},"\u0141\xf3d\u017a"))))}}]),t}(n.Component),v=function(e){var t=e.location.pathname.lastIndexOf("/"),a=e.location.pathname.substr(0,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"PRODUCT"),r.a.createElement("p",null,e.match.params.id),r.a.createElement(d.b,{to:a},"Powr\xf3t do Storny Produkty"),console.log(a))},O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={textarea:"",checkIn:!0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onClick:function(e){return e.preventDefault()}},r.a.createElement("label",{style:{display:"block"}},"Imie ",r.a.createElement("input",{placeholder:"Podaj Imie",type:"text"})," "),r.a.createElement("textarea",{onChange:function(t){e.state.textarea.length>3?e.setState({textarea:t.target.value,checkIn:!1}):e.setState({textarea:t.target.value})},value:this.state.textarea,name:"",id:"",cols:"30",rows:"10"}),r.a.createElement("button",{style:{display:"block"},type:"submit"},"WYSLIJ"),r.a.createElement(h.a,{when:this.state.checkIn,message:"Masz nie wype\u0142niony formularz czy na pewno chcesz wyj\u015b\u0107?"}))}}]),t}(n.Component),j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"ZALOGOWANY"))},k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={login:!1,pass:!1,btnTitle:!1},a.per=a.props.permission,a.change=a.props.changePermission,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t={on:{color:"red",fontSize:"24px"},off:{color:"blue",fontSize:"24px"}};return r.a.createElement(h.e,null,r.a.createElement(h.c,{path:"/login",render:function(){return e.per?r.a.createElement(h.b,{to:"/logged"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Login ",r.a.createElement("input",{value:e.state.login,onChange:function(t){return e.setState({login:t.target.value})},type:"text"})),r.a.createElement("label",null,"Pass ",r.a.createElement("input",{value:e.state.pass,onChange:function(t){return e.setState({pass:t.target.value})},type:"password"})),r.a.createElement("button",{onClick:function(){e.state.login&&e.change()},type:"submit"},"WYSLIJ"),r.a.createElement("button",{style:e.state.btnTitle?t.on:t.off,onClick:function(){return e.setState({btnTitle:!e.state.btnTitle})},type:"reset"},e.state.btnTitle?"Wylacz":"Wlacz"))}}))}}]),t}(n.Component),w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement(h.e,null,r.a.createElement(h.c,{exact:!0,path:"/",component:b}),r.a.createElement(h.c,{exact:!0,path:"/products",component:y}),r.a.createElement(h.c,{path:"/products/:id",component:v}),r.a.createElement(h.c,{path:"/contact",component:O}),r.a.createElement(h.c,{path:"/login",component:function(){return r.a.createElement(k,{changePermission:e.changePermission,permission:e.permission})}}),r.a.createElement(h.c,{path:"/logged",component:j}))))},x=function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Footer"))},S=a(17),P=a.n(S),z=a(24),C=a.n(z),T=a(25),A=a.n(T),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).data=[{id:0,path:"/",image:P.a,name:"START",component:"Home"},{id:1,path:"/products",image:C.a,name:"PRODUKTY",component:"Products"},{id:2,path:"/contact",image:A.a,name:"KONTAKT",component:"Contact"},{id:3,path:"/login",image:P.a,name:"ADMIN",component:"Admin"}],a.state={permission:!1},a.changePermission=function(){return a.setState({permission:!0}),console.log("dziala")},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"wrap"},r.a.createElement(f,{data:Object(o.a)(this.data)}),r.a.createElement("section",null,r.a.createElement(g,{data:Object(o.a)(this.data)}),r.a.createElement(w,{changePermission:this.changePermission.bind(this),permission:this.state.permission,data:this.props})),r.a.createElement(h.c,{component:x})))}}]),t}(n.Component);l.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.bd5218b4.chunk.js.map