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
    const _id = req.params._idEvent;
    const Event = await EventModel.findById({_id: _id});
    if (!Event) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Event.posts});
    }
  };

  static async post_getById(req, res) {
    const _id = req.params._idEvent;
    const Event = await EventModel.findById({_id: _id});
    console.log(Event);
    if (!Event) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      const post = Event.posts.find(req.body._id);
      res.json({state: 'success', content: post});
    }
  };

  static async post_add(req, res) {
    try {
      const _id = req.params._idEvent;
      const Event = await EventModel.findById({_id: _id});
      Event.posts.push(req.body);
      await Event.save();
      const updatedEvent = await EventModel.findById({_id: _id});
      res.status(200).json({state: 'success', content: updatedEvent.posts});
    } catch (e) {
      res.status(500).json({state: 'error', error: e});
    }
  };

  static async post_update(req, res) {
    // get Id of Event
    const _id = req.params._idEvent;
    // check exist
    const Event = await EventModel.findById({_id: _id});
    // process result
    if (!Event) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Event not found'});
    }
    else {
      const postIndex = Event.posts.findIndex(post => post._id === req.body._id);
      Event.posts[postIndex] = req.body;
      // update code
      const result = await EventModel.findOneAndUpdate({_id: _id}, Event);
      // process update
      if (!result) {
        // update fail
        res.status(500).json({state: 'error', error: 'Something went wrong'});
      }
      else {
        // update successfully
        const UpdateEvent = await EventModel.findById({_id: _id});
        const post = UpdateEvent.posts.find(post => post._id === req.body._id);
        res.json({state: 'success', content: post});
      }
    }

  };

  static async post_delete(req, res) {
    // get id
    const _id = req.params._idEvent;
    // check exist
    const Event = await EventModel.findById({_id_: _id});
    // process result
    if (!Event) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Event not found'});
    }
    else {
      const postIndex = Event.posts.findIndex(post => post._id === req.body._id);
      Event.posts.splice(postIndex, 1);
      const updateEvent = await EventModel.findOneAndUpdate({_id: _id}, Event);
      if (!updateEvent) {
        res.status(500).json({state: 'error', error: 'Delete did not complete'});
      }
      else {
        res.status(200).json({state: 'success', content: req.body._id});
      }
    }
  }

  /*----------------------------------------------- SeparatedWork controller -------------------------------------------------*/
  static async separatedWork_getAll(req, res) {
    const _id = req.params._idEvent;
    const Event = await EventModel.find({_id: _id});
    if (!Event) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Event.works});
    }
  };

  static async separatedWork_getById(req, res) {
    const _id = req.params._idEvent;
    const Event = await EventModel.findById({_id: _id});
    if (!Event) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      const work = Event.works.find(work => work._id === req.body._id);
      res.json({state: 'success', content: work});
    }
  };

  static async separatedWork_add(req, res) {
    try {
      const _id = req.params._idEvent;
      const Event = await EventModel.findById({_id: _id});
      Event.posts.push(req.body);
      await Event.save();
      const updatedEvent = await EventModel.findById({_id: _id});
      res.status(200).json({state: 'success', content: updatedEvent.works});
    } catch (e) {
      res.status(500).json({state: 'error', error: e});
    }
  };

  static async separatedWork_update(req, res) {
    // get Id of Event
    const _id = req.params._idEvent;
    // check exist
    const Event = await EventModel.findById({_id_: _id});
    // process result
    if (!Event) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Event not found'});
    }
    else {
      const workIndex = Event.works.findIndex(work => work._id === req.body._id);
      Event.works[workIndex] = req.body;
      // update code
      const result = await EventModel.findOneAndUpdate({_id: _id}, Event);
      // process update
      if (!result) {
        // update fail
        res.status(500).json({state: 'error', error: 'Something went wrong'});
      }
      else {
        // update successfully
        const UpdateEvent = await EventModel.findById({_id: _id});
        const work = UpdateEvent.works.find(work => work._id === req.body._id);
        res.json({state: 'success', content: work});
      }
    }

  };

  static async separatedWork_delete(req, res) {
    // get id
    const _id = req.params._idEvent;
    // check exist
    const Event = await EventModel.findById({_id_: _id});
    // process result
    if (!Event) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Event not found'});
    }
    else {
      const workIndex = Event.posts.findIndex(work => work._id === req.body._id);
      Event.work.splice(workIndex, 1);
      const updateEvent = await EventModel.findOneAndUpdate({_id: _id}, Event);
      if (!updateEvent) {
        res.status(500).json({state: 'error', error: 'Delete did not complete'});
      }
      else {
        res.status(200).json({state: 'success', content: req.body._id});
      }
    }
  }
}
