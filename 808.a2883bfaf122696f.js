"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[808],{8808:(F,u,n)=>{n.r(u),n.d(u,{ManageDoctorModule:()=>N});var g=n(6814),v=n(5150),f=n(3415),i=n(6223),p=n(6663),C=n(3660),m=n(2160),l=n(1356),S=n(4055),D=n(9378),h=n(7860),d=n(649),b=n(7434),y=n(8180),M=n(4442),t=n(5879),T=n(4361);function E(o,J){if(1&o){const a=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(a);const e=t.oxw();return t.KtG(e.Add())}),t.qZA()}}function B(o,J){if(1&o){const a=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(a);const e=t.oxw();return t.KtG(e.Edit())}),t.qZA()}}let A=(()=>{class o{service;cdr;dialogService;Cols;Data;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;classFirstBtn="success text-white";mode="add";currentSpec=new d.UJ;userTypes=M.zI;currentUserType;model=new d.HX;constructor(a,r,e){this.service=a,this.cdr=r,this.dialogService=e,this.lang=localStorage.getItem("language"),this.Cols=[h.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),h.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"doctorName",header:"ar"==this.lang?"\u0627\u0633\u0645 \u0627\u0644\u0637\u0628\u064a\u0628":"Doctor Name ",type:"text"})]}ngOnChanges(a){this.cdr.detectChanges()}SpecialityData;searchSpeciality(){this.service.searchSpeciality("",!1,1,1,void 0).subscribe({next:a=>{this.SpecialityData=a.data.items,this.currentSpec=this.SpecialityData[0],this.currentSpec.id=this.SpecialityData[0].id,this.search(),this.cdr.detectChanges()},error:()=>{}})}SearchBySpec(){this.search()}ngOnInit(){this.searchSpeciality(),this.currentLanguage=localStorage.getItem("language")??"ar"}search(){let r,a=(new b.l).GetUserId();r=this.currentSpec.id,this.service.getDoctorPerSpeciality(r,void 0,void 0,void 0,a).pipe((0,y.q)(1)).subscribe({next:Z=>{this.Data=Z.data.items,this.cdr.detectChanges()},error:()=>{}})}Add(){}Edit(){}EditRow(a){this.model=a,this.mode="edit"}ShowTableSchedule(a){}Clear(){this.mode="add"}static \u0275fac=function(r){return new(r||o)(t.Y36(d.r9),t.Y36(t.sBO),t.Y36(l.xA))};static \u0275cmp=t.Xpm({type:o,selectors:[["app-ManageDoctor"]],features:[t._Bn([l.xA]),t.TTD],decls:20,vars:19,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"mb-10"],["translate","MENU.Speciality",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange","onChange"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","contentSecondBtn","FirstBtn","contentFirstBtn","classFirstBtn","secondButtonEvent","firstButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],["translate","Doctors.DoctorName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-success","mx-3",2,"width","25%",3,"click"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"label",5),t.TgZ(6,"div",6)(7,"p-dropdown",7),t.NdJ("ngModelChange",function(s){return e.currentSpec=s})("onChange",function(){return e.SearchBySpec()}),t.qZA()()()(),t.TgZ(8,"div",3)(9,"div",8)(10,"app-shared-datatable",9),t.NdJ("secondButtonEvent",function(s){return e.EditRow(s)})("firstButtonEvent",function(s){return e.ShowTableSchedule(s)}),t.qZA()(),t.TgZ(11,"div",10)(12,"div",11)(13,"div",4),t._UZ(14,"label",12),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(s){return e.model.doctorName=s}),t.qZA()(),t.TgZ(16,"div",14),t.YNc(17,E,1,0,"button",15),t.YNc(18,B,1,0,"button",16),t.TgZ(19,"button",17),t.NdJ("click",function(){return e.Clear()}),t.qZA()()()()()()()()),2&r&&(t.xp6(7),t.Q6J("options",e.SpecialityData)("ngModel",e.currentSpec)("optionLabel","ar"==e.currentLanguage?"speciality_Name_Ar":"speciality_Name_En")("showClear",!1)("placeholder","ar"==e.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u062a\u062e\u0635\u0635":"Choose Speciality "),t.xp6(3),t.Q6J("cols",e.Cols)("rowsPageNumbers",25)("pagination",!0)("scrollable",!1)("data",e.Data)("chooseColomns",!0)("SecondBtn",!0)("contentSecondBtn","ar"==e.currentLanguage?"\u062a\u0639\u062f\u064a\u0644":"Edit")("FirstBtn",!0)("contentFirstBtn","ar"==e.currentLanguage?"\u062c\u062f\u0648\u0644 \u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f":"Table Schedule")("classFirstBtn"," btn-success"),t.xp6(5),t.Q6J("ngModel",e.model.doctorName),t.xp6(2),t.Q6J("ngIf","add"==e.mode),t.xp6(1),t.Q6J("ngIf","edit"==e.mode))},dependencies:[g.O5,T.G,i.Fj,i.JJ,i.On,m.Lt,p.Pi]})}return o})(),N=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=t.oAB({type:o});static \u0275inj=t.cJS({imports:[g.ez,v.Bz.forChild([{path:"doctors",component:A}]),f.m,i.u5,m.kW,D.EV,S.q4,p.aw,C.q,l.DL]})}return o})()}}]);