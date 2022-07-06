import mongoose from 'mongoose';
import { productSchema } from './productModel.js';

export const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: productSchema,
        required: true,
      },
    ],
    status: {
      type: String,
      required: true,
      enum: [
        'pendingPayment',
        'preparing',
        'shipping',
        'completed',
        'canceled',
      ],
    },
    totalPrice: {
      type: Number,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
    },
  }
);

const OrderModel = mongoose.model('order', orderSchema);
export default OrderModel;
