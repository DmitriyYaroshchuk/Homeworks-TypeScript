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
        const certainUser = this.#users.find((user) => user.id === userId);
        if (!certainUser) {
            throw new Error(`User with ID ${userId} not found.`);
        }
        return certainUser;
    }

    getCourseById(courseId) {
        const certainCourse = this.#courses.find((course) => course.id === courseId);
        if (!certainCourse) {
            throw new Error(`Course with ID ${courseId} not found.`);
        }
        return certainCourse;
    }

    assignTeacherToCourse(courseId, teacherId) {
        if (typeof courseId !== "number" || typeof teacherId !== "number") {
            throw new Error('Invalid arguments: "courseId" and "teacherId" must both be numbers.')
        }

        const selectedTeacher = this.getUserById(teacherId);
        const selectedCourse = this.getCourseById(courseId);
        selectedCourse.changeTeacher(selectedTeacher);
    }

    enrollStudentToCourse(courseId, studentId) {
        if (typeof courseId !== "number" || typeof studentId !== "number") {
            throw new Error('Invalid arguments: "courseId" and "teacherId" must both be numbers.')
        }

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