(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{16:function(e,t,c){e.exports={display_area:"Result_display_area__3uYnn",currentInput:"Result_currentInput__1mQ66",answerScreen:"Result_answerScreen__1mXdL"}},21:function(e,t,c){e.exports={container:"Calculator_container__NgrF3",keypad_btns:"Calculator_keypad_btns__2JUEk"}},28:function(e,t,c){},38:function(e,t){},39:function(e,t,c){"use strict";c.r(t);var l=c(5),a=c.n(l),n=c(20),r=c.n(n),o=(c(28),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,l=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),l(e),a(e),n(e),r(e)}))}),s=c(6),i=c(21),b=c.n(i),u=c(16),x=c.n(u),f=c(2),h=function(e){var t=e.text,c=e.result;return Object(f.jsxs)("section",{className:x.a.display_area,children:[Object(f.jsx)("div",{className:x.a.currentInput,children:t}),Object(f.jsx)("div",{className:x.a.answerScreen,children:c})]})},j=[{text:"C",label:"C",color:"#ff8800"},{label:"%",text:"%",color:"#ff8800"},{label:"/",text:"/",color:"#ff8800"},{label:"x",text:"*",color:"#ff8800"},{label:"7",text:"7",color:"white"},{label:"8",text:"8",color:"white"},{label:"9",text:"9",color:"white"},{label:"+",text:"+",color:"#ff8800"},{label:"4",text:"4",color:"white"},{label:"5",text:"5",color:"white"},{label:"6",text:"6",color:"white"},{label:"-",text:"-",color:"#ff8800"},{label:"1",text:"1",color:"white"},{label:"2",text:"2",color:"white"},{label:"3",text:"3",color:"white"},{label:"x\xb2",text:"^2",color:"#ff8800"},{label:"\u2190",text:"\u2190",color:"#ff8800"},{label:"0",text:"0",color:"white"},{label:".",text:".",color:"white"},{label:"=",text:"=",color:"#ff8800"}],d=c(41),_=function(e){var t=e.button,c=e.handleClick;return Object(f.jsx)("button",{type:"button",style:{color:t.color},onClick:function(){return c(t.text)},children:t.label})},p=function(){var e=["+","-","/","%","*","^"],t=Object(l.useState)(""),c=Object(s.a)(t,2),a=c[0],n=c[1],r=Object(l.useState)(""),o=Object(s.a)(r,2),i=o[0],u=o[1],x=Object(l.useState)(!1),p=Object(s.a)(x,2),w=p[0],O=p[1],k=function t(c){var l=c.charAt(c.length-1);e.includes(l)?t(c.slice(0,-1)):(n(c),u(Object(d.a)(c)),O(!0))},g=function(t){switch(t){case"C":n(""),u(""),O(!1);break;case"=":k(a);break;case"\u2190":n(a.slice(0,-1));break;case"*":case"+":case"-":case"/":case"^2":case"%":!function(t){var c=w?i.toString():a,l=c.charAt(c.length-1);e.includes(l)?n(c):n(c+t),O(!1)}(t);break;default:!function(e){n(w?e:a+e),O(!1)}(t)}};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h,{text:a,result:i}),Object(f.jsx)("section",{className:b.a.keypad_btns,children:j.map((function(e){return Object(f.jsx)(_,{button:e,handleClick:g},e.text)}))})]})};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),o()}},[[39,1,2]]]);
//# sourceMappingURL=main.0aa051c4.chunk.js.map