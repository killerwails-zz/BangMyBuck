
export default (state = { postcode: "", money: 50.00 }, action) => {
  switch (action.type){

    case 'UPDATE_POSTCODE':
      return Object.assign({}, state, {
        postcode: action.postcode
      })
    case 'UPDATE_MONEY':
      return Object.assign({}, state, {
        money: action.money
      })
    default:
      return state;
  }
};
