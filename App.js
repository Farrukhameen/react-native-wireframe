import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import configureStore from './App/Redux/Store';
import Root from './App/Screens/Root';

const {store} = configureStore({});

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <Root />
    </SafeAreaProvider>
  </Provider>
);

export default App;
