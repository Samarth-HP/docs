---
id: assessmentmodule
title: Assessment Module
sidebar_label: Assessment Module
sidebar_position: 3
---

## 1.Overview

Assessments are an intrinsic part of School Education. Conducting assessments is followed by data collection of the student performance in those assessments.  Assessment data collection in a streamlined manner allows the state to track completely a student’s learning journey. This includes the student’s performance across academic years, across assessments, learning levels basis achievement of learning outcomes, and so on. Real time availability of assessment data is critical for the state to be able to make data-based decisions, such as focus areas for remediation.

Currently, in the state of Himachal Pradesh, the assessment data is collected for all grades students via the e-Samwad app. The data is collected for all the formative, summative and end year assessments conducted across the state. The data collection drive and its respective parameters which are further discussed in the document are configured by the Department Coordinators from an Admin Console.

Given the success and adoption of the feature, we have made the assessment module code repository public and the whole process generic in a way such that the same data collection model can be emulated across different states. 

The document is divided into 3 sections. First section gives an underlining of the concepts and terminologies used in the module. The next section lists down the functional specifications of the feature (from a user and admin perspective). This is followed by listing down the Database schema and API Specifications for the feature.

## 2. Concepts


1.  *Admin Console*: Admin View enabling the administrator to manage all the assessment associated attributes and configurations which are then reflected on e-Samwad app.
    
2.  *Grade*: Academic construct in which the student is currently studying. Values range from 1-12
    
3.  *Streams*: Construct defining specialisations in grades 11 and 12. For instance – Grade 11 can have 4 streams: Arts, Medical, Non-Medical and Commerce. Streams can be configured and their mapping to a grade can be configured from Admin Console.
    
4.  *Assessment*:  Assessment is the systematic exercise conducted to evaluate the learning level of students. Each assessment is mapped to an academic year, grades, and streams. Only mapped grades and streams are applicable under an assessment. For instance – Grade 10 and all streams of Grade 12 are mapped under Pre-Board Exams. The Assessment Names can be configured from Admin Console. Currently supported Assessment Modules are:
    

            *  Formative Assessment 1   
            *  Formative Assessment 2  
            *  Formative Assessment 3
            *  Formative Assessment 4 
            *  Summative Assessment 1
            *  Summative Assessment 2 
            *  Pre-Board Exam 
            *  Term-1 Exam
            *  Term-2 Exam
            *  School Baseline Assessment
            *  School Endline Assessment
     

5.  *Deadline*: Each Assessment Data collection drive is mapped to a deadline, which defines the time frame for which assessment data can be uploaded by the teachers. Each deadline is mapped to a geographical division (District at present) to enable different time frames and different assessments.
    
6.  *Assessment Grade*: Evaluation parameter across which a student is evaluated. The Assessment Grade is defined by two parameters – Display Name and Mapping. Display name defines how an Assessment Grade is visible to the user when uploading Assessment info and mapping refers to how the value stored corresponds to a display value in Database. For instance – “A”,”B”,”C”,”D” could be display values and 10,8,6,4 could be the mappings. assessment grade is mapped for a student to different subjects. The assessment grade is one form of data entered by the teacher through the e-Samwad app.
    
7.  *Assessment Marks*: Evaluation parameter across which a student can be evaluated. Marks are defined by the following parameters – Pass Percentage for an assessment and Range of Maximum Marks possible for an assessment. Marks are mapped for a student to different subjects. The assessment marks is one form of data entered by the teacher through the e-Samwad app.
    
8.  *Evaluation parameters*: Marks and Assessment Grade constitute Evaluation parameters. An assessment can be configured to collect or not collect Evaluation parameters, and which one of them, if set to true.
    
9.  *Learning Objectives (LO) [Competencies]*: LOs are the main ideas or skills you expect students to master corresponding to a subject in a grade. Each LO is mapped to a subject and a grade number.  For instance- “Rearranges the letters into meaningful words with the help of picture” is a LO applicable to English for Grade 2 students. For each assessment, certain LOs are evaluated. Data is collected at a class/student level (basis configuration of assessment) for each assessment.
    
