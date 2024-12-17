import Student from "./Student.js";
import Teacher from "./Teacher.js";
class Course {
    static currentId = 0;
    static isCourse(obj) {
        return obj instanceof Course;
    }
    name = '';
    _teacher = null;
    _students = [];
    _id = 0;
    constructor(name, teacher) {
        if (name.trim() === '') {
            throw new Error('Value name is not valid');
        }
        this.name = name;
        this.changeTeacher(teacher);
        this._id = Course.currentId;
        Course.currentId += 1;
    }
    get id() {
        return this._id;
    }
    get teacher() {
        return this._teacher;
    }
    get students() {
        return Object.freeze(this._students);
    }
    addStudent(student) {
        if (!Student.isStudent(student)) {
            throw new Error('Argument should be an instance of Student');
        }
        if (this._students.includes(student)) {
            throw new Error(`Student with ${student.id} has already been added`);
        }
        this._students.push(student);
        return this._students.length;
    }
    removeStudent(studentId) {
        const studentIndex = this._students.findIndex((student) => student.id === studentId);
        if (studentIndex !== -1) {
            const [removedStudent] = this._students.splice(studentIndex, 1);
            return removedStudent;
        }
        else {
            throw new Error(`Student with ${studentId} is not founded`);
        }
    }
    changeTeacher(teacher) {
        if (!Teacher.isTeacher(teacher)) {
            throw new Error('Argument should be an instance of Teacher');
        }
        this._teacher = teacher;
    }
}
export default Course;
//# sourceMappingURL=Course.js.map