"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[710],{2710:(y,c,n)=>{n.r(c),n.d(c,{ErrorsModule:()=>g});var l=n(6814),a=n(7304),s=n(8695),t=n(5879),u=n(474);let d=(()=>{class o{router;modeService;unsubscribe=[];constructor(e,r){this.router=e,this.modeService=r}ngOnInit(){const e=this.modeService.mode.asObservable().subscribe(r=>{document.body.style.backgroundImage="dark"===r?"url(./assets/media/auth/bg1-dark.jpg)":"url(./assets/media/auth/bg1.jpg)"});this.unsubscribe.push(e)}routeToDashboard(){this.router.navigate(["dashboard"]),setTimeout(()=>{s.n$.reinitialization(),s.nW.reinitialization(),s.hg.reinitialization(),s.bv.bootstrap(),s.Mn.reinitialization(),s.lg.reinitialization()},200)}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe()),document.body.style.backgroundImage="none"}static \u0275fac=function(r){return new(r||o)(t.Y36(a.F0),t.Y36(u.t))};static \u0275cmp=t.Xpm({type:o,selectors:[["app-error404"]],decls:10,vars:0,consts:[[1,"fw-bolder","fs-2hx","text-gray-900","mb-4"],[1,"fw-semibold","fs-6","text-gray-500","mb-7"],[1,"mb-3"],["src","./assets/media/auth/404-error.png","alt","",1,"mw-100","mh-300px","theme-light-show"],["src","./assets/media/auth/404-error-dark.png","alt","",1,"mw-100","mh-300px","theme-dark-show"],[1,"mb-0"],[1,"btn","btn-sm","btn-primary",3,"click"]],template:function(r,i){1&r&&(t.TgZ(0,"h1",0),t._uU(1," Oops!\n"),t.qZA(),t.TgZ(2,"div",1),t._uU(3," We can't find that page.\n"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"img",3)(6,"img",4),t.qZA(),t.TgZ(7,"div",5)(8,"a",6),t.NdJ("click",function(){return i.routeToDashboard()}),t._uU(9,"Return Home"),t.qZA()())}})}return o})(),h=(()=>{class o{router;modeService;unsubscribe=[];constructor(e,r){this.router=e,this.modeService=r}ngOnInit(){const e=this.modeService.mode.asObservable().subscribe(r=>{document.body.style.backgroundImage="dark"===r?"url(./assets/media/auth/bg7-dark.jpg)":"url(./assets/media/auth/bg7.jpg)"});this.unsubscribe.push(e)}routeToDashboard(){this.router.navigate(["dashboard"]),setTimeout(()=>{s.n$.reinitialization(),s.nW.reinitialization(),s.hg.reinitialization(),s.bv.bootstrap(),s.Mn.reinitialization(),s.lg.reinitialization()},200)}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe()),document.body.style.backgroundImage="none"}static \u0275fac=function(r){return new(r||o)(t.Y36(a.F0),t.Y36(u.t))};static \u0275cmp=t.Xpm({type:o,selectors:[["app-error500"]],decls:10,vars:0,consts:[[1,"fw-bolder","fs-2qx","text-gray-900","mb-4"],[1,"fw-semibold","fs-6","text-gray-500","mb-7"],[1,"mb-11"],["src","./assets/media/auth/500-error.png","alt","",1,"mw-100","mh-300px","theme-light-show"],["src","./assets/media/auth/500-error-dark.png","alt","",1,"mw-100","mh-300px","theme-dark-show"],[1,"mb-0"],[1,"btn","btn-sm","btn-primary",3,"click"]],template:function(r,i){1&r&&(t.TgZ(0,"h1",0),t._uU(1," System Error\n"),t.qZA(),t.TgZ(2,"div",1),t._uU(3," Something went wrong! Please try again later.\n"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"img",3)(6,"img",4),t.qZA(),t.TgZ(7,"div",5)(8,"a",6),t.NdJ("click",function(){return i.routeToDashboard()}),t._uU(9,"Return Home"),t.qZA()())}})}return o})();const m=["bgi-size-cover","bgi-position-center","bgi-no-repeat"],p=[{path:"",component:(()=>{class o{router;class="d-flex flex-column flex-root";constructor(e){this.router=e}ngOnInit(){m.forEach(e=>document.body.classList.add(e))}ngOnDestroy(){m.forEach(e=>document.body.classList.remove(e))}routeToDashboard(){this.router.navigate(["dashboard"]),setTimeout(()=>{s.n$.bootstrap(),s.nW.bootstrap(),s.hg.bootstrap(),s.bv.bootstrap(),s.Mn.bootstrap(),s.lg.bootstrap()},200)}static \u0275fac=function(r){return new(r||o)(t.Y36(a.F0))};static \u0275cmp=t.Xpm({type:o,selectors:[["app-errors"]],hostVars:2,hostBindings:function(r,i){2&r&&t.Tol(i.class)},decls:5,vars:0,consts:[[1,"d-flex","flex-column","flex-center","flex-column-fluid"],[1,"d-flex","flex-column","flex-center","text-center","p-10"],[1,"card","card-flush","w-lg-650px","py-5"],[1,"card-body","py-15","py-lg-20"]],template:function(r,i){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"router-outlet"),t.qZA()()()())},dependencies:[a.lC],styles:["[_nghost-%COMP%]{height:100%;margin:0}"]})}return o})(),children:[{path:"404",component:d,data:{animation:"404"}},{path:"500",component:h},{path:"",redirectTo:"404",pathMatch:"full"},{path:"**",redirectTo:"404",pathMatch:"full"}]}];let b=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=t.oAB({type:o});static \u0275inj=t.cJS({imports:[a.Bz.forChild(p),a.Bz]})}return o})(),g=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=t.oAB({type:o});static \u0275inj=t.cJS({imports:[l.ez,b]})}return o})()}}]);