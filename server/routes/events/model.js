const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AutoIncrement = require("mongoose-sequence")(mongoose)

const EventSchema = mongoose.Schema({
  title: String,
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

EventSchema.plugin(AutoIncrement, {
  id: "question_id",
  inc_field: "id"
})

const EventModel = mongoose.model("Event", EventSchema)

module.exports = EventModel
