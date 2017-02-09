import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import BangForMyBuck from './reducers';
import App from './App';
import './index.css';
import { ProductSearch } from './sagas/ProductSearch';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  BangForMyBuck,
  applyMiddleware(sagaMiddleware)
  );

sagaMiddleware.run(ProductSearch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
