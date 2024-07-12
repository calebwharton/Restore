import { Schema, model } from 'mongoose';

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  // seller: {
  //   type: String,
  //   required: true,
  // },  
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
