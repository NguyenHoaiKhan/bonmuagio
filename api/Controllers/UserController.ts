import {UserModel} from '../Models/UserModel'
import * as JWT from 'jsonwebtoken';
import {Config} from '../configs';

const conf = new Config();

function signToken(newUser) {
  return JWT.sign({
    iss: 'BMG',
    sub: newUser.id,
    iat: (new Date().getTime()) / 1000,
    exp: (new Date().getTime() + 24 * 60 * 60 * 1000) / 1000
  }, Config.getSecretKey());
}

export class UserController {

  constructor() {

  }

  // ------------------------------ sign in ----------------------------------------------
  static async signIn(req, res) {
    const token = signToken(req.user);
    if (!token) {
      res.status(400).json({state: 'error', error: 'Fail to sign in'});
    }
    else {
      res.status(200).json({state: 'success', content: token});
    }

  }

  static async signOut(req, res) {
    const result = await req.session.destroy();
    if (!result) {
      res.status(500).json({state: 'error', error: 'Somethings went wrong'});
    }
    res.status(200).json({state: 'success', content: {message: 'See you next time'}});
  }
  // ----------------------- sign up -----------------------------------------------------
  static async signUp(req, res) {

    const {username, password, role, isValid} = req.body;
    const foundUser = await UserModel.findOne({'username': username});
    if (foundUser) {
      return res.status(403).json({state: 'error', error: 'username đã tồn tại'});
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
    res.status(200).json({state: 'success', content: token});
  }

  // ---------------------------------- get user data ------------------------------------------
  static async secret(req, res) {
    req.session.user = req.user;
    res.status(200).json(req.user);
  }

  // --------------------------------- change password -----------------------------------------
  static async changePassword(req, res) {
    const {_id, pwd} = req.body;

    // -------- check exist ------------------
    const user = await UserModel.findById({_id: _id});

    // --------- process result --------------
    if (!user) {
      // invalid
      res.json({state: 'error', error: 'Invalid User'});
    }
    else {
      // valid
      user.password = pwd;
      const result = await UserModel.findOneAndUpdate({_id: _id}, user);
      if (!result) {
        // error while changing
        res.json({state: 'error', error: 'Something went wrong'});
      }
      else {
        // changed successfully
        const updateUser = await UserModel.findById({_id: _id});
        res.json({state: 'success', content: updateUser});
      }
    }
  }

  // --------------------------------- GET ALL ACCOUNT -----------------------------------------
  static async getAll(req, res) {
    const Users = await UserModel.find();
    if (!Users) {
      res.json({state: 'error', error: 'Can not get all account'})
    }
    else {
      res.json({state: 'success', content: Users});
    }

  }

  // --------------------------------- GET AN ACCOUNT BY ID -----------------------------------------
  static async getById(req, res) {
    const _id = req.body._id;
    const User = await UserModel.find({_id: _id});
    // process result
    if (!User) {
      // invalid
      res.json({state: 'error', error: 'Invalid Id'});
    }
    else {
      // valid
      res.json({state: 'success', content: User});
    }
  }

  // --------------------------------- GET AN ACCOUNT BY USER NAME -----------------------------------------
  static async getByUserName(req, res) {
    const username = req.body.username;
    const User = await UserModel.find({username: username});
    // process result
    if (!User) {
      // invalid
      res.json({state: 'error', error: 'Invalid Id'});
    }
    else {
      // valid
      res.json({state: 'success', content: User});
    }
  }

  // ---------------------------------  UPDATE PROFILE -----------------------------------------
  static async profile_edit(req, res) {
    const _id = req.params.id;
    const profile = req.body;
    const User = await UserModel.findById({_id: _id});
    // process result
    if (!User) {
      // invalid
      res.json({state: 'error', error: 'Invalid User'});
    }
    else {
      // valid
      User.profile = profile;
      const result = await UserModel.findOneAndUpdate({_id: _id}, User);
      if (!result) {
        // update fail
        res.json({state: 'error', error: 'Error Update'});
      }
      else {
        const updateUser = await UserModel.findById({_id: _id});
        res.json({state: 'success', content: updateUser});
      }

    }
  }




}
