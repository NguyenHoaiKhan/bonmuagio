import * as mongoose from 'mongoose';

// declare schema

const Schema = mongoose.Schema;

// declare task schema

const TaskSchema = new  Schema({
  title: String
});


// define model

const TaskModel = mongoose.model('task', TaskSchema);

// export

module.exports = TaskModel;
