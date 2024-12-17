import Teacher from "./Teacher.js";
import Student from "./Student.js";
class CourseManager {
    _users = [];
    _courses = [];
    get users() {
        return Object.freeze(this._users);
    }
    get courses() {
        return Object.freeze(this._courses);
    }
    addUser(user) {
        if (this._users.includes(user)) {
            throw new Error(`User with ${user.id} has already been added`);
        }
        this._users.push(user);
        return this._users.length;
    }
    addCourse(course) {
        if (this._courses.includes(course)) {
            throw new Error(`Course with ${course.id} has already been added`);
        }
        this._courses.push(course);
        return this._courses.length;
    }
    getUserById(userId) {
        return this._users.find((user) => user.id === userId);
    }
    getCourseById(courseId) {
        return this._courses.find((course) => course.id === courseId);
    }
    assignTeacherToCourse(courseId, teacherId) {
        const certainUser = this.getUserById(teacherId);
        const certainCourse = this.getCourseById(courseId);
        if (!certainUser) {
            throw new Error(`Teacher with ID ${teacherId} not found.`);
        }
        if (!certainCourse) {
            throw new Error(`Course with ID ${courseId} not found.`);
        }
        if (!Teacher.isTeacher(certainUser)) {
            throw new Error(`User with ID ${teacherId} is not a teacher.`);
        }
        certainCourse.changeTeacher(certainUser);
    }
    enrollStudentToCourse(courseId, studentId) {
        const certainUser = this.getUserById(studentId);
        const certainCourse = this.getCourseById(courseId);
        if (!certainUser) {
            throw new Error(`Student with ID ${studentId} not found.`);
        }
        if (!certainCourse) {
            throw new Error(`Course with ID ${courseId} not found.`);
        }
        if (!Student.isStudent(certainUser)) {
            throw new Error(`User with ID ${studentId} is not a student.`);
        }
        certainCourse.addStudent(certainUser);
    }
    generateReport() {
        return Object.freeze({
            users: this._users,
            courses: this._courses
        });
    }
}
export default CourseManager;
//# sourceMappingURL=CourseManager.js.map