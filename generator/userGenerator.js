import mongooseDummy from 'mongoose-dummy';
import UserModel from '../model/userModel.js';

const ignoredFields = ['_id', 'created_at', '__v'];
const randomObject = () =>
  mongooseDummy(UserModel, {
    ignore: ignoredFields,
    returnData: true,
  });

let users = [];
for (let i = 1; i <= 10; i++) {
  users.push(randomObject());
}
const usersJson = JSON.stringify(users);

export default usersJson;
