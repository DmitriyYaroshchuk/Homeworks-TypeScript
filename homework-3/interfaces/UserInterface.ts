interface Address {
    street : string;
    city : string;
    zipCode : number;
}

interface User {
    name : string;
    age : number;
}

export interface UserWithAddress extends Address, User {
    email : string;
}