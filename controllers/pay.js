const shortid=require('shortid')
const Razorpay=require('razorpay')
const crypto=require('crypto')
const Transactions=require('../models/transaction')
const transaction = require('../models/transaction')



const razorpay = new Razorpay (
    {
        key_id:"rzp_live_WnJ5l8o82XoIWk",
        key_secret:"w14IqHH0bT6WPLKzikKkg5zL"
    }
)



exports.completePayment= async(req, res)=>{
    console.log("Payment has been initiated")
    const amount=req.body.amount;
    const currency="INR"
    const payment_capture=1
    const options={
        amount:amount*100,
        currency,
        receipt:shortid.generate(),
        payment_capture
    }
   try{
    const response= await razorpay.orders.create(options)
    console.log(response);
    res.json(response)
   }catch(error){
       console.log(error)
   }
  
}


exports.saveTransaction=(req, res)=>{
    console.log('saving transaction')
    const generated_signature=crypto.createHmac('sha256', razorpay.key_id)
    generated_signature.update(req.body.razorpay_order_id+"|"+req.body.transactionid)

    if(generated_signature.digest('hex')==req.body.razorpay_signature){
        new  Transaction({
            transactionid:req.body.transactionid,
            transactionAmount:req.body.transactionamount
        })
        transaction.save((err, savedT)=>{
            if(err)
            return res.status(500).send("some problem occured")
            res.send({transaction:savedT})
        })
    }
    else{
        return res.send('failed')
    }
}