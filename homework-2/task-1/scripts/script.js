"use strict";
function renderGoods(goods) {
    return JSON.stringify(goods);
}
const goods_1 = {
    name: 'Iphone16',
    price: '1600 грн',
    availability: 'Да',
    manufacturer: 'Apple',
    country: 'USA'
};
const goods_2 = {
    name: 'Microwave',
    price: '450 грн',
    availability: 'Да'
};
console.log(typeof renderGoods(goods_1), renderGoods(goods_1));
console.log(typeof renderGoods(goods_2), renderGoods(goods_2));
console.log('-----------');
function renderProduct2(product) {
    return JSON.stringify(product);
}
const product_2 = {
    name: 'Headphones',
    price: '200 грн',
    availability: 'Да',
    manufacturer: 'Xiaomi',
    country: 'China'
};
console.log(typeof renderProduct2(product_2), renderProduct2(product_2));
console.log('-----------');
//# sourceMappingURL=script.js.map