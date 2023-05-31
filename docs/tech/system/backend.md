---
title: Samarth - Backend
sidebar_position: 3
sidebar_label: Backend
---

{
Go into details of each service
Create diagram of their interaction
Database structure
}


## Introduction
The backend system consists of mainly the REST APIs written in Python Django framework to power 
Esamwad, Shiksha Saathi & NLA for Parents Application. It internally uses User Service, Yaus, 
Doc Generator, Templator, ODK Aggregate, etc. as the core building blocks (open source & built 
by Samagra). It also uses various open source 3rd party tools like Hasura, Posthog, Sentry, Fusion 
Auth, Grafana, Vault, Airflow etc.

A brief overview of all the services is shown below:

![System Overview](../../../static/img/samarth-hp-backend-Services.jpg)

## Repos
- Esamwad Backend: https://github.com/Samarth-HP/esamwad-backend
- User Service: https://github.com/Samagra-Development/user-service
- Yaus: https://github.com/Samagra-Development/yaus
- Doc Generator: https://github.com/Samagra-Development/Doc-Generator
- Templater: https://github.com/Samagra-Development/templater
- ODK: https://github.com/samagra-comms/odk
- ODK UCI Adapter: https://github.com/Samarth-HP/odk-uci-adapter
- Posthog: https://github.com/Samagra-Development/posthog-deploy
- Airflow: https://github.com/Samagra-Development/airflow

## Important modules
- Assessment Module
- Student Enrollment Module
- SLC Module
- SMS Module

## Implementation
### Assessment Module

### Student Enrollment Module
This module has 2 parts:
1. New Student Registration: when a student enrolled as entirely new student. 
2. School Transfer (within State): when a student is transferred from another school within the state.
3. School Transfer (Other States): when a student is transferred from a school from other state.

![Student Enrollment Module](../../../static/img/samarth-hp-backend-Student-Enrollment.png)

### SLC Module

### SMS Module
SMS Module is responsible for sending SMS to parents for various events e.g.
- School Holidays
- Parents Meeting
- Exam Announcement
- Result Announcement
- Homework

Form templates are stored on ODK server. Application fetches forms from ODK
and teachers can choose to send SMS from the list of templates.
When the form is submitted, an insertion is made into Hasura table, which then
triggers a webhook to **SMS Adapter Nest Application**.
The **Nest Application** is responsible for:
1. Receiving Requests & queue them.
2. Workers then picks the jobs in a sequential manner.
3. Based on template & business logic, receiver's information is grabbed from
Esamwad Database.
4. Finally, SMS are sent to CDAC Service provider, which then actually delivers the SMSes.

Nest Application also keeps a track on the progress of the queued jobs & SMS sending failures.

A high level diagram of the flow is shown below:
![SMS Module](../../../static/img/samarth-hp-backend-SMS-Adapter.png)