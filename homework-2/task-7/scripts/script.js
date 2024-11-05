"use strict";
const array = ['typescript', 11, false, 'bottle', true, 223, 'javascript'];
console.log('before reverse array: ', array);
function reverseArray(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
const reversedArr = reverseArray(array);
console.log('after reverse array: ', array);
console.log(array === reversedArr);
//# sourceMappingURL=script.js.map