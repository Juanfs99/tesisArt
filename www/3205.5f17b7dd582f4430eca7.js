(self.webpackChunkprototipo1=self.webpackChunkprototipo1||[]).push([[3205],{3205:(n,t,o)=>{"use strict";o.r(t),o.d(t,{SubirPageModule:()=>m});var e=o(8583),i=o(665),a=o(8945),r=o(216),c=o(4762),s=o(3562),l=o(8656),g=o(3052),d=o(825),Z=o(639);const u=[{path:"",component:(()=>{class n{constructor(n,t){this.route=n,this.modalCtrl=t,this.puestos=0}onClickHome(){this.route.navigate(["/home"])}addPunto(){this.puestos++}abrirModalSubir(){return(0,c.mG)(this,void 0,void 0,function*(){const n=yield this.modalCtrl.create({component:s.J,cssClass:"my-custom-modal-css"});yield n.present()})}abrirModalMensual(){return(0,c.mG)(this,void 0,void 0,function*(){const n=yield this.modalCtrl.create({component:l.q,cssClass:"my-custom-modal-css"});yield n.present()})}abrirModalObra(){return(0,c.mG)(this,void 0,void 0,function*(){const n=yield this.modalCtrl.create({component:g.W,cssClass:"my-custom-modal-css"});yield n.present()})}abrirModalGaleria(){return(0,c.mG)(this,void 0,void 0,function*(){const n=yield this.modalCtrl.create({component:d.F,cssClass:"my-custom-modal-css"});yield n.present()})}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(Z.Y36(r.F0),Z.Y36(a.IN))},n.\u0275cmp=Z.Xpm({type:n,selectors:[["app-subir"]],decls:103,vars:1,consts:[[1,"ion-no-border"],["slot","start"],["menu","first","color","primary"],["slot","end"],[3,"click"],["name","home"],[2,"margin-top","7%"],[1,"textCatPri"],[1,"textCat"],[1,"ion-padding"],["id","subir","size","large","expand","block",3,"click"],[1,"subirObra"],["size","large","expand","block",3,"click"],[1,"subscripciones"],[1,"planesPhone"],[1,"planes","ion-no-margin",2,"background-color","#56B4E5"],[1,"ion-padding",2,"color","white","font-weight","600"],[2,"color","white"],[2,"height","auto","width","30%","float","left","margin-bottom","10%"],[1,"ion-padding",2,"color","#6361ea"],["size","large",1,"ion-padding","botonesComprar"],[1,"planes","ion-no-margin",2,"background-color","#FDB807"],["size","large",1,"ion-padding","botonesComprar",3,"click"],[1,"planes","ion-no-margin",2,"background-color","#E05497"],[1,"planesDesktop"],[1,"planes",2,"background-color","#56B4E5"],[1,"ion-padding",2,"color","white","font-size","1.5vw","font-weight","600"],[1,"planes",2,"background-color","#FDB807"],[1,"planes",2,"background-color","#E05497"]],template:function(n,t){1&n&&(Z.TgZ(0,"ion-header",0),Z.TgZ(1,"ion-toolbar"),Z.TgZ(2,"ion-buttons",1),Z._UZ(3,"ion-menu-button",2),Z.qZA(),Z.TgZ(4,"ion-buttons",3),Z.TgZ(5,"ion-button",4),Z.NdJ("click",function(){return t.onClickHome()}),Z._UZ(6,"ion-icon",5),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(7,"ion-content"),Z.TgZ(8,"div",6),Z.TgZ(9,"h3",7),Z.TgZ(10,"span"),Z._uU(11,"Subir"),Z.qZA(),Z._uU(12," tu obra "),Z.qZA(),Z.qZA(),Z.TgZ(13,"h4",8),Z._uU(14,"Espacios disponibles: "),Z.TgZ(15,"span"),Z._uU(16),Z.qZA(),Z.qZA(),Z.TgZ(17,"div",9),Z.TgZ(18,"ion-button",10),Z.NdJ("click",function(){return t.abrirModalSubir()}),Z.TgZ(19,"div",11),Z._uU(20," Subir Obra "),Z.qZA(),Z.qZA(),Z.TgZ(21,"ion-button",12),Z.NdJ("click",function(){return t.addPunto()}),Z.TgZ(22,"div",11),Z._uU(23," add "),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(24,"h2",13),Z._uU(25,"Subscripciones"),Z.qZA(),Z.TgZ(26,"ion-list",14),Z.TgZ(27,"ion-card",15),Z.TgZ(28,"ion-card-header"),Z.TgZ(29,"ion-card-title",16),Z._uU(30,"PLAN POR OBRA"),Z.qZA(),Z.qZA(),Z.TgZ(31,"ion-card-content",17),Z.TgZ(32,"ion-card",18),Z.TgZ(33,"ion-card-title",19),Z._uU(34,"$5"),Z.qZA(),Z.qZA(),Z._uU(35," El plan por obra te permite subir tu modelo 3D y se te cobrar\xe1 mensualmente mientras la obra est\xe9 exhibida "),Z.TgZ(36,"div"),Z.TgZ(37,"ion-button",20),Z._uU(38,"Comprar "),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(39,"ion-card",21),Z.TgZ(40,"ion-card-header"),Z.TgZ(41,"ion-card-title",16),Z._uU(42,"PLAN MENSUAL"),Z.qZA(),Z.qZA(),Z.TgZ(43,"ion-card-content",17),Z.TgZ(44,"ion-card",18),Z.TgZ(45,"ion-card-title",19),Z._uU(46,"$20"),Z.qZA(),Z.qZA(),Z._uU(47," El plan mensual te permite tener 5 obras activas y se te cobrar\xe1 mensualmente "),Z.TgZ(48,"div"),Z.TgZ(49,"ion-button",22),Z.NdJ("click",function(){return t.abrirModalMensual()}),Z._uU(50,"Comprar "),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(51,"ion-card",23),Z.TgZ(52,"ion-card-header"),Z.TgZ(53,"ion-card-title",16),Z._uU(54,"PLAN GALERIA"),Z.qZA(),Z.qZA(),Z.TgZ(55,"ion-card-content",17),Z.TgZ(56,"ion-card",18),Z.TgZ(57,"ion-card-title",19),Z._uU(58,"$40"),Z.qZA(),Z.qZA(),Z._uU(59," El plan corporativo te permite tener 15 obras activas y se te cobrar\xe1 mensualmente "),Z.TgZ(60,"div"),Z.TgZ(61,"ion-button",20),Z._uU(62,"Comprar "),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(63,"div",24),Z.TgZ(64,"div"),Z.TgZ(65,"ion-card",25),Z.TgZ(66,"ion-card-header"),Z.TgZ(67,"ion-card-title",26),Z._uU(68,"PLAN POR OBRA "),Z.qZA(),Z.qZA(),Z.TgZ(69,"ion-card-content",17),Z.TgZ(70,"ion-card",18),Z.TgZ(71,"ion-card-title",19),Z._uU(72,"$5"),Z.qZA(),Z.qZA(),Z._uU(73," El plan por obra te permite tener 1 obra activa y se te cobrar\xe1 mensualmente "),Z.TgZ(74,"div"),Z.TgZ(75,"ion-button",22),Z.NdJ("click",function(){return t.abrirModalObra()}),Z._uU(76,"Comprar "),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(77,"div"),Z.TgZ(78,"ion-card",27),Z.TgZ(79,"ion-card-header"),Z.TgZ(80,"ion-card-title",26),Z._uU(81,"PLAN MENSUAL "),Z.qZA(),Z.qZA(),Z.TgZ(82,"ion-card-content",17),Z.TgZ(83,"ion-card",18),Z.TgZ(84,"ion-card-title",19),Z._uU(85,"$20"),Z.qZA(),Z.qZA(),Z._uU(86," El plan mensual te permite tener 5 obras activas y se te cobrar\xe1 mensualmente "),Z.TgZ(87,"div"),Z.TgZ(88,"ion-button",22),Z.NdJ("click",function(){return t.abrirModalMensual()}),Z._uU(89,"Comprar "),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(90,"div"),Z.TgZ(91,"ion-card",28),Z.TgZ(92,"ion-card-header"),Z.TgZ(93,"ion-card-title",26),Z._uU(94,"PLAN GALERIA "),Z.qZA(),Z.qZA(),Z.TgZ(95,"ion-card-content",17),Z.TgZ(96,"ion-card",18),Z.TgZ(97,"ion-card-title",19),Z._uU(98,"$40"),Z.qZA(),Z.qZA(),Z._uU(99," El plan corporativo te permite tener 15 obras activas y se te cobrar\xe1 mensualmente "),Z.TgZ(100,"div"),Z.TgZ(101,"ion-button",22),Z.NdJ("click",function(){return t.abrirModalGaleria()}),Z._uU(102,"Comprar "),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()),2&n&&(Z.xp6(16),Z.Oqu(t.puestos))},directives:[a.Gu,a.sr,a.Sm,a.fG,a.YG,a.gu,a.W2,a.q_,a.PM,a.Zi,a.gZ,a.FN],styles:["@media screen and (max-width: 700px){*[_ngcontent-%COMP%]{font-family:proxima-nova,sans-serif}.planesDesktop[_ngcontent-%COMP%]{display:none}.planes[_ngcontent-%COMP%]{text-align:center;overflow:hidden;margin-top:2%;margin-bottom:2%;box-shadow:none!important;border-radius:0;width:100%;position:center;object-fit:cover}.textCat[_ngcontent-%COMP%]{font-weight:400;font-style:normal;padding-left:5%}.textCat[_ngcontent-%COMP%], .textCat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:proxima-nova,sans-serif}.textCat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6361ea;font-weight:600}.botonesComprar[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-bottom:5%}.subscripciones[_ngcontent-%COMP%]{color:#6361ea;font-weight:600;text-align:center}.textCatPri[_ngcontent-%COMP%]{font-weight:400;font-style:normal;padding-left:5%;font-size:8vw}.textCatPri[_ngcontent-%COMP%], .textCatPri[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:proxima-nova,sans-serif}.textCatPri[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6361ea;font-weight:600}}@media screen and (min-width: 700px){*[_ngcontent-%COMP%], .textCatPri[_ngcontent-%COMP%]{font-family:proxima-nova,sans-serif}.textCatPri[_ngcontent-%COMP%]{font-weight:400;font-style:normal;padding-left:5%;font-size:2vw;margin-bottom:3%}.textCatPri[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6361ea;font-family:proxima-nova,sans-serif;font-weight:600}.planesPhone[_ngcontent-%COMP%]{display:none}.textCat[_ngcontent-%COMP%]{font-weight:400;font-style:normal;padding-left:5%;font-size:1.3vw}.textCat[_ngcontent-%COMP%], .textCat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:proxima-nova,sans-serif}.textCat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6361ea;font-weight:600}.planesDesktop[_ngcontent-%COMP%]{float:none;display:flex;justify-content:center;align-items:center;flex-direction:row}.botonesComprar[_ngcontent-%COMP%]{margin-bottom:5%;font-size:1vw}.botonesComprar[_ngcontent-%COMP%], .cardInfo[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.cardInfo[_ngcontent-%COMP%]{width:70%}.planes[_ngcontent-%COMP%]{text-align:center}ion-card-content[_ngcontent-%COMP%]{font-size:1vw}.subirObra[_ngcontent-%COMP%]{font-size:1.3vw}.subscripciones[_ngcontent-%COMP%]{color:#6361ea;font-weight:600;text-align:center;font-size:2vw;margin-top:3%}}"]}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=Z.oAB({type:n}),n.\u0275inj=Z.cJS({imports:[[r.Bz.forChild(u)],r.Bz]}),n})(),m=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=Z.oAB({type:n}),n.\u0275inj=Z.cJS({imports:[[e.ez,i.u5,a.Pc,p,i.UX]]}),n})()}}]);