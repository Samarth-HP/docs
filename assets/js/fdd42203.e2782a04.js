"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[137],{3905:(e,n,s)=>{s.d(n,{Zo:()=>d,kt:()=>h});var a=s(7294);function t(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function i(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,a)}return s}function r(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?i(Object(s),!0).forEach((function(n){t(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function o(e,n){if(null==e)return{};var s,a,t=function(e,n){if(null==e)return{};var s,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)s=i[a],n.indexOf(s)>=0||(t[s]=e[s]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)s=i[a],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var l=a.createContext({}),m=function(e){var n=a.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):r(r({},n),e)),s},d=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var s=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(s),p=t,h=c["".concat(l,".").concat(p)]||c[p]||u[p]||i;return s?a.createElement(h,r(r({ref:n},d),{},{components:s})):a.createElement(h,r({ref:n},d))}));function h(e,n){var s=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=s.length,r=new Array(i);r[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:t,r[1]=o;for(var m=2;m<i;m++)r[m]=s[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,s)}p.displayName="MDXCreateElement"},1950:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=s(7462),t=(s(7294),s(3905));const i={id:"assessmentmodule",title:"Assessment Module",sidebar_label:"Assessment Module",sidebar_position:3},r=void 0,o={unversionedId:"Legacy/E-Samwad/assessmentmodule",id:"Legacy/E-Samwad/assessmentmodule",title:"Assessment Module",description:"1.Overview",source:"@site/docs/Legacy/E-Samwad/E-Samwad-AssessmentModule.md",sourceDirName:"Legacy/E-Samwad",slug:"/Legacy/E-Samwad/assessmentmodule",permalink:"/docs/Legacy/E-Samwad/assessmentmodule",draft:!1,editUrl:"https://github.com/Samarth-HP/docs/tree/master/docs/Legacy/E-Samwad/E-Samwad-AssessmentModule.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"assessmentmodule",title:"Assessment Module",sidebar_label:"Assessment Module",sidebar_position:3},sidebar:"overview",previous:{title:"Samwad - Functional Specifications",permalink:"/docs/Legacy/E-Samwad/SamwadFuncSpecs"},next:{title:"Deploy Samwad",permalink:"/docs/Legacy/E-Samwad/deploysamwad"}},l={},m=[{value:"1.Overview",id:"1overview",level:2},{value:"2. Concepts",id:"2-concepts",level:2},{value:"3. Architecture",id:"3-architecture",level:2},{value:"4. UX Flow",id:"4-ux-flow",level:2},{value:"Flow Chart",id:"flow-chart",level:3},{value:"5. Assessment Model",id:"5-assessment-model",level:2},{value:"6. Api&#39;s",id:"6-apis",level:2},{value:"8. Bussiness Logics",id:"8-bussiness-logics",level:2}],d={toc:m},c="wrapper";function u(e){let{components:n,...i}=e;return(0,t.kt)(c,(0,a.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"1overview"},"1.Overview"),(0,t.kt)("p",null,"Assessments are an intrinsic part of School Education. Conducting assessments is followed by data collection of the student performance in those assessments.  Assessment data collection in a streamlined manner allows the state to track completely a student\u2019s learning journey. This includes the student\u2019s performance across academic years, across assessments, learning levels basis achievement of learning outcomes, and so on. Real time availability of assessment data is critical for the state to be able to make data-based decisions, such as focus areas for remediation."),(0,t.kt)("p",null,"Currently, in the state of Himachal Pradesh, the assessment data is collected for all grades students via the e-Samwad app. The data is collected for all the formative, summative and end year assessments conducted across the state. The data collection drive and its respective parameters which are further discussed in the document are configured by the Department Coordinators from an Admin Console."),(0,t.kt)("p",null,"Given the success and adoption of the feature, we have made the assessment module code repository public and the whole process generic in a way such that the same data collection model can be emulated across different states. "),(0,t.kt)("p",null,"The document is divided into 3 sections. First section gives an underlining of the concepts and terminologies used in the module. The next section lists down the functional specifications of the feature (from a user and admin perspective). This is followed by listing down the Database schema and API Specifications for the feature."),(0,t.kt)("h2",{id:"2-concepts"},"2. Concepts"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("em",{parentName:"li"},"Admin Console"),": Admin View enabling the administrator to manage all the assessment associated attributes and configurations which are then reflected on e-Samwad app."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("em",{parentName:"li"},"Grade"),": Academic construct in which the student is currently studying. Values range from 1-12"),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("em",{parentName:"li"},"Streams"),": Construct defining specialisations in grades 11 and 12. For instance \u2013 Grade 11 can have 4 streams: Arts, Medical, Non-Medical and Commerce. Streams can be configured and their mapping to a grade can be configured from Admin Console."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("em",{parentName:"li"},"Assessment"),":  Assessment is the systematic exercise conducted to evaluate the learning level of students. Each assessment is mapped to an academic year, grades, and streams. Only mapped grades and streams are applicable under an assessment. For instance \u2013 Grade 10 and all streams of Grade 12 are mapped under Pre-Board Exams. The Assessment Names can be configured from Admin Console. Currently supported Assessment Modules are:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"        *  Formative Assessment 1   \n        *  Formative Assessment 2  \n        *  Formative Assessment 3\n        *  Formative Assessment 4 \n        *  Summative Assessment 1\n        *  Summative Assessment 2 \n        *  Pre-Board Exam \n        *  Term-1 Exam\n        *  Term-2 Exam\n        *  School Baseline Assessment\n        *  School Endline Assessment\n \n")),(0,t.kt)("ol",{start:5},(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Deadline"),": Each Assessment Data collection drive is mapped to a deadline, which defines the time frame for which assessment data can be uploaded by the teachers. Each deadline is mapped to a geographical division (District at present) to enable different time frames and different assessments.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Assessment Grade"),": Evaluation parameter across which a student is evaluated. The Assessment Grade is defined by two parameters \u2013 Display Name and Mapping. Display name defines how an Assessment Grade is visible to the user when uploading Assessment info and mapping refers to how the value stored corresponds to a display value in Database. For instance \u2013 \u201cA\u201d,\u201dB\u201d,\u201dC\u201d,\u201dD\u201d could be display values and 10,8,6,4 could be the mappings. assessment grade is mapped for a student to different subjects. The assessment grade is one form of data entered by the teacher through the e-Samwad app.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Assessment Marks"),": Evaluation parameter across which a student can be evaluated. Marks are defined by the following parameters \u2013 Pass Percentage for an assessment and Range of Maximum Marks possible for an assessment. Marks are mapped for a student to different subjects. The assessment marks is one form of data entered by the teacher through the e-Samwad app.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Evaluation parameters"),": Marks and Assessment Grade constitute Evaluation parameters. An assessment can be configured to collect or not collect Evaluation parameters, and which one of them, if set to true.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Learning Objectives (LO) ","[Competencies]"),": LOs are the main ideas or skills you expect students to master corresponding to a subject in a grade. Each LO is mapped to a subject and a grade number.  For instance- \u201cRearranges the letters into meaningful words with the help of picture\u201d is a LO applicable to English for Grade 2 students. For each assessment, certain LOs are evaluated. Data is collected at a class/student level (basis configuration of assessment) for each assessment.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"LO Bundle"),": A user centric construct defined to enable an admin to bundle certain LOs into a group and map to a particular assessment.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Unit"),": Unit is an academic construct which refers to the topics/chapters which need to be evaluated under an assessment. This is usually relevant in case of secondary grades. Each unit is mapped to a subject and a grade. Certain numbers of units are evaluated under an assessment.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Unit Bundle"),": A user centric construct defined to enable an admin to bundle certain Units into a group and map to a particular assessment.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Question"),": Question is a unit of evaluation, which refers to the questions asked in an assessment. As an admin/ assessment conducting agency, you can enable collection of Question wise data for an assessment. A Question is mapped to a grade, LO and subject. For one class, an assessment will include testing of a set of questions across different chapters/units.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Question Bundle"),": A user centric construct defined to enable an admin to bundle certain questions into a group and map to a particular assessment.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Assessment Unit"),": This includes LO/Unit/Question. Under an assessment data collection exercise, you could enable collection of data with respect to Assessment units or not. The data for the assessment units can be collected at an aggregated level or at student level granularity. For instance- Aggregation means, number of students understanding a LO in grade v/s granular level means, corresponding to each student, if each student has understood a particular LO or not.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Submission Type"),": A user centric construct defined to enable an admin to select if the assessment collection should be on individual level or aggregate level.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Sms Template"),": The template for the sms to be sent for assessment,")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Mapping"),": JSON based mapping of evaluation params.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"Udise"),": Unique Code for school in a particular district."))),(0,t.kt)("h2",{id:"3-architecture"},"3. Architecture"),(0,t.kt)("p",null,"The decision tree for an admin, while creating any assessment from the Admin Console looks like following:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"assessment_arch",src:s(7503).Z,width:"912",height:"317"})),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Rules")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"(1,2) === any one of it\n(3,4,5,6,7,8) ==== any one of it\n(1,2) or (3,4,5,6,7,8)  1 from each\n")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"As an admin, you could pick either one of evaluation parameters or  assessment units from above diagram, or one each from evaluation parameters and assessment units.")),(0,t.kt)("h2",{id:"4-ux-flow"},"4. UX Flow"),(0,t.kt)("p",null,"As a user you should be able to,"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"View Assessments enabled for your school (dependent on Deadlines mapped to your school)"),(0,t.kt)("li",{parentName:"ol"},"View Grade wise progress of Assessment Data Upload for all Grades and Streams Applicable under an Assessment"),(0,t.kt)("li",{parentName:"ol"},"Upload and edit marks or assessment grades for all students in your grade for all subjects taught in a particular grade (till deadline is open or data has not been submitted for a grade)"),(0,t.kt)("li",{parentName:"ol"},"Upload and edit LO/Question/Unit level understanding data for subjects in a grade if Assessment Unit have been enabled for the assessment (till the deadline is open or data has not been submitted for a grade)"),(0,t.kt)("li",{parentName:"ol"},"Not move to the next screen from the Marks/Assessment Grade screen until data filled for all students."),(0,t.kt)("li",{parentName:"ol"},"Not move to next screen from Assessment Unit screen until data filled for all students/LOs (depending on granularity selected per the decision tree above)"),(0,t.kt)("li",{parentName:"ol"},"View students under the Marks/Assessment Grade applicable for the subject. (In case subject is optional)"),(0,t.kt)("li",{parentName:"ol"},"Submit Assessment data for the grade once data has been filled for all the subjects."),(0,t.kt)("li",{parentName:"ol"},"Define maximum marks for an assessment while uploading marks for a subject, subject to the range of maximum marks defined for an assessment."),(0,t.kt)("li",{parentName:"ol"},"Preview the assessment data being submitted.")),(0,t.kt)("h3",{id:"flow-chart"},"Flow Chart"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"ux_flow",src:s(2584).Z,width:"1068",height:"520"})),(0,t.kt)("h2",{id:"5-assessment-model"},"5. Assessment Model"),(0,t.kt)("p",null,"Sample Assessment Module JSON"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'     {\n      "id": 665,\n      "name": "FORMATIVE ASSESSMENT",\n      "nameFull": "FORMATIVE ASSESSMENT 1 (3-8)",\n      "deadline": "13:45 11/12/2021",\n      "subjects": [],\n      "isEditable": true,\n      "isEnabled": true,\n      "year": "2021-2022",\n      "submission_type": "TSP",\n      "is_final": false,\n      "type": {\n        "id": 16,\n        "name": "FORMATIVE ASSESSMENT 1 (3-8)",\n        "abbreviation": "FA-1",\n        "desc": "Formative Assessment 1 (3-8)",\n        "category": {\n          "id": 1,\n          "name": "FORMATIVE ASSESSMENT",\n          "abbreviation": "FA",\n          "desc": "Formative Assessment"\n        }\n      },\n      "submission_type_v2": {\n        "id": 2,\n        "aggregation": "TSP",\n        "category": "LO"\n      },\n      "evaluation_params": "MARKS",\n      "components": [\n        {\n          "id": 40,\n          "subjects": [\n            {\n              "id": 101,\n              "name": "Hindi",\n              "grade_number": 5\n            }\n          ],\n          "component_type": {\n            "id": 5,\n            "name": "Internal Assessment"\n          },\n          "max_marks": 10,\n          "passing_percentage": 33.0\n        },\n        {\n          "id": 41,\n          "subjects": [\n            {\n              "id": 101,\n              "name": "Hindi",\n              "grade_number": 5\n            }\n          ],\n          "component_type": {\n            "id": 1,\n            "name": "Theory"\n          },\n          "max_marks": 15,\n          "passing_percentage": 33.0\n        }\n      ],\n      "sms_template": "21",\n      "lo_bundles": [\n        {\n          "id": 7,\n          "name": "Formative 3 to 8",\n          "desc": "Formative 3 to 8",\n          "lo": [\n              {\n              "id": 1033,\n              "subject": "English",\n              "gradeNumber": 6,\n              "LOName": "LO Social Science -6",\n              "LOCode": "SSc-6",\n              "is_unit": false\n             }\n            ]\n        }\n      ],\n      "unit_bundles": [\n          {\n          "id": 7,\n          "name": "Formative 3 to 8",\n          "desc": "Formative 3 to 8",\n          "lo": [\n              {\n              "id": 1033,\n              "subject": "English",\n              "gradeNumber": 6,\n              "unitName": "LO Social Science -6",\n              "unitCode": "SSc-6",\n              "is_unit": false\n             }\n            ]\n        }\n      ],\n      "question_bundles": [\n          {\n          "id": 7,\n          "name": "Formative 3 to 8",\n          "desc": "Formative 3 to 8",\n          "question": [\n              {\n              "id": 1033,\n              "questionName": "English",\n              "cutOffMarks": 60,\n              "gradeNumber": 6\n             }\n            ]\n        }\n      ],\n      "mapping": {"A":"A","B":"B","C":"C","D:"D"},\n      "overall_total_marks": 50,\n      "overall_pass_pecentage": 12.8\n    }\n')),(0,t.kt)("h2",{id:"6-apis"},"6. Api's"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"All the APIs use have ",(0,t.kt)("em",{parentName:"p"},"Authorization")," enabled and we get school udise from the jwt token sent in Authorization header")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"Assessment Creation Api"),": Api to create forms via enketo form.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'    POST     | {esmwad-url}/api/v4/form/submit\n    HEADERS  | Authorization: Bearer <Token>\n    BODY     | Enketo form encoded xml data\n    RESPONSE |  \n                {\n                    "data": "ok"\n                }\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"Assessment Meta Api"),": Api to return assessment, grade and class meta for a specific udise.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'    GET      | {esmwad-url}/api/v5/all\n    HEADERS  | Authorization: Bearer <Token>\n    RESPONSE |  \n                {\n                    "id":665,\n                    "name":"FORMATIVE ASSESSMENT",\n                    "nameFull":"FORMATIVE ASSESSMENT 1 (3-8)",\n                    "deadline":"13:45 11/12/2021",\n                    "subjects":[\n                        \n                    ],\n                    "isEditable":true,\n                    "isEnabled":true,\n                    "year":"2021-2022",\n                    "submission_type":"TSP",\n                    "is_final":false,\n                    "type":{\n                        "id":16,\n                        "name":"FORMATIVE ASSESSMENT 1 (3-8)",\n                        "abbreviation":"FA-1",\n                        "desc":"Formative Assessment 1 (3-8)",\n                        "category":{\n                            "id":1,\n                            "name":"FORMATIVE ASSESSMENT",\n                            "abbreviation":"FA",\n                            "desc":"Formative Assessment"\n                        }\n                    },\n                    "submission_type_v2":{\n                        "id":2,\n                        "aggregation":"TSP",\n                        "category":"LO"\n                    },\n                    "evaluation_params":"MARKS",\n                    "components":[\n                        {\n                            "id":40,\n                            "subjects":[\n                                {\n                                "id":101,\n                                "name":"Hindi",\n                                "grade_number":5\n                                }\n                            ],\n                            "component_type":{\n                                "id":5,\n                                "name":"Internal Assessment"\n                            },\n                            "max_marks":10,\n                            "passing_percentage":33.0\n                        },\n                        {\n                            "id":41,\n                            "subjects":[\n                                {\n                                "id":101,\n                                "name":"Hindi",\n                                "grade_number":5\n                                }\n                            ],\n                            "component_type":{\n                                "id":1,\n                                "name":"Theory"\n                            },\n                            "max_marks":15,\n                            "passing_percentage":33.0\n                        }\n                    ],\n                    "sms_template":"21",\n                    "lo_bundles":[\n                        {\n                            "id":7,\n                            "name":"Formative 3 to 8",\n                            "desc":"Formative 3 to 8",\n                            "lo":[\n                                {\n                                "id":1033,\n                                "subject":"English",\n                                "gradeNumber":6,\n                                "LOName":"LO Social Science -6",\n                                "LOCode":"SSc-6",\n                                "is_unit":false\n                                }\n                            ]\n                        }\n                    ],\n                    "unit_bundles":[\n                        {\n                            "id":7,\n                            "name":"Formative 3 to 8",\n                            "desc":"Formative 3 to 8",\n                            "lo":[\n                                {\n                                "id":1033,\n                                "subject":"English",\n                                "gradeNumber":6,\n                                "unitName":"LO Social Science -6",\n                                "unitCode":"SSc-6",\n                                "is_unit":false\n                                }\n                            ]\n                        }\n                    ],\n                    "question_bundles":[\n                        {\n                            "id":7,\n                            "name":"Formative 3 to 8",\n                            "desc":"Formative 3 to 8",\n                            "question":[\n                                {\n                                "id":1033,\n                                "questionName":"English",\n                                "cutOffMarks":60,\n                                "gradeNumber":6\n                                }\n                            ]\n                        }\n                    ],\n                    "mapping":{\n                        "A":"A",\n                        "B":"B",\n                        "C":"C",\n                        "D":"D"\n                    },\n                    "overall_total_marks":50,\n                    "overall_pass_pecentage":12.8,\n                    "gradeData":[\n                        (first index of this JSONArray is overall class progress)\n                        {\n                            "id":6650001,\n                            "className":"overall",\n                            "progress":0,\n                            "smsStatus":false\n                        },\n                        {\n                            "id":6650600,\n                            "className":"6A",\n                            "grade":6,\n                            "grade_id":6,\n                            "section":"A",\n                            "stream":null,\n                            "progress":0.0,\n                            "smsStatus":false,\n                            "isClassEmpty":false\n                        }\n                    ],\n                    "subjectData":[\n                        {\n                            "subject":"Social Science",\n                            "subject_id":44,\n                            "isCompleted":true,\n                            "className":"6A",\n                            "assessment":665,\n                            "stream":null,\n                            "grade":6,\n                            "components":[\n                                {\n                                "id":40,\n                                "passing_percentage":33.0,\n                                "max_marks":10,\n                                "component_type":{\n                                    "id":5,\n                                    "name":"Internal Assessment"\n                                }\n                                },\n                                {\n                                "id":41,\n                                "passing_percentage":33.0,\n                                "max_marks":15,\n                                "component_type":{\n                                    "id":1,\n                                    "name":"Theory"\n                                }\n                                }\n                            ]\n                        }\n                    ]\n                }\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"Submission Api"),": Api for submitting and fetching individual and aggregate submissions for particular assessment.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'(For Individual Submission):\n\nPOST     | {esmwad-url}/api/v5/assessment/submission/student/?assessmentID=<id>\nHEADERS  | Authorization: Bearer <Token>\nBODY     | \n            {\n                "data": [\n                    {\n                        "id": 34,\n                        "assessment": 709,\n                        "grade": 7,\n                        "isEnabled": true,\n                        "className": "7C",\n                        "marks_submissions": [\n                            {\n                                "assessment": 709,\n                                "assessment_marks": 13,\n                                "component": 36,\n                                "is_present": true,\n                                "school": 15547,\n                                "subject": 66\n                            },\n                            {\n                                "assessment": 709,\n                                "assessment_marks": 39,\n                                "component": 37,\n                                "is_present": true,\n                                "school": 15547,\n                                "subject": 66\n                            }\n                        ],\n                        "school": 15547,\n                        "student": 1036518,\n                        "subject": 66\n                    }\n                ]\n            }\nRESPONSE |  \n            {\n                "data": [\n                    {\n                    "id": 34,\n                    "assessment": 709,\n                    "className": "7A",\n                    "grade": 7,\n                    "school": 15547,\n                    "stream": null,\n                    "student": 1036518,\n                    "subject": 66,\n                    "marks_submissions": [\n                        {\n                        "id": 15,\n                        "component": 37,\n                        "school": 15547,\n                        "assessment": 709,\n                        "subject": 66,\n                        "assessment_percent": null,\n                        "assessment_marks": 39.0,\n                        "is_present": true\n                        },\n                        {\n                        "id": 14,\n                        "component": 36,\n                        "school": 15547,\n                        "assessment": 709,\n                        "subject": 66,\n                        "assessment_percent": null,\n                        "assessment_marks": 13.0,\n                        "is_present": true\n                        }\n                    ],\n                    "grade_submissions": null,\n                    "assessment_unit": null,\n                    "isEnabled": true\n                    }\n                ]\n            }\n\n\nGET      | {esmwad-url}/api/v5/assessment/submission/class/?assessmentID=<id>\nHEADERS  | Authorization: Bearer <Token>\nRESPONSE | \n            {\n                "data": [\n                    {\n                    "id": 20,\n                    "assessment": 709,\n                    "school": 15547,\n                    "submission": {\n                        "id": 11,\n                        "school": 15547,\n                        "assessment": 709,\n                        "subject": 45,\n                        "students_cleared": 0,\n                        "total_students_present": 2\n                    },\n                    "au_type": "LO",\n                    "lo": 431,\n                    "unit": null,\n                    "question": null,\n                    "grade": 7,\n                    "subject": 45\n                    }\n                ]\n            }\n\n\n(For Aggregate Submission) \nPOST      | {esmwad-url}/api/v5/assessment/submission/class/?assessmentID=<id>\nHEADERS   | Authorization: Bearer <Token>\nBODY      | \n            {\n                "data": [\n                    {\n                    "id": 20,\n                    "assessment": 709,\n                    "school": 15547,\n                    "submission": {\n                        "id": 9,\n                        "school": 15547,\n                        "assessment": 709,\n                        "subject": 45,\n                        "students_cleared": 0,\n                        "total_students_present": 2\n                    },\n                    "assessment_unit_type": "lo",\n                    "lo": 431,\n                    "unit": null,\n                    "question": null,\n                    "grade": 7,\n                    "subject": 45,\n                            "au_type": "lo"\n                    }\n                ]\n            }\nRESPONSE |  \n            {\n                "data": [\n                    {\n                    "id": 34,\n                    "assessment": 709,\n                    "className": "7A",\n                    "grade": 7,\n                    "school": 15547,\n                    "stream": null,\n                    "student": 1036518,\n                    "subject": 66,\n                    "marks_submissions": [\n                        {\n                        "id": 15,\n                        "component": 37,\n                        "school": 15547,\n                        "assessment": 709,\n                        "subject": 66,\n                        "assessment_percent": null,\n                        "assessment_marks": 39.0,\n                        "is_present": true\n                        },\n                        {\n                        "id": 14,\n                        "component": 36,\n                        "school": 15547,\n                        "assessment": 709,\n                        "subject": 66,\n                        "assessment_percent": null,\n                        "assessment_marks": 13.0,\n                        "is_present": true\n                        }\n                    ],\n                    "grade_submissions": null,\n                    "assessment_unit": null,\n                    "isEnabled": true\n                    }\n                ]\n            }\n\nGET      | {esmwad-url}/api/v5/assessment/submission/class/?assessmentID=<id>\nHEADERS  | Authorization: Bearer <Token>\nRESPONSE | \n            {\n                "data": [\n                    {\n                    "id": 20,\n                    "assessment": 709,\n                    "school": 15547,\n                    "submission": {\n                        "id": 11,\n                        "school": 15547,\n                        "assessment": 709,\n                        "subject": 45,\n                        "students_cleared": 0,\n                        "total_students_present": 2\n                    },\n                    "au_type": "LO",\n                    "lo": 431,\n                    "unit": null,\n                    "question": null,\n                    "grade": 7,\n                    "subject": 45\n                    }\n                ]\n            }\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("em",{parentName:"li"},"Sms Api"),": Api to send SMS after assessment submission.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'    POST     | {esmwad-url}/api/v4/send/sms\n    HEADERS  | Authorization: Bearer <Token>\n    BODY     | \n                {\n                    "signature":<encoded signature string>,\n                    "className":"7C",\n                    "assessmentID":665\n                }\n    RESPONSE |\n                "data":{\n                    "status":"success"\n                }\n')),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("a",{parentName:"p",href:"https://github.com/Samarth-HP/esamwad-backend"},(0,t.kt)("em",{parentName:"a"},"Esamwad Backend Repo")))),(0,t.kt)("h2",{id:"8-bussiness-logics"},"8. Bussiness Logics"),(0,t.kt)("p",null,"   Coming Soon..."))}u.isMDXComponent=!0},7503:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/assessment_arch-3c11ea941c9462bf18c50b8584c4475b.png"},2584:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/assessment_ux_flow-2f310634865b898c347ea630110951f7.png"}}]);