"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[592],{2427:(y,f,r)=>{r.d(f,{o:()=>u});var t=r(7234);const i=[{PageId:1,PagePermission:t.G.SuperAdmin,FullPageUrl:"/dashboard"},{PageId:2,PagePermission:t.G.SuperAdmin,FullPageUrl:"/Address"},{PageId:3,PagePermission:t.G.SuperAdmin,FullPageUrl:"/Speciality"},{PageId:4,PagePermission:t.G.SuperAdmin,FullPageUrl:"/Role"},{PageId:5,PagePermission:t.G.SuperAdmin,FullPageUrl:"/Exam/ExamList"},{PageId:6,PagePermission:t.G.SuperAdmin,FullPageUrl:"/Exam/ExamCategoryList"},{PageId:7,PagePermission:t.G.SuperAdmin,FullPageUrl:"/Services/ServiceList"},{PageId:8,PagePermission:t.G.SuperAdmin,FullPageUrl:"/User/UserList"},{PageId:9,PagePermission:t.G.SuperAdmin,FullPageUrl:"/ManageUsers/users"},{PageId:10,PagePermission:t.G.SuperAdmin,FullPageUrl:"/ManageOrganizations/Organizations"},{PageId:11,PagePermission:t.G.SuperAdmin,FullPageUrl:"/Sponsors/Sponsores"},{PageId:12,PagePermission:t.G.SuperAdmin,FullPageUrl:"/HospitalDoctorClinicAvailability"},{PageId:107,PagePermission:t.G.Organization,FullPageUrl:"/HospitalDoctorClinicAvailability"},{PageId:108,PagePermission:t.G.Organization,FullPageUrl:"/Organization/ClinicList"},{PageId:109,PagePermission:t.G.Organization,FullPageUrl:"/Organization/HospitalTimingList"},{PageId:110,PagePermission:t.G.Organization,FullPageUrl:"/Organization/EditOrganization"},{PageId:111,PagePermission:t.G.Organization,FullPageUrl:"/Organization/OrganizationLaboratory"},{PageId:112,PagePermission:t.G.Organization,FullPageUrl:"/Organization/OrganizationServices"}];var e=r(5879),d=r(6901);let u=(()=>{class m{permissionService;constructor(k){this.permissionService=k}canActivate(k,a){if("/"!==a.url){a.url.includes("?")&&(a.url=a.url.split("?")[0]);let s=i.find(n=>n.FullPageUrl==a.url),o=i.filter(n=>n.FullPageUrl==a.url),g=!1;return o.length>0?(o.forEach(n=>{let _=this.permissionService.isGranted(n?.PagePermission);_&&(g=_)}),g):this.permissionService.isGranted(s?.PagePermission)}return!0}static \u0275fac=function(a){return new(a||m)(e.LFG(d.v))};static \u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()},8704:(y,f,r)=>{r.d(f,{q:()=>k});const t=JSON.parse('{"free-version-categories":["general","abstract","devices","location","users","it-newtwork","design","archive","typography","technologies","social-media","weather"],"categories":{"abstract":["abstract-33","abstract-27","abstract-26","abstract-32","abstract-18","abstract-24","abstract-30","abstract-8","abstract-9","abstract-31","abstract-25","abstract-19","abstract-21","abstract-35","abstract-34","abstract-20","abstract-36","abstract-22","abstract-23","abstract-37","abstract-44","abstract","abstract-45","abstract-47","abstract-46","abstract-42","abstract-43","abstract-41","abstract-40","abstract-48","abstract-49","abstract-12","abstract-2","abstract-3","abstract-13","abstract-39","abstract-11","abstract-1","abstract-10","abstract-38","abstract-14","abstract-28","abstract-4","abstract-5","abstract-29","abstract-15","abstract-17","abstract-7","abstract-6","abstract-16"],"settings":["toggle-on","toggle-on-circle","toggle-off","category","setting","toggle-off-circle","more-2","setting-4","setting-2","setting-3"],"design":["eraser","paintbucket","add-item","design-2","brush","size","design","copy","text","design-frame","bucket","glass","feather","pencil","colors-square","design-mask","bucket-square","copy-success","color-swatch"],"social-media":["instagram","snapchat","classmates","facebook","whatsapp","social-media","youtube","dribbble","twitter","tiktok","behance"],"it-network":["underlining","disconnect","code","gear","loading","scroll","wrench","square-brackets","frame","message-programming","data","fasten","click"],"technologies":["tech-wifi","joystick","faceid","technology-3","technology-2","electricity","fingerprint-scanning","technology-4","artificial-intelligence","technology"],"ecommerce":["basket-ok","cheque","handcart","shop","tag","purchase","discount","package","percentage","barcode","lots-shopping","basket"],"archive":["book-square","receipt-square","save-2","archive-tick"],"security":["shield-search","password-check","shield-tick","lock","key","shield","shield-cross","key-square","eye-slash","security-check","lock-3","scan-barcode","lock-2","eye","shield-slash","security-user"],"general":["triangle","subtitle","ghost","information","milk","home","happy-emoji","mouse-square","filter-tick","filter-search","wifi-home","trash-square","paper-clip","archive","pin","wifi-square","auto-brightness","coffee","icon","emoji-happy","general-mouse","ranking","slider","crown-2","rescue","flash-circle","safe-home","cloud-change","crown","filter-edit","picture","verify","send","tag-cross","cloud-add","home-3","disk","trash","star","cd","home-2","mouse-circle","home-1","call","gift","share","sort","magnifier","filter-square","tree","filter","switch","cloud","cup","diamonds","status","rocket","cloud-download","menu","chrome"],"location":["geolocation-home","map","telephone-geolocation","satellite","flag","focus","pointers","compass","route","geolocation"],"education":["brifecase-timer","briefcase","clipboard","bookmark-2","note","note-2","book-open","book","teacher","award","brifecase-tick","brifecase-cros","bookmark"],"business":["chart-line","chart","graph-3","chart-pie-3","graph-2","chart-line-down","chart-pie-too","chart-pie-4","chart-line-down-2","graph-4","chart-line-up-2","badge","chart-line-up","chart-simple-3","chart-pie-simple","chart-simple-2","graph-up","chart-line-star","graph","chart-simple"],"files-folders":["tablet-delete","file-added","file-up","minus-folder","file","delete-files","add-folder","file-left","file-deleted","some-files","file-right","notepad","notepad-bookmark","document","like-folder","folder-up","folder-added","file-down","filter-tablet","tablet-book","update-file","add-notepad","questionnaire-tablet","tablet-up","tablet-ok","update-folder","files-tablet","folder-down","notepad-edit","tablet-text-up","search-list","tablet-text-down","add-files","tablet-down","delete-folder","folder","file-sheet"],"software":["bootstrap","figma","dropbox","xaomi","microsoft","android","vue","js","spring-framework","github","dj","google-play","angular","soft-3","python","soft-2","ts","xd","spotify","js-2","laravel","css","google","photoshop","twitch","illustrator","pails","react","html","slack","soft","yii","apple","vuesax"],"time":["calendar-add","calendar-search","calendar-2","calendar-tick","time","watch","calendar-edit","calendar","calendar-8","timer","calendar-remove"],"support":["heart-circle","like","information-4","information-5","information-2","information-3","question","dislike","message-question","medal-star","like-tag","like-2","support-24","question-2","lovely","like-shapes","heart"],"users":["user","user-square","user-tick","people","user-edit","profile-user","profile-circle"],"medicine":["capsule","virus","bandage","thermometer","flask","test-tubes","syringe","mask","pill","pulse"],"burger-menu":["burger-menu","burger-menu-6","burger-menu-5","burger-menu-4","burger-menu-1","burger-menu-3","burger-menu-2"],"typography":["text-align-center","text-italic","text-bold","text-strikethrough","text-underline","text-number","text-align-left","text-align-right","text-circle","text-align-justify-center"],"finance":["theta","dollar","binance","nexo","euro","avalanche","bitcoin","wallet","price-tag","finance-calculator","dash","lts","vibe","credit-cart","paypal","bill","ocean","celsius","educare","enjin-coin","two-credit-cart","bank","binance-usd","wanchain","trello","save-deposit","xmr","financial-schedule","office-bag"],"weather":["night-day","sun","drop","moon"],"arrows":["exit-right-corner","dots-circle-vertical","check-square","right-left","arrow-down","dots-horizontal","arrow-right-left","up-down","double-check","arrow-up-left","down","exit-up","up-square","down-square","plus-square","dots-circle","arrow-down-left","double-check-circle","up","entrance-right","arrow-right","arrow-two-diagonals","minus-square","arrow-diagonal","black-left","arrow-down-refraction","black-right","double-left","arrow-circle-left","arrow-zigzag","plus","check","exit-left","arrow-circle-right","cross-square","entrance-left","left-square","arrows-loop","black-left-line","double-left-arrow","check-circle","right","dots-square-vertical","arrow-up-right","exit-down","dots-square","to-left","double-down","plus-circle","black-down","double-up","black-up","double-right-arrow","arrow-up","black-right-line","arrow-up-refraction","arrow-left","cross","minus-circle","arrow-down-right","exit-right","to-right","double-right","arrow-mix","right-square","arrows-circle","cross-circle","left","minus","dots-vertical","arrow-up-down"],"communication":["message-text-2","message-notif","message-add","sms","directbox-default","message-text","messages","address-book","message-edit","message-minus"],"notifications":["notification-circle","notification-favorite","notification-2","notification","notification-bing","notification-status","notification-on"],"delivery-and-logistics":["scooter-2","parcel","delivery-time","delivery","delivery-24","ship","courier","logistic","trailer","car-2","car-3","airplane-square","scooter","truck","cube-3","bus","cube-2","delivery-door","delivery-3","delivery-2","car","courier-express","airplane","delivery-geolocation","parcel-tracking"],"devices":["monitor-mobile","devices","keyboard","devices-2","bluetooth","wifi","airpod","simcard-2","speaker","printer","simcard","router","phone","electronic-clock","external-drive","laptop","tablet","screen","calculator","mouse"],"grid":["grid","slider-vertical-2","maximize","slider-vertical","row-horizontal","kanban","row-vertical","fat-rows","grid-2","element-8","element-9","element-12","element-4","element-5","grid-frame","element-11","element-7","element-6","element-10","element-2","element-3","element-equal","element-1","slider-horizontal-2","slider-horizontal","element-plus"]},"duotone-paths":{"abstract-33":2,"abstract-27":2,"abstract-26":2,"abstract-32":2,"abstract-18":2,"abstract-24":2,"abstract-30":2,"abstract-8":2,"abstract-9":2,"abstract-31":2,"abstract-25":2,"abstract-19":2,"abstract-21":2,"abstract-35":2,"abstract-34":2,"abstract-20":2,"abstract-36":2,"abstract-22":2,"abstract-23":2,"abstract-37":2,"abstract-44":2,"abstract":2,"abstract-45":2,"abstract-47":2,"abstract-46":2,"abstract-42":2,"abstract-43":2,"abstract-41":2,"abstract-40":2,"abstract-48":3,"abstract-49":3,"abstract-12":2,"abstract-2":2,"abstract-3":2,"abstract-13":2,"abstract-39":2,"abstract-11":2,"abstract-1":2,"abstract-10":2,"abstract-38":2,"abstract-14":2,"abstract-28":2,"abstract-4":2,"abstract-5":2,"abstract-29":2,"abstract-15":2,"abstract-17":2,"abstract-7":2,"abstract-6":0,"abstract-16":2,"toggle-on":2,"toggle-on-circle":2,"toggle-off":2,"category":4,"setting":2,"toggle-off-circle":2,"more-2":4,"setting-4":0,"setting-2":2,"setting-3":5,"eraser":3,"paintbucket":3,"add-item":3,"design-2":2,"brush":2,"size":2,"design":2,"copy":0,"text":0,"design-frame":2,"bucket":4,"glass":3,"feather":2,"pencil":2,"colors-square":4,"design-mask":2,"bucket-square":3,"copy-success":2,"color-swatch":21,"instagram":2,"snapchat":2,"classmates":2,"facebook":2,"whatsapp":2,"social-media":2,"youtube":2,"dribbble":6,"twitter":2,"tiktok":2,"behance":2,"underlining":3,"disconnect":5,"code":4,"gear":2,"loading":2,"scroll":3,"wrench":2,"square-brackets":4,"frame":4,"message-programming":4,"data":5,"fasten":2,"click":5,"tech-wifi":2,"joystick":4,"faceid":6,"technology-3":4,"technology-2":2,"electricity":10,"fingerprint-scanning":5,"technology-4":7,"artificial-intelligence":8,"technology":9,"basket-ok":4,"cheque":7,"handcart":0,"shop":5,"tag":3,"purchase":2,"discount":2,"package":3,"percentage":2,"barcode":8,"lots-shopping":8,"basket":4,"book-square":3,"receipt-square":2,"save-2":2,"archive-tick":2,"shield-search":3,"password-check":5,"shield-tick":2,"lock":3,"key":2,"shield":2,"shield-cross":3,"key-square":2,"eye-slash":4,"security-check":4,"lock-3":3,"scan-barcode":8,"lock-2":5,"eye":3,"shield-slash":3,"security-user":2,"triangle":3,"subtitle":5,"ghost":3,"information":3,"milk":3,"home":0,"happy-emoji":2,"mouse-square":2,"filter-tick":2,"filter-search":3,"wifi-home":4,"trash-square":4,"paper-clip":0,"archive":3,"pin":2,"wifi-square":4,"auto-brightness":3,"coffee":6,"icon":3,"emoji-happy":4,"general-mouse":2,"ranking":4,"slider":4,"crown-2":3,"rescue":2,"flash-circle":2,"safe-home":2,"cloud-change":3,"crown":2,"filter-edit":2,"picture":2,"verify":2,"send":2,"tag-cross":3,"cloud-add":2,"home-3":2,"disk":2,"trash":5,"star":0,"cd":2,"home-2":2,"mouse-circle":2,"home-1":2,"call":8,"gift":4,"share":6,"sort":4,"magnifier":2,"filter-square":2,"tree":3,"filter":2,"switch":2,"cloud":0,"cup":2,"diamonds":2,"status":3,"rocket":2,"cloud-download":2,"menu":4,"chrome":2,"geolocation-home":2,"map":3,"telephone-geolocation":3,"satellite":6,"flag":2,"focus":2,"pointers":3,"compass":2,"route":4,"geolocation":2,"brifecase-timer":3,"briefcase":2,"clipboard":3,"bookmark-2":2,"note":2,"note-2":4,"book-open":4,"book":4,"teacher":2,"award":3,"brifecase-tick":3,"brifecase-cros":3,"bookmark":2,"chart-line":2,"chart":2,"graph-3":2,"chart-pie-3":3,"graph-2":3,"chart-line-down":2,"chart-pie-too":2,"chart-pie-4":3,"chart-line-down-2":3,"graph-4":2,"chart-line-up-2":2,"badge":5,"chart-line-up":2,"chart-simple-3":4,"chart-pie-simple":2,"chart-simple-2":4,"graph-up":6,"chart-line-star":3,"graph":4,"chart-simple":4,"tablet-delete":3,"file-added":2,"file-up":2,"minus-folder":2,"file":2,"delete-files":2,"add-folder":2,"file-left":2,"file-deleted":2,"some-files":2,"file-right":2,"notepad":5,"notepad-bookmark":6,"document":2,"like-folder":2,"folder-up":2,"folder-added":2,"file-down":2,"filter-tablet":2,"tablet-book":2,"update-file":4,"add-notepad":4,"questionnaire-tablet":2,"tablet-up":3,"tablet-ok":3,"update-folder":2,"files-tablet":2,"folder-down":2,"notepad-edit":2,"tablet-text-up":2,"search-list":3,"tablet-text-down":4,"add-files":3,"tablet-down":3,"delete-folder":2,"folder":2,"file-sheet":2,"bootstrap":3,"figma":5,"dropbox":5,"xaomi":2,"microsoft":4,"android":6,"vue":2,"js":2,"spring-framework":0,"github":2,"dj":0,"google-play":2,"angular":3,"soft-3":2,"python":2,"soft-2":2,"ts":3,"xd":3,"spotify":2,"js-2":2,"laravel":7,"css":2,"google":2,"photoshop":2,"twitch":3,"illustrator":4,"pails":9,"react":2,"html":2,"slack":8,"soft":6,"yii":3,"apple":2,"vuesax":3,"calendar-add":6,"calendar-search":4,"calendar-2":5,"calendar-tick":6,"time":2,"watch":2,"calendar-edit":3,"calendar":2,"calendar-8":6,"timer":3,"calendar-remove":6,"heart-circle":2,"like":2,"information-4":3,"information-5":3,"information-2":3,"information-3":3,"question":3,"dislike":2,"message-question":3,"medal-star":4,"like-tag":2,"like-2":2,"support-24":3,"question-2":3,"lovely":2,"like-shapes":2,"heart":2,"user":2,"user-square":3,"user-tick":3,"people":5,"user-edit":3,"profile-user":4,"profile-circle":3,"capsule":2,"virus":3,"bandage":2,"thermometer":2,"flask":2,"test-tubes":2,"syringe":3,"mask":3,"pill":0,"pulse":2,"burger-menu":4,"burger-menu-6":0,"burger-menu-5":0,"burger-menu-4":0,"burger-menu-1":4,"burger-menu-3":9,"burger-menu-2":10,"text-align-center":4,"text-italic":4,"text-bold":3,"text-strikethrough":3,"text-underline":3,"text-number":6,"text-align-left":4,"text-align-right":4,"text-circle":6,"text-align-justify-center":4,"theta":2,"dollar":3,"binance":5,"nexo":2,"euro":3,"avalanche":2,"bitcoin":2,"wallet":4,"price-tag":3,"finance-calculator":7,"dash":2,"lts":2,"vibe":2,"credit-cart":2,"paypal":2,"bill":6,"ocean":19,"celsius":2,"educare":4,"enjin-coin":2,"two-credit-cart":5,"bank":2,"binance-usd":4,"wanchain":2,"trello":3,"save-deposit":4,"xmr":2,"financial-schedule":4,"office-bag":4,"night-day":10,"sun":9,"drop":2,"moon":2,"exit-right-corner":2,"dots-circle-vertical":4,"check-square":2,"right-left":3,"arrow-down":2,"dots-horizontal":3,"arrow-right-left":2,"up-down":3,"double-check":2,"arrow-up-left":2,"down":0,"exit-up":2,"up-square":2,"down-square":2,"plus-square":3,"dots-circle":4,"arrow-down-left":2,"double-check-circle":3,"up":0,"entrance-right":2,"arrow-right":2,"arrow-two-diagonals":5,"minus-square":2,"arrow-diagonal":3,"black-left":0,"arrow-down-refraction":2,"black-right":0,"double-left":2,"arrow-circle-left":2,"arrow-zigzag":2,"plus":0,"check":0,"exit-left":2,"arrow-circle-right":2,"cross-square":2,"entrance-left":2,"left-square":2,"arrows-loop":2,"black-left-line":2,"double-left-arrow":2,"check-circle":2,"right":0,"dots-square-vertical":4,"arrow-up-right":2,"exit-down":2,"dots-square":4,"to-left":0,"double-down":3,"plus-circle":2,"black-down":0,"double-up":3,"black-up":0,"double-right-arrow":2,"arrow-up":2,"black-right-line":2,"arrow-up-refraction":2,"arrow-left":2,"cross":2,"minus-circle":2,"arrow-down-right":2,"exit-right":2,"to-right":0,"double-right":2,"arrow-mix":2,"right-square":2,"arrows-circle":2,"cross-circle":2,"left":0,"minus":0,"dots-vertical":3,"arrow-up-down":2,"message-text-2":3,"message-notif":5,"message-add":3,"sms":2,"directbox-default":4,"message-text":3,"messages":5,"address-book":3,"message-edit":2,"message-minus":2,"notification-circle":2,"notification-favorite":3,"notification-2":2,"notification":3,"notification-bing":3,"notification-status":4,"notification-on":5,"scooter-2":0,"parcel":5,"delivery-time":5,"delivery":5,"delivery-24":4,"ship":3,"courier":3,"logistic":7,"trailer":5,"car-2":6,"car-3":3,"airplane-square":2,"scooter":7,"truck":5,"cube-3":2,"bus":5,"cube-2":3,"delivery-door":4,"delivery-3":3,"delivery-2":9,"car":5,"courier-express":7,"airplane":2,"delivery-geolocation":5,"parcel-tracking":3,"monitor-mobile":2,"devices":5,"keyboard":2,"devices-2":3,"bluetooth":2,"wifi":4,"airpod":3,"simcard-2":2,"speaker":3,"printer":5,"simcard":5,"router":2,"phone":2,"electronic-clock":4,"external-drive":5,"laptop":2,"tablet":3,"screen":4,"calculator":6,"mouse":2,"grid":2,"slider-vertical-2":3,"maximize":5,"slider-vertical":3,"row-horizontal":2,"kanban":2,"row-vertical":2,"fat-rows":2,"grid-2":2,"element-8":2,"element-9":2,"element-12":3,"element-4":2,"element-5":2,"grid-frame":3,"element-11":4,"element-7":2,"element-6":2,"element-10":3,"element-2":2,"element-3":2,"element-equal":5,"element-1":4,"slider-horizontal-2":3,"slider-horizontal":3,"element-plus":5},"number":573}');var i=r(5879),e=r(6814);function d(a,s){1&a&&i._UZ(0,"span"),2&a&&i.Gre("path",s.index+1,"")}const u=function(){return[]};function m(a,s){if(1&a&&(i.TgZ(0,"span"),i.YNc(1,d,1,3,"span",1),i.qZA()),2&a){const o=i.oxw();i.IyS("ki-",o.type," ki-",o.name,"",o.class?" "+o.class:"",""),i.xp6(1),i.Q6J("ngForOf",i.DdM(6,u).constructor(o.pathsNumber))}}function b(a,s){if(1&a&&i._UZ(0,"span"),2&a){const o=i.oxw();i.IyS("ki-",o.type," ki-",o.name,"",o.class?" "+o.class:"","")}}let k=(()=>{class a{name;class;type="duotone";pathsNumber=0;constructor(){}ngOnInit(){"duotone"===this.type&&(this.pathsNumber=t[this.type+"-paths"][this.name]??0)}get styleDisplay(){return"contents"}static \u0275fac=function(g){return new(g||a)};static \u0275cmp=i.Xpm({type:a,selectors:[["app-keenicon"]],hostVars:2,hostBindings:function(g,n){2&g&&i.Udp("display",n.styleDisplay)},inputs:{name:"name",class:"class",type:"type"},decls:2,vars:2,consts:[[3,"class",4,"ngIf"],[3,"class",4,"ngFor","ngForOf"]],template:function(g,n){1&g&&(i.YNc(0,m,2,7,"span",0),i.YNc(1,b,1,5,"span",0)),2&g&&(i.Q6J("ngIf","duotone"===n.type),i.xp6(1),i.Q6J("ngIf","duotone"!==n.type))},dependencies:[e.sg,e.O5]})}return a})()},4955:(y,f,r)=>{r.d(f,{m:()=>e});var t=r(6814),i=r(5879);let e=(()=>{class d{static \u0275fac=function(b){return new(b||d)};static \u0275mod=i.oAB({type:d});static \u0275inj=i.cJS({imports:[t.ez]})}return d})()},3660:(y,f,r)=>{r.d(f,{q:()=>d});var t=r(6814),i=r(6663),e=r(5879);let d=(()=>{class u{static \u0275fac=function(k){return new(k||u)};static \u0275mod=e.oAB({type:u});static \u0275inj=e.cJS({imports:[t.ez,i.aw,i.aw]})}return u})()},1879:(y,f,r)=>{r.d(f,{t:()=>g});var t=r(7434),i=r(649),e=r(5879),d=r(1356),u=r(6223),m=r(2160),b=r(5219),k=r(6663),a=r(3506);function s(n,_){if(1&n){const c=e.EpF();e.TgZ(0,"i",13),e.NdJ("click",function(l){const h=e.CHM(c).clickCallBack;return e.KtG(h(l))}),e.qZA()}}function o(n,_){if(1&n){const c=e.EpF();e.TgZ(0,"i",13),e.NdJ("click",function(l){const h=e.CHM(c).clickCallBack;return e.KtG(h(l))}),e.qZA()}}let g=(()=>{class n{service;cdr;ref;config;lang=localStorage.getItem("language");currentLanguage;allDoctors=[];selectedDoctor;note;timePeriod={from:"",to:""};constructor(c,p,l,v){this.service=c,this.cdr=p,this.ref=l,this.config=v,this.lang=localStorage.getItem("language"),this.currentLanguage=localStorage.getItem("language")??"ar"}ngOnInit(){console.log(JSON.stringify(this.config.data)),this.service.getDoctorPerSpeciality(this.config.data.clinic.specialityId,!1,0,0,(new t.l).GetUserId(),void 0).subscribe({next:c=>{this.allDoctors=c.data.items,this.cdr.detectChanges()},error:()=>{}})}AddDoctorToClinic(){let c=new i.gkL;c.doctorId=this.selectedDoctor,c.clinicAvailabilityId=this.config.data.Availability.id,c.endAt=""==this.timePeriod.to?void 0:this.getTimeFromDateString(this.timePeriod.to),c.startAt=""==this.timePeriod.from?void 0:this.getTimeFromDateString(this.timePeriod.from),c.note=this.note,this.service.addDoctorClinicAvailability(c).subscribe({next:p=>{const l=new KeyboardEvent("keydown",{key:"Escape",keyCode:27});document.dispatchEvent(l)}})}getTimeFromDateString(c){const p=new Date(c);return`${p.getHours().toString().padStart(2,"0")}:${p.getMinutes().toString().padStart(2,"0")}:${p.getSeconds().toString().padStart(2,"0")}`}static \u0275fac=function(p){return new(p||n)(e.Y36(i.r9S),e.Y36(e.sBO),e.Y36(d.E7),e.Y36(d.S))};static \u0275cmp=e.Xpm({type:n,selectors:[["app-add-doctor-to-clinic-availability"]],decls:21,vars:15,consts:[[2,"min-height","255px"],[1,"mb-10"],["translate","org.ChooseDoctor",1,"form-label"],[1,"dropdown"],["styleClass","fc-primng","optionLabel","doctorName","optionValue","id",3,"filter","options","ngModel","showClear","placeholder","ngModelChange"],["translate","SHARED.Note",1,"form-label"],[1,"form-control",3,"ngModel","placeholder","ngModelChange"],["translate","SHARED.from",1,"form-label"],["styleClass","fc-primng","inputId","templatedisplay",3,"ngModel","iconDisplay","showIcon","timeOnly","ngModelChange"],["pTemplate","inputicon"],["translate","SHARED.to",1,"form-label"],[2,"display","contents"],["translate","SHARED.Create",1,"btn","btn-success",2,"width","100%",3,"click"],[1,"pi","pi-clock","pointer-events-none",3,"click"]],template:function(p,l){1&p&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"label",2),e.TgZ(3,"div",3)(4,"p-dropdown",4),e.NdJ("ngModelChange",function(h){return l.selectedDoctor=h}),e.qZA()()(),e.TgZ(5,"div",1),e._UZ(6,"label",5),e.TgZ(7,"div")(8,"input",6),e.NdJ("ngModelChange",function(h){return l.note=h}),e.qZA()()(),e.TgZ(9,"div",1),e._UZ(10,"label",7),e.TgZ(11,"div")(12,"p-calendar",8),e.NdJ("ngModelChange",function(h){return l.timePeriod.from=h}),e.YNc(13,s,1,0,"ng-template",9),e.qZA()()(),e.TgZ(14,"div",1),e._UZ(15,"label",10),e.TgZ(16,"div")(17,"p-calendar",8),e.NdJ("ngModelChange",function(h){return l.timePeriod.to=h}),e.YNc(18,o,1,0,"ng-template",9),e.qZA()()(),e.TgZ(19,"div",11)(20,"button",12),e.NdJ("click",function(){return l.AddDoctorToClinic()}),e.qZA()()()),2&p&&(e.xp6(4),e.Q6J("filter",!0)("options",l.allDoctors)("ngModel",l.selectedDoctor)("showClear",!0)("placeholder","ar"==l.currentLanguage?"\u0627\u062e\u062a\u0627\u0631 \u0637\u0628\u064a\u0628":"Choose A Doctor"),e.xp6(4),e.Q6J("ngModel",l.note)("placeholder","ar"==l.currentLanguage?"\u0627\u0643\u062a\u0628 \u0645\u0644\u0648\u062d\u0638\u0647":"Write a Note "),e.xp6(4),e.Q6J("ngModel",l.timePeriod.from)("iconDisplay","input")("showIcon",!0)("timeOnly",!0),e.xp6(5),e.Q6J("ngModel",l.timePeriod.to)("iconDisplay","input")("showIcon",!0)("timeOnly",!0))},dependencies:[u.Fj,u.JJ,u.On,m.Lt,b.jx,k.Pi,a.f]})}return n})()},7110:(y,f,r)=>{r.d(f,{i:()=>u});var t=r(5879),i=r(8836),e=r(6223),d=r(6128);let u=(()=>{class b{translationService;cdr;renderer;el;checked=!1;lang=localStorage.getItem("language");language=m[1];langs=m;WithRefresh=!1;constructor(a,s,o,g){this.translationService=a,this.cdr=s,this.renderer=o,this.el=g,this.lang=localStorage.getItem("language"),this.checked="en"==this.lang}ngOnInit(){}switchLang(a){var s=this.checked?"ar":"en";this.setLanguage(s),this.translationService.setLanguage(s),localStorage.setItem("language",s),this.lang=s}setLanguage(a){this.langs.forEach(s=>{s.lang===a?(s.active=!0,this.language=s):s.active=!1,"ar"==this.language.lang?(this.changeStylesheet("s1","assets/plugins/global/plugins.bundle.rtl.css"),this.changeStylesheet("s2","assets/css/style.bundle.rtl.css"),this.changeStylesheet("s3","assets/css/customeStyle.rtl.css"),this.toggleDirection(!1)):(this.changeStylesheet("s1","assets/plugins/global/plugins.bundle.css"),this.changeStylesheet("s2","assets/css/style.bundle.css"),this.changeStylesheet("s3","assets/css/customeStyle.css"),this.toggleDirection(!0))}),this.cdr.detectChanges()}toggleDirection(a){const s=this.el.nativeElement.ownerDocument.documentElement;a?(this.renderer.setAttribute(s,"direction","ltr"),this.renderer.setAttribute(s,"dir","ltr"),this.renderer.setStyle(s,"direction","ltr")):(this.renderer.setAttribute(s,"direction","rtl"),this.renderer.setAttribute(s,"dir","rtl"),this.renderer.setStyle(s,"direction","rtl"))}changeStylesheet(a,s){const o=document.getElementById(a);o?o.href=s:console.error("Link element not found")}stateOptions=[{label:"\u0639\u0631\u0628\u064a",value:"ar"},{label:"english",value:"en"}];value=this.lang;ChangeLanguage(a){this.setLanguage(a.value),this.translationService.setLanguage(a.value),localStorage.setItem("language",a.value),this.lang=a.value,this.WithRefresh&&document.location.reload()}static \u0275fac=function(s){return new(s||b)(t.Y36(i.D),t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(t.SBq))};static \u0275cmp=t.Xpm({type:b,selectors:[["app-LangSwitcher"]],inputs:{WithRefresh:"WithRefresh"},decls:2,vars:2,consts:[[2,"text-align","center"],["optionLabel","label","optionValue","value",2,"direction","ltr",3,"options","ngModel","ngModelChange","onChange"]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"p-selectButton",1),t.NdJ("ngModelChange",function(n){return o.value=n})("onChange",function(n){return o.ChangeLanguage(n)}),t.qZA()()),2&s&&(t.xp6(1),t.Q6J("options",o.stateOptions)("ngModel",o.value))},dependencies:[e.JJ,e.On,d.UN]})}return b})();const m=[{lang:"en",name:"English",flag:"./assets/media/flags/united-states.svg"},{lang:"ar",name:"Arabic",flag:"./assets/media/flags/saudi-arabia.svg"},{lang:"zh",name:"Mandarin",flag:"./assets/media/flags/china.svg"},{lang:"es",name:"Spanish",flag:"./assets/media/flags/spain.svg"},{lang:"ja",name:"Japanese",flag:"./assets/media/flags/japan.svg"},{lang:"de",name:"German",flag:"./assets/media/flags/germany.svg"},{lang:"fr",name:"French",flag:"./assets/media/flags/france.svg"}]}}]);