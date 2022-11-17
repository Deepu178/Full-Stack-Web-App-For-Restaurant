


const express=require('express')
const restaurantRoutes=require('./routes/restaurant')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const locationRoutes=require('./routes/location')
const mealtypeRoutes=require('./routes/mealtype')
const menuRoutes=require('./routes/menu')
const paymentRoutes=require('./routes/pay')
var cors=require('cors')

//create server
const app=express()


//create constant
const PORT=7575
const log=console.log


//connect to mongodb
const MONGO_URI="mongodb://localhost/zomato";

mongoose.connect(MONGO_URI,()=>{
    console.log('MongoDB connected....')
},e=>console.log('error occured', e))


//add middleware
app.use(cors())
app.use(bodyParser.json())
app.use('/restaurant', restaurantRoutes)
app.use('/location', locationRoutes)
app.use('/mealtypes', mealtypeRoutes)
app.use('/filter', restaurantRoutes)
app.use('/menu/',menuRoutes)
app.use('/pay', paymentRoutes)


//heroku configurations
if(process.env.NODE_ENV == "production"){
    app.use(express.static("zomato/build"))
    const path = require("path")
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "zomato", "build", "index.html"))
    })
}


//listen
app.listen(PORT,()=>{
    log('This app is running on port: ${PORT}')
})