import {requireLogin} from '../middlewares';
// import express-promise-router
import express_promise_router from "express-promise-router";

const DonateRouter = express_promise_router();

// import donate controller
import {DonateController} from "../Controllers/DonateController";

// get all donate
DonateRouter.route('/getAll').post(DonateController.getAll);

// get donate by id
DonateRouter.route('/getById').post(DonateController.getById);

// create an donate
DonateRouter.route('/add').post(requireLogin, DonateController.add);

// update an donate
DonateRouter.route('/update').put(requireLogin, DonateController.update);

// delete an donate
DonateRouter.route('/delete/:_id').delete(requireLogin, DonateController.delete);

export {DonateRouter};


