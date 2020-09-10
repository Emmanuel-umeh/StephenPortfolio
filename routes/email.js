const router = require("express").Router()
var nodemailer = require('nodemailer');//importing node mailer

router.post("/", (req,res)=>{
    console.log("pass ", process.env.PASSWORD)

    console.log("body ", req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.USERNAME,//replace with your email
        pass: process.env.PASSWORD//replace with your password
        }
        });
})

module.exports = router