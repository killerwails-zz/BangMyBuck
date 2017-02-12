import { call, put, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';

import geoProducts from '../endpoints/geolocatedProducts';

function avgTHC (thcRange) {
  return _.sum(thcRange) / thcRange.length;
}

function filterAndSort (retailersAndProducts) {
  return _.reverse( 
    _.sortBy(
    _.filter(
    _.reduce(
      retailersAndProducts, (memo, curr) => { return [...memo, ...curr.products]; },[]
    ),
      p => p.price < 50 && _.includes(["Pre-Rolls","Flowers"], p.category )
    ),
    p => avgTHC(p.thc_range)
    )
  );
} 

function* fetchGeoProducts(action) {
  try {
    const retailersAndProducts =  yield call(geoProducts, action.location);
    const retailersInRange = _.filter(retailersAndProducts, r => r.distance <= 20 );
    const products = filterAndSort(retailersAndProducts);
    yield put ({ type: "GEOPRODUCT_SEARCH_SUCCESSFUL", retailersAndProducts: retailersInRange, products: products });
  } catch (e){
    yield put ({ type: "FETCH_GEOPRODUCT_FAILED", message: e.message});
  }
};

export default function* geoProductsSaga() {
  yield takeEvery("FETCH_LOCATION_SUCCESSFUL", fetchGeoProducts);
};
