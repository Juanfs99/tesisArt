(self.webpackChunkART_in_Augmented_Reality=self.webpackChunkART_in_Augmented_Reality||[]).push([[8447],{8447:(t,n,o)=>{"use strict";o.r(n),o.d(n,{ArtistainfoPageModule:()=>u});var i=o(8583),e=o(665),r=o(8945),a=o(216),c=o(4762),s=o(639),g=o(5083);function d(t,n){if(1&t&&(s.TgZ(0,"ion-list"),s.TgZ(1,"ion-card",10),s.TgZ(2,"div",11),s._UZ(3,"img",12),s.qZA(),s.TgZ(4,"ion-card-title",13),s._uU(5),s.qZA(),s.TgZ(6,"ion-card-subtitle",14),s._uU(7),s.qZA(),s.qZA(),s.qZA()),2&t){const t=n.$implicit;s.xp6(1),s.hYB("routerLink","/articulo/",t.uid,"/",t.id,""),s.xp6(2),s.s9C("src",t.imagenObra,s.LSH),s.xp6(2),s.Oqu(t.nombre),s.xp6(2),s.hij("$",t.precio,"")}}function l(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"ion-content"),s.TgZ(1,"ion-button",1),s.NdJ("click",function(){return s.CHM(t),s.oxw().onClickBack()}),s._UZ(2,"ion-icon",2),s.qZA(),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s._UZ(5,"img",5),s.TgZ(6,"h4",6),s._uU(7),s.qZA(),s.TgZ(8,"h5",7),s._uU(9),s.qZA(),s.TgZ(10,"h6",8),s._uU(11),s.qZA(),s.qZA(),s.TgZ(12,"div",4),s.YNc(13,d,8,5,"ion-list",9),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=s.oxw();s.xp6(5),s.s9C("src",t.user.imageUrl,s.LSH),s.xp6(2),s.AsE(" ",t.user.name," ",t.user.lastname," "),s.xp6(2),s.hij(" ",t.user.country," "),s.xp6(2),s.hij(" ",t.user.frase," "),s.xp6(2),s.Q6J("ngForOf",t.misObras)}}const m=[{path:"",component:(()=>{class t{constructor(t,n,o,i){this.route=t,this._location=n,this.activatedroute=o,this.avService=i,this.misObras=[],this.obra=null,this.user=null}ngOnInit(){return(0,c.mG)(this,void 0,void 0,function*(){this.sub=this.activatedroute.paramMap.subscribe(t=>{this.uid=t.get("uid")}),this.avService.getUserById(this.uid).subscribe(t=>{this.user=t});const t=yield this.avService.getObrasUsers2(this.uid);this.misObras=t})}onClickBack(){this._location.back()}ngOnDestroy(){this.sub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(a.F0),s.Y36(i.Ye),s.Y36(a.gz),s.Y36(g.o))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-artistainfo"]],decls:1,vars:1,consts:[[4,"ngIf"],["fill","clear",2,"margin-top","5%",3,"click"],["slot","start","name","chevron-back-outline"],[1,"row"],[1,"column"],[1,"artistimg",3,"src"],[1,"nombre"],[1,"pais"],[2,"text-align","center","color","#444444","font-family","proxima-nova, sans-serif","font-weight","300","margin-left","auto","margin-right","auto","font-style","normal","width","80%","padding-bottom","5%"],[4,"ngFor","ngForOf"],[1,"ion-no-margin",2,"background-color","none",3,"routerLink"],[1,"artists"],[1,"img_card_cat",3,"src"],[1,"card-title"],[1,"card-subtitle"]],template:function(t,n){1&t&&s.YNc(0,l,14,6,"ion-content",0),2&t&&s.Q6J("ngIf",n.user)},directives:[i.O5,r.W2,r.YG,r.gu,i.sg,r.q_,r.PM,r.YI,a.rH,r.gZ,r.tO],styles:['@media screen and (max-width: 700px){.artistimg[_ngcontent-%COMP%]{height:200px;border-radius:50%;border:5px solid #6361ea;display:block;margin-left:auto;margin-right:auto;margin-top:10%}ion-card[_ngcontent-%COMP%]{text-align:center;overflow:hidden;margin-top:2%;margin-bottom:2%;box-shadow:none!important;border-radius:0}ion-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{bottom:25%;font-size:1.5em;font-weight:600}ion-card[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{position:absolute;padding-right:40%;margin-left:5%;width:100%;color:#fff;font-family:proxima-nova,sans-serif;text-align:left}ion-card[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%]{bottom:10%;font-size:1em;font-weight:300}ion-card[_ngcontent-%COMP%]   .artists[_ngcontent-%COMP%]{position:relative}ion-card[_ngcontent-%COMP%]   .artists[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(0deg,#000,#fff0);opacity:.75}ion-card[_ngcontent-%COMP%]   .artists[_ngcontent-%COMP%]   .img_card_cat[_ngcontent-%COMP%]{width:100%;margin-bottom:-5px;height:200px;object-fit:cover;position:center}.nombre[_ngcontent-%COMP%]{padding-top:5%;padding-bottom:3%;color:#6361ea;font-weight:400;font-size:5vw}.nombre[_ngcontent-%COMP%], .pais[_ngcontent-%COMP%]{text-align:center;font-family:proxima-nova,sans-serif;font-style:normal}.pais[_ngcontent-%COMP%]{color:#444;font-weight:300;font-size:4vw}}@media screen and (min-width: 700px){.nombre[_ngcontent-%COMP%]{padding-top:5%;padding-bottom:3%;color:#6361ea;font-weight:600;font-size:2vw}.nombre[_ngcontent-%COMP%], .pais[_ngcontent-%COMP%]{text-align:center;font-family:proxima-nova,sans-serif;font-style:normal}.pais[_ngcontent-%COMP%]{color:#444;font-weight:300;font-size:1.5vw}.column[_ngcontent-%COMP%]{float:left;width:50%;padding-bottom:5%}.row[_ngcontent-%COMP%]{margin-top:3%}.artistimg[_ngcontent-%COMP%]{height:300px;border-radius:50%;border:5px solid #6361ea;display:block;margin-left:auto;margin-right:auto;margin-top:10%}ion-card[_ngcontent-%COMP%]{text-align:center;overflow:hidden;margin-top:2%;margin-bottom:2%;box-shadow:none!important;border-radius:0}ion-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{bottom:25%;font-size:1.5em;font-weight:600}ion-card[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{position:absolute;padding-right:40%;margin-left:5%;width:100%;color:#fff;font-family:proxima-nova,sans-serif;text-align:left}ion-card[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%]{bottom:10%;font-size:1em;font-weight:300}ion-card[_ngcontent-%COMP%]   .artists[_ngcontent-%COMP%]{position:relative}ion-card[_ngcontent-%COMP%]   .artists[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(0deg,#000,#fff0);opacity:.75}ion-card[_ngcontent-%COMP%]   .artists[_ngcontent-%COMP%]   .img_card_cat[_ngcontent-%COMP%]{width:100%;margin-bottom:-5px;height:200px;object-fit:cover;position:center}}']}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.Bz.forChild(m)],a.Bz]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.ez,e.u5,r.Pc,f]]}),t})()}}]);