"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[866],{3866:(Y,f,r)=>{r.r(f),r.d(f,{ManageOrganizationsModule:()=>P});var T=r(6814),h=r(7304),B=r(3415),u=r(6223),C=r(6663),O=r(3660),S=r(2160),m=r(1356),_=r(4055),w=r(9378),v=r(3506),d=r(7860),l=r(649),y=r(7434),z=r(4442),D=r(3519),M=r.n(D),e=r(5879),Z=r(8472),U=r(4361),E=r(5219);function A(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"div",12),e._UZ(1,"label",25),e.TgZ(2,"input",26),e.NdJ("ngModelChange",function(n){e.CHM(t);const o=e.oxw();return e.KtG(o.model.aboutUsTitle=n)}),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("ngModel",t.model.aboutUsTitle)}}function N(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"div",12),e._UZ(1,"label",27),e.TgZ(2,"input",26),e.NdJ("ngModelChange",function(n){e.CHM(t);const o=e.oxw();return e.KtG(o.model.aboutUsDetails=n)}),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("ngModel",t.model.aboutUsDetails)}}function F(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"i",28),e.NdJ("click",function(n){const i=e.CHM(t).clickCallBack;return e.KtG(i(n))}),e.qZA()}}function J(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"i",28),e.NdJ("click",function(n){const i=e.CHM(t).clickCallBack;return e.KtG(i(n))}),e.qZA()}}function I(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.Add())}),e.qZA()}}function x(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.Edit())}),e.qZA()}}let H=(()=>{class s{service;cdr;dialogService;router;route;cts;CitiesData=[];Cols;Data;UsersData;SpecData;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;contentSecondBtn;contentThirdBtn;classFirstBtn="success text-white";mode="add";currentSpec={id:""};OrganizationType=z.h;currentOrgType;SelectedUser;ShowSceduleThirdButton=!1;constructor(t,a,n,o,i,g){this.service=t,this.cdr=a,this.dialogService=n,this.router=o,this.route=i,this.cts=g,this.lang=localStorage.getItem("language"),this.Cols=[d.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),d.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"organizationName",header:"ar"==this.lang?"\u0627\u0633\u0645 \u0627\u0644\u0645\u0624\u0633\u0633\u0629":"Organization Name ",type:"text"}),d.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!0,field:"aboutUsTitle",header:"ar"==this.lang?"\u0639\u0646 \u0627\u0644\u0645\u0624\u0633\u0633\u0629":"About Organization ",type:"text"}),d.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!1,field:"openTime",header:"ar"==this.lang?"\u0648\u0642\u062a \u0627\u0644\u0628\u062f\u0621":"Start Time ",type:"text"}),d.v.fromJS({id:5,sorted:!0,filtered:!0,hidden:!1,field:"closeTime",header:"ar"==this.lang?"\u0648\u0642\u062a \u0627\u0644\u0627\u063a\u0644\u0627\u0642":"Close Time",type:"text"})],this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-trash-alt'></i> \u062d\u0630\u0641":"<i class='fas fa-trash-alt'></i> Delete",this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit ",this.contentThirdBtn="ar"===this.lang?"<i class='fas fa-calendar-days'></i> \u0627\u0644\u062c\u062f\u0648\u0644":"<i class='fas fa-calendar-days'></i> Schedule "}ngOnChanges(t){this.cdr.detectChanges()}ngOnInit(){this.currentLanguage=localStorage.getItem("language")??"ar",this.searchUsers(),this.SearchByType()}getData(){this.Data=[],this.cdr.detectChanges();var t="";this.route.queryParamMap.subscribe(a=>{null==(t=a.get("id"))?t=this.SelectedUser.id:(this.SelectedUser=this.UsersData.filter(n=>n.id==t)[0],this.cdr.detectChanges())})}searchUsers(){let i,b,t=(new y.l).GetUserId();i=!1,b=void 0,this.service.searchUsers(void 0,void 0,void 0,void 0,!1,void 0,void 0,t,void 0).subscribe({next:L=>{this.UsersData=L.data.items,this.cdr.detectChanges(),this.getData()},error:()=>{}})}SearchByType(){let a,o,t=(new y.l).GetUserId();o=!1,a=this.currentOrgType?.Id??this.OrganizationType[0].Id,this.service.getListOfOrganizations(a,void 0,!1,void 0,void 0,t,void 0).subscribe({next:p=>{this.Data=p.data.items,this.setShowHideScheduleButton(),this.cdr.detectChanges()},error:()=>{this.cts.Show("error","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Failed Proccee","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Proccee Failed")}})}searchCities(){this.service.searchCity("","",!1,1,1,void 0,void 0).subscribe({next:t=>{this.CitiesData=t.data.items,this.cdr.detectChanges()},error:()=>{this.cts.Show("error","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Failed Proccee","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Proccee Failed")}})}Add(){if(null==this.currentOrgType)return void this.cts.Show("error","ar"==this.lang?"\u062d\u062f\u062b \u062e\u0640\u0637\u0623":"Error Happend ","ar"==this.lang?"\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u0646\u0648\u0639 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0645\u0646 \u0641\u0636\u0644\u0643":"Please , Choose The Organization Type ");let t=new l.Y1C;t.organizationType=Number(this.currentOrgType.Id),t.targetUserId=this.SelectedUser.id,t.description=this.model.addressDescription,t.closeTime&&(t.closeTime=""==this.model.closeTime?void 0:this.getTimeFromDateString(this.model.closeTime),t.openTime=""==this.model.openTime?void 0:this.getTimeFromDateString(this.model.openTime)),t.latitude=this.model.latitude,t.longitude=this.model.longitude,this.service.newOrganization(t).subscribe({next:a=>{this.cts.Show("success","ar"==this.lang?"\u0639\u0645\u0644\u064a\u0629 \u0646\u0627\u062c\u062d\u0629":"Success Proccee","ar"==this.lang?"\u062a\u0645\u062a \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u0627\u0636\u0627\u0641\u0629 \u0628\u0646\u062c\u0627\u062d":"Added Successfully"),this.Clear(),this.SearchByType()},error:()=>{this.cts.Show("error","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Failed Proccee","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Added Failed")}})}model=new l.dgT;selectedForEdit=new l.dgT;EditRow(t){this.model=t,this.currentOrgType=this.OrganizationType.filter(n=>n.Id==t.organizationType)[0],this.mode="edit";let a=l.dgT.fromJS(t);this.model=a,this.selectedForEdit=t,null!=t.userId&&(this.SelectedUser=this.UsersData.filter(n=>n.id==t.userId)[0]),this.cdr.detectChanges()}Edit(){let t=new l.OjJ;t.aboutUsDetails=this.model.aboutUsDetails,t.aboutUsTitle=this.model.aboutUsTitle,t.addressDescription=this.model.addressDescription,t.closeTime&&(t.closeTime=""==this.model.closeTime?void 0:this.getTimeFromDateString(this.model.closeTime),t.openTime=""==this.model.openTime?void 0:this.getTimeFromDateString(this.model.openTime)),t.latitude=this.model.latitude,t.longitude=this.model.longitude,t.organizationId=this.model.id,t.organizationName=this.model.organizationName,this.service.editOrganization(t).subscribe({next:a=>{this.cts.Show("success","ar"==this.lang?"\u0639\u0645\u0644\u064a\u0629 \u0646\u0627\u062c\u062d\u0629":"Success Proccee","ar"==this.lang?"\u062a\u0645\u062a \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062a\u0639\u062f\u064a\u0644 \u0628\u0646\u062c\u0627\u062d":"Modified Successfully"),this.Clear(),this.SearchByType()},error:()=>{this.cts.Show("error","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Failed Proccee","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Proccee Failed")}})}getTimeFromDateString(t){const a=new Date(t);return`${a.getHours().toString().padStart(2,"0")}:${a.getMinutes().toString().padStart(2,"0")}:${a.getSeconds().toString().padStart(2,"0")}`}ShowSchedule(t){window.location.href="#/HospitalDoctorClinicAvailability?id="+t.id}DeleteRow(t){M().fire({title:"ar"==this.lang?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u061f":"Are You Sure ? ",text:"ar"==this.lang?" \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062d\u0630\u0641 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0631\u062c\u0648\u0639 \u0641\u064a\u0647\u0627 , \u0627\u0630\u0627 \u0643\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0627\u0636\u063a\u0637 \u0639\u0644\u064a \u062d\u0630\u0641 \u0627\u0648 \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0631\u062c\u0648\u0639   ":"this The deletion process is irreversible. If you are sure, click Delete or you can Cancel it ",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ar"==this.lang?"\u062d\u0630\u0641":"Delete",cancelButtonText:"ar"==this.lang?"\u0625\u0644\u063a\u0627\u0621":"Cancel"}).then(a=>{if(a.isConfirmed){let n=new l.rl5;n.targetUserId=t.id,this.service.deleteUser(n).subscribe({next:o=>{this.SearchByType(),M().fire({title:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641":"Deleted!",text:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641 \u0628\u0646\u062c\u0627\u062d ":"Record has been deleted Successfully.",icon:"success"})},error:()=>{this.cts.Show("error","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Failed Proccee","ar"==this.lang?"\u0641\u0634\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629":"Proccee Failed")}})}})}Clear(){this.model=new l.NME,this.mode="add",this.currentOrgType={}}setShowHideScheduleButton(){let t=this.currentOrgType?.Id??this.OrganizationType[0].Id;this.ShowSceduleThirdButton=!1,this.ShowSceduleThirdButton=1==t}static \u0275fac=function(a){return new(a||s)(e.Y36(l.r9S),e.Y36(e.sBO),e.Y36(m.xA),e.Y36(h.F0),e.Y36(h.gz),e.Y36(Z.m))};static \u0275cmp=e.Xpm({type:s,selectors:[["app-ManageOrganizations"]],features:[e._Bn([m.xA]),e.TTD],decls:42,vars:44,consts:[[1,"m-3"],["translate","MENU.Orginzations",2,"font-weight","bold","color","white"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[1,"row"],["translate","org.Type",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange","onChange"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","FirstBtn","ThirdBtn","contentThirdBtn","contentSecondBtn","contentFirstBtn","classFirstBtn","classSecondBtn","classThirdBtn","secondButtonEvent","firstButtonEvent","thirdButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange"],["translate","org.UserName",1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","filter","filterBy","optionLabel","showClear","placeholder","ngModelChange"],["class","mb-10",4,"ngIf"],["translate","SHARED.from",1,"form-label"],["styleClass","fc-primng","inputId","templatedisplay",3,"ngModel","iconDisplay","showIcon","timeOnly","ngModelChange"],["pTemplate","inputicon"],["translate","SHARED.to",1,"form-label"],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-bordered","btn-outline-success","mx-3",2,"width","25%",3,"click"],["translate","org.About",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","org.AboutDetails",1,"form-label"],[1,"pi","pi-clock","pointer-events-none",3,"click"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(a,n){1&a&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"label",5),e.TgZ(6,"div",6)(7,"p-dropdown",7),e.NdJ("ngModelChange",function(i){return n.currentOrgType=i})("onChange",function(){return n.SearchByType()}),e.qZA()()()()(),e._UZ(8,"br"),e.TgZ(9,"div",4)(10,"div",8)(11,"div",2)(12,"div",3)(13,"app-shared-datatable",9),e.NdJ("secondButtonEvent",function(i){return n.EditRow(i)})("firstButtonEvent",function(i){return n.DeleteRow(i)})("thirdButtonEvent",function(i){return n.ShowSchedule(i)}),e.qZA()()()(),e.TgZ(14,"div",10)(15,"div",2)(16,"div",3)(17,"div",11)(18,"div",12),e._UZ(19,"label",5),e.TgZ(20,"div",6)(21,"p-dropdown",13),e.NdJ("ngModelChange",function(i){return n.currentOrgType=i}),e.qZA()()(),e.TgZ(22,"div",12),e._UZ(23,"label",14),e.TgZ(24,"div",6)(25,"p-dropdown",15),e.NdJ("ngModelChange",function(i){return n.SelectedUser=i}),e.qZA()()(),e.YNc(26,A,3,1,"div",16),e.YNc(27,N,3,1,"div",16),e.TgZ(28,"div",12),e._UZ(29,"label",17),e.TgZ(30,"div")(31,"p-calendar",18),e.NdJ("ngModelChange",function(i){return n.model.openTime=i}),e.YNc(32,F,1,0,"ng-template",19),e.qZA()()(),e.TgZ(33,"div",12),e._UZ(34,"label",20),e.TgZ(35,"div")(36,"p-calendar",18),e.NdJ("ngModelChange",function(i){return n.model.closeTime=i}),e.YNc(37,J,1,0,"ng-template",19),e.qZA()()(),e.TgZ(38,"div",21),e.YNc(39,I,1,0,"button",22),e.YNc(40,x,1,0,"button",23),e.TgZ(41,"button",24),e.NdJ("click",function(){return n.Clear()}),e.qZA()()()()()()()),2&a&&(e.xp6(7),e.Q6J("options",n.OrganizationType)("ngModel",n.currentOrgType)("optionLabel","ar"==n.currentLanguage?"NameAr":"NameEn")("showClear",!1)("placeholder","ar"==n.currentLanguage?"\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0624\u0633\u0633\u0629":"Choose Organization Type "),e.xp6(6),e.Q6J("cols",n.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",n.Data)("chooseColomns",!0)("SecondBtn",!0)("FirstBtn",!0)("ThirdBtn",n.ShowSceduleThirdButton)("contentThirdBtn",n.contentThirdBtn)("contentSecondBtn",n.contentSecondBtn)("contentFirstBtn",n.contentFirstBtn)("classFirstBtn","light-danger")("classSecondBtn","light-warning")("classThirdBtn","light-info"),e.xp6(8),e.Q6J("options",n.OrganizationType)("ngModel",n.currentOrgType)("optionLabel","ar"==n.currentLanguage?"NameAr":"NameEn")("showClear",!1)("placeholder","ar"==n.currentLanguage?"\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0624\u0633\u0633\u0629":"Choose Organization Type "),e.xp6(4),e.Q6J("options",n.UsersData)("ngModel",n.SelectedUser)("filter",!0)("filterBy","fullName")("optionLabel","fullName")("showClear",!1)("placeholder","ar"==n.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645":"Choose User "),e.xp6(1),e.Q6J("ngIf","edit"==n.mode),e.xp6(1),e.Q6J("ngIf","edit"==n.mode),e.xp6(4),e.Q6J("ngModel",n.model.openTime)("iconDisplay","input")("showIcon",!0)("timeOnly",!0),e.xp6(5),e.Q6J("ngModel",n.model.closeTime)("iconDisplay","input")("showIcon",!0)("timeOnly",!0),e.xp6(3),e.Q6J("ngIf","add"==n.mode),e.xp6(1),e.Q6J("ngIf","edit"==n.mode))},dependencies:[T.O5,U.G,u.Fj,u.JJ,u.On,S.Lt,E.jx,v.f,C.Pi]})}return s})(),P=(()=>{class s{static \u0275fac=function(a){return new(a||s)};static \u0275mod=e.oAB({type:s});static \u0275inj=e.cJS({imports:[T.ez,h.Bz.forChild([{path:"Organizations",component:H,data:{animation:"Organizations"}}]),B.m,u.u5,S.kW,w.EV,_.q4,v._8,C.aw,O.q,m.DL]})}return s})()}}]);