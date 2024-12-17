import {TypeUser} from "../types/TypeUser";
import ICourse from "./ICourse";

interface ICourseManager {
    users : readonly TypeUser[],
    courses : readonly ICourse[],
    addUser (user : TypeUser) : number | never,
    addCourse (course : ICourse) : number | never,
    assignTeacherToCourse (courseId : number, teacherId : number) : void | never,
    enrollStudentToCourse (courseId : number, studentId : number) : void | never,
    generateReport () : Readonly<{ users : TypeUser[], courses : ICourse[] }>
}
export default ICourseManager;