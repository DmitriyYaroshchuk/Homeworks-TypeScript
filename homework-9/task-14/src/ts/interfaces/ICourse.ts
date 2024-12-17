import ITeacher from "./ITeacher";
import IStudent from "./IStudent";

interface ICourse {
    id : number,
    name : string,
    teacher : ITeacher | null,
    students : readonly IStudent[],
    addStudent (student : IStudent) : number | never,
    removeStudent (studentId : number) : IStudent | never,
    changeTeacher (teacher : ITeacher) : void | never,
}
export default ICourse;