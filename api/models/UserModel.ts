
import * as mongoose from 'mongoose';

import * as bcryptjs from 'bcryptjs';

// ---------------- declare Schema -------------------------------------------------
const Schema = mongoose.Schema;

// ---------------- Profile Schema -------------------------------------------------
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

// -------------- declare UserSchema ----------------------------------------------
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
    //user,admin, editor
    type: String,
    enum: ['user', 'admin', 'editor'],
    required: true
  },
  isValid: Boolean,
  profile: ProfileSchema
});

// --------------- Hash Password ------------------------------------------------
UserSchema.pre('save', async function (next) {
  try {
    const user = this;
    // Generate a salt
    const salt = await bcryptjs.genSalt(10);
    // Generate a password hash (salt + hash)
    // Re-assign hashed version over original, plain text password
    user.password = await bcryptjs.hash(user.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// --------------- Valid Password ------------------------------------------------
UserSchema.methods.isValidPassword = async function (newPassword) {
  try {
    const user = this;
    return await bcryptjs.compare(newPassword, user.password);
  } catch (error) {
    throw new Error(error);
  }
};
// --------------- Define Model ------------------------------------------------
const UserModel = mongoose.model('user',UserSchema);

// --------------- export Model -------------------------------------------------
export {UserModel};





