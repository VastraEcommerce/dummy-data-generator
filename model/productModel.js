import validator from 'validator';
import mongoose from 'mongoose';
import variantSchema from '../Schemas/variantSchema.js';

const product = {
  category: {
    type: String,
    required: true,
    enum: ['Shirts', 'Pants', 'T-shirts', 'Sportswear'],
  },
  brand: {
    type: String,
    required: true,
    validate: [validator.isAlpha, 'Invalid brand name'],
  },
  brand_thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    validate: [validator.isAlpha, 'Invalid title'],
  },
  description: {
    type: String,
    required: true,
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
    set: (value) => Math.round(value * 10) / 10,
  },
  ratingsQuantity: { type: Number, default: 0 },
  variants: [
    {
      type: variantSchema,
    },
  ],
};

export const productSchema = new mongoose.Schema(product);
const productModel = mongoose.model('product', productSchema);

export default productModel;
