

// const restaurants=require('../models/restaurant.json')

// exports.getAllCoachings=(req,res)=>{
//     res.status(200).json({
//         message:"All locations fetched successfully", 
//         locationList:restaurants
//     })
// }


// // exports.getAllCoachingsByName=(req, res)=>{
// //     const filteredRestaurants=restaurants.filter((item)=>item.name=req.params.name);
// //     const name=req.params.name;
// //     res.status(200).json({
// //         message:"Locations fetched successfully with specific name",
// //         locationsList:filteredRestaurants
// //     })
// // }
// // exports.getAllCoachingsByName=(req, res)=>{

// //     const filteredRestaurants=restaurants.filter((item)=>item.name=req.params.name);
// //     filteredRestaurants.length ?
// //     res.status(200).json({
// //         message:"Locations fetched successfully with specific name",
// //         locationsList:filteredRestaurants
// //     }):
// //     res.status(200).json({
// //         message:"Locations fetched successfully with zero records",
    
// //     })
// // }

// // exports.getAllCoachingsByName=(req, res)=>{
// //     const filteredRestaurants=restaurants.filter((item)=>item.name=req.params.name);
// //     const name= req.params.name
// //     res.status(200).json({
// //         message:"Locations fetched successfully with specific name",
// //     locationsList:filteredRestaurants
// //     })
// // }

// exports.getAllCoachingsByName=(req, res)=>{
//     const filteredRestaurants=restaurants.filter((item)=>item.name=req.params.name);
//     const name=req.params.name
//     res.status(200).json({
//         message:"Locations fetched successfully with specific name",
//         locationsList:filteredRestaurants
//     })
// }

// // exports.addRestaurant=(req, res)=>{
// //     restaurants.push(req.body)
    
// //     res.status(200).json({
// //         message:"Post data has been added successfully",
// //         locationsList:restaurants
// //     })
// // }

// // exports.addRestaurants=(req, res)=>{
// //     restaurants.push(req.body)
// //     res.status(200).json({
// //         message:"Post data has been added successfully",
// //         newList:restaurants
// //     })
// // }
// // exports.addRestaurants=(req, res)=>{
// //     restaurants.push(req.body)
// //     res.status(200).json({
// //         message:"Post data has been addedd successfully",
// //         newList:restaurants
// //     })
// // }

// // exports.addRestaurants=(req, res)=>{
// //     restaurants.push(req.body)
// //     res.status(200).json({
// //         message:"Post data has been added successfully",
// //         newList:restaurants
// //         })
// // }
// // exports.addRestaurants=(req, res)=>{
// //     restaurants.push(req.body)
// //     res.status(200).json({
// //         message:"Post data has been added successfully",
// //         newList:restaurants
// //     })
// // }

// exports.addRestaurants=(req, res)=>{
//     restaurants.push(req.body)
// //     FileSystem.writefile(addRestaurants, function(err) {   
// //     if(err) {
// //         return console.log(err);
// //     }
// //     console.log(addRestaurants);
// // });
//     res.status(200).json({
//         message:"Post data has been added successfully",
//         newList:restaurants
//     })
// }

// // exports.updateRestaurants=(req, res)=>{
// //     const index = restaurants.findIndex((item)=>item.name==req.body.name)
// // restaurants[index].city=req.body.city
// // res.status(200).json({
// //     message:"Restaurants updated successfully",
// //     newList:restaurants
// // })
// // }


// // exports.updateRestaurants=(req,res)=>{
// //     const index=restaurants.findIndex((item)=>item.name==req.body.name)
// //     restaurants[index].city=req.body.city
// //     res.status(200).json({
// //         message:"restaurants updated successfully" , 
// //         restaurantList: restaurants
// //     })
// // }


// // exports.updateRestaurants=(req,res)=>{
// //     const index=restaurants.findIndex((item)=>item.name==req.body.name)
// //     restaurants[index].city=req.body.city
// //     res.status(200).json({
// //         message:"Restaurants data updated successfully",
// //         restaurantsList:restaurants
// //     })
// // }


