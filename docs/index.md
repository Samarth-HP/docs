# Samarth - Himachal Pradesh

Samarth - Himachal Pradesh is a program to facilitate education in the state of Himachal Pradesh,
India in a decentralized manner. Decentralization is key to empower teacher and state officials at
various levels i.e, state, district, block and cluster.

More About the program here: https://samarth-hp.github.io/docs/

## Technical Elements

* e-Samwad Android Application
* Shiksha Saathi Android Application
* Admin Management Console
* esamwad Backend

### e-Samwad Android Application

The [e-Samwad Android Application](https://play.google.com/store/apps/details?id=com.himachal.android.eSamwad)
is a teacher facing intervention. Which helps teacher in

* Student Management (Add, Remove, Promote)
* Recurring school activities (Attendance Marking, Mark Collection, Homework Sharing
* Communication with Parents (Meeting Announcements, Results Sharing, Holiday announcements)
* Outcome based learning / Assessment – LO and ORF level data (Nipun lakshya abhyaas)


The application is predominantly written in Java with newer elements in Kotlin. The app extensively
uses a modified version of [ODK](https://getodk.org/) to collect data. The app
uses [Hasura](https://hasura.io/) for easier access and storage of some of our data elements. The
app talks to our backend services for authentication & other management tasks.

Repository: https://github.com/Samarth-HP/eSamwad-app

### Shiksha Saathi Android Application

The [Shiksha Saathi Android Application](https://play.google.com/store/apps/details?id=com.samagra.shikshaSaathi)
is a mentor facing intervention. At its core its a data collection application to facilitate the
state to track school needs and check progress on various state mandates. It allows collection of: 

* School Mentoring Visit Observations
* School Monitoring Visit Observations
* Review Meetings
* School Infrastructure Data

The application is predominantly written in Java with newer elements in Kotlin. The app extensively
uses a modified version of ODK to collect data. The app uses Hasura for easier access and storage of
some of our data elements.

Repository: https://github.com/Samarth-HP/shiksha-saathi-app

### Admin Management console

The Samarth Admin Management console is an administration tool for state education officials at
various levels. The core features are as follows:

* User Management of students, teachers and mentors(create, edit, delete, approve, transfer)
* Entity Management of school and locations( Add, update, delete)
* Work flow management (Configure and Assessments)

The admin management console uses backend services for user management and access control on the
apps.

Repository: https://github.com/Samarth-HP/admin-ts

### esamwad Backend

The backend services for Samarth provide support to the above Android applications and admin
consoles in user management, authentication & access control via SamagraX's
opensource [user-service](https://github.com/Samagra-Development/user-service).

The esamwad-backend system is built using Django. The system uses smaller microservices like:

* CDAC Service: A service to send SMSs (from teachers to parents)
  via [mobile seva](https://mgov.gov.in/SMSGateway)
* ODK - UCI Adapter: A service to trigger a workflow (make an API call, send an SMS, etc..) post an
  ODK form is filled & submitted in the Android App. This service supports sending of SMSes via CDAC Service and [UCI](https://uci.sunbird.org/).
* Doc Generator: A service to create PDFs (school leaving certificates, report cards, etc..)
  using [Doc Generator](https://github.com/Samagra-Development/Doc-Generator).

Repository: https://github.com/Samarth-HP/esamwad-backend
