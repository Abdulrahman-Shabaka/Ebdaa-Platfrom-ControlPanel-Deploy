"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[808],{8808:(J,u,t)=>{t.r(u),t.d(u,{ManageDoctorModule:()=>F});var m=t(6814),v=t(7304),S=t(3415),d=t(6223),g=t(6663),f=t(3660),h=t(2160),l=t(1356),C=t(4055),y=t(9378),p=t(7860),c=t(649),B=t(7434),D=t(8180),M=t(4442),e=t(5879),E=t(4361);let T=(()=>{class r{service;cdr;dialogService;Cols;Data;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;classFirstBtn="success text-white";mode="add";currentSpec=new c.UJ;userTypes=M.zI;currentUserType;model=new c.HX;constructor(n,o,a){this.service=n,this.cdr=o,this.dialogService=a,this.lang=localStorage.getItem("language"),this.Cols=[p.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),p.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"doctorName",header:"ar"==this.lang?"\u0627\u0633\u0645 \u0627\u0644\u0637\u0628\u064a\u0628":"Doctor Name ",type:"text"})]}ngOnChanges(n){this.cdr.detectChanges()}SpecialityData;searchSpeciality(){this.service.searchSpeciality("",!1,1,1,void 0).subscribe({next:n=>{this.SpecialityData=n.data.items,this.currentSpec=this.SpecialityData[0],this.currentSpec.id=this.SpecialityData[0].id,this.search(),this.cdr.detectChanges()},error:()=>{}})}SearchBySpec(){this.search()}ngOnInit(){this.searchSpeciality(),this.currentLanguage=localStorage.getItem("language")??"ar"}search(){let o,a,n=(new B.l).GetUserId();o=this.currentSpec.id,a=!1,this.service.getDoctorPerSpeciality(o,!1,void 0,void 0,n).pipe((0,D.q)(1)).subscribe({next:A=>{this.Data=A.data.items,this.cdr.detectChanges()},error:()=>{}})}Add(){}Edit(){}EditRow(n){this.model=n,this.mode="edit"}ShowTableSchedule(n){}Clear(){this.mode="add"}static \u0275fac=function(o){return new(o||r)(e.Y36(c.r9),e.Y36(e.sBO),e.Y36(l.xA))};static \u0275cmp=e.Xpm({type:r,selectors:[["app-ManageDoctor"]],features:[e._Bn([l.xA]),e.TTD],decls:11,vars:16,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"mb-10"],["translate","MENU.Speciality",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange","onChange"],[1,"col-md-12"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","contentSecondBtn","FirstBtn","contentFirstBtn","classFirstBtn","secondButtonEvent","firstButtonEvent"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"label",5),e.TgZ(6,"div",6)(7,"p-dropdown",7),e.NdJ("ngModelChange",function(s){return a.currentSpec=s})("onChange",function(){return a.SearchBySpec()}),e.qZA()()()(),e.TgZ(8,"div",3)(9,"div",8)(10,"app-shared-datatable",9),e.NdJ("secondButtonEvent",function(s){return a.EditRow(s)})("firstButtonEvent",function(s){return a.ShowTableSchedule(s)}),e.qZA()()()()()()),2&o&&(e.xp6(7),e.Q6J("options",a.SpecialityData)("ngModel",a.currentSpec)("optionLabel","ar"==a.currentLanguage?"speciality_Name_Ar":"speciality_Name_En")("showClear",!1)("placeholder","ar"==a.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u062a\u062e\u0635\u0635":"Choose Speciality "),e.xp6(3),e.Q6J("cols",a.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",a.Data)("chooseColomns",!0)("SecondBtn",!1)("contentSecondBtn","ar"==a.currentLanguage?"\u062a\u0639\u062f\u064a\u0644":"Edit")("FirstBtn",!1)("contentFirstBtn","ar"==a.currentLanguage?"\u062c\u062f\u0648\u0644 \u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f":"Table Schedule")("classFirstBtn"," btn-success"))},dependencies:[E.G,d.JJ,d.On,h.Lt,g.Pi]})}return r})(),F=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=e.oAB({type:r});static \u0275inj=e.cJS({imports:[m.ez,v.Bz.forChild([{path:"doctors",component:T,data:{animation:"doctors"}}]),S.m,d.u5,h.kW,y.EV,C.q4,g.aw,f.q,l.DL]})}return r})()}}]);