10.  *LO Bundle*: A user centric construct defined to enable an admin to bundle certain LOs into a group and map to a particular assessment.
    
11.  *Unit*: Unit is an academic construct which refers to the topics/chapters which need to be evaluated under an assessment. This is usually relevant in case of secondary grades. Each unit is mapped to a subject and a grade. Certain numbers of units are evaluated under an assessment.
    
12.  *Unit Bundle*: A user centric construct defined to enable an admin to bundle certain Units into a group and map to a particular assessment.
    
13.  *Question*: Question is a unit of evaluation, which refers to the questions asked in an assessment. As an admin/ assessment conducting agency, you can enable collection of Question wise data for an assessment. A Question is mapped to a grade, LO and subject. For one class, an assessment will include testing of a set of questions across different chapters/units.
    
14.  *Question Bundle*: A user centric construct defined to enable an admin to bundle certain questions into a group and map to a particular assessment.
    
15.  *Assessment Unit*: This includes LO/Unit/Question. Under an assessment data collection exercise, you could enable collection of data with respect to Assessment units or not. The data for the assessment units can be collected at an aggregated level or at student level granularity. For instance- Aggregation means, number of students understanding a LO in grade v/s granular level means, corresponding to each student, if each student has understood a particular LO or not.

16. *Submission Type*: A user centric construct defined to enable an admin to select if the assessment collection should be on individual level or aggregate level.

17. *Sms Template*: The template for the sms to be sent for assessment,

18. *Mapping*: JSON based mapping of evaluation params.

19. *Udise*: Unique Code for school in a particular district.


## 3. Architecture

The decision tree for an admin, while creating any assessment from the Admin Console looks like following:

![assessment_arch](/img/assessment_arch.png)


**Rules**

    (1,2) === any one of it
    (3,4,5,6,7,8) ==== any one of it
    (1,2) or (3,4,5,6,7,8)  1 from each

> As an admin, you could pick either one of evaluation parameters or  assessment units from above diagram, or one each from evaluation parameters and assessment units.

## 4. UX Flow

As a user you should be able to,

1.  View Assessments enabled for your school (dependent on Deadlines mapped to your school)
    
2.  View Grade wise progress of Assessment Data Upload for all Grades and Streams Applicable under an Assessment
    
3.  Upload and edit marks or assessment grades for all students in your grade for all subjects taught in a particular grade (till deadline is open or data has not been submitted for a grade)
    
4.  Upload and edit LO/Question/Unit level understanding data for subjects in a grade if Assessment Unit have been enabled for the assessment (till the deadline is open or data has not been submitted for a grade)
    
5.  Not move to the next screen from the Marks/Assessment Grade screen until data filled for all students.
    
6.  Not move to next screen from Assessment Unit screen until data filled for all students/LOs (depending on granularity selected per the decision tree above)
    
7.  View students under the Marks/Assessment Grade applicable for the subject. (In case subject is optional)
    
8.  Submit Assessment data for the grade once data has been filled for all the subjects.
    
9.  Define maximum marks for an assessment while uploading marks for a subject, subject to the range of maximum marks defined for an assessment.
    
10.  Preview the assessment data being submitted.

### Flow Chart

![ux_flow](/img/assessment_ux_flow.png)

## 5. Assessment Model

