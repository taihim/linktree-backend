const express = require('express')
const dataController = require('../controllers/data')

const router = express.Router()

router.post("/updateData", dataController.updateData)
router.get("/getData", dataController.getData)

module.exports = router;