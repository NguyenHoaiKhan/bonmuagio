import {TaskModel} from "../Models/TaskModel";

export class TaskController {

  static async getAll(req, res) {
    const Tasks = await TaskModel.find();
    if (!Tasks) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Tasks});
    }
  };

  static async getById(req, res) {
    const _id = req.body._id;
    const Task = await TaskModel.findById({_id: _id});
    if (!Task) {
      res.json({state: 'error', error: 'Somethings went wrong'});
    }
    else {
      res.json({state: 'success', content: Task});
    }
  };

  static async add(req, res) {
    try {
      const Task = new TaskModel(req.body);
      await Task.save();
      res.status(200).json({state: 'success', content: Task});
    } catch (e) {
      res.status(500).json({state: 'error', error: e});
    }
  };

  static async update(req, res) {
    // get Id of Task
    const _id = req.body._id;
    // check exist
    const Task = await TaskModel.findById({_id_: _id});
    // process result
    if (!Task) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Task not found'});
    }
    else {
      // update code
      const result = await TaskModel.findOneAndUpdate({_id: _id}, req.body);
      // process update
      if (!result) {
        // update fail
        res.status(500).json({state: 'error', error: 'Something went wrong'});
      }
      else {
        // update successfully
        const updateTask = await TaskModel.findById({_id: _id});
        res.status(200).json({state: 'success', content: updateTask});
      }
    }

  };

  static async delete(req, res) {
    // get id
    const _id = req.body._id;
    // check exist
    const Task = await TaskModel.findById({_id_: _id});
    // process result
    if (!Task) {
      // fail to update
      res.status(500).json({state: 'error', error: 'Task not found'});
    }
    else {
      const result = await TaskModel.remove({_id: _id});
      if (!result) {
        res.status(500).json({state: 'error', error: 'Delete did not complete'});
      }
      else {
        res.status(200).json({state: 'success', content: _id});
      }

    }

  }
}
