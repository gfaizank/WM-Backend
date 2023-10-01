const express = require('express')
const router = express.Router()

const subscribe = require("../controllers/subscribe")
const contactus = require("../controllers/contactus")


router.route('/subscribe').post(subscribe)
router.route('/contactus').post(contactus)


module.exports = router  