import React, { Component } from 'react';
import { TableRow, TableRowColumn, Avatar } from 'material-ui';

export default class RetailerInfo extends Component {
  render() {
    let { retailer } = this.props;
    return (
          <TableRow>
            <TableRowColumn><Avatar src={retailer.logo} size={107} /></TableRowColumn>
            <TableRowColumn>{retailer.name}</TableRowColumn>
            <TableRowColumn>{retailer.address}</TableRowColumn>
            <TableRowColumn>Distance: {retailer.distance}</TableRowColumn>
          </TableRow>
    );
  }
};

 

