import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

/**
 *
 * @param WrappedComponent
 * @returns Custom Higher Order Component to wrap screens to safe area
 */
const withSafeArea = (WrappedComponent: any) => {
  return (props: any) => {
    return (
      <SafeAreaProvider>
        <WrappedComponent {...props} />
      </SafeAreaProvider>
    );
  };
};

export default withSafeArea;
