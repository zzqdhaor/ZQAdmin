(function(){"use strict";var e={3707:function(e,t,n){var a=n(9242),l=n(1600),i=n(1407),o=n(4605),r=n(9762),s=n(2034),d=n(9518),u=n(6859),c=n(5210),m=n(3396);const p=e=>((0,m.dD)("data-v-bfce789e"),e=e(),(0,m.Cn)(),e),h=p((()=>(0,m._)("div",{style:{display:"flex",height:"60px","align-items":"center"}},[(0,m._)("span",{style:{"font-family":"'system-ui',serif","font-size":"25px","margin-left":"20px"}},"ZQAdmin")],-1))),f={id:"routes"};function w(e,t,n,a,l,p){const w=c.ZP,g=(0,m.up)("router-link"),_=u.ZP,v=d.Z,y=s.Z,k=(0,m.up)("router-view"),Z=r.Z,W=o.ZP,C=i.Z;return(0,m.wg)(),(0,m.j4)(C,null,{default:(0,m.w5)((()=>[(0,m.Wm)(W,null,{default:(0,m.w5)((()=>[(0,m.Wm)(y,{style:{height:"60px"},bordered:""},{default:(0,m.w5)((()=>[(0,m.Wm)(v,{id:"grid"},{default:(0,m.w5)((()=>[(0,m.Wm)(w,{span:l.width>800?4:0,style:{height:"60px"}},{default:(0,m.w5)((()=>[h])),_:1},8,["span"]),(0,m.Wm)(w,{id:"route-tag",span:l.width>800?14:18},{default:(0,m.w5)((()=>[(0,m._)("div",f,[(0,m.Wm)(g,{to:"/status"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Status ")])),_:1}),(0,m.Wm)(g,{to:"/file"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Files ")])),_:1}),(0,m.Wm)(g,{to:"/xterm"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Term ")])),_:1}),(0,m.Wm)(g,{to:"/about"},{default:(0,m.w5)((()=>[(0,m.Uk)(" About ")])),_:1})])])),_:1},8,["span"]),(0,m.Wm)(w,{span:"6",id:"other-links"},{default:(0,m.w5)((()=>[(0,m.Wm)(_,{tag:"a",href:"logout",quaternary:""},{default:(0,m.w5)((()=>[(0,m.Uk)("Logout")])),_:1}),(0,m.Wm)(_,{tag:"a",href:"https://github.com",quaternary:""},{default:(0,m.w5)((()=>[(0,m.Uk)("GitHub")])),_:1})])),_:1})])),_:1})])),_:1}),(0,m.Wm)(Z,null,{default:(0,m.w5)((()=>[(0,m.Wm)(k)])),_:1})])),_:1})])),_:1})}var g={name:"App",components:{},data(){return{width:window.innerWidth}},mounted(){window.addEventListener("resize",(()=>{this.width=window.innerWidth}))}},_=n(89);const v=(0,_.Z)(g,[["render",w],["__scopeId","data-v-bfce789e"]]);var y=v,k=n(9522),Z=n(626);const W=e=>((0,m.dD)("data-v-9238c542"),e=e(),(0,m.Cn)(),e),C={id:"about-div"},b=["src"],H=W((()=>(0,m._)("br",null,null,-1))),P=W((()=>(0,m._)("span",{style:{"font-size":"40px"}},"ZQ Admin",-1))),x=W((()=>(0,m._)("br",null,null,-1))),F=W((()=>(0,m._)("span",{style:{"font-style":"italic"}},"Manage your service easily!",-1))),D=W((()=>(0,m._)("br",null,null,-1))),z=W((()=>(0,m._)("br",null,null,-1))),M=W((()=>(0,m._)("a",{href:"https://github.com"},"Github",-1)));function j(e,t,a,l,i,o){const r=Z.Z,s=k.ZP;return(0,m.wg)(),(0,m.iD)("div",C,[(0,m.Wm)(s,{id:"about-card"},{default:(0,m.w5)((()=>[(0,m._)("img",{src:n(8655),style:{"max-width":"min(80%, 400px)"}},null,8,b),H,P,x,F,D,z,(0,m.Wm)(r,null,{default:(0,m.w5)((()=>[M])),_:1})])),_:1})])}var S={name:"MyAbout"};const U=(0,_.Z)(S,[["render",j],["__scopeId","data-v-9238c542"]]);var N=U,O=n(553),I=n(3968),R=n(7139);const A=e=>((0,m.dD)("data-v-341c088c"),e=e(),(0,m.Cn)(),e),T={id:"align-left"},q=A((()=>(0,m._)("br",null,null,-1))),B=A((()=>(0,m._)("br",null,null,-1)));function E(e,t,n,a,l,i){const o=I.Z,r=k.ZP,s=O.Z;return(0,m.wg)(),(0,m.j4)(s,{show:isNaN(n.percentage)},{default:(0,m.w5)((()=>[(0,m.Wm)(r,{class:"small-card inline-card",title:"Memory Info"},{default:(0,m.w5)((()=>[(0,m.Wm)(o,{id:"progress",type:"line",percentage:parseInt(n.percentage.toString()),color:n.percentage>=90?"red":""},null,8,["percentage","color"]),(0,m._)("div",T,[(0,m._)("span",null,"Total Memory: "+(0,R.zw)(n.total_size),1),q,(0,m._)("span",null,"Used: "+(0,R.zw)(n.used),1),B,(0,m._)("span",null,"Available: "+(0,R.zw)(n.total_size-n.used),1)])])),_:1})])),_:1},8,["show"])}var $={name:"memInfo",props:{percentage:Number,total_size:Number,used:Number}};const L=(0,_.Z)($,[["render",E],["__scopeId","data-v-341c088c"]]);var V=L;const Y=e=>((0,m.dD)("data-v-8bf71c82"),e=e(),(0,m.Cn)(),e),G={id:"align-left"},K=Y((()=>(0,m._)("br",null,null,-1))),Q=Y((()=>(0,m._)("br",null,null,-1)));function X(e,t,n,a,l,i){const o=I.Z,r=k.ZP,s=O.Z;return(0,m.wg)(),(0,m.j4)(s,{show:isNaN(n.percentage)},{default:(0,m.w5)((()=>[(0,m.Wm)(r,{class:"small-card inline-card",title:"Disk Info"},{default:(0,m.w5)((()=>[(0,m.Wm)(o,{id:"progress",type:"line",percentage:parseInt(n.percentage.toString()),color:n.percentage>=90?"red":""},null,8,["percentage","color"]),(0,m._)("div",G,[(0,m._)("span",null,"Total Size: "+(0,R.zw)(n.total_size),1),K,(0,m._)("span",null,"Used: "+(0,R.zw)(n.used),1),Q,(0,m._)("span",null,"Available: "+(0,R.zw)(n.total_size-n.used),1)])])),_:1})])),_:1},8,["show"])}var J={name:"diskInfo",props:{percentage:Number,total_size:Number,used:Number}};const ee=(0,_.Z)(J,[["render",X],["__scopeId","data-v-8bf71c82"]]);var te=ee;function ne(e,t,n,a,l,i){const o=te,r=c.ZP,s=V,u=d.Z;return(0,m.wg)(),(0,m.j4)(u,{id:"grid-s","item-responsive":!0,"x-gap":"30","y-gap":"30",cols:"200:1 800:2 1200:3 4"},{default:(0,m.w5)((()=>[(0,m.Wm)(r,{class:"center-gi"},{default:(0,m.w5)((()=>[(0,m.Wm)(o,{percentage:100*(1-l.availableDisk/l.totalDisk),total_size:l.totalDisk,used:l.totalDisk-l.availableDisk},null,8,["percentage","total_size","used"])])),_:1}),(0,m.Wm)(r,{class:"center-gi"},{default:(0,m.w5)((()=>[(0,m.Wm)(s,{percentage:100*(1-l.availableMem/l.totalMem),total_size:l.totalMem,used:l.totalMem-l.availableMem},null,8,["percentage","total_size","used"])])),_:1})])),_:1})}var ae=n(4311),le={name:"MyStatus",mounted(){let e=()=>(ae.Z.get("api/info").then((e=>{this.totalMem=e.data["totalMem"],this.totalDisk=e.data["totalDisk"],this.availableMem=e.data["availableMem"],this.availableDisk=e.data["availableDisk"]})),e);this.timer=setInterval(e(),3e3)},unmounted(){clearInterval(this.timer)},components:{MemInfo:V,DiskInfo:te},data(){let e;return{timer:e,totalMem:NaN,availableMem:NaN,totalDisk:NaN,availableDisk:NaN}}};const ie=(0,_.Z)(le,[["render",ne]]);var oe=ie,re=n(2483),se=n(3280),de=n(7602),ue=n(5396),ce=n(8333),me=n(4786),pe=n(6915);function he(e,t,n,a,l,i){const o=(0,m.up)("DeleteOutlined"),r=me.g,s=u.ZP,d=ue.Z,c=k.ZP,p=pe.Z;return(0,m.wg)(),(0,m.j4)(p,{show:n.show,hoverable:"",style:{padding:"20px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(c,{style:{"max-width":"600px","min-height":"180px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(d,{align:"center",vertical:""},{default:(0,m.w5)((()=>[(0,m.Wm)(r,{size:"60"},{default:(0,m.w5)((()=>[(0,m.Wm)(o)])),_:1}),(0,m.Uk)(' Delete "'+(0,R.zw)(n.filepath)+'" ? ',1),(0,m.Wm)(d,{size:"large"},{default:(0,m.w5)((()=>[(0,m.Wm)(s,{onClick:n.confirmHandler,color:"red"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Confirm ")])),_:1},8,["onClick"]),(0,m.Wm)(s,{onClick:n.cancelHandler},{default:(0,m.w5)((()=>[(0,m.Uk)(" Cancel ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}var fe=n(5434),we={name:"ConfirmDeleteModal",props:{show:{type:Boolean,default:!1},filepath:{type:String},cancelHandler:Function,confirmHandler:Function},components:{DeleteOutlined:fe.Z},setup(){return{DeleteOutlined:fe.Z}}};const ge=(0,_.Z)(we,[["render",he]]);var _e=ge,ve=n(3008);function ye(e,t,n,a,l,i){const o=ve.Z,r=u.ZP,s=ue.Z,d=k.ZP,c=pe.Z;return(0,m.wg)(),(0,m.j4)(c,{show:this.show,hoverable:"",style:{padding:"20px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(d,{style:{"max-width":"600px","min-height":"180px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(s,{align:"center",vertical:""},{default:(0,m.w5)((()=>[(0,m.Uk)(" New name: "),(0,m.Wm)(o,{placeholder:"",value:l.newName,"onUpdate:value":t[0]||(t[0]=e=>l.newName=e)},null,8,["value"]),(0,m.Wm)(s,{size:"large"},{default:(0,m.w5)((()=>[(0,m.Wm)(r,{onClick:i.confirmHandler,color:"green"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Rename ")])),_:1},8,["onClick"]),(0,m.Wm)(r,{onClick:n.cancelHandler},{default:(0,m.w5)((()=>[(0,m.Uk)(" Cancel ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}var ke=n(4870),Ze={name:"RenameModal",data(){return{newName:(0,ke.iH)(null)}},props:{show:{type:Boolean,default:!1},cancelHandler:Function},inject:["renameConfirmHandler"],methods:{confirmHandler(){this.renameConfirmHandler(this.newName)}}};const We=(0,_.Z)(Ze,[["render",ye]]);var Ce=We;function be(e,t,n,l,i,o){const r=Ce,s=_e,d=(0,m.up)("InsertDriveFileRound"),c=(0,m.up)("FolderOpenRound"),p=me.g,h=(0,m.up)("DeleteOutlineOutlined"),f=u.ZP,w=(0,m.up)("ContentCopyRound"),g=(0,m.up)("ContentCutRound"),_=(0,m.up)("DriveFileRenameOutlineOutlined"),v=ce.Z,y=ue.Z;return(0,m.wg)(),(0,m.iD)(m.HY,null,[(0,m.Wm)(r,{show:i.renameShow,"cancel-handler":o.renameCancelHandler,"confirm-handler":o.renameConfirmHandler},null,8,["show","cancel-handler","confirm-handler"]),(0,m.Wm)(s,{filepath:i.ownPath,show:i.confirm,"cancel-handler":o.cancelHandler,"confirm-handler":o.deleteConfirmHandler},null,8,["filepath","show","cancel-handler","confirm-handler"]),(0,m.Wm)(y,{onMouseover:i.setVis,onMouseleave:i.disVis,align:"center"},{default:(0,m.w5)((()=>[(0,m.Wm)(p,{size:"40"},{default:(0,m.w5)((()=>[!1===n.type?((0,m.wg)(),(0,m.j4)(d,{key:0})):((0,m.wg)(),(0,m.j4)(c,{key:1}))])),_:1}),(0,m._)("span",null,(0,R.zw)(n.filename),1),(0,m.wy)((0,m.Wm)(v,{style:{position:"absolute",bottom:"10px",right:"10px","background-color":"white","border-radius":"40px","box-shadow":"#e5e5e5 0 0 10px 3px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(f,{color:"grey",circle:"",quaternary:"",onClick:t[0]||(t[0]=(0,a.iM)((e=>o.deleteHandler(e)),["prevent"]))},{icon:(0,m.w5)((()=>[(0,m.Wm)(p,{size:"21"},{default:(0,m.w5)((()=>[(0,m.Wm)(h)])),_:1})])),_:1}),(0,m.Wm)(f,{color:"grey",circle:"",quaternary:"",onClick:t[1]||(t[1]=(0,a.iM)((e=>o.copyHandler(e,!1)),["prevent"]))},{icon:(0,m.w5)((()=>[(0,m.Wm)(w)])),_:1}),(0,m.Wm)(f,{color:"grey",circle:"",quaternary:"",onClick:t[2]||(t[2]=(0,a.iM)((e=>o.copyHandler(e,!0)),["prevent"]))},{icon:(0,m.w5)((()=>[(0,m.Wm)(g)])),_:1}),(0,m.Wm)(f,{color:"grey",circle:"",quaternary:"",onClick:t[3]||(t[3]=(0,a.iM)((e=>o.renameHandler(e)),["prevent"]))},{icon:(0,m.w5)((()=>[(0,m.Wm)(p,{size:"22"},{default:(0,m.w5)((()=>[(0,m.Wm)(_)])),_:1})])),_:1})])),_:1},512),[[a.F8,i.vis]])])),_:1},8,["onMouseover","onMouseleave"])],64)}var He=n(6583),Pe=n(5620),xe=n(385),Fe=n(6308),De=n(7962),ze=n(7372),Me={name:"singleEntry",props:{type:Boolean,filename:String},components:{ConfirmDeleteModal:_e,FolderOpenRound:He.Z,InsertDriveFileRound:Pe.Z,DeleteOutlineOutlined:xe.Z,ContentCopyRound:Fe.Z,ContentCutRound:De.Z,DriveFileRenameOutlineOutlined:ze.Z,RenameModal:Ce},data(){const e=()=>{".."!==this.filename&&(this.vis=!0)},t=()=>{this.vis=!1};return{inCopyStatus:!1,vis:!1,setVis:e,disVis:t,confirm:!1,renameShow:!1,ownPath:this.path.join("")+this.filename}},setup(){return{FolderOpenRound:He.Z}},provide(){return{renameConfirmHandler:this.renameConfirmHandler}},inject:["reload","path","selectedCopyFile"],methods:{renameHandler(e){e.stopPropagation(),this.renameShow=!0},copyHandler(e,t){e.stopPropagation(),this.selectedCopyFile(this.ownPath,t)},cancelHandler(){this.confirm=!1},renameCancelHandler(){this.renameShow=!1},renameConfirmHandler(e){ae.Z.post("api/file/rename",{from:this.ownPath,to:e}).then((e=>{!0===e.data["success"]?this.reload():this.renameShow=!1}))},deleteConfirmHandler(){ae.Z.post("api/file/delete",{filePath:this.ownPath}).then((e=>{!0===e.data["success"]?this.reload():this.confirm=!1}))},deleteHandler(e){e.stopPropagation(),this.confirm=!0}}};const je=(0,_.Z)(Me,[["render",be]]);var Se=je,Ue=n(683),Ne=n(9464);function Oe(e,t,n,a,l,i){const o=u.ZP,r=ue.Z,s=k.ZP,d=pe.Z;return(0,m.wg)(),(0,m.iD)("template",null,[(0,m.Wm)(d,{show:this.show,hoverable:"",style:{padding:"20px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(s,{style:{"max-width":"600px","min-height":"180px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(r,{align:"center",vertical:""},{default:(0,m.w5)((()=>[(0,m.Uk)(' "'+(0,R.zw)(this.name)+'" is a file, do you mean downloading it? ',1),(0,m.Wm)(r,{size:"large",style:{"margin-top":"30px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(o,{onClick:i.downHandler,color:"green"},{default:(0,m.w5)((()=>[(0,m.Uk)("Download")])),_:1},8,["onClick"]),(0,m.Wm)(o,{onClick:n.cancelHandler},{default:(0,m.w5)((()=>[(0,m.Uk)("Cancel")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])])}var Ie={name:"FilePerformModal",props:{show:{type:Boolean,default:!1},name:{type:String},cancelHandler:Function},inject:["path"],methods:{downHandler(){window.open("api/file/get-file?path="+encodeURI(this.path.join("")+this.name))}}};const Re=(0,_.Z)(Ie,[["render",Oe]]);var Ae=Re;function Te(e,t,n,a,l,i){const o=ve.Z,r=u.ZP,s=ue.Z,d=k.ZP,c=pe.Z;return(0,m.wg)(),(0,m.j4)(c,{show:this.show,hoverable:"",style:{padding:"20px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(d,{style:{"max-width":"600px","min-height":"180px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(s,{align:"center",vertical:""},{default:(0,m.w5)((()=>[(0,m.Uk)(" Folder name: "),(0,m.Wm)(o,{placeholder:"",value:l.dirName,"onUpdate:value":t[0]||(t[0]=e=>l.dirName=e)},null,8,["value"]),(0,m.Wm)(s,{size:"large"},{default:(0,m.w5)((()=>[(0,m.Wm)(r,{onClick:i.confirmHandler,color:"green"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Confirm ")])),_:1},8,["onClick"]),(0,m.Wm)(r,{onClick:n.cancelHandler},{default:(0,m.w5)((()=>[(0,m.Uk)(" Cancel ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}var qe={name:"MkdirModal",data(){return{dirName:null}},props:{show:{type:Boolean,default:!1},cancelHandler:Function},inject:["mkdirHandler"],methods:{confirmHandler(){this.mkdirHandler(this.dirName)}}};const Be=(0,_.Z)(qe,[["render",Te]]);var Ee=Be;function $e(e,t,n,l,i,s){const d=Ee,c=Ae,p=Ne.ZP,h=r.Z,f=o.ZP,w=u.ZP,g=Ue.Z,_=(0,m.up)("ContentPasteFilled"),v=me.g,y=ue.Z,k=Se,Z=de.Z,W=se.ZP,C=O.Z;return(0,m.wg)(),(0,m.j4)(C,{show:i.waitFor},{default:(0,m.w5)((()=>[(0,m.Wm)(d,{show:i.mkdirShow,"cancel-handler":s.mkdirCancelHandler},null,8,["show","cancel-handler"]),(0,m.Wm)(c,{show:i.filePerform,name:i.name,"cancel-handler":s.cancelHandler},null,8,["show","name","cancel-handler"]),(0,m.Wm)(y,{justify:"start",align:"start",style:{"margin-top":"10px",height:"35px","margin-left":"10px","margin-right":"10px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(f,{"native-scrollbar":!1,style:{"max-width":"50vw",height:"35px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(h,null,{default:(0,m.w5)((()=>[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(i.path.length,(e=>((0,m.wg)(),(0,m.j4)(p,{key:e,onClick:t=>s.posHandler(e)},{default:(0,m.w5)((()=>[(0,m.Uk)((0,R.zw)(i.path[e-1]),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),(0,m.Wm)(y,null,{default:(0,m.w5)((()=>[(0,m.Wm)(g,{"show-file-list":!1,action:"/admin/api/file/upload",data:{to:i.path.join("")},onFinish:s.reload},{default:(0,m.w5)((()=>[(0,m.Wm)(w,{size:"small"},{default:(0,m.w5)((()=>[(0,m.Uk)(" Upload File ")])),_:1})])),_:1},8,["data","onFinish"]),(0,m.Wm)(w,{size:"small",onClick:s.mkdir},{default:(0,m.w5)((()=>[(0,m.Uk)(" New Folder ")])),_:1},8,["onClick"]),(0,m.wy)((0,m.Wm)(w,{size:"small",onClick:s.confirmDistance,quaternary:""},{icon:(0,m.w5)((()=>[(0,m.Wm)(v,{size:"20"},{default:(0,m.w5)((()=>[(0,m.Wm)(_)])),_:1})])),default:(0,m.w5)((()=>[(0,m.Uk)(" Paste ")])),_:1},8,["onClick"]),[[a.F8,i.inCopyStatus]])])),_:1})])),_:1}),(0,m.Wm)(f,{id:"list","native-scrollbar":!1},{default:(0,m.w5)((()=>[(0,m.Wm)(W,{ref:"fileList",clickable:"",hoverable:""},{default:(0,m.w5)((()=>[((0,m.wg)(!0),(0,m.iD)(m.HY,null,(0,m.Ko)(i.files,(e=>((0,m.wg)(),(0,m.j4)(Z,{onClick:t=>s.open(e),key:e,style:{cursor:"default","padding-left":"5px","padding-bottom":"3px","padding-top":"3px"}},{default:(0,m.w5)((()=>[(0,m.Wm)(k,{filename:e["filename"],type:e["directory"]},null,8,["filename","type"])])),_:2},1032,["onClick"])))),128))])),_:1},512)])),_:1})])),_:1},8,["show"])}n(541),n(7658);var Le=n(930),Ve={name:"fileManage",components:{MkdirModal:Ee,FilePerformModal:Ae,SingleEntry:Se,ContentPasteFilled:Le.Z},setup(){return{ContentPasteFilled:Le.Z}},data(){return{path:[],files:[],mkdirShow:!1,waitFor:!1,confirmDialog:!1,inCopyStatus:!1,cpPath:null,isCut:!1,filePerform:!1,name:name}},provide(){return{reload:this.reload,path:this.path,selectedCopyFile:this.selectedCopyFile,mkdirHandler:this.mkdirHandler}},methods:{mkdir(){this.mkdirShow=!0},mkdirCancelHandler(){this.mkdirShow=!1},mkdirHandler(e){ae.Z.get("api/file/mkdir?to="+encodeURI(this.path.join(""))+"&name="+e),this.mkdirShow=!1,this.reload()},posHandler(e){if(e===this.path.length)return;let t=this.path.length-e;for(let n=0;n<t;n++)this.path.pop();this.reload()},cancelHandler(){this.filePerform=!1},selectedCopyFile(e,t){this.inCopyStatus=!0,this.cpPath=e,this.isCut=t},confirmDistance(){this.waitFor=!0,this.isCut?ae.Z.post("api/file/cut",{from:this.cpPath,to:this.path.join("")}).then((()=>{this.reload(),this.waitFor=!1})):ae.Z.post("api/file/copy",{from:this.cpPath,to:this.path.join("")}).then((()=>{this.reload(),this.waitFor=!1})),this.isCut=!1,this.inCopyStatus=!1},reload(){this.waitFor=!0,ae.Z.post("api/file/list",{filePath:this.path.join("")}).then((e=>{this.files=e.data["files"],this.waitFor=!1,1!==this.path.length&&this.files.unshift({filename:"..",directory:!0})}))},open(e){e.directory?this.openFolder(e):(this.filePerform=!0,this.name=e.filename)},openFolder(e){this.waitFor=!0,".."===e.filename?(this.path.pop(),ae.Z.post("api/file/list",{filePath:this.path.join("")}).then((e=>{!1===e.data["success"]?alert("error"):(this.files=e.data["files"],1!==this.path.length&&this.files.unshift({filename:"..",directory:!0}))})).finally((()=>this.waitFor=!1))):(this.path.push(e.filename+"/"),ae.Z.post("api/file/list",{filePath:this.path.join("")}).then((e=>{!1===e.data["success"]?(alert("error"),this.path.pop()):(this.files=e.data["files"],1!==this.path.length&&this.files.unshift({filename:"..",directory:!0}))})).finally((()=>this.waitFor=!1)))}},mounted(){ae.Z.post("api/file/list",{filePath:"/"}).then((e=>{this.files=e.data["files"],this.path.push("/")}))}};const Ye=(0,_.Z)(Ve,[["render",$e],["__scopeId","data-v-f0549c10"]]);var Ge=Ye;const Ke={id:"terminal-box"},Qe={id:"terminal",ref:"terminal"};function Xe(e,t,n,a,l,i){return(0,m.wg)(),(0,m.iD)("div",Ke,[(0,m._)("div",Qe,null,512)])}var Je=n(6537),et=n(7114),tt=n(2233),nt={name:"XTerm",mounted(){let e=new Je.Terminal({renderType:"canvas",convertEol:!0,cursorBlink:!0,lineHeight:1});e.open(this.$refs["terminal"]);let t=new et.FitAddon;e.loadAddon(t);let n=("https:"===window.location.protocol?"wss://":"ws://")+window.location.host+"/term-ws",a=new WebSocket(n);a.onopen=()=>{a.send("##$$RSZ "+t.proposeDimensions().cols+" "+t.proposeDimensions().rows)},e.loadAddon(new tt.AttachAddon(a)),t.fit(),e.write("Connecting...\n\r"),window.addEventListener("resize",(()=>{a.send("##$$RSZ "+t.proposeDimensions().cols+" "+t.proposeDimensions().rows),t.fit()}))}};const at=(0,_.Z)(nt,[["render",Xe],["__scopeId","data-v-a545a5d4"]]);var lt=at;const it=(0,a.ri)(y),ot=[{path:"/about",component:N},{path:"/status",component:oe},{path:"/file",component:Ge},{path:"/xterm",component:lt}],rt=(0,re.p7)({history:(0,re.PO)("/"),routes:ot});it.use(l.Z),it.use(rt),it.mount("#app")},8655:function(e,t,n){e.exports=n.p+"img/about_logo.0e858b48.png"}},t={};function n(a){var l=t[a];if(void 0!==l)return l.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,l,i){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],l=e[u][1],i=e[u][2];for(var r=!0,s=0;s<a.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(r=!1,i<o&&(o=i));if(r){e.splice(u--,1);var d=l();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,l,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,i,o=a[0],r=a[1],s=a[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(l in r)n.o(r,l)&&(n.m[l]=r[l]);if(s)var u=s(n)}for(t&&t(a);d<o.length;d++)i=o[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},a=self["webpackChunkzq_admin"]=self["webpackChunkzq_admin"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3707)}));a=n.O(a)})();
//# sourceMappingURL=app.b133aded.js.map