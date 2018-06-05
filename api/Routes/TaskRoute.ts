import {requireAdmin, requireLogin} from "../middlewares";
// import router promise
import express_promise_router from "express-promise-router";

const TaskRouter = express_promise_router();

// import Controller

import {TaskController} from '../Controllers/TaskController';


// route

// get all task
TaskRouter.route('/getAll').post(requireLogin, TaskController.getAll);

// get a task by Id
TaskRouter.route('/getById').post(requireLogin, TaskController.getById);

// create a task
TaskRouter.route('/add').post(requireAdmin, TaskController.add);

// update a task
TaskRouter.route('/update').put(requireAdmin, TaskController.update);

// delete a task
TaskRouter.route('/delete/:_id').delete(requireAdmin, TaskController.delete);

export {TaskRouter};




