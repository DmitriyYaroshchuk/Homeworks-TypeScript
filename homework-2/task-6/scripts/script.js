"use strict";
function createTree(deep) {
    if (deep === 0) {
        return null;
    }
    return {
        value: deep,
        child: createTree(deep - 1)
    };
}
const objectTree = createTree(2);
console.log(objectTree);
//# sourceMappingURL=script.js.map