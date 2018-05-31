// import express-promise-router
import express_promise_router from "express-promise-router";

const EventRouter = express_promise_router();

// import event controller
import {EventController} from "../Controllers/EventController";

/* -----------------------Event Route ---------------------------*/

// get all event
EventRouter.route('/getAll').post(EventController.getAll);

// get event by id
EventRouter.route('/getById').post(EventController.getById);

// create an event
EventRouter.route('/add').post(EventController.add);

// update an event
EventRouter.route('/update').put(EventController.update);

// delete an event
EventRouter.route('/delete').delete(EventController.delete);

/*------------------------ Post Route -----------------------*/

EventRouter.route('/:_idEvent/post_getAll').post(EventController.post_getAll);

// get post by id
EventRouter.route('/:_idEvent/post_getById').post(EventController.post_getById);

// create an post
EventRouter.route('/:_idEvent/post_add').post(EventController.post_add);

// update an post
EventRouter.route('/:_idEvent/post_update').put(EventController.post_update);

// delete an post
EventRouter.route('/:_idEvent/:idEvent/post_delete').delete(EventController.post_delete);

/* --------------------------------------- Separated Work ---------------------------------------------------*/


EventRouter.route('/:idEvent/separatedWork_getAll').post(EventController.separatedWork_getAll);

// get post by id
EventRouter.route('/:idEvent/separatedWork_getById').post(EventController.separatedWork_getById);

// create an post
EventRouter.route('/:idEvent/separatedWork_add').post(EventController.separatedWork_add);

// update an post
EventRouter.route('/:idEvent/separatedWork_update').put(EventController.separatedWork_update);

// delete an post
EventRouter.route('/:idEvent/separatedWork_delete').delete(EventController.separatedWork_delete);

export {EventRouter};

