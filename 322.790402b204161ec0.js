"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[322],{6322:(M,h,s)=>{s.r(h),s.d(h,{ServicesModule:()=>R});var u=s(6814),d=s(6223),v=s(2160),S=s(4055),I=s(7304),p=s(6663),C=s(3660),b=s(5118),T=s(2427),c=s(7860),o=s(649),y=s(7434),E=s(3519),m=s.n(E),e=s(5879),B=s(4361),f=s(7248);const Z=["fileInput1"],A=["fileInput2"];function D(r,g){if(1&r&&e._UZ(0,"p-image",28),2&r){const t=e.oxw();e.Q6J("src",t.model.primaryImageBase64)("preview",!0)}}function F(r,g){if(1&r&&e._UZ(0,"p-image",28),2&r){const t=e.oxw();e.Q6J("src",t.model.secondaryImageBase64)("preview",!0)}}function J(r,g){if(1&r){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.Add())}),e.qZA()}}function L(r,g){if(1&r){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.Edit())}),e.qZA()}}let _=(()=>{class r{service;cdr;Cols;Data;SerTypes;currentLanguage;lang=localStorage.getItem("language");currentPeriod={id:0};timePeriod={from:"",to:""};contentFirstBtn;contentSecondBtn;model=new o.Ctm;constructor(t,n){this.service=t,this.cdr=n,this.lang=localStorage.getItem("language"),this.Cols=[c.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"primaryImageUrl",header:"ar"==this.lang?"\u0635\u0648\u0631\u0629":"Image ",type:"image"}),c.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"secondaryImageUrl",header:"ar"==this.lang?"\u0635\u0648\u0631\u0629":"Image ",type:"image"}),c.v.fromJS({id:3,sorted:!0,filtered:!0,true:!1,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),c.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"serviceTitleAr":"serviceTitleEn",header:"ar"==this.lang?"\u0627\u0644\u0627\u0633\u0645":"Name ",type:"text"}),c.v.fromJS({id:5,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"serviceDescriptionAr":"serviceDescriptionEn",header:"ar"==this.lang?"\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0639\u0631\u0628\u064a":"English Description ",type:"text"})],this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-trash-alt'></i> \u062d\u0630\u0641":"<i class='fas fa-trash-alt'></i> Delete",this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit "}ngOnChanges(t){this.cdr.detectChanges()}currentClinic={specialityId:"",hospitalId:"",clinicDescription:""};ngOnInit(){this.search(),this.currentLanguage=localStorage.getItem("language")??"ar"}search(){let t=(new y.l).GetUserId();this.service.searchServices(void 0,!1,1,1,t,void 0).subscribe({next:n=>{this.Data=n.data.items,this.cdr.detectChanges()},error:()=>{}})}mode="add";Add(){this.model.serviceType=3,this.model.primaryImageBase64=this.model.primaryImageBase64,this.model.secondaryImageBase64=this.model.secondaryImageBase64,this.service.createService(this.model).subscribe({next:t=>{this.search(),this.Clear()}})}Edit(){let t=o.tsK.fromJS(this.model);t.serviceId=this.selectedServicesForEdit.id,this.service.editService(t).subscribe({next:n=>{this.search(),this.Clear()}})}selectedServicesForEdit=new o.cAq;EditRow(t){if(1==t.serviceType||2==t.serviceType)return void m().fire("ar"==this.lang?"\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u062a\u0639\u062f\u064a\u0644":"Error While Edit","ar"==this.lang?"\u0644\u0627 \u064a\u0645\u0643\u0646 \u062a\u0639\u062f\u064a\u0644 \u0647\u0630\u0627 \u0627\u0644\u0628\u064a\u0627\u0646 ":"You can not Edit this Item","error");this.mode="edit";let n=o.Ctm.fromJS(t);this.model=n,this.selectedServicesForEdit=t,this.model.primaryImageBase64=t.primaryImageUrl,this.model.secondaryImageBase64=t.secondaryImageUrl}DeleteRow(t){1!=t.serviceType&&2!=t.serviceType?m().fire({title:"ar"==this.lang?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u061f":"Are You Sure ? ",text:"ar"==this.lang?" \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062d\u0630\u0641 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0631\u062c\u0648\u0639 \u0641\u064a\u0647\u0627 , \u0627\u0630\u0627 \u0643\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0627\u0636\u063a\u0637 \u0639\u0644\u064a \u062d\u0630\u0641 \u0627\u0648 \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0631\u062c\u0648\u0639   ":"this The deletion process is irreversible. If you are sure, click Delete or you can Cancel it ",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ar"==this.lang?"\u062d\u0630\u0641":"Delete",cancelButtonText:"ar"==this.lang?"\u0625\u0644\u063a\u0627\u0621":"Cancel"}).then(n=>{if(n.isConfirmed){var i=new o.o2M;i.serviceId=t.id,this.service.deleteService(i).subscribe({next:a=>{this.search(),this.Clear(),m().fire({title:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641":"Deleted!",text:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641 \u0628\u0646\u062c\u0627\u062d ":"Record has been deleted Successfully.",icon:"success"})}})}}):m().fire("ar"==this.lang?"\u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u062d\u0630\u0641":"Error While Delete","ar"==this.lang?"\u0644\u0627 \u064a\u0645\u0643\u0646 \u062d\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0628\u064a\u0627\u0646 ":"You can not Delete this Item","error")}Clear(){this.model=new o.Ctm,this.mode="add"}CurrentTabIndex=1;ClickTab(t){this.CurrentTabIndex=t}fileInput1;fileInput2;selectedFile1=null;selectedFile2=null;base64String1="";base64String2="";defaultImage="https://mutabbib-test.start-it-ly.com/assets/logo/png%202.png";onImageError(t){t.target.src=this.defaultImage}triggerFileInput1(){this.fileInput1.nativeElement.click(),this.cdr.detectChanges()}triggerFileInput2(){this.fileInput2.nativeElement.click(),this.cdr.detectChanges()}onFileSelected1(t){const n=t.target;if(n.files&&n.files.length>0){this.selectedFile1=n.files[0];const i=new FileReader;i.onload=this.handleReaderLoaded1.bind(this),i.readAsDataURL(this.selectedFile1)}}onFileSelected2(t){const n=t.target;if(n.files&&n.files.length>0){this.selectedFile2=n.files[0];const i=new FileReader;i.onload=this.handleReaderLoaded2.bind(this),i.readAsDataURL(this.selectedFile2)}}handleReaderLoaded1(t){if(this.base64String1=t.target?.result,this.model.primaryImageBase64=String(this.base64String1),"edit"==this.mode){let n=new o.bGe;n.serviceId=this.selectedServicesForEdit.id,n.primaryImageBase64=this.model.primaryImageBase64,n.secondaryImageBase64=void 0,this.service.changeServiceImages(n).subscribe({next:i=>{}})}this.cdr.detectChanges()}handleReaderLoaded2(t){if(this.base64String2=t.target?.result,this.model.secondaryImageBase64=String(this.base64String2),"edit"==this.mode){let n=new o.bGe;n.serviceId=this.selectedServicesForEdit.id,n.primaryImageBase64=void 0,n.secondaryImageBase64=this.model.secondaryImageBase64,this.service.changeServiceImages(n).subscribe({next:i=>{}})}this.cdr.detectChanges()}static \u0275fac=function(n){return new(n||r)(e.Y36(o.r9S),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:r,selectors:[["app-ServicesList"]],viewQuery:function(n,i){if(1&n&&(e.Gf(Z,5),e.Gf(A,5)),2&n){let a;e.iGM(a=e.CRH())&&(i.fileInput1=a.first),e.iGM(a=e.CRH())&&(i.fileInput2=a.first)}},features:[e.TTD],decls:41,vars:20,consts:[[1,"m-3"],["translate","MENU.Services",2,"font-weight","bold","color","white"],[1,"row"],[1,"col-md-8"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","FirstBtn","contentSecondBtn","contentFirstBtn","classFirstBtn","classSecondBtn","secondButtonEvent","firstButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","SHARED.ArabicName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","SHARED.ArabicDesc",1,"form-label"],["translate","SHARED.EnglishName",1,"form-label"],["translate","SHARED.EnglishDesc",1,"form-label"],["translate","SHARED.FirstImage",1,"form-label"],[1,"custom-file-input",2,"display","flex","justify-content","space-evenly","align-content","center","align-items","flex-end"],["alt","Image","width","80",3,"src","preview",4,"ngIf"],["type","button","translate","SHARED.ChangeFirtImage",1,"btn","btn-success",3,"click"],["type","file",1,"form-control",3,"change"],["fileInput1",""],["translate","SHARED.SecondImage",1,"form-label"],["type","button","translate","SHARED.ChangeSecondImage",1,"btn","btn-success",3,"click"],["fileInput2",""],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-bordered","btn-outline-success","mx-3",2,"width","25%",3,"click"],["alt","Image","width","80",3,"src","preview"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"app-shared-datatable",6),e.NdJ("secondButtonEvent",function(l){return i.EditRow(l)})("firstButtonEvent",function(l){return i.DeleteRow(l)}),e.qZA()()()(),e.TgZ(7,"div",7)(8,"div",4)(9,"div",5)(10,"div",8)(11,"div",9),e._UZ(12,"label",10),e.TgZ(13,"input",11),e.NdJ("ngModelChange",function(l){return i.model.serviceTitleAr=l}),e.qZA()(),e.TgZ(14,"div",9),e._UZ(15,"label",12),e.TgZ(16,"textarea",11),e.NdJ("ngModelChange",function(l){return i.model.serviceDescriptionAr=l}),e.qZA()(),e.TgZ(17,"div",9),e._UZ(18,"label",13),e.TgZ(19,"input",11),e.NdJ("ngModelChange",function(l){return i.model.serviceTitleEn=l}),e.qZA()(),e.TgZ(20,"div",9),e._UZ(21,"label",14),e.TgZ(22,"textarea",11),e.NdJ("ngModelChange",function(l){return i.model.serviceDescriptionEn=l}),e.qZA()(),e.TgZ(23,"div",9),e._UZ(24,"label",15),e.TgZ(25,"div",16),e.YNc(26,D,1,2,"p-image",17),e.TgZ(27,"button",18),e.NdJ("click",function(){return i.triggerFileInput1()}),e.qZA(),e.TgZ(28,"input",19,20),e.NdJ("change",function(l){return i.onFileSelected1(l)}),e.qZA()()(),e.TgZ(30,"div",9),e._UZ(31,"label",21),e.TgZ(32,"div",16),e.YNc(33,F,1,2,"p-image",17),e.TgZ(34,"button",22),e.NdJ("click",function(){return i.triggerFileInput2()}),e.qZA(),e.TgZ(35,"input",19,23),e.NdJ("change",function(l){return i.onFileSelected2(l)}),e.qZA()()(),e.TgZ(37,"div",24),e.YNc(38,J,1,0,"button",25),e.YNc(39,L,1,0,"button",26),e.TgZ(40,"button",27),e.NdJ("click",function(){return i.Clear()}),e.qZA()()()()()()()),2&n&&(e.xp6(6),e.Q6J("cols",i.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",i.Data)("chooseColomns",!0)("SecondBtn",!0)("FirstBtn",!0)("contentSecondBtn",i.contentSecondBtn)("contentFirstBtn",i.contentFirstBtn)("classFirstBtn","light-danger")("classSecondBtn","light-warning"),e.xp6(7),e.Q6J("ngModel",i.model.serviceTitleAr),e.xp6(3),e.Q6J("ngModel",i.model.serviceDescriptionAr),e.xp6(3),e.Q6J("ngModel",i.model.serviceTitleEn),e.xp6(3),e.Q6J("ngModel",i.model.serviceDescriptionEn),e.xp6(4),e.Q6J("ngIf",i.model.primaryImageBase64),e.xp6(7),e.Q6J("ngIf",i.model.secondaryImageBase64),e.xp6(5),e.Q6J("ngIf","add"==i.mode),e.xp6(1),e.Q6J("ngIf","edit"==i.mode))},dependencies:[B.G,d.Fj,d.JJ,d.On,u.O5,p.Pi,f.E],styles:[".custom-file-input[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}"]})}return r})();var w=s(3415);let R=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=e.oAB({type:r});static \u0275inj=e.cJS({imports:[w.m,d.u5,v.kW,S.q4,I.Bz.forChild([{path:"",redirectTo:"ExamList",pathMatch:"full"},{path:"ServiceList",canActivate:[T.o],component:_}]),u.ez,p.aw,C.q,b.DL,f.$]})}return r})()}}]);