(this["webpackJsonpdollars-to-cents"]=this["webpackJsonpdollars-to-cents"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(5),l=c.n(a),r=(c(11),c(4)),i=c(6),j=(c(12),c(0)),d=[{QUARTER:.25},{DIME:.1},{NICKEL:.05},{PENNY:.01}];var o=function(){var e=Object(s.useState)({QUARTER:4,DIME:0,NICKEL:0,PENNY:0}),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),l=Object(r.a)(a,2),o=l[0],b=l[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"result-container",children:Object(j.jsxs)("div",{className:"result",children:[Object(j.jsxs)("div",{children:["Quarter (0.25)",Object(j.jsx)("div",{children:c.QUARTER||0})]}),Object(j.jsxs)("div",{children:["Dime (0.10)",Object(j.jsx)("div",{children:c.DIME||0})]}),Object(j.jsxs)("div",{children:["Nickel (0.05)",Object(j.jsx)("div",{children:c.NICKEL||0})]}),Object(j.jsxs)("div",{children:["Penny (0.01)",Object(j.jsx)("div",{children:c.PENNY||0})]})]})}),Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)("label",{htmlFor:"value",children:"Value in Dollar"}),Object(j.jsxs)("div",{className:"input-container",children:[Object(j.jsx)("div",{className:"dollar-sign",children:"$"}),Object(j.jsx)("input",{id:"value",type:"number",step:"any",min:"1",onChange:function(e){var t=!1;if(e.target.value.includes(".")&&e.target.value.split(".")[1].length>2&&(t=!0),+e.target.value<=0||t)console.log("error"),b(!0);else{b(!1);var c=function(e){var t,c={},s=Object(i.a)(d);try{for(s.s();!(t=s.n()).done;)for(var n=t.value,a=Object.keys(n).toString(),l=parseFloat(Object.values(n));e>=l;)c[a]=Math.floor(e/l),e=+(e%l).toFixed(2)}catch(r){s.e(r)}finally{s.f()}return c}(e.target.value);n(c)}},defaultValue:"1"})]}),Object(j.jsx)("div",{className:"error",children:o?Object(j.jsx)("span",{className:"warning",children:"Only positive decimal values allowed."}):Object(j.jsxs)("span",{children:["Enter a value above. Example ",Object(j.jsx)("code",{children:"1.67"}),"."]})})]}),Object(j.jsx)("footer",{children:Object(j.jsx)("a",{href:"",children:"Source"})})]})};l.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(o,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1046f5f5.chunk.js.map