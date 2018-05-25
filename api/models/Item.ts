import * as mongoose from 'mongoose';

// declare schema

const Schema = mongoose.Schema;

//declare item schema

const ItemSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  exchangeValue: Number,
  unit: {
    required: true,
    type: String
  }
});

// define model

const ItemModel = mongoose.model('item', ItemSchema);

//export

module.exports = ItemModel;
