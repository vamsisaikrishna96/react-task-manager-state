(this["webpackJsonpreact-task-manager-state"]=this["webpackJsonpreact-task-manager-state"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),c=s(8),i=s.n(c),d=(s(13),s(7)),r=s(4),o=s(5),u=(s(14),s(23)),l=(s(15),s(0)),k=function(t){var e=t.setIsAddingTask,s=t.isAddingTask;return Object(l.jsx)("div",{className:"actions-container",children:Object(l.jsx)("button",{className:"add-button",onClick:e,children:s?"Close":"Add"})})},j=(s(17),s(18),s.p+"static/media/cross.2add4b66.svg"),b=function(t){var e=t.task,s=t.removeFromList,n=t.setAsChecked;return Object(l.jsxs)("div",{className:"task ".concat(e.checked?"checked":""),onDoubleClick:function(){return n(e.id)},children:[Object(l.jsx)("div",{className:"task-detail",children:e.detail}),Object(l.jsx)("span",{className:"delete",onClick:function(){return s(e.id)},children:Object(l.jsx)("img",{src:j,alt:"cross-img",className:"cross-image"})})]})},m=(s(19),function(t){var e=t.tasks,s=t.removeFromList,n=t.setAsChecked,a=t.isAddingTask;return Object(l.jsx)(l.Fragment,{children:e&&(null===e||void 0===e?void 0:e.length)?e.map((function(t){return Object(l.jsx)(b,{task:t,removeFromList:s,setAsChecked:n},t.id)})):a?"":Object(l.jsx)("p",{children:"No Tasks. Please click on add to add one."})})});s(20);function h(t){t.setIsAddingTask;var e=t.taskInput,s=t.setTaskInput,n=t.addTaskToTasks;return Object(l.jsxs)("div",{className:"add-task-container",children:[Object(l.jsxs)("div",{className:"add-task-input-wrapper",children:[Object(l.jsx)("label",{className:"task-label",children:"Enter Task"}),Object(l.jsx)("input",{className:"task-input",value:e,onChange:function(t){return s(t.target.value)}})]}),Object(l.jsx)("button",{className:"submit-button ".concat(null===e||""===e?"disabled":""),disabled:null===e||""===e,onClick:n,children:"Submit"})]})}var O=function(t){var e=t.tasks,s=t.removeFromList,n=t.setAsChecked,a=t.isAddingTask,c=t.setIsAddingTask,i=t.addTaskToTasks,d=t.setTaskInput,r=t.taskInput;return Object(l.jsxs)("div",{className:"task-container",children:[Object(l.jsx)(k,{setIsAddingTask:c,isAddingTask:a}),a?Object(l.jsx)(h,{addTaskToTasks:i,setIsAddingTask:c,setTaskInput:d,taskInput:r}):"",Object(l.jsx)(m,{tasks:e,isAddingTask:a,removeFromList:s,setAsChecked:n})]})};var f=function(){var t=Object(n.useState)([]),e=Object(o.a)(t,2),s=e[0],a=e[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),k=i[0],j=i[1],b=Object(n.useState)(""),m=Object(o.a)(b,2),h=m[0],f=m[1];function T(){j((function(t){return!t}))}function v(t){f(t)}return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("h1",{children:"Task Manager"}),Object(l.jsx)(O,{tasks:s,isAddingTask:k,setIsAddingTask:T,removeFromList:function(t){a((function(e){return Object(r.a)(e.filter((function(e){return e.id!==t})))}))},setAsChecked:function(t){a((function(e){return Object(r.a)(e.map((function(e){return e.id===t?Object(d.a)(Object(d.a)({},e),{},{checked:!e.checked}):e})))}))},taskInput:h,setTaskInput:v,addTaskToTasks:function(){var t={id:Object(u.a)(),detail:h,checked:!1};a((function(e){return e&&(null===e||void 0===e?void 0:e.length)?function(t,e){return[].concat(Object(r.a)(t),[e])}(e,t):[t]})),T(),v("")}})]})})},T=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;s(t),n(t),a(t),c(t),i(t)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),T()}],[[21,1,2]]]);
//# sourceMappingURL=main.bbaf42d3.chunk.js.map