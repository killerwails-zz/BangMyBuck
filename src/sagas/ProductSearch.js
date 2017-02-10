import { put } from 'redux-saga/effects';

import { fetchProducts } from '../endpoints/vendors';

export function* ProductSearch() {
  try {
    const products = yield fetchProducts();
    console.log(products)
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error});
  };
};
