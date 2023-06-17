
const express=require('express')
const restaurantRoutes=require('./routes/restaurant')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
// const userRoutes = require('./routes/userLogin');
const locationRoutes=require('./routes/location')
const mealtypeRoutes=require('./routes/mealtype')
const menuRoutes=require('./routes/menu')
const paymentRoutes=require('./routes/pay')
const cors=require('cors');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

//create server
const app=express()


//create constant
const port=process.env.PORT || 8000
const log=console.log

const DB = process.env.DATABASE
//connect to mongodb
//const MONGO_URI="mongodb://localhost/zomato";

mongoose.connect(DB, {
    useNewUrlParser:true,
}).then(()=>{
    log("connection successful")
}).catch((err)=>log(err))


//add middleware
app.use(cors());
//app.use(bodyParser.json())
// app.use('/userProfile', userRoutes)
app.use('/restaurant', restaurantRoutes)
app.use('/location', locationRoutes)
app.use('/mealtypes', mealtypeRoutes)
app.use('/filter', restaurantRoutes)
app.use('/menu/',menuRoutes)
app.use('/pay', paymentRoutes)


// //heroku configurations
// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("zomato/build"))
//     const path = require("path")
//     app.get("*", (req, res)=>{
//         res.sendFile(path.resolve(__dirname, "zomato", "build", "index.html"))
//     })
// }


//listen
app.listen(port,()=>{
    log('This app is running on port: ${port}')
})