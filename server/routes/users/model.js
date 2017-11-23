const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AutoIncrement = require("mongoose-sequence")(mongoose)

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    select: false
  },
  profile: {
    avatar:{
      type: String,
      default: "https://pickaface.net/gallery/avatar/ppic.jpg"
    }, 
    description: {
      type: String,
      default: "I am Event Organizer"
    },
    location: {
      type: String,
      default: "Yogyakarta"
    },
  },
  name: String,
  title: String,
  bio: String,
  role: {
    type: String,
    select: false
  },
  links: {
    website: {
      type: String,
      default: "http://test.com"
    },
    facebook: {
      type: String,
      default: "http://facebook.com/eventhunt"
    },
    twitter: {
      type: String,
      default: "http://twitter.com/eventhunt"
    },
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  events: {
    submitted: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event"
      }
    ]
  }
})

UserSchema.plugin(AutoIncrement, { id: "user_id", inc_field: "id" })

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel
