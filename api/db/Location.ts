import { Schema, model } from 'mongoose';

const locationSchema = new Schema({
  locationName: {
    type: String,
    required: true,
  },
  longitude:{
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
    events: {
    type: [String],
    default: [],
  }
});

const Location = model('Location', locationSchema);

export default Location;
