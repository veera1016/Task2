"use strict";(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[2642],{62482:(ts,p,s)=>{s.d(p,{F:()=>E});var t=s(92132),d=s(21272),P=s(94061),y=s(85963),f=s(2129),T=s(28604),M=s(54894);const E=({displayedFilters:l})=>{const[D,O]=d.useState(!1),{formatMessage:S}=(0,M.A)(),B=d.useRef(null),W=()=>{O(u=>!u)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(P.a,{paddingTop:1,paddingBottom:1,children:[(0,t.jsx)(y.$,{variant:"tertiary",ref:B,startIcon:(0,t.jsx)(T.A,{}),onClick:W,size:"S",children:S({id:"app.utils.filters",defaultMessage:"Filters"})}),D&&(0,t.jsx)(f.LC,{displayedFilters:l,isVisible:D,onToggle:W,source:B})]}),(0,t.jsx)(f.cZ,{filtersSchema:l})]})}},42642:(ts,p,s)=>{s.d(p,{ProtectedListPage:()=>fs,e:()=>ls});var t=s(92132),d=s(21272),P=s(85963),y=s(61485),f=s(99248),T=s(6239),M=s(83997),E=s(94061),l=s(30893),D=s(90151),O=s(68074),S=s(67030),B=s(25641),W=s(90361),u=s(33363),Z=s(50215),g=s(88353),A=s(38413),F=s(55356),J=s(74773),X=s(4198),e=s(2129),I=s(5409),$=s(54894),q=s(17703),_=s(93236),es=s(62482),h=s(34313),_s=s(41909),ds=s(50612),Es=s(37679),Ms=s(60043),ms=s(61535),b=s(12083),is=s(27551),as=s(1927),Ts=s(15126),Is=s(63299),Us=s(67014),Rs=s(59080),Bs=s(79275),Ws=s(14718),us=s(82437),xs=s(5790),Ks=s(35223),js=s(74930),ps=s(2600),ys=s(48940),Ss=s(41286),Fs=s(56336),$s=s(13426),Ns=s(84624),zs=s(77965),Vs=s(54257),Ys=s(71210),Hs=s(51187),Qs=s(39404),Gs=s(58692),Zs=s(501),Js=s(57646),Xs=s(23120),bs=s(44414),ks=s(25962),ws=s(14664),qs=s(42588),st=s(90325),tt=s(62785),et=s(87443),at=s(41032),nt=s(22957),it=s(93179),ot=s(73055),lt=s(15747),rt=s(85306),_t=s(26509),dt=s(32058),Et=s(81185),Mt=s(82261),mt=s(17493),ct=s(72810),Pt=s(18022);const cs=({onClick:a})=>{const{formatMessage:i}=(0,$.A)();return(0,t.jsx)(P.$,{onClick:a,startIcon:(0,t.jsx)(h.A,{}),size:"S",children:i({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})},Ps=({onToggle:a})=>{const[i,x]=d.useState("create"),[z,V]=d.useState(""),{formatMessage:m}=(0,$.A)(),C=(0,e.hN)(),{lockApp:Y,unlockApp:U}=(0,e.MA)(),{_unstableFormatAPIError:H,_unstableFormatValidationErrors:K}=(0,e.wq)(),n=(0,_.p)(Ds,async()=>(await s.e(9971).then(s.bind(s,79971))).ROLE_LAYOUT,{combine(o,R){return[...o,...R]},defaultValue:[]}),N=(0,_.p)(os,async()=>(await s.e(9971).then(s.bind(s,79971))).FORM_INITIAL_VALUES,{combine(o,R){return{...o,...R}},defaultValue:os}),L=(0,_.p)(is.M,async()=>(await s.e(9616).then(s.bind(s,79616))).MagicLinkEE),[Q]=(0,_.H)(),j=m({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),k=async(o,{setErrors:R})=>{Y();const c=await Q({...o,roles:o.roles??[]});"data"in c?c.data.registrationToken?(V(c.data.registrationToken),ss()):C({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}):(C({type:"warning",message:H(c.error)}),(0,_.x)(c.error)&&c.error.name==="ValidationError"&&R(K(c.error))),U()},ss=()=>{r?x(r):a()},{buttonSubmitLabel:w,isDisabled:G,next:r}=As[i];return L?(0,t.jsxs)(y.k,{onClose:a,labelledBy:"title",children:[(0,t.jsx)(f.r,{children:(0,t.jsx)(Es.B,{label:j,children:(0,t.jsx)(Ms.m,{isCurrent:!0,children:j})})}),(0,t.jsx)(ms.l1,{enableReinitialize:!0,initialValues:N??{},onSubmit:k,validationSchema:gs,validateOnChange:!1,children:({errors:o,handleChange:R,values:c,isSubmitting:rs})=>(0,t.jsxs)(e.lV,{children:[(0,t.jsx)(T.c,{children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[i!=="create"&&(0,t.jsx)(L,{registrationToken:z}),(0,t.jsxs)(E.a,{children:[(0,t.jsx)(l.o,{variant:"beta",as:"h2",children:m({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),(0,t.jsx)(E.a,{paddingTop:4,children:(0,t.jsx)(M.s,{direction:"column",alignItems:"stretch",gap:1,children:(0,t.jsx)(D.x,{gap:5,children:Os.map(ns=>ns.map(v=>(0,t.jsx)(O.E,{...v.size,children:(0,t.jsx)(e.ah,{...v,disabled:G,error:o[v.name],onChange:R,value:c[v.name]})},v.name)))})})})]}),(0,t.jsxs)(E.a,{children:[(0,t.jsx)(l.o,{variant:"beta",as:"h2",children:m({id:"global.roles",defaultMessage:"User's role"})}),(0,t.jsx)(E.a,{paddingTop:4,children:(0,t.jsxs)(D.x,{gap:5,children:[(0,t.jsx)(O.E,{col:6,xs:12,children:(0,t.jsx)(is.S,{disabled:G,error:o.roles,onChange:R,value:c.roles??[]})}),n.map(ns=>ns.map(v=>(0,t.jsx)(O.E,{...v.size,children:(0,t.jsx)(e.ah,{...v,disabled:G,onChange:R,value:c[v.name]})},v.name)))]})})]})]})}),(0,t.jsx)(S.j,{startActions:(0,t.jsx)(P.$,{variant:"tertiary",onClick:a,type:"button",children:m({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:i==="create"?(0,t.jsx)(P.$,{type:"submit",loading:rs,children:m(w)}):(0,t.jsx)(P.$,{type:"button",loading:rs,onClick:a,children:m(w)})})]})})]}):null},os={firstname:"",lastname:"",email:"",roles:[]},Ds=[],Os=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],gs=b.Ik().shape({firstname:b.Yj().trim().required(e.iW.required),lastname:b.Yj(),email:b.Yj().email(e.iW.email).required(e.iW.required),roles:b.YO().min(1,e.iW.required).required(e.iW.required)}),As={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},hs=({canDelete:a,headers:i=[],entriesToDelete:x=[],onClickDelete:z,onSelectRow:V,withMainAction:m,withBulkActions:C,rows:Y=[]})=>{const{push:U,location:{pathname:H}}=(0,q.W6)(),{formatMessage:K}=(0,$.A)();return(0,t.jsx)(B.N,{children:Y.map(n=>{const N=x.findIndex(L=>L===n.id)!==-1;return(0,t.jsxs)(W.Tr,{...(0,e.qM)({fn:()=>U(`${H}/${n.id}`),condition:C}),children:[m&&(0,t.jsx)(u.Td,{...e.dG,children:(0,t.jsx)(Z.J,{"aria-label":K({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,as.g)(n?.firstname??"",n.lastname)}),checked:N,onChange:()=>{V&&V({name:n.id,value:!N})}})}),i.map(({key:L,cellFormatter:Q,name:j,...k})=>(0,t.jsx)(u.Td,{children:typeof Q=="function"?Q(n,{key:L,name:j,formatMessage:K,...k}):(0,t.jsx)(l.o,{textColor:"neutral800",children:n[j]||"-"})},L)),C&&(0,t.jsx)(u.Td,{children:(0,t.jsxs)(M.s,{justifyContent:"end",children:[(0,t.jsx)(g.K,{onClick:()=>U(`${H}/${n.id}`),label:K({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,as.g)(n.firstname??"",n.lastname)}),noBorder:!0,icon:(0,t.jsx)(_s.A,{})}),a&&(0,t.jsx)(E.a,{paddingLeft:1,...e.dG,children:(0,t.jsx)(g.K,{onClick:()=>{z&&z(n.id)},label:K({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,as.g)(n.firstname??"",n.lastname)}),noBorder:!0,icon:(0,t.jsx)(ds.A,{})})})]})})]},n.id)})})},ls=()=>{const{_unstableFormatAPIError:a}=(0,e.wq)(),[i,x]=d.useState(!1),z=(0,_.j)(r=>r.admin_app.permissions),{allowedActions:{canCreate:V,canDelete:m,canRead:C}}=(0,e.ec)(z.settings?.users),Y=(0,e.hN)(),{formatMessage:U}=(0,$.A)(),{search:H}=(0,q.zy)();(0,e.L4)();const{data:K,isError:n,isLoading:N}=(0,_.k)(I.parse(H,{ignoreQueryPrefix:!0}),{skip:!C}),{pagination:L,users:Q}=K??{},j=(0,_.p)(cs,async()=>(await s.e(4963).then(s.bind(s,64963))).CreateActionEE),k=Cs.map(r=>({...r,metadatas:{...r.metadatas,label:U(r.metadatas.label)}})),ss=U({id:"global.users",defaultMessage:"Users"}),w=()=>{x(r=>!r)},[G]=(0,_.J)();return j?(0,t.jsxs)(A.g,{"aria-busy":N,children:[(0,t.jsx)(e.x7,{name:"Users"}),(0,t.jsx)(F.Q,{primaryAction:V&&(0,t.jsx)(j,{onClick:w}),title:ss,subtitle:U({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),C&&(0,t.jsx)(J.B,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.q7,{label:U({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ss})}),(0,t.jsx)(es.F,{displayedFilters:Ls})]})}),(0,t.jsxs)(X.s,{children:[!C&&(0,t.jsx)(e.UW,{}),n&&(0,t.jsx)("div",{children:"TODO: An error occurred"}),C&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.Ee,{contentType:"Users",isLoading:N,onConfirmDeleteAll:async r=>{const o=await G({ids:r});"error"in o&&Y({type:"warning",message:a(o.error)})},onConfirmDelete:async r=>{const o=await G({ids:[r]});"error"in o&&Y({type:"warning",message:a(o.error)})},headers:k,rows:Q,withBulkActions:!0,withMainAction:m,children:(0,t.jsx)(hs,{canDelete:m})}),L&&(0,t.jsx)(E.a,{paddingTop:4,children:(0,t.jsxs)(M.s,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,t.jsx)(e._u,{}),(0,t.jsx)(e.W7,{pagination:L})]})})]})]}),i&&(0,t.jsx)(Ps,{onToggle:w})]}):null},Cs=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:a},{formatMessage:i}){return(0,t.jsx)(l.o,{textColor:"neutral800",children:a.map(x=>i({id:`Settings.permissions.users.${x.code}`,defaultMessage:x.name})).join(`,
`)})}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:a},{formatMessage:i}){return(0,t.jsxs)(M.s,{children:[(0,t.jsx)(e.nW,{variant:a?"success":"danger"}),(0,t.jsx)(l.o,{textColor:"neutral800",children:i({id:a?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:a?"Active":"Inactive"})})]})}}],Ls=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],vs=()=>{const a=(0,_.p)(ls,async()=>(await s.e(9030).then(s.bind(s,59030))).UserListPageEE);return a?(0,t.jsx)(a,{}):null},fs=()=>{const a=(0,_.j)(i=>i.admin_app.permissions.settings?.users.main);return(0,t.jsx)(e.kz,{permissions:a,children:(0,t.jsx)(vs,{})})}},27551:(ts,p,s)=>{s.d(p,{M:()=>S,S:()=>B,a:()=>O});var t=s(92132),d=s(54894),P=s(93236),y=s(88353),f=s(56654),T=s(2129),M=s(90625),E=s(84795),l=s(79793),D=s(17493);const O=({children:g,target:A})=>{const F=(0,T.hN)(),{formatMessage:J}=(0,d.A)(),{copy:X}=(0,T.iD)(),e=J({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),I=async()=>{await X(A)&&F({type:"info",message:{id:"notification.link-copied"}})};return(0,t.jsx)(T.bQ,{endAction:(0,t.jsx)(y.K,{label:e,noBorder:!0,icon:(0,t.jsx)(M.A,{}),onClick:I}),title:A,titleEllipsis:!0,subtitle:g,icon:(0,t.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},S=({registrationToken:g})=>{const{formatMessage:A}=(0,d.A)(),F=`${window.location.origin}${(0,P.K)()}/auth/register?registrationToken=${g}`;return(0,t.jsx)(O,{target:F,children:A({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},B=({disabled:g,error:A,onChange:F,value:J})=>{const{isLoading:X,roles:e}=(0,D.u)(),{formatMessage:I}=(0,d.A)(),$=A?I({id:A,defaultMessage:A}):"",q=I({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),_=I({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),es=I({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,t.jsx)(f.KF,{id:"roles",disabled:g,error:$,hint:_,label:q,name:"roles",onChange:h=>{F({target:{name:"roles",value:h}})},placeholder:es,startIcon:X?(0,t.jsx)(Z,{}):void 0,value:J.map(h=>h.toString()),withTags:!0,required:!0,children:e.map(h=>(0,t.jsx)(f.fe,{value:h.id.toString(),children:I({id:`global.${h.code}`,defaultMessage:h.name})},h.id))})},W=(0,l.i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,u=l.Ay.div`
  animation: ${W} 2s infinite linear;
`,Z=()=>(0,t.jsx)(u,{children:(0,t.jsx)(E.A,{})})},17493:(ts,p,s)=>{s.d(p,{u:()=>f});var t=s(21272),d=s(2129),P=s(54894),y=s(93236);const f=(T={},M)=>{const{locale:E}=(0,P.A)(),l=(0,d.QM)(E,{sensitivity:"base"}),{data:D,error:O,isError:S,isLoading:B,refetch:W}=(0,y.z)(T,M);return{roles:t.useMemo(()=>[...D??[]].sort((Z,g)=>l.compare(Z.name,g.name)),[D,l]),error:O,isError:S,isLoading:B,refetch:W}}}}]);
