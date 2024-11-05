"use strict";
const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfNumbers2 = [10, 20, 25, 30, 45];
function getAverageNum(arr) {
    return arr.reduce((accum, item) => accum + item) / arr.length;
}
console.log(getAverageNum(arrayOfNumbers));
console.log(getAverageNum(arrayOfNumbers2));
//# sourceMappingURL=script.js.map