(window.webpackJsonp=window.webpackJsonp||[]).push([[24,21,25],{"013z":function(e,t,c){"use strict";var a=c("q1tI"),b=c.n(a),r=c("NmYn"),n=c.n(r),l=c("Wbzz"),o=c("Xrax"),i=c("k4MR"),s=c("TSYQ"),p=c.n(s),m=c("QH2O"),u=c.n(m),d=c("qKvR"),j=function(e){var t,c=e.title,a=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(d.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===a,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},c)))))},O=c("BAC9"),h=function(e){var t=e.relativePagePath,c=e.repository,a=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,b=c||a,r=b.baseUrl,n=b.subDirectory,o=r+"/edit/"+b.branch+n+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},g=c("FCXl"),T=c("dI71"),f=c("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(T.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,c=e.tabs,a=e.slug,b=a.split("/").filter(Boolean).slice(-1)[0],r=c.map((function(e){var t,c=n()(e,{lower:!0,strict:!0}),r=c===b,o=new RegExp(b+"/?(#.*)?$"),i=a.replace(o,c);return Object(d.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(d.b)(l.Link,{className:f.link,to:""+i},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:f.list},r))))))},t}(b.a.Component),x=c("MjG9"),k=c("CzIb"),y=c("Asxa"),w=c("OIbQ"),N=c.n(w),C=function(e){var t=e.date,c=new Date(t);return t?Object(d.b)(y.c,{className:N.a.row},Object(d.b)(y.a,null,Object(d.b)("div",{className:N.a.text},"Page last updated: ",c.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,c=e.children,a=e.location,b=e.Title,r=t.frontmatter,s=void 0===r?{}:r,p=t.relativePagePath,m=t.titleType,u=s.tabs,O=s.title,T=s.theme,f=s.description,y=s.keywords,w=s.date,N=Object(k.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,A=I?a.pathname.replace(I,""):a.pathname,E=u?A.split("/").filter(Boolean).slice(-1)[0]||n()(u[0],{lower:!0}):"",P=T||N;return Object(d.b)(i.a,{tabs:u,homepage:!1,theme:P,pageTitle:O,pageDescription:f,pageKeywords:y,titleType:m},Object(d.b)(j,{title:b?Object(d.b)(b,null):O,label:"label",tabs:u,theme:P}),u&&Object(d.b)(v,{title:O,slug:A,tabs:u,currentTab:E}),Object(d.b)(x.a,{padded:!0},c,Object(d.b)(h,{relativePagePath:p}),Object(d.b)(C,{date:w})),Object(d.b)(g.a,{pageContext:t,location:a,slug:A,tabs:u,currentTab:E}),Object(d.b)(o.a,null))}},BAC9:function(e,t,c){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,c){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,c){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,c){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},QedJ:function(e,t,c){"use strict";c.r(t),c.d(t,"_frontmatter",(function(){return o})),c.d(t,"default",(function(){return O}));var a=c("wx14"),b=c("zLVn"),r=(c("q1tI"),c("7ljp")),n=c("013z"),l=(c("qKvR"),["components"]),o={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=i("AnchorLinks"),p=i("AnchorLink"),m=i("Accordion"),u=i("AccordionItem"),d={_frontmatter:o},j=n.a;function O(e){var t=e.components,c=Object(b.a)(e,l);return Object(r.b)(j,Object(a.a)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"AnchorLinks"},Object(r.b)(p,{mdxType:"AnchorLink"},"GitOps Lab - Team Environments"),Object(r.b)(p,{mdxType:"AnchorLink"},"GitOps Lab - Backup Environments"),Object(r.b)(p,{mdxType:"AnchorLink"},"End-to-End Labs - Team Environments"),Object(r.b)(p,{mdxType:"AnchorLink"},"End-to-End Labs - Backup Environments")),Object(r.b)("hr",null),Object(r.b)("h2",null,"GitOps Lab - Team Environments"),Object(r.b)("p",null,"For the GitOps session, each team will receive a pre-installed ROKS cluster with GitOps Configuration and a pre-created GitHub Organization. Based in your team number, check the details below."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Notes:"),"\nThe instructor must add the team members to the ROKS cluster before you can access the cluster, OCP Console and GitHub Organization. You will have Cluster admin permissions."),Object(r.b)("hr",null),Object(r.b)("h2",null,"GitOps Lab - Backup Environments"),Object(r.b)("hr",null),Object(r.b)("h2",null,"End-to-End Labs - Team Environments"),Object(r.b)("p",null,"For the End-to-End labs, each team will receive a pre-installed ROKS cluster with CP4i installed and configured. Based in your team number, check the details below."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Notes:"),"\nThe instructor must add the team members to the ROKS cluster before you can access the cluster, OCP Console and CP4I. You will have Cluster admin permissions."),Object(r.b)(m,{mdxType:"Accordion"},Object(r.b)(u,{title:"Team 01",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclludhw0b1qupjgc7kg/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi01"))),Object(r.b)(u,{title:"Team 02",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccklv5is0lbbgu468uv0/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi02"))),Object(r.b)(u,{title:"Team 03",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclhso5s03scbmbqo91g/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi03"))),Object(r.b)(u,{title:"Team 04",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclhsr8s0im3kiu77i4g/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi04"))),Object(r.b)(u,{title:"Team 05",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclkc7ct035np0maudf0/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi05"))),Object(r.b)(u,{title:"Team 06",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccllqf2w0l663vr75f50/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi06"))),Object(r.b)(u,{title:"Team 07",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclhsurs024ps5v023i0/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi07"))),Object(r.b)(u,{title:"Team 09",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclht57s0kno06677i50/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi09"))),Object(r.b)(u,{title:"Team 10",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclht84s0qrptnjqo920/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi10"))),Object(r.b)(u,{title:"Team 11",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclhtbas09k5qgum5140/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi11"))),Object(r.b)(u,{title:"Team 13",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclhthrs03j97sv023ig/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi13"))),Object(r.b)(u,{title:"Team 14",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclhtl5s0gv3e85i1200/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi14"))),Object(r.b)(u,{title:"Team 15",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccl4hqnw0p1gmcas6990/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi15"))),Object(r.b)(u,{title:"Team 16",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccl4htjw058pboasag5g/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi16"))),Object(r.b)(u,{title:"Team 17",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccl4i0cw0gcut7bjk5bg/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi17"))),Object(r.b)(u,{title:"Team 18",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccl4i2jw00meemqsag60/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi18"))),Object(r.b)(u,{title:"Team 19",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccl4i56w0mvbt3f8e390/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi19"))),Object(r.b)(u,{title:"Team 20",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclj1ivd03ddogbjnrd0/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi20"))),Object(r.b)(u,{title:"Team 21",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclj1bld0b5bskjjnrcg/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi21"))),Object(r.b)(u,{title:"Team 22",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclj1o6d00i9qj7sgdfg/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi22"))),Object(r.b)(u,{title:"Team 23",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclj1dnd014k8ifqast0/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi23"))),Object(r.b)(u,{title:"Team 25",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cclj1qmd0vaqlnbrb2kg/overview?platformType=openshift",target:"_blank"},"cp4i-apac-multi25")))))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-environments-index-mdx-0d86af3df914c1937010.js.map