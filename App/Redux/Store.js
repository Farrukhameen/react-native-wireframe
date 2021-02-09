import {createStore, applyMiddleware} from '@reduxjs/toolkit';
import {persistStore, autoRehydrate} from 'redux-persist-immutable';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

import createReducer from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares), autoRehydrate()];

  const store = createStore(createReducer(), composeWithDevTools(...enhancers));

  store.runSaga = sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store, {
    whitelist: ['auth', 'menu', 'settings', 'bookings'],
    storage: AsyncStorage,
  });

  // persistor.purge();

  return {store, persistor};
}
