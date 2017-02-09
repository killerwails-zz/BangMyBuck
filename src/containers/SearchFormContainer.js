import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import { updatePostcode } from '../actions';

const mapStateToProps = (state) => {
  return {
    postcode: state.search.postcode
  };
};
const mapDispatchToProps = (dispatch) => {
  return{
    handlePostcodeChange: (e) => {
      dispatch(updatePostcode(e.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

