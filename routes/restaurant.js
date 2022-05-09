// const express=require('express')



// const coachinController=require('../controllers/restaurant')


// const router = express.Router()


// router.get('', coachinController.getAllCoachings)
// //configure route



// // router.get('/:name', coachinController.getAllCoachingsByName)
// // router.get('/:name', coachinController.getAllCoachingsByName)

// // router.get('/:name', coachinController.getAllCoachingsByName)
// router.get('/:name', coachinController.getAllCoachingsByName)

// // router.post('', coachinController.addRestaurant)
// // router.post('', coachinController.addRestaurants)

// // router.post('', coachinController.addRestaurants)

// router.post('', coachinController.addRestaurants)

// router.put('', coachinController.updateRestaurants)
// // router.put('', coachinController.updateRestaurants)



// // router.delete('', (req, res)=>{
// //     res.status(200).send('you called restaurant delete method')
// // })
// router.delete('', coachinController.deleteRestaurants)


// module.exports=router;



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
 


// // router.get('/:name', restaurantController.getAllRestaurantsByName)
// router.get('/:name', restaurantController.getAllRestaurantsByName)


// router.get('', (req, res)=>{
//     res.send('you called get method')
// })

// router.get('', (req, res)=>{
//     res.send('you called get method')
// })

// router.post('', restaurantController.addRestaurant)

// // router.post('', (req, res)=>{
// //     res.send('you called post method')
// // })

// router.put('', restaurantController.updateRestaurant)

// // router.put('', (req, res)=>{
// //     res.send('you called put method')
// // })

// router.delete('', restaurantController.deleteRestaurant)


// router.delete('', (req, res)=>{
//     res.send('you called delete method')
// })





//Exports statement
module.exports=router;