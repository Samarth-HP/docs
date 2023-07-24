---
id: esamwad-app-student-attendance
title: Student Attendance
sidebar_label: Student Attendance
sidebar_position: 4
---

The student attendance module in the e-Samwad application allows teachers to manage student attendance records. It provides features to mark attendance for the current day, view past attendance history, and edit today's attendance if needed. Here is a detailed description of the flow within the student attendance module:

### Attendance History

- Users can select a specific date to view the attendance history for the selected grade and section.
- The app displays past attendance records, indicating whether students were present or absent on those dates.

### Marking Attendance

- Users access the student attendance screen, where they see a list of students associated with the selected grade and section.
- Teachers can select multiple students at once and mark their attendance by checking or unchecking the boxes.
- Unchecked students will be marked as absent, while checked students will be marked as present.
- After marking the attendance, the user submits the attendance data.

### Attendance Confirmation

- Upon submission, the user is redirected back to the attendance history screen.
- The attendance record for the current date is updated to reflect the changes made.

### Editing Attendance

- Teachers can edit today's attendance if needed.
- By selecting the edit attendance option, the user is taken to the student list screen with pre-filled present and absent statuses.
- Teachers can modify the attendance status for each student and submit the updated attendance.

### Offline Functionality

- The student attendance module is designed to work offline, allowing teachers to mark attendance even without an internet connection.
- Offline attendance data is stored locally using the Realm database, ensuring data integrity and availability.

### Online Data Submission

- When an internet connection is available, the app synchronizes the offline attendance data with the server.
- It uses GraphQL APIs to submit the attendance data directly to Hasura for online data storage and retrieval.




![Student Attendance](/static/img/esamwad/student_attendance.png)
[Student Attendance](https://whimsical.com/student-attendance-CmBWFnT97GdJfRPCj9iJwR)



