
const newsRouter = require('./news')
const siteRouter = require('./site')
const coursesRouter = require('./courses')
const meRouter = require('./me')
function router(app){

    app.use('/news',newsRouter)
    app.use('/courses',coursesRouter)
    app.use('/',siteRouter)
    app.use('/me',meRouter)
   

    // app.get('/', (_req, res) => {
    //     res.render('home')
    //   })
      
      
    //   app.get('/sreach', (req, res) => {
    //     res.render('sreach')
    //   })
    //   app.post('/sreach', (req, res) => {
    //     res.render('sreach')
    //   })
      
}
module.exports=router