import { put } from 'redux-saga/effects';

import { fetchRetailers } from '../endpoints/retailers';

export function* RetailerSearch() {
  try {
    const retailers = yield fetchRetailers();
    console.log(retailers);
  } catch (error) {
    yield put({type: "FETCH_FAILED", error});
  };
};
