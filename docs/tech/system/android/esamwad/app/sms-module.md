---
id: esamwad-app-sms-module
title: SMS Module
sidebar_label: SMS Module
sidebar_position: 6
---

The SMS module in the e-Samwad application enables teachers to send different types of broadcasts or SMS to parents. The module provides various categories, and upon selecting a category, teachers can fill out the corresponding form to send the desired messages. Here is a detailed description of the flow within the SMS module:


### Categories and ODK Forms
- Upon accessing the SMS module, teachers are presented with a list of categories, each associated with an ODK form.
- These categories and their respective ODK forms are configurable from the backend.
- The ODK forms are pre-downloaded in the app upon successful login, allowing offline usage.
### Selecting Form
- Teachers can choose a specific category to access the corresponding ODK form.
- When opening the form, certain fields are pre-filled, and teachers fill in the remaining information.
### Submitting the Form
- After filling in the required details, teachers submit the form using ODK.
- The ODK form generates an XML response that contains the form data.
### Processing and Sending SMS
- The XML response from the ODK form is submitted to a Hasura server.
- The Hasura server, with an enabled hook, processes the XML data and extracts the information required for sending SMS to parents.
- The server then sends the SMS to parents based on the extracted data.
### Success Dialog
- Upon successful submission, a success dialog appears, indicating that the SMS has been sent.
### Viewing History
- Teachers can access a history of the forms filled for sending SMS to parents.
- This history provides an overview of past SMS sent through the module.
### Student List for Homework SMS
- In one of the forms, the complete student list of the school is sent to the ODK form.
- Additionally, for sending homework, teachers select students from the local Realm table in the app.
- The student list is included in a CSV file that opens along with the ODK form instance.
- ODK uses this CSV to render the student list in the form.

**The SMS module offers offline capability, as the ODK forms are downloaded and stored locally. Teachers can use the module without an internet connection, and data is synchronized when connectivity is available.**





![SMS Module](/static/img/esamwad/sms_module.png)
[SMS Module](https://whimsical.com/sms-module-MGv9sGKMktr7BPhhAyMtz5)



