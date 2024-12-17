import IUser from "../interfaces/IUser";
import PasswordStrength from "../enums/PasswordStrength";
import BaseModal from "./BaseModal.js";

class User extends BaseModal implements IUser {
    static currentId : number = 0;
    static readonly PasswordRegExp : Record<PasswordStrength, RegExp> = {
        [PasswordStrength.WEAK] : /^.{6,}$/,
        [PasswordStrength.MEDIUM] : /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
        [PasswordStrength.STRONG] : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    }
    static readonly PasswordValidation  = {
        [PasswordStrength.WEAK] : (value : string) : boolean => {
            return User.PasswordRegExp[PasswordStrength.WEAK].test(value);
        },
        [PasswordStrength.MEDIUM] : (value : string) : boolean => {
            return User.PasswordRegExp[PasswordStrength.MEDIUM].test(value);
        },
        [PasswordStrength.STRONG] : (value : string) : boolean => {
            return User.PasswordRegExp[PasswordStrength.STRONG].test(value);
        }
    }

    name : string = '';
    email : string | null = null;
    private pass : string | null = null;
    private readonly _id : number = 0;
    readonly createdAt : Date = new Date(Date.now());

    constructor({ name, email} : { name : string, email : string }) {
        super();
        if (name.trim() === '') {
            throw new Error('Value name is not valid');
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            throw new Error('Invalid value email');
        }
        this.name = name;
        this.email = email;
        this._id = User.currentId;
        User.currentId += 1;
    }

    private set password(value : string) {
        this.pass = btoa(value);
    }

    get id() {
        return this._id;
    }

    get info() {
        return JSON.stringify({
            id : this._id,
            name : this.name,
            email : this.email
        });
    }

    changePassword(newPassword : string, strength : PasswordStrength = PasswordStrength.WEAK) : void | never {
        if (!User.PasswordValidation[strength](newPassword)) {
            throw new Error(`Password is too weak for ${strength}`);
        }
        this.password = newPassword;
    }

    validate() {

    }

}
export default User;