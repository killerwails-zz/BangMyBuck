import React, { Component } from 'react';

import './App.css';
import ProductContainer from './containers/ProductContainer';
import SearchFormContainer from './containers/SearchFormContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <SearchFormContainer />
        </div>
        <div>
          <ProductContainer />
        </div>
      </div>
    );
  }
};


