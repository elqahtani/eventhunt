const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AutoIncrement = require("mongoose-sequence")(mongoose)

const EventSchema = mongoose.Schema({
  title: {
  	type: String,
  },	
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  description:{
  	type: String,
  },
  image: {
  	type: Schema.Types.Mixed

  },
  imageThumbnail: {
    type: String,
    default: "https://raw.githubusercontent.com/elqahtani/elqahtani.github.io/master/img/thumbnail.jpg"
  },
  imageDescription: {
    type: String,
    default: "https://raw.githubusercontent.com/elqahtani/elqahtani.github.io/master/img/evendetails.jpg"
  },
  category: {
  	type: String,
  	default: ""
  },
  date: {
  		type: String,
  	},
  time: {
  		type: String,
  		default: "GMT+7"
    },
  originWebsite: {
    type: String,
  },
  location: {
  	type: String,
  	default: ""
  }
})

EventSchema.plugin(AutoIncrement, {
  id: "event_id",
  inc_field: "id"
})

const EventModel = mongoose.model("Event", EventSchema)

module.exports = EventModel
