(function(e){function t(t){for(var o,c,l=t[0],i=t[1],s=t[2],u=0,b=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/tutorial-vue/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"35c3":function(e,t,n){"use strict";n("84df")},"4fa0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={id:"app",class:"container"},r=Object(o["e"])("div",{class:"row"},[Object(o["e"])("div",{class:"col-md-12"},[Object(o["e"])("h1",null,"Personas")])],-1),c={class:"row"},l={class:"col-md-12"};function i(e,t,n,i,s,d){var u=Object(o["j"])("formulario-persona"),b=Object(o["j"])("tabla-personas");return Object(o["f"])(),Object(o["c"])("div",a,[r,Object(o["e"])("div",c,[Object(o["e"])("div",l,[Object(o["e"])(u,{onAddPersona:d.agregarPersona},null,8,["onAddPersona"]),Object(o["e"])(b,{personas:s.personas,onDeletePersona:d.eliminarPersona,onActualizarPersona:d.actualizarPersona},null,8,["personas","onDeletePersona","onActualizarPersona"])])])])}n("99af"),n("4de4"),n("d81d");var s=n("5530"),d=n("2909"),u=Object(o["o"])("data-v-0a1d5346");Object(o["h"])("data-v-0a1d5346");var b={id:"tabla-personas"},p={key:0,class:"alert alert-info",role:"alert"},f={class:"table"},j=Object(o["e"])("thead",null,[Object(o["e"])("tr",null,[Object(o["e"])("th",null,"Nombre"),Object(o["e"])("th",null,"Apellido"),Object(o["e"])("th",null,"Email"),Object(o["e"])("th",null,"Acciones")])],-1),O={key:0},m={key:1},v={key:2},h={key:3},y={key:4},g={key:5},k={key:6},P={key:7};Object(o["g"])();var w=u((function(e,t,n,a,r,c){return Object(o["f"])(),Object(o["c"])("div",b,[n.personas.length?Object(o["d"])("",!0):(Object(o["f"])(),Object(o["c"])("div",p," No se han agregado personas ")),Object(o["e"])("table",f,[j,Object(o["e"])("tbody",null,[(Object(o["f"])(!0),Object(o["c"])(o["a"],null,Object(o["i"])(n.personas,(function(t){return Object(o["f"])(),Object(o["c"])("tr",{key:t.id},[r.editando===t.id?(Object(o["f"])(),Object(o["c"])("td",O,[Object(o["m"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(e){return t.nombre=e}},null,8,["onUpdate:modelValue"]),[[o["l"],t.nombre]])])):(Object(o["f"])(),Object(o["c"])("td",m,Object(o["k"])(t.nombre),1)),r.editando===t.id?(Object(o["f"])(),Object(o["c"])("td",v,[Object(o["m"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(e){return t.apellido=e}},null,8,["onUpdate:modelValue"]),[[o["l"],t.apellido]])])):(Object(o["f"])(),Object(o["c"])("td",h,Object(o["k"])(t.apellido),1)),r.editando===t.id?(Object(o["f"])(),Object(o["c"])("td",y,[Object(o["m"])(Object(o["e"])("input",{type:"email",class:"form-control","onUpdate:modelValue":function(e){return t.email=e}},null,8,["onUpdate:modelValue"]),[[o["l"],t.email]])])):(Object(o["f"])(),Object(o["c"])("td",g,Object(o["k"])(t.email),1)),r.editando===t.id?(Object(o["f"])(),Object(o["c"])("td",k,[Object(o["e"])("button",{class:"btn btn-success",onClick:function(e){return c.guardarPersona(t)}},"💾 Guardar",8,["onClick"]),Object(o["e"])("button",{class:"btn btn-secondary ml-2",onClick:function(e){return c.cancelarEdicion(t)}},"❌ Cancelar",8,["onClick"])])):(Object(o["f"])(),Object(o["c"])("td",P,[Object(o["e"])("button",{class:"btn btn-info",onClick:function(e){return c.editarPersona(t)}},"✏️ Editar",8,["onClick"]),Object(o["e"])("button",{class:"btn btn-danger ml-2",onClick:function(n){return e.$emit("delete-persona",t.id)}},"🗑️ Eliminar",8,["onClick"])]))])})),128))])])])})),E={name:"tabla-personas",props:{personas:Array},data:function(){return{editando:null}},methods:{editarPersona:function(e){this.personaEditada=Object.assign({},e),this.editando=e.id},guardarPersona:function(e){e.nombre.length&&e.apellido.length&&e.email.length&&(this.$emit("actualizar-persona",e.id,e),this.editando=null)},cancelarEdicion:function(e){Object.assign(e,this.personaEditada),this.editando=null}}};E.render=w,E.__scopeId="data-v-0a1d5346";var I=E,x=Object(o["o"])("data-v-faf7d7d6");Object(o["h"])("data-v-faf7d7d6");var _={id:"formulario-persona"},A={class:"container"},C={class:"row"},U={class:"col-md-4"},V={class:"form-group"},F=Object(o["e"])("label",null,"Nombre",-1),S={class:"col-md-4"},z={class:"form-group"},T=Object(o["e"])("label",null,"Apellido",-1),D={class:"col-md-4"},M={class:"form-group"},N=Object(o["e"])("label",null,"Email",-1),$=Object(o["e"])("div",{class:"row"},[Object(o["e"])("div",{class:"col-md-4"},[Object(o["e"])("div",{class:"form-group"},[Object(o["e"])("button",{class:"btn btn-primary"},"Añadir persona")])])],-1),J={class:"container"},L={class:"row"},G={class:"col-md-12"},K={key:0,class:"alert alert-danger",role:"alert"},q={key:1,class:"alert alert-success",role:"alert"};Object(o["g"])();var B=x((function(e,t,n,a,r,c){return Object(o["f"])(),Object(o["c"])("div",_,[Object(o["e"])("form",{onSubmit:t[8]||(t[8]=Object(o["n"])((function(){return c.enviarFormulario.apply(c,arguments)}),["prevent"]))},[Object(o["e"])("div",A,[Object(o["e"])("div",C,[Object(o["e"])("div",U,[Object(o["e"])("div",V,[F,Object(o["m"])(Object(o["e"])("input",{ref:"nombre","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.persona.nombre=e}),type:"text",class:["form-control",{"is-invalid":r.procesando&&c.nombreInvalido}],onFocus:t[2]||(t[2]=function(){return c.resetEstado.apply(c,arguments)}),onKeypress:t[3]||(t[3]=function(){return c.resetEstado.apply(c,arguments)})},null,34),[[o["l"],r.persona.nombre]])])]),Object(o["e"])("div",S,[Object(o["e"])("div",z,[T,Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.persona.apellido=e}),type:"text",class:["form-control",{"is-invalid":r.procesando&&c.apellidoInvalido}],onFocus:t[5]||(t[5]=function(){return c.resetEstado.apply(c,arguments)})},null,34),[[o["l"],r.persona.apellido]])])]),Object(o["e"])("div",D,[Object(o["e"])("div",M,[N,Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return r.persona.email=e}),type:"email",class:[{"is-invalid":r.procesando&&c.emailInvalido},"form-control"],onFocus:t[7]||(t[7]=function(){return c.resetEstado.apply(c,arguments)})},null,34),[[o["l"],r.persona.email]])])])]),$]),Object(o["e"])("div",J,[Object(o["e"])("div",L,[Object(o["e"])("div",G,[r.error&&r.procesando?(Object(o["f"])(),Object(o["c"])("div",K," Debes rellenar todos los campos! ")):Object(o["d"])("",!0),r.correcto?(Object(o["f"])(),Object(o["c"])("div",q," La persona ha sido agregada correctamente! ")):Object(o["d"])("",!0)])])])],32)])})),H={name:"formulario-persona",data:function(){return{procesando:!1,correcto:!1,error:!1,persona:{nombre:"",apellido:"",email:""}}},methods:{enviarFormulario:function(){this.procesando=!0,this.resetEstado(),this.nombreInvalido||this.apellidoInvalido||this.emailInvalido?this.error=!0:(this.$emit("add-persona",this.persona),this.$refs.nombre.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.persona={nombre:"",apellido:"",email:""})},resetEstado:function(){this.correcto=!1,this.error=!1}},computed:{nombreInvalido:function(){return this.persona.nombre.length<1},apellidoInvalido:function(){return this.persona.apellido.length<1},emailInvalido:function(){return this.persona.email.length<1}}};n("e515");H.render=B,H.__scopeId="data-v-faf7d7d6";var Q=H,R={name:"app",components:{TablaPersonas:I,FormularioPersona:Q},data:function(){return{personas:[{id:1,nombre:"Jon",apellido:"Nieve",email:"jon@email.com"},{id:2,nombre:"Tyrion",apellido:"Lannister",email:"tyrion@email.com"},{id:3,nombre:"Daenerys",apellido:"Targaryen",email:"daenerys@email.com"}]}},methods:{agregarPersona:function(e){var t=0;this.personas.length>0&&(t=this.personas[this.personas.length-1].id+1),this.personas=[].concat(Object(d["a"])(this.personas),[Object(s["a"])(Object(s["a"])({},e),{},{id:t})])},eliminarPersona:function(e){this.personas=this.personas.filter((function(t){return t.id!==e}))},actualizarPersona:function(e,t){this.personas=this.personas.map((function(n){return n.id===e?t:n}))}}};n("35c3");R.render=i;var W=R;Object(o["b"])(W).mount("#app")},"84df":function(e,t,n){},e515:function(e,t,n){"use strict";n("4fa0")}});
//# sourceMappingURL=app.a482b321.js.map