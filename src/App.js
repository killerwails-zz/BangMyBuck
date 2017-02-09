import React, { Component } from 'react';

import './App.css';
import AvailabilityTable from './components/AvailabilityTable';
import ProductInfo from './components/ProductInfo';
import SearchFormContainer from './containers/SearchFormContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <SearchFormContainer />
        </div>
        <div>
          <ProductInfo />
          <AvailabilityTable />
        </div>
      </div>
    );
  }
};


