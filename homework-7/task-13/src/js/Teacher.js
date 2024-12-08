import User from "./User.js";

class Teacher extends User {
    static isTeacher(obj) {
        return obj instanceof Teacher;
    }

    #subjects = [];

    get subjects() {
        return [...this.#subjects];
    }

    addSubject(subject) {
        if (typeof subject !== "string" || subject.trim() === '') {
            throw new Error('Subject is not valid');
        }
        this.#subjects.push(subject);
    }
}
export default Teacher;