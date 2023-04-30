const Course=require('../models/Course')
const{mutilpleMongooseToObject}=require('../../util/mongoose')

class SiteController{

    //get/news
    index(req,res,next){
      Course.find({})
        .then(courses =>{
      
        res.render('home',{
          courses:mutilpleMongooseToObject(courses)
        })
        })
        .catch(error => next(error))
    } 
   

    //[GET] /news/sreach
    sreach(req,res){
       res.render('sreach')
    }
}

module.exports=new SiteController
