"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[8],{9008:(x,m,r)=>{r.r(m),r.d(m,{ManageUsersModule:()=>R});var p=r(6814),d=r(7860),o=r(649),u=r(1356),h=r(7434),y=r(8180),T=r(4442),I=r(3519),f=r.n(I),e=r(5879),Z=r(8472),S=r(4361),g=r(6223),C=r(2160),b=r(3506),M=r(6663),U=r(158);const D=["fileInput"];function N(i,v){if(1&i&&e._UZ(0,"p-image",38),2&i){const n=e.oxw();e.Q6J("src",n.model.profileImageUrl)("preview",!0)}}function A(i,v){if(1&i){const n=e.EpF();e.TgZ(0,"button",39),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Add())}),e.qZA()}}function E(i,v){if(1&i){const n=e.EpF();e.TgZ(0,"button",40),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Edit())}),e.qZA()}}let J=(()=>{class i{service;cdr;dialogService;cts;CitiesData=[];Cols;Data;SpecData;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;contentSecondBtn;classFirstBtn="success text-white";mode="add";currentSpec={id:""};userTypes=T.zI;currentUserType;IsDeletedUsersOptions;currentSelectedIsDeletedOption;constructor(n,a,t,l){this.service=n,this.cdr=a,this.dialogService=t,this.cts=l,this.lang=localStorage.getItem("language"),this.Cols=[d.v.fromJS({id:0,sorted:!0,filtered:!0,hidden:!1,field:"profileImageUrl",header:"ar"==this.lang?"\u0635\u0648\u0631\u0629":"Image ",type:"image"}),d.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),d.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"fullName",header:"ar"==this.lang?"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"User Name ",type:"text"}),d.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"phoneNumber",header:"ar"==this.lang?"\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064a\u0644":"Phone Number ",type:"text"}),d.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!1,field:"email",header:"ar"==this.lang?"\u0627\u0644\u0628\u0631\u064a\u062f":"Email ",type:"text"}),d.v.fromJS({id:5,sorted:!0,filtered:!0,hidden:!1,field:"userType",header:"ar"==this.lang?"\u0627\u0644\u0646\u0648\u0639":"Type ",type:"userType"})],this.IsDeletedUsersOptions=[{id:1,displaynameEn:"All Without Deleted",displaynameAr:"\u0627\u0644\u0643\u0644 \u0628\u062f\u0648\u0646 \u0627\u0644\u0645\u062d\u0630\u0648\u0641",value:1},{id:2,displaynameEn:"Only Deleted Users",displaynameAr:"\u0627\u0644\u0645\u062d\u0630\u0648\u0641 \u0641\u0642\u0637",value:2}],this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-trash-alt'></i> \u062d\u0630\u0641":"<i class='fas fa-trash-alt'></i> Delete",this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit "}ngOnChanges(n){this.cdr.detectChanges()}ngOnInit(){this.search(),this.searchCities(),this.currentLanguage=localStorage.getItem("language")??"ar"}search(){let s,c,n=(new h.l).GetUserId();1==this.currentSelectedIsDeletedOption?c=!1:2==this.currentSelectedIsDeletedOption&&(c=!0),s=!1,this.service.searchUsers(void 0,void 0,void 0,c,!1,void 0,void 0,n,void 0).pipe((0,y.q)(1)).subscribe({next:Y=>{this.Data=Y.data.items,this.cdr.detectChanges()},error:()=>{}})}searchCities(){this.service.searchCity("","",!1,1,1,void 0,void 0).subscribe({next:n=>{this.CitiesData=n.data.items,this.cdr.detectChanges()},error:()=>{}})}selectedFile=null;base64String="";onFileSelected(n){const a=n.target;if(a.files&&a.files.length>0){this.selectedFile=a.files[0];const t=new FileReader;t.onload=this.handleReaderLoaded.bind(this),t.readAsDataURL(this.selectedFile)}}handleReaderLoaded(n){if(this.base64String=n.target?.result,this.model.profileImageUrl=String(this.base64String),"edit"==this.mode){let a=new o.Xek;a.targetUserId=this.model.id,a.profileImageBase64=this.model.profileImageUrl,this.service.changeProfileImageControlPanel(a).subscribe({next:t=>{}})}this.cdr.detectChanges()}Add(){let n=new o.QV;n.userType=Number(this.currentUserType.Id),n.gender=1,n.bloodType=1,n.fullName=this.model.fullName,n.email=this.model.email,n.phoneNumber=this.model.phoneNumber,n.addressDescription=this.model.addressDescription,n.birthDate=this.model.birthDate,n.cityId=String(this.selectedCity),n.latitude=this.model.latitude,n.longitude=this.model.longitude,n.profileImageBase64=this.model.profileImageUrl,this.service.createNewUser(n).subscribe({next:a=>{this.search()}})}model=new o.NME;selectedForEdit=new o.NME;selectedCity;EditRow(n){(new h.l).GetUserId(),this.model=n,this.currentUserType=this.userTypes.filter(l=>l.Id==n.userType)[0],this.mode="edit";let t=o.NME.fromJS(n);this.model=t,this.selectedForEdit=n,null!=n.cityId&&(this.selectedCity=this.CitiesData.filter(l=>l.id==n.cityId)[0].id,this.model.cityId=this.selectedCity)}Edit(){let n=new o.O1n;n.gender=1,n.bloodType=1,n.fullName=this.model.fullName,n.email=this.model.email,n.addressDescription=this.model.addressDescription,n.birthDate=this.model.birthDate,n.cityId=String(this.selectedCity),n.latitude=this.model.latitude,n.longitude=this.model.longitude,n.profileImage=this.model.profileImageUrl,n.targetUserId=this.model.id,this.service.editUserForAdmin(n).subscribe({next:a=>{this.search(),this.cts.Show("info","ar"==this.currentLanguage?"\u062a\u0639\u062f\u064a\u0644":"Updated ","ar"==this.currentLanguage?"\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0646\u062c\u0627\u062d":"User Updated Successfully")}})}DeleteRow(n){f().fire({title:"ar"==this.lang?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u061f":"Are You Sure ? ",text:"ar"==this.lang?" \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062d\u0630\u0641 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0631\u062c\u0648\u0639 \u0641\u064a\u0647\u0627 , \u0627\u0630\u0627 \u0643\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0627\u0636\u063a\u0637 \u0639\u0644\u064a \u062d\u0630\u0641 \u0627\u0648 \u0645\u0643\u0646\u0643 \u0627\u0644\u0631\u062c\u0648\u0639   ":"this The deletion process is irreversible. If you are sure, click Delete or you can Cancel it ",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ar"==this.lang?"\u062d\u0630\u0641":"Delete",cancelButtonText:"ar"==this.lang?"\u0625\u0644\u063a\u0627\u0621":"Cancel"}).then(a=>{if(a.isConfirmed){let t=new o.rl5;t.targetUserId=n.id,this.service.deleteUser(t).subscribe({next:l=>{f().fire({title:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641":"Deleted!",text:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641 \u0628\u0646\u062c\u0627\u062d ":"Record has been deleted Successfully.",icon:"success"}),this.search()}})}})}Clear(){this.model=new o.NME,this.mode="add",this.currentUserType={}}fileInput;defaultImage="https://mutabbib-test.start-it-ly.com/assets/logo/png%202.png";onImageError(n){n.target.src=this.defaultImage}triggerFileInput(){this.fileInput.nativeElement.click(),this.cdr.detectChanges()}static \u0275fac=function(a){return new(a||i)(e.Y36(o.r9S),e.Y36(e.sBO),e.Y36(u.xA),e.Y36(Z.m))};static \u0275cmp=e.Xpm({type:i,selectors:[["app-ManageUsers"]],viewQuery:function(a,t){if(1&a&&e.Gf(D,5),2&a){let l;e.iGM(l=e.CRH())&&(t.fileInput=l.first)}},features:[e._Bn([u.xA]),e.TTD],decls:59,vars:41,consts:[[1,"m-3"],["translate","MENU.Users",2,"font-weight","bold","color","white"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[1,"row"],["translate","Users.Type",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","optionValue","showClear","placeholder","ngModelChange","onChange"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","FirstBtn","contentSecondBtn","contentFirstBtn","classFirstBtn","classSecondBtn","secondButtonEvent","firstButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["styleClass","fc-primng",3,"options","ngModel","disabled","optionLabel","showClear","placeholder","ngModelChange"],["translate","Users.UserName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","Users.Mobile",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","disabled","ngModelChange"],["translate","Users.Email",1,"form-label"],["type","email","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","Users.AddressDescription",1,"form-label"],[1,"form-control",3,"ngModel","ngModelChange"],["translate","Users.birthDate",1,"form-label"],["styleClass","fc-primng",3,"ngModel","ngModelChange"],["translate","address.SelectState",1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","optionValue","optionLabel","showClear","placeholder","ngModelChange"],["translate","Users.longitude",1,"form-label"],["translate","Users.latitude",1,"form-label"],["translate","Users.ImageProfile",1,"form-label"],[1,"custom-file-input",2,"display","flex","justify-content","space-evenly","align-content","center","align-items","flex-end"],["alt","Image","width","80",3,"src","preview",4,"ngIf"],["type","button","translate","Users.ChangeProfileImage",1,"btn","btn-success",3,"click"],["type","file",1,"form-control",3,"change"],["fileInput",""],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-bordered","btn-outline-success","mx-3",2,"width","25%",3,"click"],["alt","Image","width","80",3,"src","preview"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"label",5),e.TgZ(6,"div",6)(7,"p-dropdown",7),e.NdJ("ngModelChange",function(s){return t.currentSelectedIsDeletedOption=s})("onChange",function(){return t.search()}),e.qZA()()()()(),e._UZ(8,"br"),e.TgZ(9,"div",4)(10,"div",8)(11,"div",2)(12,"div",3)(13,"app-shared-datatable",9),e.NdJ("secondButtonEvent",function(s){return t.EditRow(s)})("firstButtonEvent",function(s){return t.DeleteRow(s)}),e.qZA()()()(),e.TgZ(14,"div",10)(15,"div",2)(16,"div",3)(17,"div",11)(18,"div",12),e._UZ(19,"label",5),e.TgZ(20,"div",6)(21,"p-dropdown",13),e.NdJ("ngModelChange",function(s){return t.currentUserType=s}),e.qZA()()(),e.TgZ(22,"div",12),e._UZ(23,"label",14),e.TgZ(24,"input",15),e.NdJ("ngModelChange",function(s){return t.model.fullName=s}),e.qZA()(),e.TgZ(25,"div",12),e._UZ(26,"label",16),e.TgZ(27,"input",17),e.NdJ("ngModelChange",function(s){return t.model.phoneNumber=s}),e.qZA()(),e.TgZ(28,"div",12),e._UZ(29,"label",18),e.TgZ(30,"input",19),e.NdJ("ngModelChange",function(s){return t.model.email=s}),e.qZA()(),e.TgZ(31,"div",12),e._UZ(32,"label",20),e.TgZ(33,"textarea",21),e.NdJ("ngModelChange",function(s){return t.model.addressDescription=s}),e.qZA()(),e.TgZ(34,"div",12),e._UZ(35,"label",22),e.TgZ(36,"div",6)(37,"p-calendar",23),e.NdJ("ngModelChange",function(s){return t.model.birthDate=s}),e.qZA()()(),e.TgZ(38,"div",12),e._UZ(39,"label",24),e.TgZ(40,"div",6)(41,"p-dropdown",25),e.NdJ("ngModelChange",function(s){return t.selectedCity=s}),e.qZA()()(),e.TgZ(42,"div",12),e._UZ(43,"label",26),e.TgZ(44,"input",15),e.NdJ("ngModelChange",function(s){return t.model.longitude=s}),e.qZA()(),e.TgZ(45,"div",12),e._UZ(46,"label",27),e.TgZ(47,"input",15),e.NdJ("ngModelChange",function(s){return t.model.latitude=s}),e.qZA()(),e.TgZ(48,"div",12),e._UZ(49,"label",28),e.TgZ(50,"div",29),e.YNc(51,N,1,2,"p-image",30),e.TgZ(52,"button",31),e.NdJ("click",function(){return t.triggerFileInput()}),e.qZA(),e.TgZ(53,"input",32,33),e.NdJ("change",function(s){return t.onFileSelected(s)}),e.qZA()()(),e.TgZ(55,"div",34),e.YNc(56,A,1,0,"button",35),e.YNc(57,E,1,0,"button",36),e.TgZ(58,"button",37),e.NdJ("click",function(){return t.Clear()}),e.qZA()()()()()()()),2&a&&(e.xp6(7),e.Q6J("options",t.IsDeletedUsersOptions)("ngModel",t.currentSelectedIsDeletedOption)("optionLabel","ar"==t.currentLanguage?"displaynameAr":"displaynameEn")("optionValue","value")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646":"Choose Users"),e.xp6(6),e.Q6J("cols",t.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("SecondBtn",!0)("FirstBtn",1==t.currentSelectedIsDeletedOption)("contentSecondBtn",t.contentSecondBtn)("contentFirstBtn",t.contentFirstBtn)("classFirstBtn","light-danger")("classSecondBtn","light-warning"),e.xp6(8),e.Q6J("options",t.userTypes)("ngModel",t.currentUserType)("disabled","edit"==t.mode)("optionLabel","ar"==t.currentLanguage?"NameAr":"NameEn")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"Choose User Type "),e.xp6(3),e.Q6J("ngModel",t.model.fullName),e.xp6(3),e.Q6J("ngModel",t.model.phoneNumber)("disabled","edit"==t.mode),e.xp6(3),e.Q6J("ngModel",t.model.email),e.xp6(3),e.Q6J("ngModel",t.model.addressDescription),e.xp6(4),e.Q6J("ngModel",t.model.birthDate),e.xp6(4),e.Q6J("options",t.CitiesData)("ngModel",t.selectedCity)("optionValue","id")("optionLabel","ar"==t.currentLanguage?"city_Name_Ar":"city_Name_En")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0646\u0642\u0637\u0629":"Choose Area"),e.xp6(3),e.Q6J("ngModel",t.model.longitude),e.xp6(3),e.Q6J("ngModel",t.model.latitude),e.xp6(4),e.Q6J("ngIf",t.model.profileImageUrl),e.xp6(5),e.Q6J("ngIf","add"==t.mode),e.xp6(1),e.Q6J("ngIf","edit"==t.mode))},dependencies:[p.O5,S.G,g.Fj,g.JJ,g.On,C.Lt,b.f,M.Pi,U.E],styles:[".custom-file-input[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}"]})}return i})();var _=r(7304),w=r(3415),B=r(3660),F=r(4055),L=r(9378),Q=r(8039),O=r(8676);let R=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[p.ez,_.Bz.forChild([{path:"users",component:J,data:{animation:"users"}}]),w.m,g.u5,C.kW,L.EV,F.q4,b._8,M.aw,B.q,Q.F,O.Q,U.$,u.DL]})}return i})()}}]);