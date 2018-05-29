import {UserModel} from '../Models/UserModel.ts'
import * as JWT from 'jsonwebtoken';
import {Config} from '../configs';

const conf = new Config();

function signToken(newUser) {
  return JWT.sign({
    iss: 'BMG',
    sub: newUser.id,
    iat: (new Date().getTime()) / 1000,
    exp: (new Date().getTime() + 24 * 60 * 60 * 1000) / 1000
  }, conf.getSecretKey());
}

export class UserController {

  constructor() {

  }

  // sign in
  static async signIn(req, res) {
    const token = signToken(req.user);
    res.status(200).json({token});
  }

  // sign up
  static async signUp(req, res) {

    const {username, password, role, isValid} = req.body;
    const foundUser = await UserModel.findOne({'username': username});
    if (foundUser) {
      return res.status(403).json({error: 'usrername đã tồn tại'});
    }
    const newUser = new UserModel({
      username,
      password,
      role,
      isValid
    });
    await newUser.save();
    const AddedUser = await UserModel.findOne({'username': username});
    const token = signToken(AddedUser);
    res.status(200).json({token: token});
  }

  static async secret(req, res) {
    res.json(req.user);
  }


}
