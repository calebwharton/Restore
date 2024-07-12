import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  itemsList: {
    type: [String],
    default: [],
  },
  balance: {
    type: Number,
    default: 0,
  },
  
});

const User = model('User', userSchema);

export default User;
