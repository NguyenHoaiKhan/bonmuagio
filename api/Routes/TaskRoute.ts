// import router promise

import express_promise_router from "express-promise-router";

const TaskRouter = express_promise_router();

// import Controller

import {TaskController} from '../Controllers/TaskController';


// route

// get all task
TaskRouter.route('/getAll').post(TaskController.getAll);

// get a task by Id
TaskRouter.route('/getById').post(TaskController.getById);

// create a task
TaskRouter.route('/add').post(TaskController.add);

// update a task
TaskRouter.route('/update').put(TaskController.update);

// delete a task
TaskRouter.route('/delete').delete(TaskController.delete);

export {TaskRouter};



