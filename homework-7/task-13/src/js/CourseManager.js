import Teacher from "./Teacher.js";
import Course from "./Course.js";
import Student from "./Student.js";

class CourseManager {
    #users = [];
    #courses = [];

    addUser(user) {
        if (!Teacher.isTeacher(user) && !Student.isStudent(user)) {
            return false;
        }
        this.#users.push(user);
    }

    addCourse(newCourse) {
        if (!Course.isCourse(newCourse)) {
            return false;
        }
        this.#courses.push(newCourse);
    }

    getUserById(userId) {
        return this.#users.find((user) => user.id === userId);
    }

    getCourseById(courseId) {
        return this.#courses.find((course) => course.id === courseId);
    }

    assignTeacherToCourse(courseId, teacherId) {
        const selectedTeacher = this.getUserById(teacherId);
        const selectedCourse = this.getCourseById(courseId);
        selectedCourse.changeTeacher(selectedTeacher);
    }

    enrollStudentToCourse(courseId, studentId) {
        const selectedCourse = this.getCourseById(courseId);
        const selectedStudent = this.getUserById(studentId);
        selectedCourse.addStudent(selectedStudent);
    }

    generateReport() {
        return Object.freeze({
            users: this.#users,
            courses: this.#courses
        });
    }
}
export default CourseManager;