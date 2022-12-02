const restaurants = require('../models/restaurant.json')

exports.getAllRestaurants=(req, res)=>{
    res.status(200).json({
        message:"get all list of restaurants",
        list:restaurants
    })
}

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

exports.addRestaurant=(req,res)=>{
    restaurants.push(req.body)
    res.status(200).json({
        message:"Added new restaurants successfully",
        list:restaurants
    })
}

exports.updateRestaurant=(req, res)=>{
    const index=restaurants.findIndex((item)=>item.name==req.body.name)
    restaurants[index].city=req.body.city
    res.status(200).json({
        message:"Updated new restaurant successfully",
        list:restaurants
    })
}

exports.deleteRestaurant=(req, res)=>{
    const index=restaurants.findIndex((item)=>item.id==req.params.id)
    restaurants.splice(index, 1)
    res.status(200).json({
        message:"Restaurant data has been deleted successfully",
        list:restaurants
    })
}