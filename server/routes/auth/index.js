const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.get("/", controller.get)

router.post("/signup", controller.signup)

router.post("/login", controller.login)

router.post("/check", controller.checkToken)

router.post("/checkAuthorized", controller.isAuthorized, (req, res) => {
  res.send("ONLY WHEN AUTHORIZED")
})

module.exports = router