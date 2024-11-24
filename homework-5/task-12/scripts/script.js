const order_1 = {
    id: '267',
    amount: 1700,
    status: "pending" /* OrderStatus.Pending */,
    paymentType: "paypal" /* PaymentType.PayPal */
};
const order_2 = {
    id: '778',
    amount: 550,
    status: "processing" /* OrderStatus.Processing */,
    paymentType: "bankTransfer" /* PaymentType.BankTransfer */
};
const order_3 = {
    id: '909',
    amount: 700,
    status: "shipped" /* OrderStatus.Shipped */,
    paymentType: "cashOnDelivery" /* PaymentType.CashOnDelivery */
};
const order_4 = {
    id: "112",
    amount: 600,
    status: "cancelled" /* OrderStatus.Cancelled */,
    paymentType: "paypal" /* PaymentType.PayPal */
};
const order_5 = {
    id: "956",
    amount: 1300,
    status: "shipped" /* OrderStatus.Shipped */,
    paymentType: "creditCard" /* PaymentType.CreditCard */
};
const updateOrderStatus = (order, status) => {
    order.status = status;
    console.log(`Your status of order was changed on ${status}`);
};
updateOrderStatus(order_1, "processing" /* OrderStatus.Processing */);
updateOrderStatus(order_2, "shipped" /* OrderStatus.Shipped */);
updateOrderStatus(order_3, "delivered" /* OrderStatus.Delivered */);
updateOrderStatus(order_4, "processing" /* OrderStatus.Processing */);
updateOrderStatus(order_5, "delivered" /* OrderStatus.Delivered */);
const getOrderByStatus = (orders, status) => {
    return orders.filter((order) => order.status === status);
};
const filteredArr = getOrderByStatus([order_1, order_2, order_3, order_4, order_5], "processing" /* OrderStatus.Processing */);
console.log(filteredArr);
export {};
//# sourceMappingURL=script.js.map