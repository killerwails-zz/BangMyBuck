import React, { Component } from 'react';


export default class SearchForm extends Component {
  render () {
    return (
      <div>
        <input 
          type="number" 
          min="0.01" 
          step="0.01" 
          max="100" 
          value="50.00" 
          name="money"
        />
        <input 
          type="text" 
          pattern="\d{5}"
          name="postcode"
          value={this.props.postcode}
          onChange={this.props.handlePostcodeChange}
        />
        <button>Bang My Buck</button>
      </div>
    );
  }
};
