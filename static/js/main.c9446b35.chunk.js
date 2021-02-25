(this.webpackJsonpcotizador=this.webpackJsonpcotizador||[]).push([[0],{22:function(e,n,c){},29:function(e,n,c){},30:function(e,n,c){"use strict";c.r(n);var t=c(1),a=c.n(t),i=c(7),r=c.n(i),o=(c(22),c(9)),s=c(2),l=c(3),j=c(10),d=c(13);function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}var u,O,x,h,m,p,g,v,f,k,C,F,N,w,y=c(0),z=l.a.div(u||(u=Object(s.a)(["\n    display: flex;\n    margin-bottom: 1rem;\n    align-items: center;\n"]))),S=l.a.label(O||(O=Object(s.a)(["\n    flex: 0 0 100px;\n"]))),A=l.a.select(x||(x=Object(s.a)(["\n    display:block;\n    width: 100%;\n    padding: 1rem;\n    border: 1px solid #e1e1e1;\n    --webkit-appearance: none;\n"]))),D=l.a.input(h||(h=Object(s.a)(["\n    margin: 0 1rem;\n"]))),E=l.a.button(m||(m=Object(s.a)(["\n    background-color: #00838F;\n    font-size: 16px;\n    width: 100%;\n    padding: 1rem;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    border: none;\n    transition: background-color .3s ease;\n    margin-top: 2rem;\n    &:hover{\n        cursor: pointer;\n        background-color: #26c6da;\n    }\n"]))),P=l.a.div(p||(p=Object(s.a)(["\n    background-color: red;\n    color: white;\n    padding: 1rem;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 2rem;\n"]))),T=function(e){var n=e.guardarResumen,c=e.guardarCargando,a=Object(t.useState)({marca:"",year:"",plan:""}),i=Object(o.a)(a,2),r=i[0],s=i[1],l=Object(t.useState)(!1),b=Object(o.a)(l,2),u=b[0],O=b[1],x=r.marca,h=r.year,m=r.plan,p=function(e){s(Object(d.a)(Object(d.a)({},r),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(y.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==x.trim()&&""!==h.trim()&&""!==m.trim()){O(!1);var t=2e4,a=function(e){return(new Date).getFullYear()-e}(h);t-=3*a*t/100,t=function(e){var n;switch(e){case"europeo":n=1.3;break;case"americano":n=1.15;break;case"asiatico":n=1.05}return n}(x)*t;var i=function(e){return"basico"===e?1.2:1.5}(m);t=parseFloat(i*t).toFixed(2),console.log(t),c(!0),setTimeout((function(){c(!1),n({cotizacion:t,datos:r})}),3e3)}else O(!0)},children:[u?Object(y.jsx)(P,{children:"Todos los campos son obligatorios"}):null,Object(y.jsxs)(z,{children:[Object(y.jsx)(S,{children:"Marca"}),Object(y.jsxs)(A,{name:"marca",value:x,onChange:p,children:[Object(y.jsx)("option",{value:"",children:"-- Seleccione --"}),Object(y.jsx)("option",{value:"americano",children:"Americano"}),Object(y.jsx)("option",{value:"europeo",children:"Europeo"}),Object(y.jsx)("option",{value:"asiatico",children:"Asiatico"})]})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(S,{children:"A\xf1o"}),Object(y.jsxs)(A,{name:"year",value:h,onChange:p,children:[Object(y.jsx)("option",{value:"",children:"-- Seleccione --"}),Object(y.jsx)("option",{value:"2021",children:"2021"}),Object(y.jsx)("option",{value:"2020",children:"2020"}),Object(y.jsx)("option",{value:"2019",children:"2019"}),Object(y.jsx)("option",{value:"2018",children:"2018"}),Object(y.jsx)("option",{value:"2017",children:"2017"}),Object(y.jsx)("option",{value:"2016",children:"2016"}),Object(y.jsx)("option",{value:"2015",children:"2015"}),Object(y.jsx)("option",{value:"2014",children:"2014"}),Object(y.jsx)("option",{value:"2013",children:"2013"}),Object(y.jsx)("option",{value:"2012",children:"2012"})]})]}),Object(y.jsxs)(z,{children:[Object(y.jsx)(S,{children:"Plan"}),Object(y.jsx)(D,{type:"radio",name:"plan",value:"basico",checked:"basico"===m,onChange:p})," Basico",Object(y.jsx)(D,{type:"radio",name:"plan",value:"completo",checked:"completo"===m,onChange:p})," Completo"]}),Object(y.jsx)(E,{type:"submit",children:"Cotizar"})]})},B=l.a.div(g||(g=Object(s.a)(["\n    padding: 1rem;\n    text-align: center;\n    background-color: #00838f;\n    color: #fff;\n    margin-top: 1rem;\n"]))),M=function(e){var n=e.datos,c=n.marca,t=n.year,a=n.plan;return""===c||""===t||""===a?null:Object(y.jsxs)(B,{children:[Object(y.jsx)("h2",{children:"Resumen de Cotizacion"}),Object(y.jsxs)("ul",{children:[Object(y.jsxs)("li",{children:["Marca: ",b(c)]}),Object(y.jsxs)("li",{children:["A\xf1o del auto: ",t]}),Object(y.jsxs)("li",{children:["Plan: ",b(a)]})]})]})},R=c(33),I=c(32),J=l.a.p(v||(v=Object(s.a)(["\n    background-color: rgb(127, 224, 237);\n    margin-top: 2rem;\n    padding: 1rem;\n    text-align: center;\n"]))),L=l.a.div(f||(f=Object(s.a)(["\n    text-align: center;\n    padding: .5rem;\n    border: 1px solid #26c6da;\n    background-color: rgb(127, 224, 237);\n    margin-top: 1rem;\n    position: relative;\n"]))),U=l.a.p(k||(k=Object(s.a)(["\n    color: #00838f;\n    padding: 1rem;\n    text-transform: uppercase;\n    font-weight: bold;\n    margin: 0;\n"]))),Y=function(e){var n=e.cotizacion;return 0===n?Object(y.jsx)(J,{children:"Elige marca, a\xf1o y tipo de seguro"}):Object(y.jsx)(L,{children:Object(y.jsx)(R.a,{component:"p",className:"resultado",children:Object(y.jsx)(I.a,{classNames:"resultado",timeout:{enter:500,exit:500},children:Object(y.jsxs)(U,{children:["El total es: $ ",n]})},n)})})},$=(c(29),function(){return Object(y.jsxs)("div",{className:"sk-circle",children:[Object(y.jsx)("div",{className:"sk-circle1 sk-child"}),Object(y.jsx)("div",{className:"sk-circle2 sk-child"}),Object(y.jsx)("div",{className:"sk-circle3 sk-child"}),Object(y.jsx)("div",{className:"sk-circle4 sk-child"}),Object(y.jsx)("div",{className:"sk-circle5 sk-child"}),Object(y.jsx)("div",{className:"sk-circle6 sk-child"}),Object(y.jsx)("div",{className:"sk-circle7 sk-child"}),Object(y.jsx)("div",{className:"sk-circle8 sk-child"}),Object(y.jsx)("div",{className:"sk-circle9 sk-child"}),Object(y.jsx)("div",{className:"sk-circle10 sk-child"}),Object(y.jsx)("div",{className:"sk-circle11 sk-child"}),Object(y.jsx)("div",{className:"sk-circle12 sk-child"})]})}),q=l.a.header(C||(C=Object(s.a)(["\n    background-color: #26C6DA;\n    padding: 10px;\n    font-weight: bold;\n    color: #FFFFFF;\n"]))),G=l.a.h1(F||(F=Object(s.a)(["\n    font-size: 2rem;\n    margin:0;\n    font-family: 'Slabo 27px', serif;\n    text-align : center;\n"]))),H=function(e){var n=e.titulo;return Object(y.jsx)(q,{children:Object(y.jsx)(G,{children:n})})},K=l.a.div(N||(N=Object(s.a)(["\n  max-width: 600px;\n  margin: 0 auto;\n"]))),Q=l.a.div(w||(w=Object(s.a)(["\n  background-color: #fff;\n  padding: 3rem;\n"])));var V=function(){var e=Object(t.useState)({cotizacion:0,datos:{marca:"",year:"",plan:""}}),n=Object(o.a)(e,2),c=n[0],a=n[1],i=Object(t.useState)(!1),r=Object(o.a)(i,2),s=r[0],l=r[1],j=c.cotizacion,d=c.datos;return Object(y.jsxs)(K,{children:[Object(y.jsx)(H,{titulo:"Cotizador de seguros"}),Object(y.jsxs)(Q,{children:[Object(y.jsx)(T,{guardarResumen:a,guardarCargando:l}),s?Object(y.jsx)($,{}):Object(y.jsxs)(t.Fragment,{children:[Object(y.jsx)(M,{datos:d}),Object(y.jsx)(Y,{cotizacion:j})," "]})]})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,i=n.getLCP,r=n.getTTFB;c(e),t(e),a(e),i(e),r(e)}))};r.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(V,{})}),document.getElementById("root")),W()}},[[30,1,2]]]);
//# sourceMappingURL=main.c9446b35.chunk.js.map