
// Select form and table body
const form = document.getElementById('infoForm');
const tableBody = document.querySelector('table tbody');

// Load data from local storage on page load
window.onload = () => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    storedStudents.forEach(addStudentToTable);
};

// Form submission event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value.trim();
    const studentId = document.getElementById('id').value.trim();
    const emailId = document.getElementById('class').value.trim();
    const contactNo = document.getElementById('rollno').value.trim();

    // Validate inputs
    if (!name.match(/^[A-Za-z\s]+$/)) {
        alert('Name must only contain letters and spaces.');
        return;
    }
    if (!studentId.match(/^\d+$/)) {
        alert('Student ID must only contain numbers.');
        return;
    }
    if (!emailId.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        alert('Enter a valid email address.');
        return;
    }
    if (!contactNo.match(/^\d{10}$/)) {
        alert('Contact No. must be exactly 10 digits.');
        return;
    }

    // Create student object
    const student = { name, studentId, emailId, contactNo };

    // Add student to table and save to local storage
    addStudentToTable(student);
    saveStudentToStorage(student);

    // Reset form fields
    form.reset();
});

// Function to add a student record to the table
function addStudentToTable(student) {
    const row = document.createElement('tr');

    // Populate row with data and action buttons
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.studentId}</td>
        <td>${student.emailId}</td>
        <td>${student.contactNo}</td>
        <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    // Append row to table
    tableBody.appendChild(row);

    // Add event listeners for Edit and Delete buttons
    const editBtn = row.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => editStudent(row, student));

    const deleteBtn = row.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteStudent(row, student.studentId));
}

// Function to save a student to local storage
function saveStudentToStorage(student) {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    storedStudents.push(student);
    localStorage.setItem('students', JSON.stringify(storedStudents));
}

// Function to edit a student record
function editStudent(row, student) {
    // Pre-fill the form with the student's data
    document.getElementById('name').value = student.name;
    document.getElementById('id').value = student.studentId;
    document.getElementById('class').value = student.emailId;
    document.getElementById('rollno').value = student.contactNo;

    // Remove the row and update local storage
    row.remove();
    removeStudentFromStorage(student.studentId);
}

// Function to delete a student record
function deleteStudent(row, studentId) {
    // Remove the row and update local storage
    row.remove();
    removeStudentFromStorage(studentId);
}

// Function to remove a student from local storage
function removeStudentFromStorage(studentId) {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    const updatedStudents = storedStudents.filter(student => student.studentId !== studentId);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
}

