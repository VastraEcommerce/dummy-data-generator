import validator from 'validator';
import mongoose from 'mongoose';
import addressSchema from '../Schemas/addressSchema.js';

const user = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: [true, 'Please tell us your email!'],
    unique: true,
    trim: true,
    lowerCase: true,
    maxLength: [40, 'A user email must have less than or equal 40 characters'],
    minLength: [
      true,
      'A user email must have more than or equal 10 characters',
    ],
    validate: [validator.isEmail, 'Please provide valid email'],
  },
  password: {
    type: String,
    require: [true, 'Please provide a password'],
    trim: true,
    minLength: [
      8,
      'A user password must have more than or equal to 8 characters',
    ],
    validate: [validator.isStrongPassword, 'Password is not strong'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    require: [true, 'Please confirm your password'],
    trim: true,
    minLength: [
      8,
      'A user password must have more than or equal to 8 characters',
    ],
    // This only works on CREATE and SAVE !!!
    validate: {
      validator(val) {
        return val === this.password;
      },
      message: 'Please provide the same password',
    },
  },
  address: {
    type: [
      {
        type: addressSchema,
        required: true,
      },
    ],
    validate: [(el) => el.length <= 3, '{PATH} exceeds the limit of 3'],
  },
  cart: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'product',
    },
  ],
  orders: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'order',
    },
  ],
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin'],
  },
  paymentMethods: [
    {
      type: String,
      enum: ['cash', 'card'],
    },
  ],
  phone: [
    {
      type: String,
      required: true,
    },
  ],
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
};

export const userSchema = new mongoose.Schema(user);

const UserModel = mongoose.model('user', userSchema);

export default UserModel;
