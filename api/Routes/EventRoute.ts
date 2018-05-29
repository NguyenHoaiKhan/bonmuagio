// import express-promise-router
import express_promise_router from "express-promise-router";

const EventRouter = express_promise_router();

// import event controller
import {EventController} from "../Controllers/EventController.js";

/* -----------------------Event Route ---------------------------

// get all event
EventRouter.route('/getAll').post(EventController.getAll);

// get event by id
EventRouter.route('/getById').post(EventController.getById)

// create an event
EventRouter.route('/add').post(EventController.add);

// update an event
EventRouter.route('/update').put(EventController.update);

// delete an event
EventRouter.route('/delete').delete(EventController.delete);

/*------------------------ Post Route -----------------------

EventRouter.route('/post_getAll').post(EventController.post_getAll);

// get event by id
EventRouter.route('/post_getById').post(EventController.post_getById)

// create an event
EventRouter.route('/post_add').post(EventController.post_add);

// update an event
EventRouter.route('/post_update').put(EventController.post_update);

// delete an event
EventRouter.route('/post_delete').delete(EventController.post_delete);


*/
