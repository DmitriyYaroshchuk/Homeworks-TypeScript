import BaseModal from "./BaseModal.js";

class User extends BaseModal {
    static currentId = 0;

    static passwordStrength = Object.freeze({
        WEAK: 'weak',
        MEDIUM: 'medium',
        STRONG: 'strong'
    });

    static passwordRegExp = Object.freeze({
        [User.passwordStrength.WEAK] : /^.{6,}$/,
        [User.passwordStrength.MEDIUM] : /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
        [User.passwordStrength.STRONG] : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    });

    static passwordValidation = Object.freeze({
        [User.passwordStrength.WEAK] : (value) => {
            return User.passwordRegExp[User.passwordStrength.WEAK].test(value);
        },
        [User.passwordStrength.MEDIUM] : (value) => {
            return User.passwordRegExp[User.passwordStrength.MEDIUM].test(value);
        },
        [User.passwordStrength.STRONG] : (value) => {
            return User.passwordRegExp[User.passwordStrength.STRONG].test(value);
        }
    });

    name = '';
    email = '';
    #id = 0;
    #pass = null;

    constructor({ name, email }) {
        super();
        if (typeof name !== "string" || name.trim() === '') {
            throw new Error('Invalid value name');
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            throw new Error('Invalid value email');
        }
        this.name = name;
        this.email = email;
        this.#id = User.currentId;
        User.currentId += 1;
    }

    set #password(value) {
        this.#pass = btoa(value);
    }

    get id() {
        return this.#id;
    }

    get info() {
        return JSON.stringify({
            id : this.#id,
            name: this.name,
            email: this.email,
        });
    }

    changePassword(newPassword, strength = User.passwordStrength.WEAK) {

        if (typeof newPassword !== "string") return false;

        if (!Object.values(User.passwordStrength).includes(strength)) {
            throw new Error('Password strength is wrong');
        }

        if (!User.passwordValidation[strength](newPassword)) {
            throw new Error(`Password is too weak for ${strength}`);
        }

        this.#password = newPassword;
    }
}
export default User;