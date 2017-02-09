import { combineReducers } from 'redux';

export default combineReducers({
  search: (state = { postcode: "", money: 50.00 }, action) => {
    switch (action.type){

      case 'UPDATE_POSTCODE':
        return Object.assign({}, state, {
          postcode: action.postcode
        })
      default:
        return state;
    }
  }

});
