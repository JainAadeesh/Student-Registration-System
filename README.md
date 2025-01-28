<!-- # To-Do-List

Project Objective
The main goal of this project is to build a web-based system where users can:

Register student details (name, ID, email, and contact number).
View the registered records in a table.
Edit and delete records dynamically.
Ensure data persistence using local storage, so that data remains available even after the page is refreshed.
Features
User-Friendly Form:

A simple form for entering student details.
Includes input fields for:
Student Name
Student ID
Email ID
Contact Number
Dynamic Table:

Displays all registered students in a clean, organized table format.
Each row includes:
Student details.
Action buttons for Edit and Delete.
Edit Functionality:

Users can click "Edit" to modify existing records.
The form gets pre-filled with the selected student’s data.
Delete Functionality:

Users can remove any student record using the "Delete" button.
This removes the row from the table and also updates local storage.
Data Validation:

Ensures proper data is entered:
Names can only include letters and spaces.
Student IDs must be numeric.
Email IDs must follow a valid email format.
Contact numbers must be exactly 10 digits.
Local Storage Integration:

Student records are saved in the browser's local storage.
Data persists even after the page is refreshed.
Technology Stack
HTML: Used to structure the form, table, and layout of the system.
CSS: Applied for styling, spacing, and improving visual appeal.
JavaScript:
Handles dynamic behavior, such as adding, editing, and deleting records.
Manages local storage operations for data persistence.
How It Works
Add a Student:

Fill in the form with valid details.
Click the "Add" button to insert the record into the table and save it in local storage.
Edit a Student:

Click "Edit" on a specific row to populate the form with that student’s details.
Make changes and submit the form to update the record.
Delete a Student:

Click "Delete" to remove the record from the table and local storage.
Page Refresh:

On page load, all previously saved records are retrieved from local storage and displayed in the table. -->