"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[8],{9008:(V,h,i)=>{i.r(h),i.d(h,{ManageUsersModule:()=>Y});var f=i(6814),c=i(7860),l=i(649),p=i(1356),C=i(7434),v=i(8180),M=i(4442),b=i(3519),d=i.n(b),e=i(5879),_=i(8472),I=i(4361),g=i(6223),T=i(2160),y=i(6663),U=i(158);const w=["fileInput"];function S(r,u){if(1&r){const t=e.EpF();e.TgZ(0,"div",15),e._UZ(1,"label",33),e.TgZ(2,"textarea",34),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.model.addressDescription=n)}),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(2),e.Q6J("ngModel",t.model.addressDescription)}}function Z(r,u){if(1&r){const t=e.EpF();e.TgZ(0,"div",15),e._UZ(1,"label",35),e.TgZ(2,"div",7)(3,"p-dropdown",36),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.selectedCity=n)}),e.qZA()()()}if(2&r){const t=e.oxw();e.xp6(3),e.Q6J("options",t.CitiesData)("ngModel",t.selectedCity)("optionValue","id")("optionLabel","ar"==t.currentLanguage?"city_Name_Ar":"city_Name_En")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0646\u0642\u0637\u0629":"Choose Area")}}function N(r,u){if(1&r){const t=e.EpF();e.TgZ(0,"div",15),e._UZ(1,"label",37),e.TgZ(2,"input",17),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.model.longitude=n)}),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(2),e.Q6J("ngModel",t.model.longitude)}}function E(r,u){if(1&r){const t=e.EpF();e.TgZ(0,"div",15),e._UZ(1,"label",38),e.TgZ(2,"input",17),e.NdJ("ngModelChange",function(n){e.CHM(t);const s=e.oxw();return e.KtG(s.model.latitude=n)}),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(2),e.Q6J("ngModel",t.model.latitude)}}function A(r,u){if(1&r&&e._UZ(0,"p-image",39),2&r){const t=e.oxw();e.Q6J("src",t.model.profileImageUrl)("preview",!0)}}function B(r,u){if(1&r){const t=e.EpF();e.TgZ(0,"button",40),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.Add())}),e.qZA()}}function D(r,u){if(1&r){const t=e.EpF();e.TgZ(0,"button",41),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.Edit())}),e.qZA()}}let J=(()=>{class r{service;cdr;dialogService;cts;CitiesData=[];Cols;Data;SpecData;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;contentSecondBtn;contentThirdBtn;classFirstBtn="success text-white";mode="add";currentSpec={id:""};userTypes=M.zI;currentUserType;IsDeletedUsersOptions;currentSelectedIsDeletedOption;currentSelectedIsUserTypeOption;constructor(t,a,n,s){this.service=t,this.cdr=a,this.dialogService=n,this.cts=s,this.lang=localStorage.getItem("language"),this.Cols=[c.v.fromJS({id:0,sorted:!0,filtered:!0,hidden:!1,field:"profileImageUrl",header:"ar"==this.lang?"\u0635\u0648\u0631\u0629":"Image ",type:"image"}),c.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),c.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"fullName",header:"ar"==this.lang?"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"User Name ",type:"text"}),c.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"phoneNumber",header:"ar"==this.lang?"\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644":"Phone Number ",type:"text"}),c.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!0,field:"email",header:"ar"==this.lang?"\u0627\u0644\u0628\u0631\u064a\u062f":"Email ",type:"text"}),c.v.fromJS({id:5,sorted:!0,filtered:!0,hidden:!1,field:"userType",header:"ar"==this.lang?"\u0627\u0644\u0646\u0648\u0639":"Type ",type:"userType"})],this.IsDeletedUsersOptions=[{id:1,displaynameEn:"All Without Deleted",displaynameAr:"\u0627\u0644\u0643\u0644 \u0628\u062f\u0648\u0646 \u0627\u0644\u0645\u062d\u0630\u0648\u0641",value:1},{id:2,displaynameEn:"Only Deleted Users",displaynameAr:"\u0627\u0644\u0645\u062d\u0630\u0648\u0641 \u0641\u0642\u0637",value:2}],this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-trash-alt'></i> \u062d\u0630\u0641":"<i class='fas fa-trash-alt'></i> Delete",this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit ",this.contentThirdBtn="ar"===this.lang?"<i class='fas fa-step-forward'></i> \u0627\u0633\u062a\u0643\u0645\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a":"<i class='fas fa-step-forward'></i> Continu Register ",this.currentLanguage=localStorage.getItem("language")??"ar"}ngOnChanges(t){this.cdr.detectChanges()}ngOnInit(){this.currentLanguage=localStorage.getItem("language")??"ar",this.search(),this.currentUserType=this.userTypes[0],this.searchCities()}search(){let s,o,m,t=(new C.l).GetUserId();1==this.currentSelectedIsDeletedOption?m=!1:2==this.currentSelectedIsDeletedOption&&(m=!0),s=this.currentSelectedIsUserTypeOption?.Id,o=!1,this.service.searchUsers(void 0,void 0,s,m,!1,void 0,void 0,t,void 0).pipe((0,v.q)(1)).subscribe({next:K=>{this.Data=K.data.items,this.cdr.detectChanges()},error:()=>{}})}searchCities(){this.service.searchCity("","",!1,1,1,void 0,void 0).subscribe({next:t=>{this.CitiesData=t.data.items,this.cdr.detectChanges()},error:()=>{}})}selectedFile=null;base64String="";onFileSelected(t){const a=t.target;if(a.files&&a.files.length>0){this.selectedFile=a.files[0];const n=new FileReader;n.onload=this.handleReaderLoaded.bind(this),n.readAsDataURL(this.selectedFile)}}handleReaderLoaded(t){if(this.base64String=t.target?.result,this.model.profileImageUrl=String(this.base64String),"edit"==this.mode){let a=new l.Xek;a.targetUserId=this.model.id,a.profileImageBase64=this.model.profileImageUrl,this.service.changeProfileImageControlPanel(a).subscribe({next:n=>{}})}this.cdr.detectChanges()}Add(){let t=new l.QV;t.userType=Number(this.currentUserType.Id),t.gender=1,t.bloodType=1,t.fullName=this.model.fullName,t.email=this.model.email,t.phoneNumber=this.model.phoneNumber,t.addressDescription=this.model.addressDescription,t.birthDate=this.model.birthDate,this.selectedCity&&(t.cityId=String(this.selectedCity)),t.latitude=this.model.latitude,t.longitude=this.model.longitude,t.profileImageBase64=this.model.profileImageUrl,this.service.createNewUser(t).subscribe({next:a=>{a.isSuccess&&this.cts.Show("success","ar"==this.lang?"\u0639\u0645\u0644\u064a\u0629 \u0646\u0627\u062c\u062d\u0629":"Success Action","ar"==this.lang?"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0646\u062c\u0627\u062d":"User Added Successfully"),this.search();let n={};3==t.userType||5==t.userType?d().fire({title:"ar"==this.lang?"\u062a\u062d\u0648\u064a\u0644 \u0644\u0644\u0625\u0633\u062a\u0643\u0645\u0627\u0644":"Redirect to continue",html:"ar"==this.lang?" \u0633\u064a\u062a\u0645 \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u062a\u0644\u0642\u0627\u0626\u064a \u0644\u0627\u0633\u062a\u0643\u0645\u0627\u0644 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062c\u062f\u064a\u062f ":"Automaticly Redirect to register new Registratio",timer:2e3,timerProgressBar:!0,didOpen:()=>{d().showLoading();const s=d().getPopup().querySelector("b");n=setInterval(()=>{s.textContent=`${d().getTimerLeft()}`},100)},willClose:()=>{clearInterval(n)}}).then(s=>{s.dismiss===d().DismissReason.timer&&this.gotoAndContinuRegByType(t.userType,a.data.value)}):this.Clear()}})}ContinueRegisteration(t){this.gotoAndContinuRegByType(t.userType,t.id)}gotoAndContinuRegByType(t,a){switch(t){case 3:return void(window.location.href="#/ManageOrganizations/Organizations?id="+a);case 5:return void(window.location.href="#/ManageDoctors/doctors?id="+a);default:return}}model=new l.NME;selectedForEdit=new l.NME;selectedCity;EditRow(t){(new C.l).GetUserId(),this.model=t,this.currentUserType=this.userTypes.filter(s=>s.Id==t.userType)[0],this.mode="edit";let n=l.NME.fromJS(t);this.model=n,this.selectedForEdit=t,null!=t.cityId&&(this.selectedCity=this.CitiesData.filter(s=>s.id==t.cityId)[0].id,this.model.cityId=this.selectedCity)}Edit(){let t=new l.O1n;t.gender=1,t.bloodType=1,t.fullName=this.model.fullName,t.email=this.model.email,t.addressDescription=this.model.addressDescription,t.birthDate=this.model.birthDate,t.cityId=String(this.selectedCity),t.latitude=this.model.latitude,t.longitude=this.model.longitude,t.targetUserId=this.model.id,this.service.editUserForAdmin(t).subscribe({next:a=>{this.search(),this.cts.Show("info","ar"==this.currentLanguage?"\u062a\u0639\u062f\u064a\u0644":"Updated ","ar"==this.currentLanguage?"\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0646\u062c\u0627\u062d":"User Updated Successfully")}})}DeleteRow(t){d().fire({title:"ar"==this.lang?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u061f":"Are You Sure ? ",text:"ar"==this.lang?" \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062d\u0630\u0641 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0631\u062c\u0648\u0639 \u0641\u064a\u0647\u0627 , \u0627\u0630\u0627 \u0643\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0627\u0636\u063a\u0637 \u0639\u0644\u064a \u062d\u0630\u0641 \u0627\u0648 \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0631\u062c\u0648\u0639   ":"this The deletion process is irreversible. If you are sure, click Delete or you can Cancel it ",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ar"==this.lang?"\u062d\u0630\u0641":"Delete",cancelButtonText:"ar"==this.lang?"\u0625\u0644\u063a\u0627\u0621":"Cancel"}).then(a=>{if(a.isConfirmed){let n=new l.rl5;n.targetUserId=t.id,this.service.deleteUser(n).subscribe({next:s=>{d().fire({title:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641":"Deleted!",text:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641 \u0628\u0646\u062c\u0627\u062d ":"Record has been deleted Successfully.",icon:"success"}),this.search()}})}})}Clear(){this.model=new l.NME,this.mode="add",this.currentUserType=this.userTypes[0]}fileInput;defaultImage="https://mutabbib-test.start-it-ly.com/assets/logo/png%202.png";onImageError(t){t.target.src=this.defaultImage}triggerFileInput(){this.fileInput.nativeElement.click(),this.cdr.detectChanges()}static \u0275fac=function(a){return new(a||r)(e.Y36(l.r9S),e.Y36(e.sBO),e.Y36(p.xA),e.Y36(_.m))};static \u0275cmp=e.Xpm({type:r,selectors:[["app-ManageUsers"]],viewQuery:function(a,n){if(1&a&&e.Gf(w,5),2&a){let s;e.iGM(s=e.CRH())&&(n.fileInput=s.first)}},features:[e._Bn([p.xA]),e.TTD],decls:51,vars:44,consts:[[1,"m-3"],["translate","MENU.Users",2,"font-weight","bold","color","white"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[1,"row"],[1,"col-md-6"],["translate","Users.Type",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","disabled","optionLabel","showClear","placeholder","ngModelChange","onChange"],["translate","Users.DeletedOrNot",1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","optionValue","showClear","placeholder","ngModelChange","onChange"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","FirstBtn","contentSecondBtn","contentFirstBtn","classFirstBtn","classSecondBtn","ThirdBtn","contentThirdBtn","classThirdBtn","secondButtonEvent","firstButtonEvent","thirdButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","Users.UserName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","Users.Mobile",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["translate","Users.Email",1,"form-label"],["type","email","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["class","mb-10",4,"ngIf"],["translate","Users.ImageProfile",1,"form-label"],[1,"custom-file-input",2,"display","flex","justify-content","space-evenly","align-content","center","align-items","flex-end"],["alt","Image","width","80",3,"src","preview",4,"ngIf"],["type","button","translate","Users.ChangeProfileImage",1,"btn","btn-success",3,"click"],["type","file",1,"form-control",3,"change"],["fileInput",""],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-bordered","btn-outline-success","mx-3",2,"width","25%",3,"click"],["translate","Users.AddressDescription",1,"form-label"],[1,"form-control",3,"ngModel","ngModelChange"],["translate","address.SelectState",1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","optionValue","optionLabel","showClear","placeholder","ngModelChange"],["translate","Users.longitude",1,"form-label"],["translate","Users.latitude",1,"form-label"],["alt","Image","width","80",3,"src","preview"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(a,n){1&a&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"label",6),e.TgZ(7,"div",7)(8,"p-dropdown",8),e.NdJ("ngModelChange",function(o){return n.currentSelectedIsUserTypeOption=o})("onChange",function(){return n.search()}),e.qZA()()(),e.TgZ(9,"div",5),e._UZ(10,"label",9),e.TgZ(11,"div",7)(12,"p-dropdown",10),e.NdJ("ngModelChange",function(o){return n.currentSelectedIsDeletedOption=o})("onChange",function(){return n.search()}),e.qZA()()()()()(),e._UZ(13,"br"),e.TgZ(14,"div",4)(15,"div",11)(16,"div",2)(17,"div",3)(18,"app-shared-datatable",12),e.NdJ("secondButtonEvent",function(o){return n.EditRow(o)})("firstButtonEvent",function(o){return n.DeleteRow(o)})("thirdButtonEvent",function(o){return n.ContinueRegisteration(o)}),e.qZA()()()(),e.TgZ(19,"div",13)(20,"div",2)(21,"div",3)(22,"div",14)(23,"div",15),e._UZ(24,"label",6),e.TgZ(25,"div",7)(26,"p-dropdown",8),e.NdJ("ngModelChange",function(o){return n.currentUserType=o})("onChange",function(){return n.Clear()}),e.qZA()()(),e.TgZ(27,"div",15),e._UZ(28,"label",16),e.TgZ(29,"input",17),e.NdJ("ngModelChange",function(o){return n.model.fullName=o}),e.qZA()(),e.TgZ(30,"div",15),e._UZ(31,"label",18),e.TgZ(32,"input",19),e.NdJ("ngModelChange",function(o){return n.model.phoneNumber=o}),e.qZA()(),e.TgZ(33,"div",15),e._UZ(34,"label",20),e.TgZ(35,"input",21),e.NdJ("ngModelChange",function(o){return n.model.email=o}),e.qZA()(),e.YNc(36,S,3,1,"div",22),e.YNc(37,Z,4,6,"div",22),e.YNc(38,N,3,1,"div",22),e.YNc(39,E,3,1,"div",22),e.TgZ(40,"div",15),e._UZ(41,"label",23),e.TgZ(42,"div",24),e.YNc(43,A,1,2,"p-image",25),e.TgZ(44,"button",26),e.NdJ("click",function(){return n.triggerFileInput()}),e.qZA(),e.TgZ(45,"input",27,28),e.NdJ("change",function(o){return n.onFileSelected(o)}),e.qZA()()(),e.TgZ(47,"div",29),e.YNc(48,B,1,0,"button",30),e.YNc(49,D,1,0,"button",31),e.TgZ(50,"button",32),e.NdJ("click",function(){return n.Clear()}),e.qZA()()()()()()()),2&a&&(e.xp6(8),e.Q6J("options",n.userTypes)("ngModel",n.currentSelectedIsUserTypeOption)("disabled","edit"==n.mode)("optionLabel","ar"==n.currentLanguage?"NameAr":"NameEn")("showClear",!1)("placeholder","ar"==n.currentLanguage?"\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"Choose User Type "),e.xp6(4),e.Q6J("options",n.IsDeletedUsersOptions)("ngModel",n.currentSelectedIsDeletedOption)("optionLabel","ar"==n.currentLanguage?"displaynameAr":"displaynameEn")("optionValue","value")("showClear",!1)("placeholder","ar"==n.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646":"Choose Users"),e.xp6(6),e.Q6J("cols",n.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",n.Data)("chooseColomns",!0)("SecondBtn",!0)("FirstBtn",1==n.currentSelectedIsDeletedOption)("contentSecondBtn",n.contentSecondBtn)("contentFirstBtn",n.contentFirstBtn)("classFirstBtn","light-danger")("classSecondBtn","light-warning")("ThirdBtn",!0)("contentThirdBtn",n.contentThirdBtn)("classThirdBtn","light-info"),e.xp6(8),e.Q6J("options",n.userTypes)("ngModel",n.currentUserType)("disabled","edit"==n.mode)("optionLabel","ar"==n.currentLanguage?"NameAr":"NameEn")("showClear",!1)("placeholder","ar"==n.currentLanguage?"\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"Choose User Type "),e.xp6(3),e.Q6J("ngModel",n.model.fullName),e.xp6(3),e.Q6J("ngModel",n.model.phoneNumber)("disabled","edit"==n.mode),e.xp6(3),e.Q6J("ngModel",n.model.email),e.xp6(1),e.Q6J("ngIf",3==n.currentUserType.Id),e.xp6(1),e.Q6J("ngIf",3==n.currentUserType.Id),e.xp6(1),e.Q6J("ngIf",3==n.currentUserType.Id),e.xp6(1),e.Q6J("ngIf",3==n.currentUserType.Id),e.xp6(4),e.Q6J("ngIf",n.model.profileImageUrl),e.xp6(5),e.Q6J("ngIf","add"==n.mode),e.xp6(1),e.Q6J("ngIf","edit"==n.mode))},dependencies:[f.O5,I.G,g.Fj,g.JJ,g.On,T.Lt,y.Pi,U.E],styles:[".custom-file-input[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}"]})}return r})();var F=i(7304),x=i(3415),L=i(3660),O=i(4055),R=i(9378),Q=i(3506),H=i(8039),P=i(8676);let Y=(()=>{class r{static \u0275fac=function(a){return new(a||r)};static \u0275mod=e.oAB({type:r});static \u0275inj=e.cJS({imports:[f.ez,F.Bz.forChild([{path:"users",component:J,data:{animation:"users"}}]),x.m,g.u5,T.kW,R.EV,O.q4,Q._8,y.aw,L.q,H.F,P.Q,U.$,p.DL]})}return r})()}}]);