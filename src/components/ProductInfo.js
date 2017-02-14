import React, { Component } from 'react';

import RetailerInfo from './RetailerInfo';

export default class ProductInfo extends Component {
  render() {
    let { product } = this.props;
    const retailers = this.props.retailers;
    return (
      <div>
        <div id="productCell">
          <p>{product.name}</p>
          <p><img src={product.picture} /></p>
          <p>{product.category}</p>
          <p>Price:{product.price}</p>
        </div>
        <div>
          <ul>
          {retailers.map((retailer) =>
            <RetailerInfo key={retailer.id}
                      retailer={retailer}/>
          )}
        </ul>
        </div>
      </div>
    );
  }
};

 
