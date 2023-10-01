const express = require('express')
const router = express.Router()

const services = require("../controllers/services")

router.route('/services').get(services)

module.exports = router  