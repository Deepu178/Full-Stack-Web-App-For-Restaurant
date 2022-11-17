import React, {useState, useEffect} from 'react'

import Logobar from '../Logobar/Logobar';
import Modal from 'react-modal';
import CSS from './filter.css';
// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



export default function Filter() {
    const [restaurantsList, setRestaurantsList] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPageNo, setCurrentPageNo] = useState(1)
    const [locationList, setLocationList] = useState([]) 

    const [filter, setFilter] = useState({
        city_id:'', 
        cuisine:[],
        lcost:'',
        hcost:'',
        sort:1
    })

    const requestOptions={
        method:'POST', 
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(filter)

    }

   useEffect(() => {
     
    
    fetch(`http://localhost:7575/restaurant/filter/${currentPageNo}`, requestOptions)
        .then(response=>response.json())
        .then(data=>{
        setRestaurantsList(data.restaurantList);
        setPageCount(data.totalRecords/2)
        
         })

      }, [filter, currentPageNo])
   




  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)


  useEffect(()=>{
    fetch(`http://localhost:7575/location/${locationList}`, requestOptions)
    .then(response=>response.json())
    .then(data=>{
        setLocationList(data.locationList);

    })
  }, [filter, locationList])



  const handleCuisineChange=(event)=>{
      if(event.target.checked){
          filter.cuisine.push(event.target.name)
      }else{
          let index= filter.cuisine.indexOf(event.target.name)
          if(index > -1)
          filter.cuisine.splice(index, 1)
      }
      setFilter({...filter})
      console.log(filter)
  }

  const handleCostChange=(lcost, hcost)=>{
filter.lcost=lcost;
filter.hcost=hcost;
setFilter({...filter})
console.log(filter)
  }


  const handleSortChange=(sort)=>{
      filter.sort=sort;
      setFilter({...filter})
      console.log(filter)
  }

  const PaginationItems=[];
  for(let i = 1; i<=pageCount; i++){
  PaginationItems[i]=<a href="# " key={i} onClick={()=>setCurrentPageNo(i)}>{i}</a>
  }

  return (
    <div>
    
      <div className="header">
        <div className="logo-background">
            <span className="logo">R! </span>
        </div>
        <div>
        <button className="login" onClick={()=>setIsLoginModalOpen(true)}>Login</button >
        <button className="create" onClick={()=>setIsLoginModalOpen(true)}>Create an account</button>
    </div>
    <Modal isOpen={isLoginModalOpen} style={customStyles}>
      <div>
        <h3 id='login-heading'>Login
      <button onClick={()=>setIsLoginModalOpen(false)}  className=" close">x</button>
      </h3>
      <form>
        <fieldset>
          <input type={'email'} placeholder='Enter your Email' max={15} min={5} />
          <br/>
          <br/>
          <input type="password" placeholder='Enter your password here' />
          <br/>
          <br/>
          <button id='login-btn'>Login</button>
        </fieldset>
      </form>
      {/* <div>
        <FacebookLogin
        appId="1124482858371534"
        autoLoad={true}
        fields="name,email,picture"
        textButton='Continue with facebook'
        cssClass='btn btn-primary'
        />
      </div> */}
      {/* <div>
      <GoogleLogin
    clientId="977464933844-86ub2807vaipnhklrtm8e0vn9ko8s78h.apps.googleusercontent.com"
    buttonText="Login"
    // onSuccess={responseGoogle}
    // onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'} cssClass="btn btn-primary"
  />
      </div> */}
      </div>
    </Modal>
            {/* <button className="login">Login</button>
            <button className="create">Create</button> */}
        
    
    <div className="heading">Breakfast Places in Kanpur</div>
    <div  className="small" >
    <div className="filter-options">
        <div className="filter-heading">Filters</div>
        <div className="select-location">Select Location</div>
        <select className="select">
            
            
        </select>
        <div className="cuisine">Cuisine</div>
        <div>
            <input type="checkbox" name="North Indian" onChange={(e)=>handleCuisineChange(e)} />
            <span className="cuisine-items">North Indian</span>
        </div>
        <div>
            <input type="checkbox" name="South Indian"  onChange={(e)=>handleCuisineChange(e)}/>
            <span className="cuisine-items">South Indian</span>
        </div>
        <div>
            <input type="checkbox" name="chinese"  onChange={(e)=>handleCuisineChange(e)}/>
            <span className="cuisine-items">Chinese</span>
        </div>
        <div>
            <input type="checkbox" name="Fast Food"  onChange={(e)=>handleCuisineChange(e)}/>
            <span className="cuisine-items">Fast Food</span>
        </div>
        <div>
            <input type="checkbox" name="street food"  onChange={(e)=>handleCuisineChange(e)}/>
            <span className="cuisine-items">Street Food</span>
        </div>
        <br/>
        <div className="cuisine">Cost For Two</div>
        <div>
            <input type="radio" name="price" onChange={()=>handleCostChange(1,500)}/>
            <span className="cuisine-items">Less than ₹500</span>
        </div>
        <div>
            <input type="radio" name="price" onChange={()=>handleCostChange(500,1000)} />
            <span className="cuisine-items">₹500 to ₹1000</span>
        </div>
        <div>
            <input type="radio" name="price" onChange={()=>handleCostChange(1000,1500)} />
            <span className="cuisine-items">₹1000 to ₹1500</span>
        </div>
        <div>
            <input type="radio" name="price" onChange={()=>handleCostChange(1500,2000)} />
            <span className="cuisine-items">₹1500 to ₹2000</span>
        </div>
        <div>
            <input type="radio" name="price" onChange={()=>handleCostChange(2000,10000)} />
            <span className="cuisine-items">₹2000+</span>
        </div>
        <div>
            <input type="radio" name="price" onChange={()=>handleCostChange(1,10000)} />
            <span className="cuisine-items">All</span>
        </div>
        <div className="cuisine">Sort</div>
        <div>
            <input type="radio" name="sort" onChange={()=>handleSortChange(1)}/>
            <span className="cuisine-items">Price low to high</span>
        </div>
        <div>
            <input type="radio" name="sort" onChange={()=>handleSortChange(-1)} />
            <span className="cuisine-items">Prices high to low</span>
        </div>
    </div>
    </div>
    <div className="big vertical">
    
    {
        restaurantsList.length >0 ? restaurantsList.map((item)=>
        
        <div className="Item" key={item.name}>
            
        
    <div className="small-item vertical">
        <img className="img" src={require('../../Assets/snacks.png')}/>
    </div>
    <div className="big-item">
    <div className="rest-name">{item.name}</div>
    <div className="rest-location">{item.locality}</div>
    <div className="rest-address">{item.city_name}</div>
        </div>
    
    <hr/>
    
        <div className="margin-left">
    <div className="bakery">Cuisines: </div>
    <div className="bakery">COST FOR TWO : {item.cost}</div>
    </div>
    </div>
    
        ):
        
        
 <div>No data found </div>

}
</div>
</div>
    
    <div>
<div className="pagination">
    <a href="#"> {'<<'} </a>
    {PaginationItems}
    <a href="#">  {'>>'} </a>
    </div>
    </div>
    </div>
    
    
    )
}
