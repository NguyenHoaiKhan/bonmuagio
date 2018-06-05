///<reference path="../../node_modules/@types/node/index.d.ts"/>
import express_promise_router from 'express-promise-router';

const UserRouter = express_promise_router();
import {UserController} from '../controllers/UserController';
import * as passport from 'passport';

// --------------------------middle ware----------------------------------------
const local = passport.authenticate('local', {session: false});
const jwt = passport.authenticate('jwt', {session: false});

// ------------------------ SIGN IN --------------------------------------------
UserRouter.route('/signIn').post(local, UserController.signIn);

// ------------------------ SIGN UP --------------------------------------------
UserRouter.route('/signUp').post(UserController.signUp);

// ------------------------ Sign out --------------------------------------------
UserRouter.route('/signOut').post(UserController.signOut);


// ------------------------ SECRET --------------------------------------------
UserRouter.route('/secret').post(jwt, UserController.secret);

// ------------------------ CHANGE PASSWORD --------------------------------------------
UserRouter.route('/changePassword').put(UserController.changePassword);


// ------------------------ GET ALL ACCOUNT --------------------------------------------
UserRouter.route('/getAll').post(UserController.getAll);

// ------------------------ GET AN ACCOUNT --------------------------------------------
UserRouter.route('/getById').post(UserController.getById);

// ------------------------ GET BY USERNAME --------------------------------------------
UserRouter.route('/getByUserName').post(UserController.getByUserName);

// ------------------------ EDIT PROFILE --------------------------------------------
UserRouter.route('/profile_edit/:id').put(UserController.profile_edit);


export {UserRouter};
