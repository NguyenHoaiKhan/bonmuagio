// import express-promise-router
import express_promise_router from "express-promise-router";

const DonateRouter = express_promise_router();

// import donate controller
import {DonateController} from "../Controllers/DonateController.js";

const donateController = new DonateController();
/*
// get all donate
DonateRouter.route('/getAll').post(donateController.getAll);

// get donate by id
DonateRouter.route('/getById').post(donateController.getById)

// create an donate
DonateRouter.route('/add').post(donateController.add);

// update an donate
DonateRouter.route('/update').put(donateController.update);

// delete an donate
DonateRouter.route('/delete').delete(donateController.delete);

*/
