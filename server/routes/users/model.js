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
  name: String,
  title: String,
  bio: String,
  role: {
    type: String,
    select: false
  }
})

UserSchema.plugin(AutoIncrement, { id: "user_id", inc_field: "id" })

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel
