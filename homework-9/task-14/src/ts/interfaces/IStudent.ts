import IUser from "./IUser";
import ICourse from "./ICourse";

interface IStudent extends IUser {
    courses : readonly ICourse[],
    enroll (course : ICourse) : void | never
}
export default IStudent;