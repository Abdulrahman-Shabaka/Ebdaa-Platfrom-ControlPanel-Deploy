"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[996],{996:(B,p,a)=>{a.r(p),a.d(p,{SpecialityModule:()=>J});var m=a(6814),o=a(7860),d=a(649),e=a(5879),f=a(8472),g=a(9378),r=a(6223),b=a(4361),u=a(6663),h=a(7248),y=a(3912);const C=["fileInput"];function v(l,S){if(1&l&&e._UZ(0,"p-image",24),2&l){const t=e.oxw();e.Q6J("src",t.currentSpeciality.imageBase64)("preview",!0)}}function E(l,S){if(1&l){const t=e.EpF();e.TgZ(0,"button",25),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.AddSpeciality())}),e.qZA()}}function A(l,S){if(1&l){const t=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.Edit())}),e.qZA()}}let D=(()=>{class l{service;cdr;cts;Cols;Data;contentSecondBtn;mode="add";lang=localStorage.getItem("language");constructor(t,n,i){this.service=t,this.cdr=n,this.cts=i,this.lang=localStorage.getItem("language"),this.Cols=[o.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"imageUrl",header:"ar"==this.lang?"\u0635\u0648\u0631\u0629":"Image ",type:"image"}),o.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"speciality_Name_Ar":"speciality_Name_En",header:"ar"==this.lang?"\u0627\u0644\u0623\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064a ":"English Name",type:"text"}),o.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"speciality_Description_Ar":"speciality_Description_En",header:"ar"==this.lang?"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064a ":"English Description",type:"text"})],this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit "}ngOnChanges(t){this.cdr.detectChanges()}currentSpeciality={id:"",arabicName:"",englishName:"",specialityDescriptionAr:"",specialityDescriptionEn:"",imageBase64:""};ngOnInit(){this.searchSpeciality()}searchSpeciality(){this.service.searchSpeciality("",!1,1,1,void 0,void 0).subscribe({next:t=>{this.Data=t.data.items,this.cdr.detectChanges()},error:()=>{}})}Edit(){}AddSpeciality(){let t=new d.R_Y;t.specialityNameAr=this.currentSpeciality.arabicName,t.specialityNameEn=this.currentSpeciality.englishName,t.specialityDescriptionAr=this.currentSpeciality.specialityDescriptionAr,t.specialityDescriptionEn=this.currentSpeciality.specialityDescriptionEn,t.imageBase64=this.currentSpeciality.imageBase64,this.service.newSpeciality(t).subscribe({next:n=>{n.isSuccess&&this.searchSpeciality()},error:n=>{n.error.isFailure&&this.cts.Show("error","error",n.error.errors[0].message)}})}fileInput;selectedFile=null;base64String="";triggerFileInput(){this.fileInput.nativeElement.click(),this.cdr.detectChanges()}onFileSelected(t){const n=t.target;if(n.files&&n.files.length>0){this.selectedFile=n.files[0];const i=new FileReader;i.onload=this.handleReaderLoaded.bind(this),i.readAsDataURL(this.selectedFile)}}handleReaderLoaded(t){this.base64String=t.target?.result,this.currentSpeciality.imageBase64=String(this.base64String);let n=new d.hc$;n.specialityId=this.currentSpeciality.id,n.imageBase64=this.currentSpeciality.imageBase64,this.service.changeSpecialityImage(n).subscribe({next:i=>{}}),this.cdr.detectChanges()}EditRow(t){this.mode="edit",this.currentSpeciality.id=t.id,this.currentSpeciality.arabicName=t.speciality_Name_Ar,this.currentSpeciality.englishName=t.speciality_Name_En,this.currentSpeciality.imageBase64=t.imageUrl,this.currentSpeciality.specialityDescriptionAr=t.speciality_Description_Ar,this.currentSpeciality.specialityDescriptionEn=t.speciality_Description_En}Clear(){this.currentSpeciality={id:"",arabicName:"",englishName:"",specialityDescriptionAr:"",specialityDescriptionEn:"",imageBase64:""},this.mode="add"}static \u0275fac=function(n){return new(n||l)(e.Y36(d.r9S),e.Y36(e.sBO),e.Y36(f.m))};static \u0275cmp=e.Xpm({type:l,selectors:[["app-Speciality"]],viewQuery:function(n,i){if(1&n&&e.Gf(C,5),2&n){let c;e.iGM(c=e.CRH())&&(i.fileInput=c.first)}},features:[e.TTD],decls:34,vars:17,consts:[[3,"value"],[1,"row"],[1,"col-md-8"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[3,"cols","rowsPageNumbers","pagination","scrollable","SecondBtn","contentSecondBtn","classSecondBtn","data","chooseColomns","secondButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","SHARED.ArabicName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","SHARED.ArabicDesc",1,"form-label"],["translate","SHARED.EnglishName",1,"form-label"],["translate","SHARED.EnglishDesc",1,"form-label"],["translate","SHARED.FirstImage",1,"form-label"],[1,"custom-file-input",2,"display","flex","justify-content","space-evenly","align-content","center","align-items","flex-end"],["alt","Image","width","80",3,"src","preview",4,"ngIf"],["type","button","translate","SHARED.ChangeFirtImage",1,"btn","btn-success",3,"click"],["type","file",1,"form-control",3,"change"],["fileInput",""],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-bordered","btn-outline-success","mx-3",2,"width","25%",3,"click"],["alt","Image","width","80",3,"src","preview"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(n,i){1&n&&(e._UZ(0,"p-toast")(1,"app-page-header",0),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"app-shared-datatable",5),e.NdJ("secondButtonEvent",function(s){return i.EditRow(s)}),e.qZA()()()(),e.TgZ(7,"div",6)(8,"div",3)(9,"div",4)(10,"div",7)(11,"div",8),e._UZ(12,"label",9),e.TgZ(13,"input",10),e.NdJ("ngModelChange",function(s){return i.currentSpeciality.arabicName=s}),e.qZA()(),e.TgZ(14,"div",8),e._UZ(15,"label",11),e.TgZ(16,"textarea",10),e.NdJ("ngModelChange",function(s){return i.currentSpeciality.specialityDescriptionAr=s}),e.qZA()(),e.TgZ(17,"div",8),e._UZ(18,"label",12),e.TgZ(19,"input",10),e.NdJ("ngModelChange",function(s){return i.currentSpeciality.englishName=s}),e.qZA()(),e.TgZ(20,"div",8),e._UZ(21,"label",13),e.TgZ(22,"textarea",10),e.NdJ("ngModelChange",function(s){return i.currentSpeciality.specialityDescriptionEn=s}),e.qZA()(),e.TgZ(23,"div",8),e._UZ(24,"label",14),e.TgZ(25,"div",15),e.YNc(26,v,1,2,"p-image",16),e.TgZ(27,"button",17),e.NdJ("click",function(){return i.triggerFileInput()}),e.qZA(),e.TgZ(28,"input",18,19),e.NdJ("change",function(s){return i.onFileSelected(s)}),e.qZA()()(),e.TgZ(30,"div",20),e.YNc(31,E,1,0,"button",21),e.YNc(32,A,1,0,"button",22),e.TgZ(33,"button",23),e.NdJ("click",function(){return i.Clear()}),e.qZA()()()()()()()),2&n&&(e.xp6(1),e.Q6J("value","MENU.Speciality"),e.xp6(5),e.Q6J("cols",i.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("SecondBtn",!0)("contentSecondBtn",i.contentSecondBtn)("classSecondBtn","light-warning")("data",i.Data)("chooseColomns",!0),e.xp6(7),e.Q6J("ngModel",i.currentSpeciality.arabicName),e.xp6(3),e.Q6J("ngModel",i.currentSpeciality.specialityDescriptionAr),e.xp6(3),e.Q6J("ngModel",i.currentSpeciality.englishName),e.xp6(3),e.Q6J("ngModel",i.currentSpeciality.specialityDescriptionEn),e.xp6(4),e.Q6J("ngIf",i.currentSpeciality.imageBase64),e.xp6(5),e.Q6J("ngIf","add"===i.mode),e.xp6(1),e.Q6J("ngIf","edit"===i.mode))},dependencies:[m.O5,g.FN,r.Fj,r.JJ,r.On,b.G,u.Pi,h.E,y.q],styles:[".custom-file-input[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}"]})}return l})();var N=a(7304),T=a(3660),Z=a(3415),_=a(2427);let J=(()=>{class l{static \u0275fac=function(n){return new(n||l)};static \u0275mod=e.oAB({type:l});static \u0275inj=e.cJS({imports:[m.ez,g.EV,r.u5,Z.m,N.Bz.forChild([{path:"",component:D,canActivate:[_.o],data:{animation:"SpecialityComponent"}}]),u.aw,T.q,h.$,y.q]})}return l})()}}]);