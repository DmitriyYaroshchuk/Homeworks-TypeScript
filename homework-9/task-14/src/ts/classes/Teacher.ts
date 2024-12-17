import User from "./User.js";
import ITeacher from "../interfaces/ITeacher";

class Teacher extends User implements ITeacher {
    static isTeacher(obj : object) : obj is Teacher {
        return obj instanceof Teacher;
    }
    private readonly _subjects : string[] = [];

    get subjects() {
        return Object.freeze(this._subjects);
    }
    addSubject(subject : string) : number | never {
        if (subject.trim() === '') {
            throw new Error('Argument must be filled')
        }
        this._subjects.push(subject);
        return this._subjects.length;
    }
}
export default Teacher;