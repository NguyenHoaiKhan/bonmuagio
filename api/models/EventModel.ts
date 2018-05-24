import * as mongoose from 'mongoose';

// declare schema
const Schema = mongoose.Schema;

// declare schema tag
const TagSchema = new Schema({
  name: {
    type: String,
    required:true
  },
  parents: String
});
// declare a post schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String
  },
  postedTime: Date,
  _idUser: {
    type: String,
    required: true
  },
  images: [String],
  tags: [TagSchema]
});
// declare a EventSchema

const EventShema = new Schema({
  name: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  finishTime: {
    type: Date,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  posts: [PostSchema],
  _idPinPost: String,
  cost: {
    type: Number,
    required: true
  }
});

// define Event model

const EventModel = mongoose.model('event',EventShema);

module.exports = EventModel;
