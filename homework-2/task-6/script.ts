function createTree(deep : number) : object | null {
    if (deep === 0) {
        return null;
    }

    return {
        value: deep,
        child: createTree(deep - 1)
    }
}
const objectTree : object | null = createTree(2);
console.log(objectTree);