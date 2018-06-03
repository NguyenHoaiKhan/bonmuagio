// import express-promise-router
import express_promise_router from "express-promise-router";

const ItemRouter = express_promise_router();

// import Item controller
import {ItemController} from "../Controllers/ItemController";

// get all item
ItemRouter.route('/getAll').post(ItemController.getAll);

// get item by id
ItemRouter.route('/getById').post(ItemController.getById);

// create an item
ItemRouter.route('/add').post(ItemController.add);

// update an item
ItemRouter.route('/update').put(ItemController.update);

// delete an item
ItemRouter.route('/delete/:_id').delete(ItemController.delete);

export {ItemRouter};

