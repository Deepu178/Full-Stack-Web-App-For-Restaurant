const Menu = require('../models/menu')

exports.getMenuByRestaurantName=(req,res)=>{
    const filter = {menu:req.params.rName}
    Menu.find(filter).then(result=>{
        res.status(200).json({ message:"MealTypes fetched successfully" , menu:result})
    }).catch(e=>
        res.status(500).json({ message:"Error in DB" , error:e})
 
        )

}