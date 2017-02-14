import React, { Component } from 'react';
import _ from 'lodash';

import { Card, CardHeader, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import { Table, TableBody, TableHeader } from 'material-ui/Table';

import RetailerInfo from './RetailerInfo';

export default class ProductInfo extends Component {
  retailersForProduct(retailerIds) {
    return _.filter(this.props.retailers, (retailer) => { 
      return _.includes(retailerIds, retailer.id)
    })
  }

  render() {
    let { product } = this.props;
    const retailers = this.props.retailers;
    return (
      <Card style={{maxWidth: '50%', margin:'0 auto'}}>
        <CardTitle
          title={product.name}
          subtitle={`${product.category} Price: $${product.price}`}
        />
        <CardMedia>
          <img src={product.picture} />
        </CardMedia>
        <CardText>
          <Table>
            <TableBody>
                {this.retailersForProduct(product.vendor_ids).map((retailer) =>
                  <RetailerInfo key={retailer.id}
                            retailer={retailer}/>
                )}
            </TableBody>
          </Table>
        </CardText>
      </Card>
    );
  }
};

 
