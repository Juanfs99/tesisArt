(self.webpackChunkART_in_Augmented_Reality=self.webpackChunkART_in_Augmented_Reality||[]).push([[8592],{8225:(t,e,n)=>{"use strict";n.d(e,{c:()=>r});var o=n(3150),i=n(2954),a=n(9461);const r=(t,e)=>{let n,r;const c=(t,o,i)=>{if("undefined"==typeof document)return;const a=document.elementFromPoint(t,o);a&&e(a)?a!==n&&(s(),l(a,i)):s()},l=(t,e)=>{n=t,r||(r=n);const i=n;(0,o.c)(()=>i.classList.add("ion-activated")),e()},s=(t=!1)=>{if(!n)return;const e=n;(0,o.c)(()=>e.classList.remove("ion-activated")),t&&r!==n&&n.click(),n=void 0};return(0,a.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,i.a),onMove:t=>c(t.currentX,t.currentY,i.b),onEnd:()=>{s(!0),(0,i.h)(),r=void 0}})}},7330:(t,e,n)=>{"use strict";n.d(e,{a:()=>i,d:()=>a});var o=n(2377);const i=async(t,e,n,i,a)=>{if(t)return t.attachViewToDom(e,n,a,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>r.classList.add(t)),a&&Object.assign(r,a),e.appendChild(r),await new Promise(t=>(0,o.c)(r,t)),r},a=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},2954:(t,e,n)=>{"use strict";n.d(e,{a:()=>a,b:()=>r,c:()=>i,d:()=>l,h:()=>c});const o={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{o.selection()},a=()=>{o.selectionStart()},r=()=>{o.selectionChanged()},c=()=>{o.selectionEnd()},l=t=>{o.impact(t)}},6575:(t,e,n)=>{"use strict";n.d(e,{s:()=>o});const o=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!r()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,l.forEach(t=>{const n=e.querySelectorAll(t);for(let o=n.length-1;o>=0;o--){const t=n[o];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const r=a(t);for(let e=0;e<r.length;e++)i(r[e])}});const o=a(e);for(let t=0;t<o.length;t++)i(o[t]);const c=document.createElement("div");c.appendChild(e);const s=c.querySelector("div");return null!==s?s.innerHTML:c.innerHTML}catch(e){return console.error(e),""}},i=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),o=e.name;if(!c.includes(o.toLowerCase())){t.removeAttribute(o);continue}const i=e.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(o)}const e=a(t);for(let n=0;n<e.length;n++)i(e[n])},a=t=>null!=t.children?t.children:t.childNodes,r=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},c=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]},408:(t,e,n)=>{"use strict";n.d(e,{S:()=>o});const o={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const o=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const o=e/n,i=t*o-t+"ms",a=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},1269:(t,e,n)=>{"use strict";n.d(e,{c:()=>i,g:()=>a,h:()=>o,o:()=>c});const o=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,a=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},r=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,o)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,o)}return!1}},825:(t,e,n)=>{"use strict";n.d(e,{F:()=>c});var o=n(4762),i=n(639),a=n(8945),r=n(5083);let c=(()=>{class t{constructor(t,e){this.modalCtrl=t,this.avatarService=e,this.profile=null,this.avatarService.getUserProfile().subscribe(t=>{this.profile=t})}updatePuntoObra(){return(0,o.mG)(this,void 0,void 0,function*(){const t=15+this.profile.puntos;yield this.avatarService.updatePuntos(t)})}ngOnInit(){}dismissModal(){this.modalCtrl.dismiss()}contratar(){this.updatePuntoObra(),this.modalCtrl.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(a.IN),i.Y36(r.o))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-modal-galeria"]],decls:38,vars:0,consts:[["slot","start"],["name","chevron-back-outline",2,"color","#6361ea"],["color","primary",3,"click"],[1,"wrapper"],[1,"payment"],[1,"payment-logo"],[1,"form"],[1,"card","space","icon-relative"],[1,"label"],["type","text","placeholder","Nombre de tarjeta",1,"input"],[1,"fas","fa-user"],["type","text","data-mask","0000 0000 0000 0000","placeholder","N\xfamero de tarjeta",1,"input"],[1,"far","fa-credit-card"],[1,"card-grp","space"],[1,"card-item","icon-relative"],["type","text","name","expiry-data","placeholder","00 / 00",1,"input"],[1,"far","fa-calendar-alt"],["type","text","data-mask","000","placeholder","000",1,"input"],[1,"fas","fa-lock"],[1,"btn",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"ion-content"),i.TgZ(1,"ion-toolbar"),i.TgZ(2,"ion-buttons",0),i._UZ(3,"ion-icon",1),i.TgZ(4,"ion-button",2),i.NdJ("click",function(){return e.dismissModal()}),i._uU(5,"Cerrar"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(6,"div"),i.TgZ(7,"div",3),i.TgZ(8,"div",4),i.TgZ(9,"div",5),i.TgZ(10,"p"),i._uU(11,"p"),i.qZA(),i.qZA(),i.TgZ(12,"h2"),i._uU(13,"Payment Gateway"),i.qZA(),i.TgZ(14,"div",6),i.TgZ(15,"div",7),i.TgZ(16,"label",8),i._uU(17,"Nombre:"),i.qZA(),i._UZ(18,"input",9),i._UZ(19,"i",10),i.qZA(),i.TgZ(20,"div",7),i.TgZ(21,"label",8),i._uU(22,"N\xfamero de tarjeta:"),i.qZA(),i._UZ(23,"input",11),i._UZ(24,"i",12),i.qZA(),i.TgZ(25,"div",13),i.TgZ(26,"div",14),i.TgZ(27,"label",8),i._uU(28,"Expiraci\xf3n:"),i.qZA(),i._UZ(29,"input",15),i._UZ(30,"i",16),i.qZA(),i.TgZ(31,"div",14),i.TgZ(32,"label",8),i._uU(33,"CVV:"),i.qZA(),i._UZ(34,"input",17),i._UZ(35,"i",18),i.qZA(),i.qZA(),i.TgZ(36,"div",19),i.NdJ("click",function(){return e.contratar()}),i._uU(37," Contratar plan mensual "),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA())},directives:[a.W2,a.sr,a.Sm,a.gu,a.YG],styles:['@media screen and (max-width: 700px){*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:Ubuntu,sans-serif}body[_ngcontent-%COMP%]{background:#6361ea;margin:0 10px}.payment[_ngcontent-%COMP%]{background:#f8f8f8;max-width:360px;margin:80px auto;height:auto;padding:70px 35px 35px;border-radius:5px;position:relative}.payment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;letter-spacing:2px;margin-bottom:40px;color:#0d3c61}.form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:block;color:#555;margin-bottom:6px}.input[_ngcontent-%COMP%]{padding:13px 0 13px 25px;width:100%;text-align:center;border:2px solid #ddd;border-radius:5px;letter-spacing:1px;word-spacing:3px;outline:none;font-size:16px;color:#555}.card-grp[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-item[_ngcontent-%COMP%]{width:48%}.space[_ngcontent-%COMP%]{margin-bottom:20px}.icon-relative[_ngcontent-%COMP%]{position:relative}.icon-relative[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .icon-relative[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{position:absolute;bottom:12px;left:15px;font-size:20px;color:#555}.btn[_ngcontent-%COMP%]{margin-top:40px;background:#6361ea;padding:12px;text-align:center;color:#f8f8f8;border-radius:5px;cursor:pointer}.payment-logo[_ngcontent-%COMP%]{top:-50px;left:50%;transform:translateX(-50%);width:100px;height:100px;background:#f8f8f8;box-shadow:0 0 5px #0003;text-align:center;line-height:85px}.payment-logo[_ngcontent-%COMP%], .payment-logo[_ngcontent-%COMP%]:before{position:absolute;border-radius:50%}.payment-logo[_ngcontent-%COMP%]:before{content:"";top:5px;left:5px;width:90px;height:90px;background:#6361ea}.payment-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;color:#f8f8f8;font-family:Baloo Bhaijaan,cursive;font-size:58px}}@media screen and (max-width: 700px) and (max-width: 420px){.card-grp[_ngcontent-%COMP%]{flex-direction:column}.card-item[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.btn[_ngcontent-%COMP%]{margin-top:20px}}@media screen and (min-width: 700px){*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:Ubuntu,sans-serif}body[_ngcontent-%COMP%]{background:#6361ea;margin:0 10px}.payment[_ngcontent-%COMP%]{background:#f8f8f8;max-width:360px;margin:80px auto;height:auto;padding:70px 35px 35px;border-radius:5px;position:relative}.payment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;letter-spacing:2px;margin-bottom:40px;color:#6361ea}.form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:block;color:#555;margin-bottom:6px}.input[_ngcontent-%COMP%]{padding:13px 0 13px 25px;width:100%;text-align:center;border:2px solid #ddd;border-radius:5px;letter-spacing:1px;word-spacing:3px;outline:none;font-size:16px;color:#555}.card-grp[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-item[_ngcontent-%COMP%]{width:48%}.space[_ngcontent-%COMP%]{margin-bottom:20px}.icon-relative[_ngcontent-%COMP%]{position:relative}.icon-relative[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .icon-relative[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{position:absolute;bottom:12px;left:15px;font-size:20px;color:#555}.btn[_ngcontent-%COMP%]{margin-top:40px;background:#6361ea;padding:12px;text-align:center;color:#f8f8f8;border-radius:5px;cursor:pointer}.payment-logo[_ngcontent-%COMP%]{top:-50px;left:50%;transform:translateX(-50%);width:100px;height:100px;background:#f8f8f8;box-shadow:0 0 5px #0003;text-align:center;line-height:85px}.payment-logo[_ngcontent-%COMP%], .payment-logo[_ngcontent-%COMP%]:before{position:absolute;border-radius:50%}.payment-logo[_ngcontent-%COMP%]:before{content:"";top:5px;left:5px;width:90px;height:90px;background:#6361ea}.payment-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;color:#f8f8f8;font-family:Baloo Bhaijaan,cursive;font-size:58px}}@media screen and (min-width: 700px) and (max-width: 420px){.card-grp[_ngcontent-%COMP%]{flex-direction:column}.card-item[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.btn[_ngcontent-%COMP%]{margin-top:20px}}']}),t})()},8656:(t,e,n)=>{"use strict";n.d(e,{q:()=>c});var o=n(4762),i=n(639),a=n(8945),r=n(5083);let c=(()=>{class t{constructor(t,e){this.modalCtrl=t,this.avatarService=e,this.profile=null,this.avatarService.getUserProfile().subscribe(t=>{this.profile=t})}updatePuntoMensual(){return(0,o.mG)(this,void 0,void 0,function*(){const t=5+this.profile.puntos;yield this.avatarService.updatePuntos(t)})}ngOnInit(){}dismissModal(){this.modalCtrl.dismiss()}contratar(){this.updatePuntoMensual(),this.modalCtrl.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(a.IN),i.Y36(r.o))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-modal-mensual"]],decls:38,vars:0,consts:[["slot","start"],["name","chevron-back-outline",2,"color","#6361ea"],["color","primary",3,"click"],[1,"wrapper"],[1,"payment"],[1,"payment-logo"],[1,"form"],[1,"card","space","icon-relative"],[1,"label"],["type","text","placeholder","Nombre de tarjeta",1,"input"],[1,"fas","fa-user"],["type","text","data-mask","0000 0000 0000 0000","placeholder","N\xfamero de tarjeta",1,"input"],[1,"far","fa-credit-card"],[1,"card-grp","space"],[1,"card-item","icon-relative"],["type","text","name","expiry-data","placeholder","00 / 00",1,"input"],[1,"far","fa-calendar-alt"],["type","text","data-mask","000","placeholder","000",1,"input"],[1,"fas","fa-lock"],[1,"btn",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"ion-content"),i.TgZ(1,"ion-toolbar"),i.TgZ(2,"ion-buttons",0),i._UZ(3,"ion-icon",1),i.TgZ(4,"ion-button",2),i.NdJ("click",function(){return e.dismissModal()}),i._uU(5,"Cerrar"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(6,"div"),i.TgZ(7,"div",3),i.TgZ(8,"div",4),i.TgZ(9,"div",5),i.TgZ(10,"p"),i._uU(11,"p"),i.qZA(),i.qZA(),i.TgZ(12,"h2"),i._uU(13,"Payment Gateway"),i.qZA(),i.TgZ(14,"div",6),i.TgZ(15,"div",7),i.TgZ(16,"label",8),i._uU(17,"Nombre:"),i.qZA(),i._UZ(18,"input",9),i._UZ(19,"i",10),i.qZA(),i.TgZ(20,"div",7),i.TgZ(21,"label",8),i._uU(22,"N\xfamero de tarjeta:"),i.qZA(),i._UZ(23,"input",11),i._UZ(24,"i",12),i.qZA(),i.TgZ(25,"div",13),i.TgZ(26,"div",14),i.TgZ(27,"label",8),i._uU(28,"Expiraci\xf3n:"),i.qZA(),i._UZ(29,"input",15),i._UZ(30,"i",16),i.qZA(),i.TgZ(31,"div",14),i.TgZ(32,"label",8),i._uU(33,"CVV:"),i.qZA(),i._UZ(34,"input",17),i._UZ(35,"i",18),i.qZA(),i.qZA(),i.TgZ(36,"div",19),i.NdJ("click",function(){return e.contratar()}),i._uU(37," Contratar plan mensual "),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA())},directives:[a.W2,a.sr,a.Sm,a.gu,a.YG],styles:['@media screen and (max-width: 700px){*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:Ubuntu,sans-serif}body[_ngcontent-%COMP%]{background:#6361ea;margin:0 10px}.payment[_ngcontent-%COMP%]{background:#f8f8f8;max-width:360px;margin:80px auto;height:auto;padding:70px 35px 35px;border-radius:5px;position:relative}.payment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;letter-spacing:2px;margin-bottom:40px;color:#0d3c61}.form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:block;color:#555;margin-bottom:6px}.input[_ngcontent-%COMP%]{padding:13px 0 13px 25px;width:100%;text-align:center;border:2px solid #ddd;border-radius:5px;letter-spacing:1px;word-spacing:3px;outline:none;font-size:16px;color:#555}.card-grp[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-item[_ngcontent-%COMP%]{width:48%}.space[_ngcontent-%COMP%]{margin-bottom:20px}.icon-relative[_ngcontent-%COMP%]{position:relative}.icon-relative[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .icon-relative[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{position:absolute;bottom:12px;left:15px;font-size:20px;color:#555}.btn[_ngcontent-%COMP%]{margin-top:40px;background:#6361ea;padding:12px;text-align:center;color:#f8f8f8;border-radius:5px;cursor:pointer}.payment-logo[_ngcontent-%COMP%]{top:-50px;left:50%;transform:translateX(-50%);width:100px;height:100px;background:#f8f8f8;box-shadow:0 0 5px #0003;text-align:center;line-height:85px}.payment-logo[_ngcontent-%COMP%], .payment-logo[_ngcontent-%COMP%]:before{position:absolute;border-radius:50%}.payment-logo[_ngcontent-%COMP%]:before{content:"";top:5px;left:5px;width:90px;height:90px;background:#6361ea}.payment-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;color:#f8f8f8;font-family:Baloo Bhaijaan,cursive;font-size:58px}}@media screen and (max-width: 700px) and (max-width: 420px){.card-grp[_ngcontent-%COMP%]{flex-direction:column}.card-item[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.btn[_ngcontent-%COMP%]{margin-top:20px}}@media screen and (min-width: 700px){*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:Ubuntu,sans-serif}body[_ngcontent-%COMP%]{background:#6361ea;margin:0 10px}.payment[_ngcontent-%COMP%]{background:#f8f8f8;max-width:360px;margin:80px auto;height:auto;padding:70px 35px 35px;border-radius:5px;position:relative}.payment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;letter-spacing:2px;margin-bottom:40px;color:#6361ea}.form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:block;color:#555;margin-bottom:6px}.input[_ngcontent-%COMP%]{padding:13px 0 13px 25px;width:100%;text-align:center;border:2px solid #ddd;border-radius:5px;letter-spacing:1px;word-spacing:3px;outline:none;font-size:16px;color:#555}.card-grp[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-item[_ngcontent-%COMP%]{width:48%}.space[_ngcontent-%COMP%]{margin-bottom:20px}.icon-relative[_ngcontent-%COMP%]{position:relative}.icon-relative[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .icon-relative[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{position:absolute;bottom:12px;left:15px;font-size:20px;color:#555}.btn[_ngcontent-%COMP%]{margin-top:40px;background:#6361ea;padding:12px;text-align:center;color:#f8f8f8;border-radius:5px;cursor:pointer}.payment-logo[_ngcontent-%COMP%]{top:-50px;left:50%;transform:translateX(-50%);width:100px;height:100px;background:#f8f8f8;box-shadow:0 0 5px #0003;text-align:center;line-height:85px}.payment-logo[_ngcontent-%COMP%], .payment-logo[_ngcontent-%COMP%]:before{position:absolute;border-radius:50%}.payment-logo[_ngcontent-%COMP%]:before{content:"";top:5px;left:5px;width:90px;height:90px;background:#6361ea}.payment-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;color:#f8f8f8;font-family:Baloo Bhaijaan,cursive;font-size:58px}}@media screen and (min-width: 700px) and (max-width: 420px){.card-grp[_ngcontent-%COMP%]{flex-direction:column}.card-item[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.btn[_ngcontent-%COMP%]{margin-top:20px}}']}),t})()},3562:(t,e,n)=>{"use strict";n.d(e,{J:()=>p});var o=n(4762),i=n(665),a=n(639),r=n(216),c=n(8945),l=n(5083),s=n(2468);let p=(()=>{class t{constructor(t,e,n,o,i,a,r){this.route=t,this.loadingController=e,this.avatarService=n,this.dataService=o,this.fb=i,this.alertController=a,this.modalCtrl=r,this.profile=null,this.avatarService.getUserProfile().subscribe(t=>{this.profile=t})}updatePuntoObra(){return(0,o.mG)(this,void 0,void 0,function*(){const t=-1+this.profile.puntos;yield this.avatarService.updatePuntos(t)})}crearObra(){return(0,o.mG)(this,void 0,void 0,function*(){const t=yield this.loadingController.create();yield t.present(),this.dataService.addObra(this.obras.value).then(e=>(0,o.mG)(this,void 0,void 0,function*(){e?(t.dismiss(),this.updatePuntoObra(),this.showAlert("Obra Registrada","Esta obra entrar\xe1 en revisi\xf3n"),this.dismissModal()):(t.dismiss(),this.showAlert("Fallo de registro","Por favor, intente de nuevo"),this.dismissModal())}))})}showAlert(t,e){return(0,o.mG)(this,void 0,void 0,function*(){const n=yield this.alertController.create({header:t,message:e,buttons:["OK"]});yield n.present()})}get nombre(){return this.obras.get("nombre")}get material(){return this.obras.get("material")}get concepto(){return this.obras.get("concepto")}get dimensiones(){return this.obras.get("dimensiones")}get precio(){return this.obras.get("precio")}get modeloObraFBX(){return this.obras.get("modeloObraFBX")}get modeloObraUSDZ(){return this.obras.get("modeloObraUSDZ")}get modeloObraGLB(){return this.obras.get("modeloObraGLB")}get imagenObra(){return this.obras.get("imagenObra")}ngOnInit(){this.obras=this.fb.group({nombre:["",[i.kI.required]],concepto:["",[i.kI.required]],material:["",[i.kI.required]],dimensiones:["",[i.kI.required]],precio:["",[i.kI.required]],modeloObraFBX:[null,[i.kI.required]],modeloObraUSDZ:"",modeloObraGLB:"",fbx:null,imagenObra:[null,[i.kI.required]],imagen:null})}dismissModal(){this.modalCtrl.dismiss()}onFileChange(t){const e=new FileReader;if(t.target.files&&t.target.files.length){const[n]=t.target.files;e.readAsDataURL(n),e.onload=()=>{this.obras.patchValue({fbx:e.result})}}}onFileChangeImg(t){const e=new FileReader;if(t.target.files&&t.target.files.length){const[n]=t.target.files;e.readAsDataURL(n),e.onload=()=>{this.obras.patchValue({imagen:e.result})}}}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(r.F0),a.Y36(c.HT),a.Y36(l.o),a.Y36(s.D),a.Y36(i.qu),a.Y36(c.Br),a.Y36(c.IN))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-modal-subir"]],decls:51,vars:1,consts:[["slot","start"],["name","chevron-back-outline",2,"color","#6361ea"],["color","primary",3,"click"],[3,"formGroup"],["color"," primary","justify-content-center",""],["align-self-center","","size-md","8","size-lg","8","size-xs","12",2,"margin-left","auto","margin-right","auto"],[1,"ion-padding"],["position","stacked",2,"margin-left","5%","font-size","17px","color","#56B4E5","margin-top","2%"],[2,"margin-bottom","5%"],["name","person-outline",1,"icon-login",2,"margin-right","15px","color","#6361ea"],["formControlName","nombre","name","name","type","name","placeholder","Nombre"],["name","bulb-outline",1,"icon-login",2,"margin-right","15px","color","#6361ea"],["formControlName","concepto","name","name","type","name","placeholder","Concepto de la obra"],["name","hammer-outline",1,"icon-login",2,"margin-right","15px","color","#6361ea"],["formControlName","material","name","name","type","name","placeholder","Materiales"],["name","expand-outline",1,"icon-login",2,"margin-right","15px","color","#6361ea"],["formControlName","dimensiones","name","name","type","name","placeholder","Dimensiones"],["name","cash-outline",1,"icon-login",2,"margin-right","15px","color","#6361ea"],["formControlName","precio","name","name","type","name","placeholder","Precio"],["name","cloud-upload-outline",1,"icon-login",2,"margin-right","15px","color","#6361ea"],["type","file","formControlName","modeloObraFBX","accept",".fbx",1,"custom-file-input",3,"change"],["type","file","formControlName","imagenObra","accept",".jpg, .jpeg, .png",1,"custom-file-inputImg",3,"change"],["expand","block",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"ion-content"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",0),a._UZ(3,"ion-icon",1),a.TgZ(4,"ion-button",2),a.NdJ("click",function(){return e.dismissModal()}),a._uU(5,"Cerrar"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"div"),a.TgZ(7,"form",3),a.TgZ(8,"ion-grid"),a.TgZ(9,"ion-row",4),a.TgZ(10,"ion-col",5),a.TgZ(11,"div",6),a.TgZ(12,"ion-label",7),a._uU(13," Nombre de la obra "),a.qZA(),a.TgZ(14,"ion-item",8),a._UZ(15,"ion-icon",9),a._UZ(16,"ion-input",10),a.qZA(),a.TgZ(17,"div"),a.TgZ(18,"ion-label",7),a._uU(19," Concepto de la obra "),a.qZA(),a.TgZ(20,"ion-item",8),a._UZ(21,"ion-icon",11),a._UZ(22,"ion-input",12),a.qZA(),a.qZA(),a.TgZ(23,"ion-label",7),a._uU(24," Materiales de la obra "),a.qZA(),a.TgZ(25,"ion-item",8),a._UZ(26,"ion-icon",13),a._UZ(27,"ion-input",14),a.qZA(),a.TgZ(28,"ion-label",7),a._uU(29," Dimensiones de la obra "),a.qZA(),a.TgZ(30,"ion-item",8),a._UZ(31,"ion-icon",15),a._UZ(32,"ion-input",16),a.qZA(),a.TgZ(33,"ion-label",7),a._uU(34," Precio de la obra "),a.qZA(),a.TgZ(35,"ion-item",8),a._UZ(36,"ion-icon",17),a._UZ(37,"ion-input",18),a.qZA(),a.TgZ(38,"ion-label",7),a._uU(39," Sube tu obra en 3D "),a.qZA(),a.TgZ(40,"ion-item",8),a._UZ(41,"ion-icon",19),a.TgZ(42,"input",20),a.NdJ("change",function(t){return e.onFileChange(t)}),a.qZA(),a.qZA(),a.TgZ(43,"ion-label",7),a._uU(44," Sube una foto de tu obra "),a.qZA(),a.TgZ(45,"ion-item",8),a._UZ(46,"ion-icon",19),a.TgZ(47,"input",21),a.NdJ("change",function(t){return e.onFileChangeImg(t)}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(48,"div",6),a.TgZ(49,"ion-button",22),a.NdJ("click",function(){return e.crearObra()}),a._uU(50,"Crear Obra "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(7),a.Q6J("formGroup",e.obras))},directives:[c.W2,c.sr,c.Sm,c.gu,c.YG,i._Y,i.JL,i.sg,c.jY,c.Nd,c.wI,c.Q$,c.Ie,c.pK,c.j9,i.JJ,i.u,i.Fj],styles:['.textCat[_ngcontent-%COMP%]{font-weight:400;font-style:normal;padding-left:5%}.textCat[_ngcontent-%COMP%], .textCat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:proxima-nova,sans-serif}.textCat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6361ea;font-weight:600}.custom-file-input[_ngcontent-%COMP%]::-webkit-file-upload-button{visibility:hidden}.custom-file-input[_ngcontent-%COMP%]:before{content:"Select .fbx file";display:inline-block;background:linear-gradient(0deg,#f9f9f9,#e3e3e3);border:1px solid #6361ea;border-radius:3px;padding:5px 8px;outline:none;-webkit-user-select:none;cursor:pointer;text-shadow:1px 1px #fff;font-weight:700;font-size:10pt;color:#6361ea}.custom-file-input[_ngcontent-%COMP%]:hover:before{border-color:#6361ea}.custom-file-input[_ngcontent-%COMP%]:active:before{background:-webkit-linear-gradient(top,#e3e3e3,#f9f9f9)}.custom-file-inputImg[_ngcontent-%COMP%]::-webkit-file-upload-button{visibility:hidden}.custom-file-inputImg[_ngcontent-%COMP%]:before{content:"Select image";display:inline-block;background:linear-gradient(0deg,#f9f9f9,#e3e3e3);border:1px solid #6361ea;border-radius:3px;padding:5px 8px;outline:none;-webkit-user-select:none;cursor:pointer;text-shadow:1px 1px #fff;font-weight:700;font-size:10pt;color:#6361ea}.custom-file-inputImg[_ngcontent-%COMP%]:hover:before{border-color:#6361ea}.custom-file-inputImg[_ngcontent-%COMP%]:active:before{background:-webkit-linear-gradient(top,#e3e3e3,#f9f9f9)}']}),t})()},3052:(t,e,n)=>{"use strict";n.d(e,{W:()=>c});var o=n(4762),i=n(639),a=n(8945),r=n(5083);let c=(()=>{class t{constructor(t,e){this.modalCtrl=t,this.avatarService=e,this.profile=null,this.avatarService.getUserProfile().subscribe(t=>{this.profile=t})}updatePuntoObra(){return(0,o.mG)(this,void 0,void 0,function*(){const t=1+this.profile.puntos;yield this.avatarService.updatePuntos(t)})}ngOnInit(){}dismissModal(){this.modalCtrl.dismiss()}contratar(){this.updatePuntoObra(),this.modalCtrl.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(a.IN),i.Y36(r.o))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-modalpor-obra"]],decls:38,vars:0,consts:[["slot","start"],["name","chevron-back-outline",2,"color","#6361ea"],["color","primary",3,"click"],[1,"wrapper"],[1,"payment"],[1,"payment-logo"],[1,"form"],[1,"card","space","icon-relative"],[1,"label"],["type","text","placeholder","Nombre de tarjeta",1,"input"],[1,"fas","fa-user"],["type","text","data-mask","0000 0000 0000 0000","placeholder","N\xfamero de tarjeta",1,"input"],[1,"far","fa-credit-card"],[1,"card-grp","space"],[1,"card-item","icon-relative"],["type","text","name","expiry-data","placeholder","00 / 00",1,"input"],[1,"far","fa-calendar-alt"],["type","text","data-mask","000","placeholder","000",1,"input"],[1,"fas","fa-lock"],[1,"btn",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"ion-content"),i.TgZ(1,"ion-toolbar"),i.TgZ(2,"ion-buttons",0),i._UZ(3,"ion-icon",1),i.TgZ(4,"ion-button",2),i.NdJ("click",function(){return e.dismissModal()}),i._uU(5,"Cerrar"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(6,"div"),i.TgZ(7,"div",3),i.TgZ(8,"div",4),i.TgZ(9,"div",5),i.TgZ(10,"p"),i._uU(11,"p"),i.qZA(),i.qZA(),i.TgZ(12,"h2"),i._uU(13,"Payment Gateway"),i.qZA(),i.TgZ(14,"div",6),i.TgZ(15,"div",7),i.TgZ(16,"label",8),i._uU(17,"Nombre:"),i.qZA(),i._UZ(18,"input",9),i._UZ(19,"i",10),i.qZA(),i.TgZ(20,"div",7),i.TgZ(21,"label",8),i._uU(22,"N\xfamero de tarjeta:"),i.qZA(),i._UZ(23,"input",11),i._UZ(24,"i",12),i.qZA(),i.TgZ(25,"div",13),i.TgZ(26,"div",14),i.TgZ(27,"label",8),i._uU(28,"Expiraci\xf3n:"),i.qZA(),i._UZ(29,"input",15),i._UZ(30,"i",16),i.qZA(),i.TgZ(31,"div",14),i.TgZ(32,"label",8),i._uU(33,"CVV:"),i.qZA(),i._UZ(34,"input",17),i._UZ(35,"i",18),i.qZA(),i.qZA(),i.TgZ(36,"div",19),i.NdJ("click",function(){return e.contratar()}),i._uU(37," Contratar plan mensual "),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA())},directives:[a.W2,a.sr,a.Sm,a.gu,a.YG],styles:['@media screen and (max-width: 700px){*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:Ubuntu,sans-serif}body[_ngcontent-%COMP%]{background:#6361ea;margin:0 10px}.payment[_ngcontent-%COMP%]{background:#f8f8f8;max-width:360px;margin:80px auto;height:auto;padding:70px 35px 35px;border-radius:5px;position:relative}.payment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;letter-spacing:2px;margin-bottom:40px;color:#0d3c61}.form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:block;color:#555;margin-bottom:6px}.input[_ngcontent-%COMP%]{padding:13px 0 13px 25px;width:100%;text-align:center;border:2px solid #ddd;border-radius:5px;letter-spacing:1px;word-spacing:3px;outline:none;font-size:16px;color:#555}.card-grp[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-item[_ngcontent-%COMP%]{width:48%}.space[_ngcontent-%COMP%]{margin-bottom:20px}.icon-relative[_ngcontent-%COMP%]{position:relative}.icon-relative[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .icon-relative[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{position:absolute;bottom:12px;left:15px;font-size:20px;color:#555}.btn[_ngcontent-%COMP%]{margin-top:40px;background:#6361ea;padding:12px;text-align:center;color:#f8f8f8;border-radius:5px;cursor:pointer}.payment-logo[_ngcontent-%COMP%]{top:-50px;left:50%;transform:translateX(-50%);width:100px;height:100px;background:#f8f8f8;box-shadow:0 0 5px #0003;text-align:center;line-height:85px}.payment-logo[_ngcontent-%COMP%], .payment-logo[_ngcontent-%COMP%]:before{position:absolute;border-radius:50%}.payment-logo[_ngcontent-%COMP%]:before{content:"";top:5px;left:5px;width:90px;height:90px;background:#6361ea}.payment-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;color:#f8f8f8;font-family:Baloo Bhaijaan,cursive;font-size:58px}}@media screen and (max-width: 700px) and (max-width: 420px){.card-grp[_ngcontent-%COMP%]{flex-direction:column}.card-item[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.btn[_ngcontent-%COMP%]{margin-top:20px}}@media screen and (min-width: 700px){*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:Ubuntu,sans-serif}body[_ngcontent-%COMP%]{background:#6361ea;margin:0 10px}.payment[_ngcontent-%COMP%]{background:#f8f8f8;max-width:360px;margin:80px auto;height:auto;padding:70px 35px 35px;border-radius:5px;position:relative}.payment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;letter-spacing:2px;margin-bottom:40px;color:#6361ea}.form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:block;color:#555;margin-bottom:6px}.input[_ngcontent-%COMP%]{padding:13px 0 13px 25px;width:100%;text-align:center;border:2px solid #ddd;border-radius:5px;letter-spacing:1px;word-spacing:3px;outline:none;font-size:16px;color:#555}.card-grp[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.card-item[_ngcontent-%COMP%]{width:48%}.space[_ngcontent-%COMP%]{margin-bottom:20px}.icon-relative[_ngcontent-%COMP%]{position:relative}.icon-relative[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%], .icon-relative[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{position:absolute;bottom:12px;left:15px;font-size:20px;color:#555}.btn[_ngcontent-%COMP%]{margin-top:40px;background:#6361ea;padding:12px;text-align:center;color:#f8f8f8;border-radius:5px;cursor:pointer}.payment-logo[_ngcontent-%COMP%]{top:-50px;left:50%;transform:translateX(-50%);width:100px;height:100px;background:#f8f8f8;box-shadow:0 0 5px #0003;text-align:center;line-height:85px}.payment-logo[_ngcontent-%COMP%], .payment-logo[_ngcontent-%COMP%]:before{position:absolute;border-radius:50%}.payment-logo[_ngcontent-%COMP%]:before{content:"";top:5px;left:5px;width:90px;height:90px;background:#6361ea}.payment-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;color:#f8f8f8;font-family:Baloo Bhaijaan,cursive;font-size:58px}}@media screen and (min-width: 700px) and (max-width: 420px){.card-grp[_ngcontent-%COMP%]{flex-direction:column}.card-item[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.btn[_ngcontent-%COMP%]{margin-top:20px}}']}),t})()}}]);