const express=require('express')
const router=express.Router()
const siteController = require("../app/controllers/SiteController")

router.get('/sreach',siteController.sreach)
router.get('/',siteController.index)


module.exports=router
