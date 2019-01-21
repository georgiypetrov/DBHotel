(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)i=s[u],a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,s=1;s<o.length;s++){var l=o[s];0!==a[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},a={app:0},n=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var m=l;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var r=o("64a9"),a=o.n(r);a.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var r=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("div",{staticClass:"container"},[o("ul",{staticClass:"nav nav-tabs nav-justified"},[o("li",{class:{active:"rooms"===e.showTab}},[o("a",{attrs:{href:"#rooms"}},[e._v("Rooms")])]),o("li",{class:{active:"clients"===e.showTab}},[o("a",{attrs:{href:"#clients"}},[e._v("Clients")])]),o("li",{class:{active:"incomes"===e.showTab}},[o("a",{attrs:{href:"#incomes"}},[e._v("Incomes")])]),o("li",{class:{active:"available"===e.showTab}},[o("a",{attrs:{href:"#available"}},[e._v("Available rooms")])]),o("li",{class:{active:"get-room"===e.showTab}},[o("a",{attrs:{href:"#get-room"}},[e._v("Get room")])])]),o("div",{staticClass:"tab-content",staticStyle:{"margin-top":"10px"}},[o("div",{staticClass:"tab-pane",class:{active:"clients"===e.showTab}},["clients"===e.showTab?o("clients"):e._e()],1),o("div",{staticClass:"tab-pane",class:{active:"rooms"===e.showTab}},["rooms"===e.showTab?o("rooms"):e._e()],1),o("div",{staticClass:"tab-pane",class:{active:"incomes"===e.showTab}},["incomes"===e.showTab?o("incomes"):e._e()],1),o("available-rooms",{directives:[{name:"show",rawName:"v-show",value:"available"===e.showTab,expression:"showTab === 'available'"}]}),o("get-room",{directives:[{name:"show",rawName:"v-show",value:"get-room"===e.showTab,expression:"showTab === 'get-room'"}]}),"add-room"===e.showTab?o("add-room"):e._e(),"add-client"===e.showTab?o("add-client"):e._e(),e.showTab.startsWith("edit-room")?o("edit-room"):e._e(),e.showTab.startsWith("edit-client")?o("edit-client"):e._e()],1),o("hr")])])},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nav",{staticClass:"navbar navbar-default"},[o("div",{staticClass:"navbar-header"},[o("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("\n                Exam DB\n            ")])])])}],i=(o("a481"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("a",{staticClass:"btn-success btn",staticStyle:{"margin-top":"20px"},attrs:{href:"#add-client"}},[e._v("Добавить клиента")]),o("datatable",e._b({},"datatable",e.$data,!1))],1)}),s=[],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"btn-group btn-group-sm"},[o("button",{staticClass:"btn btn-default",on:{click:e.editRoom}},[e._v("\n        Редактировать\n    ")]),o("button",{staticClass:"btn btn-danger",on:{click:e.deleteRoom}},[e._v("\n        Удалить\n    ")])])},c=[],m={props:["row"],methods:{deleteRoom:function(){var e=this,t=confirm("Подтвердите удаление.");if(t){var o="http://localhost:5000/";o+=void 0!==e.row.number?"rooms/":"clients/",o+=e.row.id,console.log(o),fetch(o,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"}}).then(function(e){200===e.status?alert("OK"):alert("OOPS!")}).catch(function(e){alert("OOPS!")})}},editRoom:function(){console.log(this.row.id),void 0!==this.row.number?window.location.hash="#edit-room/"+this.row.id:window.location.hash="#edit-client/"+this.row.id}}},u=m,d=o("2877"),p=Object(d["a"])(u,l,c,!1,null,null,null);p.options.__file="Buttons.vue";var v=p.exports,f={components:{Buttons:v},data:function(){return{columns:[{title:"ID",field:"id"},{title:"Имя",field:"first_name"},{title:"Фамилия",field:"last_name"},{title:"Номер",field:"room_number"},{title:"Дата прибытия",field:"arrival"},{title:"Дата отправления",field:"departure"},{title:"Оплачено",field:"is_paid"},{title:"С завтраком",field:"with_breakfast"},{title:"Действия",tdComp:"Buttons"}],data:[],total:0,query:{}}},mounted:function(){var e=this;fetch("http://localhost:5000/clients").then(function(e){return e.json()}).then(function(t){e.data=t})}},h=f,_=Object(d["a"])(h,i,s,!1,null,null,null);_.options.__file="Clients.vue";var b=_.exports,g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("a",{staticClass:"btn-success btn",staticStyle:{"margin-top":"20px"},attrs:{href:"#add-room"}},[e._v("Добавить номер")]),o("datatable",e._b({},"datatable",e.$data,!1))],1)},w=[],y={components:{Buttons:v},data:function(){return{columns:[{title:"ID",field:"id"},{title:"Номер",field:"number"},{title:"Кол-во мест",field:"persons"},{title:"Этаж",field:"floor"},{title:"ТВ",field:"has_tv"},{title:"Холодильник",field:"has_fridge"},{title:"Телефон",field:"has_phone"},{title:"Цена",field:"price"},{title:"Цена с завтраком",field:"price_with_breakfast"},{title:"Действия",tdComp:"Buttons"}],data:[],total:0,query:{}}},mounted:function(){var e=this;fetch("http://localhost:5000/rooms").then(function(e){return e.json()}).then(function(t){e.data=t})}},k=y,C=Object(d["a"])(k,g,w,!1,null,null,null);C.options.__file="Rooms.vue";var x=C.exports,P=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",[o("div",{staticClass:"form-group"},[o("label",[e._v("От")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.date.from,expression:"date.from"}],staticClass:"form-control",attrs:{type:"text",placeholder:"YYYY-MM-DD"},domProps:{value:e.date.from},on:{input:function(t){t.target.composing||e.$set(e.date,"from",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("До")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.date.to,expression:"date.to"}],staticClass:"form-control",attrs:{type:"text",placeholder:"YYYY-MM-DD"},domProps:{value:e.date.to},on:{input:function(t){t.target.composing||e.$set(e.date,"to",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Доход")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.incomes,expression:"incomes"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.incomes},on:{input:function(t){t.target.composing||(e.incomes=t.target.value)}}})]),o("button",{staticClass:"btn btn-primary",on:{click:function(t){e.getIncomes(e.date)}}},[e._v("Submit")])])},A=[],O={data:function(){return{date:{from:"",to:""},incomes:0}},methods:{getIncomes:function(e){var t=this;fetch("http://localhost:5000/incomes?from="+e.from+"&to="+e.to).then(function(e){return e.json()}).then(function(e){t.incomes=e[0].no_breakfast+e[0].with_breakfast+" ₽"}).catch(function(e){alert("OOPS!")})}}},N=O,j=Object(d["a"])(N,P,A,!1,null,"0140c222",null);j.options.__file="Incomes.vue";var T=j.exports,R=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",[o("div",{staticClass:"form-group"},[o("label",[e._v("Номер")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.number,expression:"room.number"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.room.number},on:{input:function(t){t.target.composing||e.$set(e.room,"number",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Кол-во мест")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.persons,expression:"room.persons"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.room.persons},on:{input:function(t){t.target.composing||e.$set(e.room,"persons",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Этаж")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.floor,expression:"room.floor"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.room.floor},on:{input:function(t){t.target.composing||e.$set(e.room,"floor",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Есть ТВ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.has_tv,expression:"room.has_tv"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.room.has_tv)?e._i(e.room.has_tv,null)>-1:e.room.has_tv},on:{change:function(t){var o=e.room.has_tv,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.room,"has_tv",o.concat([n])):i>-1&&e.$set(e.room,"has_tv",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.room,"has_tv",a)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Есть холодильник")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.has_fridge,expression:"room.has_fridge"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.room.has_fridge)?e._i(e.room.has_fridge,null)>-1:e.room.has_fridge},on:{change:function(t){var o=e.room.has_fridge,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.room,"has_fridge",o.concat([n])):i>-1&&e.$set(e.room,"has_fridge",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.room,"has_fridge",a)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Есть телефон")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.has_phone,expression:"room.has_phone"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.room.has_phone)?e._i(e.room.has_phone,null)>-1:e.room.has_phone},on:{change:function(t){var o=e.room.has_phone,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.room,"has_phone",o.concat([n])):i>-1&&e.$set(e.room,"has_phone",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.room,"has_phone",a)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Цена")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.price,expression:"room.price"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.room.price},on:{input:function(t){t.target.composing||e.$set(e.room,"price",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Цена с завтраком")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.price_with_breakfast,expression:"room.price_with_breakfast"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.room.price_with_breakfast},on:{input:function(t){t.target.composing||e.$set(e.room,"price_with_breakfast",t.target.value)}}})]),o("button",{staticClass:"btn btn-primary",on:{click:function(t){e.addRoom(e.room)}}},[e._v("Submit")])])},S=[],Y=o("f499"),D=o.n(Y),E=(o("96cf"),o("3b8d")),M={data:function(){return{room:{id:"",number:"",persons:"",floor:"",has_tv:!1,has_fridge:!1,has_phone:!1,price:"",price_with_breakfast:""}}},methods:{addRoom:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.number=+t.number,t.persons=+t.persons,t.floor=+t.floor,t.price=+t.price,t.price_with_breakfast=+t.price_with_breakfast,console.log(t),e.next=8,fetch("http://localhost:5000/rooms",{method:"PUT",mode:"cors",body:D()(t),headers:{"Content-Type":"application/json"}}).then(function(e){200===e.status?alert("OK"):(console.log(e),alert("OOPS!"))}).catch(function(e){alert("OOPS!")});case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},I=M,B=Object(d["a"])(I,R,S,!1,null,"68827f6c",null);B.options.__file="AddRoom.vue";var K=B.exports,q=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",[o("div",{staticClass:"form-group"},[o("label",[e._v("Имя")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.first_name,expression:"client.first_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.client.first_name},on:{input:function(t){t.target.composing||e.$set(e.client,"first_name",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Фамилия")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.last_name,expression:"client.last_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.client.last_name},on:{input:function(t){t.target.composing||e.$set(e.client,"last_name",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Номер")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.room_number,expression:"client.room_number"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.client.room_number},on:{input:function(t){t.target.composing||e.$set(e.client,"room_number",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Дата прибытия")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.arrival,expression:"client.arrival"}],staticClass:"form-control",attrs:{type:"text",placeholder:"YYYY-MM-DD"},domProps:{value:e.client.arrival},on:{input:function(t){t.target.composing||e.$set(e.client,"arrival",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Дата отправления")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.departure,expression:"client.departure"}],staticClass:"form-control",attrs:{type:"text",placeholder:"YYYY-MM-DD"},domProps:{value:e.client.departure},on:{input:function(t){t.target.composing||e.$set(e.client,"departure",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Оплачено")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.is_paid,expression:"client.is_paid"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.client.is_paid)?e._i(e.client.is_paid,null)>-1:e.client.is_paid},on:{change:function(t){var o=e.client.is_paid,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.client,"is_paid",o.concat([n])):i>-1&&e.$set(e.client,"is_paid",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.client,"is_paid",a)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("С завтраком")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.with_breakfast,expression:"client.with_breakfast"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.client.with_breakfast)?e._i(e.client.with_breakfast,null)>-1:e.client.with_breakfast},on:{change:function(t){var o=e.client.with_breakfast,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.client,"with_breakfast",o.concat([n])):i>-1&&e.$set(e.client,"with_breakfast",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.client,"with_breakfast",a)}}})]),o("button",{staticClass:"btn btn-primary",on:{click:function(t){e.addClient(e.client)}}},[e._v("Submit")])])},G=[],J={data:function(){return{client:{id:"",first_name:"",last_name:"",room_number:"",arrival:"",departure:"",is_paid:!1,with_breakfast:!1}}},methods:{addClient:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.room_number=+t.room_number,console.log(t),e.next=4,fetch("http://localhost:5000/clients",{method:"PUT",mode:"cors",body:D()(t),headers:{"Content-Type":"application/json"}}).then(function(e){200===e.status?alert("OK"):(console.log(e),alert("OOPS!"))}).catch(function(e){alert("OOPS!")});case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},U=J,W=Object(d["a"])(U,q,G,!1,null,"58017d0a",null);W.options.__file="AddClient.vue";var F=W.exports,L=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",[o("div",{staticClass:"form-group"},[o("label",[e._v("Id")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.id,expression:"room.id"}],staticClass:"form-control",attrs:{type:"number",disabled:""},domProps:{value:e.room.id},on:{input:function(t){t.target.composing||e.$set(e.room,"id",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Номер")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.number,expression:"room.number"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.room.number},on:{input:function(t){t.target.composing||e.$set(e.room,"number",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Кол-во мест")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.persons,expression:"room.persons"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.room.persons},on:{input:function(t){t.target.composing||e.$set(e.room,"persons",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Этаж")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.floor,expression:"room.floor"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.room.floor},on:{input:function(t){t.target.composing||e.$set(e.room,"floor",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Есть ТВ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.has_tv,expression:"room.has_tv"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.room.has_tv)?e._i(e.room.has_tv,null)>-1:e.room.has_tv},on:{change:function(t){var o=e.room.has_tv,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.room,"has_tv",o.concat([n])):i>-1&&e.$set(e.room,"has_tv",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.room,"has_tv",a)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Есть холодильник")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.has_fridge,expression:"room.has_fridge"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.room.has_fridge)?e._i(e.room.has_fridge,null)>-1:e.room.has_fridge},on:{change:function(t){var o=e.room.has_fridge,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.room,"has_fridge",o.concat([n])):i>-1&&e.$set(e.room,"has_fridge",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.room,"has_fridge",a)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Есть телефон")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.has_phone,expression:"room.has_phone"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.room.has_phone)?e._i(e.room.has_phone,null)>-1:e.room.has_phone},on:{change:function(t){var o=e.room.has_phone,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.room,"has_phone",o.concat([n])):i>-1&&e.$set(e.room,"has_phone",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.room,"has_phone",a)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Цена")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.price,expression:"room.price"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.room.price},on:{input:function(t){t.target.composing||e.$set(e.room,"price",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Цена с завтраком")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.price_with_breakfast,expression:"room.price_with_breakfast"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.room.price_with_breakfast},on:{input:function(t){t.target.composing||e.$set(e.room,"price_with_breakfast",t.target.value)}}})]),o("button",{staticClass:"btn btn-primary",on:{click:function(t){e.editRoom(e.room)}}},[e._v("Submit")])])},z=[],H=(o("28a5"),{data:function(){return{room:{id:"",number:"",persons:"",floor:"",has_tv:!1,has_fridge:!1,has_phone:!1,price:"",price_with_breakfast:""}}},mounted:function(){var e=this,t=window.location.href.split("/").pop();fetch("http://localhost:5000/rooms/"+t).then(function(e){return e.json()}).then(function(t){e.room=t})},methods:{editRoom:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.number=+t.number,t.persons=+t.persons,t.floor=+t.floor,t.price=+t.price,t.price_with_breakfast=+t.price_with_breakfast,console.log(t),e.next=8,fetch("http://localhost:5000/rooms",{method:"POST",mode:"cors",body:D()(t),headers:{"Content-Type":"application/json"}}).then(function(e){200===e.status?alert("OK"):(console.log(e),alert("OOPS!"))}).catch(function(e){alert("OOPS!")});case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}}),Q=H,V=Object(d["a"])(Q,L,z,!1,null,"67f151c6",null);V.options.__file="EditRoom.vue";var X=V.exports,Z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",[o("div",{staticClass:"form-group"},[o("label",[e._v("Id")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.id,expression:"client.id"}],staticClass:"form-control",attrs:{type:"number",disabled:""},domProps:{value:e.client.id},on:{input:function(t){t.target.composing||e.$set(e.client,"id",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Имя")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.first_name,expression:"client.first_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.client.first_name},on:{input:function(t){t.target.composing||e.$set(e.client,"first_name",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Фамилия")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.last_name,expression:"client.last_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.client.last_name},on:{input:function(t){t.target.composing||e.$set(e.client,"last_name",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Номер")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.room_number,expression:"client.room_number"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.client.room_number},on:{input:function(t){t.target.composing||e.$set(e.client,"room_number",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Дата прибытия")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.arrival,expression:"client.arrival"}],staticClass:"form-control",attrs:{type:"text",placeholder:"YYYY-MM-DD"},domProps:{value:e.client.arrival},on:{input:function(t){t.target.composing||e.$set(e.client,"arrival",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Дата отправления")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.departure,expression:"client.departure"}],staticClass:"form-control",attrs:{type:"text",placeholder:"YYYY-MM-DD"},domProps:{value:e.client.departure},on:{input:function(t){t.target.composing||e.$set(e.client,"departure",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Оплачено")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.is_paid,expression:"client.is_paid"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.client.is_paid)?e._i(e.client.is_paid,null)>-1:e.client.is_paid},on:{change:function(t){var o=e.client.is_paid,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.client,"is_paid",o.concat([n])):i>-1&&e.$set(e.client,"is_paid",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.client,"is_paid",a)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("С завтраком")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.client.with_breakfast,expression:"client.with_breakfast"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.client.with_breakfast)?e._i(e.client.with_breakfast,null)>-1:e.client.with_breakfast},on:{change:function(t){var o=e.client.with_breakfast,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.client,"with_breakfast",o.concat([n])):i>-1&&e.$set(e.client,"with_breakfast",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.client,"with_breakfast",a)}}})]),o("button",{staticClass:"btn btn-primary",on:{click:function(t){e.editClient(e.client)}}},[e._v("Submit")])])},ee=[],te={data:function(){return{client:{id:"",first_name:"",last_name:"",room_number:"",arrival:"",departure:"",is_paid:!1,with_breakfast:!1}}},mounted:function(){var e=this,t=window.location.href.split("/").pop();fetch("http://localhost:5000/clients/"+t).then(function(e){return e.json()}).then(function(t){e.client=t;var o=oe(Date.parse(e.client.arrival)),r=oe(Date.parse(e.client.departure));e.client.arrival=o,e.client.departure=r})},methods:{editClient:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.room_number=+t.room_number,console.log(t),e.next=4,fetch("http://localhost:5000/clients",{method:"POST",mode:"cors",body:D()(t),headers:{"Content-Type":"application/json"}}).then(function(e){200===e.status?alert("OK"):(console.log(e),alert("OOPS!"))}).catch(function(e){alert("OOPS!")});case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}};function oe(e){e=new Date(e);var t=e.getDate();t<10&&(t="0"+t);var o=e.getMonth()+1;o<10&&(o="0"+o);var r=e.getFullYear();return r+"-"+o+"-"+t}var re=te,ae=Object(d["a"])(re,Z,ee,!1,null,"3594976e",null);ae.options.__file="EditClient.vue";var ne=ae.exports,ie=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("datatable",e._b({},"datatable",e.$data,!1))],1)},se=[],le={data:function(){return{columns:[{title:"ID",field:"id"},{title:"Номер",field:"number"},{title:"Кол-во мест",field:"persons"},{title:"Этаж",field:"floor"},{title:"ТВ",field:"has_tv"},{title:"Холодильник",field:"has_fridge"},{title:"Телефон",field:"has_phone"},{title:"Цена",field:"price"},{title:"Цена с завтраком",field:"price_with_breakfast"}],data:[],total:0,query:{}}},mounted:function(){var e=this;fetch("http://localhost:5000/rooms/available").then(function(e){return e.json()}).then(function(t){e.data=t})}},ce=le,me=Object(d["a"])(ce,ie,se,!1,null,null,null);me.options.__file="AvailableRooms.vue";var ue=me.exports,de=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",[o("div",{staticClass:"form-group"},[o("label",[e._v("Номер")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}})]),o("button",{staticClass:"btn btn-primary",on:{click:function(t){e.getRoom(e.number)}}},[e._v("Submit")]),o("div",{staticClass:"form-group"},[o("label",[e._v("Свободно сейчас")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.available,expression:"room.available"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:e.room.available},on:{input:function(t){t.target.composing||e.$set(e.room,"available",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Кол-во мест")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.persons,expression:"room.persons"}],staticClass:"form-control",attrs:{type:"number",disabled:""},domProps:{value:e.room.persons},on:{input:function(t){t.target.composing||e.$set(e.room,"persons",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Этаж")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.floor,expression:"room.floor"}],staticClass:"form-control",attrs:{type:"number",disabled:""},domProps:{value:e.room.floor},on:{input:function(t){t.target.composing||e.$set(e.room,"floor",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Есть ТВ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.has_tv,expression:"room.has_tv"}],attrs:{type:"checkbox",disabled:""},domProps:{checked:Array.isArray(e.room.has_tv)?e._i(e.room.has_tv,null)>-1:e.room.has_tv},on:{change:function(t){var o=e.room.has_tv,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.room,"has_tv",o.concat([n])):i>-1&&e.$set(e.room,"has_tv",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.room,"has_tv",a)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Есть холодильник")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.has_fridge,expression:"room.has_fridge"}],attrs:{type:"checkbox",disabled:""},domProps:{checked:Array.isArray(e.room.has_fridge)?e._i(e.room.has_fridge,null)>-1:e.room.has_fridge},on:{change:function(t){var o=e.room.has_fridge,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.room,"has_fridge",o.concat([n])):i>-1&&e.$set(e.room,"has_fridge",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.room,"has_fridge",a)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Есть телефон")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.has_phone,expression:"room.has_phone"}],attrs:{type:"checkbox",disabled:""},domProps:{checked:Array.isArray(e.room.has_phone)?e._i(e.room.has_phone,null)>-1:e.room.has_phone},on:{change:function(t){var o=e.room.has_phone,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);r.checked?i<0&&e.$set(e.room,"has_phone",o.concat([n])):i>-1&&e.$set(e.room,"has_phone",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.room,"has_phone",a)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Цена")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.price,expression:"room.price"}],staticClass:"form-control",attrs:{type:"number",disabled:""},domProps:{value:e.room.price},on:{input:function(t){t.target.composing||e.$set(e.room,"price",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Цена с завтраком")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.room.price_with_breakfast,expression:"room.price_with_breakfast"}],staticClass:"form-control",attrs:{type:"number",disabled:""},domProps:{value:e.room.price_with_breakfast},on:{input:function(t){t.target.composing||e.$set(e.room,"price_with_breakfast",t.target.value)}}})])])},pe=[],ve={data:function(){return{number:"",room:{id:"",number:"",persons:"",floor:"",has_tv:!1,has_fridge:!1,has_phone:!1,price:"",price_with_breakfast:""}}},methods:{getRoom:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var o=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:fetch("http://localhost:5000/rooms/number/"+t).then(function(e){return e.json()}).then(function(e){if(null===e)return o.room={id:"",number:"",persons:"",floor:"",has_tv:!1,has_fridge:!1,has_phone:!1,price:"",price_with_breakfast:""},void alert("Нет такого номера");o.room=e,o.room.available=0===o.room.available?"Нет":"Да",console.log(o.room.available)}).catch(function(e){});case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},fe=ve,he=Object(d["a"])(fe,de,pe,!1,null,"03fea9a3",null);he.options.__file="GetRoom.vue";var _e=he.exports,be={components:{GetRoom:_e,AvailableRooms:ue,AddRoom:K,Clients:b,Incomes:T,Rooms:x,AddClient:F,EditRoom:X,EditClient:ne},data:function(){return{showTab:ge()}},mounted:function(){var e=this;$(window).on("hashchange",function(){e.showTab=ge(),console.clear()})}};function ge(){return location.hash.replace(/^#/,"")||"rooms"}var we=be,ye=(o("034f"),Object(d["a"])(we,a,n,!1,null,null,null));ye.options.__file="App.vue";var ke=ye.exports,Ce=o("358c");r["a"].use(Ce["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(ke)}}).$mount("#app")},"64a9":function(e,t,o){}});
//# sourceMappingURL=app.00c270fd.js.map