(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"013z":function(e,t,a){"use strict";var c=a("q1tI"),b=a.n(c),r=a("NmYn"),n=a.n(r),o=a("Wbzz"),i=a("Xrax"),p=a("k4MR"),l=a("TSYQ"),s=a.n(l),m=a("QH2O"),u=a.n(m),d=a("qKvR"),h=function(e){var t,a=e.title,c=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(d.b)("div",{className:s()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===c,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,c=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||c,r=b.baseUrl,n=b.subDirectory,i=r+"/edit/"+b.branch+n+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},f=a("FCXl"),g=a("dI71"),k=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,c=e.slug,b=c.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),r=a===b,i=new RegExp(b+"/?(#.*)?$"),p=c.replace(i,a);return Object(d.b)("li",{key:e,className:s()((t={},t[k.selectedItem]=r,t),k.listItem)},Object(d.b)(o.Link,{className:k.link,to:""+p},e))}));return Object(d.b)("div",{className:k.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:k.list},r))))))},t}(b.a.Component),x=a("MjG9"),T=a("CzIb"),v=a("Asxa"),N=a("OIbQ"),w=a.n(N),G=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(v.c,{className:w.a.row},Object(d.b)(v.a,null,Object(d.b)("div",{className:w.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,c=e.location,b=e.Title,r=t.frontmatter,l=void 0===r?{}:r,s=t.relativePagePath,m=t.titleType,u=l.tabs,j=l.title,g=l.theme,k=l.description,v=l.keywords,N=l.date,w=Object(T.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,C=I?c.pathname.replace(I,""):c.pathname,_=u?C.split("/").filter(Boolean).slice(-1)[0]||n()(u[0],{lower:!0}):"",A=g||w;return Object(d.b)(p.a,{tabs:u,homepage:!1,theme:A,pageTitle:j,pageDescription:k,pageKeywords:v,titleType:m},Object(d.b)(h,{title:b?Object(d.b)(b,null):j,label:"label",tabs:u,theme:A}),u&&Object(d.b)(y,{title:j,slug:C,tabs:u,currentTab:_}),Object(d.b)(x.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:s}),Object(d.b)(G,{date:N})),Object(d.b)(f.a,{pageContext:t,location:c,slug:C,tabs:u,currentTab:_}),Object(d.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},QedJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return j}));var c=a("wx14"),b=a("zLVn"),r=(a("q1tI"),a("7ljp")),n=a("013z"),o=(a("qKvR"),["components"]),i={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=p("AnchorLinks"),s=p("AnchorLink"),m=p("Accordion"),u=p("AccordionItem"),d={_frontmatter:i},h=n.a;function j(e){var t=e.components,a=Object(b.a)(e,o);return Object(r.b)(h,Object(c.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"AnchorLinks"},Object(r.b)(s,{mdxType:"AnchorLink"},"Team Environments"),Object(r.b)(s,{mdxType:"AnchorLink"},"Backup Environments")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Team Environments"),Object(r.b)("p",null,"For the GitOps session, each team will receive a pre-installed ROKS cluster with GitOps Configuration and a pre-created GitHub Organization. Based in your team number, check the details below."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Notes:"),"\nThe instructor must add the team members to the ROKS cluster before you can access the cluster, OCP Console and GitHub Organization. You will have Cluster admin permissions."),Object(r.b)(m,{mdxType:"Accordion"},Object(r.b)(u,{title:"Team 01",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cbgbfont0ff65li0st1g/overview?platformType=openshift&region=jp-tok&resourceGroup=ac356078cd4c4f9e8ff319a121f81230",target:"_blank"},"cp4i-techacademy-team01")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(r.b)("a",{href:"https://github.com/techacademy-team01",target:"_blank"},"techacademy-team01"))),Object(r.b)(u,{title:"Team 02",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cbfad14t03fgn6drb6h0/overview?platformType=openshift&region=jp-tok&resourceGroup=ac356078cd4c4f9e8ff319a121f81230",target:"_blank"},"cp4i-techacademy-team02")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(r.b)("a",{href:"https://github.com/cp4i-techacademy-team02",target:"_blank"},"cp4i-techacademy-team02"))),Object(r.b)(u,{title:"Team 03",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cbfad4pt0bdqdm58ilk0/overview?platformType=openshift&region=jp-tok&resourceGroup=ac356078cd4c4f9e8ff319a121f81230",target:"_blank"},"cp4i-techacademy-team03")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(r.b)("a",{href:"https://github.com/cp4i-techacademy-team03",target:"_blank"},"cp4i-techacademy-team03"))),Object(r.b)(u,{title:"Team 04",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cbfad8gt0t5t8tr1gf90/overview?platformType=openshift&region=jp-tok&resourceGroup=ac356078cd4c4f9e8ff319a121f81230",target:"_blank"},"cp4i-techacademy-team04")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(r.b)("a",{href:"https://github.com/cp4i-techacademy-team04",target:"_blank"},"cp4i-techacademy-team04"))),Object(r.b)(u,{title:"Team 05",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cbgbfrit0t3m7sg34qo0/overview?platformType=openshift&region=jp-tok&resourceGroup=ac356078cd4c4f9e8ff319a121f81230",target:"_blank"},"cp4i-techacademy-team05")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(r.b)("a",{href:"https://github.com/cp4i-techacademy-team05",target:"_blank"},"cp4i-techacademy-team05"))),Object(r.b)(u,{title:"Team 06",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cbfae04t0j5vfb834qfg/overview?platformType=openshift&region=jp-tok&resourceGroup=ac356078cd4c4f9e8ff319a121f81230",target:"_blank"},"cp4i-techacademy-team06")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(r.b)("a",{href:"https://github.com/cp4i-techacademy-team06",target:"_blank"},"cp4i-techacademy-team06"))),Object(r.b)(u,{title:"Team 07",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cbfagb4t0s0l5s034qg0/overview?platformType=openshift&region=jp-tok&resourceGroup=ac356078cd4c4f9e8ff319a121f81230",target:"_blank"},"cp4i-techacademy-team07")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(r.b)("a",{href:"https://github.com/cp4i-techacademy-team07",target:"_blank"},"cp4i-techacademy-team07"))),Object(r.b)(u,{title:"Team 08",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cbfagebt0pp9td31gf9g/overview?platformType=openshift&region=jp-tok&resourceGroup=ac356078cd4c4f9e8ff319a121f81230",target:"_blank"},"cp4i-techacademy-team08")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(r.b)("a",{href:"https://github.com/cp4i-techacademy-team08",target:"_blank"},"cp4i-techacademy-team08"))),Object(r.b)(u,{title:"Team 09",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cbfaghvt0rbdhm20sst0/overview?platformType=openshift&region=jp-tok&resourceGroup=ac356078cd4c4f9e8ff319a121f81230",target:"_blank"},"cp4i-techacademy-team09")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(r.b)("a",{href:"https://github.com/cp4i-techacademy-team09",target:"_blank"},"cp4i-techacademy-team09"))),Object(r.b)("hr",null),Object(r.b)("h2",null,"Backup Environments"),Object(r.b)(u,{title:"Japan Backup 01",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cbgc4cqt0hot3eftnvd0/overview?platformType=openshift&region=jp-tok&resourceGroup=ac356078cd4c4f9e8ff319a121f81230",target:"_blank"},"cp4i-techacademy-japanbkp01")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(r.b)("a",{href:"https://github.com/cp4i-techacademy-japanbkp01",target:"_blank"},"cp4i-techacademy-japanbkp01"))),Object(r.b)(u,{title:"Japan Backup 02",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cbgc4gdt0ljofk20st20/overview?platformType=openshift&region=jp-tok&resourceGroup=ac356078cd4c4f9e8ff319a121f81230",target:"_blank"},"cp4i-techacademy-japanbkp02")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(r.b)("a",{href:"https://github.com/cp4i-techacademy-japanbkp02",target:"_blank"},"cp4i-techacademy-japanbkp02"))),Object(r.b)(u,{title:"Japan Backup 03",mdxType:"AccordionItem"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cluster:")," ",Object(r.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cbgnrf2t001p54kmou50/overview?platformType=openshift&region=jp-tok&resourceGroup=ac356078cd4c4f9e8ff319a121f81230",target:"_blank"},"cp4i-techacademy-japanbkp03")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(r.b)("a",{href:"https://github.com/cp4i-techacademy-japanbkp03",target:"_blank"},"cp4i-techacademy-japanbkp03"))),Object(r.b)("hr",null)))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-environments-index-mdx-1a424abe6fc3251d93d3.js.map