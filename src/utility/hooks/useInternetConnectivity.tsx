import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const useInternetConnectivity = () => {
  const [isInternetConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Subscribe to the network status changes
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      console.log('Internet Connection status changed: ' + state.isConnected);
      setIsConnected(state.isConnected);
    });

    return () => {
      // Unsubscribe from the network status changes when the component unmounts
      unsubscribe();
    };
  }, []);
  return isInternetConnected;
};

export default useInternetConnectivity;
