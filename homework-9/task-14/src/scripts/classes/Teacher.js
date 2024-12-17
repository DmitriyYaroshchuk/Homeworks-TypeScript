import User from "./User.js";
class Teacher extends User {
    static isTeacher(obj) {
        return obj instanceof Teacher;
    }
    _subjects = [];
    get subjects() {
        return Object.freeze(this._subjects);
    }
    addSubject(subject) {
        if (subject.trim() === '') {
            throw new Error('Argument must be filled');
        }
        this._subjects.push(subject);
        return this._subjects.length;
    }
}
export default Teacher;
//# sourceMappingURL=Teacher.js.map