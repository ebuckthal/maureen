(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),l=n.n(r),c=(n(10),n(1)),o=Object(a.createContext)([0,function(){}]),s=function(e){var t=Object(a.useState)(3),n=Object(c.a)(t,2),r=n[0],l=n[1];return i.a.createElement(o.Provider,{value:[r,l]},e.children)},u=function(e){var t=e.index,n=e.visible;return i.a.createElement("div",{style:{position:"absolute",width:n?"100%":"1px",height:n?"50px":"1px",zIndex:-1,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url("/slider_scale_pos'.concat(t+1,'.png")')}})},m=function(){var e=Object(a.useContext)(o),t=Object(c.a)(e,2),n=t[0],r=t[1];return i.a.createElement("div",{style:{width:"100%",position:"relative"}},i.a.createElement(u,{index:0,visible:0===n}),i.a.createElement(u,{index:1,visible:1===n}),i.a.createElement(u,{index:2,visible:2===n}),i.a.createElement(u,{index:3,visible:3===n}),i.a.createElement(u,{index:4,visible:4===n}),i.a.createElement(u,{index:5,visible:5===n}),i.a.createElement(u,{index:6,visible:6===n}),i.a.createElement("input",{style:{height:"50px",padding:"0 10px"},type:"range",min:"0",max:"6",value:n,onChange:function(e){return r(parseInt(e.currentTarget.value,10))}}),i.a.createElement("div",{class:"flex justify-between ml-3 mr-3"},i.a.createElement("div",null,"art"),i.a.createElement("div",null,"science")))},d=function(e){var t=Object(a.useContext)(o),n=Object(c.a)(t,1)[0],r=Object(c.a)(e.range,2),l=r[0],s=r[1];return n<l||n>s?null:i.a.createElement("div",null,e.children)},v=[i.a.createElement(d,{range:[0,9]},i.a.createElement(function(){return i.a.createElement("div",{class:"max-w-md w-full lg:flex"},i.a.createElement("p",{class:"text-grey-darker text-base"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."))},null)),i.a.createElement(d,{range:[0,2]},"illustration"),i.a.createElement(d,{range:[2,5]},"lil of both"),i.a.createElement(d,{range:[5,6]},"science")],E=function(){return i.a.createElement("div",{class:"flex justify-center"},i.a.createElement("div",{class:"m-3 max-w-md sm:w-auto md:w-md"},i.a.createElement(s,null,i.a.createElement(m,null),v)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,n){e.exports=n(12)}},[[4,2,1]]]);
//# sourceMappingURL=main.f9b95994.chunk.js.map