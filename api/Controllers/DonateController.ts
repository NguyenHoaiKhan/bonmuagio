import {DonateModel} from "../Models/DonateModel";

export class DonateController {

  static async getAll(req, res) {
    const Donates = await DonateModel.find();
    if (!Donates) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Donates});
    }
  };

  static async getById(req, res) {
    const _id = req.body._id;
    const Donate = await DonateModel.findById({_id: _id});
    if (!Donate) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Donate});
    }
  };

  static async add(req, res) {
    try {
      const Donate = new DonateModel(req.body);
      await Donate.save();
      res.status(200).json({state: 'success', content: Donate});
    } catch (e) {
      res.status(500).json({state: 'error', error: e});
    }
  };

  static async update(req, res) {
    // get Id of Donate
    const _id = req.body._id;
    // check exist
    const Donate = await DonateModel.findById({_id_: _id});
    // process result
    if (!Donate) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Donate not found'});
    }
    else {
      // update code
      const result = await DonateModel.findOneAndUpdate({_id: _id}, req.body);
      // process update
      if (!result) {
        // update fail
        res.status(500).json({state: 'error', error: 'Something went wrong'});
      }
      else {
        // update successfully
        const updateDonate = await DonateModel.findById({_id: _id});
        res.status(200).json({state: 'success', content: updateDonate});
      }
    }

  };

  static async delete(req, res) {
    // get id
    const _id = req.params._id;
    // check exist
    const Donate = await DonateModel.findById({_id_: _id});
    // process result
    if (!Donate) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Donate not found'});
    }
    else {
      const result = await DonateModel.remove({_id: _id});
      if (!result) {
        res.status(500).json({state: 'error', error: 'Delete did not complete'});
      }
      else {
        res.status(200).json({state: 'success', content: _id});
      }

    }

  }
}
