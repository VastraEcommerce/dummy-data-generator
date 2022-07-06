import fs from 'fs';
import ordersJson from './generator/orderGenerator.js';
import productsjson from './generator/productGenerator.js';
import reviewsJson from './generator/reviewGenerator.js';
import usersJson from './generator/userGenerator.js';

fs.writeFile(`./data/products.json`, productsjson, 'utf-8', (err) => {
  console.error(err);
});
fs.writeFile(`./data/users.json`, usersJson, 'utf-8', (err) => {
  console.error(err);
});
fs.writeFile(`./data/orders.json`, ordersJson, 'utf-8', (err) => {
  console.error(err);
});
fs.writeFile(`./data/reviews.json`, reviewsJson, 'utf-8', (err) => {
  console.error(err);
});
