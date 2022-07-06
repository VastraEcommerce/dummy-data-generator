import mongooseDummy from 'mongoose-dummy';
import productModel from '../model/productModel.js';

const ignoredFields = ['_id', 'created_at', '__v'];
const randomObject = () =>
  mongooseDummy(productModel, {
    ignore: ignoredFields,
    returnData: true,
  });

let products = [];
for (let i = 1; i <= 10; i++) {
  products.push(randomObject());
}
const productsjson = JSON.stringify(products);

export default productsjson;
