"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[919],{5919:(F,u,o)=>{o.r(u),o.d(u,{SponsorsModule:()=>N});var m=o(6814),i=o(649),c=o(1356),h=o(7434),T=o(8180),D=o(4442),f=o(7860),e=o(5879),B=o(8472),d=o(6223),Z=o(4361),S=o(2160),v=o(3506),C=o(6663);function I(r,U){if(1&r){const n=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Add())}),e.qZA()}}function M(r,U){if(1&r){const n=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Edit())}),e.qZA()}}let A=(()=>{class r{service;cdr;dialogService;cts;Cols;Data;UserData;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;contentSecondBtn;classFirstBtn="success text-white";mode="add";selectedProfile=new i.NME;userTypes=D.zI;currentUserType;profileType;model=new i.W$X;constructor(n,s,t,l){this.service=n,this.cdr=s,this.dialogService=t,this.cts=l,this.lang=localStorage.getItem("language"),this.Cols=[f.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"sponsorId",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),f.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"name",header:"ar"==this.lang?"\u0627\u0644\u0627\u0633\u0645":"Name ",type:"text"})],this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-trash-alt'></i> \u062d\u0630\u0641":"<i class='fas fa-trash-alt'></i> Delete",this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit "}ngOnChanges(n){this.cdr.detectChanges()}SpecialityData;getAllUsers(){let s,l,n=(new h.l).GetUserId();s=i.$BI._1,l=!1,this.service.getListOfOrganizations(void 0,void 0,!1,void 0,void 0,n).pipe((0,T.q)(1)).subscribe({next:g=>{this.UserData=g.data.items,this.cdr.detectChanges()},error:()=>{}})}ngOnInit(){this.search(),this.getAllUsers(),this.currentLanguage=localStorage.getItem("language")??"ar"}search(){let s,n=(new h.l).GetUserId();s=i.pqZ._1,this.service.searchSponsors(s,void 0,void 0,!1,void 0,void 0,n).subscribe({next:g=>{this.Data=g.data.items,this.cdr.detectChanges()},error:()=>{}})}Add(){this.service.newSponsor(this.model).subscribe({next:n=>{n.isSuccess&&this.search()}})}Edit(){let n=new i.luk;n.costAmount=this.model.cost,n.discount=this.model.discount,n.startDate=this.model.startDate,n.endDate=this.model.endDate,n.profileId=this.model.profileId,n.sponsorId=this.selectedSponserID,console.log(this.selectedSponserID),this.service.editSponsor(n).subscribe(s=>{console.log(s)})}selectedSponserID;EditRow(n){console.log(n),this.model=n,this.mode="edit",this.selectedSponserID=n.sponsorId}ShowTableSchedule(n){}Clear(){this.mode="add"}DeleteRow(n){let s=new i.YUG;s.sponsorId=n.sponsorId,this.service.deleteSponsor(s).subscribe({next:t=>{this.search(),this.cts.Show("info","ar"==this.currentLanguage?"\u062d\u0630\u0641":"Delete","ar"==this.currentLanguage?"\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0640\u0645\u0645\u0648\u0644 \u0628\u0646\u062c\u0627\u062d":"Sponsor Deleted Successfully")}})}static \u0275fac=function(s){return new(s||r)(e.Y36(i.r9S),e.Y36(e.sBO),e.Y36(c.xA),e.Y36(B.m))};static \u0275cmp=e.Xpm({type:r,selectors:[["app-sponsors-list"]],features:[e._Bn([c.xA]),e.TTD],decls:33,vars:27,consts:[[1,"m-3"],["translate","MENU.Sponsores",2,"font-weight","bold","color","white"],[1,"row"],[1,"col-md-8"],["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-body"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","contentSecondBtn","classFirstBtn","classSecondBtn","FirstBtn","contentFirstBtn","secondButtonEvent","firstButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],[1,"dropdown"],["translate","Sponsor.ChooseProfile",1,"form-label"],["styleClass","fc-primng",3,"options","ngModel","filter","filterBy","disabled","optionLabel","optionValue","showClear","placeholder","ngModelChange"],["translate","SHARED.from",1,"form-label"],["styleClass","fc-primng",3,"ngModel","ngModelChange"],["translate","SHARED.to",1,"form-label"],["translate","Sponsor.Discount",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","Sponsor.Cost",1,"form-label"],[2,"display","contents"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 60%;","class","btn btn-success mx-3","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Cancel",1,"btn","btn-bordered","btn-outline-success","mx-3",2,"width","25%",3,"click"],["translate","SHARED.Create",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success","mx-3",2,"width","60%",3,"click"]],template:function(s,t){1&s&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"app-shared-datatable",6),e.NdJ("secondButtonEvent",function(a){return t.EditRow(a)})("firstButtonEvent",function(a){return t.DeleteRow(a)}),e.qZA()()()(),e.TgZ(7,"div",7)(8,"div",4)(9,"div",5)(10,"div",8)(11,"div",9)(12,"div",10),e._UZ(13,"label",11),e.TgZ(14,"p-dropdown",12),e.NdJ("ngModelChange",function(a){return t.model.profileId=a}),e.qZA()()(),e.TgZ(15,"div",9),e._UZ(16,"label",13),e.TgZ(17,"div")(18,"p-calendar",14),e.NdJ("ngModelChange",function(a){return t.model.startDate=a}),e.qZA()()(),e.TgZ(19,"div",9),e._UZ(20,"label",15),e.TgZ(21,"div")(22,"p-calendar",14),e.NdJ("ngModelChange",function(a){return t.model.endDate=a}),e.qZA()()(),e.TgZ(23,"div",9),e._UZ(24,"label",16),e.TgZ(25,"input",17),e.NdJ("ngModelChange",function(a){return t.model.discount=a}),e.qZA()(),e.TgZ(26,"div",9),e._UZ(27,"label",18),e.TgZ(28,"input",17),e.NdJ("ngModelChange",function(a){return t.model.cost=a}),e.qZA()(),e.TgZ(29,"div",19),e.YNc(30,I,1,0,"button",20),e.YNc(31,M,1,0,"button",21),e.TgZ(32,"button",22),e.NdJ("click",function(){return t.Clear()}),e.qZA()()()()()()()),2&s&&(e.xp6(6),e.Q6J("cols",t.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("SecondBtn",!0)("contentSecondBtn",t.contentSecondBtn)("classFirstBtn","light-danger")("classSecondBtn","light-warning")("FirstBtn",!0)("contentFirstBtn",t.contentFirstBtn),e.xp6(8),e.Q6J("options",t.UserData)("ngModel",t.model.profileId)("filter",!0)("filterBy","organizationName")("disabled","edit"==t.mode)("optionLabel","organizationName")("optionValue","profileId")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u0628\u0631\u0648\u0641\u0627\u064a\u0644":"Choose Profile"),e.xp6(4),e.Q6J("ngModel",t.model.startDate),e.xp6(4),e.Q6J("ngModel",t.model.endDate),e.xp6(3),e.Q6J("ngModel",t.model.discount),e.xp6(3),e.Q6J("ngModel",t.model.cost),e.xp6(2),e.Q6J("ngIf","add"==t.mode),e.xp6(1),e.Q6J("ngIf","edit"==t.mode))},dependencies:[d.Fj,d.JJ,d.On,m.O5,Z.G,S.Lt,v.f,C.Pi]})}return r})();var E=o(3415),L=o(7304),y=o(4055),J=o(9378),w=o(3660);let N=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=e.oAB({type:r});static \u0275inj=e.cJS({imports:[d.u5,m.ez,L.Bz.forChild([{path:"Sponsores",component:A}]),E.m,S.kW,J.EV,y.q4,v._8,C.aw,w.q,c.DL]})}return r})()}}]);