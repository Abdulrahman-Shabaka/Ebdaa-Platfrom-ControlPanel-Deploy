"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[275],{3275:(Zt,f,l)=>{l.r(f),l.d(f,{AuthModule:()=>Ct});var m=l(6814),r=l(6223),w=l(9862),g=l(7304),_=l(3503),t=l(5879),x=l(5219),h=l(8472),u=l(649),T=l(7110);const C=["root",""];let y=(()=>{class e extends _.H{messageService;cts;service;today=new Date;constructor(n,s,o){super(),this.messageService=n,this.cts=s,this.service=o}ngOnInit(){}ngOnDestroy(){}addMessage(n,s,o){this.messageService.add({key:"tl",severity:n,summary:s,detail:o})}ngAfterViewInit(){}static \u0275fac=function(s){return new(s||e)(t.Y36(x.ez),t.Y36(h.m),t.Y36(u.r9S))};static \u0275cmp=t.Xpm({type:e,selectors:[["body","root",""]],features:[t.qOj],attrs:C,decls:11,vars:0,consts:[["id","kt_app_root",1,"d-flex","flex-column","flex-root"],[1,"d-flex","flex-column","flex-column-fluid","flex-lg-row",2,"background-image","url('../../../assets/media/auth/bg4-dark.jpg')","height","100vh","background-size","cover"],[1,"d-flex","flex-column-fluid","flex-lg-row-auto","justify-content-center","justify-content-lg-end","p-12","p-lg-20"],[1,"bg-body","d-flex","flex-column","align-items-stretch","flex-center","rounded-4","w-md-600px","p-20",2,"justify-content","space-evenly"],[1,"d-flex","flex-center"],["src","../../../../../assets/logo/png 2.png","width","100px",2,"margin","0 13px"],[1,"d-flex","flex-center","w-lg-50","pt-15","pt-lg-0","px-10"],[1,"d-flex","flex-center","flex-lg-start","flex-column"],["src","../../../../../assets/logo/png 1.svg","width","290px",2,"margin","0 13px"]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.qZA(),t._UZ(6,"router-outlet")(7,"app-lang-switcher"),t.qZA()(),t.TgZ(8,"div",6)(9,"div",7),t._UZ(10,"img",8),t.qZA()()()())},dependencies:[g.lC,T.i],styles:["[_nghost-%COMP%]{height:100%}"]})}return e})();var Z=l(6663);function O(e,i){1&e&&(t.ynx(0),t._UZ(1,"span",15),t.BQk())}function F(e,i){if(1&e&&(t.ynx(0),t.TgZ(1,"div",16)(2,"span",17),t._uU(3),t.qZA()(),t.BQk()),2&e){const n=t.oxw().message;t.xp6(3),t.hij(" ",n," ")}}function P(e,i){if(1&e&&t.YNc(0,F,4,1,"ng-container",13),2&e){const n=i.control;t.Q6J("ngIf",n.hasError(i.validation)&&(n.dirty||n.touched))}}const v=function(e,i){return{"is-invalid":e,"is-valid":i}},q=function(e){return{validation:"required",message:"Email is required",control:e}},k=function(e){return{validation:"email",message:"Email is invalid",control:e}},A=function(e){return{validation:"minLength",message:"Email should have at least 3 symbols",control:e}},L=function(e){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:e}},U=function(e){return{validation:"required",message:"Password is required",control:e}},J=function(e){return{validation:"minlength",message:"Password should have at least 3 symbols",control:e}},S=function(e){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:e}};let I=(()=>{class e{fb;route;router;service;cts;defaultAuth={email:window.location.href.includes("localhost")?"SuperAdmin":"",password:window.location.href.includes("localhost")?"SuperAdmin":""};loginForm;hasError;returnUrl;isLoading$;unsubscribe=[];constructor(n,s,o,a,yt){this.fb=n,this.route=s,this.router=o,this.service=a,this.cts=yt,this.isLoading$=!1}ngOnInit(){this.initForm(),this.returnUrl=this.route.snapshot.queryParams["returnUrl".toString()]||"/"}get f(){return this.loginForm.controls}initForm(){this.loginForm=this.fb.group({email:[this.defaultAuth.email,r.kI.compose([r.kI.required,r.kI.minLength(1),r.kI.maxLength(320)])],password:[this.defaultAuth.password,r.kI.compose([r.kI.required,r.kI.minLength(1),r.kI.maxLength(100)])]})}submit(){this.hasError=!1;let n=new u.xJj;n.password=this.f.password.value,n.phoneNumber=this.f.email.value,this.service.login(n).subscribe({next:s=>{localStorage.setItem("user",JSON.stringify(s.data)),localStorage.setItem("userHasLab",JSON.stringify(s.data?.organizationDetail?.hasLab)),localStorage.setItem("org",JSON.stringify(s.data?.organizationDetail)),this.router.navigate([this.returnUrl])},error:s=>{console.log(s),this.cts.Show("error","\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u063a\u064a\u0631 \u0635\u0627\u0644\u062d\u0629 ","\u062a\u0645 \u062a\u0642\u062f\u064a\u0645 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0639\u062a\u0645\u0627\u062f \u063a\u064a\u0631 \u0635\u0627\u0644\u062d\u0629"),this.loginForm.controls.email.setErrors({invalid:!0}),this.loginForm.controls.password.setErrors({invalid:!0})}})}ngOnDestroy(){this.unsubscribe.forEach(n=>n.unsubscribe())}static \u0275fac=function(s){return new(s||e)(t.Y36(r.qu),t.Y36(g.gz),t.Y36(g.F0),t.Y36(u.r9S),t.Y36(h.m))};static \u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:23,vars:39,consts:[["novalidate","novalidate","id","kt_login_signin_form",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"text-center","mb-11"],["translate","AUTH.LOGIN.TITLE",1,"text","mb-3",2,"font-size","large","color","gray"],[1,"fv-row","mb-8"],["translate","AUTH.LOGIN.EmailOrUserName",1,"form-label","fs-6","fw-bolder","text-gray-600","fs-6"],["type","email","name","email","formControlName","email","autocomplete","off",1,"form-control","bg-transparent",2,"text-align","center",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"fv-row","mb-3"],["translate","AUTH.LOGIN.Password",1,"form-label","fw-bolder","text-gray-600","fs-6"],["type","password","name","password","autocomplete","off","formControlName","password",1,"form-control","bg-transparent",2,"text-align","center",3,"ngClass"],[1,"d-flex","flex-stack","flex-wrap","gap-3","fs-base","fw-semibold","mb-8"],[1,"d-grid","mb-10"],["type","submit","id","kt_sign_in_submit",1,"btn","btn-success",3,"disabled"],[4,"ngIf"],["formError",""],["translate","AUTH.LOGIN.BUTTON",1,"indicator-label"],[1,"fv-plugins-message-container"],["role","alert"]],template:function(s,o){if(1&s&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"div",1),t._UZ(2,"span",2),t.qZA(),t.TgZ(3,"div",3),t._UZ(4,"label",4)(5,"input",5),t.GkF(6,6)(7,6)(8,6)(9,6),t.qZA(),t.TgZ(10,"div",7),t._UZ(11,"label",8)(12,"input",9),t.GkF(13,6)(14,6)(15,6),t.qZA(),t.TgZ(16,"div",10),t._UZ(17,"div"),t.qZA(),t.TgZ(18,"div",11)(19,"button",12),t.YNc(20,O,2,0,"ng-container",13),t.qZA()()(),t.YNc(21,P,1,1,"ng-template",null,14,t.W1O)),2&s){const a=t.MAs(22);t.Q6J("formGroup",o.loginForm),t.xp6(5),t.Q6J("ngClass",t.WLB(19,v,o.loginForm.controls.email.invalid,o.loginForm.controls.email.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(22,q,o.loginForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(24,k,o.loginForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(26,A,o.loginForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(28,L,o.loginForm.controls.email)),t.xp6(3),t.Q6J("ngClass",t.WLB(30,v,o.loginForm.controls.password.invalid,o.loginForm.controls.password.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(33,U,o.loginForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(35,J,o.loginForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(37,S,o.loginForm.controls.password)),t.xp6(4),t.Q6J("disabled",o.loginForm.invalid),t.xp6(1),t.Q6J("ngIf",!1===o.isLoading$)}},dependencies:[m.mk,m.O5,m.tP,Z.Pi,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]})}return e})();class Q{static MatchPassword(i){const n=i.get("password")?.value,s=i.get("cPassword")?.value;n!==s&&i.get("cPassword")?.setErrors({ConfirmPassword:!0})}}var N=l(6631);class E extends N.W{id;username;password;fullname;email;pic;roles=[];occupation;companyName;phone;address;socialNetworks;firstname;lastname;website;language;timeZone;communication;emailSettings;setUser(i){const n=i;this.id=n.id,this.username=n.username||"",this.password=n.password||"",this.fullname=n.fullname||"",this.email=n.email||"",this.pic=n.pic||"./assets/media/avatars/blank.png",this.roles=n.roles||[],this.occupation=n.occupation||"",this.companyName=n.companyName||"",this.phone=n.phone||"",this.address=n.address,this.socialNetworks=n.socialNetworks}}var b=l(1374),p=l(8966);function M(e,i){1&e&&(t.ynx(0),t.TgZ(1,"div",29)(2,"div",30),t._uU(3," The registration details are incorrect "),t.qZA()(),t.BQk())}function Y(e,i){1&e&&(t.ynx(0),t.TgZ(1,"div",31)(2,"div",32),t._uU(3," 'Passsword' and 'Confirm Password' didn't match. "),t.qZA()(),t.BQk())}function V(e,i){1&e&&(t.ynx(0),t.TgZ(1,"span",33),t._uU(2,"Submit"),t.qZA(),t.BQk())}function K(e,i){1&e&&(t.ynx(0),t.TgZ(1,"span",34),t._uU(2," Please wait... "),t._UZ(3,"span",35),t.qZA(),t.BQk()),2&e&&(t.xp6(1),t.Udp("display","block"))}function B(e,i){if(1&e&&(t.ynx(0),t.TgZ(1,"div",31)(2,"div",32)(3,"span",36),t._uU(4),t.qZA()()(),t.BQk()),2&e){const n=t.oxw().message;t.xp6(4),t.hij(" ",n," ")}}function G(e,i){if(1&e&&t.YNc(0,B,5,1,"ng-container",12),2&e){const n=i.control;t.Q6J("ngIf",n.hasError(i.validation)&&(n.dirty||n.touched))}}const d=function(e,i){return{"is-invalid":e,"is-valid":i}},j=function(e){return{validation:"required",message:"Fullname is required",control:e}},H=function(e){return{validation:"minlength",message:"Fullname should have at least 3 symbols",control:e}},W=function(e){return{validation:"maxLength",message:"Fullname should have maximum 100 symbols",control:e}},$=function(e){return{validation:"required",message:"Email is required",control:e}},R=function(e){return{validation:"email",message:"Email is invalid",control:e}},z=function(e){return{validation:"minlength",message:"Email should have at least 3 symbols",control:e}},D=function(e){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:e}},X=function(e){return{validation:"required",message:"Password is required",control:e}},tt=function(e){return{validation:"minlength",message:"Password should have at least 3 symbols",control:e}},et=function(e){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:e}},ot=function(e){return{validation:"required",message:"Confirm Password is required",control:e}},nt=function(e){return{validation:"minlength",message:"Confirm Password should have at least 3 symbols",control:e}},rt=function(e){return{validation:"maxLength",message:"Confirm Password should have maximum 100 symbols",control:e}};let st=(()=>{class e{fb;authService;router;registrationForm;hasError;isLoading$;unsubscribe=[];constructor(n,s,o){this.fb=n,this.authService=s,this.router=o,this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.initForm()}get f(){return this.registrationForm.controls}initForm(){this.registrationForm=this.fb.group({fullname:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],email:["qwe@qwe.qwe",r.kI.compose([r.kI.required,r.kI.email,r.kI.minLength(3),r.kI.maxLength(320)])],password:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],cPassword:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],agree:[!1,r.kI.compose([r.kI.required])]},{validator:Q.MatchPassword})}submit(){this.hasError=!1;const n={};Object.keys(this.f).forEach(a=>{n[a]=this.f[a].value});const s=new E;s.setUser(n);const o=this.authService.registration(s).pipe((0,b.P)()).subscribe(a=>{a?this.router.navigate(["/"]):this.hasError=!0});this.unsubscribe.push(o)}ngOnDestroy(){this.unsubscribe.forEach(n=>n.unsubscribe())}static \u0275fac=function(s){return new(s||e)(t.Y36(r.qu),t.Y36(p.e),t.Y36(g.F0))};static \u0275cmp=t.Xpm({type:e,selectors:[["app-registration"]],decls:70,vars:78,consts:[["novalidate","novalidate","id","kt_login_signup_form",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"text-center","mb-11"],[1,"text-gray-900","fw-bolder","mb-3"],[1,"text-gray-500","fw-semibold","fs-6"],[1,"row","g-3","mb-9"],[1,"col-md-6"],["href","#",1,"btn","btn-flex","btn-outline","btn-text-gray-700","btn-active-color-primary","bg-state-light","flex-center","text-nowrap","w-100"],["alt","Logo","src","./assets/media/svg/brand-logos/google-icon.svg",1,"h-15px","me-3"],["alt","Logo","src","./assets/media/svg/brand-logos/apple-black.svg",1,"theme-light-show","h-15px","me-3"],["alt","Logo","src","./assets/media/svg/brand-logos/apple-black-dark.svg",1,"theme-dark-show","h-15px","me-3"],[1,"separator","separator-content","my-14"],[1,"w-125px","text-gray-500","fw-semibold","fs-7"],[4,"ngIf"],[1,"fv-row","mb-8"],[1,"form-label","fw-bolder","text-gray-900","fs-6"],["type","text","name","fullname","formControlName","fullname","placeholder","Fullname","autocomplete","off",1,"form-control","bg-transparent",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","email","placeholder","Email","name","email","formControlName","email","autocomplete","off",1,"form-control","bg-transparent",3,"ngClass"],["type","password","placeholder","Password","name","password","formControlName","password","autocomplete","off",1,"form-control","bg-transparent",3,"ngClass"],["type","password","placeholder","Confirm password","name","cPassword","autocomplete","off","formControlName","cPassword",1,"form-control","bg-transparent",3,"ngClass"],[1,"form-check","form-check-inline"],["id","kt_login_toc_agree","type","checkbox","formControlName","agree","name","agree",1,"form-check-input"],["for","kt_login_toc_agree",1,"form-check-label","fw-semibold","text-gray-700","fs-base","ms-1"],["href","https://keenthemes.com/metronic/?page=faq","target","_blank",1,"ms-1","link-primary"],[1,"d-grid","mb-10"],["type","submit","id","kt_sign_up_submit",1,"btn","btn-primary",3,"disabled"],[1,"text-gray-500","text-center","fw-semibold","fs-6"],["routerLink","/auth/login",1,"link-primary","fw-semibold"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],["role","alert"]],template:function(s,o){if(1&s&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"div",1)(2,"h1",2),t._uU(3," Sign Up "),t.qZA(),t.TgZ(4,"div",3),t._uU(5," Your Social Campaigns "),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"a",6),t._UZ(9,"img",7),t._uU(10," Sign in with Google "),t.qZA()(),t.TgZ(11,"div",5)(12,"a",6),t._UZ(13,"img",8)(14,"img",9),t._uU(15," Sign in with Apple "),t.qZA()()(),t.TgZ(16,"div",10)(17,"span",11),t._uU(18,"Or with email"),t.qZA()(),t.YNc(19,M,4,0,"ng-container",12),t.TgZ(20,"div",13)(21,"label",14),t._uU(22,"Fullname"),t.qZA(),t._UZ(23,"input",15),t.GkF(24,16)(25,16)(26,16),t.qZA(),t.TgZ(27,"div",13)(28,"label",14),t._uU(29,"Email"),t.qZA(),t._UZ(30,"input",17),t.GkF(31,16)(32,16)(33,16)(34,16),t.qZA(),t.TgZ(35,"div",13)(36,"label",14),t._uU(37,"Password"),t.qZA(),t._UZ(38,"input",18),t.GkF(39,16)(40,16)(41,16),t.qZA(),t.TgZ(42,"div",13)(43,"label",14),t._uU(44,"Confirm Password"),t.qZA(),t._UZ(45,"input",19),t.GkF(46,16)(47,16)(48,16),t.YNc(49,Y,4,0,"ng-container",12),t.qZA(),t.TgZ(50,"div",13)(51,"label",20),t._UZ(52,"input",21),t.TgZ(53,"span",22),t._uU(54," I Accept the\xa0"),t.TgZ(55,"a",23),t._uU(56,"Terms"),t.qZA(),t._uU(57,". "),t.qZA()()(),t.TgZ(58,"div",24)(59,"button",25),t.YNc(60,V,3,0,"ng-container",12),t.ALo(61,"async"),t.YNc(62,K,4,2,"ng-container",12),t.ALo(63,"async"),t.qZA()(),t.TgZ(64,"div",26),t._uU(65," Already have an Account? "),t.TgZ(66,"a",27),t._uU(67," Sign in "),t.qZA()()(),t.YNc(68,G,1,1,"ng-template",null,28,t.W1O)),2&s){const a=t.MAs(69);t.Q6J("formGroup",o.registrationForm),t.xp6(19),t.Q6J("ngIf",o.hasError),t.xp6(4),t.Q6J("ngClass",t.WLB(40,d,o.registrationForm.controls.fullname.invalid,o.registrationForm.controls.fullname.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(43,j,o.registrationForm.controls.fullname)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(45,H,o.registrationForm.controls.fullname)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(47,W,o.registrationForm.controls.fullname)),t.xp6(4),t.Q6J("ngClass",t.WLB(49,d,o.registrationForm.controls.email.invalid,o.registrationForm.controls.email.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(52,$,o.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(54,R,o.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(56,z,o.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(58,D,o.registrationForm.controls.email)),t.xp6(4),t.Q6J("ngClass",t.WLB(60,d,o.registrationForm.controls.password.invalid,o.registrationForm.controls.password.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(63,X,o.registrationForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(65,tt,o.registrationForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(67,et,o.registrationForm.controls.password)),t.xp6(4),t.Q6J("ngClass",t.WLB(69,d,o.registrationForm.controls.cPassword.invalid,o.registrationForm.controls.cPassword.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(72,ot,o.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(74,nt,o.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(76,rt,o.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngIf",o.registrationForm.controls.cPassword.errors&&o.registrationForm.controls.cPassword.errors.ConfirmPassword),t.xp6(10),t.Q6J("disabled",o.registrationForm.invalid||!o.registrationForm.controls.agree.value),t.xp6(1),t.Q6J("ngIf",!1===t.lcZ(61,36,o.isLoading$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(63,38,o.isLoading$))}},dependencies:[m.mk,m.O5,m.tP,g.rH,r._Y,r.Fj,r.Wl,r.JJ,r.JL,r.sg,r.u,m.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]})}return e})();function at(e,i){1&e&&(t.ynx(0),t.TgZ(1,"div",14)(2,"div",15),t._uU(3," Sorry, looks like there are some errors detected, please try again. "),t.qZA()(),t.BQk())}function it(e,i){1&e&&(t.ynx(0),t.TgZ(1,"div",16)(2,"div",17),t._uU(3,"Sent password reset. Please check your email"),t.qZA()(),t.BQk())}function lt(e,i){1&e&&(t.ynx(0),t.TgZ(1,"span",18),t._uU(2," Please wait... "),t._UZ(3,"span",19),t.qZA(),t.BQk())}function mt(e,i){if(1&e&&(t.ynx(0),t.TgZ(1,"div",20)(2,"div",21)(3,"span",22),t._uU(4),t.qZA()()(),t.BQk()),2&e){const n=t.oxw().message;t.xp6(4),t.Oqu(n)}}function gt(e,i){if(1&e&&t.YNc(0,mt,5,1,"ng-container",4),2&e){const n=i.control;t.Q6J("ngIf",n.hasError(i.validation)&&(n.dirty||n.touched))}}const ct=function(e,i){return{"is-invalid":e,"is-valid":i}},ut=function(e){return{validation:"required",message:"Email is required",control:e}},dt=function(e){return{validation:"email",message:"Email is invalid",control:e}},pt=function(e){return{validation:"minLength",message:"Email should have at least 3 symbols",control:e}},ft=function(e){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:e}};var c=function(e){return e[e.NotSubmitted=0]="NotSubmitted",e[e.HasError=1]="HasError",e[e.NoError=2]="NoError",e}(c||{});const bt=[{path:"",component:y,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:I,data:{returnUrl:window.location.pathname,animation:"test"}},{path:"registration",component:st},{path:"forgot-password",component:(()=>{class e{fb;authService;forgotPasswordForm;errorState=c.NotSubmitted;errorStates=c;isLoading$;unsubscribe=[];constructor(n,s){this.fb=n,this.authService=s,this.isLoading$=this.authService.isLoading$}ngOnInit(){this.initForm()}get f(){return this.forgotPasswordForm.controls}initForm(){this.forgotPasswordForm=this.fb.group({email:["SuperAdmin",r.kI.compose([r.kI.required,r.kI.email,r.kI.minLength(3),r.kI.maxLength(320)])]})}submit(){this.errorState=c.NotSubmitted;const n=this.authService.forgotPassword(this.f.email.value).pipe((0,b.P)()).subscribe(s=>{this.errorState=s?c.NoError:c.HasError});this.unsubscribe.push(n)}static \u0275fac=function(s){return new(s||e)(t.Y36(r.qu),t.Y36(p.e))};static \u0275cmp=t.Xpm({type:e,selectors:[["app-forgot-password"]],decls:26,vars:26,consts:[["novalidate","novalidate","id","kt_login_password_reset_form",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"text-center","mb-10"],[1,"text-gray-900","fw-bolder","mb-3"],[1,"text-gray-500","fw-semibold","fs-6"],[4,"ngIf"],[1,"fv-row","mb-8"],[1,"form-label","fw-bolder","text-gray-900","fs-6"],["type","email","formControlName","email","placeholder","Email","name","email","autocomplete","off",1,"form-control","bg-transparent",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","flex-wrap","justify-content-center","pb-lg-0"],["type","submit","id","kt_password_reset_submit",1,"btn","btn-primary","me-4"],[1,"indicator-label"],["routerLink","/auth/login","id","kt_login_password_reset_form_cancel_button",1,"btn","btn-light"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"mb-10","bg-light-info","p-8","rounded"],[1,"text-info"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],["role","alert"]],template:function(s,o){if(1&s&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"div",1)(2,"h1",2),t._uU(3," Forgot Password ? "),t.qZA(),t.TgZ(4,"div",3),t._uU(5," Enter your email to reset your password. "),t.qZA()(),t.YNc(6,at,4,0,"ng-container",4),t.YNc(7,it,4,0,"ng-container",4),t.TgZ(8,"div",5)(9,"label",6),t._uU(10,"Email"),t.qZA(),t._UZ(11,"input",7),t.GkF(12,8)(13,8)(14,8)(15,8),t.qZA(),t.TgZ(16,"div",9)(17,"button",10)(18,"span",11),t._uU(19,"Submit"),t.qZA(),t.YNc(20,lt,4,0,"ng-container",4),t.ALo(21,"async"),t.qZA(),t.TgZ(22,"a",12),t._uU(23," Cancel "),t.qZA()()(),t.YNc(24,gt,1,1,"ng-template",null,13,t.W1O)),2&s){const a=t.MAs(25);t.Q6J("formGroup",o.forgotPasswordForm),t.xp6(6),t.Q6J("ngIf",o.errorState===o.errorStates.HasError),t.xp6(1),t.Q6J("ngIf",o.errorState===o.errorStates.NoError),t.xp6(4),t.Q6J("ngClass",t.WLB(15,ct,o.forgotPasswordForm.controls.email.invalid,o.forgotPasswordForm.controls.email.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(18,ut,o.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(20,dt,o.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(22,pt,o.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(24,ft,o.forgotPasswordForm.controls.email)),t.xp6(5),t.Q6J("ngIf",t.lcZ(21,13,o.isLoading$))}},dependencies:[m.mk,m.O5,m.tP,g.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,m.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]})}return e})()},{path:"logout",component:(()=>{class e{authService;constructor(n){this.authService=n,this.authService.logout()}ngOnInit(){}static \u0275fac=function(s){return new(s||e)(t.Y36(p.e))};static \u0275cmp=t.Xpm({type:e,selectors:[["app-logout"]],decls:2,vars:0,template:function(s,o){1&s&&(t.TgZ(0,"p"),t._uU(1,"logout works!"),t.qZA())}})}return e})()},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}]}];let wt=(()=>{class e{static \u0275fac=function(s){return new(s||e)};static \u0275mod=t.oAB({type:e});static \u0275inj=t.cJS({imports:[g.Bz.forChild(bt),g.Bz]})}return e})();var _t=l(3660),xt=l(3415),Tt=l(9378);let Ct=(()=>{class e{static \u0275fac=function(s){return new(s||e)};static \u0275mod=t.oAB({type:e});static \u0275inj=t.cJS({providers:[u.r9S],imports:[m.ez,_t.q,wt,r.u5,r.UX,w.JF,Tt.EV,xt.m]})}return e})()}}]);