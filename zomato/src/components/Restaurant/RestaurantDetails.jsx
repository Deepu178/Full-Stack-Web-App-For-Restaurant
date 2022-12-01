import React, {useState, useEffect} from 'react'
import Logobar from '../Logobar/Logobar';
import breakfast from '../../Assets/breakfast.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { resolvePath, useParams } from 'react-router-dom';
import Modal from 'react-modal';
import CSS from './index.css';


Modal.setAppElement('#root')

export default function RestaurantDetails() {
  const{rName}=useParams()
  
  const [restaurant, setRestaurant] = useState({})
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
  const [menu, setMenu] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(()=>{
    fetch(`http://localhost:8000/restaurant/${rName}`, {method:'GET'})
    .then(response=>response.json())
    .then(data=>{
      setRestaurant(data.restaurantList); })

  }, []) 
  const fetchMenu=()=>{
    fetch(`http://localhost:8000/menu/${rName}`, {method:'GET'})
    .then(response=>response.json())
    .then(data=>{
      setMenu(data.menu); console.log(menu) })
      
  }

  const addItem=(p)=>{
   let price = totalPrice + p;
    setTotalPrice(price)
    console.log(totalPrice)
  }

  const loadScript=(src)=>{
    return new Promise(()=>{

      const script=document.createElement("script")
      script.src=src;
      script.onload=()=>{
        resolvePath(true)
      }
      script.onerror=()=>{
        resolvePath(false)
      };
      document.body.appendChild(script)
    })
  }
  
  const openRazorpay = async()=>{
  let data;
   data= await fetch('http://localhost:8000/pay',{

    method:'POST',
    headers:{"content-Type":'application/json'},
    body:JSON.stringify({amount:totalPrice})
      }).then((t)=>t.json())
    const options={
      key:'rzp_live_WnJ5l8o82XoIWk',
      amount:data.amount,
      currency:data.currency,
      name:"zomato-Food Delivery",
      description:"online-transaction",
      order_id:data.id,
      handler:function(response){
        console.log(response)
      var values={
        razorpay_signature:response.razorpay_signature,
        razorpay_order_id:response.razorpay_order_id,
        transactionid:response.razorpay_payment_id,
        transactionamount:data.amount
      }
      fetch('http://localhost:8000/pay/save',{
        method:'POST',
        headers:{'content-Type':'application/json'},
        body:JSON.stringify(values)
      }).then(e=>console.log("error",e))
      }
    }

  const paymentWindow =  new window.Razorpay(options);
  paymentWindow.open()
  }


  const{name, thumb, cost, address, Cuisine}=restaurant
  const CuisineList=(Cuisine!==undefined) && Cuisine.length && Cuisine.map((item)=><span className='value' key={item.name}>{item.name} </span>)
  return (
    <div>
        <Logobar/>
        <center>
            <img className='img-details' src={thumb} height="400px" width="80%" alt="img" />
        </center>
        {/* <button className='gallery-button'>Click to see image gallery</button> */}
        <button id="order-btn"
        onClick={()=>{
          setIsMenuModalOpen(true);
          fetchMenu();
          }}  >See Menu Items</button>
        <div className='heading'>{name}</div>
        <br/>
        <br/>
        <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Content</Tab>
    </TabList>

    <TabPanel >
      <div className='about'>About this place</div>
      <div className='head'>Cuisine</div>
      <div className='value'>{CuisineList}</div>
      <div className='head'>Average Cost</div>
      <div className='value'>&#8377; {cost}</div>
    </TabPanel>
    <TabPanel>
      <div className='head'>Phone Number</div>
      <div className='value'>+9190256388299</div>
      x
      <div className='head'> {name}</div>
      <div className='value'>{address}</div>
    </TabPanel>
  </Tabs>
  
  <Modal className="menuModal"  isOpen={isMenuModalOpen}>
    <h2>Menu</h2>
    <button className='close' onClick={()=>setIsMenuModalOpen(false)}>x</button>
    <ul>
      {
        menu.length && menu.map((item, index)=><li key={item._id}>

       <div className='col-10'>
       <span>
         {
           item.isVeg ?  "veg" :"Nonveg"
                   }
       </span>
       <div>{item.itemName}</div>
       <div>{item.itemDescription}</div>
       <div>{item.itemPrice}</div>
       
       </div>
       <button className='btn btn-secondary' onClick={()=>addItem(item.itemPrice)}>Add</button>
       <hr/>


        </li>)


        
      }
    </ul>
    <hr/>
    <h3>Total price: {totalPrice}
    <button className='btn btn-danger btns' onClick={()=>{loadScript('https://checkout.razorpay.com/v1/checkout.js'); openRazorpay()}}>   Pay Now</button></h3>
  </Modal>
    </div>
    
  )
}
