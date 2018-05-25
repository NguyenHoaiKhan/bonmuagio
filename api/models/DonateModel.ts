import * as mongoose from 'mongoose';

// declare schema

const Schema = mongoose.Schema;

// declare Donate Schema

const DonateSchema = new Schema({
  _idEvent: {
    type: String,
    required: true
  },
  _idItem: {
    type: String,
    required: true
  },
  sponsor: String,
  quantity: Number,
  _idContactMember: {
    type: String,
    required: true
  }
});

// define donate model

const DonateModel = mongoose.model('donate', DonateSchema);

// export

module.exports = DonateModel;

