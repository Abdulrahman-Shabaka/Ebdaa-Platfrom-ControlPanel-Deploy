"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[373],{9373:(S,g,r)=>{r.r(g),r.d(g,{ExamModule:()=>D});var u=r(6814),f=r(3415),d=r(6223),C=r(2160),E=r(4055),v=r(7304),m=r(6663),b=r(3660),y=r(1356),c=r(7860),h=r(7434),e=r(5879),l=r(649),p=r(4361);let A=(()=>{class o{service;cdr;Cols;Data;currentLanguage;lang=localStorage.getItem("language");currentPeriod={id:0};timePeriod={from:"",to:""};constructor(n,a){this.service=n,this.cdr=a,this.lang=localStorage.getItem("language"),this.Cols=[c.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),c.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"nameAr":"nameEn",header:"ar"==this.lang?"\u0627\u0644\u0627\u0633\u0645":"Name ",type:"text"}),c.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"descriptionAr":"descriptionEn",header:"ar"==this.lang?"\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644":"Description ",type:"text"})]}ngOnChanges(n){this.cdr.detectChanges()}currentClinic={specialityId:"",hospitalId:"",clinicDescription:""};ngOnInit(){this.search(2),this.currentLanguage=localStorage.getItem("language")??"ar"}search(n){let a=(new h.l).GetUserId();this.service.searchExam(n,void 0,void 0,a).subscribe({next:t=>{this.Data=t.data,console.log(t)},error:()=>{}})}Add(){}static \u0275fac=function(a){return new(a||o)(e.Y36(l.r9),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:o,selectors:[["app-ExamList"]],features:[e.TTD],decls:22,vars:11,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","org.period",1,"form-label"],[1,"dropdown"],["translate","SHARED.from",1,"form-label"],[1,"form-control",3,"ngModel","placeholder","ngModelChange"],["translate","SHARED.to",1,"form-label"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"app-shared-datatable",5),e.qZA(),e.TgZ(6,"div",6)(7,"div",7)(8,"div",8),e._UZ(9,"label",9),e.TgZ(10,"div",10),e._uU(11," -- "),e.qZA()(),e.TgZ(12,"div",8),e._UZ(13,"label",11),e.TgZ(14,"div")(15,"input",12),e.NdJ("ngModelChange",function(i){return t.timePeriod.from=i}),e.qZA()()(),e.TgZ(16,"div",8),e._UZ(17,"label",13),e.TgZ(18,"div")(19,"input",12),e.NdJ("ngModelChange",function(i){return t.timePeriod.to=i}),e.qZA()()(),e.TgZ(20,"div",14)(21,"button",15),e.NdJ("click",function(){return t.Add()}),e.qZA()()()()()()()()),2&a&&(e.xp6(5),e.Q6J("cols",t.Cols)("rowsPageNumbers",25)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("SecondBtn",!1),e.xp6(10),e.Q6J("ngModel",t.timePeriod.from)("placeholder","ar"==t.currentLanguage?"\u0639\u0644\u064a \u0646\u0645\u0637 [hh:mm:ss] \u0645\u062b\u0627\u0644  04:30:00 ":"pattern : [hh:mm:ss] for examle 05:30:00"),e.xp6(4),e.Q6J("ngModel",t.timePeriod.to)("placeholder","ar"==t.currentLanguage?"\u0639\u0644\u064a \u0646\u0645\u0637 [hh:mm:ss] \u0645\u062b\u0627\u0644  04:30:00 ":"pattern : [hh:mm:ss] for examle 05:30:00"))},dependencies:[p.G,d.Fj,d.JJ,d.On,m.Pi]})}return o})();function Z(o,J){if(1&o){const n=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Add())}),e.qZA()}}function x(o,J){if(1&o){const n=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.Edit())}),e.qZA()}}let T=(()=>{class o{service;cdr;Cols;Data;currentLanguage;lang=localStorage.getItem("language");model=new l.Uy;currentPeriod={id:0};timePeriod={from:"",to:""};constructor(n,a){this.service=n,this.cdr=a,this.lang=localStorage.getItem("language"),this.Cols=[c.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"id",header:"ar"==this.lang?"\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a":"Id Code ",type:"text"}),c.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"titleAr":"titleEn",header:"ar"==this.lang?"\u0627\u0644\u0639\u0646\u0648\u0627\u0646":"Title ",type:"text"}),c.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"descriptionAr":"descriptionEn",header:"ar"==this.lang?"\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644":"Description ",type:"text"})]}ngOnChanges(n){this.cdr.detectChanges()}currentClinic={specialityId:"",hospitalId:"",clinicDescription:""};ngOnInit(){this.search(),this.currentLanguage=localStorage.getItem("language")??"ar"}search(){let n=(new h.l).GetUserId();this.service.searchExamCategory(void 0,n).subscribe({next:a=>{this.Data=a.data,console.log(a),this.cdr.detectChanges()},error:()=>{}})}mode="add";Add(){this.service.newExamCategory(this.model).subscribe({next:n=>{this.search(),this.model=new l.Zo}})}Edit(){let n=new l.HI;n.categoryId=this.model.id,n.examCategoryTitleAr=this.model.titleAr,n.examCategoryTitleEn=this.model.titleEn,n.examCategoryDescriptionAr=this.model.descriptionAr,n.examCategoryDescriptionEn=this.model.descriptionEn,this.service.editExamCategory(n).subscribe({next:a=>{this.search(),this.model=new l.Zo}})}EditRow(n){this.mode="edit",console.log(n);var a=JSON.stringify(n);this.model=JSON.parse(a)}DeleteRow(n){var a=new l.ws;a.examCategoryId=n.id,this.service.deleteExamCategory(a).subscribe({next:t=>{this.search(),this.model=new l.Zo}})}static \u0275fac=function(a){return new(a||o)(e.Y36(l.r9),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:o,selectors:[["app-ExamCategory"]],features:[e.TTD],decls:23,vars:16,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn","contentSecondBtn","FirstBtn","contentFirstBtn","secondButtonEvent","firstButtonEvent"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","SHARED.ArabicName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","SHARED.ArabicDesc",1,"form-label"],["translate","SHARED.EnglishName",1,"form-label"],["translate","SHARED.EnglishDesc",1,"form-label"],[2,"display","contents"],["style","width: 100%;","class","btn btn-success","translate","SHARED.Create",3,"click",4,"ngIf"],["style","width: 100%;","class","btn btn-success","translate","SHARED.Edit",3,"click",4,"ngIf"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"],["translate","SHARED.Edit",1,"btn","btn-success",2,"width","100%",3,"click"]],template:function(a,t){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"app-shared-datatable",5),e.NdJ("secondButtonEvent",function(i){return t.EditRow(i)})("firstButtonEvent",function(i){return t.DeleteRow(i)}),e.qZA()(),e.TgZ(6,"div",6)(7,"div",7)(8,"div",8),e._UZ(9,"label",9),e.TgZ(10,"input",10),e.NdJ("ngModelChange",function(i){return t.model.titleAr=i}),e.qZA()(),e.TgZ(11,"div",8),e._UZ(12,"label",11),e.TgZ(13,"input",10),e.NdJ("ngModelChange",function(i){return t.model.descriptionAr=i}),e.qZA()(),e.TgZ(14,"div",8),e._UZ(15,"label",12),e.TgZ(16,"input",10),e.NdJ("ngModelChange",function(i){return t.model.titleEn=i}),e.qZA()(),e.TgZ(17,"div",8),e._UZ(18,"label",13),e.TgZ(19,"input",10),e.NdJ("ngModelChange",function(i){return t.model.descriptionEn=i}),e.qZA()(),e.TgZ(20,"div",14),e.YNc(21,Z,1,0,"button",15),e.YNc(22,x,1,0,"button",16),e.qZA()()()()()()()),2&a&&(e.xp6(5),e.Q6J("cols",t.Cols)("rowsPageNumbers",25)("pagination",!0)("scrollable",!1)("data",t.Data)("chooseColomns",!0)("SecondBtn",!0)("contentSecondBtn","ar"==t.currentLanguage?"\u062a\u0639\u062f\u064a\u0644":"Edit")("FirstBtn",!0)("contentFirstBtn","ar"==t.currentLanguage?"\u062d\u0630\u0641":"Delete"),e.xp6(5),e.Q6J("ngModel",t.model.titleAr),e.xp6(3),e.Q6J("ngModel",t.model.descriptionAr),e.xp6(3),e.Q6J("ngModel",t.model.titleEn),e.xp6(3),e.Q6J("ngModel",t.model.descriptionEn),e.xp6(2),e.Q6J("ngIf","add"==t.mode),e.xp6(1),e.Q6J("ngIf","edit"==t.mode))},dependencies:[p.G,d.Fj,d.JJ,d.On,u.O5,m.Pi]})}return o})(),D=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=e.oAB({type:o});static \u0275inj=e.cJS({imports:[f.m,d.u5,C.kW,E.q4,v.Bz.forChild([{path:"",redirectTo:"ExamList",pathMatch:"full"},{path:"ExamList",component:A},{path:"ExamCategoryList",component:T}]),u.ez,m.aw,b.q,y.DL]})}return o})()}}]);