import * as mongoose from 'mongoose';

// declare schema
const Schema = mongoose.Schema;

// declare Profile Schema

const ProfileSchema = new Schema({
  fullName: {
    firstName: String,
    lastName: String
  },
  dayOfBirth: Date,
  email: String,
  phone: String,
  gender: Boolean,
  facebookLink: String,
  idTask: String

});
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
    enum: ['user', 'admin', 'editor'],
    required: true
  },
  isValid: Boolean,
  profile: ProfileSchema
});

// create model
const UserModel = mongoose.model('user',UserSchema);
// export

module.exports = UserModel;
