"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[919],{5919:(R,g,s)=>{s.r(g),s.d(g,{SponsorsModule:()=>F});var m=s(6814),i=s(649),c=s(1356),h=s(7434),T=s(8180),b=s(4442),f=s(7860),Z=s(3519),A=s.n(Z),e=s(5879),B=s(8472),d=s(6223),w=s(4361),S=s(2160),C=s(3506),v=s(6663);function E(r,x){if(1&r){const n=e.EpF();e.TgZ(0,"button",28),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Add())}),e.qZA()}}function I(r,x){if(1&r){const n=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Edit())}),e.qZA()}}let M=(()=>{class r{service;cdr;dialogService;cts;Cols;Data;UserData;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;contentSecondBtn;classFirstBtn="success text-white";mode="add";selectedProfile=new i.NME;userTypes=b.zI;currentUserType;profileType;model=new i.W$X;constructor(n,o,t,a){this.service=n,this.cdr=o,this.dialogService=t,this.cts=a,this.lang=localStorage.getItem("language"),this.Cols=[f.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"sponsorId",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),f.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"name",header:"ar"==this.lang?"\u0627\u0644\u0627\u0633\u0645":"Name ",type:"text"})],this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-trash-alt'></i> \u062d\u0630\u0641":"<i class='fas fa-trash-alt'></i> Delete",this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit "}ngOnChanges(n){this.cdr.detectChanges()}SpecialityData;getAllUsers(){let o,a,n=(new h.l).GetUserId();o=i.$BI._1,a=!1,this.service.getListOfOrganizations(void 0,void 0,!1,void 0,void 0,n,void 0).pipe((0,T.q)(1)).subscribe({next:p=>{this.UserData=p.data.items,this.cdr.detectChanges()},error:()=>{}})}ngOnInit(){this.search(),this.getAllUsers(),this.currentLanguage=localStorage.getItem("language")??"ar"}search(){let o,n=(new h.l).GetUserId();o=i.pqZ._1,this.service.searchSponsors(o,void 0,void 0,!1,void 0,void 0,n,void 0).subscribe({next:p=>{this.Data=p.data.items,this.cdr.detectChanges()},error:()=>{}})}Add(){this.service.newSponsor(this.model).subscribe({next:n=>{n.isSuccess&&this.search()}})}Edit(){let n=new i.luk;n.costAmount=this.model.cost,n.discount=this.model.discount,n.startDate=this.model.startDate,n.endDate=this.model.endDate,n.profileId=this.model.profileId,n.sponsorId=this.selectedSponserID,console.log(this.selectedSponserID),this.service.editSponsor(n).subscribe(o=>{console.log(o)})}selectedSponserID;EditRow(n){console.log(n),this.model=n,this.mode="edit",this.selectedSponserID=n.sponsorId}ShowTableSchedule(n){}Clear(){this.mode="add"}DeleteRow(n){A().fire({title:"ar"==this.lang?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u061f":"Are You Sure ? ",text:"ar"==this.lang?" \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062d\u0630\u0641 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0631\u062c\u0648\u0639 \u0641\u064a\u0647\u0627 , \u0627\u0630\u0627 \u0643\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0627\u0636\u063a\u0637 \u0639\u0644\u064a \u062d\u0630\u0641 \u0627\u0648 \u0645\u0643\u0646\u0643 \u0627\u0644\u0631\u062c\u0648\u0639   ":"this The deletion process is irreversible. If you are sure, click Delete or you can Cancel it ",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ar"==this.lang?"\u062d\u0630\u0641":"Delete",cancelButtonText:"ar"==this.lang?"\u0625\u0644\u063a\u0627\u0621":"Cancel"}).then(o=>{if(o.isConfirmed){let t=new i.YUG;t.sponsorId=n.sponsorId,this.service.deleteSponsor(t).subscribe({next:a=>{this.search(),this.cts.Show("info","ar"==this.currentLanguage?"\u062d\u0630\u0641":"Delete","ar"==this.currentLanguage?"\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0640\u0645\u0645\u0648\u0644 \u0628\u0646\u062c\u0627\u062d":"Sponsor Deleted Successfully")}})}})}setCurrentDateAndtimeStartDate(){this.model.startDate=new Date}setCurrentDateAndtimeEndtDate(){this.model.endDate=new Date}static \u0275fac=function(o){return new(o||r)(e.Y36(i.r9S),e.Y36(e.sBO),e.Y36(c.xA),e.Y36(B.m))};static \u0275cmp=e.Xpm({type:r,selectors:[["app-sponsors-list"]],features:[e._Bn([c.xA]),e.TTD],decls:41,vars:29,consts:[[1,"m-3"],["translate","MENU.Sponsores",2,"font-weight","bold","color","white"],[1,"row"],[1,"col-md-8"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","contentSecondBtn","classFirstBtn","classSecondBtn","FirstBtn","contentFirstBtn","secondButtonEvent","firstButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],[1,"dropdown"],["translate","Sponsor.ChooseProfile",1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","filter","filterBy","disabled","optionLabel","optionValue","showClear","placeholder","ngModelChange"],["translate","SHARED.from",1,"form-label"],[2,"display","flex","justify-content","space-between","align-items","baseline","flex-wrap","nowrap"],[2,"width","100%"],["styleClass","fc-primng",3,"ngModel","showTime","ngModelChange"],[1,"btn","btn-icon","btn-light-success",3,"click"],[1,"fa-solid","fa-stopwatch","fs-4","me-2"],["translate","SHARED.to",1,"form-label"],[1,"grey"],["translate","Sponsor.Discount",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","Sponsor.Cost",1,"form-label"],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-bordered","btn-outline-success","mx-3",2,"width","25%",3,"click"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(o,t){1&o&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"app-shared-datatable",6),e.NdJ("secondButtonEvent",function(l){return t.EditRow(l)})("firstButtonEvent",function(l){return t.DeleteRow(l)}),e.qZA()()()(),e.TgZ(7,"div",7)(8,"div",4)(9,"div",5)(10,"div",8)(11,"div",9)(12,"div",10),e._UZ(13,"label",11),e.TgZ(14,"p-dropdown",12),e.NdJ("ngModelChange",function(l){return t.model.profileId=l}),e.qZA()()(),e.TgZ(15,"div",9),e._UZ(16,"label",13),e.TgZ(17,"div",14)(18,"div",15)(19,"p-calendar",16),e.NdJ("ngModelChange",function(l){return t.model.startDate=l}),e.qZA()(),e.TgZ(20,"a",17),e.NdJ("click",function(){return t.setCurrentDateAndtimeStartDate()}),e._UZ(21,"i",18),e.qZA()()(),e.TgZ(22,"div",9),e._UZ(23,"label",19),e.TgZ(24,"div",14)(25,"div",15)(26,"p-calendar",16),e.NdJ("ngModelChange",function(l){return t.model.endDate=l}),e.qZA()(),e.TgZ(27,"a",17),e.NdJ("click",function(){return t.setCurrentDateAndtimeEndtDate()}),e._UZ(28,"i",18),e.qZA()(),e.TgZ(29,"span",20),e._uU(30," \u0627\u062e\u062a\u0631 \u0627\u0644\u0648\u0642\u062a \u0627\u0648\u0644\u0627 \u062b\u0645 \u0627\u062e\u062a\u0631 \u0627\u0644\u064a\u0648\u0645 "),e.qZA()(),e.TgZ(31,"div",9),e._UZ(32,"label",21),e.TgZ(33,"input",22),e.NdJ("ngModelChange",function(l){return t.model.discount=l}),e.qZA()(),e.TgZ(34,"div",9),e._UZ(35,"label",23),e.TgZ(36,"input",22),e.NdJ("ngModelChange",function(l){return t.model.cost=l}),e.qZA()(),e.TgZ(37,"div",24),e.YNc(38,E,1,0,"button",25),e.YNc(39,I,1,0,"button",26),e.TgZ(40,"button",27),e.NdJ("click",function(){return t.Clear()}),e.qZA()()()()()()()),2&o&&(e.xp6(6),e.Q6J("cols",t.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("SecondBtn",!0)("contentSecondBtn",t.contentSecondBtn)("classFirstBtn","light-danger")("classSecondBtn","light-warning")("FirstBtn",!0)("contentFirstBtn",t.contentFirstBtn),e.xp6(8),e.Q6J("options",t.UserData)("ngModel",t.model.profileId)("filter",!0)("filterBy","organizationName")("disabled","edit"==t.mode)("optionLabel","organizationName")("optionValue","profileId")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0628\u0631\u0648\u0641\u0627\u064a\u0644":"Choose Profile"),e.xp6(5),e.Q6J("ngModel",t.model.startDate)("showTime",!0),e.xp6(7),e.Q6J("ngModel",t.model.endDate)("showTime",!0),e.xp6(7),e.Q6J("ngModel",t.model.discount),e.xp6(3),e.Q6J("ngModel",t.model.cost),e.xp6(2),e.Q6J("ngIf","add"==t.mode),e.xp6(1),e.Q6J("ngIf","edit"==t.mode))},dependencies:[d.Fj,d.JJ,d.On,m.O5,w.G,S.Lt,C.f,v.Pi]})}return r})();var y=s(3415),L=s(7304),J=s(4055),N=s(9378),U=s(3660);let F=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=e.oAB({type:r});static \u0275inj=e.cJS({imports:[d.u5,m.ez,L.Bz.forChild([{path:"Sponsores",component:M}]),y.m,S.kW,N.EV,J.q4,C._8,v.aw,U.q,c.DL]})}return r})()}}]);