"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[996],{996:(b,d,t)=>{t.r(d),t.d(d,{SpecialityModule:()=>N});var h=t(6814),s=t(7860),p=t(649),e=t(5879),u=t(8472),m=t(9378),c=t(6223),y=t(4361),g=t(6663);let S=(()=>{class r{service;cdr;cts;Cols;Data;lang=localStorage.getItem("language");constructor(i,a,n){this.service=i,this.cdr=a,this.cts=n,this.lang=localStorage.getItem("language"),this.Cols=[s.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"speciality_Name_Ar",header:"ar"==this.lang?"\u0627\u0644\u0623\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064a ":"Arabic Name",type:"text"}),s.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"speciality_Description_Ar",header:"ar"==this.lang?"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064a ":"Arabic Description",type:"text"}),s.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"speciality_Name_En",header:"ar"==this.lang?"\u0627\u0644\u0623\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a ":"English Name",type:"text"}),s.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!1,field:"speciality_Description_En",header:"ar"==this.lang?"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a ":"English Description",type:"text"})]}ngOnChanges(i){this.cdr.detectChanges()}currentSpeciality={arabicName:"",englishName:"",specialityDescriptionAr:"",specialityDescriptionEn:""};ngOnInit(){this.searchSpeciality()}searchSpeciality(){this.service.searchSpeciality("",!1,1,1,void 0).subscribe({next:i=>{this.Data=i.data.items,this.cdr.detectChanges()},error:()=>{}})}AddSpeciality(){let i=new p.R_;i.specialityNameAr=this.currentSpeciality.arabicName,i.specialityNameEn=this.currentSpeciality.englishName,i.specialityDescriptionAr=this.currentSpeciality.specialityDescriptionAr,i.specialityDescriptionEn=this.currentSpeciality.specialityDescriptionEn,this.service.newSpeciality(i).subscribe({next:a=>{a.isSuccess&&this.searchSpeciality()},error:a=>{a.error.isFailure&&this.cts.Show("error","error",a.error.errors[0].message)}})}static \u0275fac=function(a){return new(a||r)(e.Y36(p.r9),e.Y36(e.sBO),e.Y36(u.m))};static \u0275cmp=e.Xpm({type:r,selectors:[["app-Speciality"]],features:[e.TTD],decls:23,vars:11,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","SHARED.ArabicName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","SHARED.ArabicDesc",1,"form-label"],["translate","SHARED.EnglishName",1,"form-label"],["translate","SHARED.EnglishDesc",1,"form-label"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"]],template:function(a,n){1&a&&(e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),e._UZ(6,"app-shared-datatable",5),e.qZA(),e.TgZ(7,"div",6)(8,"div",7)(9,"div",8),e._UZ(10,"label",9),e.TgZ(11,"input",10),e.NdJ("ngModelChange",function(l){return n.currentSpeciality.arabicName=l}),e.qZA()(),e.TgZ(12,"div",8),e._UZ(13,"label",11),e.TgZ(14,"input",10),e.NdJ("ngModelChange",function(l){return n.currentSpeciality.specialityDescriptionAr=l}),e.qZA()(),e.TgZ(15,"div",8),e._UZ(16,"label",12),e.TgZ(17,"input",10),e.NdJ("ngModelChange",function(l){return n.currentSpeciality.englishName=l}),e.qZA()(),e.TgZ(18,"div",8),e._UZ(19,"label",13),e.TgZ(20,"input",10),e.NdJ("ngModelChange",function(l){return n.currentSpeciality.specialityDescriptionEn=l}),e.qZA()(),e.TgZ(21,"div",14)(22,"button",15),e.NdJ("click",function(){return n.AddSpeciality()}),e.qZA()()()()()()()()),2&a&&(e.xp6(6),e.Q6J("cols",n.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",n.Data)("chooseColomns",!0)("SecondBtn",!1),e.xp6(5),e.Q6J("ngModel",n.currentSpeciality.arabicName),e.xp6(3),e.Q6J("ngModel",n.currentSpeciality.specialityDescriptionAr),e.xp6(3),e.Q6J("ngModel",n.currentSpeciality.englishName),e.xp6(3),e.Q6J("ngModel",n.currentSpeciality.specialityDescriptionEn))},dependencies:[m.FN,c.Fj,c.JJ,c.On,y.G,g.Pi]})}return r})();var f=t(7304),v=t(3660),C=t(3415),A=t(3758),D=t(2427);let N=(()=>{class r{static \u0275fac=function(a){return new(a||r)};static \u0275mod=e.oAB({type:r});static \u0275inj=e.cJS({imports:[h.ez,m.EV,c.u5,C.m,f.Bz.forChild([{path:"",component:S,canActivate:[D.o,A.a],data:{animation:"SpecialityComponent"}}]),g.aw,v.q]})}return r})()}}]);