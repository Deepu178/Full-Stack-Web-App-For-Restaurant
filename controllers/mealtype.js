const Mealtypes = require('../models/mealtype')

exports.getAllMealtypes=(req,res)=>{
    Mealtypes.find().then(result=>{
        res.status(200).json({ message:"MealTypes fetched successfully" , mealtypes:result})
    }).catch(e=>
        res.status(500).json({ message:"Error in DB" , error:e})
 
        )

}