import IUser from "./IUser";

interface ITeacher extends IUser {
    subjects : readonly string[],
    addSubject (subject : string) : number | never
}
export default ITeacher;