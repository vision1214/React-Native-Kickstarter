import NetInfo from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';

/**
 * This is a custom hook which listens to the internet connection status change
 * @returns Internet connection status(boolean)
 */
const useInternetConnectivity = () => {
  const [isInternetConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Subscribe to the network status changes
    const unsubscribe = NetInfo.addEventListener((state: any) => {
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
