import * as mongoose from 'mongoose';

// declare schema
const Schema = mongoose.Schema;

// --------------- declare schema tag ----------------------------------------
const TagSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  _idParents: String
});

// ----------------- define model ---------------------------------------------
const TagModel = mongoose.model('tag', TagSchema);

export {TagModel};
