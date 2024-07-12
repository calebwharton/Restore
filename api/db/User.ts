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
    type: Array,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  
});

const User = model('User', userSchema);

export default User;