// // exports.updateRestaurants=(req, res)=>{
// //     const index=restaurants.findIndex((item)=>item.name==req.body.name)
// //     restaurants[index].city=req.body.city
// //     res.status(200).send({
// //         message:"Restaurants data updated successfully", 
// //         newList:restaurants
// //     })
// // }


// exports.updateRestaurants=(req, res)=>{
//     const index=restaurants.findIndex((item)=>item.name==req.body.name)
//     restaurants[index].city=req.body.city
//     res.status(200).json({
//         message:"Restaurants data updated successfully",
//         newList:restaurants
//     })
// }


// // exports.deleteRestaurants=(req, res)=>{
// //     const index=restaurants.findIndex((item)=>item.id==req.params.id)
// //     restaurants.splice(index,1)
// //     res.status(200).send({
// //         message:"Restaurant data deleted successfully",
// //         newList:restaurants
// //     })
// // }


// exports.deleteRestaurants=(req, res)=>{
//     const index=restaurants.findIndex((item)=>item.id==req.params.id)
//     restaurants.splice(index, 1);
//     res.status(200).json({
//         message:"Restaurants data has been deleted successfully",
//         newList:restaurants
//     })
// }


// const restaurants =require('../models/restaurant.json')

// exports.getAllRestaurants=(req, res)=>{
//     res.status(200).json({
//         message:"Get all list of restaurants",
//         list:restaurants
//     })
// }


const restaurants = require('../models/restaurant.json')

exports.getAllRestaurants=(req, res)=>{
    res.status(200).json({
        message:"get all list of restaurants",
        list:restaurants
    })
}


// exports.getAllRestaurantsByName=(req, res)=>{
//     const filteredRestaurants=restaurants.filter((item)=>item.name==req.params.name);
//     filteredRestaurants.length ?
// res.status(200).json({
//     message:"Get all restaurant with specific name",
//     list:filteredRestaurants
// }):
// res.status(200).json({
//     message:"Fetched restaurants with zero records"
// })
// }

exports.getRestaurantByName=(req, res)=>{
    const filteredRestaurants=restaurants.filter((item)=>item.name==req.params.name);
    const name=req.params.name
    filteredRestaurants.length ?
    res.status(200).json({
        message:"Fetched all restauratns with specific name",
        list:filteredRestaurants
     })
:
    res.status(200).json({
        message:"Fetched all restaurant with zero records"
})
}


// exports.addRestaurant=(req, res)=>{
//     restaurants.push(req.body)
//     res.status(200).json({
//         message:"Added new restaurants successfully",
//         list:restaurants
//     })
// }


exports.addRestaurant=(req,res)=>{
    restaurants.push(req.body)
    res.status(200).json({
        message:"Added new restaurants successfully",
        list:restaurants
    })
}


// exports.updateRestaurant=(req, res)=>{
//     const index=restaurants.findIndex((item)=>item.name==req.body.name)
// restaurants[index].city=req.body.city
// res.status(200).json({
//     message:"Updated new restaurants successfully",
//     list:restaurants
// })
// }


exports.updateRestaurant=(req, res)=>{
    const index=restaurants.findIndex((item)=>item.name==req.body.name)
    restaurants[index].city=req.body.city
    res.status(200).json({
        message:"Updated new restaurant successfully",
        list:restaurants
    })
}



// exports.deleteRestaurant=(req, res)=>{
//     const index=restaurants.findIndex((item)=>item.id==req.params.id)
//     restaurants.splice(index, 1)
//     res.status(200).json({
//         message:"Restaurant data has been deleted successfully",
//         list:restaurants
//     })
// }

exports.deleteRestaurant=(req, res)=>{
    const index=restaurants.findIndex((item)=>item.id==req.params.id)
    restaurants.splice(index, 1)
    res.status(200).json({
        message:"Restaurant data has been deleted successfully",
        list:restaurants
    })
}