import React, { Component } from 'react';
import './App.css';
import AvailabilityTable from './components/AvailabilityTable'
import ProductInfo from './components/ProductInfo'
import SearchForm from './components/SearchForm'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <SearchForm />
        </div>
        <div>
          <ProductInfo />
          <AvailabilityTable />
        </div>
      </div>
    );
  }
};


