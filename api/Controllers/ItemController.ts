import {ItemModel} from "../Models/ItemModel";

export class ItemController {

  static async getAll(req, res) {
    const Items = await ItemModel.find();
    if (!Items) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Items});
    }
  };

  static async getById(req, res) {
    const _id = req.body._id;
    const Item = await ItemModel.findById({_id: _id});
    if (!Item) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Item});
    }
  };

  static async add(req, res) {
    try {
      const Item = new ItemModel(req.body);
      await Item.save();
      res.status(200).json({state: 'success', content: Item});
    } catch (e) {
      res.status(500).json({state: 'error', error: e});
    }
  };

  static async update(req, res) {
    // get Id of Item
    const _id = req.body._id;
    // check exist
    const Item = await ItemModel.findById({_id_: _id});
    // process result
    if (!Item) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Item not found'});
    }
    else {
      // update code
      const result = await ItemModel.findOneAndUpdate({_id: _id}, req.body);
      // process update
      if (!result) {
        // update fail
        res.status(500).json({state: 'error', error: 'Something went wrong'});
      }
      else {
        // update successfully
        const updateItem = await ItemModel.findById({_id: _id});
        res.status(200).json({state: 'success', content: updateItem});
      }
    }

  };

  static async delete(req, res) {
    // get id
    const _id = req.params._id;
    // check exist
    const Item = await ItemModel.findById({_id_: _id});
    // process result
    if (!Item) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Item not found'});
    }
    else {
      const result = await ItemModel.remove({_id: _id});
      if (!result) {
        res.status(500).json({state: 'error', error: 'Delete did not complete'});
      }
      else {
        res.status(200).json({state: 'success', content: _id});
      }

    }

  }
}
