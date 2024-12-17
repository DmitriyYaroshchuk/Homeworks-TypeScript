import PasswordStrength from "../enums/PasswordStrength";

interface IUser {
    id : number,
    name : string,
    email : string | null,
    changePassword (newPassword : string, strength : PasswordStrength) : void,
    info : string
}
export default IUser;