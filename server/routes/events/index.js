const express = require("express")
const router = express.Router()

const event = require("./controller")

// router.delete("/destroy", event.destroy)

router.get("/", event.get)
router.get("/:id", event.getOne)
router.post("/", event.post)
// router.delete("/", event.delete)
// router.delete("/:id", event.deleteOne)
// router.put("/:id", event.putOne)

module.exports = router
