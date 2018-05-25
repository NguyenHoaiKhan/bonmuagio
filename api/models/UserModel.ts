import * as mongoose from 'mongoose';
import * as bcryptjs from 'bcryptjs';

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

// hash pwd

/*UserSchema.pre('save', async function(next) {
  try {
    const user = this;
    console.log(user.method);

    if (user.method !== 'local') {
      return next();
    }
    // Generate a salt
    const salt = await bcryptjs.genSalt(10);
    // Generate a password hash (salt + hash)
    const passwordHash = await bcryptjs.hash(user.local.password, salt);
    // Re-assign hashed version over original, plain text password
    user.local.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});*/

// create model
const UserModel = mongoose.model('user',UserSchema);
// export

module.exports = UserModel;
