import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  city: {
    type: String,
  },
  street: {
    type: String,
  },
  buliding: {
    type: String,
  },
  country: {
    type: String,
  },
  purpose: {
    type: String,
    enum: ['payment', 'delivery'],
  },
});

export default addressSchema;
