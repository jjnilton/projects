(this.webpackJsonpbin2dec=this.webpackJsonpbin2dec||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(4),i=a.n(c),s=(a(9),a(2)),l=(a(10),a(0)),j=function(e){for(var t=e.toString(),a="",r=t.length-1,n=0;n<t.length;n++)a=+a+t[n]*Math.pow(2,r),r--;return a},o=function(e){var t=e,a=[];if(0===+t)return 0;for(;+t>0;)a.push(+t%2),t=Math.floor(+t/2);return a.reverse().join("")};var d=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),i=Object(s.a)(c,2),d=i[0],u=i[1],h=Object(r.useState)(""),b=Object(s.a)(h,2),v=b[0],m=b[1],p=Object(r.useState)(!1),O=Object(s.a)(p,2),f=O[0],x=O[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h1",{})}),Object(l.jsxs)("div",{className:"converter",children:[Object(l.jsx)("div",{className:"description",children:"Enter a binary number"}),Object(l.jsx)("input",{id:"binaryInput",name:"binary",type:"text",value:a,autoComplete:"off",placeholder:"1011",onChange:function(e){var t=e.target.value;if(n(e.target.value),t.match(/^(-)?[0-1]*(\.[0-1]*)?$/g)){u(!1),x(!1);var a=e.target.value,r=!1;if(a.match(/^-/g)&&(a=a.split("-")[1],r=!0),""===a)m("");else{var c="";if(a.includes(".")){var i=a.split(".")[1];a=a.split(".")[0],c=function(e){for(var t=e,a=0,r=0;r<t.length;r++)a+=1*t[r]/Math.pow(2,r+1);return a}(i)}var s=c?j(a)+c:j(a);m(r?"-"+s:s)}}else u(!0)}}),Object(l.jsx)("label",{htmlFor:"binaryInput",children:"Binary"}),d?Object(l.jsx)("div",{className:"error",children:Object(l.jsx)("span",{children:"Invalid binary number. Try: '1101' or '11.01'."})}):Object(l.jsx)("div",{className:"hidden"})]}),Object(l.jsx)("div",{className:"equals",children:"="}),Object(l.jsxs)("div",{className:"converter",children:[Object(l.jsx)("div",{className:"description",children:"Enter a decimal number"}),Object(l.jsx)("input",{id:"decimalInput",type:"text",name:"decimal",value:v,autoComplete:"off",placeholder:"1234",onChange:function(e){var t=e.target.value;if(m(e.target.value),t.match(/^-?[0-9]*(\.[0-9]*)?$/g)){x(!1),u(!1);var a=!1;if(t.match(/^-/g)&&(t=t.split("-")[1],a=!0),""===t)n("");else{var r="";t.includes(".")&&(r=function(e){var t=e,a=t.split("."),r=[],n=0;if(0===(t=a[1]/Math.pow(10,a[1].length)))return"";for(;1!==t&&n<13;)t*=2,r.push(Math.floor(t%2)),t>1&&(t=+(t=t.toString().split("."))[1]/Math.pow(10,t[1].length)),n++;return".".concat(r.join(""))}(t),t=t.split(".")[0]);var c=a?"-"+o(t):o(t);n(c+r)}}else x(!0)}}),Object(l.jsx)("label",{htmlFor:"decimalInput",children:"Decimal"}),f?Object(l.jsx)("div",{className:"error",children:Object(l.jsx)("span",{children:"Invalid decimal number. Try: '123' or '1.23'."})}):Object(l.jsx)("div",{className:"hidden"})]})]}),Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("a",{href:"",children:"Source"})})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.f5b47316.chunk.js.map