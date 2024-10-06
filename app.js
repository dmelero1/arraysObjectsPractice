// app.js
import StudentCollection from './StudentCollection.js';

// Initialize the collection with some students
const students = [
  { name: "John Doe", age: 18, grades: [88, 92, 76], isEnrolled: true },
  { name: "Jane Smith", age: 20, grades: [95, 85, 90], isEnrolled: true },
  { name: "Sam Green", age: 22, grades: [70, 75, 80], isEnrolled: false },
  { name: "Alice Brown", age: 19, grades: [90, 91, 89], isEnrolled: true },
];

// Create a new StudentCollection object
const studentCollection = new StudentCollection(students);

// Find a student by name and display in the console
const student = studentCollection.getStudentByName("John Doe");
console.log("Student found:", student);

// Add a new student
studentCollection.addStudent("Daniel Melero", 19, [99, 95, 92], false);

// Find the top student based on grades
const topStudent = studentCollection.getTopStudent();
console.log("Top student:", topStudent);

// Find the students higher avg grades that 85
const topStudents = studentCollection.getTopStudents(85);
console.log("Top students higher than 85:", topStudents);

// Update student grades
studentCollection.updateStudentGrades("Sam Green", [72, 76, 80]);
console.log("Updated Sam Green's grades:", studentCollection.getStudentByName("Sam Green"));

// Calculate average grade for a student
const avgGrade = studentCollection.calculateAverageGrade("Daniel Melero");
console.log("Daniel Melero's average grade:", avgGrade);

// Get all enrolled students
const enrolledStudents = studentCollection.getEnrolledStudents();
console.log("Enrolled students:", enrolledStudents);

// Get students above a certain age
const studentsAboveAge = studentCollection.getStudentsAboveAge(20);
console.log("Students above age 20:", studentsAboveAge);

// Get student summaries
const studentSummaries = studentCollection.getStudentSummaries();
console.log("Student summaries:", studentSummaries);

// Get enrolled student names
const enrolledStudentNames = studentCollection.getEnrolledStudentNames();
console.log("Enrolled student names:", enrolledStudentNames);

// Format grades
const formattedGrades = studentCollection.formatGrades();
console.log("Formatted grades:", formattedGrades);

// Get students on the honor roll
const honorRollStudents = studentCollection.getHonorRollStudents();
console.log("Honor Roll students:", honorRollStudents);

// Serialize the students to JSON
const serializedData = studentCollection.serializeStudents();
console.log("Serialized Data:", serializedData);

// Deserialize the JSON back into the collection
studentCollection.deserializeStudents(serializedData);
console.log("Deserialized Data:", studentCollection.students);