Sample Assessment Module JSON
```json
     {
      "id": 665,
      "name": "FORMATIVE ASSESSMENT",
      "nameFull": "FORMATIVE ASSESSMENT 1 (3-8)",
      "deadline": "13:45 11/12/2021",
      "subjects": [],
      "isEditable": true,
      "isEnabled": true,
      "year": "2021-2022",
      "submission_type": "TSP",
      "is_final": false,
      "type": {
        "id": 16,
        "name": "FORMATIVE ASSESSMENT 1 (3-8)",
        "abbreviation": "FA-1",
        "desc": "Formative Assessment 1 (3-8)",
        "category": {
          "id": 1,
          "name": "FORMATIVE ASSESSMENT",
          "abbreviation": "FA",
          "desc": "Formative Assessment"
        }
      },
      "submission_type_v2": {
        "id": 2,
        "aggregation": "TSP",
        "category": "LO"
      },
      "evaluation_params": "MARKS",
      "components": [
        {
          "id": 40,
          "subjects": [
            {
              "id": 101,
              "name": "Hindi",
              "grade_number": 5
            }
          ],
          "component_type": {
            "id": 5,
            "name": "Internal Assessment"
          },
          "max_marks": 10,
          "passing_percentage": 33.0
        },
        {
          "id": 41,
          "subjects": [
            {
              "id": 101,
              "name": "Hindi",
              "grade_number": 5
            }
          ],
          "component_type": {
            "id": 1,
            "name": "Theory"
          },
          "max_marks": 15,
          "passing_percentage": 33.0
        }
      ],
      "sms_template": "21",
      "lo_bundles": [
        {
          "id": 7,
          "name": "Formative 3 to 8",
          "desc": "Formative 3 to 8",
          "lo": [
              {
              "id": 1033,
              "subject": "English",
              "gradeNumber": 6,
              "LOName": "LO Social Science -6",
              "LOCode": "SSc-6",
              "is_unit": false
             }
            ]
        }
      ],
      "unit_bundles": [
          {
          "id": 7,
          "name": "Formative 3 to 8",
          "desc": "Formative 3 to 8",
          "lo": [
              {
              "id": 1033,
              "subject": "English",
              "gradeNumber": 6,
              "unitName": "LO Social Science -6",
              "unitCode": "SSc-6",
              "is_unit": false
             }
            ]
        }
      ],
      "question_bundles": [
          {
          "id": 7,
          "name": "Formative 3 to 8",
          "desc": "Formative 3 to 8",
          "question": [
              {
              "id": 1033,
              "questionName": "English",
              "cutOffMarks": 60,
              "gradeNumber": 6
             }
            ]
        }
      ],
      "mapping": {"A":"A","B":"B","C":"C","D:"D"},
      "overall_total_marks": 50,
      "overall_pass_pecentage": 12.8
    }
```

## 6. Api's

> All the APIs use have _Authorization_ enabled and we get school udise from the jwt token sent in Authorization header

* _Assessment Creation Api_: Api to create forms via enketo form.
```json
    POST     | {esmwad-url}/api/v4/form/submit
    HEADERS  | Authorization: Bearer <Token>
    BODY     | Enketo form encoded xml data
    RESPONSE |  
                {
                    "data": "ok"
                }
```

