import User from "./User.js";

class Teacher extends User {
    static isTeacher(obj) {
        if (typeof obj !== "object") return false;
        return obj instanceof Teacher;
    }

    #subjects = [];

    get subjects() {
        return Object.freeze(this.#subjects);
    }

    addSubject(subject) {
        if (typeof subject !== "string" || subject.trim() === '') {
            throw new Error('Subject is not valid');
        }
        this.#subjects.push(subject);
    }
}
export default Teacher;