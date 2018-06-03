export class UserModel {
  constructor() {
  };

  _id: String;
  username: String;
  password: String;
  role: String;
  isValid: Boolean;
  profile: {
    fullName: {
      firstName: String,
      lastName: String,
    },
    dayOfBirth: Date,
    email: String,
    phone: String,
    gender: Boolean,
    facebookLink: String,
    idTask: String,
  }
}
