import React, { Component } from 'react'
import QuickSearchItem from './Quicksearchitem';
import CSS from './index.css';

export default class QuickSearch extends Component {
  constructor(){
    super()
    this.state={
      mealtypes:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:8000/mealtypes', {method:'GET'})
  .then(response=>response.json())
  .then(data=>this.setState({mealtypes:data.mealtypes}))
}

  render() {
    let quickSearchList= this.state.mealtypes.length && this.state.mealtypes.map((item)=><QuickSearchItem key={item.name} item={item}></QuickSearchItem>)
    return (
      <div>
        <div className='quickSearch'>Quick Searches</div>
    <div className="discover" >Discover restaurants by type of meal</div>
    <div className="" >
      <div className="">   
      {quickSearchList}
      </div>
  </div>
</div>
      
    )
  }
}
