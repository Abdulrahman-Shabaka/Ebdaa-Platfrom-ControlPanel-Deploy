"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[663],{4442:(C,g,l)=>{l.d(g,{bi:()=>A,h:()=>f,zI:()=>b});var c=l(649);const A=[{id:1,nameAr:"\u0635\u0628\u0627\u062d\u064a\u0629",nameEn:"Morning",period:c.pHY._1,peridesc:"(2:00 - 8:00)"},{id:2,nameAr:"\u0638\u0647\u064a\u0631\u0629",nameEn:"Noon",period:c.pHY._2,peridesc:"(5:00 - 2:00)"},{id:3,nameAr:"\u0645\u0633\u0627\u0626\u064a\u0629",nameEn:"Evening",period:c.pHY._3,peridesc:"(10:00 - 5:00)"},{id:4,nameAr:"\u0644\u064a\u0644\u064a\u0629",nameEn:"Night",period:c.pHY._4,peridesc:"(8:00 - 10:00)"}],f=[{Id:"1",NameAr:"\u0645\u0633\u062a\u0634\u0641\u0649",NameEn:"Hospital"},{Id:"2",NameAr:"\u0645\u0639\u0645\u0644",NameEn:"Lab"},{Id:"3",NameAr:"\u0635\u064a\u062f\u0644\u064a\u0647",NameEn:"Pharmacy"},{Id:"4",NameAr:"\u0625\u0633\u0639\u0627\u0641 \u0648 \u062a\u0645\u0631\u064a\u0636",NameEn:"Nursing And Ambulance"}],b=[{Id:"1",NameAr:"\u0645\u062f\u064a\u0631 \u062e\u0627\u0631\u0642",NameEn:"SuperAdmin"},{Id:"2",NameAr:"\u0645\u062f\u064a\u0631 \u0627\u0644\u0644\u0646\u0638\u0627\u0645",NameEn:"SystemAdmin"},{Id:"3",NameAr:"\u0645\u0624\u0633\u0633\u0629",NameEn:"Organization"},{Id:"4",NameAr:"\u0645\u0648\u0638\u0641",NameEn:"Staff"},{Id:"5",NameAr:"\u0637\u0628\u064a\u0628",NameEn:"Doctor"},{Id:"6",NameAr:"\u0639\u0645\u064a\u0644",NameEn:"Client"}]},2029:(C,g,l)=>{l.d(g,{n:()=>_});var c=l(649);const _=[{id:1,nameAr:"\u0627\u0644\u0633\u0628\u062a",nameEn:"Saturday",day:c.Jc7._1},{id:2,nameAr:"\u0627\u0644\u0623\u062d\u062f",nameEn:"Sunday",day:c.Jc7._2},{id:3,nameAr:"\u0627\u0644\u0625\u062b\u0646\u064a\u0646",nameEn:"Monday",day:c.Jc7._3},{id:4,nameAr:"\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",nameEn:"Tuesday",day:c.Jc7._4},{id:5,nameAr:"\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",nameEn:"Wednesday",day:c.Jc7._5},{id:6,nameAr:"\u0627\u0644\u062e\u0645\u064a\u0633",nameEn:"Thursday",day:c.Jc7._6},{id:7,nameAr:"\u0627\u0644\u062c\u0645\u0639\u0629",nameEn:"Friday",day:c.Jc7._7}]},5663:(C,g,l)=>{l.r(g),l.d(g,{HospitalDoctorClinicAvailabilityModule:()=>G});var c=l(6814),_=l(1356),u=l(7434),A=l(649),v=l(2029),h=l(4442),f=l(1879),x=l(3519),p=l.n(x),t=l(5879),b=l(7304),r=l(6223),N=l(2160),D=l(6663);let E=(()=>{class o{transform(e){const a=e.split(":");return`${a[0]}:${a[1]}`}static \u0275fac=function(a){return new(a||o)};static \u0275pipe=t.Yjl({name:"TimeFromateOnlyMinutes",type:o,pure:!0})}return o})();function T(o,d){if(1&o&&(t.TgZ(0,"th",15),t._UZ(1,"br"),t._uU(2),t._UZ(3,"br"),t._uU(4),t.qZA()),2&o){const e=d.$implicit,a=t.oxw();t.xp6(2),t.hij(" ","ar"==a.lang?e.nameAr:e.nameEn," "),t.xp6(2),t.hij(" ",e.peridesc," ")}}function H(o,d){if(1&o&&(t.ynx(0),t.TgZ(1,"span",27),t._uU(2),t.ALo(3,"TimeFromateOnlyMinutes"),t.ALo(4,"TimeFromateOnlyMinutes"),t.qZA(),t.TgZ(5,"span"),t._uU(6," - "),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.AsE("(",t.lcZ(3,2,e.startAt)," - ",t.lcZ(4,4,e.endAt),")")}}function w(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,n=t.oxw(4);return t.KtG(n.deleteAvailability(i))}),t._uU(1,"-"),t.qZA()}}function Z(o,d){if(1&o&&(t.TgZ(0,"span",27),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij("( ",e.note," )")}}function M(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"span",24),t.NdJ("mouseenter",function(){const n=t.CHM(e).$implicit,s=t.oxw(4);return s.showDeleteButton=!0,t.KtG(s.currentHover2=n)})("mouseleave",function(){t.CHM(e);const i=t.oxw(4);return t.KtG(i.showDeleteButton=!1)}),t.YNc(1,H,7,6,"ng-container",20),t.YNc(2,w,2,0,"button",25),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.YNc(5,Z,2,1,"span",26),t._UZ(6,"span"),t.qZA()}if(2&o){const e=d.$implicit,a=t.oxw(4);t.xp6(1),t.Q6J("ngIf","00:00:00"!=e.startAt&&"00:00:00"!=e.endAt),t.xp6(1),t.Q6J("ngIf",a.showDeleteButton&&a.currentHover2==e),t.xp6(2),t.hij(" ",e.doctorName," "),t.xp6(1),t.Q6J("ngIf",e.note)}}function B(o,d){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,M,7,4,"span",23),t.qZA()),2&o){const e=t.oxw().$implicit,a=t.oxw().$implicit,i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.getAvailabilitiesForPeriod(a.hospitalTable,e.id))}}function P(o,d){1&o&&(t.TgZ(0,"div",29)(1,"span",29),t._uU(2," .. "),t.qZA()())}function F(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,n=t.oxw().$implicit,s=t.oxw();return t.KtG(s.ShowAddDoctorToClinicAvaliability(n,i.id))}),t._uU(1," + "),t.qZA()}}function S(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"td",19),t.NdJ("mouseenter",function(){const n=t.CHM(e).$implicit,s=t.oxw(2);return s.showButton=!0,t.KtG(s.currentHover1=n)})("mouseleave",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.showButton=!1)}),t.YNc(1,B,2,1,"div",20),t.YNc(2,P,3,0,"div",21),t.YNc(3,F,2,0,"button",22),t.qZA()}if(2&o){const e=d.$implicit,a=t.oxw().$implicit,i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.hasAvailability(a.hospitalTable,e.id)),t.xp6(1),t.Q6J("ngIf",!i.hasAvailability(a.hospitalTable,e.id)),t.xp6(1),t.Q6J("ngIf",i.showButton&&i.currentHover==a&&i.currentHover1==e)}}function J(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"tr",16),t.NdJ("mouseenter",function(){const n=t.CHM(e).$implicit,s=t.oxw();return s.showButton=!0,t.KtG(s.currentHover=n)})("mouseleave",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.showButton=!1)}),t.TgZ(1,"td",17),t._uU(2),t.qZA(),t.YNc(3,S,4,3,"td",18),t.qZA()}if(2&o){const e=d.$implicit,a=t.oxw();t.xp6(2),t.hij(" ",e.specialityName,""),t.xp6(1),t.Q6J("ngForOf",a.uniquePeriods)}}let O=(()=>{class o{service;cdr;dialogService;route;Cols;Data;lang=localStorage.getItem("language");days=v.n;currentLanguage;showButton=!1;showDeleteButton=!1;currentHover={};currentHover1={};currentHover2={};periods=h.bi;uniquePeriods=[];selectedDay={id:1,nameAr:"\u0627\u0644\u0633\u0628\u062a",nameEn:"Saturday",day:A.Jc7._1};constructor(e,a,i,n){this.service=e,this.cdr=a,this.dialogService=i,this.route=n,this.lang=localStorage.getItem("language"),this.currentLanguage=localStorage.getItem("language")??"ar"}ngOnChanges(e){this.cdr.detectChanges()}currentRole={arabicName:"",englishName:"",roleDescriptionAr:"",roleDescriptionEn:""};ngOnInit(){this.selectedDay=v.n[0],this.getData(),this.searchHospitalTiming()}extractUniquePeriods(){for(const a of this.Data)for(const i of a.hospitalTable)if(!this.uniquePeriods.find(n=>n.period===i.period)){var e=h.bi.find(n=>n.period===i.period);e.peridesc=i.startAt.slice(0,-3)+" ~  "+i.endAt.slice(0,-3),this.uniquePeriods.push(e)}}getData(){this.Data=[],this.cdr.detectChanges();var e=void 0;this.route.queryParamMap.subscribe(a=>{null==(e=a.get("id"))&&(e=(new u.l).GetUserOrgId()),this.service.getHospitalTable(e,v.n[this.selectedDay.id-1].day,(new u.l).GetUserId()).subscribe({next:n=>{this.Data=n.data.hospitalTableResponses,this.extractUniquePeriods(),this.cdr.detectChanges()},error:()=>{}})})}hasAvailability(e,a){return e.some(n=>n.period==a&&n.doctorClinicAvailabilities.length>0)}getAvailabilitiesForPeriod(e,a){const i=[];for(const n of e)n.period===a&&i.push(...n.doctorClinicAvailabilities);return i}transformData(e){const i=new Map;return e.forEach(n=>{i.has(n.specialityName)||i.set(n.specialityName,{specialityName:n.specialityName,Periods:Array.from({length:4},(s,m)=>({Period:m+1,doctorClinicAvailabilities:[]}))})}),e.forEach(n=>{i.get(n.specialityName).Periods[n.period-1].doctorClinicAvailabilities.push(...n.doctorClinicAvailabilities)}),Array.from(i.values())}ShowAddDoctorToClinicAvaliability(e,a){console.log(e);var i=e.hospitalTable.filter(n=>n.period==a)[0].clinicAvailabilityId??0;if(0==i){let n=this.timingDataAny.filter(s=>s.period==a)[0].id;this.AddClinicAvailability(e.clinicId,n).subscribe(()=>{this.getData();let s={};p().fire({title:"ar"==this.lang?"\u0628\u062f\u0648\u0646 \u0641\u062a\u0631\u0629":"No period",html:"ar"==this.lang?" \u064a\u0631\u062c\u0649 \u0645\u062d\u0627\u0648\u0644\u0629 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0637\u0628\u064a\u0628 \u0628\u0639\u062f \u0627\u0644\u0627\u0646\u062a\u0647\u0627\u0621 <br/>  <b></b> \u064a\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u062a\u0631\u0629 \u0623\u0648\u0644\u0627. .":"We are adding new Avaliability  <b></b> <br/> Please try adding the doctor after Finished.   ",timer:2e3,timerProgressBar:!0,didOpen:()=>{p().showLoading();const m=p().getPopup().querySelector("b");s=setInterval(()=>{m.textContent=`${p().getTimerLeft()}`},100)},willClose:()=>{clearInterval(s)}}).then(m=>{if(m.dismiss===p().DismissReason.timer){var y=this.Data.filter(I=>I.specialityId==e.specialityId&&I.hospitalTable?.filter(Q=>Q.period==a)[0].period==a)[0];this.ShowAddDoctorToClinicAvaliability(y,a)}})})}else this.openDoctorToClinicAvailabilityDialog(e,i)}openDoctorToClinicAvailabilityDialog(e,a){const i=this.dialogService.open(f.t,{data:{clinic:{specialityId:e.specialityId},Availability:{id:a}},header:"ar"==this.lang?"\u0627\u0636\u0627\u0641\u0629 \u0637\u0628\u064a\u0628 \u0644\u0648\u0642\u062a \u0627\u0644\u0639\u064a\u0627\u062f\u0629":"Add Doctor To Clinic Availability",width:"60%",maximizable:!0,resizable:!0,draggable:!0});i.onDestroy.subscribe(n=>{this.getData()}),i.onClose.subscribe(n=>{this.getData()})}timingDataAny;searchHospitalTiming(){let a,e=(new u.l).GetUserId();this.route.queryParamMap.subscribe(i=>{a=i.get("id"),null==a&&(a=(new u.l).GetUserOrgId()),this.service.getHospitalTimings(a,e).subscribe({next:n=>{var s;s=n.data,this.timingDataAny=[];for(let m=0;m<s.length;m++)this.timingDataAny.push(s[m]);this.cdr.detectChanges()},error:()=>{}})})}AddClinicAvailability(e,a){let i=new A.C6P;return i.clinicId=e,i.day=v.n[this.selectedDay.id-1].day,i.hospitalTimingId=a,this.service.addClinicAvailability(i)}deleteAvailability(e){p().fire({title:"ar"==this.lang?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u061f":"Are You Sure ? ",text:"ar"==this.lang?" \u0633\u0648\u0641 \u064a\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0637\u0628\u064a\u0628 \u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0641\u062a\u0631\u0629 \u0627\u0630\u0627 \u0643\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0627\u0636\u063a\u0637 \u062d\u0630\u0641  ":"this will delete doctor from this period and hospital timing if you sure click delete ",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ar"==this.lang?"\u062d\u0630\u0641":"Delete",cancelButtonText:"ar"==this.lang?"\u0625\u0644\u063a\u0627\u0621":"Cancel"}).then(a=>{if(a.isConfirmed){let i=(new u.l).GetUserId();this.service.deleteDoctorClinicAvailability(e.doctorClinicAvailabilityId,i).subscribe({next:n=>{this.getData(),p().fire({title:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641":"Deleted!",text:"ar"==this.lang?"\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0637\u0628\u064a\u0628 \u0628\u0646\u062c\u0627\u062d ":"doctor has been deleted.",icon:"success"})}})}})}static \u0275fac=function(a){return new(a||o)(t.Y36(A.r9S),t.Y36(t.sBO),t.Y36(_.xA),t.Y36(b.gz))};static \u0275cmp=t.Xpm({type:o,selectors:[["app-hopital-doctor-clinic-availability"]],features:[t._Bn([_.xA]),t.TTD],decls:16,vars:7,consts:[[1,"m-3"],["translate","MENU.HospitalDoctorClinicAvailability",2,"font-weight","bold","color","white"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[1,"row","m-10"],[1,"mb-10"],["translate","org.AvaliableDays",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange","onChange"],[1,"col-md-12"],[1,"table","table-bordered"],[2,"text-align","center"],["translate","org.clinics",1,"b-g1","clinics-radius",2,"text-align","center","vertical-align","middle"],["class","b-g",4,"ngFor","ngForOf"],[3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"b-g"],[3,"mouseenter","mouseleave"],[1,"b-g",2,"text-align","center","vertical-align","middle"],["class","position-relative",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"position-relative",3,"mouseenter","mouseleave"],[4,"ngIf"],["style"," text-align: center; vertical-align: middle;",4,"ngIf"],["class","btn btn-sm   btn-active-color-success bg-active-success","style","position: absolute;background-color: #0080004d; border: 1px solid rgba(144, 255, 144, 0.375);  bottom: 0px;  left: 0px;",3,"click",4,"ngIf"],["class","doctortime",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"doctortime",3,"mouseenter","mouseleave"],["class","btn btn-sm  btn-danger","style","border-radius: 18px;padding: 0px 7px;margin: 1px;",3,"click",4,"ngIf"],["style","color: gray; font-size: 12px;",4,"ngIf"],[2,"color","gray","font-size","12px"],[1,"btn","btn-sm","btn-danger",2,"border-radius","18px","padding","0px 7px","margin","1px",3,"click"],[2,"text-align","center","vertical-align","middle"],[1,"btn","btn-sm","btn-active-color-success","bg-active-success",2,"position","absolute","background-color","#0080004d","border","1px solid rgba(144, 255, 144, 0.375)","bottom","0px","left","0px",3,"click"]],template:function(a,i){1&a&&(t.TgZ(0,"span",0),t._UZ(1,"h2",1),t.qZA(),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"label",6),t.TgZ(7,"div",7)(8,"p-dropdown",8),t.NdJ("ngModelChange",function(s){return i.selectedDay=s})("onChange",function(){return i.getData()}),t.qZA()()(),t.TgZ(9,"div",9)(10,"table",10)(11,"thead",11),t._UZ(12,"th",12),t.YNc(13,T,5,2,"th",13),t.qZA(),t.TgZ(14,"tbody"),t.YNc(15,J,4,2,"tr",14),t.qZA()()()()()()),2&a&&(t.xp6(8),t.Q6J("options",i.days)("ngModel",i.selectedDay)("optionLabel","ar"==i.currentLanguage?"nameAr":"nameEn")("showClear",!1)("placeholder","ar"==i.currentLanguage?"\u0625\u062e\u062a\u0631 \u064a\u0648\u0645":"Choose a day"),t.xp6(5),t.Q6J("ngForOf",i.uniquePeriods),t.xp6(2),t.Q6J("ngForOf",i.Data))},dependencies:[c.sg,c.O5,r.JJ,r.On,N.Lt,D.Pi,E],styles:[".b-g[_ngcontent-%COMP%]{background-color:#68c4d0}.b-g1[_ngcontent-%COMP%]{background-color:#36d1e2}.doctortime[_ngcontent-%COMP%]{display:block;background-color:#37d1e269;margin:12px 2px;border-radius:17px;padding:2px 15px;color:#36918d;font-size:15px}"]})}return o})();var Y=l(3758),L=l(3415),$=l(3660),U=l(2427);let G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=t.oAB({type:o});static \u0275inj=t.cJS({imports:[c.ez,r.u5,L.m,N.kW,b.Bz.forChild([{path:"",canActivate:[U.o,Y.a],component:O,data:{animation:"HopitalDoctorClinicAvailabilityComponent"}}]),D.aw,$.q]})}return o})()}}]);