const original: { [key: string]: unknown } = {
    a: 1,
    b: {
        c: 2
    },
    d: [3, 4]
}


function deepClone(obj: object) : object {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        const copyArr : unknown[] = [];
        obj.forEach(item => copyArr.push(deepClone(item)));
        return copyArr;

    }

    const copyObject : { [key : string] : unknown } = {};

    for (let key in obj ) {
        const typedObj = obj as { [key: string]: unknown };
        if (typeof typedObj[key] === "object") {
            copyObject[key] = deepClone(typedObj[key] as object);
        } else {
            copyObject[key] = typedObj[key];
        }
    }

    return copyObject;
}
const copy : object  = deepClone(original);
console.log(copy);
console.log(original !== copy);
if ("b" in copy && "b" in original) {
    console.log(original.b !== copy.b);

}
if ("d" in copy && "d" in original) {
    console.log(original.d !== copy.d);
}




