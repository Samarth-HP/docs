---
id: esamwad-app-homework-module
title: Homework Module
sidebar_label: Homework Module
sidebar_position: 7
---

The homework module in the application empowers teachers to send homework to parents via WhatsApp. The flow involves selecting specific details and topics, which then interact with the Diksha server to retrieve relevant worksheets and videos. Here is a detailed description of the flow within the homework module:



### Homework Details Form
- Upon accessing the homework module, teachers are presented with a form page where they provide details such as grade, section, subject, and an option to receive results as worksheets or videos.
- Based on the selections made on this screen, relevant information is sent to the Diksha server.
### Interaction with Diksha Server
- The app communicates with the Diksha server, a platform developed by the Government of India to provide digital learning resources to students and teachers.
- The app fetches responses from the Diksha server, which contains information on topics related to the selections made in the previous screen.
- Teachers can then select multiple topics from the fetched responses.
### Fetching Worksheets and Videos
- Upon proceeding to the next screen, the selected topics are sent to the Diksha APIs to retrieve corresponding worksheets and videos based on the teacher's choices.
- A list of relevant links, including PDF links for worksheets, is rendered on the screen.
### Viewing PDF Content
- The list of relevant links allows teachers to click on PDF links and view the content of the worksheets.
- Teachers can review the materials and select multiple items to proceed.
### Sharing Homework with Parents
- On the final screen, a share button is available.
- Clicking on the share button forwards all the selected details and materials from the previous screens to parents using WhatsApp.
- This sharing process uses Diksha-provided APIs to facilitate smooth communication.

**Diksha is a national digital platform developed by the Government of India's Ministry of Education. It offers a variety of digital learning resources, including worksheets, e-books, videos, quizzes, and interactive learning modules, designed for students and teachers across different educational levels. Diksha aims to provide easy access to quality learning materials, enhance teaching practices, and promote self-learning among students.**

**The homework module leverages Diksha's resources and APIs to enrich the learning experience and enable the seamless sharing of educational materials between teachers and parents through WhatsApp.**



<!-- To be added -->
<!-- ![Homework Module](/img/esamwad/sms_module.png) -->
<!-- [Homework Module](https://whimsical.com/sms-module-MGv9sGKMktr7BPhhAyMtz5) -->



