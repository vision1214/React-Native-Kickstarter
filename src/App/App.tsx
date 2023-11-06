import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import withSafeArea from '../hocs/withSafeAreaContext';
import {Navigation} from '../navigation';
import Screen from '../screens';
import store from '../store/store';
import Strings from '../strings/en';
import useInternetConnectivity from '../utility/hooks/useInternetConnectivity';

/**
 *
 * Entry point component of app
 */
const App = () => {
  const isInternetConnected = useInternetConnectivity();

  useEffect(() => {});
  return (
    <Provider store={store}>
      {isInternetConnected ? (
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      ) : (
        <Screen.ErrorScreen errorText={Strings.errors.networkError} />
      )}
    </Provider>
  );
};
export default withSafeArea(App);
