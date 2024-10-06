export default class StudentCollection {
    constructor(students = []) {
      this.students = students;
    }
  //  { name: "John Doe", age: 18, grades: [88, 92, 76], isEnrolled: true },
    addStudent(name, age, grades, isEnrolled) {
      this.students.push({ name, age, grades, isEnrolled });
    }
  //If name === student.name they will give us student information
    getStudentByName(name) {
      return this.students.find(student => student.name === name);
    }
  //We delete the student that name matches with student.name
    removeStudentByName(name) {
      this.students = this.students.filter(student => student.name !== name);
    }
  //We must say the name we want to modify her grades and we say her new grades
    updateStudentGrades(name, newGrades) {
      const student = this.getStudentByName(name);
      if (student) {
        student.grades = newGrades;
      }
    }
  //We calculate the average age of the student name we insert
    calculateAverageGrade(name) {
      const student = this.getStudentByName(name);
      if (student) {
        const total = student.grades.reduce((sum, grade) => sum + grade, 0);
        return total / student.grades.length;
      }
      return null;
    }
  //That must return the students that isEnrolled = true using filter(), isEnrolled=false cant be show
    getEnrolledStudents() {
      const enrolledStudents = this.students.filter(student => student.isEnrolled);
      return enrolledStudents;
    }
  //Must return the students that are older than the age we introduced using filter()
    getStudentsAboveAge(age) {
      return this.students.filter(student => student.age > age);
    }
  //We use reduce() to loop through the array we calculate the avgGrade and we take the highest avg
    getTopStudent() {
      return this.students.reduce((topStudent, student) => {
        const avgGrade = this.calculateAverageGrade(student.name);
        if (!topStudent || avgGrade > this.calculateAverageGrade(topStudent.name)) {
          return student;
        }
        return topStudent;
      }, null);
    }
  //We use map() to create a new array with the name and the avggrades
    getStudentSummaries() {
      return this.students.map(student => ({
        name: student.name,
        averageGrade: this.calculateAverageGrade(student.name),
      }));
    }
  //Must resturn the list of students avggrades > gradethreshold
    getTopStudents(gradeThreshold) {
      return this.students.filter(
        student => this.calculateAverageGrade(student.name) >= gradeThreshold
      );
    }
  //Return just the name that isEnrolled=true
    getEnrolledStudentNames() {
      return this.getEnrolledStudents().map(student => student.name);
    }
  //We format the output using Template Literals form
    formatGrades() {
      return this.students.map(
        student => `${student.name}'s grades: ${student.grades.join(', ')}`
      );
    }
  //Return the students avggrade >=90
    getHonorRollStudents() {
      return this.students.filter(
        student => this.calculateAverageGrade(student.name) >= 90
      );
    }
  //This method turn this file into a JSON file
    serializeStudents() {
      return JSON.stringify(this.students);
    }
  //This method pass a JSON file to the collection
    deserializeStudents(jsonData) {
      this.students = JSON.parse(jsonData);
    }
  }
  