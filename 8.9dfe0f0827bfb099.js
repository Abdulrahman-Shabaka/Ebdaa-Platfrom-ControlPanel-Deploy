"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[8],{9008:(F,c,r)=>{r.r(c),r.d(c,{ManageUsersModule:()=>E});var h=r(6814),i=r(7860),d=r(649),g=r(1356),m=r(7434),M=r(8180),b=r(4442),e=r(5879),T=r(8472),U=r(4361),u=r(6223),p=r(2160),f=r(3506),C=r(6663);function v(o,I){if(1&o){const n=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Add())}),e.qZA()}}function y(o,I){if(1&o){const n=e.EpF();e.TgZ(0,"button",31),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Edit())}),e.qZA()}}let Z=(()=>{class o{service;cdr;dialogService;cts;CitiesData=[];Cols;Data;SpecData;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;classFirstBtn="success text-white";mode="add";currentSpec={id:""};userTypes=b.zI;currentUserType;constructor(n,a,t,l){this.service=n,this.cdr=a,this.dialogService=t,this.cts=l,this.lang=localStorage.getItem("language"),this.Cols=[i.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),i.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"fullName",header:"ar"==this.lang?"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"User Name ",type:"text"}),i.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"phoneNumber",header:"ar"==this.lang?"\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644":"Phone Number ",type:"text"}),i.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!1,field:"email",header:"ar"==this.lang?"\u0627\u0644\u0628\u0631\u064a\u062f":"Email ",type:"text"}),i.v.fromJS({id:5,sorted:!0,filtered:!0,hidden:!1,field:"userType",header:"ar"==this.lang?"\u0627\u0644\u0646\u0648\u0639":"Type ",type:"userType"})]}ngOnChanges(n){this.cdr.detectChanges()}ngOnInit(){this.search(),this.searchCities(),this.currentLanguage=localStorage.getItem("language")??"ar"}search(){let s,n=(new m.l).GetUserId();s=!1,this.service.searchUsers(void 0,void 0,void 0,!1,void 0,void 0,n).pipe((0,M.q)(1)).subscribe({next:B=>{this.Data=B.data.items,this.cdr.detectChanges()},error:()=>{}})}searchCities(){this.service.searchCity("","",!1,1,1,void 0).subscribe({next:n=>{this.CitiesData=n.data.items,this.cdr.detectChanges()},error:()=>{}})}Add(){let n=new d.QV;n.userType=Number(this.currentUserType.Id),n.gender=1,n.bloodType=1,n.fullName=this.model.fullName,n.email=this.model.email,n.phoneNumber=this.model.phoneNumber,n.addressDescription=this.model.addressDescription,n.birthDate=this.model.birthDate,n.cityId=String(this.selectedCity),n.latitude=this.model.latitude,n.longitude=this.model.longitude,n.profileImage=this.model.profileImageUrl,this.service.createNewUser(n).subscribe({next:a=>{this.search()}})}model=new d.NM;selectedForEdit=new d.NM;selectedCity;EditRow(n){(new m.l).GetUserId(),this.model=n,this.currentUserType=this.userTypes.filter(l=>l.Id==n.userType)[0],this.mode="edit";let t=d.NM.fromJS(n);this.model=t,this.selectedForEdit=n,null!=n.cityId&&(this.selectedCity=this.CitiesData.filter(l=>l.id==n.cityId)[0].id,this.model.cityId=this.selectedCity)}Edit(){(new m.l).GetUserId();let a=new d.O1;a.gender=1,a.bloodType=1,a.fullName=this.model.fullName,a.email=this.model.email,a.addressDescription=this.model.addressDescription,a.birthDate=this.model.birthDate,a.cityId=String(this.selectedCity),a.latitude=this.model.latitude,a.longitude=this.model.longitude,a.profileImage=void 0,a.targetUserId=this.model.id,this.service.editUserForAdmin(a).subscribe({next:t=>{this.search(),this.cts.Show("info","ar"==this.currentLanguage?"\u062a\u0639\u062f\u064a\u0644":"Updated ","ar"==this.currentLanguage?"\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0646\u062c\u0627\u062d":"User Updated Successfully")}})}DeleteRow(n){let a=new d.rl;a.targetUserId=n.id,this.service.deleteUser(a).subscribe({next:t=>{this.search()}})}Clear(){this.model=new d.NM,this.mode="add",this.currentUserType={}}static \u0275fac=function(a){return new(a||o)(e.Y36(d.r9),e.Y36(e.sBO),e.Y36(g.xA),e.Y36(T.m))};static \u0275cmp=e.Xpm({type:o,selectors:[["app-ManageUsers"]],features:[e._Bn([g.xA]),e.TTD],decls:42,vars:32,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","contentSecondBtn","FirstBtn","contentFirstBtn","secondButtonEvent","firstButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","Users.Type",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","disabled","optionLabel","showClear","placeholder","ngModelChange"],["translate","Users.UserName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","Users.Mobile",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["translate","Users.Email",1,"form-label"],["type","email","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","Users.AddressDescription",1,"form-label"],[1,"form-control",3,"ngModel","ngModelChange"],["translate","Users.birthDate",1,"form-label"],["styleClass","fc-primng",3,"ngModel","ngModelChange"],["translate","address.SelectState",1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","optionValue","optionLabel","showClear","placeholder","ngModelChange"],["translate","Users.longitude",1,"form-label"],["translate","Users.latitude",1,"form-label"],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-success","mx-3",2,"width","25%",3,"click"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"app-shared-datatable",5),e.NdJ("secondButtonEvent",function(s){return t.EditRow(s)})("firstButtonEvent",function(s){return t.DeleteRow(s)}),e.qZA()(),e.TgZ(6,"div",6)(7,"div",7)(8,"div",8),e._UZ(9,"label",9),e.TgZ(10,"div",10)(11,"p-dropdown",11),e.NdJ("ngModelChange",function(s){return t.currentUserType=s}),e.qZA()()(),e.TgZ(12,"div",8),e._UZ(13,"label",12),e.TgZ(14,"input",13),e.NdJ("ngModelChange",function(s){return t.model.fullName=s}),e.qZA()(),e.TgZ(15,"div",8),e._UZ(16,"label",14),e.TgZ(17,"input",15),e.NdJ("ngModelChange",function(s){return t.model.phoneNumber=s}),e.qZA()(),e.TgZ(18,"div",8),e._UZ(19,"label",16),e.TgZ(20,"input",17),e.NdJ("ngModelChange",function(s){return t.model.email=s}),e.qZA()(),e.TgZ(21,"div",8),e._UZ(22,"label",18),e.TgZ(23,"textarea",19),e.NdJ("ngModelChange",function(s){return t.model.addressDescription=s}),e.qZA()(),e.TgZ(24,"div",8),e._UZ(25,"label",20),e.TgZ(26,"div",10)(27,"p-calendar",21),e.NdJ("ngModelChange",function(s){return t.model.birthDate=s}),e.qZA()()(),e.TgZ(28,"div",8),e._UZ(29,"label",22),e.TgZ(30,"div",10)(31,"p-dropdown",23),e.NdJ("ngModelChange",function(s){return t.selectedCity=s}),e.qZA()()(),e.TgZ(32,"div",8),e._UZ(33,"label",24),e.TgZ(34,"input",13),e.NdJ("ngModelChange",function(s){return t.model.longitude=s}),e.qZA()(),e.TgZ(35,"div",8),e._UZ(36,"label",25),e.TgZ(37,"input",13),e.NdJ("ngModelChange",function(s){return t.model.latitude=s}),e.qZA()(),e.TgZ(38,"div",26),e.YNc(39,v,1,0,"button",27),e.YNc(40,y,1,0,"button",28),e.TgZ(41,"button",29),e.NdJ("click",function(){return t.Clear()}),e.qZA()()()()()()()()),2&a&&(e.xp6(5),e.Q6J("cols",t.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("SecondBtn",!0)("contentSecondBtn","ar"==t.currentLanguage?"\u062a\u0639\u062f\u064a\u0644":"Edit")("FirstBtn",!0)("contentFirstBtn","ar"==t.currentLanguage?"\u062d\u0630\u0641":"Delete"),e.xp6(6),e.Q6J("options",t.userTypes)("ngModel",t.currentUserType)("disabled","edit"==t.mode)("optionLabel","ar"==t.currentLanguage?"NameAr":"NameEn")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"Choose User Type "),e.xp6(3),e.Q6J("ngModel",t.model.fullName),e.xp6(3),e.Q6J("ngModel",t.model.phoneNumber)("disabled","edit"==t.mode),e.xp6(3),e.Q6J("ngModel",t.model.email),e.xp6(3),e.Q6J("ngModel",t.model.addressDescription),e.xp6(4),e.Q6J("ngModel",t.model.birthDate),e.xp6(4),e.Q6J("options",t.CitiesData)("ngModel",t.selectedCity)("optionValue","id")("optionLabel","ar"==t.currentLanguage?"city_Name_Ar":"city_Name_En")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u062f\u064a\u0646\u0629":"Choose State "),e.xp6(3),e.Q6J("ngModel",t.model.longitude),e.xp6(3),e.Q6J("ngModel",t.model.latitude),e.xp6(2),e.Q6J("ngIf","add"==t.mode),e.xp6(1),e.Q6J("ngIf","edit"==t.mode))},dependencies:[h.O5,U.G,u.Fj,u.JJ,u.On,p.Lt,f.f,C.Pi]})}return o})();var N=r(7304),D=r(3415),J=r(3660),A=r(4055),S=r(9378);let E=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=e.oAB({type:o});static \u0275inj=e.cJS({imports:[h.ez,N.Bz.forChild([{path:"users",component:Z,data:{animation:"users"}}]),D.m,u.u5,p.kW,S.EV,A.q4,f._8,C.aw,J.q,g.DL]})}return o})()}}]);