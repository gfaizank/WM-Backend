const express = require('express')
const router = express.Router()

const {register, login, addtocart, removefromcart, unpaidservices, paidservices} = require("../controllers/clients")

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/:email/addtocart').patch(addtocart)
router.route('/:email/removefromcart').delete(removefromcart)
router.route('/:email/unpaidservices').get(unpaidservices)
router.route('/:email/paidservices').get(paidservices)

module.exports = router  