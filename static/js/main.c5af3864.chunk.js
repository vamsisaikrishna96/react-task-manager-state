(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(7),a=c.n(i),r=(c(13),c(6)),o=c(5),d=c(8),u=(c(14),c(15),c(0)),l=function(){return Object(u.jsx)("div",{className:"actions-container",children:Object(u.jsx)("button",{className:"add-button",children:"Add"})})},j=(c(17),c(18),function(e){var t=e.task,c=e.removeFromList,n=e.setAsChecked;return Object(u.jsxs)("div",{className:"task ".concat(t.checked?"checked":""),onDoubleClick:function(){return n(t.id)},children:[Object(u.jsx)("div",{className:"task-detail",children:t.detail}),Object(u.jsx)("span",{className:"delete",onClick:function(){return c(t.id)},children:"X"})]})}),h=(c(19),function(e){var t=e.tasks,c=e.removeFromList,n=e.setAsChecked;return Object(u.jsx)(u.Fragment,{children:t&&(null===t||void 0===t?void 0:t.length)?t.map((function(e){return Object(u.jsx)(j,{task:e,removeFromList:c,setAsChecked:n},e.id)})):Object(u.jsx)("p",{children:"No Tasks. Please click on add to add one."})})}),k=function(e){var t=e.tasks,c=e.removeFromList,n=e.setAsChecked;return Object(u.jsxs)("div",{className:"task-container",children:[Object(u.jsx)(l,{}),Object(u.jsx)(h,{tasks:t,removeFromList:c,setAsChecked:n})]})};var b=function(){var e=Object(n.useState)([{id:0,detail:"homework",checked:!1},{id:1,detail:"classwork",checked:!1},{id:2,detail:"officework",checked:!1}]),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){console.log("added test")}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("h1",{children:"Task Manager"}),Object(u.jsx)(k,{tasks:c,removeFromList:function(e){console.log(e,"id"),s(Object(o.a)(c.filter((function(t){return t.id!==e}))))},setAsChecked:function(e){s((function(t){return Object(o.a)(t.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{checked:!t.checked}):t})))}))}})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),f()}],[[20,1,2]]]);
//# sourceMappingURL=main.c5af3864.chunk.js.map