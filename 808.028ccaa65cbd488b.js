"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[808],{8808:(F,g,a)=>{a.r(g),a.d(g,{ManageDoctorModule:()=>w});var p=a(6814),S=a(7304),v=a(3415),l=a(6223),m=a(6663),M=a(3660),f=a(2160),u=a(1356),T=a(4055),y=a(9378),d=a(7860),c=a(649),b=a(7434),C=a(8180),U=a(4442),e=a(5879),Z=a(8472),E=a(4361);function A(i,J){if(1&i){const n=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Add())}),e.qZA()}}function I(i,J){if(1&i){const n=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Edit())}),e.qZA()}}let B=(()=>{class i{service;cdr;dialogService;cts;Cols;Data;DataUserDoctors;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;contentSecondBtn;classFirstBtn="success text-white";mode="add";currentSpec=new c.UJT;userTypes=U.zI;currentUser;model=new c.zZz;constructor(n,o,t,r){this.service=n,this.cdr=o,this.dialogService=t,this.cts=r,this.lang=localStorage.getItem("language"),this.Cols=[d.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),d.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"profileImageUrl",header:"ar"==this.lang?"\u0627\u0644\u0635\u0648\u0631\u0629":"Image ",type:"image"}),d.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"doctorName",header:"ar"==this.lang?"\u0627\u0633\u0645 \u0627\u0644\u0637\u0628\u064a\u0628":"Doctor Name ",type:"text"}),d.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"aboutMeTitle",header:"ar"==this.lang?"\u0639\u0646 \u0627\u0644\u0637\u0628\u064a\u0628":"About Doctor ",type:"text"})],this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-trash-alt'></i> \u062d\u0630\u0641":"<i class='fas fa-trash-alt'></i> Delete",this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit "}ngOnChanges(n){this.cdr.detectChanges()}SpecialityData;searchSpeciality(){this.service.searchSpeciality("",!1,1,1,void 0,void 0).subscribe({next:n=>{this.SpecialityData=n.data.items,this.currentSpec=this.SpecialityData[0],this.currentSpec.id=this.SpecialityData[0].id,this.search(),this.cdr.detectChanges()},error:()=>{}})}SearchBySpec(){this.search()}ngOnInit(){this.searchSpeciality(),this.searchUsers(),this.currentLanguage=localStorage.getItem("language")??"ar"}searchUsers(){let r,s,D,n=(new b.l).GetUserId();D=!1,s=!1,r=c.FWD._5,this.service.searchUsers(void 0,void 0,r,!1,!1,void 0,void 0,n,void 0).pipe((0,C.q)(1)).subscribe({next:L=>{this.DataUserDoctors=L.data.items,this.cdr.detectChanges()},error:()=>{}})}search(){let o,t,n=(new b.l).GetUserId();o=this.currentSpec.id,t=!1,this.service.getDoctorPerSpeciality(o,!1,void 0,void 0,n,void 0).pipe((0,C.q)(1)).subscribe({next:h=>{this.Data=h.data.items,this.cdr.detectChanges()},error:()=>{}})}Add(){if(this.model.aboutMeTitle.length<2)return!1;this.model.specialityId=this.currentSpec.id,this.model.doctorUserId=this.currentUser.id,this.service.newDoctor(this.model).subscribe(n=>{this.search()})}Edit(){if(this.model.aboutMeTitle.length<2)return!1;this.model.specialityId=this.currentSpec.id,this.model.doctorUserId=this.currentUser.id,this.service.editDoctor(this.model).subscribe(n=>{this.search()})}EditRow(n){this.model.aboutMeDescription=n.aboutMeDescription,this.model.aboutMeTitle=n.aboutMeTitle,this.model.doctorUserId=n.doctorUserId,this.model.specialityId=n.specialityId,this.mode="edit",this.currentUser=this.DataUserDoctors.filter(o=>o.id==n.doctorUserId)[0]}ShowTableSchedule(n){}Clear(){this.currentUser={},this.mode="add"}static \u0275fac=function(o){return new(o||i)(e.Y36(c.r9S),e.Y36(e.sBO),e.Y36(u.xA),e.Y36(Z.m))};static \u0275cmp=e.Xpm({type:i,selectors:[["app-ManageDoctor"]],features:[e._Bn([u.xA]),e.TTD],decls:31,vars:24,consts:[[1,"m-3"],["translate","MENU.DoctorList",2,"font-weight","bold","color","white"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[1,"row"],["translate","MENU.Speciality",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange","onChange"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","contentSecondBtn","classSecondBtn","secondButtonEvent","firstButtonEvent"],[1,"col-md-4"],[1,"mb-10"],["translate","Users.UserName",1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","filter","placeholder","ngModelChange"],["translate","Doctors.AboutMeTitle",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","Doctors.AboutMeDescrption",1,"form-label"],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-bordered","btn-outline-success","mx-3",2,"width","25%",3,"click"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(o,t){1&o&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"label",5),e.TgZ(6,"div",6)(7,"p-dropdown",7),e.NdJ("ngModelChange",function(s){return t.currentSpec=s})("onChange",function(){return t.SearchBySpec()}),e.qZA()()()()(),e._UZ(8,"br"),e.TgZ(9,"div",4)(10,"div",8)(11,"div",2)(12,"div",3)(13,"app-shared-datatable",9),e.NdJ("secondButtonEvent",function(s){return t.EditRow(s)})("firstButtonEvent",function(s){return t.ShowTableSchedule(s)}),e.qZA()()()(),e.TgZ(14,"div",10)(15,"div",2)(16,"div",3)(17,"div",11),e._UZ(18,"label",12),e.TgZ(19,"div",6)(20,"p-dropdown",13),e.NdJ("ngModelChange",function(s){return t.currentUser=s}),e.qZA()()(),e.TgZ(21,"div",11),e._UZ(22,"label",14),e.TgZ(23,"input",15),e.NdJ("ngModelChange",function(s){return t.model.aboutMeTitle=s}),e.qZA()(),e.TgZ(24,"div",11),e._UZ(25,"label",16),e.TgZ(26,"textarea",15),e.NdJ("ngModelChange",function(s){return t.model.aboutMeDescription=s}),e.qZA()(),e.TgZ(27,"div",17),e.YNc(28,A,1,0,"button",18),e.YNc(29,I,1,0,"button",19),e.TgZ(30,"button",20),e.NdJ("click",function(){return t.Clear()}),e.qZA()()()()()()),2&o&&(e.xp6(7),e.Q6J("options",t.SpecialityData)("ngModel",t.currentSpec)("optionLabel","ar"==t.currentLanguage?"speciality_Name_Ar":"speciality_Name_En")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u062a\u062e\u0635\u0635":"Choose Speciality"),e.xp6(6),e.Q6J("cols",t.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("SecondBtn",!0)("contentSecondBtn",t.contentSecondBtn)("classSecondBtn","light-warning"),e.xp6(7),e.Q6J("options",t.DataUserDoctors)("ngModel",t.currentUser)("optionLabel","fullName")("showClear",!1)("filter",!0)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"Choose User"),e.xp6(3),e.Q6J("ngModel",t.model.aboutMeTitle),e.xp6(3),e.Q6J("ngModel",t.model.aboutMeDescription),e.xp6(2),e.Q6J("ngIf","add"==t.mode),e.xp6(1),e.Q6J("ngIf","edit"==t.mode))},dependencies:[p.O5,E.G,l.Fj,l.JJ,l.On,f.Lt,m.Pi]})}return i})(),w=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[p.ez,S.Bz.forChild([{path:"doctors",component:B,data:{animation:"doctors"}}]),v.m,l.u5,f.kW,y.EV,T.q4,m.aw,M.q,u.DL]})}return i})()}}]);