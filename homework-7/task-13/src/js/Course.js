import Teacher from "./Teacher.js";
import Student from "./Student.js";

class Course {
    static currentId = 0;
    static isCourse(obj) {
        if (typeof obj !== "object") return false;
        return obj instanceof Course;
    }

    name = '';
    #teacher = null;
    #id = 0;
    #students = [];

    constructor(name, teacher) {
        if (typeof name !== "string" || name.trim() === '') {
            throw new Error('Invalid value name');
        }

        this.name = name;
        this.changeTeacher(teacher);
        this.#id = Course.currentId;
        Course.currentId += 1;
    }

    //___ Заменяет метод listStudents ___//
    get students() {
        return Object.freeze(this.#students);
    }

    get id() {
        return this.#id;
    }

    addStudent(student) {
        this.#validateStudent(student);
        this.#students.push(student);
        return this.#students.length;
    }

    removeStudent(student) {
        this.#validateStudent(student);
        const indexStudent = this.#students.findIndex(({ id }) => id === student.id);
        const [removedStudent] = this.#students.splice(indexStudent, 1);
        return removedStudent;
    }

    changeTeacher(teacher) {
        if (!Teacher.isTeacher(teacher)) {
            throw new Error('Argument should be an instance of Teacher');
        }
        this.#teacher = teacher;
    }

    #validateStudent(student) {
        if (!Student.isStudent(student)) {
            throw new Error('Argument should be an instance of Student');
        }
        return true;
    }
}

export default Course;