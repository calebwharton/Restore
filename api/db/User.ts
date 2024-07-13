import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  eventsAttended: {
    type: [String],
    default: [],
  },
  eventsCreated: {
    type: [String],
    default: [],
  }
});

const User = model('User', userSchema);

export default User;
