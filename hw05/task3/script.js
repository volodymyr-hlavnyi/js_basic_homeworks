// function calculateAverageGrade(students) {
//     if (students.length === 0) {
//         return 0; // Return 0 for an empty array
//     }
//
//     const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
//     return totalGrade / students.length;
// }

const calculateAverageGrade = students => students.length === 0 ? 0 : students.reduce((sum, student) => sum + student.grade, 0) / students.length;

const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];


console.log(calculateAverageGrade(students));