import mongooseDummy from 'mongoose-dummy';
import ReviewModel from '../model/reviewModel.js';

const ignoredFields = ['_id', 'created_at', '__v'];
const randomObject = () =>
  mongooseDummy(ReviewModel, {
    ignore: ignoredFields,
    returnData: true,
  });

let reviews = [];
for (let i = 1; i <= 10; i++) {
  reviews.push(randomObject());
}
const reviewsJson = JSON.stringify(reviews);

export default reviewsJson;
