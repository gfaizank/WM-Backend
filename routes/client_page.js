const express = require('express')
const router = express.Router()

const {register, login, getlogin, logout, addtocart, removefromcart, incart_services} = require("../controllers/clients")

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/getlogin').get(getlogin)
router.route('/logout').get(logout)
router.route('/:email/addtocart').patch(addtocart)
router.route('/:email/removefromcart').delete(removefromcart)
router.route('/:email/incartservices').get(incart_services)
//router.route('/:email/paidservices').get(paidservices)

module.exports = router  