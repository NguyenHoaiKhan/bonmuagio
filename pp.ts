import {UserModel} from "./api/Models/UserModel";
import {ExtractJwt, Strategy} from 'passport-jwt';

import {Config} from './api/configs';

import * as passport from "passport";

import * as localStrategy from "passport-local";

const conf = new Config();


// JWT Strategy
passport.use(new Strategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: Config.getSecretKey()
}, async (payload, done) => {
  try {
    const user = await UserModel.findById({_id: payload.sub});
    // if false
    if (!user) {
      return done(null, false);
    }
    // succes
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}));


// local Strategy

passport.use('local', new localStrategy({
  usernameField: 'username'
}, async (username, password, done) => {
  try {
    // Find the user given the email
    const user = await UserModel.findOne({username: username.toLowerCase()});

    // If not, handle it
    if (!user) {
      return done(null, false);
    }

    // Check if the password is correct

    const isMatch = await user.isValidPassword(password);

    // If not, handle it
    if (!isMatch) {
      return done(null, false);
    }

    // Otherwise, return the user
    done(null, user);
  } catch (error) {
    done(error, false);
  }

}));



