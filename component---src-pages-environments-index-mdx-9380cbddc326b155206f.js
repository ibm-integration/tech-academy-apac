(window.webpackJsonp=window.webpackJsonp||[]).push([[20,21],{"013z":function(t,e,a){"use strict";var b=a("q1tI"),c=a.n(b),p=a("NmYn"),r=a.n(p),i=a("Wbzz"),n=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),l=a.n(s),m=a("QH2O"),u=a.n(m),g=a("qKvR"),O=function(t){var e,a=t.title,b=t.theme,c=t.tabs,p=void 0===c?[]:c;return Object(g.b)("div",{className:l()(u.a.pageHeader,(e={},e[u.a.withTabs]=p.length,e[u.a.darkMode]="dark"===b,e))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),h=function(t){var e=t.relativePagePath,a=t.repository,b=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,c=a||b,p=c.baseUrl,r=c.subDirectory,n=p+"/edit/"+c.branch+r+"/src/pages"+e;return p?Object(g.b)("div",{className:"bx--row "+j.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:j.link,href:n},"Edit this page on GitHub"))):null},d=a("FCXl"),f=a("dI71"),k=a("I8xM"),T=function(t){function e(){return t.apply(this,arguments)||this}return Object(f.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.title,a=t.tabs,b=t.slug,c=b.split("/").filter(Boolean).slice(-1)[0],p=a.map((function(t){var e,a=r()(t,{lower:!0,strict:!0}),p=a===c,n=new RegExp(c+"/?(#.*)?$"),o=b.replace(n,a);return Object(g.b)("li",{key:t,className:l()((e={},e[k.selectedItem]=p,e),k.listItem)},Object(g.b)(i.Link,{className:k.link,to:""+o},t))}));return Object(g.b)("div",{className:k.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":e},Object(g.b)("ul",{className:k.list},p))))))},e}(c.a.Component),v=a("MjG9"),x=a("CzIb"),y=a("Asxa"),N=a("OIbQ"),_=a.n(N),w=function(t){var e=t.date,a=new Date(e);return e?Object(g.b)(y.c,{className:_.a.row},Object(g.b)(y.a,null,Object(g.b)("div",{className:_.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(t){var e=t.pageContext,a=t.children,b=t.location,c=t.Title,p=e.frontmatter,s=void 0===p?{}:p,l=e.relativePagePath,m=e.titleType,u=s.tabs,j=s.title,f=s.theme,k=s.description,y=s.keywords,N=s.date,_=Object(x.a)().interiorTheme,A=Object(i.useStaticQuery)("2456312558").site.pathPrefix,C=A?b.pathname.replace(A,""):b.pathname,I=u?C.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",z=f||_;return Object(g.b)(o.a,{tabs:u,homepage:!1,theme:z,pageTitle:j,pageDescription:k,pageKeywords:y,titleType:m},Object(g.b)(O,{title:c?Object(g.b)(c,null):j,label:"label",tabs:u,theme:z}),u&&Object(g.b)(T,{title:j,slug:C,tabs:u,currentTab:I}),Object(g.b)(v.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:l}),Object(g.b)(w,{date:N})),Object(g.b)(d.a,{pageContext:e,location:b,slug:C,tabs:u,currentTab:I}),Object(g.b)(n.a,null))}},BAC9:function(t,e,a){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(t,e,a){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(t,e,a){t.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(t,e,a){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},QedJ:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return n})),a.d(e,"default",(function(){return j}));var b=a("wx14"),c=a("zLVn"),p=(a("q1tI"),a("7ljp")),r=a("013z"),i=(a("qKvR"),["components"]),n={},o=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(p.b)("div",e)}},s=o("AnchorLinks"),l=o("AnchorLink"),m=o("Accordion"),u=o("AccordionItem"),g={_frontmatter:n},O=r.a;function j(t){var e=t.components,a=Object(c.a)(t,i);return Object(p.b)(O,Object(b.a)({},g,a,{components:e,mdxType:"MDXLayout"}),Object(p.b)(s,{mdxType:"AnchorLinks"},Object(p.b)(l,{mdxType:"AnchorLink"},"GitOps Lab - Team Environments"),Object(p.b)(l,{mdxType:"AnchorLink"},"GitOps Lab - Backup Environments")),Object(p.b)("hr",null),Object(p.b)("h2",null,"GitOps Lab - Team Environments"),Object(p.b)("p",null,"For the GitOps session, each team will receive a pre-installed ROKS cluster with GitOps Configuration and a pre-created GitHub Organization. Based in your team number, check the details below."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Notes:"),"\nThe instructor must add the team members to the ROKS cluster before you can access the cluster, OCP Console and GitHub Organization. You will have Cluster admin permissions."),Object(p.b)(m,{mdxType:"Accordion"},Object(p.b)(u,{title:"Team 01",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccief7ns00v2f6m8cf70/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops01")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops01",target:"_blank"},"cp4i-apac-gitops01"))),Object(p.b)(u,{title:"Team 02",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cciefb3s0nld80m8cf7g/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops02")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops02",target:"_blank"},"cp4i-apac-gitops02"))),Object(p.b)(u,{title:"Team 03",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cciefe9s0a5m0qe8cf80/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops03")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops03",target:"_blank"},"cp4i-apac-gitops03"))),Object(p.b)(u,{title:"Team 04",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cciefhbs0tuopme8cf8g/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops04")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops04",target:"_blank"},"ccp4i-apac-gitops04"))),Object(p.b)(u,{title:"Team 05",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cciefl0s070sa64tn9ig/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops05")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops05",target:"_blank"},"cp4i-apac-gitops05"))),Object(p.b)(u,{title:"Team 06",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cciuaies0tihtrrrm8f0/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops06")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops06",target:"_blank"},"cp4i-apac-gitops06"))),Object(p.b)(u,{title:"Team 07",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cciualss0tov7u14eia0/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops07")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops07",target:"_blank"},"cp4i-apac-gitops07"))),Object(p.b)(u,{title:"Team 08",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cciefufs0iembnm8cf90/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops08")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops08",target:"_blank"},"cp4i-apac-gitops08"))),Object(p.b)(u,{title:"Team 09",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccieg1ts01g6gb94ei7g/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops09")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops09",target:"_blank"},"cp4i-apac-gitops09"))),Object(p.b)(u,{title:"Team 10",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccjjl1fd01lcr4q36eag/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops10")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops10",target:"_blank"},"cp4i-apac-gitops10"))),Object(p.b)(u,{title:"Team 11",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccieg82s0jth0v14ei8g/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops11")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops11",target:"_blank"},"cp4i-apac-gitops11"))),Object(p.b)(u,{title:"Team 12",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccjklh0d0nm9biscpn8g/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops12")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops12",target:"_blank"},"cp4i-apac-gitops12"))),Object(p.b)(u,{title:"Team 13",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccj1918t0f6dug1e7qdg/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops13")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops13",target:"_blank"},"cp4i-apac-gitops13"))),Object(p.b)(u,{title:"Team 14",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccjjl4id06sbk8immgqg/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops14")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops14",target:"_blank"},"ccp4i-apac-gitops14"))),Object(p.b)(u,{title:"Team 15",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cciul49t0s7jh6epi4gg/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops15")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops15",target:"_blank"},"cp4i-apac-gitops15"))),Object(p.b)(u,{title:"Team 16",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cciul7gt0jqgd7nqg4d0/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops16")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops16",target:"_blank"},"cp4i-apac-gitops16"))),Object(p.b)(u,{title:"Team 17",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccilht2s0cajith4ei90/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops17")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops17",target:"_blank"},"cp4i-apac-gitops17"))),Object(p.b)(u,{title:"Team 18",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccjjl7ad0ijs4r3ajck0/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops18")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops18",target:"_blank"},"cp4i-apac-gitops18"))),Object(p.b)(u,{title:"Team 19",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccjjla8d0rm321sp69v0/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops19")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops19",target:"_blank"},"cp4i-apac-gitops19"))),Object(p.b)(u,{title:"Team 20",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccjk7hkd0k3ead796q00/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops20")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops20",target:"_blank"},"cp4i-apac-gitops20"))),Object(p.b)(u,{title:"Team 21",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccjjld4d0b722crajckg/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops21")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops21",target:"_blank"},"cp4i-apac-gitops21"))),Object(p.b)(u,{title:"Team 22",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccjjlg6d0u5ok2i65ptg/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops22")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops22",target:"_blank"},"cp4i-apac-gitops22"))),Object(p.b)(u,{title:"Team 23",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccjjljdd078m9p796pu0/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops23")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops23",target:"_blank"},"cp4i-apac-gitops23"))),Object(p.b)(u,{title:"Team 24",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccjjlmbd09coupf96pug/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops24")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops24",target:"_blank"},"ccp4i-apac-gitops24"))),Object(p.b)(u,{title:"Team 25",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/ccjjlp1d0stensv96pv0/overview?platformType=openshift",target:"_blank"},"cp4i-apac-gitops25")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/cp4i-apac-gitops25",target:"_blank"},"cp4i-apac-gitops25"))),Object(p.b)("hr",null),Object(p.b)("h2",null,"Backup Environments"),Object(p.b)(u,{title:"APAC Backup 01",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cck9uvns068ldfdi1150/overview?platformType=openshift",target:"_blank"},"gitopsbkp01")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/gitopsbkp01",target:"_blank"},"gitopsbkp01"))),Object(p.b)(u,{title:"APAC Backup 02",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cck9v2js09e6pmti115g/overview?platformType=openshift",target:"_blank"},"gitopsbkp02")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/gitopsbkp02",target:"_blank"},"gitopsbkp02"))),Object(p.b)(u,{title:"APAC Backup 03",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cck9v5js00nc8r7n64og/overview?platformType=openshift",target:"_blank"},"gitopsbkp03")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/gitopsbkp03",target:"_blank"},"gitopsbkp03"))),Object(p.b)(u,{title:"APAC Backup 04",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cck9v8js0t0072d12l60/overview?platformType=openshift",target:"_blank"},"gitopsbkp04")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/gitopsbkp04",target:"_blank"},"gitopsbkp04"))),Object(p.b)(u,{title:"APAC Backup 05",mdxType:"AccordionItem"},Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Cluster:")," ",Object(p.b)("a",{href:"https://cloud.ibm.com/kubernetes/clusters/cck9vbvs0ao6elk68usg/overview?platformType=openshift",target:"_blank"},"gitopsbkp05")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Github Organization:")," ",Object(p.b)("a",{href:"https://github.com/gitopsbkp05",target:"_blank"},"gitopsbkp05"))),Object(p.b)("hr",null)))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-environments-index-mdx-9380cbddc326b155206f.js.map