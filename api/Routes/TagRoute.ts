// import express-promise-router
import express_promise_router from "express-promise-router";

const TagRouter = express_promise_router();

// import Item controller
import {TagController} from "../Controllers/TagController";

// get all item
TagRouter.route('/getAll').post(TagController.getAll);

// get item by id
TagRouter.route('/getById').post(TagController.getById);

// create an item
TagRouter.route('/add').post(TagController.add);

// update an item
TagRouter.route('/update').put(TagController.update);

// delete an item
TagRouter.route('/delete/:_id').delete(TagController.delete);

export {TagRouter};

