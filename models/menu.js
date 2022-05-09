const mongoose=require("mongoose")

const menuSchema= new mongoose.Schema({
    restaurantId:{
        type:String,
        required:true
    }, 
    itmePrice:{
        type:Number,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    itemDescription:{
        type:String,
        required:true
    },
    isVeg:{
        type:Boolean,
        required:true
    },
    restaurantName:{
        type:String,
        required:true
    }
})



module.exports=mongoose.model("Menu",menuSchema, "menu")