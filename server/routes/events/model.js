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
  description:{
  	type: String,
  },
  image: {
  	type: String,
  	default: ""
  },
  category: {
  	type: String,
  	default: ""
  },
  schedule: {
  	date: {
  		type: Date
  	},
  	timezone: {
  		type: String,
  		default: "GMT+7"
  	},
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
