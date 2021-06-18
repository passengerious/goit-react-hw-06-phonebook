(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={list:"ContactList_list__3cB9H",item:"ContactList_item__2vGgK",button:"ContactList_button__atfTp"}},21:function(e,t,n){e.exports={label:"Filter_label__VqnqR",input:"Filter_input__VtWMX"}},27:function(e,t,n){e.exports={container:"Container_container__2yJlW"}},41:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(3),b=n(26),u=(n(40),n(41),n(9)),l=(n(24),n(27)),j=n.n(l);var d=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{className:j.a.container,children:[t&&Object(c.jsx)("h2",{children:t}),n]})},m=function(e){return e.phonebook.contacts},h=function(e){return e.phonebook.filter},O=function(e){var t=m(e);console.log(t);var n=h(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},f=n(5),p=n(28),x=n.n(p),_=Object(f.b)("phonebook/add",(function(e,t){return{payload:{id:x.a.generate(),name:e,number:t}}})),v=Object(f.b)("phonebook/delete"),g=Object(f.b)("phonebook/changeFilter"),C=n(21),k=n.n(C);var y=function(){var e=Object(s.c)(h),t=Object(s.b)();return Object(c.jsxs)("label",{className:k.a.label,children:["Find contact by name",Object(c.jsx)("input",{type:"text",value:e,onChange:function(e){return t(g(e.target.value))},placeholder:"Enter name for search",className:k.a.input})]})},N=n(22),F=n(10),w=n.n(F),L=n(8),T=n.n(L);function S(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),i=Object(N.a)(o,2),b=i[0],l=i[1],j=Object(s.b)(),d=Object(s.c)(m),h=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":r(c);break;case"number":l(c);break;default:return}},O=function(){r(""),l("")};return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!function(e){return d.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(n)?!function(e){return d.find((function(t){return t.number===e}))}(b)?!function(e,t){return""===e.trim()||""===t.trim()}(n,b)?j(_(n,b)):u.b.error("Some fields are empty"):u.b.warning("This number is already exist"):u.b.warning("This name is already exist"),O()},className:T.a.form,children:[Object(c.jsxs)("label",{className:T.a.label,children:["Name",Object(c.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:n,onChange:h,className:T.a.input})]}),Object(c.jsxs)("label",{className:T.a.label,children:["Number",Object(c.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",value:b,onChange:h,className:T.a.input})]}),Object(c.jsx)("button",{type:"submit",className:T.a.button,children:"Add contact"})]})}S.propTyper={onSubmit:w.a.func.isRequired};var E=S,D=n(15),q=n.n(D);var A=function(){var e=Object(s.c)(O),t=Object(s.b)();return Object(c.jsxs)(c.Fragment,{children:[0===e.length&&Object(c.jsx)("p",{children:" No contacts "}),Object(c.jsx)("ul",{className:q.a.list,children:e.map((function(e){var n=e.id,a=e.name,r=e.number;return Object(c.jsxs)("li",{className:q.a.item,children:[Object(c.jsxs)("p",{children:[a,": ",r]}),Object(c.jsx)("button",{type:"button",className:q.a.button,onClick:function(){return function(e){return t(v(e))}(n)},children:"Delete"})]},n)}))})]})};var B,J=function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)(d,{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(E,{})]}),Object(c.jsxs)(d,{title:"Contacts",children:[Object(c.jsx)(y,{}),Object(c.jsx)(A,{})]}),Object(c.jsx)(u.a,{autoClose:3e3})]})},P=n(14),G=n(29),I=n.n(G),M=n(7),R=n(30),V=n.n(R),W=n(16),X=n(2),z=Object(f.c)([],(B={},Object(W.a)(B,_,(function(e,t){var n=t.payload;return[].concat(Object(P.a)(e),[n])})),Object(W.a)(B,v,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),B)),H=Object(f.c)("",Object(W.a)({},g,(function(e,t){return t.payload}))),K=Object(X.c)({contacts:z,filter:H}),U=[].concat(Object(P.a)(Object(f.d)({serializableCheck:{ignoredActions:[M.a,M.f,M.b,M.c,M.d,M.e]}})),[I.a]),Z={key:"phonebook",storage:V.a,blacklist:["filter"]},Q=Object(f.a)({reducer:{phonebook:Object(M.g)(Z,K)},middleware:U,devTools:!1}),Y=Object(M.h)(Q),$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(s.a,{store:Q,children:Object(c.jsx)(b.a,{loading:null,persistor:Y,children:Object(c.jsx)(J,{})})})}),document.getElementById("root")),$()},8:function(e,t,n){e.exports={form:"ContactForm_form__3UuZD",label:"ContactForm_label__3GxCA",input:"ContactForm_input__3TF8x",button:"ContactForm_button__2OXuE"}}},[[52,1,2]]]);
//# sourceMappingURL=main.7fe66341.chunk.js.map