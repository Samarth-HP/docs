---
id: esamwad-app-Assessments
title: Assessments
sidebar_label: Assessments
sidebar_position: 3
---

The assessments module in the e-Samwad application facilitates the submission and management of assessments. It offers a comprehensive process for teachers to evaluate student performance and record assessment results. Here is a detailed description of the flow within the assessments module:

### Assessment List Screen
- Users access the Assessment List screen, which displays a list of available assessments.
- Users can select a specific class and grade to view the assessments associated with it.
### Grade Selection and Subject Selection
- Users choose a particular grade from the available options on the Assessment List screen.
- Upon selecting a grade, the system prompts users to choose the subject for assessment.
### Assessment Evaluation
- Different evaluation flows are available based on the assessment type and requirements:
- Marks Evaluation Only: Users enter marks for each student or mark them as absent.
- Grade Evaluation Only: Users evaluate student performance based on pre-defined grade criteria.
- Marks Evaluation and Class-level Aggregated Learning Objective (LO) Submission: Users evaluate students' performance based on learning objectives and enter marks or absent marks. The system automatically aggregates the results at the class level.
- Marks Evaluation and Class-level Aggregated Question-based Submission: Users evaluate students' performance based on specific questions and enter marks or absent marks. The system aggregates the results at the class level.
- Marks Evaluation and Class-level Aggregated Unit Submission: Users evaluate students' performance based on the assessment unit and enter marks or absent marks. The system aggregates the results at the class level.
- Grades Evaluation and Class-level Aggregated LO Submission: Users evaluate students' performance based on learning objectives and assign grades. The system aggregates the results at the class level.
### Evaluation Process
- Users evaluate student performance by entering marks or absent marks as per the selected flow.
- The app displays a list of students for the selected grade and section, allowing users to evaluate each student individually.
- Once all students have been evaluated, users can preview the entered data to verify its accuracy.
### Offline and Draft Compatibility
- The assessments module supports offline functionality, enabling teachers to work even without an internet connection.
- Users can fill out assessment details offline, and the app stores the data locally using the Realm database.
- The app also supports draft compatibility, allowing users to save incomplete assessments and resume them later.
### Data Sync:
- The app periodically syncs assessment data with the server to ensure updates and maintain data consistency.
- Users can manually trigger a data sync by clicking the sync button on the Assessment List screen.
- Syncing enables teachers to have the most up-to-date assessment information, and it ensures that assessments can be accessed and updated offline.
### Initial Data Fetch:
- When the app is launched for the first time with an internet connection, it fetches the necessary assessment data from the server.
- This initial data fetch populates the app's local cache, enabling seamless offline functionality.



![Assessment Flow](/img/esamwad/assessment_main.png)
[Assessment Flow](https://whimsical.com/assessment-main-TLsQ5b7AygCF4cCXWP6ddT)



![Assessments Combinations](/img/esamwad/assessment_internal.png)
Assessments Combinations


