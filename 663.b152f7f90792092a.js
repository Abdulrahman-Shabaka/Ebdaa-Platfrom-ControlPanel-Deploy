"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[663],{4442:(N,_,l)=>{l.d(_,{W2:()=>h,bi:()=>A,h:()=>C,zI:()=>b});var c=l(649);const A=[{id:1,nameAr:"\u0635\u0628\u0627\u062d\u064a\u0629",nameEn:"Morning",period:c.pHY._1,peridesc:"(2:00 - 8:00)"},{id:2,nameAr:"\u0638\u0647\u064a\u0631\u0629",nameEn:"Noon",period:c.pHY._2,peridesc:"(5:00 - 2:00)"},{id:3,nameAr:"\u0645\u0633\u0627\u0626\u064a\u0629",nameEn:"Evening",period:c.pHY._3,peridesc:"(10:00 - 5:00)"},{id:4,nameAr:"\u0644\u064a\u0644\u064a\u0629",nameEn:"Night",period:c.pHY._4,peridesc:"(8:00 - 10:00)"}],C=[{Id:"1",NameAr:"\u0645\u0633\u062a\u0634\u0641\u0649",NameEn:"Hospital"},{Id:"2",NameAr:"\u0645\u062e\u062a\u0628\u0631",NameEn:"Lab"},{Id:"3",NameAr:"\u0635\u064a\u062f\u0644\u064a\u0647",NameEn:"Pharmacy"},{Id:"4",NameAr:"\u0625\u0633\u0639\u0627\u0641 \u0648 \u062a\u0645\u0631\u064a\u0636",NameEn:"Nursing And Ambulance"},{Id:"5",NameAr:"\u0634\u0631\u0643\u0629 \u0637\u0628\u064a\u0629",NameEn:"Medical Company "}],b=[{Id:"3",NameAr:"\u0645\u0624\u0633\u0633\u0629",NameEn:"Organization"},{Id:"5",NameAr:"\u0637\u0628\u064a\u0628",NameEn:"Doctor"},{Id:"6",NameAr:"\u0632\u0627\u0626\u0631",NameEn:"Client"}],h=[{Id:1,NameAr:"\u062f",NameEn:"Dr"},{Id:2,NameAr:"\u0623.\u062f",NameEn:"Prof"}]},2029:(N,_,l)=>{l.d(_,{n:()=>g});var c=l(649);const g=[{id:1,nameAr:"\u0627\u0644\u0633\u0628\u062a",nameEn:"Saturday",day:c.Jc7._1},{id:2,nameAr:"\u0627\u0644\u0623\u062d\u062f",nameEn:"Sunday",day:c.Jc7._2},{id:3,nameAr:"\u0627\u0644\u0625\u062b\u0646\u064a\u0646",nameEn:"Monday",day:c.Jc7._3},{id:4,nameAr:"\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",nameEn:"Tuesday",day:c.Jc7._4},{id:5,nameAr:"\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",nameEn:"Wednesday",day:c.Jc7._5},{id:6,nameAr:"\u0627\u0644\u062e\u0645\u064a\u0633",nameEn:"Thursday",day:c.Jc7._6},{id:7,nameAr:"\u0627\u0644\u062c\u0645\u0639\u0629",nameEn:"Friday",day:c.Jc7._7}]},5663:(N,_,l)=>{l.r(_),l.d(_,{HospitalDoctorClinicAvailabilityModule:()=>k});var c=l(6814),g=l(5118),u=l(7434),A=l(649),v=l(2029),y=l(4442),C=l(1879),D=l(3519),p=l.n(D),t=l(5879),b=l(7304),f=l(6223),h=l(2160),r=l(6663);let E=(()=>{class o{transform(i){const a=i.split(":");return`${a[0]}:${a[1]}`}static \u0275fac=function(a){return new(a||o)};static \u0275pipe=t.Yjl({name:"TimeFromateOnlyMinutes",type:o,pure:!0})}return o})();function T(o,d){if(1&o&&(t.TgZ(0,"th",15),t._UZ(1,"br"),t._uU(2),t._UZ(3,"br"),t._uU(4),t.qZA()),2&o){const i=d.$implicit,a=t.oxw();t.xp6(2),t.hij(" ","ar"===a.lang?i.nameAr:i.nameEn," "),t.xp6(2),t.hij(" ",i.peridesc," ")}}function H(o,d){if(1&o&&(t.ynx(0),t.TgZ(1,"span",30),t._uU(2),t.ALo(3,"TimeFromateOnlyMinutes"),t.ALo(4,"TimeFromateOnlyMinutes"),t.qZA(),t.TgZ(5,"span"),t._uU(6," - "),t.qZA(),t.BQk()),2&o){const i=t.oxw().$implicit;t.xp6(2),t.AsE("(",t.lcZ(3,2,i.startAt)," - ",t.lcZ(4,4,i.endAt),")")}}function w(o,d){if(1&o){const i=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(i);const e=t.oxw().$implicit,n=t.oxw(4);return t.KtG(n.deleteAvailability(e))}),t._uU(1,"-"),t.qZA()}}function Z(o,d){if(1&o&&(t.TgZ(0,"span",30),t._uU(1),t.qZA()),2&o){const i=t.oxw().$implicit;t.xp6(1),t.hij("( ",i.note," )")}}function M(o,d){if(1&o){const i=t.EpF();t.TgZ(0,"i",32),t.NdJ("click",function(){t.CHM(i);const e=t.oxw().$implicit,n=t.oxw(4);return t.KtG(n.setImportant(e,!1))}),t.qZA()}}function B(o,d){if(1&o){const i=t.EpF();t.TgZ(0,"i",33),t.NdJ("click",function(){t.CHM(i);const e=t.oxw().$implicit,n=t.oxw(4);return t.KtG(n.setImportant(e,!0))}),t.qZA()}}function P(o,d){if(1&o){const i=t.EpF();t.TgZ(0,"span",24),t.NdJ("mouseenter",function(){const n=t.CHM(i).$implicit,s=t.oxw(4);return s.showDeleteButton=!0,t.KtG(s.currentHover2=n)})("mouseleave",function(){t.CHM(i);const e=t.oxw(4);return t.KtG(e.showDeleteButton=!1)}),t.TgZ(1,"span",25),t.YNc(2,H,7,6,"ng-container",20),t.YNc(3,w,2,0,"button",26),t.TgZ(4,"span"),t._uU(5),t.qZA(),t.YNc(6,Z,2,1,"span",27),t._UZ(7,"span"),t.TgZ(8,"span"),t.YNc(9,M,1,0,"i",28),t.YNc(10,B,1,0,"i",29),t.qZA()()()}if(2&o){const i=d.$implicit,a=t.oxw(4);t.xp6(2),t.Q6J("ngIf","00:00:00"!==i.startAt&&"00:00:00"!==i.endAt),t.xp6(1),t.Q6J("ngIf",a.showDeleteButton&&a.currentHover2===i),t.xp6(2),t.hij(" ",i.doctorName," "),t.xp6(1),t.Q6J("ngIf",i.note),t.xp6(3),t.Q6J("ngIf",!i.isImportant),t.xp6(1),t.Q6J("ngIf",i.isImportant)}}function F(o,d){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,P,11,6,"span",23),t.qZA()),2&o){const i=t.oxw().$implicit,a=t.oxw().$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.getAvailabilitiesForPeriod(a.hospitalTable,i.id))}}function J(o,d){1&o&&(t.TgZ(0,"div",34)(1,"span",34),t._uU(2," .. "),t.qZA()())}function S(o,d){if(1&o){const i=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(i);const e=t.oxw().$implicit,n=t.oxw().$implicit,s=t.oxw();return t.KtG(s.ShowAddDoctorToClinicAvaliability(n,e.id))}),t._uU(1," + "),t.qZA()}}function O(o,d){if(1&o){const i=t.EpF();t.TgZ(0,"td",19),t.NdJ("mouseenter",function(){const n=t.CHM(i).$implicit,s=t.oxw(2);return s.showButton=!0,t.KtG(s.currentHover1=n)})("mouseleave",function(){t.CHM(i);const e=t.oxw(2);return t.KtG(e.showButton=!1)}),t.YNc(1,F,2,1,"div",20),t.YNc(2,J,3,0,"div",21),t.YNc(3,S,2,0,"button",22),t.qZA()}if(2&o){const i=d.$implicit,a=t.oxw().$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.hasAvailability(a.hospitalTable,i.id)),t.xp6(1),t.Q6J("ngIf",!e.hasAvailability(a.hospitalTable,i.id)),t.xp6(1),t.Q6J("ngIf",e.showButton&&e.currentHover===a&&e.currentHover1===i)}}function Y(o,d){if(1&o){const i=t.EpF();t.TgZ(0,"tr",16),t.NdJ("mouseenter",function(){const n=t.CHM(i).$implicit,s=t.oxw();return s.showButton=!0,t.KtG(s.currentHover=n)})("mouseleave",function(){t.CHM(i);const e=t.oxw();return t.KtG(e.showButton=!1)}),t.TgZ(1,"td",17),t._uU(2),t.qZA(),t.YNc(3,O,4,3,"td",18),t.qZA()}if(2&o){const i=d.$implicit,a=t.oxw();t.xp6(2),t.hij(" ",i.specialityName,""),t.xp6(1),t.Q6J("ngForOf",a.uniquePeriods)}}let $=(()=>{class o{service;cdr;dialogService;route;Cols;Data;lang=localStorage.getItem("language");days=v.n;currentLanguage;showButton=!1;showDeleteButton=!1;currentHover={};currentHover1={};currentHover2={};periods=y.bi;uniquePeriods=[];selectedDay={id:1,nameAr:"\u0627\u0644\u0633\u0628\u062a",nameEn:"Saturday",day:A.Jc7._1};constructor(i,a,e,n){this.service=i,this.cdr=a,this.dialogService=e,this.route=n,this.lang=localStorage.getItem("language"),this.currentLanguage=localStorage.getItem("language")??"ar"}ngOnChanges(i){this.cdr.detectChanges()}currentRole={arabicName:"",englishName:"",roleDescriptionAr:"",roleDescriptionEn:""};ngOnInit(){this.selectedDay=v.n[0],this.getData(),this.searchHospitalTiming()}extractUniquePeriods(){for(const a of this.Data)for(const e of a.hospitalTable)if(!this.uniquePeriods.find(n=>n.period===e.period)){var i=y.bi.find(n=>n.period===e.period);i.peridesc=e.startAt.slice(0,-3)+" ~  "+e.endAt.slice(0,-3),this.uniquePeriods.push(i)}}getData(){this.Data=[],this.cdr.detectChanges();var i=void 0;this.route.queryParamMap.subscribe(a=>{null==(i=a.get("id"))&&(i=(new u.l).GetUserOrgId()),this.service.getHospitalTable(i,v.n[this.selectedDay.id-1].day,(new u.l).GetUserId(),void 0).subscribe({next:n=>{this.Data=n.data.hospitalTableResponses,this.extractUniquePeriods(),this.cdr.detectChanges()},error:()=>{}})})}hasAvailability(i,a){return i.some(n=>n.period==a&&n.doctorClinicAvailabilities.length>0)}getAvailabilitiesForPeriod(i,a){const e=[];for(const n of i)n.period===a&&e.push(...n.doctorClinicAvailabilities);return e}transformData(i){const e=new Map;return i.forEach(n=>{e.has(n.specialityName)||e.set(n.specialityName,{specialityName:n.specialityName,Periods:Array.from({length:4},(s,m)=>({Period:m+1,doctorClinicAvailabilities:[]}))})}),i.forEach(n=>{e.get(n.specialityName).Periods[n.period-1].doctorClinicAvailabilities.push(...n.doctorClinicAvailabilities)}),Array.from(e.values())}ShowAddDoctorToClinicAvaliability(i,a){var e=i.hospitalTable.filter(n=>n.period==a)[0].clinicAvailabilityId??0;if(0==e){let n=this.timingDataAny.filter(s=>s.period==a)[0].id;this.AddClinicAvailability(i.clinicId,n).subscribe(()=>{this.getData();let s={};p().fire({title:"ar"==this.lang?"\u0628\u062f\u0648\u0646 \u0641\u062a\u0631\u0629":"No period",html:"ar"==this.lang?" \u064a\u0631\u062c\u0649 \u0645\u062d\u0627\u0648\u0644\u0629 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0637\u0628\u064a\u0628 \u0628\u0639\u062f \u0627\u0644\u0627\u0646\u062a\u0647\u0627\u0621 <br/>  <b></b> \u064a\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u062a\u0631\u0629 \u0623\u0648\u0644\u0627. .":"We are adding new Avaliability  <b></b> <br/> Please try adding the doctor after Finished.   ",timer:2e3,timerProgressBar:!0,didOpen:()=>{p().showLoading();const m=p().getPopup().querySelector("b");s=setInterval(()=>{m.textContent=`${p().getTimerLeft()}`},100)},willClose:()=>{clearInterval(s)}}).then(m=>{if(m.dismiss===p().DismissReason.timer){var x=this.Data.filter(I=>I.specialityId==i.specialityId&&I.hospitalTable?.filter(Q=>Q.period==a)[0].period==a)[0];this.ShowAddDoctorToClinicAvaliability(x,a)}})})}else this.openDoctorToClinicAvailabilityDialog(i,e)}openDoctorToClinicAvailabilityDialog(i,a){const e=this.dialogService.open(C.t,{data:{clinic:{specialityId:i.specialityId},Availability:{id:a}},header:"ar"==this.lang?"\u0627\u0636\u0627\u0641\u0629 \u0637\u0628\u064a\u0628 \u0644\u0648\u0642\u062a \u0627\u0644\u0639\u064a\u0627\u062f\u0629":"Add Doctor To Clinic Availability",width:"60%",maximizable:!0,resizable:!0,draggable:!0,autoZIndex:!0,baseZIndex:9999999999});e.onDestroy.subscribe(n=>{this.getData()}),e.onClose.subscribe(n=>{this.getData()})}timingDataAny;searchHospitalTiming(){let a,i=(new u.l).GetUserId();this.route.queryParamMap.subscribe(e=>{a=e.get("id"),null==a&&(a=(new u.l).GetUserOrgId()),this.service.getHospitalTimings(a,i,void 0).subscribe({next:n=>{var s;s=n.data,this.timingDataAny=[];for(let m=0;m<s.length;m++)this.timingDataAny.push(s[m]);this.cdr.detectChanges()},error:()=>{}})})}AddClinicAvailability(i,a){let e=new A.C6P;return e.clinicId=i,e.days=[],e.days.push(v.n[this.selectedDay.id-1].day),e.hospitalTimingIds=[],e.hospitalTimingIds.push(a),this.service.addClinicAvailability(e)}setImportant(i,a){}deleteAvailability(i){p().fire({title:"ar"==this.lang?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u061f":"Are You Sure ? ",text:"ar"==this.lang?" \u0633\u0648\u0641 \u064a\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0637\u0628\u064a\u0628 \u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0641\u062a\u0631\u0629 \u0627\u0630\u0627 \u0643\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0627\u0636\u063a\u0637 \u062d\u0630\u0641  ":"this will delete doctor from this period and hospital timing if you sure click delete ",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ar"==this.lang?"\u062d\u0630\u0641":"Delete",cancelButtonText:"ar"==this.lang?"\u0625\u0644\u063a\u0627\u0621":"Cancel"}).then(a=>{if(a.isConfirmed){let e=(new u.l).GetUserId();this.service.deleteDoctorClinicAvailability(i.doctorClinicAvailabilityId,e,void 0).subscribe({next:n=>{this.getData(),p().fire({title:"ar"==this.lang?"\u062a\u0645 \u0627\u0644\u062d\u0630\u0641":"Deleted!",text:"ar"==this.lang?"\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0637\u0628\u064a\u0628 \u0628\u0646\u062c\u0627\u062d ":"doctor has been deleted.",icon:"success"})}})}})}static \u0275fac=function(a){return new(a||o)(t.Y36(A.r9S),t.Y36(t.sBO),t.Y36(g.xA),t.Y36(b.gz))};static \u0275cmp=t.Xpm({type:o,selectors:[["app-hopital-doctor-clinic-availability"]],features:[t._Bn([g.xA]),t.TTD],decls:16,vars:7,consts:[[1,"m-3"],["translate","MENU.HospitalDoctorClinicAvailability",2,"font-weight","bold","color","white"],["id","kt_timeline_widget_2_card",1,"card"],[1,"card-body"],[1,"row","m-10"],[1,"mb-10"],["translate","org.AvaliableDays",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng",3,"options","ngModel","optionLabel","showClear","placeholder","ngModelChange","onChange"],[1,"col-md-12"],[1,"table","table-bordered"],[2,"text-align","center"],["translate","org.clinics",1,"b-g1","clinics-radius",2,"text-align","center","vertical-align","middle"],["class","b-g",4,"ngFor","ngForOf"],[3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"b-g"],[3,"mouseenter","mouseleave"],[1,"b-g",2,"text-align","center","vertical-align","middle"],["class","position-relative",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"position-relative",3,"mouseenter","mouseleave"],[4,"ngIf"],["style"," text-align: center; vertical-align: middle;",4,"ngIf"],["class","btn btn-sm   btn-active-color-success bg-active-success","style","position: absolute;background-color: #0080004d; border: 1px solid rgba(144, 255, 144, 0.375);  bottom: 0px;  left: 0px;",3,"click",4,"ngIf"],["class","doctortime",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"doctortime",3,"mouseenter","mouseleave"],[2,"display","flex","justify-content","space-between"],["class","btn btn-sm  btn-danger","style","border-radius: 18px;padding: 0px 7px;margin: 1px;",3,"click",4,"ngIf"],["style","color: gray; font-size: 12px;",4,"ngIf"],["class","bi bi-star",3,"click",4,"ngIf"],["class","bi bi-star-fill","style","color: gold;",3,"click",4,"ngIf"],[2,"color","gray","font-size","12px"],[1,"btn","btn-sm","btn-danger",2,"border-radius","18px","padding","0px 7px","margin","1px",3,"click"],[1,"bi","bi-star",3,"click"],[1,"bi","bi-star-fill",2,"color","gold",3,"click"],[2,"text-align","center","vertical-align","middle"],[1,"btn","btn-sm","btn-active-color-success","bg-active-success",2,"position","absolute","background-color","#0080004d","border","1px solid rgba(144, 255, 144, 0.375)","bottom","0px","left","0px",3,"click"]],template:function(a,e){1&a&&(t.TgZ(0,"span",0),t._UZ(1,"h2",1),t.qZA(),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"label",6),t.TgZ(7,"div",7)(8,"p-dropdown",8),t.NdJ("ngModelChange",function(s){return e.selectedDay=s})("onChange",function(){return e.getData()}),t.qZA()()(),t.TgZ(9,"div",9)(10,"table",10)(11,"thead",11),t._UZ(12,"th",12),t.YNc(13,T,5,2,"th",13),t.qZA(),t.TgZ(14,"tbody"),t.YNc(15,Y,4,2,"tr",14),t.qZA()()()()()()),2&a&&(t.xp6(8),t.Q6J("options",e.days)("ngModel",e.selectedDay)("optionLabel","ar"===e.currentLanguage?"nameAr":"nameEn")("showClear",!1)("placeholder","ar"===e.currentLanguage?"\u0625\u062e\u062a\u0631 \u064a\u0648\u0645":"Choose a day"),t.xp6(5),t.Q6J("ngForOf",e.uniquePeriods),t.xp6(2),t.Q6J("ngForOf",e.Data))},dependencies:[c.sg,c.O5,f.JJ,f.On,h.Lt,r.Pi,E],styles:[".b-g[_ngcontent-%COMP%]{background-color:#68c4d0}.b-g1[_ngcontent-%COMP%]{background-color:#36d1e2}.doctortime[_ngcontent-%COMP%]{display:block;background-color:#37d1e269;margin:12px 2px;border-radius:17px;padding:2px 15px;color:#36918d;font-size:15px}"]})}return o})();var L=l(8524),U=l(3660),G=l(2427);let k=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=t.oAB({type:o});static \u0275inj=t.cJS({imports:[c.ez,f.u5,L.m,h.kW,b.Bz.forChild([{path:"",canActivate:[G.o],component:$,data:{animation:"HopitalDoctorClinicAvailabilityComponent"}}]),r.aw,U.q]})}return o})()}}]);