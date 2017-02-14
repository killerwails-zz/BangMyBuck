import React, { Component } from 'react';

import { RaisedButton, TextField } from 'material-ui';

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
        <TextField
          type="number" 
          min="0.01" 
          step="0.01" 
          max="100" 
          name="money"
          value={this.props.money}
          onChange={this.props.handleMoneyChange} 
        />
        <TextField 
          type="text"
          name="postcode"
          hintText='input postcode'
          value={this.props.postcode}
          onChange={this.props.handlePostcodeChange}
        />
        <RaisedButton 
          backgroundColor='#2B8425' 
          labelColor='white'
          label='Bang My Buck' 
          onClick={this.handleSearch} />
      </div>
    );
  }
};
