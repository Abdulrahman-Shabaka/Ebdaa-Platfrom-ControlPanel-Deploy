"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[808],{8808:(F,g,n)=>{n.r(g),n.d(g,{ManageDoctorModule:()=>w});var p=n(6814),v=n(7304),M=n(3415),l=n(6223),m=n(6663),S=n(3660),f=n(2160),c=n(1356),T=n(4055),y=n(9378),u=n(7860),d=n(649),b=n(7434),C=n(8180),U=n(4442),e=n(5879),Z=n(8472),E=n(4361);function A(i,J){if(1&i){const o=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(o);const t=e.oxw();return e.KtG(t.Add())}),e.qZA()}}function B(i,J){if(1&i){const o=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){e.CHM(o);const t=e.oxw();return e.KtG(t.Edit())}),e.qZA()}}let I=(()=>{class i{service;cdr;dialogService;cts;Cols;Data;DataUserDoctors;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;contentSecondBtn;classFirstBtn="success text-white";mode="add";currentSpec=new d.UJT;userTypes=U.zI;currentUser;model=new d.zZz;constructor(o,a,t,r){this.service=o,this.cdr=a,this.dialogService=t,this.cts=r,this.lang=localStorage.getItem("language"),this.Cols=[u.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),u.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"doctorName",header:"ar"==this.lang?"\u0627\u0633\u0645 \u0627\u0644\u0637\u0628\u064a\u0628":"Doctor Name ",type:"text"}),u.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"aboutMeTitle",header:"ar"==this.lang?"\u0639\u0646 \u0627\u0644\u0637\u0628\u064a\u0628":"About Doctor ",type:"text"})],this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-trash-alt'></i> \u062d\u0630\u0641":"<i class='fas fa-trash-alt'></i> Delete",this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit "}ngOnChanges(o){this.cdr.detectChanges()}SpecialityData;searchSpeciality(){this.service.searchSpeciality("",!1,1,1,void 0).subscribe({next:o=>{this.SpecialityData=o.data.items,this.currentSpec=this.SpecialityData[0],this.currentSpec.id=this.SpecialityData[0].id,this.search(),this.cdr.detectChanges()},error:()=>{}})}SearchBySpec(){this.search()}ngOnInit(){this.searchSpeciality(),this.searchUsers(),this.currentLanguage=localStorage.getItem("language")??"ar"}searchUsers(){let r,s,D,o=(new b.l).GetUserId();D=!1,s=!1,r=d.FWD._5,this.service.searchUsers(void 0,void 0,r,!1,!1,void 0,void 0,o).pipe((0,C.q)(1)).subscribe({next:L=>{this.DataUserDoctors=L.data.items,this.cdr.detectChanges()},error:()=>{}})}search(){let a,t,o=(new b.l).GetUserId();a=this.currentSpec.id,t=!1,this.service.getDoctorPerSpeciality(a,!1,void 0,void 0,o).pipe((0,C.q)(1)).subscribe({next:h=>{this.Data=h.data.items,this.cdr.detectChanges()},error:()=>{}})}Add(){if(this.model.aboutMeTitle.length<2)return!1;this.model.specialityId=this.currentSpec.id,this.model.doctorUserId=this.currentUser.id,this.service.newDoctor(this.model).subscribe(o=>{this.search()})}Edit(){if(this.model.aboutMeTitle.length<2)return!1;this.model.specialityId=this.currentSpec.id,this.model.doctorUserId=this.currentUser.id,this.service.editDoctor(this.model).subscribe(o=>{this.search()})}EditRow(o){this.model.aboutMeDescription=o.aboutMeDescription,this.model.aboutMeTitle=o.aboutMeTitle,this.model.doctorUserId=o.doctorUserId,this.model.specialityId=o.specialityId,this.mode="edit",this.currentUser=this.DataUserDoctors.filter(a=>a.id==o.doctorUserId)[0]}ShowTableSchedule(o){}Clear(){this.currentUser={},this.mode="add"}static \u0275fac=function(a){return new(a||i)(e.Y36(d.r9S),e.Y36(e.sBO),e.Y36(c.xA),e.Y36(Z.m))};static \u0275cmp=e.Xpm({type:i,selectors:[["app-ManageDoctor"]],features:[e._Bn([c.xA]),e.TTD],decls:31,vars:24,consts:[[1,"m-3"],["translate","MENU.DoctorList",2,"font-weight","bold","color","white"],["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],["translate","MENU.Speciality",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange","onChange"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","contentSecondBtn","classSecondBtn","secondButtonEvent","firstButtonEvent"],[1,"col-md-4"],[1,"mb-10"],["translate","Users.UserName",1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","filter","placeholder","ngModelChange"],["translate","Doctors.AboutMeTitle",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","Doctors.AboutMeDescrption",1,"form-label"],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-bordered","btn-outline-success","mx-3",2,"width","25%",3,"click"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"label",6),e.TgZ(7,"div",7)(8,"p-dropdown",8),e.NdJ("ngModelChange",function(s){return t.currentSpec=s})("onChange",function(){return t.SearchBySpec()}),e.qZA()()()()()(),e._UZ(9,"br"),e.TgZ(10,"div",2)(11,"div",3)(12,"div",4)(13,"div",5)(14,"div",9)(15,"app-shared-datatable",10),e.NdJ("secondButtonEvent",function(s){return t.EditRow(s)})("firstButtonEvent",function(s){return t.ShowTableSchedule(s)}),e.qZA()(),e.TgZ(16,"div",11)(17,"div",12),e._UZ(18,"label",13),e.TgZ(19,"div",7)(20,"p-dropdown",14),e.NdJ("ngModelChange",function(s){return t.currentUser=s}),e.qZA()()(),e.TgZ(21,"div",12),e._UZ(22,"label",15),e.TgZ(23,"input",16),e.NdJ("ngModelChange",function(s){return t.model.aboutMeTitle=s}),e.qZA()(),e.TgZ(24,"div",12),e._UZ(25,"label",17),e.TgZ(26,"input",16),e.NdJ("ngModelChange",function(s){return t.model.aboutMeDescription=s}),e.qZA()(),e.TgZ(27,"div",18),e.YNc(28,A,1,0,"button",19),e.YNc(29,B,1,0,"button",20),e.TgZ(30,"button",21),e.NdJ("click",function(){return t.Clear()}),e.qZA()()()()()()()),2&a&&(e.xp6(8),e.Q6J("options",t.SpecialityData)("ngModel",t.currentSpec)("optionLabel","ar"==t.currentLanguage?"speciality_Name_Ar":"speciality_Name_En")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u062a\u062e\u0635\u0635":"Choose Speciality"),e.xp6(7),e.Q6J("cols",t.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("SecondBtn",!0)("contentSecondBtn",t.contentSecondBtn)("classSecondBtn","light-warning"),e.xp6(5),e.Q6J("options",t.DataUserDoctors)("ngModel",t.currentUser)("optionLabel","fullName")("showClear",!1)("filter",!0)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"Choose User"),e.xp6(3),e.Q6J("ngModel",t.model.aboutMeTitle),e.xp6(3),e.Q6J("ngModel",t.model.aboutMeDescription),e.xp6(2),e.Q6J("ngIf","add"==t.mode),e.xp6(1),e.Q6J("ngIf","edit"==t.mode))},dependencies:[p.O5,E.G,l.Fj,l.JJ,l.On,f.Lt,m.Pi]})}return i})(),w=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[p.ez,v.Bz.forChild([{path:"doctors",component:I,data:{animation:"doctors"}}]),M.m,l.u5,f.kW,y.EV,T.q4,m.aw,S.q,c.DL]})}return i})()}}]);