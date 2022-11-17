import React, { Component } from 'react';
//const brandName = "Ferrari";

export default class Class extends Component {
    constructor(props){
        super(props);
        this.state={
            brand:'Lambo',
            model:'Aventador',
            color:'Red'
        }
    }

    shouldComponentUpdate(){
      return true;
    }

    changeBrand=()=>{
        this.setState({
            brand:'BMW'
        })
    } 
    
      //  static getDerivedStateFromProps(props, state) {   
      //   return {brand:brandName};
      //  }
      // componentDidMount(){
      //   setTimeout(()=>{
      //     this.setState({
      //       brand:'BMW'
      //     })
      //   }, 3000)
      // }

  render() {
    
    return (
      <div>
        <h2>{this.state.brand}</h2>
        <h2>{this.state.model}</h2>
        <h3>{this.state.color}</h3>
        <button onClick={this.changeBrand}>Change brand {this.state.brand}</button>
      </div>
    )
  }
}

//Lifecycle of Components 
//1. Mounting - Mounting means putting elements into the DOM.
//2. Updating - A component is updated whenever there is a change in the component's state or props.
//3. Unmounting - The final phase of the lifecycle if called when a component is being removed from the DOM.

