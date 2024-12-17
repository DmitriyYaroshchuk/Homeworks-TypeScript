import ICourse from "../interfaces/ICourse";
import ITeacher from "../interfaces/ITeacher";
import Student from "./Student.js";
import IStudent from "../interfaces/IStudent";
import Teacher from "./Teacher.js";

class Course implements ICourse {
    static currentId: number = 0;
    static isCourse(obj : object) : obj is Course {
        return obj instanceof Course;
    }

    name: string = '';
    private _teacher: ITeacher | null = null;
    private readonly _students: IStudent[] = [];
    private readonly _id: number = 0;

    constructor(name: string, teacher: ITeacher) {
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

    addStudent(student: IStudent): number | never {
        if (!Student.isStudent(student)) {
            throw new Error('Argument should be an instance of Student')
        }
        if (this._students.includes(student)) {
            throw new Error(`Student with ${student.id} has already been added`)
        }
        this._students.push(student);
        return this._students.length;
    }

    removeStudent(studentId : number) : IStudent | never {
        const studentIndex : number = this._students.findIndex((student) => student.id === studentId);
        if (studentIndex !== -1) {
            const [removedStudent] = this._students.splice(studentIndex, 1);
            return removedStudent;
        } else {
            throw new Error(`Student with ${studentId} is not founded`)
        }
    }

    changeTeacher(teacher : ITeacher) : void | never {
        if (!Teacher.isTeacher(teacher)) {
            throw new Error('Argument should be an instance of Teacher')
        }
        this._teacher = teacher;
    }
}
export default Course;