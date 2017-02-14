import React, { Component } from 'react';

export default class RetailerInfo extends Component {
  render() {
    let { retailer } = this.props;
    return (
      <div>
        <div id="retailerCell">
          <p>{retailer.name}</p>
          <p><img src={retailer.logo} /></p>
          <p>{retailer.address}</p>
          <p>Distance:{retailer.distance}</p>
        </div>
      </div>
    );
  }
};

 
