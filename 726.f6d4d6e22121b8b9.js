"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[726],{726:(P,f,r)=>{r.r(f),r.d(f,{OrganizationModule:()=>w});var b=r(6814),c=r(7860),d=r(649),g=r(7434),u=r(1356),v=r(2029),e=r(5879),s=r(6223),p=r(2160),m=r(6663);let A=(()=>{class o{service;cdr;ref;config;lang=localStorage.getItem("language");currentLanguage;allDoctors=[];selectedDoctor;timePeriod={from:"",to:""};constructor(i,a,t,l){this.service=i,this.cdr=a,this.ref=t,this.config=l,this.lang=localStorage.getItem("language"),this.currentLanguage=localStorage.getItem("language")??"ar"}ngOnInit(){console.log(JSON.stringify(this.config.data)),this.service.getDoctorPerSpeciality(this.config.data.clinic.specialityId,(new g.l).GetUserId()).subscribe({next:i=>{this.allDoctors=i.data,this.cdr.detectChanges()},error:()=>{}})}AddDoctorToClinic(){let i=new d.gk;i.doctorId=this.selectedDoctor,i.clinicAvailabilityId=this.config.data.Availability.id,i.endAt=this.timePeriod.to,i.startAt=this.timePeriod.from,this.service.addDoctorClinicAvailability(i).subscribe({next:a=>{console.log(a)}})}static \u0275fac=function(a){return new(a||o)(e.Y36(d.r9),e.Y36(e.sBO),e.Y36(u.E7),e.Y36(u.S))};static \u0275cmp=e.Xpm({type:o,selectors:[["app-add-doctor-to-clinic-availability"]],decls:15,vars:8,consts:[[2,"min-height","255px"],[1,"mb-10"],["translate","org.ChooseDoctor",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng","optionLabel","doctorName","optionValue","id",3,"options","ngModel","showClear","placeholder","ngModelChange"],["translate","SHARED.from",1,"form-label"],[1,"form-control",3,"ngModel","placeholder","ngModelChange"],["translate","SHARED.to",1,"form-label"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"label",2),e.TgZ(3,"div",3)(4,"p-dropdown",4),e.NdJ("ngModelChange",function(n){return t.selectedDoctor=n}),e.qZA()()(),e.TgZ(5,"div",1),e._UZ(6,"label",5),e.TgZ(7,"div")(8,"input",6),e.NdJ("ngModelChange",function(n){return t.timePeriod.from=n}),e.qZA()()(),e.TgZ(9,"div",1),e._UZ(10,"label",7),e.TgZ(11,"div")(12,"input",6),e.NdJ("ngModelChange",function(n){return t.timePeriod.to=n}),e.qZA()()(),e.TgZ(13,"div",8)(14,"button",9),e.NdJ("click",function(){return t.AddDoctorToClinic()}),e.qZA()()()),2&a&&(e.xp6(4),e.Q6J("options",t.allDoctors)("ngModel",t.selectedDoctor)("showClear",!0)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0627\u0631 \u0637\u0628\u064a\u0628":"Choose A Doctor"),e.xp6(4),e.Q6J("ngModel",t.timePeriod.from)("placeholder","ar"==t.currentLanguage?"\u0639\u0644\u064a \u0646\u0645\u0637 [hh:mm:ss] \u0645\u062b\u0627\u0644  04:30:00 ":"pattern : [hh:mm:ss] for examle 05:30:00"),e.xp6(4),e.Q6J("ngModel",t.timePeriod.to)("placeholder","ar"==t.currentLanguage?"\u0639\u0644\u064a \u0646\u0645\u0637 [hh:mm:ss] \u0645\u062b\u0627\u0644  04:30:00 ":"pattern : [hh:mm:ss] for examle 05:30:00"))},dependencies:[s.Fj,s.JJ,s.On,p.Lt,m.Pi]})}return o})();var h=r(4361);let C=(()=>{class o{service;cdr;ref;config;dialogService;Cols;Data;timingData;lang=localStorage.getItem("language");currentLanguage;days=v.n;selectedDay;selectedPeriod={id:""};contentFirstBtn="";classFirstBtn="success text-white";constructor(i,a,t,l,n){this.service=i,this.cdr=a,this.ref=t,this.config=l,this.dialogService=n,this.lang=localStorage.getItem("language"),this.Cols=[c.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),c.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"day",header:"ar"==this.lang?"\u064a\u0648\u0645":"Day ",type:"day"}),c.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"period",header:"ar"==this.lang?"\u0641\u062a\u0631\u0629":"Period ",type:"period"}),c.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!1,field:"start",header:"ar"==this.lang?"\u0628\u062f\u0627\u064a\u0629":"Start ",type:"text"}),c.v.fromJS({id:5,sorted:!0,filtered:!0,hidden:!1,field:"end",header:"ar"==this.lang?"\u0646\u0647\u0627\u064a\u0629":"End ",type:"text"})]}ngOnInit(){this.currentLanguage=localStorage.getItem("language")??"ar",this.contentFirstBtn="ar"==this.lang?"\u0627\u0636\u0627\u0641\u0629 \u0637\u0628\u064a\u0628":"Add Doctor",this.loadClinicAvailablities(),this.searchHospitalTiming()}loadClinicAvailablities(){this.service.getClinicAvailabilities(this.config.data.id,(new g.l).GetUserId()).subscribe({next:i=>{this.Data=i.data},error:()=>{}})}searchHospitalTiming(){let i=(new g.l).GetUserId(),a=(new g.l).GetUserOrgId();this.service.getHospitalTimings(a,i).subscribe({next:t=>{this.timingData=t.data,this.cdr.detectChanges()},error:()=>{}})}AddClinicAvailability(){let i=new d.C6;i.clinicId=this.config.data.id,i.day=v.n[this.selectedDay.id-1].day,i.hospitalTimingId=this.selectedPeriod.id,this.service.addClinicAvailability(i).subscribe({next:a=>{this.loadClinicAvailablities()}})}ShowAddDoctorToClinicAvaliability(i){this.dialogService.open(A,{data:{clinic:this.config.data,Availability:i},header:"ar"==this.lang?"\u0627\u0636\u0627\u0641\u0629 \u0637\u0628\u064a\u0628 \u0644\u0648\u0642\u062a \u0627\u0644\u0639\u064a\u0627\u062f\u0629":"Add Doctor To Clinic Availability",width:"60%",maximizable:!0,resizable:!0,draggable:!0})}static \u0275fac=function(a){return new(a||o)(e.Y36(d.r9),e.Y36(e.sBO),e.Y36(u.E7),e.Y36(u.S),e.Y36(u.xA))};static \u0275cmp=e.Xpm({type:o,selectors:[["app-clinic-availability-list"]],features:[e._Bn([u.xA])],decls:18,vars:19,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"col-md-12"],[1,"mb-10"],["translate","org.AvaliableDays",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange"],["translate","org.AvaliablePeriod",1,"form-label"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","FirstBtn","classFirstBtn","contentFirstBtn","firstButtonEvent"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",4)(6,"div",5),e._UZ(7,"label",6),e.TgZ(8,"div",7)(9,"p-dropdown",8),e.NdJ("ngModelChange",function(n){return t.selectedDay=n}),e.qZA()()(),e.TgZ(10,"div",5),e._UZ(11,"label",9),e.TgZ(12,"div",7)(13,"p-dropdown",8),e.NdJ("ngModelChange",function(n){return t.selectedPeriod=n}),e.qZA()()(),e.TgZ(14,"div",10)(15,"button",11),e.NdJ("click",function(){return t.AddClinicAvailability()}),e.qZA()()()(),e.TgZ(16,"div",4)(17,"app-shared-datatable",12),e.NdJ("firstButtonEvent",function(n){return t.ShowAddDoctorToClinicAvaliability(n)}),e.qZA()()()()()()),2&a&&(e.xp6(9),e.Q6J("options",t.days)("ngModel",t.selectedDay)("optionLabel","ar"==t.currentLanguage?"nameAr":"nameEn")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0625\u062e\u062a\u0631 \u064a\u0648\u0645":"Choose a day"),e.xp6(4),e.Q6J("options",t.timingData)("ngModel",t.selectedPeriod)("optionLabel","period")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0625\u062e\u062a\u0631 \u0641\u062a\u0631\u0629":"Choose a period"),e.xp6(4),e.Q6J("cols",t.Cols)("rowsPageNumbers",25)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("FirstBtn",!0)("classFirstBtn",t.classFirstBtn)("contentFirstBtn",t.contentFirstBtn))},dependencies:[h.G,s.JJ,s.On,p.Lt,m.Pi]})}return o})(),y=(()=>{class o{service;cdr;dialogService;Cols;Data;SpecData;currentLanguage;lang=localStorage.getItem("language");contentFirstBtn;classFirstBtn="success text-white";currentSpec={id:""};constructor(i,a,t){this.service=i,this.cdr=a,this.dialogService=t,this.lang=localStorage.getItem("language"),this.Cols=[c.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),c.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"specialityName",header:"ar"==this.lang?"\u0627\u0644\u062a\u062e\u0635\u0635":"Speciality ",type:"text"})]}ngOnChanges(i){this.cdr.detectChanges()}currentClinic={specialityId:"",hospitalId:"",clinicDescription:""};ngOnInit(){this.searchClinic(),this.searchSpeciality(),this.currentLanguage=localStorage.getItem("language")??"ar",this.contentFirstBtn="ar"==this.lang?"\u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f \u0627\u0644\u0645\u062a\u0627\u062d\u0629":"Avaliable Periods"}searchSpeciality(){this.service.searchSpeciality("",void 0).subscribe({next:i=>{this.SpecData=i.data,this.cdr.detectChanges()},error:()=>{}})}searchClinic(){let i=(new g.l).GetUserId(),a=(new g.l).GetUserOrgId();this.service.getAllClinics(a,i).subscribe({next:t=>{this.Data=t.data,this.cdr.detectChanges()},error:()=>{}})}AddClinic(){let i=new d.xz;i.specialityId=this.currentSpec.id,i.hospitalId=(new g.l).GetUserOrgId(),i.clinicDescription=" ",this.service.newClinic(i).subscribe({next:a=>{this.searchClinic()}})}Avaliabilty(i){this.dialogService.open(C,{data:i,header:"ar"==this.lang?"\u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f \u0627\u0644\u0645\u062a\u0627\u062d\u0629":"Clinic Avalilabilities",width:"90%",maximizable:!0,resizable:!0,draggable:!0})}static \u0275fac=function(a){return new(a||o)(e.Y36(d.r9),e.Y36(e.sBO),e.Y36(u.xA))};static \u0275cmp=e.Xpm({type:o,selectors:[["app-clinic-list"]],features:[e._Bn([u.xA]),e.TTD],decls:14,vars:15,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","FirstBtn","classFirstBtn","contentFirstBtn","firstButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","MENU.Speciality",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"app-shared-datatable",5),e.NdJ("firstButtonEvent",function(n){return t.Avaliabilty(n)}),e.qZA()(),e.TgZ(6,"div",6)(7,"div",7)(8,"div",8),e._UZ(9,"label",9),e.TgZ(10,"div",10)(11,"p-dropdown",11),e.NdJ("ngModelChange",function(n){return t.currentSpec=n}),e.qZA()()(),e.TgZ(12,"div",12)(13,"button",13),e.NdJ("click",function(){return t.AddClinic()}),e.qZA()()()()()()()()),2&a&&(e.xp6(5),e.Q6J("cols",t.Cols)("rowsPageNumbers",25)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("SecondBtn",!1)("FirstBtn",!0)("classFirstBtn",t.classFirstBtn)("contentFirstBtn",t.contentFirstBtn),e.xp6(6),e.Q6J("options",t.SpecData)("ngModel",t.currentSpec)("optionLabel","ar"==t.currentLanguage?"speciality_Name_Ar":"speciality_Name_En")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0627\u0644\u062a\u062e\u0635\u0635":"Choose Speciality "))},dependencies:[h.G,s.JJ,s.On,p.Lt,m.Pi]})}return o})();var T=r(7304),_=r(3415),S=r(3660),D=r(2376);let Z=(()=>{class o{service;cdr;Cols;Data;currentLanguage;lang=localStorage.getItem("language");allPeriods=D.b;currentPeriod={id:0};timePeriod={from:"",to:""};constructor(i,a){this.service=i,this.cdr=a,this.lang=localStorage.getItem("language"),this.Cols=[c.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),c.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"period",header:"ar"==this.lang?"\u0627\u0644\u0641\u062a\u0631\u0629":"Period ",type:"period"}),c.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"start",header:"ar"==this.lang?"\u0628\u062f\u0627\u064a\u0647 \u0645\u0646":"Start From ",type:"text"}),c.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!1,field:"end",header:"ar"==this.lang?"\u0646\u0647\u0627\u064a\u0629 \u0625\u0644\u064a":"End At ",type:"text"})]}ngOnChanges(i){this.cdr.detectChanges()}currentClinic={specialityId:"",hospitalId:"",clinicDescription:""};ngOnInit(){this.searchHospitalTiming(),this.currentLanguage=localStorage.getItem("language")??"ar"}searchHospitalTiming(){let i=(new g.l).GetUserId(),a=(new g.l).GetUserOrgId();this.service.getHospitalTimings(a,i).subscribe({next:t=>{this.Data=t.data,this.cdr.detectChanges()},error:()=>{}})}AddHospitalTiming(){let i=new d.sd;i.hospitalId=(new g.l).GetUserOrgId(),i.period=this.allPeriods[this.currentPeriod.id-1].period,i.timeRangeEnd=this.timePeriod.from,i.timeRangeStart=this.timePeriod.to,this.service.newHospitalTiming(i).subscribe({next:a=>{this.searchHospitalTiming()}})}static \u0275fac=function(a){return new(a||o)(e.Y36(d.r9),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:o,selectors:[["app-hospital-timing-list"]],features:[e.TTD],decls:22,vars:16,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","org.period",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange"],["translate","SHARED.from",1,"form-label"],[1,"form-control",3,"ngModel","placeholder","ngModelChange"],["translate","SHARED.to",1,"form-label"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"app-shared-datatable",5),e.qZA(),e.TgZ(6,"div",6)(7,"div",7)(8,"div",8),e._UZ(9,"label",9),e.TgZ(10,"div",10)(11,"p-dropdown",11),e.NdJ("ngModelChange",function(n){return t.currentPeriod=n}),e.qZA()()(),e.TgZ(12,"div",8),e._UZ(13,"label",12),e.TgZ(14,"div")(15,"input",13),e.NdJ("ngModelChange",function(n){return t.timePeriod.from=n}),e.qZA()()(),e.TgZ(16,"div",8),e._UZ(17,"label",14),e.TgZ(18,"div")(19,"input",13),e.NdJ("ngModelChange",function(n){return t.timePeriod.to=n}),e.qZA()()(),e.TgZ(20,"div",15)(21,"button",16),e.NdJ("click",function(){return t.AddHospitalTiming()}),e.qZA()()()()()()()()),2&a&&(e.xp6(5),e.Q6J("cols",t.Cols)("rowsPageNumbers",25)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("SecondBtn",!1),e.xp6(6),e.Q6J("options",t.allPeriods)("ngModel",t.currentPeriod)("optionLabel","ar"==t.currentLanguage?"nameAr":"nameEn")("showClear",!1)("placeholder","ar"==t.currentLanguage?"\u0627\u062e\u062a\u0631 \u0641\u062a\u0631\u0629":"Choose a Peroid"),e.xp6(4),e.Q6J("ngModel",t.timePeriod.from)("placeholder","ar"==t.currentLanguage?"\u0639\u0644\u064a \u0646\u0645\u0637 [hh:mm:ss] \u0645\u062b\u0627\u0644  04:30:00 ":"pattern : [hh:mm:ss] for examle 05:30:00"),e.xp6(4),e.Q6J("ngModel",t.timePeriod.to)("placeholder","ar"==t.currentLanguage?"\u0639\u0644\u064a \u0646\u0645\u0637 [hh:mm:ss] \u0645\u062b\u0627\u0644  04:30:00 ":"pattern : [hh:mm:ss] for examle 05:30:00"))},dependencies:[h.G,s.Fj,s.JJ,s.On,p.Lt,m.Pi]})}return o})();var I=r(4055);let J=(()=>{class o{service;cdr;lang=localStorage.getItem("language");currentLanguage;selectedDoctor;main_model={from:"",to:"",title:"",details:""};orgId="";constructor(i,a){this.service=i,this.cdr=a,this.lang=localStorage.getItem("language"),this.currentLanguage=localStorage.getItem("language")??"ar"}ngOnInit(){let i=localStorage.getItem("org");const a=JSON.parse(i);var t=new d.u4(a);this.main_model.from=t.openAt,this.main_model.to=t.closeAt,this.main_model.details=t.aboutUsDescription,this.main_model.title=t.aboutUsTitle,this.orgId=t?.organizationId}UpdateOrganization(){let i=new d.Oj;i.timeRangeStart=this.main_model.from,i.timeRangeEnd=this.main_model.to,i.organizationId=this.orgId,i.aboutUsTitle=this.main_model.title,i.aboutUsDetails=this.main_model.details,this.service.editOrganization(i).subscribe(a=>{let t=localStorage.getItem("org");const l=JSON.parse(t);var n=new d.u4(l);const L=this.main_model.to,B=this.main_model.details,E=this.main_model.title,O=this.orgId;n.openAt=this.main_model.from,n.closeAt=L,n.aboutUsDescription=B,n.aboutUsTitle=E,n.organizationId=O,localStorage.removeItem("org"),localStorage.setItem("org",JSON.stringify(n))})}static \u0275fac=function(a){return new(a||o)(e.Y36(d.r9),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:o,selectors:[["app-EditOrganization"]],decls:24,vars:6,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"col-md-12"],[2,"min-height","255px"],[1,"mb-10"],["translate","org.Title",1,"form-label"],[1,"form-control",3,"ngModel","ngModelChange"],["translate","org.Details",1,"form-label"],["translate","SHARED.from",1,"form-label"],[1,"form-control",3,"ngModel","placeholder","ngModelChange"],["translate","SHARED.to",1,"form-label"],[2,"display","contents"],["translate","SHARED.Edit",1,"btn","btn-success",2,"width","100%",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e._UZ(7,"label",7),e.TgZ(8,"div")(9,"input",8),e.NdJ("ngModelChange",function(n){return t.main_model.title=n}),e.qZA()()(),e.TgZ(10,"div",6),e._UZ(11,"label",9),e.TgZ(12,"div")(13,"input",8),e.NdJ("ngModelChange",function(n){return t.main_model.details=n}),e.qZA()()(),e.TgZ(14,"div",6),e._UZ(15,"label",10),e.TgZ(16,"div")(17,"input",11),e.NdJ("ngModelChange",function(n){return t.main_model.from=n}),e.qZA()()(),e.TgZ(18,"div",6),e._UZ(19,"label",12),e.TgZ(20,"div")(21,"input",11),e.NdJ("ngModelChange",function(n){return t.main_model.to=n}),e.qZA()()(),e.TgZ(22,"div",13)(23,"button",14),e.NdJ("click",function(){return t.UpdateOrganization()}),e.qZA()()()()()()()()),2&a&&(e.xp6(9),e.Q6J("ngModel",t.main_model.title),e.xp6(4),e.Q6J("ngModel",t.main_model.details),e.xp6(4),e.Q6J("ngModel",t.main_model.from)("placeholder","ar"==t.currentLanguage?"\u0639\u0644\u064a \u0646\u0645\u0637 [hh:mm:ss] \u0645\u062b\u0627\u0644  04:30:00 ":"pattern : [hh:mm:ss] for examle 05:30:00"),e.xp6(4),e.Q6J("ngModel",t.main_model.to)("placeholder","ar"==t.currentLanguage?"\u0639\u0644\u064a \u0646\u0645\u0637 [hh:mm:ss] \u0645\u062b\u0627\u0644  04:30:00 ":"pattern : [hh:mm:ss] for examle 05:30:00"))},dependencies:[s.Fj,s.JJ,s.On,m.Pi]})}return o})(),w=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=e.oAB({type:o});static \u0275inj=e.cJS({imports:[_.m,s.u5,p.kW,I.q4,T.Bz.forChild([{path:"ClinicList",component:y},{path:"ClinicAvailabilityList",component:C},{path:"HospitalTimingList",component:Z},{path:"EditOrganization",component:J}]),b.ez,m.aw,S.q,u.DL]})}return o})()}}]);