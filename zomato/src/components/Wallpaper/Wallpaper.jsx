import React, { Component } from 'react'
import wallpaperImg from '../../Assets/8484.png'
import {Link} from 'react-router-dom';
import CSS from './wallpaper.css';

export default class Wallpaper extends Component {
  //The constructor function  where we initiate the compnent's properties
  //Component's properties are called state
  constructor(){
    //super() is used to call the parent class's constructor function
    super()
    console.log('Wallpaper constructor getting called..')
    this.state={
      locations:[],
      restaurants:[]
    }
  }

  componentDidMount(){
    //call api
    fetch(`http://localhost:7575/location/`, {method:'GET'})
    .then(response=>response.json())
    .then(data=>this.setState({locations:data.locationList}))
  }

  fetchRestaurants=(event)=>{

    console.log(event.target.value)
    fetch(`http://localhost:7575/restaurant/filter/${event.target.value}`, {method:'GET'})
    .then(response=>response.json())
    .then(data=>this.setState({restaurants:data.restaurantList}))
  }



//render() is used to return the html code and it is required
  render() {
  let locationOptions=this.state.locations.length && this.state.locations.map((item)=><option key={item.name} value={item.city_id}>{item.name}</option>)
  
  let restaurantList=this.state.restaurants.length && <ul>{this.state.restaurants.map((item)=>
                                                        <li key={item.name}><Link to={`/details/${item.name}`}>{item.name}</Link></li>)}
                                                        </ul>
  

  return (
      <div className='background'>
          <img src={wallpaperImg} width="100%" height="450px" alt='img' />
    <h2 className='search-heading'>Find the best restaurant, cafes and coffeeshops...</h2>
    <div className='search-bar'>
      <select className="locationDropdown" onChange={this.fetchRestaurants}>
        <option value="0">Select Location...</option> 
        {locationOptions}
      </select>
      <div id='notebooks'>
        <input className="type-restaurant" type="text"  placeholder="Search Restaurant..." />
      {restaurantList}
      </div>
      
      </div>
      </div>
    )
  }
}










