/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import store from './store/configureStore';
import { Provider } from 'react-redux';


import { Navigation } from './navigation';
import NavigationService from './utils/navigationService';

const App = () => {
  return (

    <Provider store={store}>
      <Navigation
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};


export default App;
