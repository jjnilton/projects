(function(e){function a(a){for(var s,l,n=a[0],o=a[1],u=a[2],d=0,m=[];d<n.length;d++)l=n[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&m.push(i[l][0]),i[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);c&&c(a);while(m.length)m.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],s=!0,n=1;n<t.length;n++){var o=t[n];0!==i[o]&&(s=!1)}s&&(r.splice(a--,1),e=l(l.s=t[0]))}return e}var s={},i={app:0},r=[];function l(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=s,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)l.d(t,s,function(a){return e[a]}.bind(null,s));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=a,n=n.slice();for(var u=0;u<n.length;u++)a(n[u]);var c=o;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";t("85ec")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),i=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{attrs:{id:"app"}},[s("img",{attrs:{alt:"Vue logo",src:t("cf05")}}),s("Form")],1)},r=[],l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"contact"},[t("form",{on:{submit:function(a){return a.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("label",{attrs:{for:"name"}},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.nameValue,expression:"nameValue"}],staticClass:"default",class:{invalid:e.nameError,valid:!e.nameError&&e.isNameValid},attrs:{id:"name",name:"name",type:"text",placeholder:"Your name",disabled:e.loading},domProps:{value:e.nameValue},on:{blur:e.handleNameBlur,focus:e.handleNameFocus,input:function(a){a.target.composing||(e.nameValue=a.target.value)}}}),this.nameError?t("div",{staticClass:"error"},[e._v(" Invalid name. Name should be between 5 and 50 characters. ")]):e._e(),t("label",{attrs:{for:"email"}},[e._v("E-mail")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.emailValue,expression:"emailValue"}],class:{invalid:e.emailError,valid:!e.emailError&&e.isEmailValid},attrs:{id:"email",name:"email",type:"email",placeholder:"your@email.com",disabled:e.loading},domProps:{value:e.emailValue},on:{blur:e.handleEmailBlur,focus:e.handleEmailFocus,input:function(a){a.target.composing||(e.emailValue=a.target.value)}}}),this.emailError?t("div",{staticClass:"error"},[e._v(' Invalid e-mail. Valid example: "name@email.com". ')]):e._e(),t("label",{attrs:{for:"subject"}},[e._v("Subject")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.subjectValue,expression:"subjectValue"}],class:{invalid:e.subjectError,valid:!e.subjectError&&e.isSubjectValid&&e.subjectHasBeenFocused},attrs:{id:"subject",name:"subject",type:"text",placeholder:"Subject",disabled:e.loading},domProps:{value:e.subjectValue},on:{blur:e.handleSubjectBlur,focus:e.handleSubjectFocus,input:function(a){a.target.composing||(e.subjectValue=a.target.value)}}}),this.subjectError?t("div",{staticClass:"error"},[e._v(" Invalid subject. Can't have more than 100 characters. ")]):e._e(),t("label",{attrs:{for:"message"}},[e._v("Message")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.messageValue,expression:"messageValue"}],class:{invalid:e.messageError,valid:!e.messageError&&e.isMessageValid},attrs:{name:"message",id:"message",cols:"30",rows:"10",placeholder:"Your message",disabled:e.loading},domProps:{value:e.messageValue},on:{blur:e.handleMessageBlur,focus:e.handleMessageFocus,input:function(a){a.target.composing||(e.messageValue=a.target.value)}}}),this.messageError?t("div",{staticClass:"error"},[e._v(" Invalid message. Message can't be empty. ")]):e._e(),t("button",{attrs:{type:"submit",disabled:e.loading}},[e._v("Send")])]),this.loading?t("div",[e._v("Sending...")]):e._e(),this.success?t("div",{staticClass:"success",attrs:{id:"success"}},[e._v(" Your message was sent with success! ")]):e._e(),this.requestError?t("div",{staticClass:"error",attrs:{id:"request-error"}},[e._v(" Something went wrong, please try submitting again later. ")]):e._e()])},n=[];t("ac1f"),t("466d"),t("d3b7");console.log();var o={name:"Form",data:function(){return{nameValue:"",emailValue:"",subjectValue:"",messageValue:"",nameError:!1,emailError:!1,subjectError:!1,messageError:!1,isNameValid:!1,isEmailValid:!1,isSubjectValid:!0,isMessageValid:!1,success:!1,requestError:!1,loading:!1,subjectHasBeenFocused:!1,apiUrl:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API_URL}},methods:{setValidInput:function(e){"name"===e&&(this.isValidName=!0)},handleNameFocus:function(){this.nameError=!1,this.isNameValid=!1,this.requestError=!1},handleEmailFocus:function(){this.emailError=!1,this.isEmailValid=!1,this.requestError=!1},handleSubjectFocus:function(){this.subjectError=!1,this.isSubjectValid=!1,this.requestError=!1,this.subjectHasBeenFocused=!0},handleMessageFocus:function(){this.messageError=!1,this.isMessageValid=!1,this.requestError=!1},validateName:function(e){e.match(/^[a-zA-Z ]{5,50}$/g)?(this.nameError=!1,this.isNameValid=!0):e.length>0&&(this.nameError=!0,this.isNameValid=!1)},handleNameBlur:function(e){this.validateName(e.target.value)},validateEmail:function(e){e.match(/^[\w+]+@\w+(\.\w+)*$/g)?(this.emailError=!1,this.isEmailValid=!0):e.length>0&&(this.emailError=!0,this.isEmailValid=!1)},handleEmailBlur:function(e){this.validateEmail(e.target.value)},validateSubject:function(e){this.subjectHasBeenFocused=!0,e.length<=100?(this.subjectError=!1,this.isSubjectValid=!0):(this.subjectError=!0,this.isSubjectValid=!1)},handleSubjectBlur:function(e){this.validateSubject(e.target.value)},validateMessage:function(e){e.length>0&&e.length<=500?(this.messageError=!1,this.isMessageValid=!0):e.length>0&&(this.messageError=!0,this.isMessageValid=!1)},handleMessageBlur:function(e){this.validateMessage(e.target.value)},handleSubmit:function(){var e=this;this.requestError=!1,this.validateName(this.nameValue),this.validateEmail(this.emailValue),this.validateSubject(this.subjectValue),this.validateMessage(this.messageValue),this.isNameValid&&this.isEmailValid&&this.isSubjectValid&&this.isMessageValid?(this.loading=!0,fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.nameValue,email:this.emailValue,subject:this.subjectValue,message:this.messageValue})}).then((function(a){a.ok?(e.success=!0,e.loading=!1,e.nameError=!1,e.subjectError=!1,e.messageError=!1,e.nameValue="",e.emailValue="",e.subjectValue="",e.messageValue=""):(e.loading=!1,e.requestError=!0)}))):(this.isNameValid||(this.nameError=!0),this.isEmailValid||(this.emailError=!0),this.isSubjectValid||(this.subjectError=!0),this.isMessageValid||(this.messageError=!0))}}},u=o,c=(t("ed82"),t("2877")),d=Object(c["a"])(u,l,n,!1,null,"523ee680",null),m=d.exports,h={name:"App",components:{Form:m}},g=h,v=(t("034f"),Object(c["a"])(g,i,r,!1,null,null,null)),b=v.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(b)}}).$mount("#app")},"5f1b":function(e,a,t){},"85ec":function(e,a,t){},cf05:function(e,a,t){e.exports=t.p+"img/logo.82b9c7a5.png"},ed82:function(e,a,t){"use strict";t("5f1b")}});
//# sourceMappingURL=app.55f1ae91.js.map