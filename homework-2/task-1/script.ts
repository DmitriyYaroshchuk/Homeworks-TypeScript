interface Goods {
    name : string,
    price : string,
    availability : string,
    manufacturer? : string,
    country? : string
}

function renderGoods (goods : Goods) : string {
    return JSON.stringify(goods);
}

const goods_1 : Goods = {
    name: 'Iphone16',
    price: '1600 грн',
    availability: 'Да',
    manufacturer: 'Apple',
    country: 'USA'
}

const goods_2 : Goods = {
    name: 'Microwave',
    price: '450 грн',
    availability: 'Да'
}

console.log(typeof renderGoods(goods_1), renderGoods(goods_1));
console.log(typeof renderGoods(goods_2), renderGoods(goods_2));
console.log('-----------');




type Product = { name : string, price : string, availability : string, manufacturer? : string, country? : string };

function renderProduct2 (product : Product) : string {
    return JSON.stringify(product);
}
const product_2: Product = {
    name: 'Headphones',
    price: '200 грн',
    availability: 'Да',
    manufacturer: 'Xiaomi',
    country: 'China'
}

console.log(typeof renderProduct2(product_2), renderProduct2(product_2));
console.log('-----------');