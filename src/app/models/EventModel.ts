export class EventModel {
  _id: String;
  name: String;
  startTime: Date;
  finishTime: Date;
  thumbnail: String;
  location: String;
  description: String;
  posts: {
    _id: String,
    title: String,
    content: String,
    postedTime: Date,
    _idUser: String,
    images: String[],
    tags: String[]
  };
  _idPinPost: String;
  cost: number;
  works: {
    _id: String,
    title: String,
    description: String,
    quantity: Number,
    members: String[],
  }

  constructor() {
  };

}
