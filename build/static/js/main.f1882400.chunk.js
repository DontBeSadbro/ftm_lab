(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{85:function(e,t,n){},86:function(e,t,n){},89:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),o=n(18),a=n.n(o),s=(n(85),n(14)),i=n(34),l=(n(86),n(87),n(39)),d=n(4),j=(n(89),n(32)),u=n(97),b=n(95),p=n(67),x=n.n(p),O={length:10,alfa:.1,insertionLoss:.05};function g(e){var t=e.elements,n=e.setElements,o=e.resetId,a=Object(c.useState)(!1),p=Object(i.a)(a,2),g=p[0],m=p[1],h=Object(c.useState)(!1),f=Object(i.a)(h,2),y=f[0],v=f[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("header",{className:"Header",children:Object(r.jsxs)("div",{className:"Header-btns",children:[Object(r.jsx)(j.a,{className:"button",type:"primary",onClick:function(){return function(e,t){var n,r=t.map((function(e){return Object(d.h)(e)?Object(s.a)(Object(s.a)(Object(s.a)({},e),O),{},{type:"Fiber"}):"Demux2"===e.type||"Demux4"===e.type||"Demux8"===e.type?Object(s.a)(Object(s.a)({},e),{},{type:"Demux"}):"Mux2"===e.type||"Mux4"===e.type||"Mux8"===e.type?Object(s.a)(Object(s.a)({},e),{},{type:"Mux"}):"Coupler2"===e.type||"Coupler3"===e.type||"Coupler4"===e.type?Object(s.a)(Object(s.a)({},e),{},{type:"Coupler"}):"Decoupler2"===e.type||"Decoupler3"===e.type||"Decoupler4"===e.type?Object(s.a)(Object(s.a)({},e),{},{type:"Decoupler"}):Object(s.a)({},e)})),c=Object(l.a)(r.filter((function(e){return Object(d.h)(e)})));try{var o=function(){var e=n.value,t=r.find((function(t){return t.id===e.target}));void 0===t.source&&(t.source=[]),t.source.push(e.id)};for(c.s();!(n=c.n()).done;)o()}catch(p){c.e(p)}finally{c.f()}var a,i={AddDropMux:[],Amplifier:[],Coupler:[],Decoupler:[],Demux:[],Fiber:[],Filter:[],Mux:[],Receiver:[],Switch:[],Transmitter:[],WaveConverter:[]},j=Object(l.a)(r);try{for(j.s();!(a=j.n()).done;){var u=a.value;i[u.type].push(u)}}catch(p){j.e(p)}finally{j.f()}var b=JSON.stringify(i);fetch("http://localhost:8080/calculate/",{method:"POST",body:b,headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){var n,r=t,c=Object(l.a)(r.Receiver);try{var o=function(){var t=n.value;e((function(e){return e.map((function(e){return t[e.id]&&(e.data.outPower=t[e.id]),e}))}))};for(c.s();!(n=c.n()).done;)o()}catch(p){c.e(p)}finally{c.f()}}))}(n,t)},children:"Calculate"}),Object(r.jsx)(j.a,{className:"button",type:"primary",onClick:function(){return function(e){var t=[JSON.stringify(e)],n=new Blob(t,{type:"text/plane"}),r=document.createElement("a"),c=window.URL.createObjectURL(n);r.href=c;var o=prompt("File name?","default");o&&(r.download=o+".txt",r.click())}(t)},children:"Save"}),Object(r.jsx)(j.a,{className:"button",type:"primary",onClick:function(){return function(e,t){e([]),x()({accept:"text/plain"}).then((function(n){n.item(0).text().then((function(n){var r=JSON.parse(n);e(r),t(r.filter((function(e){return e.id.includes("_")})).map((function(e){return e.id.substring(e.id.lastIndexOf("_")+1)})).filter((function(e){return!e.match(/[^\d]/)})).map((function(e){return parseInt(e)})).sort((function(e,t){return t-e}))[0]+1)}))}))}(n,o)},children:"Load"}),Object(r.jsx)(j.a,{className:"button",type:"primary",onClick:function(){n([]),o(0)},children:"Clear"}),Object(r.jsx)(j.a,{className:"button",type:"primary",onClick:function(){v(!0)},children:"Help"}),Object(r.jsx)(j.a,{className:"button",type:"primary",onClick:function(){return console.log(t)},children:"Check"}),Object(r.jsx)(j.a,{className:"button",type:"primary",onClick:function(){m(!0)},children:"Change fiber value"})]})}),Object(r.jsxs)(u.a,{title:"Help",style:{top:20},visible:y,onOk:function(){v(!1)},onCancel:function(){v(!1)},width:720,children:["To add components to the network, drag and drop the wanted component from the sidebar to the board.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})," You can connect 2 components by clinking on a dot on a side of a component, holding the mouse button, and dragging it to a dot on a another component.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})," The button Calculate will use the made network to check if the receivers are working properly. In that case, they will have a green border and text that says what is their power for their set wavelength, otherwise the border will be red.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})," With the button Save, you can save the network in a .txt file, while the Load button can load .txt files",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"The button Clear clears the board of all components. ",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"The button Help shows this text.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})," Check button is used for debugging purposes. ",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Change fiber value is used to bring a modal where you can change fiber properties"]}),Object(r.jsx)(u.a,{title:"Change fiber value",visible:g,onOk:function(){m(!1)},onCancel:function(){m(!1)},children:Object(r.jsxs)("div",{id:"fibermodal",children:[Object(r.jsx)(b.a,{type:"number",addonBefore:"Length",defaultValue:O.length,onChange:function(e){return O.length=e.target.value}}),Object(r.jsx)(b.a,{type:"number",addonBefore:"Alfa",defaultValue:O.alfa,onChange:function(e){return O.alfa=e.target.value}}),Object(r.jsx)(b.a,{type:"number",addonBefore:"Insertion Loss",defaultValue:O.insertionLoss,onChange:function(e){return O.insertionLoss=e.target.value}})]})})]})}var m=n(96),h=m.a.Panel,f=function(){var e=function(e,t){e.dataTransfer.setData("application/reactflow",t),e.dataTransfer.effectAllowed="move"};return Object(r.jsxs)("aside",{children:[Object(r.jsx)("div",{className:"description",children:"You can drag these nodes to the pane on the right."}),Object(r.jsx)("div",{className:"board transmitter",onDragStart:function(t){return e(t,"Transmitter")},draggable:!0,children:"Transmitter"}),Object(r.jsx)("div",{className:"board filter",onDragStart:function(t){return e(t,"Filter")},draggable:!0,children:"Filter"}),Object(r.jsx)("div",{className:"board amplifier",onDragStart:function(t){return e(t,"Amplifier")},draggable:!0,children:"Amplifier"}),Object(r.jsx)("div",{className:"board receiver",onDragStart:function(t){return e(t,"Receiver")},draggable:!0,children:"Receiver"}),Object(r.jsx)("div",{className:"board adddropmux",onDragStart:function(t){return e(t,"AddDropMux")},draggable:!0,children:"Add/Drop Mux"}),Object(r.jsx)("div",{className:"board waveconverter",onDragStart:function(t){return e(t,"WaveConverter")},draggable:!0,children:"Wavelength converter"}),Object(r.jsx)("div",{className:"board switch",onDragStart:function(t){return e(t,"Switch")},draggable:!0,children:"Switch"}),Object(r.jsxs)(m.a,{accordion:!0,children:[Object(r.jsxs)(h,{header:"Mux",children:[Object(r.jsx)("div",{className:"board mux2",onDragStart:function(t){return e(t,"Mux2")},draggable:!0,children:"Mux2"}),Object(r.jsx)("div",{className:"board mux4",onDragStart:function(t){return e(t,"Mux4")},draggable:!0,children:"Mux4"}),Object(r.jsx)("div",{className:"board mux8",onDragStart:function(t){return e(t,"Mux8")},draggable:!0,children:"Mux8"})]},"1"),Object(r.jsxs)(h,{header:"Demux",children:[Object(r.jsx)("div",{className:"board demux2",onDragStart:function(t){return e(t,"Demux2")},draggable:!0,children:"Demux2"}),Object(r.jsx)("div",{className:"board demux4",onDragStart:function(t){return e(t,"Demux4")},draggable:!0,children:"Demux4"}),Object(r.jsx)("div",{className:"board demux8",onDragStart:function(t){return e(t,"Demux8")},draggable:!0,children:"Demux8"})]},"2"),Object(r.jsxs)(h,{header:"Coupler",children:[Object(r.jsx)("div",{className:"board coupler2",onDragStart:function(t){return e(t,"Coupler2")},draggable:!0,children:"Coupler2"}),Object(r.jsx)("div",{className:"board coupler3",onDragStart:function(t){return e(t,"Coupler3")},draggable:!0,children:"Coupler3"}),Object(r.jsx)("div",{className:"board coupler4",onDragStart:function(t){return e(t,"Coupler4")},draggable:!0,children:"Coupler4"})]},"3"),Object(r.jsxs)(h,{header:"Decoupler",children:[Object(r.jsx)("div",{className:"board decoupler2",onDragStart:function(t){return e(t,"Decoupler2")},draggable:!0,children:"Decoupler2"}),Object(r.jsx)("div",{className:"board decoupler3",onDragStart:function(t){return e(t,"Decoupler3")},draggable:!0,children:"Decoupler3"}),Object(r.jsx)("div",{className:"board decoupler4",onDragStart:function(t){return e(t,"Decoupler4")},draggable:!0,children:"Decoupler4"})]},"4")]})]})},y=function(e){var t,n,c=null===(t=e.data)||void 0===t||null===(n=t.onChange)||void 0===n?void 0:n.bind(null,e.data.id);return Object(r.jsx)("input",Object(s.a)({className:"field",type:"number",defaultValue:e.data[e.name],onChange:c,onMouseDown:function(e){return e.stopPropagation()}},e))},v=Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Transmitter"})}),Object(r.jsxs)("div",{children:["Power:",Object(r.jsx)(y,{name:"power",data:t}),"mW, Wavelength:",Object(r.jsx)(y,{name:"wavelength",data:t}),"nm"]}),"Insertion loss:",Object(r.jsx)(y,{name:"loss",data:t}),"dbm",Object(r.jsx)(d.c,{type:"source",position:"right",style:{background:"#555"}})]})})),k=Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",position:"left",style:{background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Filter"})}),Object(r.jsxs)("div",{children:["Min. wavelength:",Object(r.jsx)(y,{data:t,name:"minWL"}),"nm, Max. wavelength:",Object(r.jsx)(y,{data:t,name:"maxWL"}),"nm"]}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",position:"right",style:{background:"#555"}})]})}));n(92);function D(e){return e.outpower?Object(r.jsx)("div",{ref:function(t){(null===t||void 0===t?void 0:t.parentElement)&&(t.parentElement.style.borderColor="0"===e.outpower?"red":"green")},children:"0"!==e.outpower?"Received power: ".concat(e.outpower," mW, for Wavelength: ").concat(e.outwave," nm"):"Power is less than set sensitivity."}):null}var w={Transmitter:v,Filter:k,Amplifier:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",position:"left",style:{background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Amplifier"})}),Object(r.jsxs)("div",{children:["Amplification:",Object(r.jsx)(y,{name:"amp",data:t}),"dbm, Max. power:",Object(r.jsx)(y,{name:"maxPower",data:t}),"nm"]}),Object(r.jsxs)("div",{children:["Min. wavelength:",Object(r.jsx)(y,{name:"minWL",data:t}),"nm, Max. wavelength:",Object(r.jsx)(y,{name:"maxWL",data:t}),"nm"]}),"Insertion loss:",Object(r.jsx)(y,{name:"loss",data:t}),"dbm",Object(r.jsx)(d.c,{type:"source",position:"right",style:{background:"#555"}})]})})),Receiver:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",position:"left",style:{background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Receiver"})}),Object(r.jsxs)("div",{children:["Sensitivity:",Object(r.jsx)(y,{data:t,name:"sens"}),"mw,Wavelength:",Object(r.jsx)(y,{data:t,name:"wavelength"}),"nm"]}),Object(r.jsxs)("div",{children:["Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm"]}),Object(r.jsx)(D,{outpower:t.outPower,outwave:t.wavelength})]})})),AddDropMux:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",position:"left",style:{background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Add/drop Mux"})}),Object(r.jsxs)("div",{children:["Add wavelength:",Object(r.jsx)(y,{data:t,name:"addWL"}),"nm, Remove wavelength:",Object(r.jsx)(y,{data:t,name:"delWL"}),"nm"]}),Object(r.jsxs)("div",{children:["Power:",Object(r.jsx)(y,{data:t,name:"power"}),"mw, Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm"]}),Object(r.jsx)(d.c,{type:"source",position:"right",style:{background:"#555"}})]})})),WaveConverter:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",position:"left",style:{background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Wavelength converter"})}),Object(r.jsxs)("div",{children:["Input wavelength:",Object(r.jsx)(y,{data:t,name:"inWL"}),"nm, Output wavelength:",Object(r.jsx)(y,{data:t,name:"outWL"}),"nm"]}),Object(r.jsxs)("div",{children:["Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm"]}),Object(r.jsx)(d.c,{type:"source",position:"right",style:{background:"#555"}})]})})),Switch:Object(c.memo)((function(e){var t,n=e.data,c=null===n||void 0===n||null===(t=n.onChange)||void 0===t?void 0:t.bind(null,n.id);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",id:"0",position:"left",style:{top:10,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"1",position:"left",style:{top:80,background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Switch"})}),Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{type:"radio",id:"horizontal",checked:0===n.rules[0],name:"rules",value:"[0, 1]",onChange:c}),Object(r.jsx)("label",{htmlFor:"horizontal",children:" Horizontal"}),Object(r.jsx)("input",{type:"radio",id:"cross",checked:1===n.rules[0],name:"rules",onChange:c,value:"[1, 0]"}),Object(r.jsx)("label",{htmlFor:"cross",children:" Cross"})]}),"Insertion loss:",Object(r.jsx)(y,{name:"loss",data:n}),"dbm",Object(r.jsx)(d.c,{type:"source",id:"0",position:"right",style:{top:10,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"1",position:"right",style:{top:80,background:"#555"}})]})})),Mux2:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",id:"0",position:"left",style:{top:10,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"1",position:"left",style:{top:60,background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Mux"})}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",position:"right",style:{background:"#555"}})]})})),Mux4:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",id:"0",position:"left",style:{top:10,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"1",position:"left",style:{top:27,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"2",position:"left",style:{top:44,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"3",position:"left",style:{top:60,background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Mux"})}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",position:"right",style:{background:"#555"}})]})})),Mux8:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",id:"0",position:"left",style:{top:5,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"1",position:"left",style:{top:13,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"2",position:"left",style:{top:22,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"3",position:"left",style:{top:30,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"4",position:"left",style:{top:39,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"5",position:"left",style:{top:47,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"6",position:"left",style:{top:56,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"7",position:"left",style:{top:65,background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Mux"})}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",position:"right",style:{background:"#555"}})]})})),Demux2:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",position:"left",style:{background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Demux"})}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",id:"0",position:"right",style:{top:10,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"1",position:"right",style:{top:60,background:"#555"}})]})})),Demux4:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",position:"left",style:{background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Demux"})}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",id:"0",position:"right",style:{top:10,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"1",position:"right",style:{top:27,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"2",position:"right",style:{top:44,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"3",position:"right",style:{top:60,background:"#555"}})]})})),Demux8:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",position:"left",style:{background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Demux"})}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",id:"0",position:"right",style:{top:5,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"1",position:"right",style:{top:13,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"2",position:"right",style:{top:22,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"3",position:"right",style:{top:30,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"4",position:"right",style:{top:39,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"5",position:"right",style:{top:47,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"6",position:"right",style:{top:56,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"7",position:"right",style:{top:65,background:"#555"}})]})})),Coupler2:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",id:"0",position:"left",style:{top:10,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"1",position:"left",style:{top:60,background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Coupler"})}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",position:"right",style:{background:"#555"}})]})})),Coupler3:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",id:"0",position:"left",style:{top:10,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"1",position:"left",style:{top:35,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"2",position:"left",style:{top:60,background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Coupler"})}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",position:"right",style:{background:"#555"}})]})})),Coupler4:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",id:"0",position:"left",style:{top:10,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"1",position:"left",style:{top:27,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"2",position:"left",style:{top:44,background:"#555"}}),Object(r.jsx)(d.c,{type:"target",id:"3",position:"left",style:{top:60,background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Coupler"})}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",position:"right",style:{background:"#555"}})]})})),Decoupler2:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",position:"left",style:{background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Decoupler"})}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",id:"0",position:"right",style:{top:10,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"1",position:"right",style:{top:60,background:"#555"}})]})})),Decoupler3:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",position:"left",style:{background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Decoupler"})}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",id:"0",position:"right",style:{top:10,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"1",position:"right",style:{top:35,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"2",position:"right",style:{top:60,background:"#555"}})]})})),Decoupler4:Object(c.memo)((function(e){var t=e.data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.c,{type:"target",position:"left",style:{background:"#555"}}),Object(r.jsx)("div",{children:Object(r.jsx)("b",{children:"Decoupler"})}),"Insertion loss:",Object(r.jsx)(y,{data:t,name:"loss"}),"dbm",Object(r.jsx)(d.c,{type:"source",id:"0",position:"right",style:{top:10,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"1",position:"right",style:{top:27,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"2",position:"right",style:{top:44,background:"#555"}}),Object(r.jsx)(d.c,{type:"source",id:"3",position:"right",style:{top:60,background:"#555"}})]})}))},C=function(e){switch(e){case"Transmitter":return{power:1e3,wavelength:1450,loss:1};case"Filter":return{minWL:1200,maxWL:1600,loss:1};case"Amplifier":return{amp:2,maxPower:500,minWL:1200,maxWL:1600,loss:1};case"Receiver":return{sens:10,wavelength:1450,loss:1,outPower:null};case"AddDropMux":return{addWL:1350,delWL:1550,power:1e3,loss:1};case"WaveConverter":return{inWL:1250,outWL:1550,loss:1};case"Switch":return{rules:[0,1],loss:1};case"Mux2":case"Mux4":case"Mux8":case"Coupler2":case"Coupler3":case"Coupler4":return{loss:1};case"Demux2":case"Decoupler2":return{loss:1,outputNum:2};case"Decoupler3":return{loss:1,outputNum:3};case"Demux4":case"Decoupler4":return{loss:1,outputNum:4};case"Demux8":return{loss:1,outputNum:8};default:return{}}},N=function(e){switch(e){case"Transmitter":case"Filter":case"Amplifier":case"Receiver":case"AddDropMux":case"WaveConverter":case"Switch":case"Mux2":case"Mux4":case"Mux8":case"Demux2":case"Demux4":case"Demux8":case"Coupler2":case"Coupler3":case"Coupler4":case"Decoupler2":case"Decoupler3":case"Decoupler4":return{border:"2px solid black",borderRadius:"5px",padding:10};default:return}},S=function(e){var t=e.elements,n=e.setElements,o=e.getId,a=Object(c.useRef)(null),l=Object(c.useState)(null),j=Object(i.a)(l,2),u=j[0],b=j[1],p=Object(c.useCallback)((function(e,t){n((function(n){return n.map((function(n){if(Object(d.h)(n)||e!==n.id)return n;var r=t.target.name,c=t.target.value;return"Switch"===n.type&&"rules"===t.target.name?n.data[r]=JSON.parse(c):n.data[r]=c,n}))}))}),[n]);return Object(r.jsx)("div",{className:"board",children:Object(r.jsxs)(d.e,{children:[Object(r.jsx)(f,{}),Object(r.jsx)("div",{className:"reactflow-wrapper",ref:a,children:Object(r.jsxs)(d.g,{elements:t.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{data:Object(s.a)(Object(s.a)({},e.data),{},{onChange:p})})})),onConnect:function(e){return n((function(t){return Object(d.f)(e,t)}))},onElementsRemove:function(e){n((function(t){return Object(d.i)(e,t)}))},onLoad:function(e){return b(e)},onDrop:function(e){e.preventDefault();var t=a.current.getBoundingClientRect(),r=e.dataTransfer.getData("application/reactflow");if(r){var c=u.project({x:e.clientX-t.left,y:e.clientY-t.top}),i=o(r),l={id:i,type:"".concat(r),style:N(r),position:c,data:Object(s.a)(Object(s.a)({label:"".concat(r," node")},C(r)),{},{id:i})};n((function(e){return e.concat(l)}))}},onDragOver:function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"},onNodeDragStop:function(e,r){n(t.map((function(e){return e.id===r.id?Object(s.a)(Object(s.a)({},e),{},{position:r.position}):e})))},nodeTypes:w,children:[Object(r.jsx)(d.a,{variant:"dots",gap:20,size:.7}),Object(r.jsx)(d.b,{})]})}),Object(r.jsx)(d.d,{nodeStrokeColor:function(e){var t;return(null===(t=e.style)||void 0===t?void 0:t.background)?e.style.background:"black"},nodeColor:function(e){var t;return(null===(t=e.style)||void 0===t?void 0:t.background)?e.style.background:"#fff"},nodeBorderRadius:2})]})})},M=0,F=function(e){return"".concat(e,"_").concat(M++)},I=function(e){return M=e};var W=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(g,Object(s.a)({},{elements:n,setElements:o,resetId:I})),Object(r.jsx)(S,Object(s.a)({},{elements:n,setElements:o,getId:F}))]})};a.a.render(Object(r.jsx)(W,{}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.f1882400.chunk.js.map