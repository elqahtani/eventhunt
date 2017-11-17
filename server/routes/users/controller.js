const mongoose = require("mongoose")

const User = require("../users/model")

module.exports = {
  destroy: (req, res, next) => {
    mongoose.connection.db.dropCollection("users", (err, result) => {
      if (err) res.send(err)
      else res.send("Collection users dropped")
    })
  },

  get: (req, res, next) => {
    User.find({})
      .select("-password -role")
      .exec((err, users) => {
        if (err) res.send(err)
        else res.send(users)
      })
  },

  getOne: (req, res, next) => {
    const user = User.findOne(
      {
        id: req.params.id
      },
      (err, user) => {
        if (err) res.send(err)
        else res.send(user)
      }
    )
  }
}
