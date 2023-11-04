/**
 *
 * Entry point component of app
 */
import React, {useEffect} from 'react';
import {Navigation} from '../navigation';
import {NavigationContainer} from '@react-navigation/native';
import store from '../store/store';
import {Provider} from 'react-redux';
import useInternetConnectivity from '../utility/hooks/useInternetConnectivity';
import Screen from '../screens';
import withSafeArea from '../hocs/withSafeAreaContext';
const App = () => {
  const isInternetConnected = useInternetConnectivity();

  useEffect(() => {});
  return (
    <Provider store={store}>
      {isInternetConnected ? (
        <NavigationContainer>
          <Navigation></Navigation>
        </NavigationContainer>
      ) : (
        <Screen.NoInternet />
      )}
    </Provider>
  );
};
export default withSafeArea(App);
