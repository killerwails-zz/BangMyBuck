import React, { Component } from 'react';

import AvailablityRow from './AvailabilityRow.js'

export default class AvailabiltyTable extends Component {
  render () {
    return(
      <AvailablityRow />
      //passing in props into this^^ to render below
    );
  }
};

