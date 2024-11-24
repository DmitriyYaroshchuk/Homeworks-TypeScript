import {OrderStatus} from "../enums/OrderStatus";
import {PaymentType} from "../enums/PaymentType";

export interface Order {
    id : string,
    amount: number,
    status: OrderStatus,
    paymentType: PaymentType
}