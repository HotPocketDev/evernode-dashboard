"use strict";(self.webpackChunkhost_dashboard=self.webpackChunkhost_dashboard||[]).push([[467],{32514:function(e,n,s){s.d(n,{Z:function(){return l}});s(72791);var t=s(38302),a=s(63509),r=s(80184);function l(e){var n=e.modelName,s=e.speed,l=e.count,i=e.showTooltip,o=[];n&&o.push(n),s&&o.push("".concat(s," MHz")),l&&o.push("".concat(l," cores"));var c=o.join(", "),d=(0,r.jsx)(t.Z,{className:"text-wrap",children:c});return c?i?(0,r.jsx)(a.ZP,{title:"Host's CPU specifications",children:d}):d:"-"}},65331:function(e,n,s){s.d(n,{Z:function(){return i}});s(72791);var t=s(38317),a=s(63509),r=s(86886),l=s(80184);function i(e){var n=e.countryCode,s=e.size,i=(0,t.Z)({tooltipPlacementRight:{marginLeft:"0"}})(a.ZP);return(0,l.jsx)(i,{title:n,placement:"right-end",children:(0,l.jsx)("div",{children:(0,l.jsx)(r.Z,{className:"emojiFlag",countryCode:n,style:{fontSize:s,cursor:"pointer"},"aria-label":n,alt:n,svg:!0})})})}},23447:function(e,n,s){s.d(n,{Z:function(){return i}});s(72791);var t=s(38302),a=s(63509),r=s(80184);function l(e){return Math.round(100*e)/100}function i(e){var n=e.cpu,s=e.ram,i=e.disk,o=e.instanceCount,c=e.showTooltip,d=[];o&&(n&&d.push("".concat(l(n/1e4/o),"% CPU")),s&&d.push("".concat(l(s/1e3/o),"GB RAM")),i&&d.push("".concat(l(i/1e3/o),"GB Disk")));var u=d.join(", "),h=(0,r.jsx)(t.Z,{className:"text-wrap",children:u});return u?c?(0,r.jsx)(a.ZP,{title:"Resource allocation for a smart contract instance",children:h}):h:"-"}},91254:function(e,n,s){s.d(n,{Z:function(){return h}});var t=s(72791),a=s(92206),r=s(89526),l=s(66556),i=s(9773),o=s(43486),c=s(17631),d=s(46593),u=s(80184);function h(e){var n=e.headings,s=e.values,h=e.highlight,x=e.hideHeadings,m=e.className,p=e.cellClassName,f=e.headerCellClassName,j=Object.keys(n);return(0,u.jsx)(t.Fragment,{children:(0,u.jsx)(a.Z,{className:"".concat(m),component:r.Z,children:(0,u.jsxs)(l.Z,{"aria-label":"simple table",children:[!x&&(0,u.jsx)(i.Z,{children:(0,u.jsx)(o.Z,{children:j.map((function(e,s){return(0,u.jsx)(c.Z,{className:(h&&h.includes(e)?"bg-secondary text-dark font-weight-bold":"")+" ".concat(f),children:n[e]},s)}))})}),(0,u.jsx)(d.Z,{children:s.map((function(e){return(0,u.jsx)(o.Z,{children:j.map((function(n,s){return(0,u.jsx)(c.Z,{className:(h&&h.includes(n)?"bg-secondary text-dark font-weight-bold":"")+" ".concat(p),align:"left",children:e[n]},s)}))},e[j[0]])}))})]})})})}},17467:function(e,n,s){s.r(n),s.d(n,{default:function(){return U}});var t=s(15861),a=s(29439),r=s(87757),l=s.n(r),i=s(72791),o=s(79271),c=s(21079),d=s(84738),u=s(91254),h=s(63509),x=s(36393),m=s(38302),p=s(1288),f=s(10283),j=s(42953),v=s(45910),Z=s(26513),g=s(38596),b=s(1413),N=s(27194),k=s(99666),y=s(37063),C=s(97595),I=s(80184);function w(e){var n,s=e.id,t=e.summary,r=e.panelClassName,l=e.panelSummaryClassName,o=e.panelDetailClassName,c=e.headerTooltip,d=i.useState(!!e.expanded&&s),u=(0,a.Z)(d,2),x=u[0],m=u[1],p=(0,I.jsx)(y.Z,{expandIcon:(0,I.jsx)(C.Z,{className:l}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:t});return(0,I.jsx)(i.Fragment,{children:(0,I.jsxs)(N.Z,{expanded:x===s,onChange:(n=s,function(e,s){m(!!s&&n)}),className:r,children:[c?(0,I.jsx)(h.ZP,{title:c,children:p}):p,(0,I.jsx)(k.Z,{className:"".concat(o," p-0"),children:e.children})]})})}var P=s(83837),R=s(85159),S=s(94026),T=s(20269);function M(e){var n=e.open,s=e.scroll,t=e.title,a=e.onConfirm,r=e.onClose;return(0,I.jsxs)(P.Z,{open:n,onClose:r,scroll:s,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[t&&(0,I.jsx)(R.Z,{id:"scroll-dialog-title",children:t}),(0,I.jsx)(S.Z,{dividers:"paper"===s,className:"mb-2",children:e.children}),a&&(0,I.jsx)(T.Z,{children:(0,I.jsx)(Z.Z,{onClick:a,variant:"outlined",children:"Ok"})})]})}function H(e){var n=e.lease,s=i.useState(!1),t=(0,a.Z)(s,2),r=t[0],l=t[1],o=[{key:"Lease Amount",value:(0,I.jsx)(h.ZP,{title:"EVRs per Moment",children:(0,I.jsx)("span",{children:n.leaseAmount})})},{key:"Offer Index",value:(0,I.jsx)(h.ZP,{title:"Lease NFT sell offer index",children:(0,I.jsx)("span",{children:n.offerIndex})})},{key:"TOS",value:(0,I.jsx)(h.ZP,{title:"Show Terms of Service",children:(0,I.jsxs)(Z.Z,{className:"tos-button",size:"small",variant:"outlined",onClick:function(){return l(!0)},children:[n.halfTos,"..."]})})}];return(0,I.jsxs)(p.Z,{item:!0,xs:12,className:"pb-2",children:[(0,I.jsx)(w,{id:n.nfTokenId,summary:(0,I.jsx)(m.Z,{className:"text-truncate pl-2",component:"span",children:n.nfTokenId}),expanded:"true",panelClassName:"bg-unicorn text-light",panelSummaryClassName:"text-light",panelDetailClassName:"text-light overflow-auto",headerTooltip:"NFToken Id",children:(0,I.jsx)(p.Z,{item:!0,xs:12,children:(0,I.jsx)(u.Z,{className:"bg-transparent rounded-0",cellClassName:"text-light",headings:{key:"Key",value:"Value"},values:o,highlight:["value"],hideHeadings:!0})})}),(0,I.jsx)(M,{open:r,scroll:"body",onClose:function(){return l(!1)},children:(0,I.jsx)("div",{className:"license",children:n.tos})})]})}var L=s(15211),z=s(80520);function F(e){var n=e.address,s=i.useState(null),r=(0,a.Z)(s,2),o=r[0],c=r[1],d=(0,L.y)();return(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(l().mark((function e(){var s,t,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(null),e.next=3,d.getTos();case 3:return s=e.sent,e.next=6,d.getLeases(n);case 6:t=e.sent,a=t.map((function(e){var n=d.decodeLeaseUri(e.uri);return(0,b.Z)((0,b.Z)((0,b.Z)({},e),n),{},{tos:s})})),c(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n,d]),(0,I.jsx)(i.Fragment,{children:o&&(o.length?(0,I.jsx)(p.Z,{container:!0,children:o.map((function(e,n){return(0,I.jsx)(H,{lease:e},n)}))}):(0,I.jsx)("span",{children:"There're no available leases!"}))||(0,I.jsx)(z.Z,{})})}var V="hostAddress",A=s(65331);function E(e){var n=e.balance;return(0,I.jsx)(f.Z,{className:"mt-1 bg-unicorn border-0 text-light",children:n&&(0,I.jsx)(h.ZP,{title:"Total EVR balance",children:(0,I.jsxs)(j.Z,{className:"pt-1 pb-1 text-center wallet-balance",children:[(0,I.jsx)("span",{className:"font-weight-bold amount",children:n}),(0,I.jsx)("span",{className:"font-weight-normal ml-1 evr",children:"EVR"})]})})||(0,I.jsx)(z.Z,{className:"mt-1 p-2",size:"1.5rem"})})}var B=s(32514),O=s(23447),D=(0,g.Z)({root:{"& label.Mui-focused":{color:"rgba(0,0,0,0.54)"},"& label.Mui-error":{color:"red"},"& .MuiInput-underline:after":{borderBottomColor:"rgba(0,0,0,0.87)"},"& .MuiInput-underline.Mui-error:after":{borderBottomColor:"#f83245"},"& label.MuiInputLabel-shrink":{transform:"translate(0, 1.5px) scale(0.95)",transformOrigin:"top left"}}});function U(e){var n=D(),s=(0,o.k6)(),r=(0,L.y)(),g=localStorage.getItem(V),b=e.match.params.address,N=i.useState(b||g),k=(0,a.Z)(N,2),y=k[0],C=k[1],w=i.useState(null),P=(0,a.Z)(w,2),R=P[0],S=P[1],T=i.useState(null),H=(0,a.Z)(T,2),U=H[0],X=H[1],K=i.useState(!1),G=(0,a.Z)(K,2),_=G[0],$=G[1],q=(0,i.useCallback)((function(){return/^r[a-zA-Z0-9]{24,34}$/g.test(R)}),[R]),J=(0,i.useCallback)((function(){R&&q()&&(localStorage.setItem(V,R),C(R),S(null),$(!1))}),[R,q]),Q=(0,i.useCallback)((function(){$(!1),S(null),y||s.push("/")}),[y,s]);return(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(l().mark((function e(){var n,s,t,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(null),e.next=3,r.getHostInfo(y);case 3:return n=e.sent,s={key:"Key",value:"Value"},t=n?[{key:"Registration Token Id",value:(0,I.jsx)(h.ZP,{title:"Registration NFToken Id",children:(0,I.jsx)("span",{children:n.nfTokenId})})},{key:"Instances",value:(0,I.jsx)(h.ZP,{title:"Active instances out of Maximum instances",children:(0,I.jsxs)("span",{children:[n.activeInstances||0," out of ",n.maxInstances||0]})})},{key:"CPU Model",value:(0,I.jsx)(B.Z,{modelName:n.cpuModelName,speed:n.cpuMHz,count:n.cpuCount,showTooltip:!0})},{key:"Instance Size",value:(0,I.jsx)(O.Z,{cpu:n.cpuMicrosec,ram:n.ramMb,disk:n.diskMb,instanceCount:n.maxInstances,showTooltip:!0})},{key:"Last Heartbeat XRP Ledger",value:(0,I.jsx)(h.ZP,{title:"XPR Ledger at which the last heartbeat was received",children:(0,I.jsx)("span",{children:n.lastHeartbeatLedger})})},{key:"Registered on XRP Ledger",value:(0,I.jsx)(h.ZP,{title:"XPR Ledger at which the host registered",children:(0,I.jsx)("span",{children:n.registrationLedger})})},{key:"Registration Fee",value:(0,I.jsx)(h.ZP,{title:"Registration fee (in EVRs) spent by the host",children:(0,I.jsx)("span",{children:n.registrationFee})})},{key:"Version",value:(0,I.jsx)(h.ZP,{title:"Host's Sashimono version",children:(0,I.jsx)("span",{children:n.version})})}]:[],e.next=8,r.getEVRBalance(y);case 8:a=e.sent,X({evrBalance:a,hostInfo:n,tableHeadings:s,tableValues:t});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();y?b===g?s.push("/host"):e():$(!0)}),[r,s,y,b,g]),(0,I.jsxs)(I.Fragment,{children:[y&&(0,I.jsxs)(i.Fragment,{children:[(0,I.jsxs)(d.Z,{responsive:!0,titleHeading:(0,I.jsxs)("div",{className:"d-flex align-items-center display-7",children:[(0,I.jsx)(x.Z,{mdDown:!0,children:(0,I.jsx)("span",{className:"mr-2",children:(null===U||void 0===U?void 0:U.hostInfo)&&(0,I.jsx)(A.Z,{countryCode:U.hostInfo.countryCode,size:"1.8em"})})}),y,y===g&&(0,I.jsx)(h.ZP,{title:"Change address",children:(0,I.jsx)(c.Z,{className:"ml-1 edit-btn",onClick:function(){return $(!0)}})}),(0,I.jsx)("span",{children:(null===U||void 0===U?void 0:U.hostInfo)&&(0,I.jsx)(h.ZP,{title:U.hostInfo.active?"Active":"Inactive",children:(0,I.jsx)("div",{className:"ml-1 rounded-circle ".concat(U.hostInfo.active?"online":"offline")})})})]}),titleDescription:U?(null===U||void 0===U?void 0:U.hostInfo)&&(0,I.jsx)(m.Z,{type:"p",children:U.hostInfo.description}):(0,I.jsx)(z.Z,{className:"p-0",size:"1rem"}),children:[(0,I.jsx)(x.Z,{mdUp:!0,children:(0,I.jsx)("span",{children:(null===U||void 0===U?void 0:U.hostInfo)&&(0,I.jsx)(A.Z,{countryCode:U.hostInfo.countryCode,size:"2.5em"})})}),(0,I.jsx)(E,{balance:null===U||void 0===U?void 0:U.evrBalance})]}),(0,I.jsxs)(p.Z,{container:!0,spacing:4,children:[(0,I.jsx)(p.Z,{item:!0,xs:12,md:6,children:(0,I.jsx)(f.Z,{style:{border:"none",boxShadow:"none"},className:"mb-4 bg-transparent",children:(0,I.jsxs)(j.Z,{className:"p-0",children:[(0,I.jsx)("h5",{className:"card-title font-weight-bold font-size-md",children:"Registration Info"}),U&&(U.hostInfo?(0,I.jsx)(u.Z,{headings:U.tableHeadings,values:U.tableValues,highlight:["key"],hideHeadings:!0}):(0,I.jsx)("span",{children:"Host is not Registered!"}))||(0,I.jsx)(z.Z,{className:"p-4"})]})})}),(0,I.jsx)(p.Z,{item:!0,xs:12,md:6,children:(0,I.jsx)(f.Z,{style:{border:"none",boxShadow:"none"},className:"mb-4 bg-transparent",children:(0,I.jsxs)(j.Z,{className:"p-0",children:[(0,I.jsx)("h5",{className:"card-title font-weight-bold font-size-md",children:"Available Leases"}),y&&(0,I.jsx)(F,{address:y})]})})})]})]}),y===g&&(0,I.jsxs)(M,{open:_,scroll:"body",onClose:Q,children:[(0,I.jsx)("div",{children:(0,I.jsx)(v.Z,{autoFocus:!0,error:!!R&&!q(),classes:n,className:"address-input",variant:"standard",label:"Enter the host XRP address",multiline:!0,value:R||"",onChange:function(e){return S(e.target.value)}})}),(0,I.jsx)("div",{children:(0,I.jsx)(Z.Z,{onClick:J,variant:"outlined",disabled:!R||!q(),className:"pull-right mt-3",children:"OK"})})]})]})}}}]);
//# sourceMappingURL=467.e1db90eb.chunk.js.map