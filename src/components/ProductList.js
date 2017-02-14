import React, { Component } from 'react';

import ProductInfo from './ProductInfo';

export default class ProductList extends Component {
  render () {
    const { products, retailers } = this.props;

    return (
      <div>
        <ul>
          {products.map((product) =>{
            return(
              <ProductInfo
                key={product.id}
                product={product} 
                retailers={retailers}
             />
            )
           })}
        </ul>
      </div>
    );
  }
};
