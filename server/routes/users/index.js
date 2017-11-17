const express = require("express")
const router = express.Router()

const controller = require("./controller")

router.delete("/destroy", controller.destroy)

router.get("/", controller.get)
router.get("/:id", controller.getOne)

// router.delete("/", controller.delete)
// router.put("/:id", controller.putOne)

module.exports = router
