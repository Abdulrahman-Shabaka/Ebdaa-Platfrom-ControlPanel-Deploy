"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[808],{8808:(_,g,o)=>{o.r(g),o.d(g,{ManageDoctorModule:()=>J});var p=o(6814),m=o(7304),M=o(3415),d=o(6223),f=o(6663),v=o(3660),C=o(2160),u=o(5118),T=o(4055),y=o(9378),c=o(7860),l=o(649),S=o(7434),b=o(8180),U=o(4442),e=o(5879),Z=o(8472),E=o(4361);function A(i,B){if(1&i){const a=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(a);const t=e.oxw();return e.KtG(t.Add())}),e.qZA()}}function w(i,B){if(1&i){const a=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){e.CHM(a);const t=e.oxw();return e.KtG(t.Edit())}),e.qZA()}}let I=(()=>{class i{service;cdr;dialogService;cts;route;Cols;Data;DataUserDoctors;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;contentSecondBtn;classFirstBtn="success text-white";mode="add";currentSpec=new l.UJT;currentSelectedSpec=new l.UJT;userTypes=U.zI;currentUser;model=new l.zZz;constructor(a,s,t,r,n){this.service=a,this.cdr=s,this.dialogService=t,this.cts=r,this.route=n,this.lang=localStorage.getItem("language"),this.Cols=[c.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),c.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"profileImageUrl",header:"ar"==this.lang?"\u0627\u0644\u0635\u0648\u0631\u0629":"Image ",type:"image"}),c.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"doctorName",header:"ar"==this.lang?"\u0627\u0633\u0645 \u0627\u0644\u0637\u0628\u064a\u0628":"Doctor Name ",type:"text"}),c.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"aboutMeTitle",header:"ar"==this.lang?"\u0639\u0646 \u0627\u0644\u0637\u0628\u064a\u0628":"About Doctor ",type:"text"})],this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-trash-alt'></i> \u062d\u0630\u0641":"<i class='fas fa-trash-alt'></i> Delete",this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit "}ngOnChanges(a){this.cdr.detectChanges()}SpecialityData;searchSpeciality(){this.service.searchSpeciality("",!1,1,1,void 0,void 0).subscribe({next:a=>{this.SpecialityData=a.data.items,this.search(),this.cdr.detectChanges()},error:()=>{}})}SearchBySpec(){this.search()}ngOnInit(){this.searchSpeciality(),this.searchUsers(),this.currentLanguage=localStorage.getItem("language")??"ar"}getData(){this.Data=[],this.cdr.detectChanges();var a="";this.route.queryParamMap.subscribe(s=>{null==(a=s.get("id"))?a=this.currentUser.id:(this.currentUser=this.DataUserDoctors.filter(t=>t.id==a)[0],this.cdr.detectChanges())})}searchUsers(){let r,n,D,a=(new S.l).GetUserId();D=!1,n=!1,r=l.FWD._5,this.service.searchUsers(void 0,void 0,r,!1,!1,void 0,void 0,a,void 0).pipe((0,b.q)(1)).subscribe({next:L=>{this.DataUserDoctors=L.data.items,this.cdr.detectChanges(),this.getData()},error:()=>{}})}search(){let s,t,a=(new S.l).GetUserId();s=this.currentSpec.id,t=!1,this.service.getDoctorPerSpeciality(s,!1,void 0,void 0,a,void 0).pipe((0,b.q)(1)).subscribe({next:h=>{this.Data=h.data.items,this.cdr.detectChanges()},error:()=>{}})}Add(){this.model.specialityId=this.currentSelectedSpec.id,this.model.doctorUserId=this.currentUser.id,this.model.aboutMeTitle+=" .",this.service.newDoctor(this.model).subscribe(a=>{this.cts.Show("success","ar"==this.lang?"\u0639\u0645\u0644\u064a\u0629 \u0646\u0627\u062c\u062d\u0629":"Success Proccee","ar"==this.lang?"\u062a\u0645\u062a \u0639\u0645\u0644\u064a\u0629 \u0628\u0646\u062c\u0627\u062d":"Proccee Successfully"),this.search(),this.Clear()})}Edit(){this.model.specialityId=this.currentSelectedSpec.id,this.model.doctorUserId=this.currentUser.id,this.model.aboutMeTitle+=" .",this.service.editDoctor(this.model).subscribe(a=>{this.search(),this.cts.Show("success","ar"==this.lang?"\u0639\u0645\u0644\u064a\u0629 \u0646\u0627\u062c\u062d\u0629":"Success Proccee","ar"==this.lang?"\u062a\u0645\u062a \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062a\u0639\u062f\u064a\u0644 \u0628\u0646\u062c\u0627\u062d":"Modified Successfully"),this.Clear()})}EditRow(a){this.model.aboutMeDescription=a.aboutMeDescription,this.model.aboutMeTitle=a.aboutMeTitle,this.model.doctorUserId=a.doctorUserId,this.model.specialityId=a.specialityId,this.mode="edit",this.currentUser=this.DataUserDoctors.filter(s=>s.id==a.doctorUserId)[0]}ShowTableSchedule(a){}Clear(){this.currentUser={},this.mode="add"}static \u0275fac=function(s){return new(s||i)(e.Y36(l.r9S),e.Y36(e.sBO),e.Y36(u.xA),e.Y36(Z.m),e.Y36(m.gz))};static \u0275cmp=e.Xpm({type:i,selectors:[["app-ManageDoctor"]],features:[e._Bn([u.xA]),e.TTD],decls:35,vars:29,consts:[[1,"m-3"],["translate","MENU.DoctorList",2,"font-weight","bold","color","white"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[1,"row"],["translate","MENU.Speciality",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange","onChange"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","contentSecondBtn","classSecondBtn","secondButtonEvent","firstButtonEvent"],[1,"col-md-4"],[1,"mb-10"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange"],["translate","Users.UserName",1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","filter","placeholder","ngModelChange"],["translate","Doctors.AboutMeTitle",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","Doctors.AboutMeDescrption",1,"form-label"],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-bordered","btn-outline-success","mx-3",2,"width","25%",3,"click"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(s,t){1&s&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"label",5),e.TgZ(6,"div",6)(7,"p-dropdown",7),e.NdJ("ngModelChange",function(n){return t.currentSpec=n})("onChange",function(){return t.SearchBySpec()}),e.qZA()()()()(),e._UZ(8,"br"),e.TgZ(9,"div",4)(10,"div",8)(11,"div",2)(12,"div",3)(13,"app-shared-datatable",9),e.NdJ("secondButtonEvent",function(n){return t.EditRow(n)})("firstButtonEvent",function(n){return t.ShowTableSchedule(n)}),e.qZA()()()(),e.TgZ(14,"div",10)(15,"div",2)(16,"div",3)(17,"div",11),e._UZ(18,"label",5),e.TgZ(19,"div",6)(20,"p-dropdown",12),e.NdJ("ngModelChange",function(n){return t.currentSelectedSpec=n}),e.qZA()()(),e.TgZ(21,"div",11),e._UZ(22,"label",13),e.TgZ(23,"div",6)(24,"p-dropdown",14),e.NdJ("ngModelChange",function(n){return t.currentUser=n}),e.qZA()()(),e.TgZ(25,"div",11),e._UZ(26,"label",15),e.TgZ(27,"input",16),e.NdJ("ngModelChange",function(n){return t.model.aboutMeTitle=n}),e.qZA()(),e.TgZ(28,"div",11),e._UZ(29,"label",17),e.TgZ(30,"textarea",16),e.NdJ("ngModelChange",function(n){return t.model.aboutMeDescription=n}),e.qZA()(),e.TgZ(31,"div",18),e.YNc(32,A,1,0,"button",19),e.YNc(33,w,1,0,"button",20),e.TgZ(34,"button",21),e.NdJ("click",function(){return t.Clear()}),e.qZA()()()()()()),2&s&&(e.xp6(7),e.Q6J("options",t.SpecialityData)("ngModel",t.currentSpec)("optionLabel","ar"==t.currentLanguage?"speciality_Name_Ar":"speciality_Name_En")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u062a\u062e\u0635\u0635":"Choose Speciality"),e.xp6(6),e.Q6J("cols",t.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("SecondBtn",!0)("contentSecondBtn",t.contentSecondBtn)("classSecondBtn","light-warning"),e.xp6(7),e.Q6J("options",t.SpecialityData)("ngModel",t.currentSelectedSpec)("optionLabel","ar"==t.currentLanguage?"speciality_Name_Ar":"speciality_Name_En")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u062a\u062e\u0635\u0635":"Choose Speciality"),e.xp6(4),e.Q6J("options",t.DataUserDoctors)("ngModel",t.currentUser)("optionLabel","fullName")("showClear",!1)("filter",!0)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"Choose User"),e.xp6(3),e.Q6J("ngModel",t.model.aboutMeTitle),e.xp6(3),e.Q6J("ngModel",t.model.aboutMeDescription),e.xp6(2),e.Q6J("ngIf","add"==t.mode),e.xp6(1),e.Q6J("ngIf","edit"==t.mode))},dependencies:[p.O5,E.G,d.Fj,d.JJ,d.On,C.Lt,f.Pi]})}return i})(),J=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[p.ez,m.Bz.forChild([{path:"doctors",component:I,data:{animation:"doctors"}}]),M.m,d.u5,C.kW,y.EV,T.q4,f.aw,v.q,u.DL]})}return i})()}}]);