import { call, put, takeEvery } from 'redux-saga/effects';

import encodePostcode from '../endpoints/googleMaps'

function* fetchPostcode(action) {
  try {
    const location = yield call(encodePostcode, action.postcode);
    yield put ({ type: "FETCH_LOCATION_SUCCESSFUL", location, money: action.money });
  } catch (error) {
    yield put ({ type: "FETCH_LOCATION_FAILED", message: error.message});
  }
};


export default function* postcodeSaga() {
  yield takeEvery("SEARCH_REQUESTED", fetchPostcode);
};
