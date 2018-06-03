import {TagModel} from "../Models/TagModel";

export class TagController {

  static async getAll(req, res) {
    const Tags = await TagModel.find();
    if (!Tags) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Tags});
    }
  };

  static async getById(req, res) {
    const _id = req.body._id;
    const Tag = await TagModel.findById({_id: _id});
    if (!Tag) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Tag});
    }
  };

  static async add(req, res) {
    try {
      const Tag = new TagModel(req.body);
      await Tag.save();
      res.status(200).json({state: 'success', content: Tag});
    } catch (e) {
      res.status(500).json({state: 'error', error: e});
    }
  };

  static async update(req, res) {
    // get Id of Tag
    const _id = req.body._id;
    // check exist
    const Tag = await TagModel.findById({_id_: _id});
    // process result
    if (!Tag) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Tag not found'});
    }
    else {
      // update code
      const result = await TagModel.findOneAndUpdate({_id: _id}, req.body);
      // process update
      if (!result) {
        // update fail
        res.status(500).json({state: 'error', error: 'Something went wrong'});
      }
      else {
        // update successfully
        const updateTag = await TagModel.findById({_id: _id});
        res.status(200).json({state: 'success', content: JSON.parse(Tag)});
      }
    }

  };

  static async delete(req, res) {
    // get id
    const _id = req.params._id;
    // check exist
    const Tag = await TagModel.findById({_id: _id});
    // process result
    if (!Tag) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Tag not found'});
    }
    else {
      const result = await TagModel.remove({_id: _id});
      if (!result) {
        res.status(500).json({state: 'error', error: 'Delete did not complete'});
      }
      else {
        res.status(200).json({state: 'success', content: _id});
      }

    }

  }
}
