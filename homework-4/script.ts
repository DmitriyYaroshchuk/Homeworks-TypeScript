import { User } from "./interfaces/UserInterface";

function filterByProperty<T, K extends keyof T>(arr: T[], property: K, value: T[K]): T[] {
    const result : T[] = [];
    for (let i = 0; i < arr.length; i++) {
        const object : T = arr[i];
        if (typeof object === "object"
            && object !== null
            && object?.hasOwnProperty(property)
            && object[property] === value) {

            result.push(arr[i]);
        }
    }
    return result;
}


const users: User[] = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charline', age: 35, isActive: true }
];

const filteredByName : User[] = filterByProperty(users, "name", "Bob");
const filteredByAge : User[] = filterByProperty(users, "age", 35);
const filteredByActive : User[] = filterByProperty(users, "isActive", true);
const filteredByIncorrected : User[] = filterByProperty(users, "id", 9);