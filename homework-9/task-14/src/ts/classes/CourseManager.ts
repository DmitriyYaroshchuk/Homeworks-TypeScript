import ICourseManager from "../interfaces/ICourseManager";
import {TypeUser} from "../types/TypeUser";
import ICourse from "../interfaces/ICourse";
import Teacher from "./Teacher.js";
import Student from "./Student.js";

class CourseManager implements ICourseManager {
    private readonly _users : TypeUser[] = [];
    private readonly _courses : ICourse[] = [];

    get users() {
        return Object.freeze(this._users);
    }
    get courses() {
        return Object.freeze(this._courses);
    }

    addUser(user : TypeUser) : number | never {
        if (this._users.includes(user)) {
            throw new Error(`User with ${user.id} has already been added`);
        }
        this._users.push(user);
        return this._users.length;
    }
    addCourse(course : ICourse) : number | never {
        if (this._courses.includes(course)) {
            throw new Error(`Course with ${course.id} has already been added`);
        }
        this._courses.push(course);
        return this._courses.length;
    }

    private getUserById(userId : number) : TypeUser | undefined {
        return this._users.find((user) => user.id === userId);
    }

    private getCourseById(courseId : number) : ICourse | undefined {
        return this._courses.find((course) => course.id === courseId);
    }

    assignTeacherToCourse(courseId : number, teacherId : number) : void | never {
        const certainUser : TypeUser | undefined = this.getUserById(teacherId);
        const certainCourse : ICourse | undefined = this.getCourseById(courseId);
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

    enrollStudentToCourse(courseId : number, studentId : number) : void | never {
        const certainUser : TypeUser | undefined = this.getUserById(studentId);
        const certainCourse : ICourse | undefined = this.getCourseById(courseId);
        if (!certainUser) {
            throw new Error(`Student with ID ${studentId} not found.`);
        }
        if (!certainCourse) {
            throw new Error(`Course with ID ${courseId} not found.`);
        }
        if(!Student.isStudent(certainUser)) {
            throw new Error(`User with ID ${studentId} is not a student.`);
        }
        certainCourse.addStudent(certainUser);
    }

    generateReport() : Readonly<{ users : TypeUser[], courses : ICourse[] }> {
        return Object.freeze({
            users : this._users,
            courses : this._courses
        });
    }
}
export default CourseManager;