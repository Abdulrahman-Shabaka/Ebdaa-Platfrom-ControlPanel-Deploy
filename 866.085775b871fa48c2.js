"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[866],{3866:(Q,T,a)=>{a.r(T),a.d(T,{ManageOrganizationsModule:()=>P});var f=a(6814),p=a(7304),B=a(3415),g=a(6223),C=a(6663),w=a(3660),S=a(2160),m=a(5118),y=a(4055),z=a(9378),U=a(1532),d=a(7860),l=a(649),v=a(7434),_=a(4442),Z=a(3519),b=a.n(Z),e=a(5879),E=a(8472),A=a(4110),I=a(4361),M=a(704);function D(s,h){if(1&s){const t=e.EpF();e.TgZ(0,"div",12)(1,"label",24),e._uU(2," \u0646\u0648\u0639 \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0637\u0628\u064a\u0629 "),e.qZA(),e.TgZ(3,"div",6)(4,"p-multiSelect",25),e.NdJ("ngModelChange",function(n){e.CHM(t);const o=e.oxw();return e.KtG(o.SelectedTypesIds=n)}),e.qZA()()()}if(2&s){const t=e.oxw();e.xp6(4),e.Q6J("options",t.CompanyTypes)("ngModel",t.SelectedTypesIds)("showClear",!1)("optionLabel","name")("optionValue","id")("placeholder","ar"===t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0634\u0631\u0643\u0629":"Choose Company Type ")}}function N(s,h){if(1&s){const t=e.EpF();e.TgZ(0,"div",12),e._UZ(1,"label",26),e.TgZ(2,"input",27),e.NdJ("ngModelChange",function(n){e.CHM(t);const o=e.oxw();return e.KtG(o.model.aboutUsTitle=n)}),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("ngModel",t.model.aboutUsTitle)}}function J(s,h){if(1&s){const t=e.EpF();e.TgZ(0,"div",12),e._UZ(1,"label",28),e.TgZ(2,"input",27),e.NdJ("ngModelChange",function(n){e.CHM(t);const o=e.oxw();return e.KtG(o.model.aboutUsDetails=n)}),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("ngModel",t.model.aboutUsDetails)}}function F(s,h){if(1&s){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.Add())}),e.qZA()}}function x(s,h){if(1&s){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.Edit())}),e.qZA()}}let L=(()=>{class s{service;cdr;dialogService;router;route;cts;glb;CitiesData=[];Cols;Data;UsersData;SpecData;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;contentSecondBtn;contentThirdBtn;classFirstBtn="success text-white";mode="add";currentSpec={id:""};OrganizationType=_.h;currentOrgType;SelectedUser;ShowSceduleThirdButton=!1;CompanyTypes;SelectedTypesIds;constructor(t,i,n,o,r,c,u){this.service=t,this.cdr=i,this.dialogService=n,this.router=o,this.route=r,this.cts=c,this.glb=u,this.lang=localStorage.getItem("language"),this.Cols=[d.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),d.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"organizationName",header:"ar"==this.lang?"\u0627\u0633\u0645 \u0627\u0644\u0645\u0624\u0633\u0633\u0629":"Organization Name ",type:"text"}),d.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!0,field:"aboutUsTitle",header:"ar"==this.lang?"\u0639\u0646 \u0627\u0644\u0645\u0624\u0633\u0633\u0629":"About Organization ",type:"text"}),d.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!1,field:"openTime",header:"ar"==this.lang?"\u0648\u0642\u062a \u0627\u0644\u0628\u062f\u0621":"Start Time ",type:"text"}),d.v.fromJS({id:5,sorted:!0,filtered:!0,hidden:!1,field:"closeTime",header:"ar"==this.lang?"\u0648\u0642\u062a \u0627\u0644\u0627\u063a\u0644\u0627\u0642":"Close Time",type:"text"})],this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-trash-alt'></i> \u062d\u0630\u0641":"<i class='fas fa-trash-alt'></i> Delete",this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit ",this.contentThirdBtn="ar"===this.lang?"<i class='fas fa-calendar-days'></i> \u0627\u0644\u062c\u062f\u0648\u0644":"<i class='fas fa-calendar-days'></i> Schedule "}ngOnInit(){this.currentLanguage=localStorage.getItem("language")??"ar",this.searchUsers(),this.SearchByType(),this.getCompanyTyeps()}getCompanyTyeps(){this.service.getCompanyTypes(void 0,void 0).subscribe({next:t=>{this.CompanyTypes=t.data}})}getData(){this.Data=[],this.cdr.detectChanges();var t="";this.route.queryParamMap.subscribe(i=>{null==(t=i.get("id"))?t=this.SelectedUser.id:(this.SelectedUser=this.UsersData.filter(n=>n.id==t)[0],this.cdr.detectChanges())})}searchUsers(){let r,O,t=(new v.l).GetUserId();r=!1,O=void 0,this.service.searchUsers(void 0,void 0,void 0,void 0,!1,void 0,void 0,t,void 0).subscribe({next:H=>{this.UsersData=H.data.items,this.cdr.detectChanges(),this.getData()},error:()=>{}})}SearchByType(){let i,o,t=(new v.l).GetUserId();o=!1,i=this.currentOrgType?.Id??this.OrganizationType[0].Id,this.service.getListOfOrganizations(i,void 0,void 0,!1,void 0,void 0,t,void 0).subscribe({next:u=>{this.Data=u.data.items,this.setShowHideScheduleButton(),this.cdr.detectChanges()},error:()=>{this.cts.Show("error","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Failed Proccee","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Proccee Failed")}})}searchCities(){this.service.searchCity("","",!1,1,1,void 0,void 0).subscribe({next:t=>{this.CitiesData=t.data.items,this.cdr.detectChanges()},error:()=>{this.cts.Show("error","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Failed Proccee","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Proccee Failed")}})}Add(){if(null==this.currentOrgType)return void this.cts.Show("error","ar"==this.lang?"\u062d\u062f\u062b \u062e\u0640\u0637\u0623":"Error Happend ","ar"==this.lang?"\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u0646\u0648\u0639 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0645\u0646 \u0641\u0636\u0644\u0643":"Please , Choose The Organization Type ");let t=new l.Y1C;t.organizationType=Number(this.currentOrgType.Id),t.targetUserId=this.SelectedUser.id,t.description=this.model.addressDescription,this.model.closeTime&&(t.closeTime=this.model.closeTime,t.openTime=this.model.openTime),t.latitude=this.model.latitude,t.longitude=this.model.longitude,t.companyTypeIds=this.SelectedTypesIds,this.service.newOrganization(t).subscribe({next:i=>{this.cts.Show("success","ar"==this.lang?"\u0639\u0645\u0644\u064a\u0629 \u0646\u0627\u062c\u062d\u0629":"Success Proccee","ar"==this.lang?"\u062a\u0645\u062a \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u0627\u0636\u0627\u0641\u0629 \u0628\u0646\u062c\u0627\u062d":"Added Successfully"),this.Clear(),this.SearchByType()},error:()=>{this.cts.Show("error","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Failed Proccee","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Added Failed")}})}model=new l.dgT;selectedForEdit=new l.dgT;EditRow(t){this.model=t,this.currentOrgType=this.OrganizationType.filter(n=>n.Id==t.organizationType)[0],this.mode="edit";let i=l.dgT.fromJS(t);this.model=i,this.selectedForEdit=t,this.model.openTime=this.model.openTime,this.model.closeTime=this.model.closeTime,null!=t.userId&&(this.SelectedUser=this.UsersData.filter(n=>n.id==t.userId)[0]),this.cdr.detectChanges()}Edit(){let t=new l.OjJ;t.aboutUsDetails=this.model.aboutUsDetails,t.aboutUsTitle=this.model.aboutUsTitle,t.addressDescription=this.model.addressDescription,this.model.closeTime&&(t.closeTime=this.glb.getTimeWithSecondsIfSecondsNotExist(this.model.closeTime),t.openTime=this.glb.getTimeWithSecondsIfSecondsNotExist(this.model.openTime)),t.latitude=this.model.latitude,t.longitude=this.model.longitude,t.organizationId=this.model.id,t.organizationName=this.model.organizationName,this.service.editOrganization(t).subscribe({next:i=>{this.cts.Show("success","ar"==this.lang?"\u0639\u0645\u0644\u064a\u0629 \u0646\u0627\u062c\u062d\u0629":"Success Proccee","ar"==this.lang?"\u062a\u0645\u062a \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062a\u0639\u062f\u064a\u0644 \u0628\u0646\u062c\u0627\u062d":"Modified Successfully"),this.Clear(),this.SearchByType()},error:()=>{this.cts.Show("error","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Failed Proccee","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Proccee Failed")}})}ShowSchedule(t){window.location.href="#/HospitalDoctorClinicAvailability?id="+t.id}DeleteRow(t){b().fire({title:"ar"==this.lang?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u061f":"Are You Sure ? ",text:"ar"==this.lang?" \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062d\u0630\u0641 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0631\u062c\u0648\u0639 \u0641\u064a\u0647\u0627 , \u0627\u0630\u0627 \u0643\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0627\u0636\u063a\u0637 \u0639\u0644\u064a \u062d\u0630\u0641 \u0627\u0648 \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0631\u062c\u0648\u0639   ":"this The deletion process is irreversible. If you are sure, click Delete or you can Cancel it ",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ar"==this.lang?"\u062d\u0630\u0641":"Delete",cancelButtonText:"ar"==this.lang?"\u0625\u0644\u063a\u0627\u0621":"Cancel"}).then(i=>{if(i.isConfirmed){let n=new l.rl5;n.targetUserId=t.id,this.service.deleteUser(n).subscribe({next:o=>{this.SearchByType(),b().fire({title:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641":"Deleted!",text:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641 \u0628\u0646\u062c\u0627\u062d ":"Record has been deleted Successfully.",icon:"success"})},error:()=>{this.cts.Show("error","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Failed Proccee","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Proccee Failed")}})}})}Clear(){this.model=new l.NME,this.mode="add",this.currentOrgType={},this.SelectedUser={}}setShowHideScheduleButton(){let t=this.currentOrgType?.Id??this.OrganizationType[0].Id;this.ShowSceduleThirdButton=!1,this.ShowSceduleThirdButton=1==t}static \u0275fac=function(i){return new(i||s)(e.Y36(l.r9S),e.Y36(e.sBO),e.Y36(m.xA),e.Y36(p.F0),e.Y36(p.gz),e.Y36(E.m),e.Y36(A.U))};static \u0275cmp=e.Xpm({type:s,selectors:[["app-manage-organizations"]],features:[e._Bn([m.xA])],decls:41,vars:43,consts:[[1,"m-3"],["translate","MENU.Orginzations",2,"font-weight","bold","color","white"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[1,"row"],["translate","org.Type",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange","onChange"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","FirstBtn","ThirdBtn","contentThirdBtn","contentSecondBtn","contentFirstBtn","classFirstBtn","classSecondBtn","classThirdBtn","secondButtonEvent","firstButtonEvent","thirdButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange"],["class","mb-10",4,"ngIf"],["translate","org.UserName",1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","filter","filterBy","optionLabel","showClear","placeholder","ngModelChange"],["translate","SHARED.from",1,"form-label"],[3,"timeTypeInput","timeTypeOutput","initStringValue","initStringValueChange"],["translate","SHARED.to",1,"form-label"],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-bordered","btn-outline-success","mx-3",2,"width","25%",3,"click"],[1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","showClear","optionLabel","optionValue","placeholder","ngModelChange"],["translate","org.About",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","org.AboutDetails",1,"form-label"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(i,n){1&i&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"label",5),e.TgZ(6,"div",6)(7,"p-dropdown",7),e.NdJ("ngModelChange",function(r){return n.currentOrgType=r})("onChange",function(){return n.SearchByType()}),e.qZA()()()()(),e._UZ(8,"br"),e.TgZ(9,"div",4)(10,"div",8)(11,"div",2)(12,"div",3)(13,"app-shared-datatable",9),e.NdJ("secondButtonEvent",function(r){return n.EditRow(r)})("firstButtonEvent",function(r){return n.DeleteRow(r)})("thirdButtonEvent",function(r){return n.ShowSchedule(r)}),e.qZA()()()(),e.TgZ(14,"div",10)(15,"div",2)(16,"div",3)(17,"div",11)(18,"div",12),e._UZ(19,"label",5),e.TgZ(20,"div",6)(21,"p-dropdown",13),e.NdJ("ngModelChange",function(r){return n.currentOrgType=r}),e.qZA()()(),e.YNc(22,D,5,6,"div",14),e.TgZ(23,"div",12),e._UZ(24,"label",15),e.TgZ(25,"div",6)(26,"p-dropdown",16),e.NdJ("ngModelChange",function(r){return n.SelectedUser=r}),e.qZA()()(),e.YNc(27,N,3,1,"div",14),e.YNc(28,J,3,1,"div",14),e.TgZ(29,"div",12),e._UZ(30,"label",17),e.TgZ(31,"div")(32,"app-time-picker",18),e.NdJ("initStringValueChange",function(r){return n.model.openTime=r}),e.qZA()()(),e.TgZ(33,"div",12),e._UZ(34,"label",19),e.TgZ(35,"div")(36,"app-time-picker",18),e.NdJ("initStringValueChange",function(r){return n.model.closeTime=r}),e.qZA()()(),e.TgZ(37,"div",20),e.YNc(38,F,1,0,"button",21),e.YNc(39,x,1,0,"button",22),e.TgZ(40,"button",23),e.NdJ("click",function(){return n.Clear()}),e.qZA()()()()()()()),2&i&&(e.xp6(7),e.Q6J("options",n.OrganizationType)("ngModel",n.currentOrgType)("optionLabel","ar"===n.currentLanguage?"NameAr":"NameEn")("showClear",!1)("placeholder","ar"===n.currentLanguage?"\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0624\u0633\u0633\u0629":"Choose Organization Type "),e.xp6(6),e.Q6J("cols",n.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",n.Data)("chooseColomns",!0)("SecondBtn",!0)("FirstBtn",!0)("ThirdBtn",n.ShowSceduleThirdButton)("contentThirdBtn",n.contentThirdBtn)("contentSecondBtn",n.contentSecondBtn)("contentFirstBtn",n.contentFirstBtn)("classFirstBtn","light-danger")("classSecondBtn","light-warning")("classThirdBtn","light-info"),e.xp6(8),e.Q6J("options",n.OrganizationType)("ngModel",n.currentOrgType)("optionLabel","ar"===n.currentLanguage?"NameAr":"NameEn")("showClear",!1)("placeholder","ar"===n.currentLanguage?"\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0624\u0633\u0633\u0629":"Choose Organization Type "),e.xp6(1),e.Q6J("ngIf","5"===(null==n.currentOrgType?null:n.currentOrgType.Id)),e.xp6(4),e.Q6J("options",n.UsersData)("ngModel",n.SelectedUser)("filter",!0)("filterBy","fullName")("optionLabel","fullName")("showClear",!1)("placeholder","ar"===n.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"Choose User "),e.xp6(1),e.Q6J("ngIf","edit"===n.mode),e.xp6(1),e.Q6J("ngIf","edit"===n.mode),e.xp6(4),e.Q6J("timeTypeInput","Time")("timeTypeOutput","Time")("initStringValue",n.model.openTime),e.xp6(4),e.Q6J("timeTypeInput","Time")("timeTypeOutput","Time")("initStringValue",n.model.closeTime),e.xp6(2),e.Q6J("ngIf","add"===n.mode),e.xp6(1),e.Q6J("ngIf","edit"===n.mode))},dependencies:[f.O5,I.G,g.Fj,g.JJ,g.On,S.Lt,y.NU,C.Pi,M.e]})}return s})(),P=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275mod=e.oAB({type:s});static \u0275inj=e.cJS({imports:[f.ez,p.Bz.forChild([{path:"Organizations",component:L,data:{animation:"Organizations"}}]),B.m,g.u5,S.kW,z.EV,y.q4,U._8,C.aw,w.q,m.DL,M.e]})}return s})()}}]);