import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
  
const mapStateToProps = (state) => {
  return {
    retailersAndProducts: state.retailersAndProducts,
    products: state.products
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(ProductList);
