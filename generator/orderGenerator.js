import mongooseDummy from 'mongoose-dummy';
import OrderModel from '../model/orderModel.js';

const ignoredFields = ['_id', 'created_at', '__v'];
const randomObject = () =>
  mongooseDummy(OrderModel, {
    ignore: ignoredFields,
    returnData: true,
  });

let orders = [];
for (let i = 1; i <= 10; i++) {
  orders.push(randomObject());
}

const ordersJson = JSON.stringify(orders);

export default ordersJson;