* _Assessment Meta Api_: Api to return assessment, grade and class meta for a specific udise.
```json
    GET      | {esmwad-url}/api/v5/all
    HEADERS  | Authorization: Bearer <Token>
    RESPONSE |  
                {
                    "id":665,
                    "name":"FORMATIVE ASSESSMENT",
                    "nameFull":"FORMATIVE ASSESSMENT 1 (3-8)",
                    "deadline":"13:45 11/12/2021",
                    "subjects":[
                        
                    ],
                    "isEditable":true,
                    "isEnabled":true,
                    "year":"2021-2022",
                    "submission_type":"TSP",
                    "is_final":false,
                    "type":{
                        "id":16,
                        "name":"FORMATIVE ASSESSMENT 1 (3-8)",
                        "abbreviation":"FA-1",
                        "desc":"Formative Assessment 1 (3-8)",
                        "category":{
                            "id":1,
                            "name":"FORMATIVE ASSESSMENT",
                            "abbreviation":"FA",
                            "desc":"Formative Assessment"
                        }
                    },
                    "submission_type_v2":{
                        "id":2,
                        "aggregation":"TSP",
                        "category":"LO"
                    },
                    "evaluation_params":"MARKS",
                    "components":[
                        {
                            "id":40,
                            "subjects":[
                                {
                                "id":101,
                                "name":"Hindi",
                                "grade_number":5
                                }
                            ],
                            "component_type":{
                                "id":5,
                                "name":"Internal Assessment"
                            },
                            "max_marks":10,
                            "passing_percentage":33.0
                        },
                        {
                            "id":41,
                            "subjects":[
                                {
                                "id":101,
                                "name":"Hindi",
                                "grade_number":5
                                }
                            ],
                            "component_type":{
                                "id":1,
                                "name":"Theory"
                            },
                            "max_marks":15,
                            "passing_percentage":33.0
                        }
                    ],
                    "sms_template":"21",
                    "lo_bundles":[
                        {
                            "id":7,
                            "name":"Formative 3 to 8",
                            "desc":"Formative 3 to 8",
                            "lo":[
                                {
                                "id":1033,
                                "subject":"English",
                                "gradeNumber":6,
                                "LOName":"LO Social Science -6",
                                "LOCode":"SSc-6",
                                "is_unit":false
                                }
                            ]
                        }
                    ],
                    "unit_bundles":[
                        {
                            "id":7,
                            "name":"Formative 3 to 8",
                            "desc":"Formative 3 to 8",
                            "lo":[
                                {
                                "id":1033,
                                "subject":"English",
                                "gradeNumber":6,
                                "unitName":"LO Social Science -6",
                                "unitCode":"SSc-6",
                                "is_unit":false
                                }
                            ]
                        }
                    ],
                    "question_bundles":[
                        {
                            "id":7,
                            "name":"Formative 3 to 8",
                            "desc":"Formative 3 to 8",
                            "question":[
                                {
                                "id":1033,
                                "questionName":"English",
                                "cutOffMarks":60,
                                "gradeNumber":6
                                }
                            ]
                        }
                    ],
                    "mapping":{
                        "A":"A",
                        "B":"B",
                        "C":"C",
                        "D":"D"
                    },
                    "overall_total_marks":50,
                    "overall_pass_pecentage":12.8,
                    "gradeData":[
                        (first index of this JSONArray is overall class progress)
                        {
                            "id":6650001,
                            "className":"overall",
                            "progress":0,
                            "smsStatus":false
                        },
                        {
                            "id":6650600,
                            "className":"6A",
                            "grade":6,
                            "grade_id":6,
                            "section":"A",
                            "stream":null,
                            "progress":0.0,
                            "smsStatus":false,
                            "isClassEmpty":false
                        }
                    ],
                    "subjectData":[
                        {
                            "subject":"Social Science",
                            "subject_id":44,
                            "isCompleted":true,
                            "className":"6A",
                            "assessment":665,
                            "stream":null,
                            "grade":6,
                            "components":[
                                {
                                "id":40,
                                "passing_percentage":33.0,
                                "max_marks":10,
                                "component_type":{
                                    "id":5,
                                    "name":"Internal Assessment"
                                }
                                },
                                {
                                "id":41,
                                "passing_percentage":33.0,
                                "max_marks":15,
                                "component_type":{
                                    "id":1,
                                    "name":"Theory"
                                }
                                }
                            ]
                        }
                    ]
                }
```

