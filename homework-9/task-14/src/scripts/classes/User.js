import BaseModal from "./BaseModal.js";
class User extends BaseModal {
    static currentId = 0;
    static PasswordRegExp = {
        ["weak" /* PasswordStrength.WEAK */]: /^.{6,}$/,
        ["medium" /* PasswordStrength.MEDIUM */]: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
        ["strong" /* PasswordStrength.STRONG */]: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    };
    static PasswordValidation = {
        ["weak" /* PasswordStrength.WEAK */]: (value) => {
            return User.PasswordRegExp["weak" /* PasswordStrength.WEAK */].test(value);
        },
        ["medium" /* PasswordStrength.MEDIUM */]: (value) => {
            return User.PasswordRegExp["medium" /* PasswordStrength.MEDIUM */].test(value);
        },
        ["strong" /* PasswordStrength.STRONG */]: (value) => {
            return User.PasswordRegExp["strong" /* PasswordStrength.STRONG */].test(value);
        }
    };
    name = '';
    email = null;
    pass = null;
    _id = 0;
    createdAt = new Date(Date.now());
    constructor({ name, email }) {
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
    set password(value) {
        this.pass = btoa(value);
    }
    get id() {
        return this._id;
    }
    get info() {
        return JSON.stringify({
            id: this._id,
            name: this.name,
            email: this.email
        });
    }
    changePassword(newPassword, strength = "weak" /* PasswordStrength.WEAK */) {
        if (!User.PasswordValidation[strength](newPassword)) {
            throw new Error(`Password is too weak for ${strength}`);
        }
        this.password = newPassword;
    }
    validate() {
    }
}
export default User;
//# sourceMappingURL=User.js.map