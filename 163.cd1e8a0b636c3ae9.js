"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[163],{163:(b,c,t)=>{t.r(c),t.d(c,{RoleModule:()=>D});var h=t(6814),g=t(649),i=t(7860),e=t(5879),s=t(6223),u=t(4361),m=t(6663);let p=(()=>{class o{service;cdr;Cols;Data;lang=localStorage.getItem("language");constructor(n,l){this.service=n,this.cdr=l,this.lang=localStorage.getItem("language"),this.Cols=[i.v.fromJS({id:1,sorted:!0,filtered:!0,hidden:!1,field:"role_Name_Ar",header:"ar"==this.lang?"\u0627\u0644\u0623\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064a ":"Arabic Name",type:"text"}),i.v.fromJS({id:2,sorted:!0,filtered:!0,hidden:!1,field:"role_Description_Ar",header:"ar"==this.lang?"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064a ":"Arabic Description",type:"text"}),i.v.fromJS({id:3,sorted:!0,filtered:!0,hidden:!1,field:"role_Name_En",header:"ar"==this.lang?"\u0627\u0644\u0623\u0633\u0645 \u0628\u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a ":"English Name",type:"text"}),i.v.fromJS({id:4,sorted:!0,filtered:!0,hidden:!1,field:"role_Description_En",header:"ar"==this.lang?"\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a ":"English Description",type:"text"})]}ngOnChanges(n){this.cdr.detectChanges()}currentRole={arabicName:"",englishName:"",roleDescriptionAr:"",roleDescriptionEn:""};ngOnInit(){this.searchRole()}searchRole(){this.service.searchRole("",void 0).subscribe({next:n=>{this.Data=n.data,this.cdr.detectChanges()},error:()=>{}})}AddRole(){let n=new g.wN;n.roleNameAr=this.currentRole.arabicName,n.roleNameEn=this.currentRole.englishName,n.roleDescriptionAr=this.currentRole.roleDescriptionAr,n.roleDescriptionEn=this.currentRole.roleDescriptionEn,this.service.newRole(n).subscribe({next:l=>{this.searchRole()}})}static \u0275fac=function(l){return new(l||o)(e.Y36(g.r9),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:o,selectors:[["app-Role"]],features:[e.TTD],decls:22,vars:11,consts:[["id","kt_timeline_widget_2_card",1,"card","h-xl-100"],[1,"card-header","position-relative","py-0","border-bottom-2"],[1,"card-body"],[1,"row"],[1,"col-md-8"],[3,"cols","rowsPageNumbers","pagination","scrollable","data","chooseColomns","SecondBtn"],[1,"col-md-4"],[1,"col-md-12"],[1,"mb-10"],["translate","SHARED.ArabicName",1,"form-label"],["type","text","placeholder","","autocomplete","",1,"form-control",3,"ngModel","ngModelChange"],["translate","SHARED.ArabicDesc",1,"form-label"],["translate","SHARED.EnglishName",1,"form-label"],["translate","SHARED.EnglishDesc",1,"form-label"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"]],template:function(l,r){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"app-shared-datatable",5),e.qZA(),e.TgZ(6,"div",6)(7,"div",7)(8,"div",8),e._UZ(9,"label",9),e.TgZ(10,"input",10),e.NdJ("ngModelChange",function(a){return r.currentRole.arabicName=a}),e.qZA()(),e.TgZ(11,"div",8),e._UZ(12,"label",11),e.TgZ(13,"input",10),e.NdJ("ngModelChange",function(a){return r.currentRole.roleDescriptionAr=a}),e.qZA()(),e.TgZ(14,"div",8),e._UZ(15,"label",12),e.TgZ(16,"input",10),e.NdJ("ngModelChange",function(a){return r.currentRole.englishName=a}),e.qZA()(),e.TgZ(17,"div",8),e._UZ(18,"label",13),e.TgZ(19,"input",10),e.NdJ("ngModelChange",function(a){return r.currentRole.roleDescriptionEn=a}),e.qZA()(),e.TgZ(20,"div",14)(21,"button",15),e.NdJ("click",function(){return r.AddRole()}),e.qZA()()()()()()()()),2&l&&(e.xp6(5),e.Q6J("cols",r.Cols)("rowsPageNumbers",25)("pagination",!0)("scrollable",!1)("data",r.Data)("chooseColomns",!0)("SecondBtn",!1),e.xp6(5),e.Q6J("ngModel",r.currentRole.arabicName),e.xp6(3),e.Q6J("ngModel",r.currentRole.roleDescriptionAr),e.xp6(3),e.Q6J("ngModel",r.currentRole.englishName),e.xp6(3),e.Q6J("ngModel",r.currentRole.roleDescriptionEn))},dependencies:[s.Fj,s.JJ,s.On,u.G,m.Pi]})}return o})();var f=t(5150),v=t(3660),R=t(3415),C=t(2427),A=t(3758);let D=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=e.oAB({type:o});static \u0275inj=e.cJS({imports:[h.ez,s.u5,R.m,f.Bz.forChild([{path:"",canActivate:[C.o,A.a],component:p}]),m.aw,v.q]})}return o})()}}]);