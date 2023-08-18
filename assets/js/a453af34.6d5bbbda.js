"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[830],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||s;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={id:"esamwad-app-orf",title:"ORF(Oral Reading Fluency) Practice",sidebar_label:"ORF Practice",sidebar_position:8},i=void 0,o={unversionedId:"tech/system/android/esamwad/app/esamwad-app-orf",id:"tech/system/android/esamwad/app/esamwad-app-orf",title:"ORF(Oral Reading Fluency) Practice",description:"The ORF (Oral Reading Fluency) Practice module in the application aims to improve students' reading fluency. The module provides a structured practice plan and utilizes the Readalong and Quml workflows to assess and enhance students' ORF skills. Here is a detailed description of the ORF Practice module:",source:"@site/docs/tech/system/android/esamwad/app/orf.md",sourceDirName:"tech/system/android/esamwad/app",slug:"/tech/system/android/esamwad/app/esamwad-app-orf",permalink:"/docs/tech/system/android/esamwad/app/esamwad-app-orf",draft:!1,editUrl:"https://github.com/Samarth-HP/docs/tree/master/docs/tech/system/android/esamwad/app/orf.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"esamwad-app-orf",title:"ORF(Oral Reading Fluency) Practice",sidebar_label:"ORF Practice",sidebar_position:8},sidebar:"overview",previous:{title:"Homework Module",permalink:"/docs/tech/system/android/esamwad/app/esamwad-app-homework-module"},next:{title:"Shiksha Saathi",permalink:"/docs/tech/system/android/shikshasaathi/"}},l={},c=[{value:"Landing Page and Configuration",id:"landing-page-and-configuration",level:3},{value:"Workflow Manager and States:",id:"workflow-manager-and-states",level:3},{value:"Combination-Specific Configurations",id:"combination-specific-configurations",level:3},{value:"Workflow States:",id:"workflow-states",level:3},{value:"Final Result Screen and Data Submission",id:"final-result-screen-and-data-submission",level:3},{value:"Practice Results History",id:"practice-results-history",level:3},{value:"Hasura Schema",id:"hasura-schema",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ORF (Oral Reading Fluency) Practice module in the application aims to improve students' reading fluency. The module provides a structured practice plan and utilizes the Readalong and Quml workflows to assess and enhance students' ORF skills. Here is a detailed description of the ORF Practice module:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ORF Flow",src:a(5489).Z,width:"1866",height:"678"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://whimsical.com/orf-Bbe7zrLBjMVNzWwvvew1n6"},"ORF Flow")," "),(0,n.kt)("h3",{id:"landing-page-and-configuration"},"Landing Page and Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The module begins with a landing page where teachers input student information, including grades, sections, subjects, and student details."),(0,n.kt)("li",{parentName:"ul"},"The configuration for allowed grades and subjects is fetched from Firebase Remote Config, making the module easily adaptable.")),(0,n.kt)("h3",{id:"workflow-manager-and-states"},"Workflow Manager and States:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ORF Practice module operates using a built-in Workflow Manager that manages different practice states for each student."),(0,n.kt)("li",{parentName:"ul"},"Each state runs sequentially and provides a callback with either success or failure results."),(0,n.kt)("li",{parentName:"ul"},"The Workflow Manager loops through all states until they are executed, and it returns an array of results to the class that initiated the workflow.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Workflow Working",src:a(85).Z,width:"1050",height:"630"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://whimsical.com/workflow-working-Y7K8SoDQ6efWZrnJrcusMp"},"Workflow Working")," "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Workflow State Lifecycle",src:a(1778).Z,width:"1578",height:"486"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://whimsical.com/workflow-state-flow-CL1ai2xf2mcMEBRGSJPdXn"},"Workflow State Lifecycle")," "),(0,n.kt)("h3",{id:"combination-specific-configurations"},"Combination-Specific Configurations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configurations for different combinations of grades and subjects are downloaded in advance and stored in preferences from Firebase Remote Config."),(0,n.kt)("li",{parentName:"ul"},"Each combination has a set of states associated with it, and the Workflow Manager loads the appropriate states based on the chosen combination.")),(0,n.kt)("h3",{id:"workflow-states"},"Workflow States:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Readalong State"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The Readalong state begins by checking whether the Readalong app is installed on the device. If not, the module guides the teacher through the setup process, displaying a tutorial link for installation."),(0,n.kt)("li",{parentName:"ul"},"Once the Readalong app is correctly set up, the module redirects the teacher to the Readalong-based reading test."),(0,n.kt)("li",{parentName:"ul"},"During the test, the student reads a selected passage aloud, and the Readalong app records the reading speed and accuracy."),(0,n.kt)("li",{parentName:"ul"},"The Readalong app returns the results to the module, including the total number of correct words read and the time taken to complete the reading."),(0,n.kt)("li",{parentName:"ul"},'Based on predefined criteria for being "nipun" (proficient), the state is marked as a success or failure.'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Quml State"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In this state, the module receives a question set ID and downloads corresponding questions from the Diksha server."),(0,n.kt)("li",{parentName:"ul"},"The module opens a web view with a cached offline-enabled version of the Quml player, which runs the questions and collects results via JavaScript interfacing."),(0,n.kt)("li",{parentName:"ul"},"The results are processed, and the state is marked as a success or failure based on the nipun criteria.")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Workflow State Lifecycle",src:a(7513).Z,width:"1854",height:"546"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://whimsical.com/quml-6Ce4vpJGyoHJmeUqtYoeoh"},"Workflow State Lifecycle")," "),(0,n.kt)("h3",{id:"final-result-screen-and-data-submission"},"Final Result Screen and Data Submission"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After completing the workflow, the class that initiated the workflow receives the states from the Workflow Manager."),(0,n.kt)("li",{parentName:"ul"},"The class renders the final result screen, displaying whether the student is nipun or not nipun based on the success or failure of the states."),(0,n.kt)("li",{parentName:"ul"},"The results are pushed to the Hasura server via GraphQL APIs for record-keeping and analysis.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Workflow State Lifecycle",src:a(4950).Z,width:"1830",height:"486"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://whimsical.com/orf-data-flow-Eo7XX9Gd6gCGKUP1evUwR5"},"Workflow State Lifecycle")),(0,n.kt)("h3",{id:"practice-results-history"},"Practice Results History"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The landing page of the ORF module also offers an option to view the practice results history of students."),(0,n.kt)("li",{parentName:"ul"},"Teachers can select a combination of grade and section, and the module calls Hasura to fetch results for that combination."),(0,n.kt)("li",{parentName:"ul"},"The practice results history screen displays the grade's practice results for each student, showing the latest practice flow for each.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The ORF Practice module efficiently uses the Workflow Manager and combines the Readalong and Quml workflows to provide tailored practice plans for students' ORF improvement. The module enables teachers to monitor and track students' progress effectively.")),(0,n.kt)("h3",{id:"hasura-schema"},"Hasura Schema"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ORF Schema",src:a(9018).Z,width:"285",height:"396"})))}p.isMDXComponent=!0},9018:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/assessment_result_schema-bca12c0348bcef806cc45e39133dc44b.png"},5489:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/orf-113b23edc4ea82371c13b9b0f371a75f.png"},4950:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/orf_data_flow-7e1015b2356abf881fcb91a8ff41e247.png"},7513:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/quml-353bde8feda3521c94288d0e279c12a9.png"},1778:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/workflow_state_flow-bc05b5327f86b8dcee308ba3256ff0af.png"},85:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/workflow_working-b7f07e7ea7be045ec0e5ea521dae9bb5.png"}}]);