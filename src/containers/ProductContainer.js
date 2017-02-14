import { connect } from 'react-redux';

import ProductList from '../components/ProductList';
  
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    retailers: state.products.retailers
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(ProductList);
