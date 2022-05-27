const app=require('./index')
const dot=require('dotenv')
dot.config({path:'./config.env'})
port=process.env.PORT||5000
app.listen(port,()=>{console.log(`server is ruunig at ${port}`)})