* _Submission Api_: Api for submitting and fetching individual and aggregate submissions for particular assessment.
```json
(For Individual Submission):

POST     | {esmwad-url}/api/v5/assessment/submission/student/?assessmentID=<id>
HEADERS  | Authorization: Bearer <Token>
BODY     | 
            {
                "data": [
                    {
                        "id": 34,
                        "assessment": 709,
                        "grade": 7,
                        "isEnabled": true,
                        "className": "7C",
                        "marks_submissions": [
                            {
                                "assessment": 709,
                                "assessment_marks": 13,
                                "component": 36,
                                "is_present": true,
                                "school": 15547,
                                "subject": 66
                            },
                            {
                                "assessment": 709,
                                "assessment_marks": 39,
                                "component": 37,
                                "is_present": true,
                                "school": 15547,
                                "subject": 66
                            }
                        ],
                        "school": 15547,
                        "student": 1036518,
                        "subject": 66
                    }
                ]
            }
RESPONSE |  
            {
                "data": [
                    {
                    "id": 34,
                    "assessment": 709,
                    "className": "7A",
                    "grade": 7,
                    "school": 15547,
                    "stream": null,
                    "student": 1036518,
                    "subject": 66,
                    "marks_submissions": [
                        {
                        "id": 15,
                        "component": 37,
                        "school": 15547,
                        "assessment": 709,
                        "subject": 66,
                        "assessment_percent": null,
                        "assessment_marks": 39.0,
                        "is_present": true
                        },
                        {
                        "id": 14,
                        "component": 36,
                        "school": 15547,
                        "assessment": 709,
                        "subject": 66,
                        "assessment_percent": null,
                        "assessment_marks": 13.0,
                        "is_present": true
                        }
                    ],
                    "grade_submissions": null,
                    "assessment_unit": null,
                    "isEnabled": true
                    }
                ]
            }


GET      | {esmwad-url}/api/v5/assessment/submission/class/?assessmentID=<id>
HEADERS  | Authorization: Bearer <Token>
RESPONSE | 
            {
                "data": [
                    {
                    "id": 20,
                    "assessment": 709,
                    "school": 15547,
                    "submission": {
                        "id": 11,
                        "school": 15547,
                        "assessment": 709,
                        "subject": 45,
                        "students_cleared": 0,
                        "total_students_present": 2
                    },
                    "au_type": "LO",
                    "lo": 431,
                    "unit": null,
                    "question": null,
                    "grade": 7,
                    "subject": 45
                    }
                ]
            }


(For Aggregate Submission) 
POST      | {esmwad-url}/api/v5/assessment/submission/class/?assessmentID=<id>
HEADERS   | Authorization: Bearer <Token>
BODY      | 
            {
                "data": [
                    {
                    "id": 20,
                    "assessment": 709,
                    "school": 15547,
                    "submission": {
                        "id": 9,
                        "school": 15547,
                        "assessment": 709,
                        "subject": 45,
                        "students_cleared": 0,
                        "total_students_present": 2
                    },
                    "assessment_unit_type": "lo",
                    "lo": 431,
                    "unit": null,
                    "question": null,
                    "grade": 7,
                    "subject": 45,
                            "au_type": "lo"
                    }
                ]
            }
RESPONSE |  
            {
                "data": [
                    {
                    "id": 34,
                    "assessment": 709,
                    "className": "7A",
                    "grade": 7,
                    "school": 15547,
                    "stream": null,
                    "student": 1036518,
                    "subject": 66,
                    "marks_submissions": [
                        {
                        "id": 15,
                        "component": 37,
                        "school": 15547,
                        "assessment": 709,
                        "subject": 66,
                        "assessment_percent": null,
                        "assessment_marks": 39.0,
                        "is_present": true
                        },
                        {
                        "id": 14,
                        "component": 36,
                        "school": 15547,
                        "assessment": 709,
                        "subject": 66,
                        "assessment_percent": null,
                        "assessment_marks": 13.0,
                        "is_present": true
                        }
                    ],
                    "grade_submissions": null,
                    "assessment_unit": null,
                    "isEnabled": true
                    }
                ]
            }

GET      | {esmwad-url}/api/v5/assessment/submission/class/?assessmentID=<id>
HEADERS  | Authorization: Bearer <Token>
RESPONSE | 
            {
                "data": [
                    {
                    "id": 20,
                    "assessment": 709,
                    "school": 15547,
                    "submission": {
                        "id": 11,
                        "school": 15547,
                        "assessment": 709,
                        "subject": 45,
                        "students_cleared": 0,
                        "total_students_present": 2
                    },
                    "au_type": "LO",
                    "lo": 431,
                    "unit": null,
                    "question": null,
                    "grade": 7,
                    "subject": 45
                    }
                ]
            }
```

* _Sms Api_: Api to send SMS after assessment submission.
```json
    POST     | {esmwad-url}/api/v4/send/sms
    HEADERS  | Authorization: Bearer <Token>
    BODY     | 
                {
                    "signature":<encoded signature string>,
                    "className":"7C",
                    "assessmentID":665
                }
    RESPONSE |
                "data":{
                    "status":"success"
                }
```

> [_Esamwad Backend Repo_](https://github.com/Samarth-HP/esamwad-backend)

## 8. Bussiness Logics
   
   Coming Soon...


