"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[8],{9008:(F,p,s)=>{s.r(p),s.d(p,{ManageUsersModule:()=>I});var c=s(6814),i=s(7860),d=s(649),g=s(1356),h=s(7434),b=s(8180),U=s(4442),e=s(5879),v=s(8472),T=s(4361),u=s(6223),f=s(2160),C=s(3506),M=s(6663);function y(o,_){if(1&o){const n=e.EpF();e.TgZ(0,"button",31),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Add())}),e.qZA()}}function Z(o,_){if(1&o){const n=e.EpF();e.TgZ(0,"button",32),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Edit())}),e.qZA()}}let D=(()=>{class o{service;cdr;dialogService;cts;CitiesData=[];Cols;Data;SpecData;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;classFirstBtn="success text-white";mode="add";currentSpec={id:""};userTypes=U.zI;currentUserType;IsDeletedUsersOptions;currentSelectedIsDeletedOption;constructor(n,r,t,l){this.service=n,this.cdr=r,this.dialogService=t,this.cts=l,this.lang=localStorage.getItem("language"),this.Cols=[i.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),i.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"fullName",header:"ar"==this.lang?"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"User Name ",type:"text"}),i.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"phoneNumber",header:"ar"==this.lang?"\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644":"Phone Number ",type:"text"}),i.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!1,field:"email",header:"ar"==this.lang?"\u0627\u0644\u0628\u0631\u064a\u062f":"Email ",type:"text"}),i.v.fromJS({id:5,sorted:!0,filtered:!0,hidden:!1,field:"userType",header:"ar"==this.lang?"\u0627\u0644\u0646\u0648\u0639":"Type ",type:"userType"})],this.IsDeletedUsersOptions=[{id:1,displaynameEn:"All Without Deleted",displaynameAr:"\u0627\u0644\u0643\u0644 \u0628\u062f\u0648\u0646 \u0627\u0644\u0645\u062d\u0630\u0648\u0641",value:1},{id:2,displaynameEn:"Only Deleted Users",displaynameAr:"\u0627\u0644\u0645\u062d\u0630\u0648\u0641 \u0641\u0642\u0637",value:2}]}ngOnChanges(n){this.cdr.detectChanges()}ngOnInit(){this.search(),this.searchCities(),this.currentLanguage=localStorage.getItem("language")??"ar"}search(){let a,m,n=(new h.l).GetUserId();1==this.currentSelectedIsDeletedOption?m=!1:2==this.currentSelectedIsDeletedOption&&(m=!0),a=!1,this.service.searchUsers(void 0,void 0,void 0,m,!1,void 0,void 0,n).pipe((0,b.q)(1)).subscribe({next:L=>{this.Data=L.data.items,this.cdr.detectChanges()},error:()=>{}})}searchCities(){this.service.searchCity("","",!1,1,1,void 0).subscribe({next:n=>{this.CitiesData=n.data.items,this.cdr.detectChanges()},error:()=>{}})}Add(){let n=new d.QV;n.userType=Number(this.currentUserType.Id),n.gender=1,n.bloodType=1,n.fullName=this.model.fullName,n.email=this.model.email,n.phoneNumber=this.model.phoneNumber,n.addressDescription=this.model.addressDescription,n.birthDate=this.model.birthDate,n.cityId=String(this.selectedCity),n.latitude=this.model.latitude,n.longitude=this.model.longitude,n.profileImage=this.model.profileImageUrl,this.service.createNewUser(n).subscribe({next:r=>{this.search()}})}model=new d.NME;selectedForEdit=new d.NME;selectedCity;EditRow(n){(new h.l).GetUserId(),this.model=n,this.currentUserType=this.userTypes.filter(l=>l.Id==n.userType)[0],this.mode="edit";let t=d.NME.fromJS(n);this.model=t,this.selectedForEdit=n,null!=n.cityId&&(this.selectedCity=this.CitiesData.filter(l=>l.id==n.cityId)[0].id,this.model.cityId=this.selectedCity)}Edit(){let n=new d.O1n;n.gender=1,n.bloodType=1,n.fullName=this.model.fullName,n.email=this.model.email,n.addressDescription=this.model.addressDescription,n.birthDate=this.model.birthDate,n.cityId=String(this.selectedCity),n.latitude=this.model.latitude,n.longitude=this.model.longitude,n.profileImage=void 0,n.targetUserId=this.model.id,this.service.editUserForAdmin(n).subscribe({next:r=>{this.search(),this.cts.Show("info","ar"==this.currentLanguage?"\u062a\u0639\u062f\u064a\u0644":"Updated ","ar"==this.currentLanguage?"\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0646\u062c\u0627\u062d":"User Updated Successfully")}})}DeleteRow(n){let r=new d.rl5;r.targetUserId=n.id,this.service.deleteUser(r).subscribe({next:t=>{this.search()}})}Clear(){this.model=new d.NME,this.mode="add",this.currentUserType={}}static \u0275fac=function(r){return new(r||o)(e.Y36(d.r9S),e.Y36(e.sBO),e.Y36(g.xA),e.Y36(v.m))};static \u0275cmp=e.Xpm({type:o,selectors:[["app-ManageUsers"]],features:[e._Bn([g.xA]),e.TTD],decls:47,vars:38,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"mb-10"],["translate","Users.Type",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","optionValue","showClear","placeholder","ngModelChange","onChange"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","contentSecondBtn","FirstBtn","contentFirstBtn","secondButtonEvent","firstButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],["styleClass","fc-primng",3,"options","ngModel","disabled","optionLabel","showClear","placeholder","ngModelChange"],["translate","Users.UserName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","Users.Mobile",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["translate","Users.Email",1,"form-label"],["type","email","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","Users.AddressDescription",1,"form-label"],[1,"form-control",3,"ngModel","ngModelChange"],["translate","Users.birthDate",1,"form-label"],["styleClass","fc-primng",3,"ngModel","ngModelChange"],["translate","address.SelectState",1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","optionValue","optionLabel","showClear","placeholder","ngModelChange"],["translate","Users.longitude",1,"form-label"],["translate","Users.latitude",1,"form-label"],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-success","mx-3",2,"width","25%",3,"click"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"label",5),e.TgZ(6,"div",6)(7,"p-dropdown",7),e.NdJ("ngModelChange",function(a){return t.currentSelectedIsDeletedOption=a})("onChange",function(){return t.search()}),e.qZA()()()(),e.TgZ(8,"div",3)(9,"div",8)(10,"app-shared-datatable",9),e.NdJ("secondButtonEvent",function(a){return t.EditRow(a)})("firstButtonEvent",function(a){return t.DeleteRow(a)}),e.qZA()(),e.TgZ(11,"div",10)(12,"div",11)(13,"div",4),e._UZ(14,"label",5),e.TgZ(15,"div",6)(16,"p-dropdown",12),e.NdJ("ngModelChange",function(a){return t.currentUserType=a}),e.qZA()()(),e.TgZ(17,"div",4),e._UZ(18,"label",13),e.TgZ(19,"input",14),e.NdJ("ngModelChange",function(a){return t.model.fullName=a}),e.qZA()(),e.TgZ(20,"div",4),e._UZ(21,"label",15),e.TgZ(22,"input",16),e.NdJ("ngModelChange",function(a){return t.model.phoneNumber=a}),e.qZA()(),e.TgZ(23,"div",4),e._UZ(24,"label",17),e.TgZ(25,"input",18),e.NdJ("ngModelChange",function(a){return t.model.email=a}),e.qZA()(),e.TgZ(26,"div",4),e._UZ(27,"label",19),e.TgZ(28,"textarea",20),e.NdJ("ngModelChange",function(a){return t.model.addressDescription=a}),e.qZA()(),e.TgZ(29,"div",4),e._UZ(30,"label",21),e.TgZ(31,"div",6)(32,"p-calendar",22),e.NdJ("ngModelChange",function(a){return t.model.birthDate=a}),e.qZA()()(),e.TgZ(33,"div",4),e._UZ(34,"label",23),e.TgZ(35,"div",6)(36,"p-dropdown",24),e.NdJ("ngModelChange",function(a){return t.selectedCity=a}),e.qZA()()(),e.TgZ(37,"div",4),e._UZ(38,"label",25),e.TgZ(39,"input",14),e.NdJ("ngModelChange",function(a){return t.model.longitude=a}),e.qZA()(),e.TgZ(40,"div",4),e._UZ(41,"label",26),e.TgZ(42,"input",14),e.NdJ("ngModelChange",function(a){return t.model.latitude=a}),e.qZA()(),e.TgZ(43,"div",27),e.YNc(44,y,1,0,"button",28),e.YNc(45,Z,1,0,"button",29),e.TgZ(46,"button",30),e.NdJ("click",function(){return t.Clear()}),e.qZA()()()()()()()()),2&r&&(e.xp6(7),e.Q6J("options",t.IsDeletedUsersOptions)("ngModel",t.currentSelectedIsDeletedOption)("optionLabel","ar"==t.currentLanguage?"displaynameAr":"displaynameEn")("optionValue","value")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646":"Choose Users"),e.xp6(3),e.Q6J("cols",t.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("SecondBtn",!0)("contentSecondBtn","ar"==t.currentLanguage?"\u062a\u0639\u062f\u064a\u0644":"Edit")("FirstBtn",1==t.currentSelectedIsDeletedOption)("contentFirstBtn","ar"==t.currentLanguage?"\u062d\u0630\u0641":"Delete"),e.xp6(6),e.Q6J("options",t.userTypes)("ngModel",t.currentUserType)("disabled","edit"==t.mode)("optionLabel","ar"==t.currentLanguage?"NameAr":"NameEn")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"Choose User Type "),e.xp6(3),e.Q6J("ngModel",t.model.fullName),e.xp6(3),e.Q6J("ngModel",t.model.phoneNumber)("disabled","edit"==t.mode),e.xp6(3),e.Q6J("ngModel",t.model.email),e.xp6(3),e.Q6J("ngModel",t.model.addressDescription),e.xp6(4),e.Q6J("ngModel",t.model.birthDate),e.xp6(4),e.Q6J("options",t.CitiesData)("ngModel",t.selectedCity)("optionValue","id")("optionLabel","ar"==t.currentLanguage?"city_Name_Ar":"city_Name_En")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0646\u0642\u0637\u0629":"Choose Area"),e.xp6(3),e.Q6J("ngModel",t.model.longitude),e.xp6(3),e.Q6J("ngModel",t.model.latitude),e.xp6(2),e.Q6J("ngIf","add"==t.mode),e.xp6(1),e.Q6J("ngIf","edit"==t.mode))},dependencies:[c.O5,T.G,u.Fj,u.JJ,u.On,f.Lt,C.f,M.Pi]})}return o})();var N=s(7304),A=s(3415),E=s(3660),S=s(4055),J=s(9378);let I=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=e.oAB({type:o});static \u0275inj=e.cJS({imports:[c.ez,N.Bz.forChild([{path:"users",component:D,data:{animation:"users"}}]),A.m,u.u5,f.kW,J.EV,S.q4,C._8,M.aw,E.q,g.DL]})}return o})()}}]);