const express = require('express')
const router = express.Router()

const services = require("../controllers/services")
const review = require("../controllers/review")

router.route('/services').get(services)
router.route('/review').get(review)

module.exports = router  