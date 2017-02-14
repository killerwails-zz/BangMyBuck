import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import BangForMyBuck from './reducers';
import App from './App';
import './index.css';
import postcodeSaga from './sagas/GeocodePostcode';
import geoProductsSaga from './sagas/GeoProductSearch';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  BangForMyBuck,
  applyMiddleware(sagaMiddleware)
  );

sagaMiddleware.run(postcodeSaga);
sagaMiddleware.run(geoProductsSaga);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider> 
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
