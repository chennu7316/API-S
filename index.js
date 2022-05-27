const exp=require('express')
const app=exp()
const fs=require('fs')
app.use(exp.json())

console.log(process.env.PORT)
const tourroutes=require('./routes/tourRoutes')
app.use(exp.static(`${__dirname}/public`))
app.use('/tours',tourroutes)
//console.log(process)
module.exports=app