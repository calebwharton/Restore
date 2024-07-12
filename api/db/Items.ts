import { Schema, model } from 'mongoose';

const itemSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },  
  description: {
    type: String,
    required: true,
  },  
  price: {
    type: Number,
    required: true,
  },
});

const Item = model('Item', itemSchema);

export default Item;
