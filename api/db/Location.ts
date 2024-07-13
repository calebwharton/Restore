import { Schema, model } from 'mongoose';

const locationSchema = new Schema({
  locationName: {
    type: String,
    required: true,
  },
    events: {
    type: [String],
    default: [],
  }
});

const Location = model('Location', locationSchema);

export default Location;
