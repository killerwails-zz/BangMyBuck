
export default (state = { retailersAndProducts: [], products: []}, action) => {
  switch (action.type){
    case 'GEOPRODUCT_SEARCH_SUCCESSFUL':
      return Object.assign({}, state, {
        retailersAndProducts: action.retailersAndProducts,
        products: action.products
      });
    default:
      return state;
    }
};
