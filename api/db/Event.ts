import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  eventCreator: {
    type: String, //or we can change it to the id of the user
    required: true
  },
  atendees: {
    type: [String],
    default: [],
  }
});

const Event = model('Event', eventSchema);

export default Event;
