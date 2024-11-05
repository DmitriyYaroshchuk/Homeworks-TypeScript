interface Product {
    name : string;
    price : number,
    category : {
        categoryName : string,
        categoryId : number
    }
}
export interface Order {
    orderId: number,
    userId: Product[]
}
