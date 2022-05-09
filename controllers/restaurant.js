const Restaurants=require('../models/restaurant')


exports.getRestaurantBycityID=(req, res)=>{
    const filter={city:req.params.cityId}
    Restaurants.find(filter).then(
      result=>{res.status(200).json({
            message:"get all list of restaurants",
            restaurantList:result
        })
    }
    ).catch(
error=>{
    res.status(500).json({
        message:"error in database",
        error:error
    })
}
    )
}

exports.getAllRestaurants=(req, res)=>{
    Restaurants.find().then(
      result=>{res.status(200).json({
            message:"get all list of restaurants",
            restaurantList:result
        })
    }
    ).catch(
error=>{
    res.status(500).json({
        message:"error in database",
        error:error
    })
}
    )
}






exports.getRestaurantByName=(req, res)=>{
const filter={name:req.params.name}

Restaurants.findOne(filter).then(
    result=>{res.status(200).json({
          message:"get all list of restaurants",
          restaurantList:result
      })
  }
  ).catch(
error=>{
  res.status(500).json({
      message:"error in database",
      error:error
  })
}
  )

}



exports.getRestaurantsByFilter=(req,res)=>{
    const filter={ }

if(req.body.city_id){
    filter.city=req.body.city_id
    console.log('filter: ', filter)
}





if(req.body.cuisine && req.body.cuisine.length>0){
    filter['Cuisine.name']={ $in : req.body.cuisine }
    console.log('filter: ', filter)

    if(req.body.lcost && req.body.hcost){
        if(req.body.locst == 0){
            filter.cost={
                $lte:req.body.locst
            }
        }
        else{
            filter.cost={
                $lt:req.body.hcost,
                $gt:req.body.lcost
            }
        }
        console.log('filter: ', filter)
    }
}
filter.sort =req.body.sort


Restaurants.find(filter).limit(2).skip(5*(req.body.pageNo-1)).sort({"cost":req.body.sort}).then(
    result=>{
        Restaurants.find(filter).count(
            (err, count)=>{
            if(err)
            console.log(err)
            else
        
        res.status(200).json({
          message:"get all list of restaurants",
          restaurantList:result,
          totalRecords:count
        })
      })
  }
  ).catch(
error=>{
  res.status(500).json({
      message:"error in database",
      error:error
  })
}
  )


}