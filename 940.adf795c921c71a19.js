"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[940],{4940:(K,C,l)=>{l.r(C),l.d(C,{MediaModule:()=>G});var m=l(6814),u=l(5118),g=l(649),M=l(3503),e=l(5879),O=l(5619);let b=(()=>{class n{constructor(){}updateMediaData$=new O.X({});updateMediaDataListner$=this.updateMediaData$.asObservable();fireupdateMediaData(){this.updateMediaData$.next(void 0)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var I=l(8472),w=l(8039),h=l(6223),_=l(6663),Z=l(7248);const A=["fileInput"];function S(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div",26),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,a=e.oxw();return e.KtG(a.removeImage(o))}),e.TgZ(2,"span"),e._uU(3," x "),e.qZA()(),e._UZ(4,"img",27),e.qZA()}}function F(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div",26),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,a=e.oxw();return e.KtG(a.removeImage(o))}),e.TgZ(2,"span"),e._uU(3," x "),e.qZA()(),e._UZ(4,"p-image",28),e.qZA()}if(2&n){const t=e.oxw().index,i=e.oxw();e.xp6(4),e.Q6J("src",i.ImageURLs[t])("preview",!0)}}function J(n,s){if(1&n&&(e.TgZ(0,"span",24),e.YNc(1,S,5,0,"div",25),e.YNc(2,F,5,2,"div",25),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.Q6J("ngIf",2===t.type),e.xp6(1),e.Q6J("ngIf",1===t.type)}}let P=(()=>{class n extends M.H{service;cdr;mediaService;config;cts;constructor(t,i,o,a,r){super(),this.service=t,this.cdr=i,this.mediaService=o,this.config=a,this.cts=r}imageTypes=["image/jpg","image/jpeg","image/png","image/gif","image/webp","image/bmp","image/svg"];videoTypes=["video/mp4","video/ogg","video/webm","video/quicktime"];videoLength=0;lang=localStorage.getItem("language");imageUrl="";userName="";mode="Add";mediaFileOrignial=[];ngOnInit(){this.lang=localStorage.getItem("language");let t=localStorage.getItem("user");const i=JSON.parse(t);if(this.imageUrl=i.profileImageUrl,this.userName=i.fullName,this.config.data.post){this.mode="Edit",this.desc=this.config.data.post.description,this.mediaFile=this.config.data.post.mediaFiles,this.mediaFileOrignial=JSON.parse(JSON.stringify(this.config.data.post.mediaFiles));for(let o=0;o<this.config.data.post.mediaFiles.length;o++)this.ImageURLs.push(this.config.data.post.mediaFiles[o].url)}}defaultImage="https://mutabbib-test.start-it-ly.com/assets/logo/png%202.png";onImageError(t){t.target.src=this.defaultImage}base64String="";selectedFiles=[];ImageURLs=[];onFileSelected(t){const i=t.target;i.files&&i.files.length>0&&(this.selectedFiles=Array.from(i.files),this.selectedFiles.forEach(o=>{const a=new FileReader;this.videoTypes.includes(o.type)&&(this.videoLength+=1),a.onload=r=>this.handleReaderLoaded(r,o),a.readAsDataURL(o)}))}handleReaderLoaded(t,i){const o=t.target?.result;this.ImageURLs.push(o);const a=new g.Ueq;a.file={data:i,fileName:i.name},a.type=this.imageTypes.includes(i.type)?1:this.videoTypes.includes(i.type)?2:1,this.mediaFile?.push(a),this.cdr.detectChanges()}fileInput;triggerFileInput(){this.fileInput.nativeElement.click(),this.cdr.detectChanges()}removeImage(t){let i=this.mediaFile?.indexOf(t);this.deletedMediaFileIds.push(this.mediaFileOrignial[i].id),this.mediaFile?.splice(i,1),this.mediaFileOrignial?.splice(i,1),this.ImageURLs?.splice(i,1)}desc="";mediaFile=[];deletedMediaFileIds=[];CreateMedia(){if(this.videoLength>1)return void this.cts.Show("warn","ar"==this.lang?"\u062a\u062d\u0630\u064a\u0631":"Warning","ar"==this.lang?"\u0644\u0627 \u064a\u0645\u0643\u0646\u0643 \u062a\u062d\u0645\u064a\u0644 \u0627\u0643\u062a\u0631 \u0645\u0646 \u0641\u064a\u062f\u064a\u0648 \u0648\u0627\u062d\u062f":"Only One Video you can Upload in one Post . ");if(0==this.videoLength&&0==this.mediaFile?.length&&0===this.desc.length)return void this.cts.Show("warn","ar"==this.lang?"\u062a\u062d\u0630\u064a\u0631":"Warning","ar"==this.lang?"\u064a\u062c\u0628 \u0627\u0636\u0627\u0641\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0646\u0634\u0648\u0631 \u0623\u0648\u0644\u0627":"Please Add Post Details First .. ");let t,i,o,a,r,d;i=1,o=0,a="",r=1,d=1,"Add"==this.mode?this.service.newMedia(this.desc,this.mediaFile,1,0,"","",1,1).subscribe({next:c=>{this.mediaService.fireupdateMediaData(),this.closeLast()},error:c=>{alert("Error Happened")}}):(t=this.config.data.post.id,this.service.editMedia(t,this.desc,this.mediaFile,this.deletedMediaFileIds,1,0,"","",1,1).subscribe({next:c=>{this.mediaService.fireupdateMediaData(),this.closeLast()},error:c=>{alert("Error Happened")}}))}closeLast(){let t=document.querySelectorAll('button[role="button"]');1===t.length?t[0].click():t.length>1?t[t.length-1].click():console.log("No elements found matching the selector.")}static \u0275fac=function(i){return new(i||n)(e.Y36(g.r9S),e.Y36(e.sBO),e.Y36(b),e.Y36(u.S),e.Y36(I.m))};static \u0275cmp=e.Xpm({type:n,selectors:[["app-post-apost"]],viewQuery:function(i,o){if(1&i&&e.Gf(A,5),2&i){let a;e.iGM(a=e.CRH())&&(o.fileInput=a.first)}},features:[e._Bn([u.xA]),e.qOj],decls:27,vars:7,consts:[[1,"main-div"],[1,"pb-20"],[1,"col-sm-12",2,"display","flex","align-items","center"],["shape","circle",3,"image","size","onImageError"],[2,"padding","9px"],[1,"row"],[1,"col-12"],[1,"form-control",3,"placeholder","ngModel","ngModelChange"],[2,"display","flex"],["class","mx-3",4,"ngFor","ngForOf"],[2,"display","flex","margin","5px"],[1,"upload-1",3,"click"],[1,"row","d-block","cursor-pointer"],[1,"svg-icon","svg-icon-muted","svg-icon-2hx"],["xmlns","http://www.w3.org/2000/svg","width","1800px","height","1800px","viewBox","0 0 24 24","fill","none"],["d","M20.97 1H18.03C17.16 1 16.52 1.36 16.23 2C16.07 2.29 16 2.63 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C21.37 8 21.71 7.93 22 7.77C22.64 7.48 23 6.84 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.91 4.93C21.81 5.03 21.66 5.1 21.5 5.11H20.09V5.62L20.1 6.5C20.09 6.67 20.03 6.81 19.91 6.93C19.81 7.03 19.66 7.1 19.5 7.1C19.17 7.1 18.9 6.83 18.9 6.5V5.1L17.5 5.11C17.17 5.11 16.9 4.83 16.9 4.5C16.9 4.17 17.17 3.9 17.5 3.9L18.38 3.91H18.9V2.51C18.9 2.18 19.17 1.9 19.5 1.9C19.83 1.9 20.1 2.18 20.1 2.51L20.09 3.22V3.9H21.5C21.83 3.9 22.1 4.17 22.1 4.5C22.09 4.67 22.02 4.81 21.91 4.93Z","fill","#60b4c0"],["d","M9.00109 10.3811C10.3155 10.3811 11.3811 9.31553 11.3811 8.00109C11.3811 6.68666 10.3155 5.62109 9.00109 5.62109C7.68666 5.62109 6.62109 6.68666 6.62109 8.00109C6.62109 9.31553 7.68666 10.3811 9.00109 10.3811Z","fill","#60b4c0"],["d","M20.97 8H20.5V12.61L20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16V3.03C16 2.63 16.07 2.29 16.23 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.77C21.71 7.93 21.37 8 20.97 8Z","fill","#60b4c0"],["translate","Support.Attach",2,"color","black"],[2,"position","absolute","bottom","20px","left","20px"],["translate","SHARED.Post",1,"btn","btn-success",3,"click"],[1,"fileInpute"],["type","file",1,"form-control",3,"multiple","change"],["fileInput",""],[1,"mx-3"],[4,"ngIf"],[1,"xbutton",3,"click"],["src","../../../../../assets/1.jpeg",2,"width","78px","padding","5px","border-radius","25px"],["alt","Image","width","80",3,"src","preview"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p-avatar",3),e.NdJ("onImageError",function(r){return o.onImageError(r)}),e.qZA(),e.TgZ(4,"span",4),e._uU(5),e.qZA()(),e.TgZ(6,"div",5)(7,"div",6)(8,"textarea",7),e.NdJ("ngModelChange",function(r){return o.desc=r}),e.qZA()()(),e.TgZ(9,"div",8),e.YNc(10,J,3,2,"span",9),e.qZA(),e.TgZ(11,"div")(12,"div",5)(13,"div",10)(14,"div",11),e.NdJ("click",function(){return o.triggerFileInput()}),e.TgZ(15,"div",12)(16,"span",13),e.O4$(),e.TgZ(17,"svg",14),e._UZ(18,"path",15)(19,"path",16)(20,"path",17),e.qZA(),e.kcU(),e._UZ(21,"span",18),e.qZA()()()()()()(),e.TgZ(22,"div",19)(23,"button",20),e.NdJ("click",function(){return o.CreateMedia()}),e.qZA()()(),e.TgZ(24,"span",21)(25,"input",22,23),e.NdJ("change",function(r){return o.onFileSelected(r)}),e.qZA()()),2&i&&(e.xp6(3),e.Q6J("image",o.imageUrl)("size","xlarge"),e.xp6(2),e.hij(" ",o.userName," "),e.xp6(3),e.Q6J("placeholder","en"===o.lang?"Write a Post..":"\u0628\u0645 \u062a\u0641\u0643\u0631 \u061f")("ngModel",o.desc),e.xp6(2),e.Q6J("ngForOf",o.mediaFile),e.xp6(15),e.Q6J("multiple",!0))},dependencies:[m.sg,m.O5,w.q,h.Fj,h.JJ,h.On,_.Pi,Z.E],styles:[".main-div[_ngcontent-%COMP%]{width:100%}.fileInpute[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}.xbutton[_ngcontent-%COMP%]{border:1px solid rgb(255,255,255);background-color:#ffffffa3;width:20px;height:20px;text-align:center;position:relative;top:21px;right:1px;z-index:2;cursor:pointer}.upload-1[_ngcontent-%COMP%]{cursor:pointer;border-radius:3px;margin-right:2px;width:19%}"]})}return n})();var y=l(9773),k=l(5219),T=l(2795);function U(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",24)(1,"button",25),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,a=e.oxw();return e.KtG(a.DeletePost(o))}),e.qZA(),e.TgZ(2,"button",26),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,a=e.oxw();return e.KtG(a.EditPost(o))}),e.qZA()()}}function N(n,s){if(1&n&&e._UZ(0,"img",34),2&n){const t=e.oxw().$implicit;e.Q6J("src",t.url,e.LSH)}}function $(n,s){if(1&n&&(e.TgZ(0,"video",35),e._UZ(1,"source",36),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src",t.url,e.LSH)}}function L(n,s){if(1&n&&(e.YNc(0,N,1,1,"img",32),e.YNc(1,$,2,1,"video",33)),2&n){const t=s.$implicit;e.Q6J("ngIf",1===t.type),e.xp6(1),e.Q6J("ngIf",2===t.type)}}const D=function(){return{"max-width":"640px","margin-top":"2em"}};function H(n,s){if(1&n&&(e.TgZ(0,"div",29)(1,"p-galleria",30),e.YNc(2,L,2,2,"ng-template",31),e.qZA()()),2&n){const t=e.oxw(2).$implicit,i=e.oxw();e.xp6(1),e.Q6J("value",t.mediaFiles)("showItemNavigators",!0)("showThumbnails",!1)("showIndicators",!0)("showIndicatorsOnItem",!0)("responsiveOptions",i.responsiveOptions)("circular",!0)("autoPlay",!1)("transitionInterval",4e3)("containerStyle",e.DdM(10,D))}}function Q(n,s){if(1&n&&e._UZ(0,"img",39),2&n){const t=e.oxw(3).$implicit;e.Q6J("src",t.mediaFiles[0].url,e.LSH)}}function Y(n,s){if(1&n&&(e.TgZ(0,"video",35),e._UZ(1,"source",36),e.qZA()),2&n){const t=e.oxw(3).$implicit;e.xp6(1),e.Q6J("src",t.mediaFiles[0].url,e.LSH)}}function E(n,s){if(1&n&&(e.TgZ(0,"div",37),e.YNc(1,Q,1,1,"img",38),e.YNc(2,Y,2,1,"video",33),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.Q6J("ngIf",1===t.mediaFiles[0].type),e.xp6(1),e.Q6J("ngIf",2===t.mediaFiles[0].type)}}function q(n,s){if(1&n&&(e.ynx(0),e.YNc(1,H,3,11,"div",27),e.YNc(2,E,3,2,"div",28),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",t.mediaFiles.length>1),e.xp6(1),e.Q6J("ngIf",1===t.mediaFiles.length)}}function z(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",8)(1,"div",9),e._UZ(2,"br"),e.TgZ(3,"div",10)(4,"div",11),e._UZ(5,"img",12),e.TgZ(6,"div",13)(7,"div",14),e._uU(8),e.qZA(),e.TgZ(9,"div",15),e._uU(10),e._UZ(11,"span",16),e._uU(12),e.qZA()()()(),e._UZ(13,"div",17),e.TgZ(14,"div",18)(15,"div",19)(16,"button",20),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.KtG(a.isShowMenu=!a.isShowMenu)}),e._uU(17," \u2026 "),e.qZA(),e.YNc(18,U,3,0,"div",21),e.qZA()()(),e.TgZ(19,"div",22),e._uU(20),e.qZA(),e.YNc(21,q,3,2,"ng-container",23),e.qZA()}if(2&n){const t=s.$implicit,i=e.oxw();e.xp6(5),e.Q6J("src",t.ownerImageUrl,e.LSH),e.xp6(3),e.Oqu(t.ownerName),e.xp6(2),e.hij(" ",t.viewsCount," "),e.xp6(2),e.hij(" - ",i.timeAgo(t.createdAt)," "),e.xp6(6),e.Q6J("ngIf",t.isShowMenu),e.xp6(2),e.hij("",t.description," "),e.xp6(1),e.Q6J("ngIf",t.mediaFiles)}}function j(n,s){1&n&&(e.TgZ(0,"div",40),e._UZ(1,"h1",41),e.qZA())}let V=(()=>{class n extends M.H{service;cdr;dialogService;mediaService;cts;currentLanguage;lang=localStorage.getItem("language");constructor(t,i,o,a,r){super(),this.service=t,this.cdr=i,this.dialogService=o,this.mediaService=a,this.cts=r}allMediaData;imageUrl="";showMenue=!1;ngOnInit(){this.lang=localStorage.getItem("language");let t=localStorage.getItem("user");const i=JSON.parse(t);this.imageUrl=i.profileImageUrl,this.mediaService.updateMediaDataListner$.pipe((0,y.R)(this.destroyed$)).subscribe({next:()=>{this.GetAllMedia()}})}GetAllMedia(){let t,i=localStorage.getItem("org");const o=JSON.parse(i);var a=new g.u47(o);t=a.profileId,this.service.getMedia(t,a.organizationType,void 0,void 0,!1,0,100,void 0,void 0).subscribe({next:r=>{this.allMediaData=r.data?.items.map(d=>v.fromJS(d)),this.cdr.detectChanges()},error:()=>{}})}defaultImage="https://mutabbib-test.start-it-ly.com/assets/logo/png%202.png";onImageError(t){t.target.src=this.defaultImage}EditPost(t){this.dialogService.open(P,{data:{post:t},header:"ar"==this.lang?" \u062a\u0639\u062f\u064a\u0644 \u0645\u0646\u0634\u0648\u0631   ":"Edit Post ",width:"50%",maximizable:!0,resizable:!0,draggable:!0,closeOnEscape:!0,dismissableMask:!0,autoZIndex:!0,baseZIndex:9999999999})}DeletePost(t){let i=new g.mNB;i.mediaId=t.id,this.service.deleteMedia(i).pipe((0,y.R)(this.destroyed$)).subscribe({next:o=>{this.cts.Show("success","ar"==this.lang?"\u0639\u0645\u0644\u064a\u0629 \u0646\u0627\u062c\u062d\u0629":"Success Proccee","ar"==this.lang?"\u062a\u0645\u062a \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062d\u0630\u0641 \u0628\u0646\u062c\u0627\u062d":"Deleted Successfully"),this.GetAllMedia()}})}OpenPostModal(){this.dialogService.open(P,{data:{},header:"ar"==this.lang?" \u0646\u0634\u0631  \u0645\u0646\u0634\u0648\u0631 \u062c\u062f\u064a\u062f ":" Create new Post ",width:"50%",maximizable:!0,resizable:!0,draggable:!0,closeOnEscape:!0,dismissableMask:!0,autoZIndex:!0,baseZIndex:9999999999})}onDocumentClick(t){this.allMediaData.forEach(i=>{t.target&&(t.target.closest(".post-actions")||(i.isShowMenu=!1))})}timeAgo(t){const o=Math.floor(((new Date).getTime()-t.getTime())/1e3),a=Math.floor(o/60),r=Math.floor(a/60),d=Math.floor(r/24),c=Math.floor(d/7),f=Math.floor(d/30),x=Math.floor(d/365);let p="";return p=o<60?1===o?"ar"===this.lang?"\u0645\u0646\u0630 \u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629":"1 second ago":"ar"===this.lang?`\u0645\u0646\u0630 ${o} \u062b\u0648\u0627\u0646\u064d`:`${o} seconds ago`:a<60?1===a?"ar"===this.lang?"\u0645\u0646\u0630 \u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629":"1 minute ago":"ar"===this.lang?`\u0645\u0646\u0630 ${a} \u062f\u0642\u0627\u0626\u0642`:`${a} minutes ago`:r<24?1===r?"ar"===this.lang?"\u0645\u0646\u0630 \u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629":"1 hour ago":"ar"===this.lang?`\u0645\u0646\u0630 ${r} \u0633\u0627\u0639\u0627\u062a`:`${r} hours ago`:d<7?1===d?"ar"===this.lang?"\u0645\u0646\u0630 \u064a\u0648\u0645 \u0648\u0627\u062d\u062f":"1 day ago":"ar"===this.lang?`\u0645\u0646\u0630 ${d} \u0623\u064a\u0627\u0645`:`${d} days ago`:c<5?1===c?"ar"===this.lang?"\u0645\u0646\u0630 \u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f":"1 week ago":"ar"===this.lang?`\u0645\u0646\u0630 ${c} \u0623\u0633\u0627\u0628\u064a\u0639`:`${c} weeks ago`:f<12?1===f?"ar"===this.lang?"\u0645\u0646\u0630 \u0634\u0647\u0631 \u0648\u0627\u062d\u062f":"1 month ago":"ar"===this.lang?`\u0645\u0646\u0630 ${f} \u0623\u0634\u0647\u0631`:`${f} months ago`:1===x?"ar"===this.lang?"\u0645\u0646\u0630 \u0633\u0646\u0629 \u0648\u0627\u062d\u062f\u0629":"1 year ago":"ar"===this.lang?`\u0645\u0646\u0630 ${x} \u0633\u0646\u0648\u0627\u062a`:`${x} years ago`,p}responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}];static \u0275fac=function(i){return new(i||n)(e.Y36(g.r9S),e.Y36(e.sBO),e.Y36(u.xA),e.Y36(b),e.Y36(I.m))};static \u0275cmp=e.Xpm({type:n,selectors:[["app-media"]],hostBindings:function(i,o){1&i&&e.NdJ("click",function(r){return o.onDocumentClick(r)},!1,e.evT)},features:[e._Bn([u.xA]),e.qOj],decls:11,vars:2,consts:[["id","kt_timeline_widget_2_card",1,"card",2,"width","60%","margin","0 auto","margin-top","30px"],[1,"card-header"],[1,"card-title"],["translate","media.posts",2,"padding","14px"],[1,"car-toolbard"],["translate","media.createNewPost",1,"btn","btn-success","hover-button",2,"margin-top","15px",3,"click"],["class","post-container",4,"ngFor","ngForOf"],["style","text-align: center;padding: 20px;",4,"ngIf"],[1,"post-container"],[1,"row"],[1,"col-md-6"],[2,"display","flex"],["alt","Profile Image",1,"profile-image",2,"margin-left","6px","margin-right","6px",3,"src"],[1,"post-details"],[1,"post-owner"],[1,"post-time"],["translate","media.view"],[1,"col-md-3"],[1,"col-md-3",2,"text-align","end"],[1,"post-actions"],[1,"dots-button",3,"click"],["class","post-menu",4,"ngIf"],[1,"post-description"],[4,"ngIf"],[1,"post-menu"],["translate","media.removePost",1,"menu-item",3,"click"],["translate","media.editPost",1,"menu-item",3,"click"],["style","display: flex;  justify-content: center;",4,"ngIf"],["class","post-media",4,"ngIf"],[2,"display","flex","justify-content","center"],[3,"value","showItemNavigators","showThumbnails","showIndicators","showIndicatorsOnItem","responsiveOptions","circular","autoPlay","transitionInterval","containerStyle"],["pTemplate","item"],["style","width: 100%; min-height: 420px; display: block;",3,"src",4,"ngIf"],["controls","",4,"ngIf"],[2,"width","100%","min-height","420px","display","block",3,"src"],["controls",""],["type","video/mp4",3,"src"],[1,"post-media"],["style","max-width: 100%;max-height: 700px","alt","Media Image",3,"src",4,"ngIf"],["alt","Media Image",2,"max-width","100%","max-height","700px",3,"src"],[2,"text-align","center","padding","20px"],["translate","media.noposts",1,"text-gray-600"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"h1",3),e.qZA(),e.TgZ(4,"div",4)(5,"button",5),e.NdJ("click",function(){return o.OpenPostModal()}),e.qZA()()(),e._UZ(6,"br"),e.TgZ(7,"div"),e.YNc(8,z,22,7,"div",6),e.YNc(9,j,2,0,"div",7),e.qZA()(),e._UZ(10,"br")),2&i&&(e.xp6(8),e.Q6J("ngForOf",o.allMediaData),e.xp6(1),e.Q6J("ngIf",0===(null==o.allMediaData?null:o.allMediaData.length)))},dependencies:[m.sg,m.O5,_.Pi,k.jx,T.dz],styles:[".handle-center[_ngcontent-%COMP%]{width:50%;margin:40px auto 0;height:130px}.hr-container[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px}.hr-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:0;height:1px;background-color:#474747}.fileInpute[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}.post-container[_ngcontent-%COMP%]{margin:0 auto 15px;width:90%;border-bottom:1px solid #8080802e}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px}.profile-image[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;margin-right:10px}.post-details[_ngcontent-%COMP%]{display:flex;flex-direction:column}.post-owner[_ngcontent-%COMP%]{font-weight:700;color:#365899}.post-time[_ngcontent-%COMP%]{font-size:12px;color:#777}.post-description[_ngcontent-%COMP%]{margin:6px 6px 10px;font-size:14px;line-height:1.5;padding-right:50px;padding-top:21px;white-space:pre-wrap}.post-media[_ngcontent-%COMP%]{text-align:center}.post-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .post-media[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{max-width:80%;border-radius:8px;margin-bottom:10px}.post-footer[_ngcontent-%COMP%]{font-size:12px;color:#777;border-top:1px solid #ddd;padding-top:10px}.post-header[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.post-actions[_ngcontent-%COMP%]{position:absolute;left:0;top:0}.post-menu[_ngcontent-%COMP%]{position:absolute;top:30px;left:0;background-color:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 2px 5px #0000001a;z-index:100}.menu-item[_ngcontent-%COMP%]{padding:10px 15px;border:none;background-color:transparent;cursor:pointer;width:100%;text-align:left}.menu-item[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.post-actions[_ngcontent-%COMP%]{margin-left:auto;position:relative}.dots-button[_ngcontent-%COMP%]{background:none;border:none;font-size:24px;cursor:pointer}"]})}return n})();class v extends g.Zg3{isShowMenu=!1;constructor(s){super(s)}init(s){super.init(s),this.isShowMenu=!1}static fromJS(s){s="object"==typeof s?s:{};let t=new v;return t.init(s),t}}var B=l(7304),R=l(3660);let G=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[m.ez,B.Bz.forChild([{path:"media",component:V,data:{animation:"media"}}]),w.F,h.u5,_.aw,R.q,Z.$,T.kT]})}return n})()}}]);