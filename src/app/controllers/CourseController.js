const Course=require('../models/Course')
const{mongooseToObject}=require('../../util/mongoose')

class CourseController{

    //[GET] /courses/slug
    show(req,res,next){
        Course.findOne({
            slug:req.params.slug
        })
        .then(course=>{
            res.render('courses/show',{course: mongooseToObject(course)})
        })
        .catch(next)
    }

    //[get] /courese/create
    create(req,res,next){
        res.render('courses/create')
    }

    //[post] /courese/store
    store(req,res,next){
      const course = new Course(req.body)
      course.save()
        .then(() =>res.redirect('/'))
        .catch(error =>{
            
        })

        // res.json(req.body)
    }

        //[get] courses/:id/edit
        edit(req,res,next){
            Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course:mongooseToObject(course)
            }))
            .catch(next)
            
        }
        
        //[put] courses/:id
        update(req,res,next){
            Course.updateOne({ _id:req.params.id},req.body)
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next)
        }

         //[delete] courses/:id
         delete(req,res,next){
            Course.deleteOne({ _id:req.params.id},req.body)
            .then(()=> res.redirect('back'))
            .catch(next)
        }
}

module.exports=new CourseController()
