import React, { Component } from 'react';

export default class ProductInfo extends Component {
  render() {
    return (
      <div id="cell">
        <p>{this.props.productName}</p>
        <p>{this.props.catagoryBadge}</p>
      </div>
    );
  }
};

 
