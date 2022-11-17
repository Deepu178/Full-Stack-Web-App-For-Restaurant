import React, { Component } from 'react';
import CSS from './index.css';

export default class QuickSearchItem extends Component {
  render() {

    const{name,content,image}=this.props.item;
    return (
        <div className="box" >
          <div className='img'>
        <img className='img-radius' src={require('../../'+image)} alt="img"  height="150px" width="140px" />
        </div>
      <div className="det">
        <div className="head-1">
          <h3 className="">
            {name}
          </h3>
          <p className="con">{content}</p>
        </div>
      </div>
    </div>
    )
  }
}
