(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={list:"ContactList_list__3cB9H",item:"ContactList_item__2vGgK",button:"ContactList_button__atfTp"}},21:function(e,t,n){e.exports={label:"Filter_label__VqnqR",input:"Filter_input__VtWMX"}},27:function(e,t,n){e.exports={container:"Container_container__2yJlW"}},41:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),o=n(4),i=n.n(o),s=n(3),u=n(26),l=(n(40),n(41),n(6)),b=(n(24),n(27)),j=n.n(b);var d=function(e){var t=e.title,n=e.children;return Object(r.jsxs)("div",{className:j.a.container,children:[t&&Object(r.jsx)("h2",{children:t}),n]})},h=function(e){return e.phonebook.contacts},f=function(e){return e.phonebook.filter},m=function(e){var t=h(e);console.log(t);var n=f(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},O=n(5),p=n(28),x=n.n(p),v=Object(O.b)("phonebook/add",(function(e,t){return{payload:{id:x.a.generate(),name:e,number:t}}})),_=Object(O.b)("phonebook/delete"),g=Object(O.b)("phonebook/changeFilter"),y=n(21),C=n.n(y);var w=function(){var e=Object(s.c)(f),t=Object(s.b)();return Object(r.jsxs)("label",{className:C.a.label,children:["Find contact by name",Object(r.jsx)("input",{type:"text",value:e,onChange:function(e){return t(g(e.target.value))},placeholder:"Enter name for search",className:C.a.input})]})},k=n(22),N=n(10),F=n.n(N),L=n(9),T=n.n(L);function P(){var e=Object(c.useState)(""),t=Object(k.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),i=Object(k.a)(o,2),u=i[0],b=i[1],j=Object(s.b)(),d=Object(s.c)(h),f=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":b(r);break;default:return}},m=function(){a(""),b("")};return Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!function(e){return d.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(n)?!function(e){return d.find((function(t){return t.number===e}))}(u)?!0===function(e){if(e.search(/^[A-Za-z]+$/))return!0}(n)?l.b.error("Only letters allowed"):!0===function(e){if(e.search(/^[-+]?[0-9]+$/))return!0}(u)?l.b.error("Only numbers allowed"):!function(e,t){return""===e.trim()||""===t.trim()}(n,u)?j(v(n,u)):l.b.error("Some fields are empty"):l.b.warning("This number is already exist"):l.b.warning("This name is already exist"),m()},className:T.a.form,children:[Object(r.jsxs)("label",{className:T.a.label,children:["Name",Object(r.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:n,onChange:f,className:T.a.input,onKeyPress:function(e){var t=(e=e||window.event).which?e.which:e.keyCode;return!(t<65||t>90)||!(t<97||t>123)||32===t||l.b.warning("Please input letters only")}})]}),Object(r.jsxs)("label",{className:T.a.label,children:["Number",Object(r.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",value:u,onChange:f,className:T.a.input,onKeyPress:function(e){var t=(e=e||window.event).which?e.which:e.keyCode;return!(t>31&&(t<48||t>57))||l.b.warning("Please input numbers only")}})]}),Object(r.jsx)("button",{type:"submit",className:T.a.button,children:"Add contact"})]})}P.propTyper={onSubmit:F.a.func.isRequired};var S=P,E=n(15),A=n.n(E);var D=function(){var e=Object(s.c)(m),t=Object(s.b)();return Object(r.jsxs)(r.Fragment,{children:[0===e.length&&Object(r.jsx)("p",{children:" No contacts "}),Object(r.jsx)("ul",{className:A.a.list,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(r.jsxs)("li",{className:A.a.item,children:[Object(r.jsxs)("p",{children:[c,": ",a]}),Object(r.jsx)("button",{type:"button",className:A.a.button,onClick:function(){return function(e){return t(_(e))}(n)},children:"Delete"})]},n)}))})]})};var q,B=function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(d,{children:[Object(r.jsx)("h1",{children:"Phonebook"}),Object(r.jsx)(S,{})]}),Object(r.jsxs)(d,{title:"Contacts",children:[Object(r.jsx)(w,{}),Object(r.jsx)(D,{})]}),Object(r.jsx)(l.a,{autoClose:3e3})]})},J=n(14),K=n(29),z=n.n(K),G=n(8),I=n(30),M=n.n(I),R=n(16),V=n(2),W=Object(O.c)([],(q={},Object(R.a)(q,v,(function(e,t){var n=t.payload;return[].concat(Object(J.a)(e),[n])})),Object(R.a)(q,_,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),q)),X=Object(O.c)("",Object(R.a)({},g,(function(e,t){return t.payload}))),Z=Object(V.c)({contacts:W,filter:X}),$=[].concat(Object(J.a)(Object(O.d)({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}})),[z.a]),H={key:"phonebook",storage:M.a,blacklist:["filter"]},U=Object(O.a)({reducer:{phonebook:Object(G.g)(H,Z)},middleware:$,devTools:!1}),Q=Object(G.h)(U),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(s.a,{store:U,children:Object(r.jsx)(u.a,{loading:null,persistor:Q,children:Object(r.jsx)(B,{})})})}),document.getElementById("root")),Y()},9:function(e,t,n){e.exports={form:"ContactForm_form__3UuZD",label:"ContactForm_label__3GxCA",input:"ContactForm_input__3TF8x",button:"ContactForm_button__2OXuE"}}},[[52,1,2]]]);
//# sourceMappingURL=main.d1112045.chunk.js.map