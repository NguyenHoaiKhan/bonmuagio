// import router promise

import express_promise_router from "express-promise-router";

const TaskRouter = express_promise_router();

// import Controller

import {TaskController} from '../Controllers/TaskController.js';

const taskController = new TaskController();

// route

// get all task
TaskRouter.route('/getAll').post(taskController.getAll);

// get a task by Id
TaskRouter.route('/getById').post(taskController.getById);

// create a task
TaskRouter.route('/add').post(taskController.add);

// update a task
TaskRouter.route('/update').put(taskController.update);

// delete a task
TaskRouter.route('/delete').detete(taskController.delete);



