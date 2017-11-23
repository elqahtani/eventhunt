process.env.NODE_ENV !== "production" && require("dotenv").config()

const cors = require("cors")
const express = require("express")
const path = require("path")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")

const mongoose = require("mongoose")
const jwt = require("jsonwebtoken") // used to create, sign, and verify tokens

// Set up mongoose connection

mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE, {
  useMongoClient: true
}) // connect to MongoDB


// var mongoDB = 'mongodb://localhost/eventhunt';
// mongoose.connect(mongoDB, {
//     useMongoClient: true
// });
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const index = require("./routes/index")
const auth = require("./routes/auth")
const users = require("./routes/users")
const events = require("./routes/events")

const app = express()

app.use(cors())
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, "public")))

app.use("/", index)
app.use("/auth", auth)
app.use("/api/users", users)
app.use("/api/events", events)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
