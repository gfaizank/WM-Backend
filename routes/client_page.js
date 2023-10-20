const express = require('express')
const router = express.Router()

const {register, login, addtocart} = require("../controllers/clients")

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/:email/addtocart').patch(addtocart)

module.exports = router  