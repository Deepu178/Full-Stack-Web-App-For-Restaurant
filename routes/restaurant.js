


const express=require('express')
 
const restaurantController=require('../controllers/restaurant')




//create router

const router=express.Router()


// router.get('/:name', (req, res)=>{
//     const name=req.params.name
//     res.send('you called get method ' +name)
// })

 router.get('/:name', restaurantController.getRestaurantByName)
router.get('', restaurantController.getAllRestaurants)
 router.post('/filter/:pageNo', restaurantController.getRestaurantsByFilter)
 router.get('/filter/:cityId', restaurantController.getRestaurantBycityID)
 






//Exports statement
module.exports=router;