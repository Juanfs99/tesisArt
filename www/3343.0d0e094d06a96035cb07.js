(self.webpackChunkprototipo1=self.webpackChunkprototipo1||[]).push([[3343],{3343:(e,n,o)=>{"use strict";o.r(n),o.d(n,{SignupPageModule:()=>p});var t=o(8583),i=o(8945),r=o(216),a=o(4762),l=o(665),s=o(639),u=o(7556);function g(e,n){1&e&&(s.TgZ(0,"ion-note",35),s._uU(1,"Email is invalid "),s.qZA())}function d(e,n){1&e&&(s.TgZ(0,"ion-note",35),s._uU(1,"Password needs to be 6 characters"),s.qZA())}const c=[{path:"",component:(()=>{class e{constructor(e,n,o,t,i){this.route=e,this.fb=n,this.loadingController=o,this.alertController=t,this.authService=i,this.usuario={email:"",password:"",name:"",uid:"",lastname:"",cedula:"",phonenumber:"",imageUrl:"https://firebasestorage.googleapis.com/v0/b/art-in-augmented-reality.appspot.com/o/AppComponentes%2FImagenes%2Favatar-01.jpg?alt=media&token=505907d3-2ad4-4335-a3d3-a02f020de44b",country:"",puntos:1,frase:"\xa1Escribre tu frase aqu\xed!"}}onClickHome(){this.route.navigate(["/home"])}onClickLogin(){this.route.navigate(["/login"])}register(){return(0,a.mG)(this,void 0,void 0,function*(){const e=yield this.loadingController.create();yield e.present();const n=yield this.authService.register(this.credentials.value).then(()=>(0,a.mG)(this,void 0,void 0,function*(){const e=yield this.authService.getUid();return this.usuario.uid=e,yield this.authService.addUser(this.usuario)}));yield e.dismiss(),n?(this.showAlert("Usuario Registrado","Bienvenido a ART in Augmented Reality"),window.location.reload(),this.authService.logout(),this.route.navigateByUrl("/login",{replaceUrl:!0})):this.showAlert("Fallo de registro","Por favor, intente de nuevo")})}showAlert(e,n){return(0,a.mG)(this,void 0,void 0,function*(){const o=yield this.alertController.create({header:e,message:n,buttons:["OK"]});yield o.present()})}get email(){return this.credentials.get("email")}get password(){return this.credentials.get("password")}get name(){return this.credentials.get("name")}get lastname(){return this.credentials.get("lastname")}get cedula(){return this.credentials.get("cedula")}get phonenumber(){return this.credentials.get("phonenumber")}get country(){return this.credentials.get("country")}ngOnInit(){this.credentials=this.fb.group({email:["",[l.kI.required,l.kI.email]],password:["",[l.kI.required,l.kI.minLength(6)]],name:["",[l.kI.required]],lastname:["",[l.kI.required]],country:["",[l.kI.required]],cedula:["",[l.kI.required,l.kI.minLength(10)]],phonenumber:["",[l.kI.required,l.kI.minLength(7)]]})}}return e.\u0275fac=function(n){return new(n||e)(s.Y36(r.F0),s.Y36(l.qu),s.Y36(i.HT),s.Y36(i.Br),s.Y36(u.e))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-signup"]],decls:51,vars:11,consts:[[1,"ion-no-border"],["slot","start"],["menu","first","color","primary"],["slot","end"],[3,"click"],["name","home"],[1,"row",2,"margin-top","5%"],[1,"column","logoPhone"],["src","assets/logo.png","alt","",2,"display","block","margin-left","auto","margin-right","auto","width","40%","padding-top","20%"],[1,"column","logoDesktop"],["id","container",1,"ion-padding"],["alt","PruebaRobot","src","/assets/mantaraya.glb","ios-src","/assets/mantaraya.usdz","ar","","unestable-webxr","","quick-lock-browsers","safari chrome","shadow-intensity","1","interaction-prompt","auto","auto-rotate","","ar","","magic-leap","","camera-controls",""],[1,"column"],[1,"titulo"],[3,"formGroup","ngSubmit"],["color","primary","justify-content-center",""],["align-self-center","","size-md","8","size-lg","8","size-xs","12",2,"margin-left","auto","margin-right","auto"],[2,"text-align","center"],[1,"ion-padding"],["name","person-outline",1,"icon-login",2,"margin-right","15px","color","#6361ea"],["name","name","type","name","placeholder","Nombres","formControlName","name",3,"ngModel","ngModelChange"],["name","lastName","type","lastName","placeholder","Apellidos","formControlName","lastname",3,"ngModel","ngModelChange"],["name","card-outline",1,"icon-login",2,"margin-right","15px","color","#6361ea"],["name","number","type","number","placeholder","C\xe9dula","formControlName","cedula",3,"ngModel","ngModelChange"],["name","call-outline",1,"icon-login",2,"margin-right","15px","color","#6361ea"],["name","number","type","number","placeholder","N\xfamero telef\xf3nico","formControlName","phonenumber",3,"ngModel","ngModelChange"],["name","map-outline",1,"icon-login",2,"margin-right","15px","color","#6361ea"],["name","text","type","text","placeholder","Pa\xeds de residencia","formControlName","country",3,"ngModel","ngModelChange"],["fill","solid",1,"ion-margin-bottom"],["name","mail-outline",1,"icon-login",2,"margin-right","15px","color","#6361ea"],["name","email","type","email","placeholder","Email","formControlName","email",3,"ngModel","ngModelChange"],["slot","error",4,"ngIf"],["name","lock-open-outline",2,"margin-right","15px","color","#6361ea"],["name","password","type","password","required","","placeholder","Contrase\xf1a","formControlName","password",3,"ngModel","ngModelChange"],["expand","block",3,"disabled","click"],["slot","error"]],template:function(e,n){1&e&&(s.TgZ(0,"ion-header",0),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-buttons",1),s._UZ(3,"ion-menu-button",2),s.qZA(),s.TgZ(4,"ion-buttons",3),s.TgZ(5,"ion-button",4),s.NdJ("click",function(){return n.onClickHome()}),s._UZ(6,"ion-icon",5),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(7,"ion-content"),s.TgZ(8,"div",6),s.TgZ(9,"div",7),s._UZ(10,"img",8),s.qZA(),s.TgZ(11,"div",9),s.TgZ(12,"div",10),s._UZ(13,"model-viewer",11),s.qZA(),s.qZA(),s.TgZ(14,"div",12),s.TgZ(15,"h4",13),s._uU(16," \xdanete a ARt "),s.qZA(),s.TgZ(17,"form",14),s.NdJ("ngSubmit",function(){return n.register()}),s.TgZ(18,"ion-grid"),s.TgZ(19,"ion-row",15),s.TgZ(20,"ion-col",16),s._UZ(21,"div",17),s.TgZ(22,"div",18),s.TgZ(23,"ion-item"),s._UZ(24,"ion-icon",19),s.TgZ(25,"ion-input",20),s.NdJ("ngModelChange",function(e){return n.usuario.name=e}),s.qZA(),s.qZA(),s.TgZ(26,"ion-item"),s._UZ(27,"ion-icon",19),s.TgZ(28,"ion-input",21),s.NdJ("ngModelChange",function(e){return n.usuario.lastname=e}),s.qZA(),s.qZA(),s.TgZ(29,"ion-item"),s._UZ(30,"ion-icon",22),s.TgZ(31,"ion-input",23),s.NdJ("ngModelChange",function(e){return n.usuario.cedula=e}),s.qZA(),s.qZA(),s.TgZ(32,"ion-item"),s._UZ(33,"ion-icon",24),s.TgZ(34,"ion-input",25),s.NdJ("ngModelChange",function(e){return n.usuario.phonenumber=e}),s.qZA(),s.qZA(),s.TgZ(35,"ion-item"),s._UZ(36,"ion-icon",26),s.TgZ(37,"ion-input",27),s.NdJ("ngModelChange",function(e){return n.usuario.country=e}),s.qZA(),s.qZA(),s.TgZ(38,"ion-item",28),s._UZ(39,"ion-icon",29),s.TgZ(40,"ion-input",30),s.NdJ("ngModelChange",function(e){return n.usuario.email=e}),s.qZA(),s.YNc(41,g,2,0,"ion-note",31),s.qZA(),s.TgZ(42,"ion-note"),s._uU(43,"La contrase\xf1a debe contener m\xednimo 6 caract\xe9res:"),s.qZA(),s.TgZ(44,"ion-item",28),s._UZ(45,"ion-icon",32),s.TgZ(46,"ion-input",33),s.NdJ("ngModelChange",function(e){return n.usuario.password=e}),s.qZA(),s.YNc(47,d,2,0,"ion-note",31),s.qZA(),s.qZA(),s.TgZ(48,"div",18),s.TgZ(49,"ion-button",34),s.NdJ("click",function(){return n.register()}),s._uU(50,"Crear cuenta "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(17),s.Q6J("formGroup",n.credentials),s.xp6(8),s.Q6J("ngModel",n.usuario.name),s.xp6(3),s.Q6J("ngModel",n.usuario.lastname),s.xp6(3),s.Q6J("ngModel",n.usuario.cedula),s.xp6(3),s.Q6J("ngModel",n.usuario.phonenumber),s.xp6(3),s.Q6J("ngModel",n.usuario.country),s.xp6(3),s.Q6J("ngModel",n.usuario.email),s.xp6(1),s.Q6J("ngIf",(n.email.dirty||n.email.touched)&&n.email.errors),s.xp6(5),s.Q6J("ngModel",n.usuario.password),s.xp6(1),s.Q6J("ngIf",(n.password.dirty||n.password.touched)&&n.password.errors),s.xp6(2),s.Q6J("disabled",!n.credentials.valid))},directives:[i.Gu,i.sr,i.Sm,i.fG,i.YG,i.gu,i.W2,l._Y,l.JL,l.sg,i.jY,i.Nd,i.wI,i.Ie,i.pK,i.j9,l.JJ,l.u,i.as,t.O5,i.uN,l.Q7],styles:["@media screen and (max-width: 700px){.logoDesktop[_ngcontent-%COMP%]{display:none}.titulo[_ngcontent-%COMP%]{text-align:center;padding-top:10%;color:#6361ea;font-family:proxima-nova,sans-serif;font-weight:600;font-style:normal;font-size:10vw}}@media screen and (min-width: 700px){.column[_ngcontent-%COMP%]{float:left;width:50%;padding-bottom:5%}.row[_ngcontent-%COMP%]{margin-top:5%}.logoPhone[_ngcontent-%COMP%]{display:none}model-viewer[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:90%;height:70vh}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#container[_ngcontent-%COMP%]{text-align:center;width:90%;height:70vh}.form[_ngcontent-%COMP%]{width:100%}.titulo[_ngcontent-%COMP%]{text-align:center;padding-top:10%;color:#6361ea;font-family:proxima-nova,sans-serif;font-weight:600;font-size:2vw;font-style:normal}}"]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.Bz.forChild(c)],r.Bz]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[t.ez,l.u5,i.Pc,m,l.UX]]}),e})()}}]);