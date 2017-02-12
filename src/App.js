import React, { Component } from 'react';

import './App.css';
import AvailabilityTable from './components/AvailabilityTable';
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
          <AvailabilityTable />
        </div>
      </div>
    );
  }
};


