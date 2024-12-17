import User from "./User.js";
import Course from "./Course.js";
class Student extends User {
    static isStudent(obj) {
        return obj instanceof Student;
    }
    _courses = [];
    get courses() {
        return Object.freeze(this._courses);
    }
    enroll(course) {
        if (!Course.isCourse(course)) {
            throw new Error('Argument should be an instance of Course');
        }
        this._courses.push(course);
    }
}
export default Student;
//# sourceMappingURL=Student.js.map