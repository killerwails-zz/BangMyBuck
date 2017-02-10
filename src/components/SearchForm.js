import React, { Component } from 'react';


export default class SearchForm extends Component {
  constructor () {
    super();

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch () {
    this.props.handleSearch(this.props.postcode, this.props.money);
  }

  render () {
    return (
      <div>
        <input 
          type="number" 
          min="0.01" 
          step="0.01" 
          max="100" 
          name="money"
          value={this.props.money}
          onChange={this.props.handleMoneyChange} 
        />
        <input 
          type="text" 
          pattern="\d{5}"
          name="postcode"
          value={this.props.postcode}
          onChange={this.props.handlePostcodeChange}
        />
        <button onClick={this.handleSearch}>Bang My Buck</button>
      </div>
    );
  }
};
