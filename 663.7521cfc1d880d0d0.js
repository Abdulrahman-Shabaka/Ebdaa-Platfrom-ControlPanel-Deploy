"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[663],{4442:(C,m,i)=>{i.d(m,{bi:()=>A,zI:()=>y});var l=i(649);const A=[{id:1,nameAr:"\u0635\u0628\u0627\u062d\u064a\u0629",nameEn:"Morning",period:l.pH._1,peridesc:"(2:00 - 8:00)"},{id:2,nameAr:"\u0638\u0647\u064a\u0631\u0629",nameEn:"Noon",period:l.pH._2,peridesc:"(5:00 - 2:00)"},{id:3,nameAr:"\u0645\u0633\u0627\u0626\u064a\u0629",nameEn:"Evening",period:l.pH._3,peridesc:"(10:00 - 5:00)"},{id:4,nameAr:"\u0644\u064a\u0644\u064a\u0629",nameEn:"Night",period:l.pH._4,peridesc:"(8:00 - 10:00)"}],y=[{Id:"1",NameAr:"\u0645\u062f\u064a\u0631 \u062e\u0627\u0631\u0642",NameEn:"SuperAdmin"},{Id:"2",NameAr:"\u0645\u062f\u064a\u0631 \u0627\u0644\u0644\u0646\u0638\u0627\u0645",NameEn:"SystemAdmin"},{Id:"3",NameAr:"\u0645\u0624\u0633\u0633\u0629",NameEn:"Organization"},{Id:"4",NameAr:"\u0645\u0648\u0638\u0641",NameEn:"Staff"},{Id:"5",NameAr:"\u0637\u0628\u064a\u0628",NameEn:"Doctor"},{Id:"6",NameAr:"\u0639\u0645\u064a\u0644",NameEn:"Client"}]},2029:(C,m,i)=>{i.d(m,{n:()=>p});var l=i(649);const p=[{id:1,nameAr:"\u0627\u0644\u0623\u062d\u062f",nameEn:"Sunday",day:l.Jc._1},{id:2,nameAr:"\u0627\u0644\u0625\u062b\u0646\u064a\u0646",nameEn:"Monday",day:l.Jc._2},{id:3,nameAr:"\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",nameEn:"Tuesday",day:l.Jc._3},{id:4,nameAr:"\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",nameEn:"Wednesday",day:l.Jc._4},{id:5,nameAr:"\u0627\u0644\u062e\u0645\u064a\u0633",nameEn:"Thursday",day:l.Jc._5},{id:6,nameAr:"\u0627\u0644\u062c\u0645\u0639\u0629",nameEn:"Friday",day:l.Jc._6},{id:7,nameAr:"\u0627\u0644\u0633\u0628\u062a",nameEn:"Saturday",day:l.Jc._7}]},5663:(C,m,i)=>{i.r(m),i.d(m,{HospitalDoctorClinicAvailabilityModule:()=>J});var l=i(6814),p=i(1356),g=i(7434),A=i(2029),h=i(4442),a=i(5879),E=i(649),u=i(6223),v=i(2160),N=i(6663);let y=(()=>{class e{transform(t){const r=t.split(":");return`${r[0]}:${r[1]}`}static \u0275fac=function(r){return new(r||e)};static \u0275pipe=a.Yjl({name:"TimeFromateOnlyMinutes",type:e,pure:!0})}return e})();function n(e,d){if(1&e&&(a.TgZ(0,"th",16),a._UZ(1,"br"),a._uU(2),a._UZ(3,"br"),a._uU(4),a.qZA()),2&e){const t=d.$implicit,r=a.oxw();a.xp6(2),a.hij(" ","ar"==r.lang?t.nameAr:t.nameEn," "),a.xp6(2),a.hij(" ",t.peridesc," ")}}function _(e,d){if(1&e&&(a.ynx(0),a.TgZ(1,"span",24),a._uU(2),a.ALo(3,"TimeFromateOnlyMinutes"),a.ALo(4,"TimeFromateOnlyMinutes"),a.qZA(),a.BQk()),2&e){const t=a.oxw().$implicit;a.xp6(2),a.AsE("(",a.lcZ(3,2,t.startAt)," - ",a.lcZ(4,4,t.endAt),")")}}function b(e,d){if(1&e&&(a.TgZ(0,"span",23),a.YNc(1,_,5,6,"ng-container",20),a.TgZ(2,"span"),a._uU(3),a.qZA()()),2&e){const t=d.$implicit;a.xp6(1),a.Q6J("ngIf","00:00:00"!=t.startAt&&"00:00:00"!=t.endAt),a.xp6(2),a.hij(" ",t.doctorName," ")}}function D(e,d){if(1&e&&(a.TgZ(0,"div"),a.YNc(1,b,4,2,"span",22),a.qZA()),2&e){const t=a.oxw().$implicit;a.xp6(1),a.Q6J("ngForOf",t.doctorClinicAvailabilities)}}function I(e,d){1&e&&(a.TgZ(0,"div",25)(1,"span",25),a._uU(2," .. "),a.qZA()())}function x(e,d){if(1&e){const t=a.EpF();a.TgZ(0,"td",19),a.NdJ("mouseenter",function(){const c=a.CHM(t).$implicit,s=a.oxw(2);return s.showButton=!0,a.KtG(s.currentHover=c)})("mouseleave",function(){a.CHM(t);const o=a.oxw(2);return a.KtG(o.showButton=!1)}),a.YNc(1,D,2,1,"div",20),a.YNc(2,I,3,0,"div",21),a.qZA()}if(2&e){const t=d.$implicit;a.xp6(1),a.Q6J("ngIf",t.doctorClinicAvailabilities.length>0),a.xp6(1),a.Q6J("ngIf",0==t.doctorClinicAvailabilities.length)}}function H(e,d){if(1&e&&(a.TgZ(0,"tr")(1,"td",17),a._uU(2),a.qZA(),a.YNc(3,x,3,2,"td",18),a.qZA()),2&e){const t=d.$implicit;a.xp6(2),a.hij(" ",t.specialityName,""),a.xp6(1),a.Q6J("ngForOf",t.hospitalTable)}}let Z=(()=>{class e{service;cdr;dialogService;Cols;Data;lang=localStorage.getItem("language");days=A.n;currentLanguage;showButton=!1;currentHover={};periods=h.bi;selectedDay;constructor(t,r,o){this.service=t,this.cdr=r,this.dialogService=o,this.lang=localStorage.getItem("language"),this.currentLanguage=localStorage.getItem("language")??"ar"}ngOnChanges(t){this.cdr.detectChanges()}currentRole={arabicName:"",englishName:"",roleDescriptionAr:"",roleDescriptionEn:""};ngOnInit(){this.getData()}getData(){this.Data=[],this.cdr.detectChanges();var t=(new g.l).GetUserOrgId();this.service.getHospitalTable(t,A.n[this.selectedDay.id-1].day,(new g.l).GetUserId()).subscribe({next:o=>{this.Data=o.data,console.log(JSON.stringify(o)),this.cdr.detectChanges()},error:()=>{}})}transformData(t){const o=new Map;return t.forEach(c=>{o.has(c.specialityName)||o.set(c.specialityName,{specialityName:c.specialityName,Periods:Array.from({length:4},(s,f)=>({Period:f+1,doctorClinicAvailabilities:[]}))})}),t.forEach(c=>{o.get(c.specialityName).Periods[c.period-1].doctorClinicAvailabilities.push(...c.doctorClinicAvailabilities)}),Array.from(o.values())}ShowAddDoctorToClinicAvaliability(t){console.log(t)}static \u0275fac=function(r){return new(r||e)(a.Y36(E.r9),a.Y36(a.sBO),a.Y36(p.xA))};static \u0275cmp=a.Xpm({type:e,selectors:[["app-hopital-doctor-clinic-availability"]],features:[a._Bn([p.xA]),a.TTD],decls:17,vars:7,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row","m-10"],[1,"mb-10"],["translate","org.AvaliableDays",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange"],[1,"m-10"],["translate","ECOMMERCE.COMMON.SEARCH",1,"btn","btn-success",3,"click"],[1,"col-md-12"],[1,"table","table-bordered"],[2,"text-align","center"],["translate","org.clinics",1,"b-g1","clinics-radius",2,"text-align","center","vertical-align","middle"],["class","b-g",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"b-g"],[1,"b-g",2,"text-align","center","vertical-align","middle"],["class","position-relative",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"position-relative",3,"mouseenter","mouseleave"],[4,"ngIf"],["style"," text-align: center; vertical-align: middle;",4,"ngIf"],["class","doctortime",4,"ngFor","ngForOf"],[1,"doctortime"],[2,"color","gray","font-size","12px"],[2,"text-align","center","vertical-align","middle"]],template:function(r,o){1&r&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),a._UZ(5,"label",5),a.TgZ(6,"div",6)(7,"p-dropdown",7),a.NdJ("ngModelChange",function(s){return o.selectedDay=s}),a.qZA()(),a.TgZ(8,"div",8)(9,"button",9),a.NdJ("click",function(){return o.getData()}),a.qZA()()(),a.TgZ(10,"div",10)(11,"table",11)(12,"thead",12),a._UZ(13,"th",13),a.YNc(14,n,5,2,"th",14),a.qZA(),a.TgZ(15,"tbody"),a.YNc(16,H,4,2,"tr",15),a.qZA()()()()()()()),2&r&&(a.xp6(7),a.Q6J("options",o.days)("ngModel",o.selectedDay)("optionLabel","ar"==o.currentLanguage?"nameAr":"nameEn")("showClear",!1)("placeholder","ar"==o.currentLanguage?"\u0625\u062e\u062a\u0631 \u064a\u0648\u0645":"Choose a day"),a.xp6(7),a.Q6J("ngForOf",o.periods),a.xp6(2),a.Q6J("ngForOf",o.Data))},dependencies:[l.sg,l.O5,u.JJ,u.On,v.Lt,N.Pi,y],styles:[".b-g[_ngcontent-%COMP%]{background-color:#68c4d0}.b-g1[_ngcontent-%COMP%]{background-color:#36d1e2}.doctortime[_ngcontent-%COMP%]{display:block;background-color:#37d1e269;margin:12px 2px;border-radius:17px;padding:2px 15px;color:#36918d;font-size:15px}"]})}return e})();var M=i(3758),O=i(7304),T=i(3415),S=i(3660),F=i(2427);let J=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=a.oAB({type:e});static \u0275inj=a.cJS({imports:[l.ez,u.u5,T.m,v.kW,O.Bz.forChild([{path:"",canActivate:[F.o,M.a],component:Z}]),N.aw,S.q]})}return e})()}}]);