const express=require('express')
 
const payController=require('../controllers/pay')



//create router

const router=express.Router()



router.post('', payController.completePayment)
router.post('/save',payController.saveTransaction)



module.exports=router;