import User from "./User.js";
import Course from "./Course.js";

class Student extends User {
    static isStudent(obj) {
        if (typeof obj !== "object") return false;
        return obj instanceof Student;
    }
    #courses = [];

    constructor({ name, email }) {
        super({ name, email });
    }

    get courses() {
        return Object.freeze(this.#courses);
    }

    enroll(course) {
        if (!Course.isCourse(course)) {
            throw new Error('Argument should be an instance of class Course');
        }
        this.#courses.push(course);
    }
}
export default Student;