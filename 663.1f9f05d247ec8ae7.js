"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[663],{2427:(y,d,n)=>{n.d(d,{o:()=>f});var o=n(7234);const m=[{PageId:1,PagePermission:o.G.SuperAdmin,FullPageUrl:"/dashboard"},{PageId:2,PagePermission:o.G.SuperAdmin,FullPageUrl:"/Address"},{PageId:3,PagePermission:o.G.SuperAdmin,FullPageUrl:"/Speciality"},{PageId:4,PagePermission:o.G.SuperAdmin,FullPageUrl:"/Role"},{PageId:5,PagePermission:o.G.SuperAdmin,FullPageUrl:"/Exam/ExamList"},{PageId:6,PagePermission:o.G.SuperAdmin,FullPageUrl:"/Exam/ExamCategoryList"},{PageId:7,PagePermission:o.G.Organization,FullPageUrl:"/HospitalDoctorClinicAvailability"},{PageId:8,PagePermission:o.G.Organization,FullPageUrl:"/Organization/ClinicList"},{PageId:9,PagePermission:o.G.Organization,FullPageUrl:"/Organization/HospitalTimingList"},{PageId:10,PagePermission:o.G.Organization,FullPageUrl:"/Organization/EditOrganization"},{PageId:11,PagePermission:o.G.Organization,FullPageUrl:"/Organization/OrganizationLaboratory"}];var p=n(5879),v=n(6901);let f=(()=>{class a{permissionService;constructor(u){this.permissionService=u}canActivate(u,g){if("/"!==g.url){let N=m.find(i=>i.FullPageUrl==g.url);return this.permissionService.isGranted(N?.PagePermission)}return!0}static \u0275fac=function(g){return new(g||a)(p.LFG(v.v))};static \u0275prov=p.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},4442:(y,d,n)=>{n.d(d,{bi:()=>v});var o=n(649);const v=[{id:1,nameAr:"\u0635\u0628\u0627\u062d\u064a\u0629",nameEn:"Morning",period:o.pH._1,peridesc:"(2:00 - 8:00)"},{id:2,nameAr:"\u0638\u0647\u064a\u0631\u0629",nameEn:"Noon",period:o.pH._2,peridesc:"(5:00 - 2:00)"},{id:3,nameAr:"\u0645\u0633\u0627\u0626\u064a\u0629",nameEn:"Evening",period:o.pH._3,peridesc:"(10:00 - 5:00)"},{id:4,nameAr:"\u0644\u064a\u0644\u064a\u0629",nameEn:"Night",period:o.pH._4,peridesc:"(8:00 - 10:00)"}]},2029:(y,d,n)=>{n.d(d,{n:()=>m});var o=n(649);const m=[{id:1,nameAr:"\u0627\u0644\u0623\u062d\u062f",nameEn:"Sunday",day:o.Jc._1},{id:2,nameAr:"\u0627\u0644\u0625\u062b\u0646\u064a\u0646",nameEn:"Monday",day:o.Jc._2},{id:3,nameAr:"\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",nameEn:"Tuesday",day:o.Jc._3},{id:4,nameAr:"\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",nameEn:"Wednesday",day:o.Jc._4},{id:5,nameAr:"\u0627\u0644\u062e\u0645\u064a\u0633",nameEn:"Thursday",day:o.Jc._5},{id:6,nameAr:"\u0627\u0644\u062c\u0645\u0639\u0629",nameEn:"Friday",day:o.Jc._6},{id:7,nameAr:"\u0627\u0644\u0633\u0628\u062a",nameEn:"Saturday",day:o.Jc._7}]},5663:(y,d,n)=>{n.r(d),n.d(d,{HospitalDoctorClinicAvailabilityModule:()=>J});var o=n(6814),m=n(1356),p=n(7434),v=n(2029),f=n(4442),a=n(5879),h=n(649),u=n(6223),g=n(2160),N=n(6663);let b=(()=>{class t{transform(e){const l=e.split(":");return`${l[0]}:${l[1]}`}static \u0275fac=function(l){return new(l||t)};static \u0275pipe=a.Yjl({name:"TimeFromateOnlyMinutes",type:t,pure:!0})}return t})();function i(t,c){if(1&t&&(a.TgZ(0,"th",16),a._uU(1," \u0627\u0644\u0641\u062a\u0631\u0629 "),a._UZ(2,"br"),a._uU(3),a._UZ(4,"br"),a._uU(5),a.qZA()),2&t){const e=c.$implicit;a.xp6(3),a.hij(" \u0627\u0644",e.nameAr," "),a.xp6(2),a.hij(" ",e.peridesc," ")}}function _(t,c){if(1&t&&(a.ynx(0),a.TgZ(1,"span",28),a._uU(2),a.ALo(3,"TimeFromateOnlyMinutes"),a.ALo(4,"TimeFromateOnlyMinutes"),a.qZA(),a.BQk()),2&t){const e=a.oxw().$implicit;a.xp6(2),a.AsE("(",a.lcZ(3,2,e.startAt)," - ",a.lcZ(4,4,e.endAt),")")}}function E(t,c){if(1&t&&(a.TgZ(0,"div",25)(1,"span",26),a._uU(2),a.qZA(),a._UZ(3,"br"),a.YNc(4,_,5,6,"ng-container",27),a.qZA()),2&t){const e=c.$implicit;a.xp6(2),a.hij(" ",e.doctorName," "),a.xp6(2),a.Q6J("ngIf","00:00:00"!=e.startAt&&"00:00:00"!=e.endAt)}}function P(t,c){if(1&t&&(a.TgZ(0,"div",23),a.YNc(1,E,5,2,"div",24),a.qZA()),2&t){const e=a.oxw().$implicit;a.xp6(1),a.Q6J("ngForOf",e.doctorClinicAvailabilities)}}function I(t,c){1&t&&(a.TgZ(0,"div",29)(1,"span",29),a._uU(2," .. "),a.qZA()())}function x(t,c){if(1&t){const e=a.EpF();a.TgZ(0,"button",30),a.NdJ("click",function(){a.CHM(e);const r=a.oxw(2).$implicit,s=a.oxw();return a.KtG(s.ShowAddDoctorToClinicAvaliability(r))}),a._uU(1," + "),a.qZA()}}function D(t,c){if(1&t){const e=a.EpF();a.TgZ(0,"td",19),a.NdJ("mouseenter",function(){const s=a.CHM(e).$implicit,A=a.oxw(2);return A.showButton=!0,a.KtG(A.currentHover=s)})("mouseleave",function(){a.CHM(e);const r=a.oxw(2);return a.KtG(r.showButton=!1)}),a.YNc(1,P,2,1,"div",20),a.YNc(2,I,3,0,"div",21),a.YNc(3,x,2,0,"button",22),a.qZA()}if(2&t){const e=c.$implicit,l=a.oxw(2);a.xp6(1),a.Q6J("ngIf",e.doctorClinicAvailabilities.length>0),a.xp6(1),a.Q6J("ngIf",0==e.doctorClinicAvailabilities.length),a.xp6(1),a.Q6J("ngIf",l.showButton&&l.currentHover==e)}}function O(t,c){if(1&t&&(a.TgZ(0,"tr")(1,"td",17),a._uU(2),a.qZA(),a.YNc(3,D,4,3,"td",18),a.qZA()),2&t){const e=c.$implicit;a.xp6(2),a.hij(" \u0639\u064a\u0627\u062f\u0629 \u0627\u0644",e.specialityName,""),a.xp6(1),a.Q6J("ngForOf",e.hospitalTable)}}let F=(()=>{class t{service;cdr;dialogService;Cols;Data;lang=localStorage.getItem("language");days=v.n;currentLanguage;showButton=!1;currentHover={};periods=f.bi;selectedDay;constructor(e,l,r){this.service=e,this.cdr=l,this.dialogService=r,this.lang=localStorage.getItem("language"),this.currentLanguage=localStorage.getItem("language")??"ar"}ngOnChanges(e){this.cdr.detectChanges()}currentRole={arabicName:"",englishName:"",roleDescriptionAr:"",roleDescriptionEn:""};ngOnInit(){this.getData()}getData(){this.Data=[],this.cdr.detectChanges();var e=(new p.l).GetUserOrgId();this.service.getHospitalTable(e,v.n[this.selectedDay.id-1].day,(new p.l).GetUserId()).subscribe({next:r=>{this.Data=r.data,console.log(JSON.stringify(r)),this.cdr.detectChanges()},error:()=>{}})}transformData(e){const r=new Map;return e.forEach(s=>{r.has(s.specialityName)||r.set(s.specialityName,{specialityName:s.specialityName,Periods:Array.from({length:4},(A,C)=>({Period:C+1,doctorClinicAvailabilities:[]}))})}),e.forEach(s=>{r.get(s.specialityName).Periods[s.period-1].doctorClinicAvailabilities.push(...s.doctorClinicAvailabilities)}),Array.from(r.values())}ShowAddDoctorToClinicAvaliability(e){console.log(e)}static \u0275fac=function(l){return new(l||t)(a.Y36(h.r9),a.Y36(a.sBO),a.Y36(m.xA))};static \u0275cmp=a.Xpm({type:t,selectors:[["app-hopital-doctor-clinic-availability"]],features:[a._Bn([m.xA]),a.TTD],decls:18,vars:7,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row","m-10"],[1,"mb-10"],["translate","org.AvaliableDays",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange"],[1,"m-10"],["translate","ECOMMERCE.COMMON.SEARCH",1,"btn","btn-success",3,"click"],[1,"col-md-12"],[1,"table","table-bordered"],[2,"text-align","center"],[1,"b-g1",2,"border-radius","0 14px 0 0","text-align","center","vertical-align","middle"],["class","b-g",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"b-g"],[1,"b-g",2,"text-align","center","vertical-align","middle"],["class","position-relative",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"position-relative",3,"mouseenter","mouseleave"],["style"," display: inline-flex;",4,"ngIf"],["style"," text-align: center; vertical-align: middle;",4,"ngIf"],["class","btn btn-sm   btn-active-color-success bg-active-success","style","position: absolute;background-color: #0080004d; border: 1px solid rgba(144, 255, 144, 0.375);  bottom: 0px;  left: 0px;",3,"click",4,"ngIf"],[2,"display","inline-flex"],["class","doctortime",4,"ngFor","ngForOf"],[1,"doctortime"],[2,"color","#36918d","font-size","15px"],[4,"ngIf"],[2,"color","gray","font-size","12px"],[2,"text-align","center","vertical-align","middle"],[1,"btn","btn-sm","btn-active-color-success","bg-active-success",2,"position","absolute","background-color","#0080004d","border","1px solid rgba(144, 255, 144, 0.375)","bottom","0px","left","0px",3,"click"]],template:function(l,r){1&l&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),a._UZ(5,"label",5),a.TgZ(6,"div",6)(7,"p-dropdown",7),a.NdJ("ngModelChange",function(A){return r.selectedDay=A}),a.qZA()(),a.TgZ(8,"div",8)(9,"button",9),a.NdJ("click",function(){return r.getData()}),a.qZA()()(),a.TgZ(10,"div",10)(11,"table",11)(12,"thead",12)(13,"th",13),a._uU(14,"\u0627\u0644\u0639\u064a\u0627\u062f\u0627\u062a "),a.qZA(),a.YNc(15,i,6,2,"th",14),a.qZA(),a.TgZ(16,"tbody"),a.YNc(17,O,4,2,"tr",15),a.qZA()()()()()()()),2&l&&(a.xp6(7),a.Q6J("options",r.days)("ngModel",r.selectedDay)("optionLabel","ar"==r.currentLanguage?"nameAr":"nameEn")("showClear",!1)("placeholder","ar"==r.currentLanguage?"\u0625\u062e\u062a\u0631 \u064a\u0648\u0645":"Choose a day"),a.xp6(8),a.Q6J("ngForOf",r.periods),a.xp6(2),a.Q6J("ngForOf",r.Data))},dependencies:[o.sg,o.O5,u.JJ,u.On,g.Lt,N.Pi,b],styles:[".b-g[_ngcontent-%COMP%]{background-color:#68c4d0}.b-g1[_ngcontent-%COMP%]{background-color:#36d1e2}.doctortime[_ngcontent-%COMP%]{width:auto;height:53px;padding:1px;margin:1px;border-radius:5px;text-align:center;line-height:21px}"]})}return t})();var H=n(3758),S=n(5150),Z=n(3415),M=n(3660),T=n(2427);let J=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=a.oAB({type:t});static \u0275inj=a.cJS({imports:[o.ez,u.u5,Z.m,g.kW,S.Bz.forChild([{path:"",canActivate:[T.o,H.a],component:F}]),N.aw,M.q]})}return t})()}}]);