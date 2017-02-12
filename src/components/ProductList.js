import React, { Component } from 'react';

import ProductInfo from './ProductInfo';

export default class ProductList extends Component {
  render () {
    const products = this.props.products.products
    return (
      <ul>
        {products.map((product) =>
          <ProductInfo key={product.id}
                    product={product} />
        )}
      </ul>
    );
  }
};
