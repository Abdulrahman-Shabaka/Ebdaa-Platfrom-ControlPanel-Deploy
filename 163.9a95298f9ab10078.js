"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[163],{2427:(R,u,a)=>{a.d(u,{o:()=>d});var r=a(7234);const P=[{PageId:1,PagePermission:r.G.SuperAdmin,FullPageUrl:"/dashboard"},{PageId:2,PagePermission:r.G.SuperAdmin,FullPageUrl:"/Address"},{PageId:3,PagePermission:r.G.SuperAdmin,FullPageUrl:"/Speciality"},{PageId:4,PagePermission:r.G.SuperAdmin,FullPageUrl:"/Role"},{PageId:5,PagePermission:r.G.SuperAdmin,FullPageUrl:"/Exam/ExamList"},{PageId:6,PagePermission:r.G.SuperAdmin,FullPageUrl:"/Exam/ExamCategoryList"},{PageId:7,PagePermission:r.G.SuperAdmin,FullPageUrl:"/Services/ServiceList"},{PageId:8,PagePermission:r.G.SuperAdmin,FullPageUrl:"/User/UserList"},{PageId:9,PagePermission:r.G.SuperAdmin,FullPageUrl:"/ManageUsers/users"},{PageId:10,PagePermission:r.G.SuperAdmin,FullPageUrl:"/ManageOrganizations/Organizations"},{PageId:11,PagePermission:r.G.SuperAdmin,FullPageUrl:"/Sponsors/Sponsores"},{PageId:12,PagePermission:r.G.SuperAdmin,FullPageUrl:"/HospitalDoctorClinicAvailability"},{PageId:107,PagePermission:r.G.Organization,FullPageUrl:"/HospitalDoctorClinicAvailability"},{PageId:108,PagePermission:r.G.Organization,FullPageUrl:"/Organization/ClinicList"},{PageId:109,PagePermission:r.G.Organization,FullPageUrl:"/Organization/HospitalTimingList"},{PageId:110,PagePermission:r.G.Organization,FullPageUrl:"/Organization/EditOrganization"},{PageId:111,PagePermission:r.G.Organization,FullPageUrl:"/Organization/OrganizationLaboratory"},{PageId:112,PagePermission:r.G.Organization,FullPageUrl:"/Organization/OrganizationServices"}];var c=a(5879),e=a(6901);let d=(()=>{class s{permissionService;constructor(m){this.permissionService=m}canActivate(m,l){if("/"!==l.url){l.url.includes("?")&&(l.url=l.url.split("?")[0]);let h=P.find(v=>v.FullPageUrl==l.url);return this.permissionService.isGranted(h?.PagePermission)}return!0}static \u0275fac=function(l){return new(l||s)(c.LFG(e.v))};static \u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},163:(R,u,a)=>{a.r(u),a.d(u,{RoleModule:()=>C});var r=a(6814),P=a(649),c=a(7860),e=a(5879),d=a(6223),s=a(4361),A=a(6663);let m=(()=>{class o{service;cdr;Cols;Data;lang=localStorage.getItem("language");constructor(n,t){this.service=n,this.cdr=t,this.lang=localStorage.getItem("language"),this.Cols=[c.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"role_Name_Ar":"role_Name_En",header:"ar"==this.lang?"\u0627\u0644\u0623\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064a ":"English Name",type:"text"}),c.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"ar"==this.lang?"role_Description_Ar":"role_Description_En",header:"ar"==this.lang?"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064a ":"English Description",type:"text"})]}ngOnChanges(n){this.cdr.detectChanges()}currentRole={arabicName:"",englishName:"",roleDescriptionAr:"",roleDescriptionEn:""};ngOnInit(){this.searchRole()}searchRole(){this.service.searchRole("",!1,0,1,void 0).subscribe({next:n=>{this.Data=n.data.items,this.cdr.detectChanges()},error:()=>{}})}AddRole(){let n=new P.wNl;n.roleNameAr=this.currentRole.arabicName,n.roleNameEn=this.currentRole.englishName,n.roleDescriptionAr=this.currentRole.roleDescriptionAr,n.roleDescriptionEn=this.currentRole.roleDescriptionEn,this.service.newRole(n).subscribe({next:t=>{this.searchRole(),this.currentRole.arabicName="",this.currentRole.englishName="",this.currentRole.roleDescriptionAr="",this.currentRole.roleDescriptionEn=""}})}static \u0275fac=function(t){return new(t||o)(e.Y36(P.r9S),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:o,selectors:[["app-Role"]],features:[e.TTD],decls:22,vars:11,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","SHARED.ArabicName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","SHARED.ArabicDesc",1,"form-label"],["translate","SHARED.EnglishName",1,"form-label"],["translate","SHARED.EnglishDesc",1,"form-label"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"app-shared-datatable",5),e.qZA(),e.TgZ(6,"div",6)(7,"div",7)(8,"div",8),e._UZ(9,"label",9),e.TgZ(10,"input",10),e.NdJ("ngModelChange",function(g){return i.currentRole.arabicName=g}),e.qZA()(),e.TgZ(11,"div",8),e._UZ(12,"label",11),e.TgZ(13,"input",10),e.NdJ("ngModelChange",function(g){return i.currentRole.roleDescriptionAr=g}),e.qZA()(),e.TgZ(14,"div",8),e._UZ(15,"label",12),e.TgZ(16,"input",10),e.NdJ("ngModelChange",function(g){return i.currentRole.englishName=g}),e.qZA()(),e.TgZ(17,"div",8),e._UZ(18,"label",13),e.TgZ(19,"input",10),e.NdJ("ngModelChange",function(g){return i.currentRole.roleDescriptionEn=g}),e.qZA()(),e.TgZ(20,"div",14)(21,"button",15),e.NdJ("click",function(){return i.AddRole()}),e.qZA()()()()()()()()),2&t&&(e.xp6(5),e.Q6J("cols",i.Cols)("rowsPageNumbers",10)("pagination",!0)("scrollable",!1)("data",i.Data)("chooseColomns",!0)("SecondBtn",!1),e.xp6(5),e.Q6J("ngModel",i.currentRole.arabicName),e.xp6(3),e.Q6J("ngModel",i.currentRole.roleDescriptionAr),e.xp6(3),e.Q6J("ngModel",i.currentRole.englishName),e.xp6(3),e.Q6J("ngModel",i.currentRole.roleDescriptionEn))},dependencies:[d.Fj,d.JJ,d.On,s.G,A.Pi]})}return o})();var l=a(7304),h=a(3660),f=a(3415),v=a(2427),S=a(3758);let C=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=e.oAB({type:o});static \u0275inj=e.cJS({imports:[r.ez,d.u5,f.m,l.Bz.forChild([{path:"",canActivate:[v.o,S.a],component:m,data:{animation:"RoleComponent"}}]),A.aw,h.q]})}return o})()}}]);