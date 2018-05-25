import * as mongoose from 'mongoose';

// declare schema
const Schema = mongoose.Schema;

// declare schema User

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    //user,admin, Editor
    type: String,
    enum: ['local', 'google', 'facebook'],
    required: true

  }
});
