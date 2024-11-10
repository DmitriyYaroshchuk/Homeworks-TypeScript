function filterByProperty(arr, property, value) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const object = arr[i];
        if (typeof object === "object"
            && object !== null
            && object?.hasOwnProperty(property)
            && object[property] === value) {
            result.push(arr[i]);
        }
    }
    return result;
}
const users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charline', age: 35, isActive: true }
];
const filteredByName = filterByProperty(users, "name", "Bob");
const filteredByAge = filterByProperty(users, "age", 35);
const filteredByActive = filterByProperty(users, "isActive", true);
const filteredByIncorrected = filterByProperty(users, "id", 9);
export {};
//# sourceMappingURL=script.js.map