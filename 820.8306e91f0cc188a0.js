"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[820],{3820:(de,Z,l)=>{l.r(Z),l.d(Z,{OrganizationModule:()=>oe});var w=l(6814),g=l(7860),d=l(649),c=l(7434),m=l(5118),O=l(2029),E=l(1879),T=l(4442),e=l(5879),f=l(4361),p=l(6223),_=l(4055),u=l(6663);const I=function(){return{"min-width":"100%"}};let D=(()=>{class n{service;cdr;ref;config;dialogService;Cols;Data;timingData;timingDataAny=[];lang=localStorage.getItem("language");currentLanguage;days=O.n;selectedDays=[];selectedPeriod=[];contentFirstBtn="";classFirstBtn="light-success";constructor(t,a,i,r,o){this.service=t,this.cdr=a,this.ref=i,this.config=r,this.dialogService=o,this.lang=localStorage.getItem("language"),this.Cols=[g.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),g.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"day",header:"ar"==this.lang?"\u064a\u0648\u0645":"Day ",type:"day"}),g.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"period",header:"ar"==this.lang?"\u0641\u062a\u0631\u0629":"Period ",type:"period"}),g.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!1,field:"start",header:"ar"==this.lang?"\u0628\u062f\u0627\u064a\u0629":"Start ",type:"text"}),g.v.fromJS({id:5,sorted:!0,filtered:!0,hidden:!1,field:"end",header:"ar"==this.lang?"\u0646\u0647\u0627\u064a\u0629":"End ",type:"text"})]}ngOnInit(){this.currentLanguage=localStorage.getItem("language")??"ar",this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-user-doctor'></i> \u0627\u0636\u0627\u0641\u0629 \u0637\u0628\u064a\u0628":"<i class='fas fa-user-doctor'></i> Add Doctor",this.loadClinicAvailablities(),this.searchHospitalTiming()}loadClinicAvailablities(){this.service.getClinicAvailabilities(this.config.data.id,(new c.l).GetUserId(),void 0).subscribe({next:t=>{this.Data=t.data},error:()=>{}})}searchHospitalTiming(){let t=(new c.l).GetUserId(),a=(new c.l).GetUserOrgId();this.service.getHospitalTimings(a,t,void 0).subscribe({next:i=>{var r;r=i.data,this.timingDataAny=[];for(let v=0;v<r.length;v++){const b=r[v];var o=new y;o.init(b),o.periodName="ar"==this.lang?T.bi[Number(b.period)-1].nameAr:T.bi[Number(b.period)-1].nameEn,this.timingDataAny.push(o)}this.cdr.detectChanges()},error:()=>{}})}AddClinicAvailability(){let t=new d.C6P;t.clinicId=this.config.data.id,t.days=this.selectedDays.map(a=>a.id),t.hospitalTimingIds=this.selectedPeriod.map(a=>a.id),this.service.addClinicAvailability(t).subscribe({next:a=>{this.loadClinicAvailablities()}})}ShowAddDoctorToClinicAvaliability(t){this.dialogService.open(E.t,{data:{clinic:this.config.data,Availability:t},header:"ar"==this.lang?"\u0627\u0636\u0627\u0641\u0629 \u0637\u0628\u064a\u0628 \u0644\u0648\u0642\u062a \u0627\u0644\u0639\u064a\u0627\u062f\u0629":"Add Doctor To Clinic Availability",width:"60%",maximizable:!0,resizable:!0,draggable:!0,closeOnEscape:!0,dismissableMask:!0,autoZIndex:!0,baseZIndex:9999999999})}static \u0275fac=function(a){return new(a||n)(e.Y36(d.r9S),e.Y36(e.sBO),e.Y36(m.E7),e.Y36(m.S),e.Y36(m.xA))};static \u0275cmp=e.Xpm({type:n,selectors:[["app-clinic-availability-list"]],features:[e._Bn([m.xA])],decls:15,vars:27,consts:[["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[1,"row"],[1,"col-md-12"],[1,"mb-10"],["translate","org.AvaliableDays",1,"form-label"],[3,"options","ngModel","filter","optionLabel","showClear","placeholder","ngModelChange"],["translate","org.AvaliablePeriod",1,"form-label"],[3,"options","ngModel","filter","showClear","optionLabel","placeholder","ngModelChange"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","FirstBtn","classFirstBtn","contentFirstBtn","firstButtonEvent"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",3)(5,"div",4),e._UZ(6,"label",5),e.TgZ(7,"p-multiSelect",6),e.NdJ("ngModelChange",function(o){return i.selectedDays=o}),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"label",7),e.TgZ(10,"p-multiSelect",8),e.NdJ("ngModelChange",function(o){return i.selectedPeriod=o}),e.qZA()(),e.TgZ(11,"div",9)(12,"button",10),e.NdJ("click",function(){return i.AddClinicAvailability()}),e.qZA()()()(),e.TgZ(13,"div",3)(14,"app-shared-datatable",11),e.NdJ("firstButtonEvent",function(o){return i.ShowAddDoctorToClinicAvaliability(o)}),e.qZA()()()()()),2&a&&(e.xp6(7),e.Akn(e.DdM(25,I)),e.Q6J("options",i.days)("ngModel",i.selectedDays)("filter",!0)("optionLabel","ar"==i.currentLanguage?"nameAr":"nameEn")("showClear",!1)("placeholder","ar"==i.currentLanguage?"\u0625\u062e\u062a\u0631 \u064a\u0648\u0645":"Choose a day"),e.xp6(3),e.Akn(e.DdM(26,I)),e.Q6J("options",i.timingDataAny)("ngModel",i.selectedPeriod)("filter",!0)("showClear",!1)("optionLabel","periodName")("placeholder","ar"==i.currentLanguage?"\u0625\u062e\u062a\u0631 \u0641\u062a\u0631\u0629":"Choose a period"),e.xp6(4),e.Q6J("cols",i.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",i.Data)("chooseColomns",!0)("FirstBtn",!0)("classFirstBtn",i.classFirstBtn)("contentFirstBtn",i.contentFirstBtn))},dependencies:[f.G,p.JJ,p.On,_.NU,u.Pi]})}return n})();class y extends d.rOH{periodName;constructor(s){super(s),s&&(this.periodName=s.periodName)}init(s){super.init(s),s&&(this.periodName=s.periodName)}toJSON(s){const t=super.toJSON(s);return t.periodName=this.periodName,t}static fromJS(s){s="object"==typeof s?s:{};let t=new y;return t.init(s),t}}const L=function(){return{"min-width":"100%"}};let B=(()=>{class n{service;cdr;dialogService;Cols;Data;SpecData;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;classFirstBtn="light-success";currentSpec={id:""};currentSpecs=[];constructor(t,a,i){this.service=t,this.cdr=a,this.dialogService=i,this.lang=localStorage.getItem("language"),this.Cols=[g.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),g.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"specialityName",header:"ar"==this.lang?"\u0627\u0644\u062a\u062e\u0635\u0635":"Speciality ",type:"text"})]}ngOnChanges(t){this.cdr.detectChanges()}currentClinic={specialityId:"",hospitalId:"",clinicDescription:""};ngOnInit(){this.searchClinic(),this.searchSpeciality(),this.currentLanguage=localStorage.getItem("language")??"ar",this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-clock'></i> \u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f \u0627\u0644\u0645\u062a\u0627\u062d\u0629":"<i class='fas fa-clock'></i> Avaliable Periods"}searchSpeciality(){this.service.searchSpeciality("",!1,0,0,void 0,void 0).subscribe({next:t=>{this.SpecData=t.data.items,this.cdr.detectChanges()},error:()=>{}})}searchClinic(){let t=(new c.l).GetUserId(),a=(new c.l).GetUserOrgId();this.service.getAllClinics(a,t,void 0).subscribe({next:i=>{this.Data=i.data,this.cdr.detectChanges()},error:()=>{}})}AddClinic(){let t=new d.xz7;t.specialityIds=this.currentSpecs.map(a=>a.id),t.hospitalId=(new c.l).GetUserOrgId(),t.clinicDescription=" ",this.service.newClinic(t).subscribe({next:a=>{this.searchClinic()}})}Avaliabilty(t){this.dialogService.open(D,{data:t,header:"ar"==this.lang?"  \u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f \u0627\u0644\u0645\u062a\u0627\u062d\u0629 [ "+t.specialityName+" ]":"Clinic Avalilabilities   [ "+t.specialityName+" ]",width:"90%",maximizable:!0,resizable:!0,draggable:!0,closeOnEscape:!0,dismissableMask:!0,autoZIndex:!0,baseZIndex:9999999999})}static \u0275fac=function(a){return new(a||n)(e.Y36(d.r9S),e.Y36(e.sBO),e.Y36(m.xA))};static \u0275cmp=e.Xpm({type:n,selectors:[["app-clinic-list"]],features:[e._Bn([m.xA]),e.TTD],decls:17,vars:18,consts:[[1,"m-3"],["translate","org.clinics",2,"font-weight","bold","color","white"],[1,"row"],[1,"col-md-8"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","FirstBtn","classFirstBtn","contentFirstBtn","firstButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","MENU.Speciality",1,"form-label"],[1,"dropdown"],[3,"options","ngModel","filter","optionLabel","placeholder","ngModelChange"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"]],template:function(a,i){1&a&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"app-shared-datatable",6),e.NdJ("firstButtonEvent",function(o){return i.Avaliabilty(o)}),e.qZA()()()(),e.TgZ(7,"div",7)(8,"div",4)(9,"div",5)(10,"div",8)(11,"div",9),e._UZ(12,"label",10),e.TgZ(13,"div",11)(14,"p-multiSelect",12),e.NdJ("ngModelChange",function(o){return i.currentSpecs=o}),e.qZA()()(),e.TgZ(15,"div",13)(16,"button",14),e.NdJ("click",function(){return i.AddClinic()}),e.qZA()()()()()()()),2&a&&(e.xp6(6),e.Q6J("cols",i.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",i.Data)("chooseColomns",!0)("SecondBtn",!1)("FirstBtn",!0)("classFirstBtn",i.classFirstBtn)("contentFirstBtn",i.contentFirstBtn),e.xp6(8),e.Akn(e.DdM(17,L)),e.Q6J("options",i.SpecData)("ngModel",i.currentSpecs)("filter",!0)("optionLabel","ar"==i.currentLanguage?"speciality_Name_Ar":"speciality_Name_En")("placeholder","ar"==i.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u062a\u062e\u0635\u0635":"Choose Speciality "))},dependencies:[f.G,p.JJ,p.On,_.NU,u.Pi]})}return n})();var J=l(7304),N=l(3415),M=l(3660),C=l(2160),x=l(5219),A=l(1532);function F(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"i",19),e.NdJ("click",function(i){const o=e.CHM(t).clickCallBack;return e.KtG(o(i))}),e.qZA()}}function U(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"i",19),e.NdJ("click",function(i){const o=e.CHM(t).clickCallBack;return e.KtG(o(i))}),e.qZA()}}let z=(()=>{class n{service;cdr;Cols;Data;currentLanguage;lang=localStorage.getItem("language");allPeriods=T.bi;currentPeriod={id:0};timePeriod={from:"",to:""};constructor(t,a){this.service=t,this.cdr=a,this.lang=localStorage.getItem("language"),this.Cols=[g.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),g.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"period",header:"ar"==this.lang?"\u0627\u0644\u0641\u062a\u0631\u0629":"Period ",type:"period"}),g.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"start",header:"ar"==this.lang?"\u0628\u062f\u0627\u064a\u0647 \u0645\u0646":"Start From ",type:"text"}),g.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!1,field:"end",header:"ar"==this.lang?"\u0646\u0647\u0627\u064a\u0629 \u0625\u0644\u064a":"End At ",type:"text"})]}ngOnChanges(t){this.cdr.detectChanges()}currentClinic={specialityId:"",hospitalId:"",clinicDescription:""};ngOnInit(){this.searchHospitalTiming(),this.currentLanguage=localStorage.getItem("language")??"ar"}searchHospitalTiming(){let t=(new c.l).GetUserId(),a=(new c.l).GetUserOrgId();this.service.getHospitalTimings(a,t,void 0).subscribe({next:i=>{this.Data=i.data,this.cdr.detectChanges()},error:()=>{}})}AddHospitalTiming(){let t=new d.sdp;t.hospitalId=(new c.l).GetUserOrgId(),t.period=this.allPeriods[this.currentPeriod.id-1].period,t.timeRangeEnd=this.getTimeFromDateString(this.timePeriod.to),t.timeRangeStart=this.getTimeFromDateString(this.timePeriod.from),this.service.newHospitalTiming(t).subscribe({next:a=>{this.searchHospitalTiming()}})}getTimeFromDateString(t){const a=new Date(t);return`${a.getHours().toString().padStart(2,"0")}:${a.getMinutes().toString().padStart(2,"0")}:${a.getSeconds().toString().padStart(2,"0")}`}static \u0275fac=function(a){return new(a||n)(e.Y36(d.r9S),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:n,selectors:[["app-hospital-timing-list"]],features:[e.TTD],decls:27,vars:20,consts:[[1,"m-3"],["translate","org.HospitalTimming",2,"font-weight","bold","color","white"],[1,"row"],[1,"col-md-8"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","org.period",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange"],["translate","SHARED.from",1,"form-label"],["styleClass","fc-primng","inputId","templatedisplay",3,"ngModel","iconDisplay","showIcon","timeOnly","ngModelChange"],["pTemplate","inputicon"],["translate","SHARED.to",1,"form-label"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"],[1,"pi","pi-clock","pointer-events-none",3,"click"]],template:function(a,i){1&a&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"app-shared-datatable",6),e.qZA()()(),e.TgZ(7,"div",7)(8,"div",4)(9,"div",5)(10,"div",8)(11,"div",9),e._UZ(12,"label",10),e.TgZ(13,"div",11)(14,"p-dropdown",12),e.NdJ("ngModelChange",function(o){return i.currentPeriod=o}),e.qZA()()(),e.TgZ(15,"div",9),e._UZ(16,"label",13),e.TgZ(17,"div")(18,"p-calendar",14),e.NdJ("ngModelChange",function(o){return i.timePeriod.from=o}),e.YNc(19,F,1,0,"ng-template",15),e.qZA()()(),e.TgZ(20,"div",9),e._UZ(21,"label",16),e.TgZ(22,"div")(23,"p-calendar",14),e.NdJ("ngModelChange",function(o){return i.timePeriod.to=o}),e.YNc(24,U,1,0,"ng-template",15),e.qZA()()(),e.TgZ(25,"div",17)(26,"button",18),e.NdJ("click",function(){return i.AddHospitalTiming()}),e.qZA()()()()()()()),2&a&&(e.xp6(6),e.Q6J("cols",i.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",i.Data)("chooseColomns",!0)("SecondBtn",!1),e.xp6(8),e.Q6J("options",i.allPeriods)("ngModel",i.currentPeriod)("optionLabel","ar"==i.currentLanguage?"nameAr":"nameEn")("showClear",!1)("placeholder","ar"==i.currentLanguage?"\u0627\u062e\u062a\u0631 \u0641\u062a\u0631\u0629":"Choose a Peroid"),e.xp6(4),e.Q6J("ngModel",i.timePeriod.from)("iconDisplay","input")("showIcon",!0)("timeOnly",!0),e.xp6(5),e.Q6J("ngModel",i.timePeriod.to)("iconDisplay","input")("showIcon",!0)("timeOnly",!0))},dependencies:[f.G,p.JJ,p.On,C.Lt,x.jx,u.Pi,A.f]})}return n})();var k=l(6306),H=l(4716),P=l(8504);function G(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"i",14),e.NdJ("click",function(i){const o=e.CHM(t).clickCallBack;return e.KtG(o(i))}),e.qZA()}}function q(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"i",14),e.NdJ("click",function(i){const o=e.CHM(t).clickCallBack;return e.KtG(o(i))}),e.qZA()}}let Q=(()=>{class n{service;cdr;lang=localStorage.getItem("language");currentLanguage;selectedDoctor;main_model={from:"",to:"",title:"",details:""};orgId="";constructor(t,a){this.service=t,this.cdr=a,this.lang=localStorage.getItem("language"),this.currentLanguage=localStorage.getItem("language")??"ar"}ngOnInit(){let t=localStorage.getItem("org");const a=JSON.parse(t);var i=new d.u47(a);this.main_model.from=i.openAt.replace(":00",""),this.main_model.to=i.closeAt.replace(":00",""),this.main_model.details=i.aboutUsDescription,this.main_model.title=i.aboutUsTitle,this.orgId=i?.organizationId}getTimeFromDateString(t){const a=new Date(t);return`${a.getHours().toString().padStart(2,"0")}:${a.getMinutes().toString().padStart(2,"0")}:${a.getSeconds().toString().padStart(2,"0")}`}UpdateOrganization(){let t=new d.OjJ;t.openTime=this.getTimeFromDateString(this.main_model.from),t.closeTime=this.getTimeFromDateString(this.main_model.to),t.organizationId=this.orgId,t.aboutUsTitle=this.main_model.title,t.aboutUsDetails=this.main_model.details,this.service.editOrganization(t).pipe((0,k.K)(a=>(500===a.status&&alert(""),(0,P._)(()=>a))),(0,H.x)(()=>{})).subscribe(a=>{let i=localStorage.getItem("org");const r=JSON.parse(i);var o=new d.u47(r);const b=this.main_model.to,re=this.main_model.details,le=this.main_model.title,se=this.orgId;o.openAt=this.main_model.from,o.closeAt=b,o.aboutUsDescription=re,o.aboutUsTitle=le,o.organizationId=se,localStorage.removeItem("org"),localStorage.setItem("org",JSON.stringify(o))})}static \u0275fac=function(a){return new(a||n)(e.Y36(d.r9S),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:n,selectors:[["app-EditOrganization"]],decls:21,vars:9,consts:[["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[1,"row"],[1,"col-md-12"],[2,"min-height","255px"],[1,"mb-10"],["translate","org.AboutOrgDetails",1,"form-label"],[1,"form-control",3,"ngModel","ngModelChange"],["translate","SHARED.from",1,"form-label"],["styleClass","fc-primng","inputId","templatedisplay",3,"ngModel","iconDisplay","showIcon","timeOnly","ngModelChange"],["pTemplate","inputicon"],["translate","SHARED.to",1,"form-label"],[2,"display","contents"],["translate","SHARED.Edit",1,"btn","btn-success",2,"width","100%",3,"click"],[1,"pi","pi-clock","pointer-events-none",3,"click"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"label",6),e.TgZ(7,"div")(8,"textarea",7),e.NdJ("ngModelChange",function(o){return i.main_model.details=o}),e.qZA()()(),e.TgZ(9,"div",5),e._UZ(10,"label",8),e.TgZ(11,"div")(12,"p-calendar",9),e.NdJ("ngModelChange",function(o){return i.main_model.from=o}),e.YNc(13,G,1,0,"ng-template",10),e.qZA()()(),e.TgZ(14,"div",5),e._UZ(15,"label",11),e.TgZ(16,"div")(17,"p-calendar",9),e.NdJ("ngModelChange",function(o){return i.main_model.to=o}),e.YNc(18,q,1,0,"ng-template",10),e.qZA()()(),e.TgZ(19,"div",12)(20,"button",13),e.NdJ("click",function(){return i.UpdateOrganization()}),e.qZA()()()()()()()),2&a&&(e.xp6(8),e.Q6J("ngModel",i.main_model.details),e.xp6(4),e.Q6J("ngModel",i.main_model.from)("iconDisplay","input")("showIcon",!0)("timeOnly",!0),e.xp6(5),e.Q6J("ngModel",i.main_model.to)("iconDisplay","input")("showIcon",!0)("timeOnly",!0))},dependencies:[p.Fj,p.JJ,p.On,x.jx,u.Pi,A.f]})}return n})();var h=l(2427),Y=l(9378),R=l(3519),S=l.n(R),K=l(1932);function j(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",10)(1,"div",11),e._UZ(2,"label",18),e.TgZ(3,"div",14)(4,"p-dropdown",19),e.NdJ("onChange",function(i){e.CHM(t);const r=e.oxw(2);return e.KtG(r.changelist(i))})("ngModelChange",function(i){e.CHM(t);const r=e.oxw(2);return e.KtG(r.selectedType=i)}),e.qZA()()()()}if(2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("options",t.typeOptions)("optionLabel","name")("optionValue","id")("ngModel",t.selectedType)("placeholder","ar"==t.lang?"\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631":"Choose Exam Type ")}}function $(n,s){1&n&&e._UZ(0,"label",20)}function X(n,s){1&n&&e._UZ(0,"label",21)}function W(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",3)(1,"div")(2,"span"),e._uU(3," \u0644\u064a\u0633 \u0644\u062f\u064a\u0643 \u0645\u0639\u0645\u0644 , \u0647\u0644 \u062a\u0631\u064a\u062f \u0627\u0646\u0634\u0627\u0621 \u0645\u0639\u0645\u0644 \u062c\u062f\u064a\u062f \u061f "),e.qZA(),e.TgZ(4,"button",22),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.CreateLab())}),e._uU(5," \u0625\u0646\u0634\u0627\u0621 \u0645\u0639\u0645\u0644 "),e.qZA()()()}}const V=function(){return{"min-width":"100%"}};function ee(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"app-shared-datatable",7),e.NdJ("firstButtonEvent",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.Delete(i))}),e.qZA()()()(),e.TgZ(6,"div",8)(7,"div",5)(8,"div",6),e.YNc(9,j,5,5,"div",9),e.TgZ(10,"div",10)(11,"div",11),e.YNc(12,$,1,0,"label",12),e.YNc(13,X,1,0,"label",13),e.TgZ(14,"div",14)(15,"p-multiSelect",15),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.SelectedExam=i)}),e.qZA()()()(),e.TgZ(16,"div",16)(17,"button",17),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.AddExamToLab())}),e.qZA()()()()(),e.YNc(18,W,6,0,"div",2),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(5),e.Q6J("cols",t.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("FirstBtn",!0)("contentSecondBtn",t.contentSecondBtn)("contentFirstBtn",t.contentFirstBtn)("classFirstBtn","light-danger")("classSecondBtn","light-warning"),e.xp6(4),e.Q6J("appIsGranted","Organization,Hospital"),e.xp6(3),e.Q6J("ngIf",1==t.selectedType),e.xp6(1),e.Q6J("ngIf",2==t.selectedType),e.xp6(2),e.Akn(e.DdM(22,V)),e.Q6J("options",t.ExamData)("ngModel",t.SelectedExam)("filter",!0)("optionLabel",t.optionforExam)("placeholder","ar"==t.lang?"\u0627\u062e\u062a\u0631 ":"Choose  "),e.xp6(3),e.Q6J("ngIf",!t.hasLab)}}let te=(()=>{class n{service;cdr;hasLab=!1;Cols;lang=localStorage.getItem("language");contentFirstBtn;contentSecondBtn;constructor(t,a){this.service=t,this.cdr=a,this.lang=localStorage.getItem("language"),this.Cols=[g.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!0,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),g.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"name",header:"ar"==this.lang?"\u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631":"Exam ",type:"text"})],this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-trash-alt'></i> \u062d\u0630\u0641":"<i class='fas fa-trash-alt'></i> Delete",this.contentSecondBtn="ar"===this.lang?"<i class='fas fa-edit'></i> \u062a\u0639\u062f\u064a\u0644":"<i class='fas fa-edit'></i> Edit "}ngOnInit(){let t=localStorage.getItem("user");const a=JSON.parse(t),i=new d.QwO(a);this.hasLab=i.organizationDetail?.hasLab,this.hasLab&&(this.loadData(),this.loadAllExams(this.selectedType))}Data;loadData(){this.service.searchLabExams(this.selectedType,(new c.l).GetUserOrgId(),void 0,!1,1,1,(new c.l).GetUserId(),void 0).subscribe({next:t=>{this.Data=t.data.items,this.cdr.detectChanges()}})}CloseLab(){this.hasLab=!1}CreateLab(){let t=localStorage.getItem("userHasLab");if(this.hasLab=!!t,!t){let a=new d.vJP;a.organizationId=(new c.l).GetUserOrgId(),this.service.newLab(a).subscribe({next:i=>{i.isSuccess&&(this.hasLab=!0,localStorage.setItem("userHasLab",JSON.stringify(this.hasLab)),this.cdr.detectChanges())}})}}AddExamToLab(){let t=new d.P6M;t.examIds=this.SelectedExam.map(a=>a.examId),t.organizationId=(new c.l).GetUserOrgId(),this.service.addLabExam(t).subscribe({next:a=>{a.isSuccess&&this.loadData()}})}typeOptions=[{id:1,name:"ar"==this.lang?"\u062a\u062d\u0644\u064a\u0644":"Test"},{id:2,name:"ar"==this.lang?"\u0623\u0634\u0639\u0629":"scan"}];selectedType=1;ExamData;SelectedExam;optionforExam="ar"==this.lang?"examNameAr":"examNameEn";loadAllExams(t){let a=(new c.l).GetUserId();this.service.searchExam(t,void 0,void 0,!1,1,1,a,void 0).subscribe({next:i=>{this.ExamData=i.data.items},error:()=>{}})}changelist(t){this.loadAllExams(t.value),this.loadData()}Delete(t){S().fire({title:"ar"==this.lang?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u061f":"Are You Sure ? ",text:"ar"==this.lang?" \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062d\u0630\u0641 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0631\u062c\u0648\u0639 \u0641\u064a\u0647\u0627 , \u0627\u0630\u0627 \u0643\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0627\u0636\u063a\u0637 \u0639\u0644\u064a \u062d\u0630\u0641 \u0627\u0648 \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0631\u062c\u0648\u0639   ":"this The deletion process is irreversible. If you are sure, click Delete or you can Cancel it ",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ar"==this.lang?"\u062d\u0630\u0641":"Delete",cancelButtonText:"ar"==this.lang?"\u0625\u0644\u063a\u0627\u0621":"Cancel"}).then(a=>{if(a.isConfirmed){let i=new d.pRl;i.labExamId=t.id,this.service.deleteLabExam(i).subscribe({next:r=>{this.loadData(),S().fire({title:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641":"Deleted!",text:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641 \u0628\u0646\u062c\u0627\u062d ":"Record has been deleted Successfully.",icon:"success"})}})}})}static \u0275fac=function(a){return new(a||n)(e.Y36(d.r9S),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:n,selectors:[["app-OrganizationLaboratory"]],decls:3,vars:1,consts:[[1,"m-3"],["translate","org.OrganizationLaboratory",2,"font-weight","bold","color","white"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-8"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","FirstBtn","contentSecondBtn","contentFirstBtn","classFirstBtn","classSecondBtn","firstButtonEvent"],[1,"col-md-4"],["class","col-md-12",4,"appIsGranted"],[1,"col-md-12"],[1,"mb-10"],["class","form-label","translate","Exam.Test",4,"ngIf"],["class","form-label","translate","Exam.Scan",4,"ngIf"],[1,"dropdown"],[3,"options","ngModel","filter","optionLabel","placeholder","ngModelChange"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"],["translate","Exam.ExamType",1,"form-label"],["styleClass","fc-primng",3,"options","optionLabel","optionValue","ngModel","placeholder","onChange","ngModelChange"],["translate","Exam.Test",1,"form-label"],["translate","Exam.Scan",1,"form-label"],[1,"btn","btn-success",3,"click"]],template:function(a,i){1&a&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.YNc(2,ee,19,23,"div",2)),2&a&&(e.xp6(2),e.Q6J("ngIf",i.hasLab))},dependencies:[f.G,K.J,p.JJ,p.On,C.Lt,_.NU,w.O5,u.Pi]})}return n})(),ie=(()=>{class n{service;cdr;Cols;lang=localStorage.getItem("language");contentFirstBtn="ar"==this.lang?"\u062d\u0630\u0641":"Delete";classFirstBtn="danger text-white";constructor(t,a){this.service=t,this.cdr=a,this.lang=localStorage.getItem("language"),this.Cols=[g.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"primaryImageUrl",header:"ar"==this.lang?"\u0635\u0648\u0631\u0629":"Image ",type:"image"}),g.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!0,field:"serviceId",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),g.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"title",header:"ar"==this.lang?"\u0627\u0644\u062e\u062f\u0645\u0629":"Exam ",type:"text"})],this.contentFirstBtn="ar"===this.lang?"<i class='fas fa-trash-alt'></i> \u062d\u0630\u0641":"<i class='fas fa-trash-alt'></i> Delete"}ngOnInit(){this.loadData(),this.loadAllServices()}Data;loadData(){this.service.getOrganizationService((new c.l).GetUserOrgId(),(new c.l).GetUserId(),void 0).subscribe({next:t=>{this.Data=t.data,this.cdr.detectChanges()}})}AddServicesToOrg(){let t=new d.uzE;t.serviceId=this.SelectedServices.id,t.organizationId=(new c.l).GetUserOrgId(),this.service.addOrganizationService(t).subscribe({next:a=>{a.isSuccess&&this.loadData()}})}ServicesData;SelectedServices;optionforServices="ar"==this.lang?"serviceTitleAr":"serviceTitleEn";loadAllServices(){let t=(new c.l).GetUserId();this.service.searchServices(void 0,!1,1,1,t,void 0).subscribe({next:a=>{this.ServicesData=a.data.items,this.cdr.detectChanges()},error:()=>{}})}changelist(t){this.loadAllServices(),this.loadData()}Delete(t){S().fire({title:"ar"==this.lang?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u061f":"Are You Sure ? ",text:"ar"==this.lang?" \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062d\u0630\u0641 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0631\u062c\u0648\u0639 \u0641\u064a\u0647\u0627 , \u0627\u0630\u0627 \u0643\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0627\u0636\u063a\u0637 \u0639\u0644\u064a \u062d\u0630\u0641 \u0627\u0648 \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0631\u062c\u0648\u0639   ":"this The deletion process is irreversible. If you are sure, click Delete or you can Cancel it ",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ar"==this.lang?"\u062d\u0630\u0641":"Delete",cancelButtonText:"ar"==this.lang?"\u0625\u0644\u063a\u0627\u0621":"Cancel"}).then(a=>{if(a.isConfirmed){let i=new d.JV8;i.serviceId=t.serviceId,i.organizationId=(new c.l).GetUserOrgId(),this.service.deleteOrganizationService(i).subscribe({next:r=>{this.loadData(),S().fire({title:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641":"Deleted!",text:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641 \u0628\u0646\u062c\u0627\u062d ":"Record has been deleted Successfully.",icon:"success"})}})}})}static \u0275fac=function(a){return new(a||n)(e.Y36(d.r9S),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:n,selectors:[["app-OrgServices"]],decls:17,vars:13,consts:[[1,"m-3"],["translate","org.OrganizationServices",2,"font-weight","bold","color","white"],[1,"row"],[1,"col-md-8"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","FirstBtn","contentFirstBtn","classFirstBtn","firstButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","MENU.Services",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","optionLabel","placeholder","ngModel","ngModelChange"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"]],template:function(a,i){1&a&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"app-shared-datatable",6),e.NdJ("firstButtonEvent",function(o){return i.Delete(o)}),e.qZA()()()(),e.TgZ(7,"div",7)(8,"div",4)(9,"div",5)(10,"div",8)(11,"div",9),e._UZ(12,"label",10),e.TgZ(13,"div",11)(14,"p-dropdown",12),e.NdJ("ngModelChange",function(o){return i.SelectedServices=o}),e.qZA()()()(),e.TgZ(15,"div",13)(16,"button",14),e.NdJ("click",function(){return i.AddServicesToOrg()}),e.qZA()()()()()()),2&a&&(e.xp6(6),e.Q6J("cols",i.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",i.Data)("chooseColomns",!0)("FirstBtn",!0)("contentFirstBtn",i.contentFirstBtn)("classFirstBtn","light-danger"),e.xp6(8),e.Q6J("options",i.ServicesData)("optionLabel",i.optionforServices)("placeholder","ar"==i.lang?"\u0627\u062e\u062a\u0631 \u0627\u0644\u062e\u062f\u0645\u0629":"Choose Service ")("ngModel",i.SelectedServices))},dependencies:[f.G,p.JJ,p.On,C.Lt,u.Pi]})}return n})();const ae=["fileInput"];let ne=(()=>{class n{constructor(){}WhatsappNumber="218912332500";FaceBookAccount="www.facebook.com/people/Mutabbib";TechnicalSuppoert="0912332400";Email="mutabbibsystem.it@gmail.com";ngOnInit(){}whatsapp(){window.open(`https://web.whatsapp.com/send?text=\u0639\u0646\u062f\u064a \u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0628\u062e\u0635\u0648\u0635&phone=${this.WhatsappNumber}&app_absent=0/`,"_blank")}call(){window.open(`tel:${this.TechnicalSuppoert}`)}fileInput;triggerFileInput(){this.fileInput.nativeElement.click()}onFileSelected(t){const a=t.target;a.files&&a.files.length>0?console.log("Selected file:",a.files[0]):console.warn("No file selected")}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=e.Xpm({type:n,selectors:[["app-Support"]],viewQuery:function(a,i){if(1&a&&e.Gf(ae,5),2&a){let r;e.iGM(r=e.CRH())&&(i.fileInput=r.first)}},decls:69,vars:5,consts:[[1,"m-3"],["translate","org.OrganizationSupport",2,"font-weight","bold","color","white"],[1,"row"],[1,"col-md-12"],["id","kt_timeline_widget_2_card",1,"card","p-5"],[1,"card-body"],[1,"row","mb-3"],[1,"col-md-6","ps-lg-10"],["translate","Support.ContacUs",1,"fw-bold","text-gray-900","mb-9"],["translate","Support.Q1",1,"fw-bold","text-gray-900","mb-9"],[1,"card-body","pt-5"],[1,"d-flex","align-items-sm-center","mb-7"],[1,"symbol","symbol-50px","me-5"],[1,"symbol-label"],["src","assets/media/svg/brand-logos/whatsapp.svg","alt","",1,"h-50","align-self-center"],[1,"d-flex","align-items-center","flex-row-fluid","flex-wrap"],[1,"flex-grow-1","me-2"],["translate","Support.WhatsappNumber",1,"text-gray-800","text-hover-primary","fs-6","fw-bold",2,"cursor","pointer",3,"click"],[1,"text-muted","fw-semibold","d-block","fs-7"],["src","assets/media/svg/brand-logos/facebook-2.svg","alt","",1,"h-50","align-self-center"],["href","https://www.facebook.com/people/%D9%85%D8%B7%D8%A8%D8%A8-Mutabbib/61557221510142/?mibextid=ZbWKwL","translate","Support.FacebookAccount",1,"text-gray-800","text-hover-primary","fs-6","fw-bold"],["src","assets/media/svg/brand-logos/phone-call.svg","alt","",1,"h-50","align-self-center"],["href","#","translate","Support.TechnicalSuppoert",1,"text-gray-800","text-hover-primary","fs-6","fw-bold",3,"click"],["src","assets/media/svg/brand-logos/email.svg","alt","",1,"h-50","align-self-center"],["translate","Support.Email",1,"text-gray-800","text-hover-primary","fs-6","fw-bold",3,"href"],[1,"col-md-6","pe-lg-10"],[1,"form","mb-15","fv-plugins-bootstrap5","fv-plugins-framework"],["translate","Support.SendEmail",1,"fw-bold","text-gray-900","mb-9"],[1,"row","mb-5"],[1,"col-md-6","fv-row","fv-plugins-icon-container"],[1,"fv-plugins-message-container","fv-plugins-message-container--enabled","invalid-feedback"],[1,"d-flex","flex-column","mb-10","fv-row","fv-plugins-icon-container"],["translate","Support.Message",1,"fs-6","fw-semibold","mb-2"],["rows","6","name","message","placeholder","",1,"form-control","form-control-solid"],[1,"col-md-6"],[1,"btn","btn-success","w-100"],["translate","Support.Send",1,"indicator-label"],[1,"btn","btn-success","w-100",3,"click"],["translate","Support.Attach",1,"indicator-label"],["type","file",1,"form-control",2,"display","none",3,"change"],["fileInput",""]],template:function(a,i){1&a&&(e.TgZ(0,"span",0),e._UZ(1,"h2",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),e._UZ(8,"h1",8)(9,"h3",9),e.TgZ(10,"div",10)(11,"div",11)(12,"div",12)(13,"span",13),e._UZ(14,"img",14),e.qZA()(),e.TgZ(15,"div",15)(16,"div",16)(17,"a",17),e.NdJ("click",function(){return i.whatsapp()}),e.qZA(),e.TgZ(18,"span",18),e._uU(19),e.qZA()()()(),e.TgZ(20,"div",11)(21,"div",12)(22,"span",13),e._UZ(23,"img",19),e.qZA()(),e.TgZ(24,"div",15)(25,"div",16),e._UZ(26,"a",20),e.TgZ(27,"span",18),e._uU(28),e.qZA()()()(),e.TgZ(29,"div",11)(30,"div",12)(31,"span",13),e._UZ(32,"img",21),e.qZA()(),e.TgZ(33,"div",15)(34,"div",16)(35,"a",22),e.NdJ("click",function(){return i.call()}),e.qZA(),e.TgZ(36,"span",18),e._uU(37),e.qZA()()()(),e.TgZ(38,"div",11)(39,"div",12)(40,"span",13),e._UZ(41,"img",23),e.qZA()(),e.TgZ(42,"div",15)(43,"div",16),e._UZ(44,"a",24),e.TgZ(45,"span",18),e._uU(46),e.qZA()()()()()(),e.TgZ(47,"div",25)(48,"div",26),e._UZ(49,"h1",27),e.TgZ(50,"div",28)(51,"div",29),e._UZ(52,"div",30),e.qZA(),e.TgZ(53,"div",29),e._UZ(54,"div",30),e.qZA()(),e.TgZ(55,"div",31),e._UZ(56,"label",32),e.TgZ(57,"textarea",33),e._uU(58," "),e.qZA(),e._UZ(59,"div",30),e.qZA(),e.TgZ(60,"div",2)(61,"div",34)(62,"button",35),e._UZ(63,"span",36),e.qZA()(),e.TgZ(64,"div",34)(65,"button",37),e.NdJ("click",function(){return i.triggerFileInput()}),e._UZ(66,"span",38),e.qZA(),e.TgZ(67,"input",39,40),e.NdJ("change",function(o){return i.onFileSelected(o)}),e.qZA()()()()()()()()()()),2&a&&(e.xp6(19),e.hij("",i.WhatsappNumber," "),e.xp6(9),e.Oqu(i.FaceBookAccount),e.xp6(9),e.Oqu(i.TechnicalSuppoert),e.xp6(7),e.Q6J("href","mailto:"+i.Email+"?subject=Hello",e.LSH),e.xp6(2),e.Oqu(i.Email))},dependencies:[u.Pi]})}return n})(),oe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[N.m,p.u5,C.kW,Y.EV,_.q4,J.Bz.forChild([{path:"ClinicList",canActivate:[h.o],component:B,data:{animation:"ClinicList"}},{path:"ClinicAvailabilityList",canActivate:[h.o],component:D,data:{animation:"ClinicAvailabilityList"}},{path:"HospitalTimingList",canActivate:[h.o],component:z,data:{animation:"HospitalTimingList"}},{path:"EditOrganization",canActivate:[h.o],component:Q,data:{animation:"EditOrganization"}},{path:"OrganizationLaboratory",canActivate:[h.o],component:te,data:{animation:"OrganizationLaboratory"}},{path:"OrganizationServices",canActivate:[h.o],component:ie,data:{animation:"OrganizationServices"}},{path:"Support",canActivate:[h.o],component:ne,data:{animation:"Support"}}]),w.ez,u.aw,M.q,m.DL,A._8]})}return n})()}}]);