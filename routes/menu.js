const express=require('express')
 
const menuController=require('../controllers/menu')



//create router

const router=express.Router()



router.get('/:rName', menuController.getMenuByRestaurantName)




module.exports=router;