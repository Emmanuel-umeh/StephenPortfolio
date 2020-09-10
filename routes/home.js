const router = require("express").Router()
var nodemailer = require('nodemailer');//importing node mailer


router.get('/', (req,res)=>{
    res.render("Home.ejs")
})

router.get("/about", (req, res) => {
    res.render("About.ejs")
})


router.get("/portfolio", (req, res) => {
    res.render("portfolio.ejs")
})
router.get("/contact", (req, res) => {
    res.render("Contact")
})

module.exports = router