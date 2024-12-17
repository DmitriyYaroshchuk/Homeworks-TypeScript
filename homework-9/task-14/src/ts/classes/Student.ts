import User from "./User.js";
import IStudent from "../interfaces/IStudent";
import ICourse from "../interfaces/ICourse";
import Course from "./Course.js";

class Student extends User implements IStudent {
    static isStudent(obj : object) : obj is Student {
        return obj instanceof Student;
    }

    private readonly _courses : ICourse[] = [];

    get courses() {
        return Object.freeze(this._courses);
    }
    enroll(course : ICourse) : void | never {
        if (!Course.isCourse(course)) {
            throw new Error('Argument should be an instance of Course');
        }
        this._courses.push(course);
    }
}
export default Student;