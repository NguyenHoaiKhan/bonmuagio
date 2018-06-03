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
    const _id = req.params._id;
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
    const Event = await EventModel.findById({_id: _id}, {posts: 1});
    if (!Event) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      const post = await Event.posts.id(req.body._id);
      res.json({state: 'success', content: post});
    }
  };

  static async post_add(req, res) {
    try {
      const _id = req.params._idEvent;
      const Event = await EventModel.findById({_id: _id});
      const post = await Event.posts.create(req.body);
      //const updatedEvent = await EventModel.findById({_id: _id});
      res.status(200).json({state: 'success', content: post});
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
      const posts = Event.posts;
      const postUpdateIndex = posts.findIndex(post => post._id = req.body._id);
      posts[postUpdateIndex] = req.body;
      Event.posts = posts;
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
        const post = await UpdateEvent.posts.id(req.body._id);
        res.json({state: 'success', content: post});
      }
    }
  };

  static async post_delete(req, res) {
    // get id
    const _id = req.params._idEvent;
    // check exist
    const Event = await EventModel.findById({_id: _id});
    // process result
    if (!Event) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Event not found'});
    }
    else {
      if (await Event.posts.id(req.body._id)) {
        const post = await Event.posts.id(req.params._id).remove();
        await Event.save();
        if (!post) {
          res.status(500).json({state: 'error', error: 'Delete did not complete'});
        }
        else {
          res.status(200).json({state: 'success', content: req.body._id});
        }
      }
      else {
        res.status(500).json({state: 'error', error: 'Can not find this post'});
      }
    }
  }

  /*----------------------------------------------- SeparatedWork controller -------------------------------------------------*/
  static async separatedWork_getAll(req, res) {
    const _id = req.params._idEvent;
    const Event = await EventModel.findById({_id: _id});
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
      const work = await Event.works.id(req.body._id);
      res.json({state: 'success', content: work});
    }
  };

  static async separatedWork_add(req, res) {
    try {
      const _id = req.params._idEvent;
      const Event = await EventModel.findById({_id: _id});
      const work = await Event.works.create(req.body);
      res.status(200).json({state: 'success', content: work});
    } catch (e) {
      res.status(500).json({state: 'error', error: e});
    }
  };

  static async separatedWork_update(req, res) {
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
      const works = Event.works;
      const postUpdateIndex = works.findIndex(post => post._id = req.body._id);
      works[postUpdateIndex] = req.body;
      Event.works = works;
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
        const post = await UpdateEvent.posts.id(req.body._id);
        res.json({state: 'success', content: post});
      }
    }

  };

  static async separatedWork_delete(req, res) {
    // get id
    const _id = req.params._idEvent;
    // check exist
    const Event = await EventModel.findById({_id: _id});
    // process result
    if (!Event) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Event not found'});
    }
    else {
      if (await Event.works.id(req.params._id)) {
        const post = await Event.posts.id(req.body._id).romove();
        await Event.save();
        if (!post) {
          res.status(500).json({state: 'error', error: 'Delete did not complete'});
        }
        else {
          res.status(200).json({state: 'success', content: req.body._id});
        }
      }
      else {
        res.status(500).json({state: 'error', error: 'Can not find this work'});
      }
    }
  }
}
