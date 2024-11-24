import {Order} from "./interfaces/Order";
import {PaymentType} from "./enums/PaymentType";
import {OrderStatus} from "./enums/OrderStatus";



const order_1 : Order = {
    id: '267',
    amount: 1700,
    status: OrderStatus.Pending,
    paymentType: PaymentType.PayPal
}

const order_2 : Order = {
    id: '778',
    amount: 550,
    status: OrderStatus.Processing,
    paymentType: PaymentType.BankTransfer
}

const order_3 : Order = {
    id: '909',
    amount: 700,
    status: OrderStatus.Shipped,
    paymentType: PaymentType.CashOnDelivery
}

const order_4 : Order = {
    id: "112",
    amount: 600,
    status: OrderStatus.Cancelled,
    paymentType: PaymentType.PayPal
}

const order_5 : Order = {
    id: "956",
    amount: 1300,
    status: OrderStatus.Shipped,
    paymentType: PaymentType.CreditCard
}

const updateOrderStatus = (order: Order, status: OrderStatus) : void => {
    order.status = status;
    console.log(`Your status of order was changed on ${status}`);
}
updateOrderStatus(order_1, OrderStatus.Processing);
updateOrderStatus(order_2, OrderStatus.Shipped);
updateOrderStatus(order_3, OrderStatus.Delivered);
updateOrderStatus(order_4, OrderStatus.Processing);
updateOrderStatus(order_5, OrderStatus.Delivered);

const getOrderByStatus = (orders: Order[], status: OrderStatus) : Order[] => {
    return orders.filter((order) => order.status === status);
}
 const filteredArr : Order[] = getOrderByStatus([order_1, order_2, order_3, order_4, order_5], OrderStatus.Processing);
console.log(filteredArr);