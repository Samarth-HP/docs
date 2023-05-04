---
id: deploysamwad
title: Deploy Your Own Samwad
sidebar_label: Deploy Samwad
sidebar_position: 4
---

## 1. Overview

This doc helps you to setup a Samiksha app on your own.

The Samwad product can be used for sharing the following updates by the State Education Department to the parents of the children enrolled in government schools:

1. Send daily attendance information
2. Send upcoming school holiday start and end date notification
3. Send upcoming parent teacher meeting
4. Send homework completion status about a child
5. Send notification of an upcoming School Management Committee meeting
6. Send assessment information of any summative or formative assessments
7. Send subjectwise and gradewise practice questions daily or weekly to parents
8. Send guidance or alerts during natural disasters (floods, cyclones, medical emergency such as Covid-19)
9. Send school infrastructure upgrade updates
10. Share mid-day meal information

### 1.1 Disclaimer

- _Note that this project in alpha and the APIs can change without notice. Please use it at your discretion. Though we use it in production, but the we are yet to close the API specification_
- _Note that some of the links may become live in the coming days. Please contact us in case of any queries or if you need to set this up up urgently._

## 2. Setting up the backend

Backend setup requires you to setup four servers, the steps for which are as follows.

### 1. Setting up [FusionAuth](https://fusionauth.io/)

1.  Setting up Fusionauth server - Please use the official [guide](https://fusionauth.io/docs/v1/tech/installation-guide/) to install fusionauth servers.
2.  Adding users to the system - Samwad has no user registraction so, depending on the backend/language that you prefer, users can be added in a variety of ways. We recommend using this [API](https://fusionauth.io/docs/v1/tech/apis/users#import-users).

### 2. Setting up [ODK Aggregate](https://docs.getodk.org/aggregate-intro/).

1.  [Installation](https://docs.getodk.org/aggregate-install/)
2.  Add [these](https://drive.google.com/drive/folders/1wgh25L_YyOi5y2vdPGahC9V1wjOLRna0) forms to ODK. Note: You need to upload the `.xml` files and the `.xls` file are for form building only. You will need to add the relevant csv assets to the forms as well.

### 3. Setting up form authorizations

The next step is setting up which forms the users will see when they open the app. Setting the following remote config for the app on Firebase with `all` as the key name will ensure they see these 5 forms.

```json
[
  {
    "FormID": "esamwad_meeting",
    "FormName": "मीटिंग (Meetings)"
  },
  {
    "FormID": "esamwad_holiday",
    "FormName": "छुट्टियां (Holiday)"
  },
  {
    "FormID": "esamwad_homework",
    "FormName": "गृहकार्य  (Homework)"
  },
  {
    "FormID": "esamwad_exam",
    "FormName": "आकलन की घोषणा (Assessment Announcement)"
  },
  {
    "FormID": "esamwad_attendance",
    "FormName": "उपस्थिति (Attendance)"
  }
]
```

### 4. Setting up backend connectors and servers.

All this can be done using the `docker-compose.yml` file which can be found [here](https://github.com/Samagra-Development/Samwad-backend). What it essentially does is installs the following things. _[Note: You are free to change the docker file here to increase the capacity of the servers or choose a different deployment strategy depending on the scale.]_

1.  Setting up production PSQL database
2.  Setting up production Redis cache
3.  Setting up the Memcached server
4.  [Setting up the OTP server](https://github.com/Samagra-Development/MS-OTP)
5.  Setting up the relay server
6.  Setting up the StudentList service
    1. Setting up Google Cloud Storage
    2. Installing the StudentList service
7.  Setting up the ODK ETL Connector
8.  Settting up the SMS Manager

## 3. Setting up the Mobile App

### 1. Adding the form management module and configuring forms

This module will allow us to download and show the forms configured in the Firebase above.

1. [Setting form list button](/docs/Legacy/E-Samwad/FormManagementModule)
2. [Setting up the submission screen](/docs/Legacy/E-Samwad/FormManagementModule)

### 2. Setting up the student list download module

Downloads the list of students for a particular school. Please use th following [doc](https://tech.samagragovernance.in/) to set this up.

### 3. Setting up the cascading dropdown module

This will allow the app to render the cascading dropdown and fill the details automatically to the form.

1. [Adding the gzip file](https://tech.samagragovernance.in/) of locations to raw files directory
2. [Linking](https://tech.samagragovernance.in/) the gzip file to cascading dropdown module

### 4. Setting up autofill

If you have setup the forms correctly, this should happen automatically without any changes.

### 5. Setting up the Track SMS module.

All SMSes that are sent through the backend have one of the following responses

1. Pending
2. Failed to send
3. Failed to deliver to user
4. Still under processing
5. Delivered These responses are then shown in the tracking module to see which parent got the message and if not, which stage it is in. To configure the track SMS module please use this [doc](https://tech.samagragovernance.in/)

### 6. Adding the login screen

1. [Setting up login screen](https://tech.samagragovernance.in/)
2. [Connecting FusionAuth to the server](https://tech.samagragovernance.in/)

### 7. Setting up profile screen

1. [Setting up the backend server](https://tech.samagragovernance.in/)
2. Testing the OTP and reset password.

### 8. Setting up the about us screen

The about us screen is a part of the ancillaryscreens module. Please see this [doc](https://tech.samagragovernance.in/) to get started.

## 4. Need more help??

Some of the packages will be added in the coming weeks. Please contact us if you need urgent support in deploying this.

## 5. FAQs
