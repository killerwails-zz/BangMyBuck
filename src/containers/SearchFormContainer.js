import { connect } from 'react-redux';

import SearchForm from '../components/SearchForm';
import { updatePostcode, updateMoney, search } from '../actions';

const mapStateToProps = (state) => {
  return {
    postcode: state.search.postcode,
    money: state.search.money
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handlePostcodeChange: (e) => {
      dispatch(updatePostcode(e.target.value));
    },
    handleMoneyChange: (e) => {
      dispatch(updateMoney(e.target.value));
    },
    handleSearch: (postcode, money) => {
      dispatch(search(postcode, money))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

