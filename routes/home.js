const router = require("express").Router()



router.get('/', (req,res)=>{
    res.render("Home.ejs")
})

router.get("/about", (req, res) => {
    res.render("About.ejs")
})

router.get("/fingerly-harthery-divisions", (req, res) => {
    res.render("Fingerly.ejs")
})
router.get("/training-division", (req, res) => {
    res.render("Training.ejs")
})

router.get("/portfolio", (req, res) => {
    res.render("portfolio.ejs")
})
router.get("/contact", (req, res) => {
    res.render("Contact")
})

module.exports = router