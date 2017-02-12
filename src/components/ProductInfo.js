import React, { Component } from 'react';

export default class ProductInfo extends Component {
  render() {
    let { product } = this.props;
    return (
      <div id="cell">
        <p>{product.name}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
      </div>
    );
  }
};

 
