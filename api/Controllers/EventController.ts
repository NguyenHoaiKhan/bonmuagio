import {EventModel} from "../Models/EventModel";

export class EventController {

  /*----------------------------------------------- Event controller -------------------------------------------------*/
  static async getAll(req, res) {
    const Events = await EventModel.find();
    if (!Events) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Events});
    }
  };

  static async getById(req, res) {
    const _id = req.body._id;
    const Event = await EventModel.findById({_id: _id});
    if (!Event) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Event});
    }
  };

  static async add(req, res) {
    try {
      const Event = new EventModel(req.body);
      await Event.save();
      res.status(200).json({state: 'success', content: Event});
    } catch (e) {
      res.status(500).json({state: 'error', error: e});
    }
  };

  static async update(req, res) {
    // get Id of Event
    const _id = req.body._id;
    // check exist
    const Event = await EventModel.findById({_id_: _id});
    // process result
    if (!Event) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Event not found'});
    }
    else {
      // update code
      const result = await EventModel.findOneAndUpdate({_id: _id}, req.body);
      // process update
      if (!result) {
        // update fail
        res.status(500).json({state: 'error', error: 'Something went wrong'});
      }
      else {
        // update successfully
        const updateEvent = await EventModel.findById({_id: _id});
        res.status(200).json({state: 'success', content: updateEvent});
      }
    }

  };

  static async delete(req, res) {
    // get id
    const _id = req.body._id;
    // check exist
    const Event = await EventModel.findById({_id_: _id});
    // process result
    if (!Event) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Event not found'});
    }
    else {
      const result = await EventModel.remove({_id: _id});
      if (!result) {
        res.status(500).json({state: 'error', error: 'Delete did not complete'});
      }
      else {
        res.status(200).json({state: 'success', content: _id});
      }
    }
  }

  /*------------------------------------------------ POST Controller -------------------------------------------------*/

  static async post_getAll(req, res) {
    const Events = await EventModel.find();
    if (!Events) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Events});
    }
  };

  static async post_getById(req, res) {
    const _id = req.body._id;
    const Event = await EventModel.findById({_id: _id});
    if (!Event) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Event});
    }
  };

  static async post_add(req, res) {
    try {
      const Event = new EventModel(req.body);
      await Event.save();
      res.status(200).json({state: 'success', content: Event});
    } catch (e) {
      res.status(500).json({state: 'error', error: e});
    }
  };

  static async post_update(req, res) {
    // get Id of Event
    const _id = req.body._id;
    // check exist
    const Event = await EventModel.findById({_id_: _id});
    // process result
    if (!Event) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Event not found'});
    }
    else {
      // update code
      const result = await EventModel.findOneAndUpdate({_id: _id}, req.body);
      // process update
      if (!result) {
        // update fail
        res.status(500).json({state: 'error', error: 'Something went wrong'});
      }
      else {
        // update successfully
        const updateEvent = await EventModel.findById({_id: _id});
        res.status(200).json({state: 'success', content: updateEvent});
      }
    }

  };

  static async post_delete(req, res) {
    // get id
    const _id = req.body._id;
    // check exist
    const Event = await EventModel.findById({_id_: _id});
    // process result
    if (!Event) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Event not found'});
    }
    else {
      const result = await EventModel.remove({_id: _id});
      if (!result) {
        res.status(500).json({state: 'error', error: 'Delete did not complete'});
      }
      else {
        res.status(200).json({state: 'success', content: _id});
      }
    }
  }

  /*----------------------------------------------- SeparatedWork controller -------------------------------------------------*/
  static async separatedWork_getAll(req, res) {
    const Events = await EventModel.find();
    if (!Events) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Events});
    }
  };

  static async separatedWork_getById(req, res) {
    const _id = req.body._id;
    const Event = await EventModel.findById({_id: _id});
    if (!Event) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Event});
    }
  };

  static async separatedWork_add(req, res) {
    try {
      const Event = new EventModel(req.body);
      await Event.save();
      res.status(200).json({state: 'success', content: Event});
    } catch (e) {
      res.status(500).json({state: 'error', error: e});
    }
  };

  static async separatedWork_update(req, res) {
    // get Id of Event
    const _id = req.body._id;
    // check exist
    const Event = await EventModel.findById({_id_: _id});
    // process result
    if (!Event) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Event not found'});
    }
    else {
      // update code
      const result = await EventModel.findOneAndUpdate({_id: _id}, req.body);
      // process update
      if (!result) {
        // update fail
        res.status(500).json({state: 'error', error: 'Something went wrong'});
      }
      else {
        // update successfully
        const updateEvent = await EventModel.findById({_id: _id});
        res.status(200).json({state: 'success', content: updateEvent});
      }
    }

  };

  static async separatedWork_delete(req, res) {
    // get id
    const _id = req.body._id;
    // check exist
    const Event = await EventModel.findById({_id_: _id});
    // process result
    if (!Event) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Event not found'});
    }
    else {
      const result = await EventModel.remove({_id: _id});
      if (!result) {
        res.status(500).json({state: 'error', error: 'Delete did not complete'});
      }
      else {
        res.status(200).json({state: 'success', content: _id});
      }
    }
  }
}
