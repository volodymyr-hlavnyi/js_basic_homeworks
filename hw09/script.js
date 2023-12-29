function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.study = [];
}

Student.prototype.addGrade = function (course, grade) {
    const study = this.getStudy(course);
    if (study) {
        if (study.grades.length < study.course.maxLectures) {
            study.grades.push(grade);
        } else {
            console.log("Max number of grades reached for this course.");
        }
    } else {
        console.log("Student is not enrolled in this course.");
    }
};

Student.prototype.addAttendance = function (course, attended) {
    const study = this.getStudy(course);
    if (study) {
        if (study.attendance.length < study.course.maxLectures) {
            study.attendance.push(attended);
        } else {
            console.log("Max number of classes attended reached for this course.");
        }
    } else {
        console.log("Student is not enrolled in this course.");
    }
};

Student.prototype.getAverageGrade = function () {
    const totalGrades = this.study.reduce((sum, study) => {
        const validGrades = study.grades.filter(grade => grade !== null);
        return sum + validGrades.reduce((acc, grade) => acc + grade, 0);
    }, 0);

    const totalValidGrades = this.study.reduce((total, study) => {
        const validGrades = study.grades.filter(grade => grade !== null);
        return total + validGrades.length;
    }, 0);

    return totalValidGrades === 0 ? 0 : totalGrades / totalValidGrades;
};

Student.prototype.getAverageAttendance = function () {
    const totalAttendance = this.study.reduce((sum, study) => {
        const validAttendance = study.attendance.filter(attended => attended !== null);
        return sum + validAttendance.reduce((acc, attended) => acc + attended, 0);
    }, 0);

    const totalValidAttendance = this.study.reduce((total, study) => {
        const validAttendance = study.attendance.filter(attended => attended !== null);
        return total + validAttendance.length;
    }, 0);

    return totalValidAttendance === 0 ? 0 : totalAttendance / totalValidAttendance;
};

Student.prototype.getLecturesAttended = function () {
    return this.study.reduce((total, study) => {
        const validAttendance = study.attendance.filter(attended => attended !== null);
        return total + validAttendance.length;
    }, 0);
};

Student.prototype.changeCourse = function (oldCourse, newCourse) {
    const oldStudy = this.getStudy(oldCourse);
    if (oldStudy) {
        this.removeCourse(oldCourse);
        this.addCourse(newCourse);
    } else {
        console.log("Student is not enrolled in the old course.");
    }
};

Student.prototype.getStudentInfo = function () {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        birthYear: this.birthYear,
        study: this.study
    };
};

Student.prototype.addCourse = function (course) {
    this.study.push({
        course: course,
        grades: Array(),
        attendance: Array()
    });
};

Student.prototype.removeCourse = function (course) {
    const index = this.study.findIndex(study => study.course === course);
    if (index !== -1) {
        this.study.splice(index, 1);
    } else {
        console.log("Student is not enrolled in this course.");
    }
};

Student.prototype.getStudy = function (course) {
    return this.study.find(study => study.course === course);
};



function Group() {
    this.students = [];
}

Group.prototype.addStudent = function (student) {
    this.students.push(student);
};

Group.prototype.removeStudent = function (student) {
    const studentIndex = this.students.indexOf(student);
    if (studentIndex !== -1) {
        this.students.splice(studentIndex, 1);
    } else {
        console.log("Student not found in the group.");
    }
};

Group.prototype.getAverageGrade = function () {
    const totalGrades = this.students.reduce((sum, student) => {
        const validGrades = student.study.flatMap(study => study.grades).filter(grade => grade !== null);
        return sum + validGrades.reduce((acc, grade) => acc + grade, 0);
    }, 0);

    const totalValidGrades = this.students.reduce((total, student) => {
        const validGrades = student.study.flatMap(study => study.grades).filter(grade => grade !== null);
        return total + validGrades.length;
    }, 0);

    return totalValidGrades === 0 ? 0 : totalGrades / totalValidGrades;
};

Group.prototype.getAverageAttendance = function () {
    const totalAttendance = this.students.reduce((sum, student) => {
        const validAttendance = student.study.flatMap(study => study.attendance).filter(attended => attended !== null);
        return sum + validAttendance.reduce((acc, attended) => acc + (attended ? 1 : 0), 0);
    }, 0);

    const totalPossibleAttendance = this.students.reduce((total, student) => {
        const maxLectures = student.study.reduce((max, study) => Math.max(max, study.course.maxLectures), 0);
        return total + maxLectures;
    }, 0);

    return totalPossibleAttendance === 0 ? 0 : (totalAttendance / totalPossibleAttendance) * 100;
};


Group.prototype.getStudentRating = function () {
    return this.students
        .map(student => {
            const averageGrade = student.getAverageGrade();
            const averageAttendance = student.getAverageAttendance();
            return { student, averageGrade, averageAttendance };
        })
        .sort((a, b) => b.averageGrade - a.averageGrade);
};

// Example usage:
const course1 = { maxLectures: 14 };
const course2 = { maxLectures: 6 };

const student1 = new Student("John", "Doe", 1995);
const student2 = new Student("Jane", "Doe", 1998);

student1.addCourse(course1);
student1.addCourse(course2);

student2.addCourse(course1);

student1.addGrade(course1, 90);
student1.addGrade(course1, 95);
student1.addGrade(course1, 91);
student1.addAttendance(course1, true);
student1.addAttendance(course1, true);
student1.addAttendance(course1, false);
student1.addAttendance(course1, true);

student1.addGrade(course2, 75);
student1.addGrade(course2, 70);
student1.addGrade(course2, 77);
student1.addGrade(course2, 79);
student1.addAttendance(course2, true);
student1.addAttendance(course2, true);
student1.addAttendance(course2, true);
student1.addAttendance(course2, true);
student1.addAttendance(course2, true);

student2.addGrade(course1, 50);
student2.addGrade(course1, 60);
student2.addGrade(course1, 65);
student2.addGrade(course1, 54);
student2.addGrade(course1, 89);
student2.addAttendance(course1, false);
student2.addAttendance(course1, true);
student2.addAttendance(course1, false);
student2.addAttendance(course1, false);
student2.addAttendance(course1, true);

console.log('student1');
console.log(student1.getStudentInfo());
console.log('student2');
console.log(student2.getStudentInfo());

const group = new Group();
group.addStudent(student1);
group.addStudent(student2);

console.log('group');
console.log(group);

console.log("group (AverageGrade) - " + group.getAverageGrade());
console.log("group (AverageAttendance) - " + group.getAverageAttendance());
console.log("student1 count attend - " + student1.getLecturesAttended());
console.log("student2 count attend - " + student2.getLecturesAttended());
console.log("student1 avg attend - " + student1.getAverageAttendance());
console.log("student2 avg attend - " + student2.getAverageAttendance());
console.log("student1 avg grade - " + student1.getAverageGrade());
console.log("student2 avg grade - " + student2.getAverageGrade());

// Remove a course from a student
// student1.removeCourse(course2);

// Remove a student from the group
// group.removeStudent(student1);

console.log(student1.getStudentInfo());
console.log(student2.getStudentInfo());

//student2.changeCourse(course1, course2);

console.log(student1.getStudentInfo());
console.log(student2.getStudentInfo());

const studentRatings = group.getStudentRating();
console.log(studentRatings);