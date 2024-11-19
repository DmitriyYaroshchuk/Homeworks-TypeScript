const students = {
    students: {
        '34': {
            id: '34',
            name: 'Dmitriy',
            age: 23
        },
        '25': {
            id: '25',
            name: 'Andrew',
            age: 23,
        },
        '56': {
            id: '56',
            name: 'Dasha',
            age: 19
        },
        '79': {
            id: '79',
            name: 'Sofia',
            age: 20
        }
    },
    grades: {
        '34': {
            Math: 56,
            Science: 79,
            Literature: 98,
            History: 88
        },
        '25': {
            Math: 77,
            Science: 67,
            Literature: 88,
            History: 93
        },
        '56': {
            Math: 84,
            Science: 76,
            Literature: 65,
            History: 96
        },
        '79': {
            Math: 89,
            Science: 90,
            Literature: 98,
            History: 99
        }
    }
};
const getStudentGrades = (universityRecord, studentId) => {
    const studentGrades = universityRecord?.grades[studentId];
    return studentGrades ? studentGrades : null;
};
const result_1 = getStudentGrades(students, '56');
console.log(result_1);
const getAverageGrade = (universityRecord, subject) => {
    let amountOfStudents = 0;
    let grades = 0;
    const studentGrades = universityRecord?.grades;
    if (studentGrades) {
        for (let key in studentGrades) {
            const gradeFromSubject = studentGrades[key]?.[subject];
            const regExp = /^(\d|[1-9]\d|100)$/;
            if (gradeFromSubject && regExp.test(String(gradeFromSubject))) {
                amountOfStudents++;
                grades += gradeFromSubject;
            }
        }
    }
    return grades / amountOfStudents;
};
const averageGradeMath = getAverageGrade(students, 'Math');
console.log(averageGradeMath);
export {};
//# sourceMappingURL=script.js.map