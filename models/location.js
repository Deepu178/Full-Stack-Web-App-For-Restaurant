const mongoose=require("mongoose")

const locationSchema= new mongoose.Schema({
    name:{
        type:String,
    required:true
},
content:{
    type:String,
    required:true
}, 
image:{
    type:String,
    required:true
}
})



module.exports=mongoose.model("Locations", locationSchema, "location")
